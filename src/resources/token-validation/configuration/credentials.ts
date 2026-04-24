// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as UserSchemasAPI from '../../api-gateway/user-schemas/user-schemas';

export class Credentials extends APIResource {
  /**
   * Update Token Configuration credentials
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
   *           alg: 'ES256',
   *           crv: 'P-256',
   *           kid: '38013f13-c266-4eec-a72a-92ec92779f21',
   *           kty: 'EC',
   *           x: 'KN53JRwN3wCjm2o39bvZUX2VdrsHzS8pxOAGjm8m7EQ',
   *           y: 'lnkkzIxaveggz-HFhcMWW15nxvOj0Z_uQsXbpK0GFcY',
   *         },
   *       ],
   *     },
   *   );
   * ```
   */
  update(
    configId: string,
    params: CredentialUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CredentialUpdateResponse> {
    const { zone_id, ...body } = params;
    return this._client.put(`/zones/${zone_id}/token_validation/config/${configId}/credentials`, {
      body,
      ...options,
    });
  }
}

export interface CredentialUpdateResponse {
  errors: UserSchemasAPI.Message;

  keys: Array<
    | CredentialUpdateResponse.APIShieldCredentialsJWTKeyRSA
    | CredentialUpdateResponse.APIShieldCredentialsJWTKeyEcEs256
    | CredentialUpdateResponse.APIShieldCredentialsJWTKeyEcEs384
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
}

export declare namespace Credentials {
  export {
    type CredentialUpdateResponse as CredentialUpdateResponse,
    type CredentialUpdateParams as CredentialUpdateParams,
  };
}
