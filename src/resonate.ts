import {
  BatchInterestClaimed as BatchInterestClaimedEvent,
  CapitalActivated as CapitalActivatedEvent,
  DepositERC20OutputReceiver as DepositERC20OutputReceiverEvent,
  DequeueConsumer as DequeueConsumerEvent,
  DequeueProvider as DequeueProviderEvent,
  EnqueueConsumer as EnqueueConsumerEvent,
  EnqueueProvider as EnqueueProviderEvent,
  FNFTCreation as FNFTCreationEvent,
  FNFTRedeemed as FNFTRedeemedEvent,
  FeeCollection as FeeCollectionEvent,
  InterestClaimed as InterestClaimedEvent,
  OracleRegistered as OracleRegisteredEvent,
  OrderWithdrawal as OrderWithdrawalEvent,
  OwnershipTransferred as OwnershipTransferredEvent,
  PoolCreated as PoolCreatedEvent,
  VaultAdapterRegistered as VaultAdapterRegisteredEvent,
  WithdrawERC20OutputReceiver as WithdrawERC20OutputReceiverEvent
} from "../generated/Resonate/Resonate"
import {
  BatchInterestClaimed,
  CapitalActivated,
  DepositERC20OutputReceiver,
  DequeueConsumer,
  DequeueProvider,
  EnqueueConsumer,
  EnqueueProvider,
  FNFTCreation,
  FNFTRedeemed,
  FeeCollection,
  InterestClaimed,
  OracleRegistered,
  OrderWithdrawal,
  OwnershipTransferred,
  PoolCreated,
  VaultAdapterRegistered,
  WithdrawERC20OutputReceiver
} from "../generated/schema"

export function handleBatchInterestClaimed(
  event: BatchInterestClaimedEvent
): void {
  let entity = new BatchInterestClaimed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.poolId = event.params.poolId
  entity.fnftIds = event.params.fnftIds
  entity.claimer = event.params.claimer
  entity.amountInterest = event.params.amountInterest

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleCapitalActivated(event: CapitalActivatedEvent): void {
  let entity = new CapitalActivated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.poolId = event.params.poolId
  entity.numPackets = event.params.numPackets
  entity.principalFNFT = event.params.principalFNFT

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDepositERC20OutputReceiver(
  event: DepositERC20OutputReceiverEvent
): void {
  let entity = new DepositERC20OutputReceiver(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.mintTo = event.params.mintTo
  entity.token = event.params.token
  entity.amountTokens = event.params.amountTokens
  entity.fnftId = event.params.fnftId
  entity.extraData = event.params.extraData

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDequeueConsumer(event: DequeueConsumerEvent): void {
  let entity = new DequeueConsumer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.poolId = event.params.poolId
  entity.dequeuer = event.params.dequeuer
  entity.owner = event.params.owner
  entity.position = event.params.position
  entity.order_packetsRemaining = event.params.order.packetsRemaining
  entity.order_depositedShares = event.params.order.depositedShares
  entity.order_owner = event.params.order.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleDequeueProvider(event: DequeueProviderEvent): void {
  let entity = new DequeueProvider(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.poolId = event.params.poolId
  entity.dequeuer = event.params.dequeuer
  entity.owner = event.params.owner
  entity.position = event.params.position
  entity.order_packetsRemaining = event.params.order.packetsRemaining
  entity.order_depositedShares = event.params.order.depositedShares
  entity.order_owner = event.params.order.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEnqueueConsumer(event: EnqueueConsumerEvent): void {
  let entity = new EnqueueConsumer(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.poolId = event.params.poolId
  entity.addr = event.params.addr
  entity.position = event.params.position
  entity.shouldFarm = event.params.shouldFarm
  entity.order_packetsRemaining = event.params.order.packetsRemaining
  entity.order_depositedShares = event.params.order.depositedShares
  entity.order_owner = event.params.order.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleEnqueueProvider(event: EnqueueProviderEvent): void {
  let entity = new EnqueueProvider(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.poolId = event.params.poolId
  entity.addr = event.params.addr
  entity.position = event.params.position
  entity.shouldFarm = event.params.shouldFarm
  entity.order_packetsRemaining = event.params.order.packetsRemaining
  entity.order_depositedShares = event.params.order.depositedShares
  entity.order_owner = event.params.order.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFNFTCreation(event: FNFTCreationEvent): void {
  let entity = new FNFTCreation(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.poolId = event.params.poolId
  entity.isPrincipal = event.params.isPrincipal
  entity.fnftId = event.params.fnftId
  entity.quantityFNFTs = event.params.quantityFNFTs

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFNFTRedeemed(event: FNFTRedeemedEvent): void {
  let entity = new FNFTRedeemed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.poolId = event.params.poolId
  entity.isPrincipal = event.params.isPrincipal
  entity.fnftId = event.params.fnftId
  entity.quantityFNFTs = event.params.quantityFNFTs

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleFeeCollection(event: FeeCollectionEvent): void {
  let entity = new FeeCollection(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.poolId = event.params.poolId
  entity.amountTokens = event.params.amountTokens

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleInterestClaimed(event: InterestClaimedEvent): void {
  let entity = new InterestClaimed(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.poolId = event.params.poolId
  entity.fnftId = event.params.fnftId
  entity.claimer = event.params.claimer
  entity.amount = event.params.amount

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOracleRegistered(event: OracleRegisteredEvent): void {
  let entity = new OracleRegistered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.vaultAsset = event.params.vaultAsset
  entity.paymentAsset = event.params.paymentAsset
  entity.oracleDispatch = event.params.oracleDispatch

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOrderWithdrawal(event: OrderWithdrawalEvent): void {
  let entity = new OrderWithdrawal(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.poolId = event.params.poolId
  entity.amountPackets = event.params.amountPackets
  entity.fullyWithdrawn = event.params.fullyWithdrawn
  entity.owner = event.params.owner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleOwnershipTransferred(
  event: OwnershipTransferredEvent
): void {
  let entity = new OwnershipTransferred(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.previousOwner = event.params.previousOwner
  entity.newOwner = event.params.newOwner

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handlePoolCreated(event: PoolCreatedEvent): void {
  let entity = new PoolCreated(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.poolId = event.params.poolId
  entity.asset = event.params.asset
  entity.vault = event.params.vault
  entity.payoutAsset = event.params.payoutAsset
  entity.rate = event.params.rate
  entity.addInterestRate = event.params.addInterestRate
  entity.lockupPeriod = event.params.lockupPeriod
  entity.packetSize = event.params.packetSize
  entity.isFixedTerm = event.params.isFixedTerm
  entity.poolName = event.params.poolName
  entity.creator = event.params.creator

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleVaultAdapterRegistered(
  event: VaultAdapterRegisteredEvent
): void {
  let entity = new VaultAdapterRegistered(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.underlyingVault = event.params.underlyingVault
  entity.vaultAdapter = event.params.vaultAdapter
  entity.vaultAsset = event.params.vaultAsset

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}

export function handleWithdrawERC20OutputReceiver(
  event: WithdrawERC20OutputReceiverEvent
): void {
  let entity = new WithdrawERC20OutputReceiver(
    event.transaction.hash.concatI32(event.logIndex.toI32())
  )
  entity.caller = event.params.caller
  entity.token = event.params.token
  entity.amountTokens = event.params.amountTokens
  entity.fnftId = event.params.fnftId
  entity.extraData = event.params.extraData

  entity.blockNumber = event.block.number
  entity.blockTimestamp = event.block.timestamp
  entity.transactionHash = event.transaction.hash

  entity.save()
}
