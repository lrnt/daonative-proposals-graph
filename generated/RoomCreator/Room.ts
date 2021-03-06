// THIS IS AN AUTOGENERATED FILE. DO NOT EDIT THIS FILE DIRECTLY.

import {
  ethereum,
  JSONValue,
  TypedMap,
  Entity,
  Bytes,
  Address,
  BigInt
} from "@graphprotocol/graph-ts";


export class SubmitProposal extends ethereum.Event {
  get params(): SubmitProposal__Params {
    return new SubmitProposal__Params(this);
  }
}

export class SubmitProposal__Params {
  _event: SubmitProposal;

  constructor(event: SubmitProposal) {
    this._event = event;
  }

  get id(): Bytes {
    const params = this._event.parameters[0].value.toTuple()
    return params[0].toBytes();
  }

  get creator(): Bytes {
    const params = this._event.parameters[0].value.toTuple()
    return params[1].toBytes();
  }

  get uri(): String {
    const params = this._event.parameters[0].value.toTuple()
    return params[2].toString();
  }

  get amount(): BigInt {
    const params = this._event.parameters[0].value.toTuple()
    return params[3].toBigInt();
  }

  get state(): i32 {
    const params = this._event.parameters[0].value.toTuple()
    return params[3].toI32();
  }
}

export class Approve extends ethereum.Event {
  get params(): Approve__Params {
    return new Approve__Params(this);
  }
}

export class Approve__Params {
  _event: Approve;

  constructor(event: Approve) {
    this._event = event;
  }

  get amount(): BigInt {
    return this._event.parameters[0].value.toBigInt();
  }

  get proposalId(): Bytes {
    return this._event.parameters[1].value.toBytes();
  }
}

export class Close extends ethereum.Event {
  get params(): Close__Params {
    return new Close__Params(this);
  }
}

export class Close__Params {
  _event: Close;

  constructor(event: Close) {
    this._event = event;
  }

  get proposalId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }
}

export class Reject extends ethereum.Event {
  get params(): Reject__Params {
    return new Reject__Params(this);
  }
}

export class Reject__Params {
  _event: Reject;

  constructor(event: Reject) {
    this._event = event;
  }

  get proposalId(): Bytes {
    return this._event.parameters[0].value.toBytes();
  }
}

export class Transfer extends ethereum.Event {
  get params(): Transfer__Params {
    return new Transfer__Params(this);
  }
}

export class Transfer__Params {
  _event: Transfer;

  constructor(event: Transfer) {
    this._event = event;
  }

  get from(): Address {
    return this._event.parameters[0].value.toAddress();
  }

  get to(): Address {
    return this._event.parameters[1].value.toAddress();
  }

  get value(): BigInt {
    return this._event.parameters[2].value.toBigInt();
  }
}

export class Room__getProposalResultValue0Struct extends ethereum.Tuple {
  get id(): Bytes {
    return this[0].toBytes();
  }

  get creator(): Address {
    return this[1].toAddress();
  }

  get uri(): string {
    return this[2].toString();
  }

  get amount(): BigInt {
    return this[3].toBigInt();
  }

  get state(): i32 {
    return this[4].toI32();
  }
}

export class Room__proposalsResult {
  value0: Bytes;
  value1: Address;
  value2: string;
  value3: BigInt;
  value4: i32;

  constructor(
    value0: Bytes,
    value1: Address,
    value2: string,
    value3: BigInt,
    value4: i32
  ) {
    this.value0 = value0;
    this.value1 = value1;
    this.value2 = value2;
    this.value3 = value3;
    this.value4 = value4;
  }

  toMap(): TypedMap<string, ethereum.Value> {
    let map = new TypedMap<string, ethereum.Value>();
    map.set("value0", ethereum.Value.fromFixedBytes(this.value0));
    map.set("value1", ethereum.Value.fromAddress(this.value1));
    map.set("value2", ethereum.Value.fromString(this.value2));
    map.set("value3", ethereum.Value.fromUnsignedBigInt(this.value3));
    map.set(
      "value4",
      ethereum.Value.fromUnsignedBigInt(BigInt.fromI32(this.value4))
    );
    return map;
  }
}

export class Room extends ethereum.SmartContract {
  static bind(address: Address): Room {
    return new Room("Room", address);
  }

  allProposals(param0: BigInt): Bytes {
    let result = super.call("allProposals", "allProposals(uint256):(bytes32)", [
      ethereum.Value.fromUnsignedBigInt(param0)
    ]);

    return result[0].toBytes();
  }

  try_allProposals(param0: BigInt): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "allProposals",
      "allProposals(uint256):(bytes32)",
      [ethereum.Value.fromUnsignedBigInt(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  balances(param0: Address): BigInt {
    let result = super.call("balances", "balances(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);

    return result[0].toBigInt();
  }

  try_balances(param0: Address): ethereum.CallResult<BigInt> {
    let result = super.tryCall("balances", "balances(address):(uint256)", [
      ethereum.Value.fromAddress(param0)
    ]);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  contributorProposals(param0: Address, param1: BigInt): Bytes {
    let result = super.call(
      "contributorProposals",
      "contributorProposals(address,uint256):(bytes32)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );

    return result[0].toBytes();
  }

  try_contributorProposals(
    param0: Address,
    param1: BigInt
  ): ethereum.CallResult<Bytes> {
    let result = super.tryCall(
      "contributorProposals",
      "contributorProposals(address,uint256):(bytes32)",
      [
        ethereum.Value.fromAddress(param0),
        ethereum.Value.fromUnsignedBigInt(param1)
      ]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytes());
  }

  getDeposit(): BigInt {
    let result = super.call("getDeposit", "getDeposit():(uint256)", []);

    return result[0].toBigInt();
  }

  try_getDeposit(): ethereum.CallResult<BigInt> {
    let result = super.tryCall("getDeposit", "getDeposit():(uint256)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBigInt());
  }

  getMyProposals(): Array<Bytes> {
    let result = super.call(
      "getMyProposals",
      "getMyProposals():(bytes32[])",
      []
    );

    return result[0].toBytesArray();
  }

  try_getMyProposals(): ethereum.CallResult<Array<Bytes>> {
    let result = super.tryCall(
      "getMyProposals",
      "getMyProposals():(bytes32[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytesArray());
  }

  getProposal(_proposalId: Bytes): Room__getProposalResultValue0Struct {
    let result = super.call(
      "getProposal",
      "getProposal(bytes32):((bytes32,address,string,uint256,uint8))",
      [ethereum.Value.fromFixedBytes(_proposalId)]
    );

    return changetype<Room__getProposalResultValue0Struct>(result[0].toTuple());
  }

  try_getProposal(
    _proposalId: Bytes
  ): ethereum.CallResult<Room__getProposalResultValue0Struct> {
    let result = super.tryCall(
      "getProposal",
      "getProposal(bytes32):((bytes32,address,string,uint256,uint8))",
      [ethereum.Value.fromFixedBytes(_proposalId)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      changetype<Room__getProposalResultValue0Struct>(value[0].toTuple())
    );
  }

  getProposals(): Array<Bytes> {
    let result = super.call("getProposals", "getProposals():(bytes32[])", []);

    return result[0].toBytesArray();
  }

  try_getProposals(): ethereum.CallResult<Array<Bytes>> {
    let result = super.tryCall(
      "getProposals",
      "getProposals():(bytes32[])",
      []
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toBytesArray());
  }

  getURI(): string {
    let result = super.call("getURI", "getURI():(string)", []);

    return result[0].toString();
  }

  try_getURI(): ethereum.CallResult<string> {
    let result = super.tryCall("getURI", "getURI():(string)", []);
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toString());
  }

  proposalToContributor(param0: Bytes): Address {
    let result = super.call(
      "proposalToContributor",
      "proposalToContributor(bytes32):(address)",
      [ethereum.Value.fromFixedBytes(param0)]
    );

    return result[0].toAddress();
  }

  try_proposalToContributor(param0: Bytes): ethereum.CallResult<Address> {
    let result = super.tryCall(
      "proposalToContributor",
      "proposalToContributor(bytes32):(address)",
      [ethereum.Value.fromFixedBytes(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(value[0].toAddress());
  }

  proposals(param0: Bytes): Room__proposalsResult {
    let result = super.call(
      "proposals",
      "proposals(bytes32):(bytes32,address,string,uint256,uint8)",
      [ethereum.Value.fromFixedBytes(param0)]
    );

    return new Room__proposalsResult(
      result[0].toBytes(),
      result[1].toAddress(),
      result[2].toString(),
      result[3].toBigInt(),
      result[4].toI32()
    );
  }

  try_proposals(param0: Bytes): ethereum.CallResult<Room__proposalsResult> {
    let result = super.tryCall(
      "proposals",
      "proposals(bytes32):(bytes32,address,string,uint256,uint8)",
      [ethereum.Value.fromFixedBytes(param0)]
    );
    if (result.reverted) {
      return new ethereum.CallResult();
    }
    let value = result.value;
    return ethereum.CallResult.fromValue(
      new Room__proposalsResult(
        value[0].toBytes(),
        value[1].toAddress(),
        value[2].toString(),
        value[3].toBigInt(),
        value[4].toI32()
      )
    );
  }
}

export class ConstructorCall extends ethereum.Call {
  get inputs(): ConstructorCall__Inputs {
    return new ConstructorCall__Inputs(this);
  }

  get outputs(): ConstructorCall__Outputs {
    return new ConstructorCall__Outputs(this);
  }
}

export class ConstructorCall__Inputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }

  get _creator(): Address {
    return this._call.inputValues[0].value.toAddress();
  }

  get _URI(): string {
    return this._call.inputValues[1].value.toString();
  }
}

export class ConstructorCall__Outputs {
  _call: ConstructorCall;

  constructor(call: ConstructorCall) {
    this._call = call;
  }
}

export class ApproveProposalCall extends ethereum.Call {
  get inputs(): ApproveProposalCall__Inputs {
    return new ApproveProposalCall__Inputs(this);
  }

  get outputs(): ApproveProposalCall__Outputs {
    return new ApproveProposalCall__Outputs(this);
  }
}

export class ApproveProposalCall__Inputs {
  _call: ApproveProposalCall;

  constructor(call: ApproveProposalCall) {
    this._call = call;
  }

  get proposalId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class ApproveProposalCall__Outputs {
  _call: ApproveProposalCall;

  constructor(call: ApproveProposalCall) {
    this._call = call;
  }
}

export class CloseProposalCall extends ethereum.Call {
  get inputs(): CloseProposalCall__Inputs {
    return new CloseProposalCall__Inputs(this);
  }

  get outputs(): CloseProposalCall__Outputs {
    return new CloseProposalCall__Outputs(this);
  }
}

export class CloseProposalCall__Inputs {
  _call: CloseProposalCall;

  constructor(call: CloseProposalCall) {
    this._call = call;
  }

  get proposalId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class CloseProposalCall__Outputs {
  _call: CloseProposalCall;

  constructor(call: CloseProposalCall) {
    this._call = call;
  }
}

export class DepositCall extends ethereum.Call {
  get inputs(): DepositCall__Inputs {
    return new DepositCall__Inputs(this);
  }

  get outputs(): DepositCall__Outputs {
    return new DepositCall__Outputs(this);
  }
}

export class DepositCall__Inputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }
}

export class DepositCall__Outputs {
  _call: DepositCall;

  constructor(call: DepositCall) {
    this._call = call;
  }
}

export class EmergencyWithdrawalCall extends ethereum.Call {
  get inputs(): EmergencyWithdrawalCall__Inputs {
    return new EmergencyWithdrawalCall__Inputs(this);
  }

  get outputs(): EmergencyWithdrawalCall__Outputs {
    return new EmergencyWithdrawalCall__Outputs(this);
  }
}

export class EmergencyWithdrawalCall__Inputs {
  _call: EmergencyWithdrawalCall;

  constructor(call: EmergencyWithdrawalCall) {
    this._call = call;
  }
}

export class EmergencyWithdrawalCall__Outputs {
  _call: EmergencyWithdrawalCall;

  constructor(call: EmergencyWithdrawalCall) {
    this._call = call;
  }
}

export class RejectProposalCall extends ethereum.Call {
  get inputs(): RejectProposalCall__Inputs {
    return new RejectProposalCall__Inputs(this);
  }

  get outputs(): RejectProposalCall__Outputs {
    return new RejectProposalCall__Outputs(this);
  }
}

export class RejectProposalCall__Inputs {
  _call: RejectProposalCall;

  constructor(call: RejectProposalCall) {
    this._call = call;
  }

  get proposalId(): Bytes {
    return this._call.inputValues[0].value.toBytes();
  }
}

export class RejectProposalCall__Outputs {
  _call: RejectProposalCall;

  constructor(call: RejectProposalCall) {
    this._call = call;
  }
}

export class SubmitProposalCall extends ethereum.Call {
  get inputs(): SubmitProposalCall__Inputs {
    return new SubmitProposalCall__Inputs(this);
  }

  get outputs(): SubmitProposalCall__Outputs {
    return new SubmitProposalCall__Outputs(this);
  }
}

export class SubmitProposalCall__Inputs {
  _call: SubmitProposalCall;

  constructor(call: SubmitProposalCall) {
    this._call = call;
  }

  get _uri(): string {
    return this._call.inputValues[0].value.toString();
  }

  get _amount(): BigInt {
    return this._call.inputValues[1].value.toBigInt();
  }
}

export class SubmitProposalCall__Outputs {
  _call: SubmitProposalCall;

  constructor(call: SubmitProposalCall) {
    this._call = call;
  }
}

export class WithdrawCall extends ethereum.Call {
  get inputs(): WithdrawCall__Inputs {
    return new WithdrawCall__Inputs(this);
  }

  get outputs(): WithdrawCall__Outputs {
    return new WithdrawCall__Outputs(this);
  }
}

export class WithdrawCall__Inputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }

  get _amount(): BigInt {
    return this._call.inputValues[0].value.toBigInt();
  }
}

export class WithdrawCall__Outputs {
  _call: WithdrawCall;

  constructor(call: WithdrawCall) {
    this._call = call;
  }
}
