// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as UserSchemasAPI from '../../api-gateway/user-schemas/user-schemas';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseCredentials extends APIResource {
  static override readonly _key: readonly ['tokenValidation', 'configuration', 'credentials'] = Object.freeze(
    ['tokenValidation', 'configuration', 'credentials'] as const,
  );

  /**
   * Update Token Configuration credentials with full replacement semantics. Key
   * identities (`{alg,kid}`) must be unique within the request. Symmetric keys
   * (`kty: "oct"`) require `k`; `k: null` is invalid.
   *
   * @example
   * ```ts
   * const credential =
   *   await client.tokenValidation.configuration.credentials.update(
   *     '4a7ee8d3-dd63-4ceb-9d5f-c27831854ce7',
   *     {
   *       zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       keys: [
   *         {
   *           alg: 'RS256',
   *           e: 'e',
   *           kid: 'kid',
   *           kty: 'RSA',
   *           n: 'n',
   *         },
   *       ],
   *     },
   *   );
   * ```
   */
  update(
    configID: string,
    params: CredentialUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CredentialUpdateResponse> {
    const { zone_id, ...body } = params;
    return this._client.put(path`/zones/${zone_id}/token_validation/config/${configID}/credentials`, {
      body,
      ...options,
    });
  }
}
export class Credentials extends BaseCredentials {}

export interface CredentialUpdateResponse {
  errors: UserSchemasAPI.Message;

  keys: Array<
    | CredentialUpdateResponse.APIShieldCredentialsJWTKeyRSA
    | CredentialUpdateResponse.APIShieldCredentialsJWTKeyEcEs256
    | CredentialUpdateResponse.APIShieldCredentialsJWTKeyEcEs384
    | CredentialUpdateResponse.APIShieldCredentialsJWTKeyOctResponse
  >;

  messages: UserSchemasAPI.Message;

  /**
   * Whether the API call was successful.
   */
  success: true;
}

export namespace CredentialUpdateResponse {
  /**
   * JSON representation of an RSA key.
   */
  export interface APIShieldCredentialsJWTKeyRSA {
    /**
     * Algorithm
     */
    alg: 'RS256' | 'RS384' | 'RS512' | 'PS256' | 'PS384' | 'PS512';

    /**
     * RSA exponent
     */
    e: string;

    /**
     * Key ID
     */
    kid: string;

    /**
     * Key Type
     */
    kty: 'RSA';

    /**
     * RSA modulus
     */
    n: string;
  }

  /**
   * JSON representation of an ES256 key
   */
  export interface APIShieldCredentialsJWTKeyEcEs256 {
    /**
     * Algorithm
     */
    alg: 'ES256';

    /**
     * Curve
     */
    crv: 'P-256';

    /**
     * Key ID
     */
    kid: string;

    /**
     * Key Type
     */
    kty: 'EC';

    /**
     * X EC coordinate
     */
    x: string;

    /**
     * Y EC coordinate
     */
    y: string;
  }

  /**
   * JSON representation of an ES384 key
   */
  export interface APIShieldCredentialsJWTKeyEcEs384 {
    /**
     * Algorithm
     */
    alg: 'ES384';

    /**
     * Curve
     */
    crv: 'P-384';

    /**
     * Key ID
     */
    kid: string;

    /**
     * Key Type
     */
    kty: 'EC';

    /**
     * X EC coordinate
     */
    x: string;

    /**
     * Y EC coordinate
     */
    y: string;
  }

  /**
   * JSON representation of a symmetric verification key in API responses (secret
   * material is redacted).
   */
  export interface APIShieldCredentialsJWTKeyOctResponse {
    /**
     * Algorithm
     */
    alg: 'HS256' | 'HS384' | 'HS512';

    /**
     * Key ID
     */
    kid: string;

    /**
     * Key Type
     */
    kty: 'oct';
  }
}

export interface CredentialUpdateParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Body param
   */
  keys: Array<
    | CredentialUpdateParams.APIShieldCredentialsJWTKeyRSA
    | CredentialUpdateParams.APIShieldCredentialsJWTKeyEcEs256
    | CredentialUpdateParams.APIShieldCredentialsJWTKeyEcEs384
    | CredentialUpdateParams.APIShieldCredentialsJWTKeyOctRequest
  >;
}

export namespace CredentialUpdateParams {
  /**
   * JSON representation of an RSA key.
   */
  export interface APIShieldCredentialsJWTKeyRSA {
    /**
     * Algorithm
     */
    alg: 'RS256' | 'RS384' | 'RS512' | 'PS256' | 'PS384' | 'PS512';

    /**
     * RSA exponent
     */
    e: string;

    /**
     * Key ID
     */
    kid: string;

    /**
     * Key Type
     */
    kty: 'RSA';

    /**
     * RSA modulus
     */
    n: string;
  }

  /**
   * JSON representation of an ES256 key
   */
  export interface APIShieldCredentialsJWTKeyEcEs256 {
    /**
     * Algorithm
     */
    alg: 'ES256';

    /**
     * Curve
     */
    crv: 'P-256';

    /**
     * Key ID
     */
    kid: string;

    /**
     * Key Type
     */
    kty: 'EC';

    /**
     * X EC coordinate
     */
    x: string;

    /**
     * Y EC coordinate
     */
    y: string;
  }

  /**
   * JSON representation of an ES384 key
   */
  export interface APIShieldCredentialsJWTKeyEcEs384 {
    /**
     * Algorithm
     */
    alg: 'ES384';

    /**
     * Curve
     */
    crv: 'P-384';

    /**
     * Key ID
     */
    kid: string;

    /**
     * Key Type
     */
    kty: 'EC';

    /**
     * X EC coordinate
     */
    x: string;

    /**
     * Y EC coordinate
     */
    y: string;
  }

  /**
   * JSON representation of a symmetric key for create/PUT requests.
   */
  export interface APIShieldCredentialsJWTKeyOctRequest {
    /**
     * Algorithm
     */
    alg: 'HS256' | 'HS384' | 'HS512';

    /**
     * Symmetric key material. Required for create and PUT update requests.
     */
    k: string;

    /**
     * Key ID
     */
    kid: string;

    /**
     * Key Type
     */
    kty: 'oct';
  }
}

export declare namespace Credentials {
  export {
    type CredentialUpdateResponse as CredentialUpdateResponse,
    type CredentialUpdateParams as CredentialUpdateParams,
  };
}
