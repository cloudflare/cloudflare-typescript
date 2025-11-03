// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as CredentialsAPI from './credentials';
import {
  CredentialUpdateParams,
  CredentialUpdateResponse,
  Credentials as CredentialsAPICredentials,
} from './credentials';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../pagination';

export class Configuration extends APIResource {
  credentials: CredentialsAPI.Credentials = new CredentialsAPI.Credentials(this._client);

  /**
   * Create a new Token Validation configuration
   *
   * @example
   * ```ts
   * const tokenConfig =
   *   await client.tokenValidation.configuration.create({
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     credentials: {},
   *     description:
   *       'Long description for Token Validation Configuration',
   *     title: 'Example Token Validation Configuration',
   *     token_sources: [
   *       'http.request.headers["x-auth"][0]',
   *       'http.request.cookies["Authorization"][0]',
   *     ],
   *     token_type: 'JWT',
   *   });
   * ```
   */
  create(params: ConfigurationCreateParams, options?: Core.RequestOptions): Core.APIPromise<TokenConfig> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(`/zones/${zone_id}/token_validation/config`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: TokenConfig }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all token validation configurations for this zone
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const tokenConfig of client.tokenValidation.configuration.list(
   *   { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: ConfigurationListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<TokenConfigsV4PagePaginationArray, TokenConfig> {
    const { zone_id, ...query } = params;
    return this._client.getAPIList(
      `/zones/${zone_id}/token_validation/config`,
      TokenConfigsV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Delete Token Configuration
   *
   * @example
   * ```ts
   * const configuration =
   *   await client.tokenValidation.configuration.delete(
   *     '4a7ee8d3-dd63-4ceb-9d5f-c27831854ce7',
   *     { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  delete(
    configId: string,
    params: ConfigurationDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConfigurationDeleteResponse> {
    const { zone_id } = params;
    return (
      this._client.delete(
        `/zones/${zone_id}/token_validation/config/${configId}`,
        options,
      ) as Core.APIPromise<{ result: ConfigurationDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Edit fields of an existing Token Configuration
   *
   * @example
   * ```ts
   * const response =
   *   await client.tokenValidation.configuration.edit(
   *     '4a7ee8d3-dd63-4ceb-9d5f-c27831854ce7',
   *     { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  edit(
    configId: string,
    params: ConfigurationEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConfigurationEditResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/token_validation/config/${configId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ConfigurationEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a single Token Configuration
   *
   * @example
   * ```ts
   * const tokenConfig =
   *   await client.tokenValidation.configuration.get(
   *     '4a7ee8d3-dd63-4ceb-9d5f-c27831854ce7',
   *     { zone_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  get(
    configId: string,
    params: ConfigurationGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TokenConfig> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/token_validation/config/${configId}`, options) as Core.APIPromise<{
        result: TokenConfig;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class TokenConfigsV4PagePaginationArray extends V4PagePaginationArray<TokenConfig> {}

export interface TokenConfig {
  /**
   * UUID.
   */
  id?: string;

  created_at?: string;

  credentials?: TokenConfig.Credentials;

  description?: string;

  last_updated?: string;

  title?: string;

  token_sources?: Array<string>;

  token_type?: 'JWT';
}

export namespace TokenConfig {
  export interface Credentials {
    keys?: Array<Credentials.APIShieldCredentialsJWTKeyEc | Credentials.APIShieldCredentialsJWTKeyRSA>;
  }

  export namespace Credentials {
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
}

export interface ConfigurationDeleteResponse {
  /**
   * UUID.
   */
  config_id?: string;
}

export interface ConfigurationEditResponse {
  description?: string;

  title?: string;

  token_sources?: Array<string>;
}

export interface ConfigurationCreateParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Body param:
   */
  credentials: ConfigurationCreateParams.Credentials;

  /**
   * Body param:
   */
  description: string;

  /**
   * Body param:
   */
  title: string;

  /**
   * Body param:
   */
  token_sources: Array<string>;

  /**
   * Body param:
   */
  token_type: 'JWT';
}

export namespace ConfigurationCreateParams {
  export interface Credentials {
    keys?: Array<Credentials.APIShieldCredentialsJWTKeyEc | Credentials.APIShieldCredentialsJWTKeyRSA>;
  }

  export namespace Credentials {
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
}

export interface ConfigurationListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;
}

export interface ConfigurationDeleteParams {
  /**
   * Identifier.
   */
  zone_id: string;
}

export interface ConfigurationEditParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Body param:
   */
  description?: string;

  /**
   * Body param:
   */
  title?: string;

  /**
   * Body param:
   */
  token_sources?: Array<string>;
}

export interface ConfigurationGetParams {
  /**
   * Identifier.
   */
  zone_id: string;
}

Configuration.TokenConfigsV4PagePaginationArray = TokenConfigsV4PagePaginationArray;
Configuration.Credentials = CredentialsAPICredentials;

export declare namespace Configuration {
  export {
    type TokenConfig as TokenConfig,
    type ConfigurationDeleteResponse as ConfigurationDeleteResponse,
    type ConfigurationEditResponse as ConfigurationEditResponse,
    TokenConfigsV4PagePaginationArray as TokenConfigsV4PagePaginationArray,
    type ConfigurationCreateParams as ConfigurationCreateParams,
    type ConfigurationListParams as ConfigurationListParams,
    type ConfigurationDeleteParams as ConfigurationDeleteParams,
    type ConfigurationEditParams as ConfigurationEditParams,
    type ConfigurationGetParams as ConfigurationGetParams,
  };

  export {
    CredentialsAPICredentials as Credentials,
    type CredentialUpdateResponse as CredentialUpdateResponse,
    type CredentialUpdateParams as CredentialUpdateParams,
  };
}
