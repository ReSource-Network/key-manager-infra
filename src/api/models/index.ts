export type Annotation = {
  AWSAccountID?: string
  AWSArn?: string
  AWSCloudHsmClusterID?: string
  AWSCustomKeyStoreID?: string
  AWSKeyID?: string
}

export type ErrorResponse = {
  code?: string
  message?: string
}

export type PagePagingResponse = {
  next?: string
  previous?: string
}

export type PageResponse = {
  data?: Array<string>
  paging?: PagePagingResponse
}

export type AliasRequest = {
  type: string
  value: string
}

export type AliasResponse = {
  createdAt?: string
  key?: string
  registry?: string
  type?: string
  updatedAt?: string
  value?: string
}

export type CreateEthAccountRequest = {
  keyId?: string
  tags?: Record<string, string>
}

export type CreateKeyRequest = {
  curve: CurveEnum
  signingAlgorithm: SigningAlgorithmEnum
  tags?: Record<string, string>
}

export type DomainSeparator = {
  chainID: number
  name: string
  salt?: string
  verifyingContract?: string
  version: string
}

export type ECRecoverRequest = {
  data: string
  signature: string
}

export type EthAccountResponse = {
  address?: string
  compressedPublicKey?: string
  createdAt?: string
  deletedAt?: string
  disabled?: boolean
  keyId?: string
  publicKey?: string
  tags?: Record<string, string>
  updatedAt?: string
}

export type ImportEthAccountRequest = {
  keyId?: string
  privateKey: string
  tags?: Record<string, string>
}

export type ImportKeyRequest = {
  curve: CurveEnum
  privateKey: string
  signingAlgorithm: SigningAlgorithmEnum
  tags?: Record<string, string>
}

export enum CurveEnum {
  BABYJUBJUB = "babyjubjub",
  SECP256K1 = "secp256k1",
}

export enum SigningAlgorithmEnum {
  ECDSA = "ecdsa",
  EDDSA = "eddsa",
}

export type KeyResponse = {
  annotations?: Annotation
  createdAt?: string
  curve?: string
  deletedAt?: string
  disabled?: boolean
  id?: string
  publicKey?: string
  signingAlgorithm?: string
  tags?: Record<string, string>
  updatedAt?: string
}

export type RegistryResponse = {
  aliases?: Array<AliasResponse>
  allowedTenants?: Array<string>
  createdAt?: string
  name?: string
  updatedAt?: string
}

export type SecretResponse = {
  createdAt?: string
  deletedAt?: string
  disabled?: boolean
  id?: string
  tags?: Record<string, string>
  updatedAt?: string
  value?: string
  version?: string
}

export type SetSecretRequest = {
  tags?: Record<string, string>
  value: string
}

export type SignBase64PayloadRequest = {
  data: string
}

export type SignEEATransactionRequest = {
  chainID: string
  data?: string
  gasLimit?: string
  gasPrice?: string
  nonce?: string
  privacyGroupId?: string
  privateFor?: Array<string>
  privateFrom: string
  to?: string
  value?: string
}

export type SignETHTransactionRequest = {
  accessList?: Array<any | any[]>
  chainID?: string
  data?: string
  gasLimit: string
  gasPrice?: string
  maxFeePerGas?: string
  maxPriorityFeePerGas?: string
  nonce?: string
  to?: string
  transactionType?: TransactionType
  value?: string
}

export enum TransactionType {
  LEGACY = "legacy",
  ACCESS_LIST = "access_list",
  DYNAMIC_FEE = "dynamic_fee",
}

export type SignMessageRequest = {
  message: string
}

export type SignQuorumPrivateTransactionRequest = {
  data?: string
  gasLimit: string
  gasPrice: string
  nonce?: string
  to?: string
  value?: string
}

export type SignTypedDataRequest = {
  domainSeparator: DomainSeparator
  message: any
  messageType: string
  types: Record<string, Array<Type>>
}

export type Type = {
  name: string
  type: string
}

export type UpdateEthAccountRequest = {
  tags?: Record<string, string>
}

export type UpdateKeyRequest = {
  tags?: Record<string, string>
}

export type VerifyKeySignatureRequest = {
  curve: CurveEnum
  data: string
  publicKey: string
  signature: string
  signingAlgorithm: SigningAlgorithmEnum
}

export type VerifyRequest = {
  address: string
  data: string
  signature: string
}

export type VerifyTypedDataRequest = {
  address: string
  data: SignTypedDataRequest
  signature: string
}
