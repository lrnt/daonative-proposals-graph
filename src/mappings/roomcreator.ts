import { RoomCreated } from "../../generated/RoomCreator/RoomCreator"
import { Room as RoomTemplate } from "../../generated/templates"
import { Room as RoomContract } from "../../generated/templates/Room/Room"
import { Room } from "../../generated/schema"

import { log } from "@graphprotocol/graph-ts"

export function handleRoomCreated(event: RoomCreated): void {
  log.info("handleRoomCreated called", [])
  let address = event.params.newRoom
  const contract = RoomContract.bind(address)
  const uri = contract.getURI()
  let room = new Room(address.toHex())
  room.uri = uri
  room.save()

  RoomTemplate.create(address)
}