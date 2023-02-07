import { newMockEvent } from "matchstick-as"
import { ethereum, Bytes, BigInt, Address } from "@graphprotocol/graph-ts"
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
} from "../generated/Resonate/Resonate"

export function createBatchInterestClaimedEvent(
  poolId: Bytes,
  fnftIds: Array<BigInt>,
  claimer: Address,
  amountInterest: BigInt
): BatchInterestClaimed {
  let batchInterestClaimedEvent = changetype<BatchInterestClaimed>(
    newMockEvent()
  )

  batchInterestClaimedEvent.parameters = new Array()

  batchInterestClaimedEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromFixedBytes(poolId))
  )
  batchInterestClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "fnftIds",
      ethereum.Value.fromUnsignedBigIntArray(fnftIds)
    )
  )
  batchInterestClaimedEvent.parameters.push(
    new ethereum.EventParam("claimer", ethereum.Value.fromAddress(claimer))
  )
  batchInterestClaimedEvent.parameters.push(
    new ethereum.EventParam(
      "amountInterest",
      ethereum.Value.fromUnsignedBigInt(amountInterest)
    )
  )

  return batchInterestClaimedEvent
}

export function createCapitalActivatedEvent(
  poolId: Bytes,
  numPackets: BigInt,
  principalFNFT: BigInt
): CapitalActivated {
  let capitalActivatedEvent = changetype<CapitalActivated>(newMockEvent())

  capitalActivatedEvent.parameters = new Array()

  capitalActivatedEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromFixedBytes(poolId))
  )
  capitalActivatedEvent.parameters.push(
    new ethereum.EventParam(
      "numPackets",
      ethereum.Value.fromUnsignedBigInt(numPackets)
    )
  )
  capitalActivatedEvent.parameters.push(
    new ethereum.EventParam(
      "principalFNFT",
      ethereum.Value.fromUnsignedBigInt(principalFNFT)
    )
  )

  return capitalActivatedEvent
}

export function createDepositERC20OutputReceiverEvent(
  mintTo: Address,
  token: Address,
  amountTokens: BigInt,
  fnftId: BigInt,
  extraData: Bytes
): DepositERC20OutputReceiver {
  let depositErc20OutputReceiverEvent = changetype<DepositERC20OutputReceiver>(
    newMockEvent()
  )

  depositErc20OutputReceiverEvent.parameters = new Array()

  depositErc20OutputReceiverEvent.parameters.push(
    new ethereum.EventParam("mintTo", ethereum.Value.fromAddress(mintTo))
  )
  depositErc20OutputReceiverEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  depositErc20OutputReceiverEvent.parameters.push(
    new ethereum.EventParam(
      "amountTokens",
      ethereum.Value.fromUnsignedBigInt(amountTokens)
    )
  )
  depositErc20OutputReceiverEvent.parameters.push(
    new ethereum.EventParam("fnftId", ethereum.Value.fromUnsignedBigInt(fnftId))
  )
  depositErc20OutputReceiverEvent.parameters.push(
    new ethereum.EventParam("extraData", ethereum.Value.fromBytes(extraData))
  )

  return depositErc20OutputReceiverEvent
}

export function createDequeueConsumerEvent(
  poolId: Bytes,
  dequeuer: Address,
  owner: Address,
  position: BigInt,
  order: ethereum.Tuple
): DequeueConsumer {
  let dequeueConsumerEvent = changetype<DequeueConsumer>(newMockEvent())

  dequeueConsumerEvent.parameters = new Array()

  dequeueConsumerEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromFixedBytes(poolId))
  )
  dequeueConsumerEvent.parameters.push(
    new ethereum.EventParam("dequeuer", ethereum.Value.fromAddress(dequeuer))
  )
  dequeueConsumerEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  dequeueConsumerEvent.parameters.push(
    new ethereum.EventParam(
      "position",
      ethereum.Value.fromUnsignedBigInt(position)
    )
  )
  dequeueConsumerEvent.parameters.push(
    new ethereum.EventParam("order", ethereum.Value.fromTuple(order))
  )

  return dequeueConsumerEvent
}

export function createDequeueProviderEvent(
  poolId: Bytes,
  dequeuer: Address,
  owner: Address,
  position: BigInt,
  order: ethereum.Tuple
): DequeueProvider {
  let dequeueProviderEvent = changetype<DequeueProvider>(newMockEvent())

  dequeueProviderEvent.parameters = new Array()

  dequeueProviderEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromFixedBytes(poolId))
  )
  dequeueProviderEvent.parameters.push(
    new ethereum.EventParam("dequeuer", ethereum.Value.fromAddress(dequeuer))
  )
  dequeueProviderEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )
  dequeueProviderEvent.parameters.push(
    new ethereum.EventParam(
      "position",
      ethereum.Value.fromUnsignedBigInt(position)
    )
  )
  dequeueProviderEvent.parameters.push(
    new ethereum.EventParam("order", ethereum.Value.fromTuple(order))
  )

  return dequeueProviderEvent
}

export function createEnqueueConsumerEvent(
  poolId: Bytes,
  addr: Address,
  position: BigInt,
  shouldFarm: boolean,
  order: ethereum.Tuple
): EnqueueConsumer {
  let enqueueConsumerEvent = changetype<EnqueueConsumer>(newMockEvent())

  enqueueConsumerEvent.parameters = new Array()

  enqueueConsumerEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromFixedBytes(poolId))
  )
  enqueueConsumerEvent.parameters.push(
    new ethereum.EventParam("addr", ethereum.Value.fromAddress(addr))
  )
  enqueueConsumerEvent.parameters.push(
    new ethereum.EventParam(
      "position",
      ethereum.Value.fromUnsignedBigInt(position)
    )
  )
  enqueueConsumerEvent.parameters.push(
    new ethereum.EventParam(
      "shouldFarm",
      ethereum.Value.fromBoolean(shouldFarm)
    )
  )
  enqueueConsumerEvent.parameters.push(
    new ethereum.EventParam("order", ethereum.Value.fromTuple(order))
  )

  return enqueueConsumerEvent
}

export function createEnqueueProviderEvent(
  poolId: Bytes,
  addr: Address,
  position: BigInt,
  shouldFarm: boolean,
  order: ethereum.Tuple
): EnqueueProvider {
  let enqueueProviderEvent = changetype<EnqueueProvider>(newMockEvent())

  enqueueProviderEvent.parameters = new Array()

  enqueueProviderEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromFixedBytes(poolId))
  )
  enqueueProviderEvent.parameters.push(
    new ethereum.EventParam("addr", ethereum.Value.fromAddress(addr))
  )
  enqueueProviderEvent.parameters.push(
    new ethereum.EventParam(
      "position",
      ethereum.Value.fromUnsignedBigInt(position)
    )
  )
  enqueueProviderEvent.parameters.push(
    new ethereum.EventParam(
      "shouldFarm",
      ethereum.Value.fromBoolean(shouldFarm)
    )
  )
  enqueueProviderEvent.parameters.push(
    new ethereum.EventParam("order", ethereum.Value.fromTuple(order))
  )

  return enqueueProviderEvent
}

export function createFNFTCreationEvent(
  poolId: Bytes,
  isPrincipal: boolean,
  fnftId: BigInt,
  quantityFNFTs: BigInt
): FNFTCreation {
  let fnftCreationEvent = changetype<FNFTCreation>(newMockEvent())

  fnftCreationEvent.parameters = new Array()

  fnftCreationEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromFixedBytes(poolId))
  )
  fnftCreationEvent.parameters.push(
    new ethereum.EventParam(
      "isPrincipal",
      ethereum.Value.fromBoolean(isPrincipal)
    )
  )
  fnftCreationEvent.parameters.push(
    new ethereum.EventParam("fnftId", ethereum.Value.fromUnsignedBigInt(fnftId))
  )
  fnftCreationEvent.parameters.push(
    new ethereum.EventParam(
      "quantityFNFTs",
      ethereum.Value.fromUnsignedBigInt(quantityFNFTs)
    )
  )

  return fnftCreationEvent
}

export function createFNFTRedeemedEvent(
  poolId: Bytes,
  isPrincipal: boolean,
  fnftId: BigInt,
  quantityFNFTs: BigInt
): FNFTRedeemed {
  let fnftRedeemedEvent = changetype<FNFTRedeemed>(newMockEvent())

  fnftRedeemedEvent.parameters = new Array()

  fnftRedeemedEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromFixedBytes(poolId))
  )
  fnftRedeemedEvent.parameters.push(
    new ethereum.EventParam(
      "isPrincipal",
      ethereum.Value.fromBoolean(isPrincipal)
    )
  )
  fnftRedeemedEvent.parameters.push(
    new ethereum.EventParam("fnftId", ethereum.Value.fromUnsignedBigInt(fnftId))
  )
  fnftRedeemedEvent.parameters.push(
    new ethereum.EventParam(
      "quantityFNFTs",
      ethereum.Value.fromUnsignedBigInt(quantityFNFTs)
    )
  )

  return fnftRedeemedEvent
}

export function createFeeCollectionEvent(
  poolId: Bytes,
  amountTokens: BigInt
): FeeCollection {
  let feeCollectionEvent = changetype<FeeCollection>(newMockEvent())

  feeCollectionEvent.parameters = new Array()

  feeCollectionEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromFixedBytes(poolId))
  )
  feeCollectionEvent.parameters.push(
    new ethereum.EventParam(
      "amountTokens",
      ethereum.Value.fromUnsignedBigInt(amountTokens)
    )
  )

  return feeCollectionEvent
}

export function createInterestClaimedEvent(
  poolId: Bytes,
  fnftId: BigInt,
  claimer: Address,
  amount: BigInt
): InterestClaimed {
  let interestClaimedEvent = changetype<InterestClaimed>(newMockEvent())

  interestClaimedEvent.parameters = new Array()

  interestClaimedEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromFixedBytes(poolId))
  )
  interestClaimedEvent.parameters.push(
    new ethereum.EventParam("fnftId", ethereum.Value.fromUnsignedBigInt(fnftId))
  )
  interestClaimedEvent.parameters.push(
    new ethereum.EventParam("claimer", ethereum.Value.fromAddress(claimer))
  )
  interestClaimedEvent.parameters.push(
    new ethereum.EventParam("amount", ethereum.Value.fromUnsignedBigInt(amount))
  )

  return interestClaimedEvent
}

export function createOracleRegisteredEvent(
  vaultAsset: Address,
  paymentAsset: Address,
  oracleDispatch: Address
): OracleRegistered {
  let oracleRegisteredEvent = changetype<OracleRegistered>(newMockEvent())

  oracleRegisteredEvent.parameters = new Array()

  oracleRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "vaultAsset",
      ethereum.Value.fromAddress(vaultAsset)
    )
  )
  oracleRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "paymentAsset",
      ethereum.Value.fromAddress(paymentAsset)
    )
  )
  oracleRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "oracleDispatch",
      ethereum.Value.fromAddress(oracleDispatch)
    )
  )

  return oracleRegisteredEvent
}

export function createOrderWithdrawalEvent(
  poolId: Bytes,
  amountPackets: BigInt,
  fullyWithdrawn: boolean,
  owner: Address
): OrderWithdrawal {
  let orderWithdrawalEvent = changetype<OrderWithdrawal>(newMockEvent())

  orderWithdrawalEvent.parameters = new Array()

  orderWithdrawalEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromFixedBytes(poolId))
  )
  orderWithdrawalEvent.parameters.push(
    new ethereum.EventParam(
      "amountPackets",
      ethereum.Value.fromUnsignedBigInt(amountPackets)
    )
  )
  orderWithdrawalEvent.parameters.push(
    new ethereum.EventParam(
      "fullyWithdrawn",
      ethereum.Value.fromBoolean(fullyWithdrawn)
    )
  )
  orderWithdrawalEvent.parameters.push(
    new ethereum.EventParam("owner", ethereum.Value.fromAddress(owner))
  )

  return orderWithdrawalEvent
}

export function createOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): OwnershipTransferred {
  let ownershipTransferredEvent = changetype<OwnershipTransferred>(
    newMockEvent()
  )

  ownershipTransferredEvent.parameters = new Array()

  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  ownershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return ownershipTransferredEvent
}

export function createPoolCreatedEvent(
  poolId: Bytes,
  asset: Address,
  vault: Address,
  payoutAsset: Address,
  rate: BigInt,
  addInterestRate: BigInt,
  lockupPeriod: BigInt,
  packetSize: BigInt,
  isFixedTerm: boolean,
  poolName: string,
  creator: Address
): PoolCreated {
  let poolCreatedEvent = changetype<PoolCreated>(newMockEvent())

  poolCreatedEvent.parameters = new Array()

  poolCreatedEvent.parameters.push(
    new ethereum.EventParam("poolId", ethereum.Value.fromFixedBytes(poolId))
  )
  poolCreatedEvent.parameters.push(
    new ethereum.EventParam("asset", ethereum.Value.fromAddress(asset))
  )
  poolCreatedEvent.parameters.push(
    new ethereum.EventParam("vault", ethereum.Value.fromAddress(vault))
  )
  poolCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "payoutAsset",
      ethereum.Value.fromAddress(payoutAsset)
    )
  )
  poolCreatedEvent.parameters.push(
    new ethereum.EventParam("rate", ethereum.Value.fromUnsignedBigInt(rate))
  )
  poolCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "addInterestRate",
      ethereum.Value.fromUnsignedBigInt(addInterestRate)
    )
  )
  poolCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "lockupPeriod",
      ethereum.Value.fromUnsignedBigInt(lockupPeriod)
    )
  )
  poolCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "packetSize",
      ethereum.Value.fromUnsignedBigInt(packetSize)
    )
  )
  poolCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "isFixedTerm",
      ethereum.Value.fromBoolean(isFixedTerm)
    )
  )
  poolCreatedEvent.parameters.push(
    new ethereum.EventParam("poolName", ethereum.Value.fromString(poolName))
  )
  poolCreatedEvent.parameters.push(
    new ethereum.EventParam("creator", ethereum.Value.fromAddress(creator))
  )

  return poolCreatedEvent
}

export function createVaultAdapterRegisteredEvent(
  underlyingVault: Address,
  vaultAdapter: Address,
  vaultAsset: Address
): VaultAdapterRegistered {
  let vaultAdapterRegisteredEvent = changetype<VaultAdapterRegistered>(
    newMockEvent()
  )

  vaultAdapterRegisteredEvent.parameters = new Array()

  vaultAdapterRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "underlyingVault",
      ethereum.Value.fromAddress(underlyingVault)
    )
  )
  vaultAdapterRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "vaultAdapter",
      ethereum.Value.fromAddress(vaultAdapter)
    )
  )
  vaultAdapterRegisteredEvent.parameters.push(
    new ethereum.EventParam(
      "vaultAsset",
      ethereum.Value.fromAddress(vaultAsset)
    )
  )

  return vaultAdapterRegisteredEvent
}

export function createWithdrawERC20OutputReceiverEvent(
  caller: Address,
  token: Address,
  amountTokens: BigInt,
  fnftId: BigInt,
  extraData: Bytes
): WithdrawERC20OutputReceiver {
  let withdrawErc20OutputReceiverEvent = changetype<
    WithdrawERC20OutputReceiver
  >(newMockEvent())

  withdrawErc20OutputReceiverEvent.parameters = new Array()

  withdrawErc20OutputReceiverEvent.parameters.push(
    new ethereum.EventParam("caller", ethereum.Value.fromAddress(caller))
  )
  withdrawErc20OutputReceiverEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  withdrawErc20OutputReceiverEvent.parameters.push(
    new ethereum.EventParam(
      "amountTokens",
      ethereum.Value.fromUnsignedBigInt(amountTokens)
    )
  )
  withdrawErc20OutputReceiverEvent.parameters.push(
    new ethereum.EventParam("fnftId", ethereum.Value.fromUnsignedBigInt(fnftId))
  )
  withdrawErc20OutputReceiverEvent.parameters.push(
    new ethereum.EventParam("extraData", ethereum.Value.fromBytes(extraData))
  )

  return withdrawErc20OutputReceiverEvent
}
