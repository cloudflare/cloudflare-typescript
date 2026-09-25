// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseCredentials extends APIResource {
  static override readonly _key: readonly ['tokenValidation', 'configuration', 'credentials'] = Object.freeze(
    ['tokenValidation', 'configuration', 'credentials'] as const,
  );

  /**
   * Replaces the configuration's complete key set. Symmetric keys must include their
   * key material.
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
    return (
      this._client.put(path`/zones/${zone_id}/token_validation/config/${configID}/credentials`, {
        body,
        ...options,
      }) as APIPromise<{ result: CredentialUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates the configuration's complete key set while allowing omitted fields on
   * existing keys to retain stored values. Omitted key identities are removed.
   *
   * @example
   * ```ts
   * const response =
   *   await client.tokenValidation.configuration.credentials.edit(
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
  edit(
    configID: string,
    params: CredentialEditParams,
    options?: RequestOptions,
  ): APIPromise<CredentialEditResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(path`/zones/${zone_id}/token_validation/config/${configID}/credentials`, {
        body,
        ...options,
      }) as APIPromise<{ result: CredentialEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Credentials extends BaseCredentials {}

export interface CredentialUpdateResponse {
  keys: Array<
    | CredentialUpdateResponse.APIShieldCredentialsJWTKeyRSA
    | CredentialUpdateResponse.APIShieldCredentialsJWTKeyEcEs256
    | CredentialUpdateResponse.APIShieldCredentialsJWTKeyEcEs384
    | CredentialUpdateResponse.APIShieldCredentialsJWTKeyOctResponse
  >;
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

export interface CredentialEditResponse {
  keys: Array<
    | CredentialEditResponse.APIShieldCredentialsJWTKeyRSA
    | CredentialEditResponse.APIShieldCredentialsJWTKeyEcEs256
    | CredentialEditResponse.APIShieldCredentialsJWTKeyEcEs384
    | CredentialEditResponse.APIShieldCredentialsJWTKeyOctResponse
  >;
}

export namespace CredentialEditResponse {
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

export interface CredentialEditParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Body param
   */
  keys: Array<
    | CredentialEditParams.APIShieldCredentialsJWTKeyRSA
    | CredentialEditParams.APIShieldCredentialsJWTKeyEcEs256
    | CredentialEditParams.APIShieldCredentialsJWTKeyEcEs384
    | CredentialEditParams.APIShieldCredentialsJWTKeyOctPatchRequest
  >;
}

export namespace CredentialEditParams {
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
   * JSON representation of a symmetric key for PATCH requests.
   */
  export interface APIShieldCredentialsJWTKeyOctPatchRequest {
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

    /**
     * Symmetric key material. Optional for PATCH: omit to preserve existing secret for
     * matching `{alg,kid}`; send a string to rotate. `k: null` is invalid.
     */
    k?: string;
  }
}

export declare namespace Credentials {
  export {
    type CredentialUpdateResponse as CredentialUpdateResponse,
    type CredentialEditResponse as CredentialEditResponse,
    type CredentialUpdateParams as CredentialUpdateParams,
    type CredentialEditParams as CredentialEditParams,
  };
}
