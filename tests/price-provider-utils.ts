import { newMockEvent } from "matchstick-as"
import { ethereum, Address } from "@graphprotocol/graph-ts"
import {
  PriceProviderOwnershipTransferred,
  SetTokenOracle
} from "../generated/PriceProvider/PriceProvider"

export function createPriceProviderOwnershipTransferredEvent(
  previousOwner: Address,
  newOwner: Address
): PriceProviderOwnershipTransferred {
  let priceProviderOwnershipTransferredEvent = changetype<
    PriceProviderOwnershipTransferred
  >(newMockEvent())

  priceProviderOwnershipTransferredEvent.parameters = new Array()

  priceProviderOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam(
      "previousOwner",
      ethereum.Value.fromAddress(previousOwner)
    )
  )
  priceProviderOwnershipTransferredEvent.parameters.push(
    new ethereum.EventParam("newOwner", ethereum.Value.fromAddress(newOwner))
  )

  return priceProviderOwnershipTransferredEvent
}

export function createSetTokenOracleEvent(
  token: Address,
  oracle: Address
): SetTokenOracle {
  let setTokenOracleEvent = changetype<SetTokenOracle>(newMockEvent())

  setTokenOracleEvent.parameters = new Array()

  setTokenOracleEvent.parameters.push(
    new ethereum.EventParam("token", ethereum.Value.fromAddress(token))
  )
  setTokenOracleEvent.parameters.push(
    new ethereum.EventParam("oracle", ethereum.Value.fromAddress(oracle))
  )

  return setTokenOracleEvent
}
