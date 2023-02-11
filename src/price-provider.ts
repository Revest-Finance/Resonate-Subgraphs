import {
  PriceProviderOwnershipTransferred as PriceProviderOwnershipTransferredEvent,
  SetTokenOracle as SetTokenOracleEvent
} from "../generated/PriceProvider/PriceProvider"
import {
  PriceProviderOwnershipTransferred,
  SetTokenOracle
} from "../generated/schema"

export function handlePriceProviderOwnershipTransferred(
  event: PriceProviderOwnershipTransferredEvent
): void {
  let entity = new PriceProviderOwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleSetTokenOracle(event: SetTokenOracleEvent): void {
  let entity = new SetTokenOracle(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.token = event.params.token
  entity.oracle = event.params.oracle

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
