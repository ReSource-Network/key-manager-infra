/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PageResponse } from "../models"
import type { CreateEthAccountRequest } from "../models"
import type { EthAccountResponse } from "../models"
import type { ImportEthAccountRequest } from "../models"
import type { SignEEATransactionRequest } from "../models"
import type { SignETHTransactionRequest } from "../models"
import type { SignMessageRequest } from "../models"
import type { SignQuorumPrivateTransactionRequest } from "../models"
import type { SignTypedDataRequest } from "../models"
import type { UpdateEthAccountRequest } from "../models"

import type { CancelablePromise } from "../config/promise"
import { KeyManagerApi } from "../config/api"
import { request as __request } from "../config/request"

export class EthereumService {
  /**
   * Create an Ethereum Account
   * Create a new ECDSA Secp256k1 key representing an Ethereum Account
   * @param storeName Store ID
   * @param request Create Ethereum Account request
   * @returns EthAccountResponse Created Ethereum Account
   * @throws ApiError
   */
  public static postStoresEthereum(
    storeName: string,
    request: CreateEthAccountRequest,
  ): CancelablePromise<EthAccountResponse> {
    return __request(KeyManagerApi, {
      method: "POST",
      url: "/stores/{storeName}/ethereum",
      path: {
        storeName: storeName,
      },
      body: request,
      errors: {
        400: `Invalid request format`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Store not found`,
        500: `Internal server error`,
      },
    })
  }

  /**
   * Import an Ethereum Account
   * Import an ECDSA Secp256k1 key representing an Ethereum account
   * @param storeName Store ID
   * @param request Create Ethereum Account request
   * @returns EthAccountResponse Created Ethereum Account
   * @throws ApiError
   */
  public static postStoresEthereumImport(
    storeName: string,
    request: ImportEthAccountRequest,
  ): CancelablePromise<EthAccountResponse> {
    return __request(KeyManagerApi, {
      method: "POST",
      url: "/stores/{storeName}/ethereum/import",
      path: {
        storeName: storeName,
      },
      body: request,
      errors: {
        400: `Invalid request format`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Store not found`,
        500: `Internal server error`,
      },
    })
  }

  /**
   * Get an Ethereum Account
   * Fetch an Ethereum Account data by its address
   * @param storeName Store ID
   * @param address Ethereum address
   * @param deleted filter by only deleted accounts
   * @returns EthAccountResponse Ethereum Account data
   * @throws ApiError
   */
  public static getStoresEthereum(
    storeName: string,
    address: string,
    deleted?: boolean,
  ): CancelablePromise<EthAccountResponse> {
    return __request(KeyManagerApi, {
      method: "GET",
      url: "/stores/{storeName}/ethereum/{address}",
      path: {
        storeName: storeName,
        address: address,
      },
      query: {
        deleted: deleted,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Store/Account not found`,
        500: `Internal server error`,
      },
    })
  }

  /**
   * Delete Ethereum Account
   * Soft delete an Ethereum Account, can be recovered
   * @param storeName Store ID
   * @param address Ethereum address
   * @returns void
   * @throws ApiError
   */
  public static deleteStoresEthereum(storeName: string, address: string): CancelablePromise<void> {
    return __request(KeyManagerApi, {
      method: "DELETE",
      url: "/stores/{storeName}/ethereum/{address}",
      path: {
        storeName: storeName,
        address: address,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Store/Account not found`,
        500: `Internal server error`,
      },
    })
  }

  /**
   * Update an Ethereum Account
   * Update an Ethereum Account metadata
   * @param storeName Store ID
   * @param address Ethereum address
   * @param request Update Ethereum Account metadata request
   * @returns EthAccountResponse Update Ethereum Account
   * @throws ApiError
   */
  public static patchStoresEthereum(
    storeName: string,
    address: string,
    request: UpdateEthAccountRequest,
  ): CancelablePromise<EthAccountResponse> {
    return __request(KeyManagerApi, {
      method: "PATCH",
      url: "/stores/{storeName}/ethereum/{address}",
      path: {
        storeName: storeName,
        address: address,
      },
      body: request,
      errors: {
        400: `Invalid request format`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Store/Account not found`,
        500: `Internal server error`,
      },
    })
  }

  /**
   * Destroy Ethereum Account
   * Hard delete an Ethereum Account, cannot be recovered
   * @param storeName Store ID
   * @param address Ethereum address
   * @returns void
   * @throws ApiError
   */
  public static deleteStoresEthereumDestroy(
    storeName: string,
    address: string,
  ): CancelablePromise<void> {
    return __request(KeyManagerApi, {
      method: "DELETE",
      url: "/stores/{storeName}/ethereum/{address}/destroy",
      path: {
        storeName: storeName,
        address: address,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Store/Account not found`,
        500: `Internal server error`,
      },
    })
  }

  /**
   * Restore Ethereum Account
   * Recover a soft-deleted Ethereum Account
   * @param storeName Store ID
   * @param address Ethereum address
   * @returns void
   * @throws ApiError
   */
  public static putStoresEthereumRestore(
    storeName: string,
    address: string,
  ): CancelablePromise<void> {
    return __request(KeyManagerApi, {
      method: "PUT",
      url: "/stores/{storeName}/ethereum/{address}/restore",
      path: {
        storeName: storeName,
        address: address,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Store/Account not found`,
        500: `Internal server error`,
      },
    })
  }

  /**
   * Sign EEA transaction
   * Sign an EEA transaction using the identified Ethereum Account
   * @param storeName Store ID
   * @param address Ethereum address
   * @param request Sign EEA transaction request
   * @returns string Signed raw EEA transaction
   * @throws ApiError
   */
  public static postStoresEthereumSignEeaTransaction(
    storeName: string,
    address: string,
    request: SignEEATransactionRequest,
  ): CancelablePromise<string> {
    return __request(KeyManagerApi, {
      method: "POST",
      url: "/stores/{storeName}/ethereum/{address}/sign-eea-transaction",
      path: {
        storeName: storeName,
        address: address,
      },
      body: request,
      errors: {
        400: `Invalid request format`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Store/Account not found`,
        500: `Internal server error`,
      },
    })
  }

  /**
   * Sign a message (EIP-191)
   * Sign a message, following EIP-191, using an existing Ethereum Account
   * @param storeName Store ID
   * @param address Ethereum address
   * @param request Sign message request
   * @returns string Signed payload signature
   * @throws ApiError
   */
  public static postStoresEthereumSignMessage(
    storeName: string,
    address: string,
    request: SignMessageRequest,
  ): CancelablePromise<string> {
    return __request(KeyManagerApi, {
      method: "POST",
      url: "/stores/{storeName}/ethereum/{address}/sign-message",
      path: {
        storeName: storeName,
        address: address,
      },
      body: request,
      errors: {
        400: `Invalid request format`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Store/Account not found`,
        500: `Internal server error`,
      },
    })
  }

  /**
   * Sign Quorum private transaction
   * Sign a Quorum private transaction using the identified Ethereum Account
   * @param storeName Store ID
   * @param address Ethereum address
   * @param request Sign Quorum transaction request
   * @returns string Signed raw Quorum private transaction
   * @throws ApiError
   */
  public static postStoresEthereumSignQuorumPrivateTransaction(
    storeName: string,
    address: string,
    request: SignQuorumPrivateTransactionRequest,
  ): CancelablePromise<string> {
    return __request(KeyManagerApi, {
      method: "POST",
      url: "/stores/{storeName}/ethereum/{address}/sign-quorum-private-transaction",
      path: {
        storeName: storeName,
        address: address,
      },
      body: request,
      errors: {
        400: `Invalid request format`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Store/Account not found`,
        500: `Internal server error`,
      },
    })
  }

  /**
   * Sign Ethereum transaction
   * Sign an Ethereum transaction using the identified Ethereum Account
   * @param storeName Store ID
   * @param address Ethereum address
   * @param request Sign Ethereum transaction request
   * @returns string Signed raw transaction
   * @throws ApiError
   */
  public static postStoresEthereumSignTransaction(
    storeName: string,
    address: string,
    request: SignETHTransactionRequest,
  ): CancelablePromise<string> {
    return __request(KeyManagerApi, {
      method: "POST",
      url: "/stores/{storeName}/ethereum/{address}/sign-transaction",
      path: {
        storeName: storeName,
        address: address,
      },
      body: request,
      errors: {
        400: `Invalid request format`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Store/Account not found`,
        500: `Internal server error`,
      },
    })
  }

  /**
   * Sign Typed Data (EIP-712)
   * Sign Typed Data, following EIP-712, using identified Ethereum Account
   * @param storeName Store ID
   * @param address Ethereum address
   * @param request Sign typed data request
   * @returns string Signed typed data signature
   * @throws ApiError
   */
  public static postStoresEthereumSignTypedData(
    storeName: string,
    address: string,
    request: SignTypedDataRequest,
  ): CancelablePromise<string> {
    return __request(KeyManagerApi, {
      method: "POST",
      url: "/stores/{storeName}/ethereum/{address}/sign-typed-data",
      path: {
        storeName: storeName,
        address: address,
      },
      body: request,
      errors: {
        400: `Invalid request format`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Store/Account not found`,
        500: `Internal server error`,
      },
    })
  }
}
