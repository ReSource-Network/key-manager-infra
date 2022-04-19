import { CreateEthAccountRequest, EthereumService } from "../api"
import { v4 } from "uuid"

export const createAccount = async (meta?: CreateEthAccountRequest) => {
  const id = meta && meta.keyId ? meta.keyId : v4()
  const tags = meta && meta.tags ? meta.tags : {}

  return await EthereumService.postStoresEthereum("hashicorp-eth", {
    keyId: id,
    tags: tags,
  })
}

export const fetchAccount = async (address: string) => {
  return await EthereumService.getStoresEthereum("hashicorp-eth", address)
}
