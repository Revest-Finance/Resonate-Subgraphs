import {
  assert,
  describe,
  test,
  clearStore,
  beforeAll,
  afterAll
} from "matchstick-as/assembly/index"
import { Bytes, BigInt, Address } from "@graphprotocol/graph-ts"
import { BatchInterestClaimed } from "../generated/schema"
import { BatchInterestClaimed as BatchInterestClaimedEvent } from "../generated/Resonate/Resonate"
import { handleBatchInterestClaimed } from "../src/resonate"
import { createBatchInterestClaimedEvent } from "./resonate-utils"

// Tests structure (matchstick-as >=0.5.0)
// https://thegraph.com/docs/en/developer/matchstick/#tests-structure-0-5-0

describe("Describe entity assertions", () => {
  beforeAll(() => {
    let poolId = Bytes.fromI32(1234567890)
    let fnftIds = [BigInt.fromI32(234)]
    let claimer = Address.fromString(
      "0x0000000000000000000000000000000000000001"
    )
    let amountInterest = BigInt.fromI32(234)
    let newBatchInterestClaimedEvent = createBatchInterestClaimedEvent(
      poolId,
      fnftIds,
      claimer,
      amountInterest
    )
    handleBatchInterestClaimed(newBatchInterestClaimedEvent)
  })

  afterAll(() => {
    clearStore()
  })

  // For more test scenarios, see:
  // https://thegraph.com/docs/en/developer/matchstick/#write-a-unit-test

  test("BatchInterestClaimed created and stored", () => {
    assert.entityCount("BatchInterestClaimed", 1)

    // 0xa16081f360e3847006db660bae1c6d1b2e17ec2a is the default address used in newMockEvent() function
    assert.fieldEquals(
      "BatchInterestClaimed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "poolId",
      "1234567890"
    )
    assert.fieldEquals(
      "BatchInterestClaimed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "fnftIds",
      "[234]"
    )
    assert.fieldEquals(
      "BatchInterestClaimed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "claimer",
      "0x0000000000000000000000000000000000000001"
    )
    assert.fieldEquals(
      "BatchInterestClaimed",
      "0xa16081f360e3847006db660bae1c6d1b2e17ec2a-1",
      "amountInterest",
      "234"
    )

    // More assert options:
    // https://thegraph.com/docs/en/developer/matchstick/#asserts
  })
})
