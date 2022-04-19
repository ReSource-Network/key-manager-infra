import type { CancelablePromise } from "../config"
import { KeyManagerApi, request as __request } from "../config"
import { PageResponse, SecretResponse, SetSecretRequest } from "../models"

export class SecretsService {
  /**
   * List secrets
   * List of secrets ids allocated in the targeted Store
   * @param storeName Store ID
   * @param deleted filter by deleted accounts
   * @param limit page size
   * @param page page number
   * @returns PageResponse List of Secret IDs
   * @throws ApiError
   */
  public static getStoresSecrets(
    storeName: string,
    deleted?: boolean,
    limit?: number,
    page?: number,
  ): CancelablePromise<Array<PageResponse>> {
    return __request(KeyManagerApi, {
      method: "GET",
      url: "/stores/{storeName}/secrets",
      path: {
        storeName: storeName,
      },
      query: {
        deleted: deleted,
        limit: limit,
        page: page,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Store not found`,
        500: `Internal server error`,
      },
    })
  }

  /**
   * Get a secret by id
   * Retrieve secret information by ID
   * @param storeName Store ID
   * @param id Secret ID
   * @param version secret version
   * @param deleted filter by only deleted accounts
   * @returns SecretResponse Secret object
   * @throws ApiError
   */
  public static getStoresSecrets1(
    storeName: string,
    id: string,
    version?: string,
    deleted?: boolean,
  ): CancelablePromise<SecretResponse> {
    return __request(KeyManagerApi, {
      method: "GET",
      url: "/stores/{storeName}/secrets/{id}",
      path: {
        storeName: storeName,
        id: id,
      },
      query: {
        version: version,
        deleted: deleted,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Store/Secret not found`,
        500: `Internal server error`,
      },
    })
  }

  /**
   * Create a secret
   * Create new secret on selected Store
   * @param id Secret ID
   * @param storeName Store ID
   * @param request Create Secret request
   * @returns SecretResponse Secret data
   * @throws ApiError
   */
  public static postStoresSecrets(
    id: string,
    storeName: string,
    request: SetSecretRequest,
  ): CancelablePromise<SecretResponse> {
    return __request(KeyManagerApi, {
      method: "POST",
      url: "/stores/{storeName}/secrets/{id}",
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
   * Delete a secret by id
   * Soft delete secret by id. It can be recovered
   * @param storeName Store ID
   * @param id Secret ID
   * @returns void
   * @throws ApiError
   */
  public static deleteStoresSecrets(storeName: string, id: string): CancelablePromise<void> {
    return __request(KeyManagerApi, {
      method: "DELETE",
      url: "/stores/{storeName}/secrets/{id}",
      path: {
        storeName: storeName,
        id: id,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Store/Secret not found`,
        500: `Internal server error`,
      },
    })
  }

  /**
   * Destroy a secret by ID
   * Permanently delete a secret by ID
   * @param storeName Secret ID
   * @param id Key ID
   * @returns void
   * @throws ApiError
   */
  public static deleteStoresSecretsDestroy(storeName: string, id: string): CancelablePromise<void> {
    return __request(KeyManagerApi, {
      method: "DELETE",
      url: "/stores/{storeName}/secrets/{id}/destroy",
      path: {
        storeName: storeName,
        id: id,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Store/Secret not found`,
        500: `Internal server error`,
      },
    })
  }

  /**
   * Restore a soft-deleted secret
   * Restore a previously soft-deleted secret by ID
   * @param storeName Store ID
   * @param id Secret ID
   * @returns void
   * @throws ApiError
   */
  public static putStoresSecretsRestore(storeName: string, id: string): CancelablePromise<void> {
    return __request(KeyManagerApi, {
      method: "PUT",
      url: "/stores/{storeName}/secrets/{id}/restore",
      path: {
        storeName: storeName,
        id: id,
      },
      errors: {
        401: `Unauthorized`,
        403: `Forbidden`,
        404: `Store/Secret not found`,
        500: `Internal server error`,
      },
    })
  }
}
