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
   *     { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
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

  messages: UserSchemasAPI.Message;

  /**
   * Whether the API call was successful.
   */
  success: true;

  keys?: Array<
    | CredentialUpdateResponse.APIShieldCredentialsJWTKeyEc
    | CredentialUpdateResponse.APIShieldCredentialsJWTKeyRSA
  >;
}

export namespace CredentialUpdateResponse {
  /**
   * Common properties of a JWT key.
   */
  export interface APIShieldCredentialsJWTKeyEc {
    /**
     * Algorithm
     */
    alg: 'ES256' | 'ES384';

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
   * Common properties of a JWT key.
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
}

export interface CredentialUpdateParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Body param:
   */
  keys?: Array<
    CredentialUpdateParams.APIShieldCredentialsJWTKeyEc | CredentialUpdateParams.APIShieldCredentialsJWTKeyRSA
  >;
}

export namespace CredentialUpdateParams {
  /**
   * Common properties of a JWT key.
   */
  export interface APIShieldCredentialsJWTKeyEc {
    /**
     * Algorithm
     */
    alg: 'ES256' | 'ES384';

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
   * Common properties of a JWT key.
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
}

export declare namespace Credentials {
  export {
    type CredentialUpdateResponse as CredentialUpdateResponse,
    type CredentialUpdateParams as CredentialUpdateParams,
  };
}
