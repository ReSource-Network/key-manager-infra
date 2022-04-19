import type { RegistryResponse } from "../models"
import type { CancelablePromise } from "../config"
import { request as __request, KeyManagerApi } from "../config"

export class RegistriesService {
  /**
   * Gets an alias registry
   * Gets an alias registry
   * @param registryName registry identifier
   * @returns RegistryResponse Registry data
   * @throws ApiError
   */
  public static getRegistries(registryName: string): CancelablePromise<RegistryResponse> {
    return __request(KeyManagerApi, {
      method: "GET",
      url: "/registries/{registryName}",
      path: {
        registryName: registryName,
      },
      errors: {
        404: `Registry not found`,
        500: `Internal server error`,
      },
    })
  }

  /**
   * Creates an alias registry
   * Creates an alias registry
   * @param registryName registry identifier
   * @returns RegistryResponse Registry data
   * @throws ApiError
   */
  public static postRegistries(registryName: string): CancelablePromise<RegistryResponse> {
    return __request(KeyManagerApi, {
      method: "POST",
      url: "/registries/{registryName}",
      path: {
        registryName: registryName,
      },
      errors: {
        500: `Internal server error`,
      },
    })
  }

  /**
   * Deletes a registry
   * Deletes a registry and all its aliases
   * @param registryName registry identifier
   * @returns void
   * @throws ApiError
   */
  public static deleteRegistries(registryName: string): CancelablePromise<void> {
    return __request(KeyManagerApi, {
      method: "DELETE",
      url: "/registries/{registryName}",
      path: {
        registryName: registryName,
      },
      errors: {
        404: `Registry not found`,
        500: `Internal server error`,
      },
    })
  }
}
