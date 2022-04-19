import { URL } from "url"
import ProviderEngine from "web3-provider-engine"
import FiltersSubprovider from "web3-provider-engine/subproviders/filters"
import HookedSubprovider from "web3-provider-engine/subproviders/hooked-wallet"
import ProviderSubprovider from "web3-provider-engine/subproviders/provider"
import RpcProvider from "web3-provider-engine/subproviders/rpc"
import WebsocketProvider from "web3-provider-engine/subproviders/websocket"

import {
  SignETHTransactionRequest,
  SignMessageRequest,
  SignTypedDataRequest,
  TransactionType,
} from "../api"
import { sign, signMessage, signTypedData } from "./sig"
import { hexValue } from "@ethersproject/bytes"

type KeysProviderConstructor = {
  address: string
  providerOrUrl: string
  chainId: number
  shareNonce?: boolean
  pollingInterval?: number
}

export class KeysProvider {
  public address: string
  public chainId: number
  public engine: ProviderEngine

  constructor({
    address,
    providerOrUrl,
    chainId,
    pollingInterval = 4000,
  }: KeysProviderConstructor) {
    this.address = address
    this.chainId = chainId
    this.engine = new ProviderEngine({
      pollingInterval,
    })

    if (!KeysProvider.isValidProvider(providerOrUrl)) {
      throw new Error(
        [
          `Malformed provider URL: '${providerOrUrl}'`,
          "Please specify a correct URL, using the http, https, ws, or wss protocol.",
          "",
        ].join("\n"),
      )
    }

    this.engine.addProvider(new FiltersSubprovider())

    if (typeof providerOrUrl === "string") {
      const url = providerOrUrl

      const providerProtocol = (new URL(url).protocol || "http:").toLowerCase()

      switch (providerProtocol) {
        case "ws:":
        case "wss:":
          this.engine.addProvider(new WebsocketProvider({ rpcUrl: url }))
          break
        default:
          this.engine.addProvider(new RpcProvider({ rpcUrl: url }))
      }
    } else {
      const provider = providerOrUrl
      this.engine.addProvider(new ProviderSubprovider(provider))
    }

    this.engine.start((err: any) => {
      if (err) throw err
    })
  }

  public send(
    request: { method: string; params?: any[] },
    callback: (error: any, response: any) => void,
  ): void {
    Promise.resolve().then(() => {
      this.engine.sendAsync(request, callback)
    })
  }

  public sendAsync(
    request: { method: string; params?: any[] },
    callback: (error: any, response: any) => void,
  ): void {
    Promise.resolve().then(() => {
      this.engine.sendAsync(request, callback)
    })
  }

  public async signTypedData(typedData: SignTypedDataRequest): Promise<string> {
    return await signTypedData(
      {
        ...typedData,
      },
      this.address,
    )
  }

  public async getAddress(): Promise<string> {
    return this.address
  }

  public static isValidProvider(provider: string | any): boolean {
    const validProtocols = ["http:", "https:", "ws:", "wss:"]

    if (typeof provider === "string") {
      const url = new URL(provider.toLowerCase())
      return !!validProtocols.includes(url.protocol || "")
    }

    return true
  }

  public async signTransaction(txObject: SignETHTransactionRequest) {
    return await sign(
      {
        ...txObject,
        chainID: hexValue(this.chainId),
        transactionType: TransactionType.LEGACY,
      },
      this.address,
    )
  }

  public async signMessage({ message }: SignMessageRequest) {
    if (!message) {
      throw new Error("No message to sign")
    }

    return await signMessage(
      {
        message,
      },
      this.address,
    )
  }

  public async signPersonalMessage({ message }: SignMessageRequest) {
    return await signMessage(
      {
        message,
      },
      this.address,
    )
  }

  public async signTypedMessage(typedData: SignTypedDataRequest) {
    return await signTypedData(
      {
        ...typedData,
      },
      this.address,
    )
  }
}
