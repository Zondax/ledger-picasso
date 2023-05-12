# Picasso 1.10020.x

## System

| Name                    | Nano S | Nano S XL | Nano SP/X | Nesting | Arguments                         |
| ----------------------- | ------ | --------- | --------- | ------- | --------------------------------- |
| Remark                  |        |           |           |         | `Bytes`remark<br/>                |
| Set heap pages          |        |           |           |         | `u64`pages<br/>                   |
| Set code                |        |           |           |         | `Vecu8`code<br/>                  |
| Set code without checks |        |           |           |         | `Vecu8`code<br/>                  |
| Set storage             |        |           |           |         | `VecKeyValue`items<br/>           |
| Kill storage            |        |           |           |         | `VecKey`keys<br/>                 |
| Kill prefix             |        |           |           |         | `Key`prefix<br/>`u32`subkeys<br/> |
| Remark with event       |        |           |           |         | `Bytes`remark<br/>                |

## Timestamp

| Name | Nano S | Nano S XL | Nano SP/X | Nesting | Arguments            |
| ---- | ------ | --------- | --------- | ------- | -------------------- |
| Set  |        |           |           |         | `Compactu64`now<br/> |

## Sudo

| Name                  | Nano S | Nano S XL | Nano SP/X | Nesting | Arguments                                   |
| --------------------- | ------ | --------- | --------- | ------- | ------------------------------------------- |
| Sudo                  |        |           |           |         | `Call`call<br/>                             |
| Sudo unchecked weight |        |           |           |         | `Call`call<br/>`Weight`weight<br/>          |
| Set key               |        |           |           |         | `AccountIdLookupOfT`new\_<br/>              |
| Sudo as               |        |           |           |         | `AccountIdLookupOfT`who<br/>`Call`call<br/> |

## AssetTxPayment

| Name              | Nano S | Nano S XL | Nano SP/X | Nesting | Arguments                                                  |
| ----------------- | ------ | --------- | --------- | ------- | ---------------------------------------------------------- |
| Set payment asset |        |           |           |         | `AccountId`payer<br/>`OptionChargeAssetIdOfT`asset_id<br/> |

## Indices

| Name           | Nano S | Nano S XL | Nano SP/X | Nesting | Arguments                                                               |
| -------------- | ------ | --------- | --------- | ------- | ----------------------------------------------------------------------- |
| Claim          |        |           |           |         | `AccountIndex`index<br/>                                                |
| Transfer       |        |           |           |         | `AccountIdLookupOfT`new\_<br/>`AccountIndex`index<br/>                  |
| Free           |        |           |           |         | `AccountIndex`index<br/>                                                |
| Force transfer |        |           |           |         | `AccountIdLookupOfT`new\_<br/>`AccountIndex`index<br/>`bool`freeze<br/> |
| Freeze         |        |           |           |         | `AccountIndex`index<br/>                                                |

## Balances

| Name                | Nano S             | Nano S XL          | Nano SP/X          | Nesting            | Arguments                                                                                  |
| ------------------- | ------------------ | ------------------ | ------------------ | ------------------ | ------------------------------------------------------------------------------------------ |
| Transfer            | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | `AccountIdLookupOfT`dest<br/>`CompactBalance`amount<br/>                                   |
| Set balance         |                    | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | `AccountIdLookupOfT`who<br/>`CompactBalance`new_free<br/>`CompactBalance`new_reserved<br/> |
| Force transfer      | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | `AccountIdLookupOfT`source<br/>`AccountIdLookupOfT`dest<br/>`CompactBalance`amount<br/>    |
| Transfer keep alive | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: | `AccountIdLookupOfT`dest<br/>`CompactBalance`amount<br/>                                   |
| Transfer all        | :heavy_check_mark: | :heavy_check_mark: | :heavy_check_mark: |                    | `AccountIdLookupOfT`dest<br/>`bool`keep_alive<br/>                                         |
| Force unreserve     |                    | :heavy_check_mark: | :heavy_check_mark: |                    | `AccountIdLookupOfT`who<br/>`Balance`amount<br/>                                           |

## Identity

| Name              | Nano S | Nano S XL | Nano SP/X | Nesting | Arguments                                                                                                       |
| ----------------- | ------ | --------- | --------- | ------- | --------------------------------------------------------------------------------------------------------------- |
| Add registrar     |        |           |           |         | `AccountIdLookupOfT`account<br/>                                                                                |
| Set identity      |        |           |           |         | `IdentityInfo`info<br/>                                                                                         |
| Set subs          |        |           |           |         | `VecTupleAccountIdData`subs<br/>                                                                                |
| Clear identity    |        |           |           |         |                                                                                                                 |
| Request judgement |        |           |           |         | `Compactu32`reg_index<br/>`Compactu128`max_fee<br/>                                                             |
| Cancel request    |        |           |           |         | `RegistrarIndex`reg_index<br/>                                                                                  |
| Set fee           |        |           |           |         | `Compactu32`index<br/>`Compactu128`fee<br/>                                                                     |
| Set account id    |        |           |           |         | `Compactu32`index<br/>`AccountIdLookupOfT`new\_<br/>                                                            |
| Set fields        |        |           |           |         | `Compactu32`index<br/>`IdentityFields`fields<br/>                                                               |
| Provide judgement |        |           |           |         | `Compactu32`reg_index<br/>`AccountIdLookupOfT`target<br/>`JudgementBalanceOfT`judgement<br/>`Hash`identity<br/> |
| Kill identity     |        |           |           |         | `AccountIdLookupOfT`target<br/>                                                                                 |
| Add sub           |        |           |           |         | `AccountIdLookupOfT`sub<br/>`Data`data<br/>                                                                     |
| Rename sub        |        |           |           |         | `AccountIdLookupOfT`sub<br/>`Data`data<br/>                                                                     |
| Remove sub        |        |           |           |         | `AccountIdLookupOfT`sub<br/>                                                                                    |
| Quit sub          |        |           |           |         |                                                                                                                 |

## Multisig

| Name                 | Nano S | Nano S XL | Nano SP/X | Nesting | Arguments                                                                                                                               |
| -------------------- | ------ | --------- | --------- | ------- | --------------------------------------------------------------------------------------------------------------------------------------- |
| As multi threshold 1 |        |           |           |         | `VecAccountId`other_signatories<br/>`Call`call<br/>                                                                                     |
| As multi             |        |           |           |         | `u16`threshold<br/>`VecAccountId`other_signatories<br/>`OptionTimepoint`maybe_timepoint<br/>`Call`call<br/>`Weight`max_weight<br/>      |
| Approve as multi     |        |           |           |         | `u16`threshold<br/>`VecAccountId`other_signatories<br/>`OptionTimepoint`maybe_timepoint<br/>`H256`call_hash<br/>`Weight`max_weight<br/> |
| Cancel as multi      |        |           |           |         | `u16`threshold<br/>`VecAccountId`other_signatories<br/>`Timepoint`timepoint<br/>`H256`call_hash<br/>                                    |

## ParachainSystem

| Name                     | Nano S | Nano S XL | Nano SP/X | Nesting | Arguments                        |
| ------------------------ | ------ | --------- | --------- | ------- | -------------------------------- |
| Set validation data      |        |           |           |         | `ParachainInherentData`data<br/> |
| Sudo send upward message |        |           |           |         | `UpwardMessage`message<br/>      |
| Authorize upgrade        |        |           |           |         | `Hash`code_hash<br/>             |
| Enact authorized upgrade |        |           |           |         | `Vecu8`code<br/>                 |

## ParachainInfo

| Name | Nano S | Nano S XL | Nano SP/X | Nesting | Arguments |
| ---- | ------ | --------- | --------- | ------- | --------- |

## CollatorSelection

| Name                   | Nano S | Nano S XL | Nano SP/X | Nesting | Arguments                |
| ---------------------- | ------ | --------- | --------- | ------- | ------------------------ |
| Set invulnerables      |        |           |           |         | `VecAccountId`new\_<br/> |
| Set desired candidates |        |           |           |         | `u32`max<br/>            |
| Set candidacy bond     |        |           |           |         | `Balance`bond<br/>       |
| Register as candidate  |        |           |           |         |                          |
| Leave intent           |        |           |           |         |                          |

## Session

| Name       | Nano S | Nano S XL | Nano SP/X | Nesting | Arguments                        |
| ---------- | ------ | --------- | --------- | ------- | -------------------------------- |
| Set keys   |        |           |           |         | `Keys`keys<br/>`Bytes`proof<br/> |
| Purge keys |        |           |           |         |                                  |

## Council

| Name                | Nano S | Nano S XL | Nano SP/X | Nesting | Arguments                                                                                                         |
| ------------------- | ------ | --------- | --------- | ------- | ----------------------------------------------------------------------------------------------------------------- |
| Set members         |        |           |           |         | `VecAccountId`new_members<br/>`OptionAccountId`prime<br/>`MemberCount`old_count<br/>                              |
| Execute             |        |           |           |         | `Proposal`proposal<br/>`Compactu32`length_bound<br/>                                                              |
| Propose             |        |           |           |         | `Compactu32`threshold<br/>`Proposal`proposal<br/>`Compactu32`length_bound<br/>                                    |
| Vote                |        |           |           |         | `Hash`proposal<br/>`Compactu32`index<br/>`bool`approve<br/>                                                       |
| Close old weight    |        |           |           |         | `Hash`proposal_hash<br/>`Compactu32`index<br/>`Compactu64`proposal_weight_bound<br/>`Compactu32`length_bound<br/> |
| Disapprove proposal |        |           |           |         | `Hash`proposal_hash<br/>                                                                                          |
| Close               |        |           |           |         | `Hash`proposal_hash<br/>`Compactu32`index<br/>`Weight`proposal_weight_bound<br/>`Compactu32`length_bound<br/>     |

## CouncilMembership

| Name          | Nano S | Nano S XL | Nano SP/X | Nesting | Arguments                                                   |
| ------------- | ------ | --------- | --------- | ------- | ----------------------------------------------------------- |
| Add member    |        |           |           |         | `AccountIdLookupOfT`who<br/>                                |
| Remove member |        |           |           |         | `AccountIdLookupOfT`who<br/>                                |
| Swap member   |        |           |           |         | `AccountIdLookupOfT`remove<br/>`AccountIdLookupOfT`add<br/> |
| Reset members |        |           |           |         | `VecAccountId`members<br/>                                  |
| Change key    |        |           |           |         | `AccountIdLookupOfT`new\_<br/>                              |
| Set prime     |        |           |           |         | `AccountIdLookupOfT`who<br/>                                |
| Clear prime   |        |           |           |         |                                                             |

## Treasury

| Name             | Nano S | Nano S XL | Nano SP/X | Nesting | Arguments                                                       |
| ---------------- | ------ | --------- | --------- | ------- | --------------------------------------------------------------- |
| Propose spend    |        |           |           |         | `CompactBalance`amount<br/>`AccountIdLookupOfT`beneficiary<br/> |
| Reject proposal  |        |           |           |         | `Compactu32`proposal_id<br/>                                    |
| Approve proposal |        |           |           |         | `Compactu32`proposal_id<br/>                                    |
| Spend            |        |           |           |         | `CompactBalance`amount<br/>`AccountIdLookupOfT`beneficiary<br/> |
| Remove approval  |        |           |           |         | `Compactu32`proposal_id<br/>                                    |

## Democracy

| Name                      | Nano S | Nano S XL | Nano SP/X | Nesting | Arguments                                                                      |
| ------------------------- | ------ | --------- | --------- | ------- | ------------------------------------------------------------------------------ |
| Propose                   |        |           |           |         | `BoundedCallOfT`proposal<br/>`CompactBalance`amount<br/>                       |
| Second                    |        |           |           |         | `Compactu32`proposal<br/>                                                      |
| Vote                      |        |           |           |         | `Compactu32`ref_index<br/>`AccountVote`vote<br/>                               |
| Emergency cancel          |        |           |           |         | `ReferendumIndex`ref_index<br/>                                                |
| External propose          |        |           |           |         | `BoundedCallOfT`proposal<br/>                                                  |
| External propose majority |        |           |           |         | `BoundedCallOfT`proposal<br/>                                                  |
| External propose default  |        |           |           |         | `BoundedCallOfT`proposal<br/>                                                  |
| Fast track                |        |           |           |         | `H256`proposal_hash<br/>`BlockNumber`voting_period<br/>`BlockNumber`delay<br/> |
| Veto external             |        |           |           |         | `H256`proposal_hash<br/>                                                       |
| Cancel referendum         |        |           |           |         | `Compactu32`ref_index<br/>                                                     |
| Delegate                  |        |           |           |         | `AccountIdLookupOfT`to<br/>`Conviction`conviction<br/>`Balance`balance<br/>    |
| Undelegate                |        |           |           |         |                                                                                |
| Clear public proposals    |        |           |           |         |                                                                                |
| Unlock                    |        |           |           |         | `AccountIdLookupOfT`target<br/>                                                |
| Remove vote               |        |           |           |         | `ReferendumIndex`index<br/>                                                    |
| Remove other vote         |        |           |           |         | `AccountIdLookupOfT`target<br/>`ReferendumIndex`index<br/>                     |
| Blacklist                 |        |           |           |         | `H256`proposal_hash<br/>`OptionReferendumIndex`maybe_ref_index<br/>            |
| Cancel proposal           |        |           |           |         | `Compactu32`prop_index<br/>                                                    |

## TechnicalCommittee

| Name                | Nano S | Nano S XL | Nano SP/X | Nesting | Arguments                                                                                                         |
| ------------------- | ------ | --------- | --------- | ------- | ----------------------------------------------------------------------------------------------------------------- |
| Set members         |        |           |           |         | `VecAccountId`new_members<br/>`OptionAccountId`prime<br/>`MemberCount`old_count<br/>                              |
| Execute             |        |           |           |         | `Proposal`proposal<br/>`Compactu32`length_bound<br/>                                                              |
| Propose             |        |           |           |         | `Compactu32`threshold<br/>`Proposal`proposal<br/>`Compactu32`length_bound<br/>                                    |
| Vote                |        |           |           |         | `Hash`proposal<br/>`Compactu32`index<br/>`bool`approve<br/>                                                       |
| Close old weight    |        |           |           |         | `Hash`proposal_hash<br/>`Compactu32`index<br/>`Compactu64`proposal_weight_bound<br/>`Compactu32`length_bound<br/> |
| Disapprove proposal |        |           |           |         | `Hash`proposal_hash<br/>                                                                                          |
| Close               |        |           |           |         | `Hash`proposal_hash<br/>`Compactu32`index<br/>`Weight`proposal_weight_bound<br/>`Compactu32`length_bound<br/>     |

## TechnicalCommitteeMembership

| Name          | Nano S | Nano S XL | Nano SP/X | Nesting | Arguments                                                   |
| ------------- | ------ | --------- | --------- | ------- | ----------------------------------------------------------- |
| Add member    |        |           |           |         | `AccountIdLookupOfT`who<br/>                                |
| Remove member |        |           |           |         | `AccountIdLookupOfT`who<br/>                                |
| Swap member   |        |           |           |         | `AccountIdLookupOfT`remove<br/>`AccountIdLookupOfT`add<br/> |
| Reset members |        |           |           |         | `VecAccountId`members<br/>                                  |
| Change key    |        |           |           |         | `AccountIdLookupOfT`new\_<br/>                              |
| Set prime     |        |           |           |         | `AccountIdLookupOfT`who<br/>                                |
| Clear prime   |        |           |           |         |                                                             |

## ReleaseCommittee

| Name                | Nano S | Nano S XL | Nano SP/X | Nesting | Arguments                                                                                                         |
| ------------------- | ------ | --------- | --------- | ------- | ----------------------------------------------------------------------------------------------------------------- |
| Set members         |        |           |           |         | `VecAccountId`new_members<br/>`OptionAccountId`prime<br/>`MemberCount`old_count<br/>                              |
| Execute             |        |           |           |         | `Proposal`proposal<br/>`Compactu32`length_bound<br/>                                                              |
| Propose             |        |           |           |         | `Compactu32`threshold<br/>`Proposal`proposal<br/>`Compactu32`length_bound<br/>                                    |
| Vote                |        |           |           |         | `Hash`proposal<br/>`Compactu32`index<br/>`bool`approve<br/>                                                       |
| Close old weight    |        |           |           |         | `Hash`proposal_hash<br/>`Compactu32`index<br/>`Compactu64`proposal_weight_bound<br/>`Compactu32`length_bound<br/> |
| Disapprove proposal |        |           |           |         | `Hash`proposal_hash<br/>                                                                                          |
| Close               |        |           |           |         | `Hash`proposal_hash<br/>`Compactu32`index<br/>`Weight`proposal_weight_bound<br/>`Compactu32`length_bound<br/>     |

## ReleaseMembership

| Name          | Nano S | Nano S XL | Nano SP/X | Nesting | Arguments                                                   |
| ------------- | ------ | --------- | --------- | ------- | ----------------------------------------------------------- |
| Add member    |        |           |           |         | `AccountIdLookupOfT`who<br/>                                |
| Remove member |        |           |           |         | `AccountIdLookupOfT`who<br/>                                |
| Swap member   |        |           |           |         | `AccountIdLookupOfT`remove<br/>`AccountIdLookupOfT`add<br/> |
| Reset members |        |           |           |         | `VecAccountId`members<br/>                                  |
| Change key    |        |           |           |         | `AccountIdLookupOfT`new\_<br/>                              |
| Set prime     |        |           |           |         | `AccountIdLookupOfT`who<br/>                                |
| Clear prime   |        |           |           |         |                                                             |

## Scheduler

| Name                 | Nano S | Nano S XL | Nano SP/X | Nesting | Arguments                                                                                                                                  |
| -------------------- | ------ | --------- | --------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------ |
| Schedule             |        |           |           |         | `BlockNumber`when<br/>`OptionschedulePeriodBlockNumber`maybe_periodic<br/>`schedulePriority`priority<br/>`Call`call<br/>                   |
| Cancel               |        |           |           |         | `BlockNumber`when<br/>`u32`index<br/>                                                                                                      |
| Schedule named       |        |           |           |         | `TaskName`id<br/>`BlockNumber`when<br/>`OptionschedulePeriodBlockNumber`maybe_periodic<br/>`schedulePriority`priority<br/>`Call`call<br/>  |
| Cancel named         |        |           |           |         | `TaskName`id<br/>                                                                                                                          |
| Schedule after       |        |           |           |         | `BlockNumber`after<br/>`OptionschedulePeriodBlockNumber`maybe_periodic<br/>`schedulePriority`priority<br/>`Call`call<br/>                  |
| Schedule named after |        |           |           |         | `TaskName`id<br/>`BlockNumber`after<br/>`OptionschedulePeriodBlockNumber`maybe_periodic<br/>`schedulePriority`priority<br/>`Call`call<br/> |

## Utility

| Name          | Nano S | Nano S XL | Nano SP/X | Nesting | Arguments                                       |
| ------------- | ------ | --------- | --------- | ------- | ----------------------------------------------- |
| Batch         |        |           |           |         | `VecCall`calls<br/>                             |
| As derivative |        |           |           |         | `u16`index<br/>`Call`call<br/>                  |
| Batch all     |        |           |           |         | `VecCall`calls<br/>                             |
| Dispatch as   |        |           |           |         | `BoxPalletsOrigin`as_origin<br/>`Call`call<br/> |
| Force batch   |        |           |           |         | `VecCall`calls<br/>                             |
| With weight   |        |           |           |         | `Call`call<br/>`Weight`weight<br/>              |

## Preimage

| Name               | Nano S | Nano S XL | Nano SP/X | Nesting | Arguments         |
| ------------------ | ------ | --------- | --------- | ------- | ----------------- |
| Note preimage      |        |           |           |         | `Vecu8`bytes<br/> |
| Unnote preimage    |        |           |           |         | `Hash`hash<br/>   |
| Request preimage   |        |           |           |         | `Hash`hash<br/>   |
| Unrequest preimage |        |           |           |         | `Hash`hash<br/>   |

## Proxy

| Name                | Nano S | Nano S XL | Nano SP/X | Nesting | Arguments                                                                                                                  |
| ------------------- | ------ | --------- | --------- | ------- | -------------------------------------------------------------------------------------------------------------------------- |
| Proxy               |        |           |           |         | `AccountIdLookupOfT`real<br/>`OptionProxyType`force_proxy_type<br/>`Call`call<br/>                                         |
| Add proxy           |        |           |           |         | `AccountIdLookupOfT`delegate<br/>`ProxyType`proxy_type<br/>`BlockNumber`delay<br/>                                         |
| Remove proxy        |        |           |           |         | `AccountIdLookupOfT`delegate<br/>`ProxyType`proxy_type<br/>`BlockNumber`delay<br/>                                         |
| Remove proxies      |        |           |           |         |                                                                                                                            |
| Create pure         |        |           |           |         | `ProxyType`proxy_type<br/>`BlockNumber`delay<br/>`u16`index<br/>                                                           |
| Kill pure           |        |           |           |         | `AccountIdLookupOfT`spawner<br/>`ProxyType`proxy_type<br/>`u16`index<br/>`Compactu32`height<br/>`Compactu32`ext_index<br/> |
| Announce            |        |           |           |         | `AccountIdLookupOfT`real<br/>`CallHashOf`call_hash<br/>                                                                    |
| Remove announcement |        |           |           |         | `AccountIdLookupOfT`real<br/>`CallHashOf`call_hash<br/>                                                                    |
| Reject announcement |        |           |           |         | `AccountIdLookupOfT`delegate<br/>`CallHashOf`call_hash<br/>                                                                |
| Proxy announced     |        |           |           |         | `AccountIdLookupOfT`delegate<br/>`AccountIdLookupOfT`real<br/>`OptionProxyType`force_proxy_type<br/>`Call`call<br/>        |

## XcmpQueue

| Name                              | Nano S | Nano S XL | Nano SP/X | Nesting | Arguments                                            |
| --------------------------------- | ------ | --------- | --------- | ------- | ---------------------------------------------------- |
| Service overweight                |        |           |           |         | `OverweightIndex`index<br/>`Weight`weight_limit<br/> |
| Suspend xcm execution             |        |           |           |         |                                                      |
| Resume xcm execution              |        |           |           |         |                                                      |
| Update suspend threshold          |        |           |           |         | `u32`new\_<br/>                                      |
| Update drop threshold             |        |           |           |         | `u32`new\_<br/>                                      |
| Update resume threshold           |        |           |           |         | `u32`new\_<br/>                                      |
| Update threshold weight           |        |           |           |         | `Weight`new\_<br/>                                   |
| Update weight restrict decay      |        |           |           |         | `Weight`new\_<br/>                                   |
| Update xcmp max individual weight |        |           |           |         | `Weight`new\_<br/>                                   |

## PolkadotXcm

| Name                             | Nano S | Nano S XL | Nano SP/X | Nesting | Arguments                                                                                                                                                                 |
| -------------------------------- | ------ | --------- | --------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Send                             |        |           |           |         | `BoxVersionedMultiLocation`dest<br/>`BoxVersionedXcmTuple`message<br/>                                                                                                    |
| Teleport assets                  |        |           |           |         | `BoxVersionedMultiLocation`dest<br/>`BoxVersionedMultiLocation`beneficiary<br/>`BoxVersionedMultiAssets`assets<br/>`u32`fee_asset_item<br/>                               |
| Reserve transfer assets          |        |           |           |         | `BoxVersionedMultiLocation`dest<br/>`BoxVersionedMultiLocation`beneficiary<br/>`BoxVersionedMultiAssets`assets<br/>`u32`fee_asset_item<br/>                               |
| Execute                          |        |           |           |         | `BoxVersionedXcmTasSysConfigRuntimeCall`message<br/>`Weight`max_weight<br/>                                                                                               |
| Force xcm version                |        |           |           |         | `BoxMultiLocation`location<br/>`XcmVersion`xcm_version<br/>                                                                                                               |
| Force default xcm version        |        |           |           |         | `OptionXcmVersion`maybe_xcm_version<br/>                                                                                                                                  |
| Force subscribe version notify   |        |           |           |         | `BoxVersionedMultiLocation`location<br/>                                                                                                                                  |
| Force unsubscribe version notify |        |           |           |         | `BoxVersionedMultiLocation`location<br/>                                                                                                                                  |
| Limited reserve transfer assets  |        |           |           |         | `BoxVersionedMultiLocation`dest<br/>`BoxVersionedMultiLocation`beneficiary<br/>`BoxVersionedMultiAssets`assets<br/>`u32`fee_asset_item<br/>`WeightLimit`weight_limit<br/> |
| Limited teleport assets          |        |           |           |         | `BoxVersionedMultiLocation`dest<br/>`BoxVersionedMultiLocation`beneficiary<br/>`BoxVersionedMultiAssets`assets<br/>`u32`fee_asset_item<br/>`WeightLimit`weight_limit<br/> |

## CumulusXcm

| Name | Nano S | Nano S XL | Nano SP/X | Nesting | Arguments |
| ---- | ------ | --------- | --------- | ------- | --------- |

## DmpQueue

| Name               | Nano S | Nano S XL | Nano SP/X | Nesting | Arguments                                            |
| ------------------ | ------ | --------- | --------- | ------- | ---------------------------------------------------- |
| Service overweight |        |           |           |         | `OverweightIndex`index<br/>`Weight`weight_limit<br/> |

## XTokens

| Name                         | Nano S | Nano S XL | Nano SP/X | Nesting | Arguments                                                                                                                                 |
| ---------------------------- | ------ | --------- | --------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------- |
| Transfer                     |        |           |           |         | `CurrencyId`currency_id<br/>`Balance`amount<br/>`BoxVersionedMultiLocation`dest<br/>`WeightLimit`dest_weight_limit<br/>                   |
| Transfer multiasset          |        |           |           |         | `BoxVersionedMultiAsset`asset<br/>`BoxVersionedMultiLocation`dest<br/>`WeightLimit`dest_weight_limit<br/>                                 |
| Transfer with fee            |        |           |           |         | `CurrencyId`currency_id<br/>`Balance`amount<br/>`Balance`fee<br/>`BoxVersionedMultiLocation`dest<br/>`WeightLimit`dest_weight_limit<br/>  |
| Transfer multiasset with fee |        |           |           |         | `BoxVersionedMultiAsset`asset<br/>`BoxVersionedMultiAsset`fee<br/>`BoxVersionedMultiLocation`dest<br/>`WeightLimit`dest_weight_limit<br/> |
| Transfer multicurrencies     |        |           |           |         | `VecTupleCurrencyIdBalance`currencies<br/>`u32`fee_item<br/>`BoxVersionedMultiLocation`dest<br/>`WeightLimit`dest_weight_limit<br/>       |
| Transfer multiassets         |        |           |           |         | `BoxVersionedMultiAssets`assets<br/>`u32`fee_item<br/>`BoxVersionedMultiLocation`dest<br/>`WeightLimit`dest_weight_limit<br/>             |

## UnknownTokens

| Name | Nano S | Nano S XL | Nano SP/X | Nesting | Arguments |
| ---- | ------ | --------- | --------- | ------- | --------- |

## Tokens

| Name                | Nano S | Nano S XL | Nano SP/X | Nesting | Arguments                                                                                                                           |
| ------------------- | ------ | --------- | --------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| Transfer            |        |           |           |         | `LookupasStaticLookupSource`dest<br/>`CurrencyId`currency_id<br/>`CompactBalance`amount<br/>                                        |
| Transfer all        |        |           |           |         | `LookupasStaticLookupSource`dest<br/>`CurrencyId`currency_id<br/>`bool`keep_alive<br/>                                              |
| Transfer keep alive |        |           |           |         | `LookupasStaticLookupSource`dest<br/>`CurrencyId`currency_id<br/>`CompactBalance`amount<br/>                                        |
| Force transfer      |        |           |           |         | `LookupasStaticLookupSource`source<br/>`LookupasStaticLookupSource`dest<br/>`CurrencyId`currency_id<br/>`CompactBalance`amount<br/> |
| Set balance         |        |           |           |         | `LookupasStaticLookupSource`who<br/>`CurrencyId`currency_id<br/>`CompactBalance`new_free<br/>`CompactBalance`new_reserved<br/>      |

## CurrencyFactory

| Name         | Nano S | Nano S XL | Nano SP/X | Nesting | Arguments                                               |
| ------------ | ------ | --------- | --------- | ------- | ------------------------------------------------------- |
| Add range    |        |           |           |         | `u64`length<br/>                                        |
| Set metadata |        |           |           |         | `AssetId`asset_id<br/>`BasicAssetMetadata`metadata<br/> |

## GovernanceRegistry

| Name       | Nano S | Nano S XL | Nano SP/X | Nesting | Arguments                                   |
| ---------- | ------ | --------- | --------- | ------- | ------------------------------------------- |
| Set        |        |           |           |         | `AssetId`asset_id<br/>`AccountId`value<br/> |
| Grant root |        |           |           |         | `AssetId`asset_id<br/>                      |
| Remove     |        |           |           |         | `AssetId`asset_id<br/>                      |

## Assets

| Name                            | Nano S | Nano S XL | Nano SP/X | Nesting | Arguments                                                                                                                                       |
| ------------------------------- | ------ | --------- | --------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------- |
| Transfer                        |        |           |           |         | `AssetId`asset<br/>`LookupasStaticLookupSource`dest<br/>`CompactBalance`amount<br/>`bool`keep_alive<br/>                                        |
| Transfer native                 |        |           |           |         | `LookupasStaticLookupSource`dest<br/>`CompactBalance`amount<br/>`bool`keep_alive<br/>                                                           |
| Force transfer                  |        |           |           |         | `AssetId`asset<br/>`LookupasStaticLookupSource`source<br/>`LookupasStaticLookupSource`dest<br/>`CompactBalance`amount<br/>`bool`keep_alive<br/> |
| Force transfer native           |        |           |           |         | `LookupasStaticLookupSource`source<br/>`LookupasStaticLookupSource`dest<br/>`CompactBalance`amount<br/>`bool`keep_alive<br/>                    |
| Transfer all                    |        |           |           |         | `AssetId`asset<br/>`LookupasStaticLookupSource`dest<br/>`bool`keep_alive<br/>                                                                   |
| Transfer all native             |        |           |           |         | `LookupasStaticLookupSource`dest<br/>`bool`keep_alive<br/>                                                                                      |
| Mint initialize                 |        |           |           |         | `CompactBalance`amount<br/>`LookupasStaticLookupSource`dest<br/>                                                                                |
| Mint initialize with governance |        |           |           |         | `CompactBalance`amount<br/>`LookupasStaticLookupSource`governance_origin<br/>`LookupasStaticLookupSource`dest<br/>                              |
| Mint into                       |        |           |           |         | `AssetId`asset_id<br/>`LookupasStaticLookupSource`dest<br/>`CompactBalance`amount<br/>                                                          |
| Burn from                       |        |           |           |         | `AssetId`asset_id<br/>`LookupasStaticLookupSource`dest<br/>`CompactBalance`amount<br/>                                                          |

## CrowdloanRewards

| Name               | Nano S | Nano S XL | Nano SP/X | Nesting | Arguments                                                               |
| ------------------ | ------ | --------- | --------- | ------- | ----------------------------------------------------------------------- |
| Initialize         |        |           |           |         |                                                                         |
| Initialize at      |        |           |           |         | `Moment`at<br/>                                                         |
| Populate           |        |           |           |         | `VecTupleRemoteAccountOfTRewardAmountOfTVestingPeriodOfT`rewards<br/>   |
| Associate          |        |           |           |         | `AccountId`reward_account<br/>`ProofOfT`proof<br/>                      |
| Claim              |        |           |           |         |                                                                         |
| Unlock rewards for |        |           |           |         | `VecAccountId`reward_accounts<br/>                                      |
| Add                |        |           |           |         | `VecTupleRemoteAccountOfTRewardAmountOfTVestingPeriodOfT`additions<br/> |

## Vesting

| Name                     | Nano S | Nano S XL | Nano SP/X | Nesting | Arguments                                                                                                                                         |
| ------------------------ | ------ | --------- | --------- | ------- | ------------------------------------------------------------------------------------------------------------------------------------------------- |
| Claim                    |        |           |           |         | `AssetIdOfT`asset<br/>`VestingScheduleIdSetVestingScheduleIdMaxVestingSchedules`vesting_schedule_ids<br/>                                         |
| Vested transfer          |        |           |           |         | `LookupasStaticLookupSource`from<br/>`LookupasStaticLookupSource`beneficiary<br/>`AssetIdOfT`asset<br/>`VestingScheduleInfoOfT`schedule_info<br/> |
| Update vesting schedules |        |           |           |         | `LookupasStaticLookupSource`who<br/>`AssetIdOfT`asset<br/>`VecVestingScheduleInfoOfT`vesting_schedules<br/>                                       |
| Claim for                |        |           |           |         | `LookupasStaticLookupSource`dest<br/>`AssetIdOfT`asset<br/>`VestingScheduleIdSetVestingScheduleIdMaxVestingSchedules`vesting_schedule_ids<br/>    |

## BondedFinance

| Name   | Nano S | Nano S XL | Nano SP/X | Nesting | Arguments                                                                                                             |
| ------ | ------ | --------- | --------- | ------- | --------------------------------------------------------------------------------------------------------------------- |
| Offer  |        |           |           |         | `ValidatedBondOfferOfTValidBondOfferMinRewardVestingasVestedTransferMinVestedTransfer`offer<br/>`bool`keep_alive<br/> |
| Bond   |        |           |           |         | `BondOfferId`offer_id<br/>`Balance`nb_of_bonds<br/>`bool`keep_alive<br/>                                              |
| Cancel |        |           |           |         | `BondOfferId`offer_id<br/>                                                                                            |

## AssetsRegistry

| Name                  | Nano S | Nano S XL | Nano SP/X | Nesting | Arguments                                                                                                       |
| --------------------- | ------ | --------- | --------- | ------- | --------------------------------------------------------------------------------------------------------------- |
| Register asset        |        |           |           |         | `u8_array_8`protocol_id<br/>`u64`nonce<br/>`OptionForeignAssetId`location<br/>`AssetInfoBalance`asset_info<br/> |
| Update asset          |        |           |           |         | `LocalAssetId`asset_id<br/>`AssetInfoUpdateBalance`asset_info<br/>                                              |
| Set min fee           |        |           |           |         | `u32`target_parachain_id<br/>`ForeignAssetId`foreign_asset_id<br/>`OptionBalance`amount<br/>                    |
| Update asset location |        |           |           |         | `LocalAssetId`asset_id<br/>`OptionForeignAssetId`location<br/>                                                  |

## Pablo

| Name             | Nano S | Nano S XL | Nano SP/X | Nesting | Arguments                                                                                                                    |
| ---------------- | ------ | --------- | --------- | ------- | ---------------------------------------------------------------------------------------------------------------------------- |
| Create           |        |           |           |         | `PoolInitConfigurationOfT`pool<br/>                                                                                          |
| Buy              |        |           |           |         | `PoolId`pool_id<br/>`AssetId`in_asset_id<br/>`AssetAmountAssetIdBalance`out_asset<br/>`bool`keep_alive<br/>                  |
| Swap             |        |           |           |         | `PoolId`pool_id<br/>`AssetAmountAssetIdBalance`in_asset<br/>`AssetAmountAssetIdBalance`min_receive<br/>`bool`keep_alive<br/> |
| Add liquidity    |        |           |           |         | `PoolId`pool_id<br/>`BTreeMapAssetIdBalance`assets<br/>`Balance`min_mint_amount<br/>`bool`keep_alive<br/>                    |
| Remove liquidity |        |           |           |         | `PoolId`pool_id<br/>`Balance`lp_amount<br/>`BTreeMapAssetIdBalance`min_receive<br/>                                          |
| Enable twap      |        |           |           |         | `PoolId`pool_id<br/>                                                                                                         |

## Oracle

| Name               | Nano S | Nano S XL | Nano SP/X | Nesting | Arguments                                                                                                                                                                                                                                                                                                                                 |
| ------------------ | ------ | --------- | --------- | ------- | ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| Add asset and info |        |           |           |         | `AssetId`asset_id<br/>`ValidatedPercentValidThreshold`threshold<br/>`Validatedu32ValidMinAnswersMinAnswerBound`min_answers<br/>`Validatedu32ValidMaxAnswerMaxAnswerBound`max_answers<br/>`ValidatedBlockNumberValidBlockIntervalStalePrice`block_interval<br/>`Balance`reward_weight<br/>`Balance`slash<br/>`bool`emit_price_changes<br/> |
| Set signer         |        |           |           |         | `AccountId`signer<br/>                                                                                                                                                                                                                                                                                                                    |
| Adjust rewards     |        |           |           |         | `Balance`annual_cost_per_oracle<br/>`u8`num_ideal_oracles<br/>                                                                                                                                                                                                                                                                            |
| Add stake          |        |           |           |         | `Balance`stake<br/>                                                                                                                                                                                                                                                                                                                       |
| Remove stake       |        |           |           |         |                                                                                                                                                                                                                                                                                                                                           |
| Reclaim stake      |        |           |           |         |                                                                                                                                                                                                                                                                                                                                           |
| Submit price       |        |           |           |         | `PriceValue`price<br/>`AssetId`asset_id<br/>                                                                                                                                                                                                                                                                                              |

## AssetsTransactorRouter

| Name                  | Nano S | Nano S XL | Nano SP/X | Nesting | Arguments                                                                                                                                |
| --------------------- | ------ | --------- | --------- | ------- | ---------------------------------------------------------------------------------------------------------------------------------------- |
| Transfer              |        |           |           |         | `AssetId`asset<br/>`LookupasStaticLookupSource`dest<br/>`Balance`amount<br/>`bool`keep_alive<br/>                                        |
| Transfer native       |        |           |           |         | `LookupasStaticLookupSource`dest<br/>`Balance`amount<br/>`bool`keep_alive<br/>                                                           |
| Force transfer        |        |           |           |         | `AssetId`asset<br/>`LookupasStaticLookupSource`source<br/>`LookupasStaticLookupSource`dest<br/>`Balance`amount<br/>`bool`keep_alive<br/> |
| Force transfer native |        |           |           |         | `LookupasStaticLookupSource`source<br/>`LookupasStaticLookupSource`dest<br/>`Balance`amount<br/>`bool`keep_alive<br/>                    |
| Transfer all          |        |           |           |         | `AssetId`asset<br/>`LookupasStaticLookupSource`dest<br/>`bool`keep_alive<br/>                                                            |
| Transfer all native   |        |           |           |         | `LookupasStaticLookupSource`dest<br/>`bool`keep_alive<br/>                                                                               |
| Mint into             |        |           |           |         | `AssetId`asset_id<br/>`LookupasStaticLookupSource`dest<br/>`Balance`amount<br/>                                                          |
| Burn from             |        |           |           |         | `AssetId`asset_id<br/>`LookupasStaticLookupSource`dest<br/>`Balance`amount<br/>                                                          |

## CallFilter

| Name    | Nano S | Nano S XL | Nano SP/X | Nesting | Arguments                      |
| ------- | ------ | --------- | --------- | ------- | ------------------------------ |
| Disable |        |           |           |         | `CallFilterEntryOfT`entry<br/> |
| Enable  |        |           |           |         | `CallFilterEntryOfT`entry<br/> |

## Ibc

| Name              | Nano S | Nano S XL | Nano SP/X | Nesting | Arguments                                                                                                                       |
| ----------------- | ------ | --------- | --------- | ------- | ------------------------------------------------------------------------------------------------------------------------------- |
| Deliver           |        |           |           |         | `VecAny`messages<br/>                                                                                                           |
| Transfer          |        |           |           |         | `TransferParamsTasframe_systemConfigAccountId`params<br/>`AssetId`asset_id<br/>`Balance`amount<br/>`OptionMemoMessage`memo<br/> |
| Upgrade client    |        |           |           |         | `UpgradeParams`params<br/>                                                                                                      |
| Freeze client     |        |           |           |         | `Vecu8`client_id<br/>`u64`height<br/>                                                                                           |
| Increase counters |        |           |           |         |                                                                                                                                 |

## Ics20Fee

| Name       | Nano S | Nano S XL | Nano SP/X | Nesting | Arguments            |
| ---------- | ------ | --------- | --------- | ------- | -------------------- |
| Set charge |        |           |           |         | `Perbill`charge<br/> |
