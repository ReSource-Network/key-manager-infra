import {
  EthereumService,
  SignETHTransactionRequest,
  SignMessageRequest,
  SignTypedDataRequest,
} from "../api"

export const sign = async (sigParams: SignETHTransactionRequest, address) => {
  return await EthereumService.postStoresEthereumSignTransaction(
    "hashicorp-eth",
    address,
    sigParams,
  )
}

export const signMessage = async (sigParams: SignMessageRequest, address) => {
  return await EthereumService.postStoresEthereumSignMessage("hashicorp-eth", address, sigParams)
}

export const signTypedData = async (sigParams: SignTypedDataRequest, address) => {
  return await EthereumService.postStoresEthereumSignTypedData("hashicorp-eth", address, sigParams)
}
