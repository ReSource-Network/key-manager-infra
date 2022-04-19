import type {
  SignBase64PayloadRequest,
  PageResponse,
  CreateKeyRequest,
  UpdateKeyRequest,
  KeyResponse,
  ImportKeyRequest,
} from "../models"

import { CancelablePromise, KeyManagerApi, request as __request } from "../config"

export class KeysService {
  /**
   * List Key ids
   * List key's IDs allocated on targeted Store
   * @param storeName Store identifier
   * @param limit page size
   * @param page page number
   * @param deleted filter by only deleted keys
   * @returns PageResponse List of key ids
   * @throws ApiError
   */
  public static getStoresKeys(
    storeName: string,
    limit?: number,
    page?: number,
    deleted?: boolean,
  ): CancelablePromise<Array<PageResponse>> {
    return __request(KeyManagerApi, {
      method: "GET",
      url: "/stores/{storeName}/keys",
      path: {
        storeName: storeName,
      },
      query: {
        limit: limit,
        page: page,
        deleted: deleted,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        500: `Internal server error`,
      },
    })
  }

  /**
   * Get key by ID
   * Retrieve a key by its ID
   * @param storeName Store identifier
   * @param id Key identifier
   * @param deleted filter by only deleted keys
   * @returns KeyResponse Key data
   * @throws ApiError
   */
  public static getStoresKeys1(
    storeName: string,
    id: string,
    deleted?: boolean,
  ): CancelablePromise<KeyResponse> {
    return __request(KeyManagerApi, {
      method: "GET",
      url: "/stores/{storeName}/keys/{id}",
      path: {
        storeName: storeName,
        id: id,
      },
      query: {
        deleted: deleted,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Store/Key not found`,
        500: `Internal server error`,
      },
    })
  }

  /**
   * Create new Key
   * Create a new key pair using the specified Ecliptic Curve and Signing algorithm
   * @param id Key ID
   * @param storeName Store identifier
   * @param request Create key request
   * @returns KeyResponse Key data
   * @throws ApiError
   */
  public static postStoresKeys(
    id: string,
    storeName: string,
    request: CreateKeyRequest,
  ): CancelablePromise<KeyResponse> {
    return __request(KeyManagerApi, {
      method: "POST",
      url: "/stores/{storeName}/keys/{id}",
      path: {
        id: id,
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
   * Soft-delete Key
   * Delete a key by its ID. Key can be recovered
   * @param storeName Store identifier
   * @param id Key identifier
   * @returns void
   * @throws ApiError
   */
  public static deleteStoresKeys(storeName: string, id: string): CancelablePromise<void> {
    return __request(KeyManagerApi, {
      method: "DELETE",
      url: "/stores/{storeName}/keys/{id}",
      path: {
        storeName: storeName,
        id: id,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Store/Key not found`,
        500: `Internal server error`,
      },
    })
  }

  /**
   * Update a key
   * Update the key tags of a specific key by its ID
   * @param storeName Store identifier
   * @param id Key identifier
   * @param request Update key request
   * @returns KeyResponse Key data
   * @throws ApiError
   */
  public static patchStoresKeys(
    storeName: string,
    id: string,
    request: UpdateKeyRequest,
  ): CancelablePromise<KeyResponse> {
    return __request(KeyManagerApi, {
      method: "PATCH",
      url: "/stores/{storeName}/keys/{id}",
      path: {
        storeName: storeName,
        id: id,
      },
      body: request,
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Store/Key not found`,
        500: `Internal server error`,
      },
    })
  }

  /**
   * Destroy a Key
   * Permanently delete a key by ID
   * @param storeName Store identifier
   * @param id Key identifier
   * @returns void
   * @throws ApiError
   */
  public static deleteStoresKeysDestroy(storeName: string, id: string): CancelablePromise<void> {
    return __request(KeyManagerApi, {
      method: "DELETE",
      url: "/stores/{storeName}/keys/{id}/destroy",
      path: {
        storeName: storeName,
        id: id,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Store/Key not found`,
        500: `Internal server error`,
      },
    })
  }

  /**
   * Import Key
   * Import a private Key using the specified Ecliptic Curve and Signing algorithm
   * @param id Key ID
   * @param storeName Store identifier
   * @param request Create key request
   * @returns KeyResponse Key data
   * @throws ApiError
   */
  public static postStoresKeysImport(
    id: string,
    storeName: string,
    request: ImportKeyRequest,
  ): CancelablePromise<KeyResponse> {
    return __request(KeyManagerApi, {
      method: "POST",
      url: "/stores/{storeName}/keys/{id}/import",
      path: {
        id: id,
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
   * Restore a soft-deleted key
   * Restore a soft-deleted key by its ID
   * @param storeName Store identifier
   * @param id Key identifier
   * @returns void
   * @throws ApiError
   */
  public static putStoresKeysRestore(storeName: string, id: string): CancelablePromise<void> {
    return __request(KeyManagerApi, {
      method: "PUT",
      url: "/stores/{storeName}/keys/{id}/restore",
      path: {
        storeName: storeName,
        id: id,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Store/Key not found`,
        500: `Internal server error`,
      },
    })
  }

  /**
   * Sign random payload
   * Sign a random payload using the selected key
   * @param storeName Store identifier
   * @param id Key identifier
   * @param request Signing request
   * @returns string signature in base64
   * @throws ApiError
   */
  public static postStoresKeysSign(
    storeName: string,
    id: string,
    request: SignBase64PayloadRequest,
  ): CancelablePromise<string> {
    return __request(KeyManagerApi, {
      method: "POST",
      url: "/stores/{storeName}/keys/{id}/sign",
      path: {
        storeName: storeName,
        id: id,
      },
      body: request,
      errors: {
        400: `Invalid request format`,
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Store/Key not found`,
        500: `Internal server error`,
      },
    })
  }
}
