/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type {
  INetworkFeeManager,
  INetworkFeeManagerInterface,
} from "../INetworkFeeManager";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "ambassador",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalRewards",
        type: "uint256",
      },
    ],
    name: "AmbassadorRewardsUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "member",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalFee",
        type: "uint256",
      },
    ],
    name: "FeesCollected",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "totalRewards",
        type: "uint256",
      },
    ],
    name: "NetworkRewardsUpdated",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "address",
        name: "claimer",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "totalRewards",
        type: "uint256",
      },
    ],
    name: "RewardsClaimed",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_member",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_transactionValue",
        type: "uint256",
      },
    ],
    name: "collectFees",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_network",
        type: "address",
      },
    ],
    name: "setNetwork",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class INetworkFeeManager__factory {
  static readonly abi = _abi;
  static createInterface(): INetworkFeeManagerInterface {
    return new utils.Interface(_abi) as INetworkFeeManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): INetworkFeeManager {
    return new Contract(address, _abi, signerOrProvider) as INetworkFeeManager;
  }
}
