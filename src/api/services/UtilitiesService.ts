import type { CancelablePromise } from "../config/promise"
import { KeyManagerApi, request as __request } from "../config"
import {
  ECRecoverRequest,
  VerifyKeySignatureRequest,
  VerifyRequest,
  VerifyTypedDataRequest,
} from "../models"

export class UtilitiesService {
  /**
   * EC Recover
   * Recover an Ethereum sender address from a signature of the format [R || S || V] where V is 0 or 1
   * @param request Ethereum recover request
   * @returns string Recovered sender address
   * @throws ApiError
   */
  public static postEthereumEcRecover(request: ECRecoverRequest): CancelablePromise<string> {
    return __request(KeyManagerApi, {
      method: "POST",
      url: "/ethereum/ec-recover",
      body: request,
      errors: {
        400: `Invalid request format`,
        500: `Internal server error`,
      },
    })
  }

  /**
   * Verify message signature (EIP-191)
   * Verify the signature of a message signed using standard format EIP-191
   * @param request Ethereum signature verify request
   * @returns void
   * @throws ApiError
   */
  public static postEthereumVerifyMessage(request: VerifyRequest): CancelablePromise<void> {
    return __request(KeyManagerApi, {
      method: "POST",
      url: "/ethereum/verify-message",
      body: request,
      errors: {
        422: `Cannot verify signature`,
        500: `Internal server error`,
      },
    })
  }

  /**
   * Verify typed data signature (EIP-712)
   * Verify the signature of an Ethereum typed data using format defined at EIP-712
   * @param request Typed data request to verify
   * @returns void
   * @throws ApiError
   */
  public static postEthereumVerifyTypedData(
    request: VerifyTypedDataRequest,
  ): CancelablePromise<void> {
    return __request(KeyManagerApi, {
      method: "POST",
      url: "/ethereum/verify-typed-data",
      body: request,
      errors: {
        422: `Cannot verify signature`,
        500: `Internal server error`,
      },
    })
  }

  /**
   * Verify key signature
   * Verify if signature data was signed by a specific key
   * @param request Verify signature request
   * @returns void
   * @throws ApiError
   */
  public static postKeysVerifySignature(
    request: VerifyKeySignatureRequest,
  ): CancelablePromise<void> {
    return __request(KeyManagerApi, {
      method: "POST",
      url: "/keys/verify-signature",
      body: request,
      errors: {
        422: `Cannot verify signature`,
        500: `Internal server error`,
      },
    })
  }
}
