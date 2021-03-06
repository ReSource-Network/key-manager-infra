import { hexValue } from "@ethersproject/bytes"
import { JsonRpcProvider } from "@ethersproject/providers"
import { Contract } from "ethers"
import { parseEther } from "ethers/lib/utils"

import { RemoteSigner } from "../core"
import { createAccount } from "../core/account"
import { MockERC20 } from "../types"
import { MockERC20__factory } from "../types/factories/MockERC20__factory"

const getSigner = async () => {
  try {
    const address = "0x71626773cec0c77fb9e6229d4cb0fb3cd38710cc"
    const provider = new JsonRpcProvider("http://localhost:8545")
    const signer = new RemoteSigner({
      chainId: 31337,
      address: address,
      provider: provider,
    })

    return { signer, provider }
  } catch (e) {
    throw e
  }
}

const main = async () => {
  const { signer, provider } = await getSigner()
  const toAddr = (await createAccount()).address
  const erc20Addr = "0x95401dc811bb5740090279Ba06cfA8fcF6113778" // TODO add erc20 contract address

  const erc20 = new Contract(erc20Addr, MockERC20__factory.createInterface(), signer) as MockERC20
  const { data } = await erc20.populateTransaction.transfer(toAddr ?? "", parseEther("1"))
  const gasLimit = await erc20.estimateGas.transfer(toAddr ?? "", parseEther("1"))
  const { maxFeePerGas, maxPriorityFeePerGas } = await provider.getFeeData()

  const sent = await signer.sendTransaction({
    data: data,
    to: toAddr,
    nonce: hexValue(await provider.getTransactionCount(signer.address)),
    gasLimit: hexValue(gasLimit || 0),
    maxFeePerGas: hexValue(maxFeePerGas || 0),
    maxPriorityFeePerGas: hexValue(maxPriorityFeePerGas || 0),
  })

  const confirmed = await provider.waitForTransaction(sent.hash)

  console.log(confirmed)
}
main().then(() => {
  process.exit(0)
})
