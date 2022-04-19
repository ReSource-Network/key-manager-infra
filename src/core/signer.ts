import { Signer } from "@ethersproject/abstract-signer"
import { hexValue } from "@ethersproject/bytes"
import { Provider, TransactionRequest, TransactionResponse } from "@ethersproject/providers"
import { logger, VoidSigner } from "ethers"
import { Deferrable, Logger } from "ethers/lib/utils"

import {
  SignETHTransactionRequest,
  SignMessageRequest,
  SignTypedDataRequest,
  TransactionType,
} from "../api"
import { sign, signMessage, signTypedData } from "./sig"

export class RemoteSigner extends Signer {
  public provider?: Provider | undefined
  readonly address: string
  readonly chainId: number

  constructor({
    address,
    chainId,
    provider,
  }: {
    address: string
    chainId: number
    provider?: Provider
  }) {
    super()
    this.address = address
    this.chainId = chainId
    this.provider = provider
  }

  getAddress(): Promise<string> {
    return Promise.resolve(this.address)
  }

  fail(message: string, operation: string): Promise<any> {
    return Promise.resolve().then(() => {
      logger.throwError(message, Logger.errors.UNSUPPORTED_OPERATION, { operation: operation })
    })
  }

  async sendTransaction(transaction: Deferrable<TransactionRequest>): Promise<TransactionResponse> {
    if (!this.provider) throw new Error("no provider set")
    const signedTx = await this.signTransaction(transaction as any)
    return await this.provider.sendTransaction(signedTx)
  }

  public async signMessage(message: string) {
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

  public async signTransaction(txObject: SignETHTransactionRequest) {
    return await sign(
      {
        ...txObject,
        chainID: hexValue(this.chainId),
        transactionType: TransactionType.DYNAMIC_FEE,
      },
      this.address,
    )
  }

  public async signTypedData(typedData: SignTypedDataRequest): Promise<string> {
    return await signTypedData(
      {
        ...typedData,
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

  public connect(provider: Provider): RemoteSigner {
    return new RemoteSigner({ address: this.address, chainId: this.chainId, provider })
  }
}

export function defineReadOnly<T, K extends keyof T>(object: T, name: K, value: T[K]): void {
  Object.defineProperty(object, name, {
    enumerable: true,
    value: value,
    writable: false,
  })
}
