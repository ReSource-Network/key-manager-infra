import type { AliasRequest, AliasResponse } from "../models"

import type { CancelablePromise } from "../config/promise"
import { KeyManagerApi } from "../config/api"
import { request as __request } from "../config/request"

export class AliasesService {
  /**
   * Get an alias
   * Get an alias by key from a dedicated alias registry
   * @param registryName registry identifier
   * @param key alias identifier
   * @returns AliasResponse Alias data
   * @throws ApiError
   */
  public static getRegistriesAliases(
    registryName: string,
    key: string,
  ): CancelablePromise<AliasResponse> {
    return __request(KeyManagerApi, {
      method: "GET",
      url: "/registries/{registryName}/aliases/{key}",
      path: {
        registryName: registryName,
        key: key,
      },
      errors: {
        404: `Alias not found`,
        500: `Internal server error`,
      },
    })
  }

  /**
   * Creates an alias
   * Create an alias of a key in a dedicated alias registry
   * @param registryName registry identifier
   * @param key alias identifier
   * @param request Create Alias Request
   * @returns AliasResponse Alias data
   * @throws ApiError
   */
  public static postRegistriesAliases(
    registryName: string,
    key: string,
    request: AliasRequest,
  ): CancelablePromise<AliasResponse> {
    return __request(KeyManagerApi, {
      method: "POST",
      url: "/registries/{registryName}/aliases/{key}",
      path: {
        registryName: registryName,
        key: key,
      },
      body: request,
      errors: {
        400: `Invalid request format`,
        500: `Internal server error`,
      },
    })
  }

  /**
   * Delete an alias
   * Delete an alias of a key from a dedicated alias registry
   * @param registryName registry identifier
   * @param key alias identifier
   * @returns void
   * @throws ApiError
   */
  public static deleteRegistriesAliases(
    registryName: string,
    key: string,
  ): CancelablePromise<void> {
    return __request(KeyManagerApi, {
      method: "DELETE",
      url: "/registries/{registryName}/aliases/{key}",
      path: {
        registryName: registryName,
        key: key,
      },
      errors: {
        400: `Invalid request format`,
        404: `Alias not found`,
        500: `Internal server error`,
      },
    })
  }

  /**
   * Update an alias
   * Update an alias by key from a dedicated alias registry
   * @param registryName registry identifier
   * @param key alias identifier
   * @param request Update Alias Request
   * @returns AliasResponse Alias data
   * @throws ApiError
   */
  public static patchRegistriesAliases(
    registryName: string,
    key: string,
    request: AliasRequest,
  ): CancelablePromise<AliasResponse> {
    return __request(KeyManagerApi, {
      method: "PATCH",
      url: "/registries/{registryName}/aliases/{key}",
      path: {
        registryName: registryName,
        key: key,
      },
      body: request,
      errors: {
        400: `Invalid request format`,
        404: `Alias not found`,
        500: `Internal server error`,
      },
    })
  }
}
