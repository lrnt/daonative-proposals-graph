import { Approve, Close, Reject, Room as RoomContract, SubmitProposal } from "../../generated/templates/Room/Room"
import { Proposal } from "../../generated/schema"
import { Address, Bytes, log } from "@graphprotocol/graph-ts"

function updateProposal(roomAddress: Address, id: Bytes): void {
  const contract = RoomContract.bind(roomAddress)
  const bProposal = contract.getProposal(id)
  let proposal = Proposal.load(id.toHex())
  if (proposal == null) {
    proposal = new Proposal(id.toHex())
  }
  proposal.amount = bProposal.amount
  proposal.uri = bProposal.uri
  proposal.room = roomAddress.toHex()
  proposal.status = getReadableStatus(bProposal.state)
  proposal.save()
}

function getReadableStatus(status: u32): string {
  switch(status) {
    case 0: {
      return "pending"
    }
    case 1: {
      return "approved"
    }
    case 2: {
      return "closed"
    }
    case 3: {
      return "rejected"
    }
  }

  return "unkown"
}

export function handleApproveProposal(event: Approve): void {
  updateProposal(event.address, event.params.proposalId)
}

export function handleRejectProposal(event: Reject): void {
  updateProposal(event.address, event.params.proposalId)
}

export function handleCloseProposal(event: Close): void {
  updateProposal(event.address, event.params.proposalId)
}

export function handleSubmitProposal(event: SubmitProposal): void {
  updateProposal(event.address, event.params.id)
}