/** ******************************************************************************
 * (c) 2018 - 2022 Zondax AG
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 ******************************************************************************* */

import Zemu from '@zondax/zemu'
import { newSubstrateApp } from '@zondax/ledger-substrate'
import { defaultOptions, models } from './common'
import {
  txBalances_forceTransfer,
  txBalances_forceUnreserve,
  txBalances_setBalance,
  txBalances_transfer,
  txBalances_transferAll,
  txBalances_transferKeepAlive,
} from './zemu_blobs'

// @ts-ignore
import ed25519 from 'ed25519-supercop'
// @ts-ignore
import { blake2bFinal, blake2bInit, blake2bUpdate } from 'blakejs'

jest.setTimeout(180000)

const TXNS = [
  {
    name: 'balances_transfer',
    blob: txBalances_transfer,
  },
  {
    name: 'balances_transferAll',
    blob: txBalances_transferAll,
  },
  {
    name: 'balances_transferKeepAlive',
    blob: txBalances_transferKeepAlive,
  },
  {
    name: 'balances_forceTransfer',
    blob: txBalances_forceTransfer,
  },
  {
    name: 'balances_forceUnreserve',
    blob: txBalances_forceUnreserve,
  },
  {
    name: 'balances_setBalance',
    blob: txBalances_setBalance,
  },
]

describe.each(TXNS)('Transactions', function (data) {
  test.concurrent.each(models)(`Test: ${data.name}`, async function (m) {
    const sim = new Zemu(m.path)
    try {
      await sim.start({ ...defaultOptions, model: m.name })
      const app = newSubstrateApp(sim.getTransport(), 'Picasso')
      const pathAccount = 0x80000000
      const pathChange = 0x80000000
      const pathIndex = 0x80000000

      const txBlob = Buffer.from(data.blob, 'hex')

      const responseAddr = await app.getAddress(pathAccount, pathChange, pathIndex)
      const pubKey = Buffer.from(responseAddr.pubKey, 'hex')

      // do not wait here.. we need to navigate
      const signatureRequest = app.sign(pathAccount, pathChange, pathIndex, txBlob)
      // Wait until we are not in the main menu
      await sim.waitUntilScreenIsNot(sim.getMainMenuSnapshot())
      await sim.compareSnapshotsAndApprove('.', `${m.prefix.toLowerCase()}-${data.name}`)

      const signatureResponse = await signatureRequest
      console.log(signatureResponse)

      expect(signatureResponse.return_code).toEqual(0x9000)
      expect(signatureResponse.error_message).toEqual('No errors')

      // Now verify the signature
      let prehash = txBlob
      if (txBlob.length > 256) {
        const context = blake2bInit(32)
        blake2bUpdate(context, txBlob)
        prehash = Buffer.from(blake2bFinal(context))
      }
      const valid = ed25519.verify(signatureResponse.signature.subarray(1), prehash, pubKey)
      expect(valid).toEqual(true)
    } finally {
      await sim.close()
    }
  })
})
