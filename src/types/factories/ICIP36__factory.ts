/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Contract, Signer, utils } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ICIP36, ICIP36Interface } from "../ICIP36";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "_requester",
        type: "address",
      },
      {
        internalType: "address",
        name: "_member",
        type: "address",
      },
    ],
    name: "canRequestCredit",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_member",
        type: "address",
      },
    ],
    name: "creditBalanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_member",
        type: "address",
      },
    ],
    name: "creditLimitLeftOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_member",
        type: "address",
      },
    ],
    name: "creditLimitOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
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
        name: "_limit",
        type: "uint256",
      },
    ],
    name: "setCreditLimit",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

export class ICIP36__factory {
  static readonly abi = _abi;
  static createInterface(): ICIP36Interface {
    return new utils.Interface(_abi) as ICIP36Interface;
  }
  static connect(address: string, signerOrProvider: Signer | Provider): ICIP36 {
    return new Contract(address, _abi, signerOrProvider) as ICIP36;
  }
}
