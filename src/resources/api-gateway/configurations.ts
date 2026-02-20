// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Configurations extends APIResource {
  /**
   * Update configuration properties
   *
   * @example
   * ```ts
   * const configuration =
   *   await client.apiGateway.configurations.update({
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     auth_id_characteristics: [
   *       { name: 'authorization', type: 'header' },
   *     ],
   *   });
   * ```
   */
  update(params: ConfigurationUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Configuration> {
    const { zone_id, normalize, ...body } = params;
    return (
      this._client.put(`/zones/${zone_id}/api_gateway/configuration`, {
        query: { normalize },
        body,
        ...options,
      }) as Core.APIPromise<{ result: Configuration }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieve information about specific configuration properties
   *
   * @example
   * ```ts
   * const configuration =
   *   await client.apiGateway.configurations.get({
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
   */
  get(params: ConfigurationGetParams, options?: Core.RequestOptions): Core.APIPromise<Configuration> {
    const { zone_id, ...query } = params;
    return (
      this._client.get(`/zones/${zone_id}/api_gateway/configuration`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: Configuration }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface Configuration {
  auth_id_characteristics: Array<
    Configuration.APIShieldAuthIDCharacteristic | Configuration.APIShieldAuthIDCharacteristicJWTClaim
  >;
}

export namespace Configuration {
  /**
   * Auth ID Characteristic
   */
  export interface APIShieldAuthIDCharacteristic {
    /**
     * The name of the characteristic field, i.e., the header or cookie name.
     */
    name: string;

    /**
     * The type of characteristic.
     */
    type: 'header' | 'cookie';
  }

  /**
   * Auth ID Characteristic extracted from JWT Token Claims
   */
  export interface APIShieldAuthIDCharacteristicJWTClaim {
    /**
     * Claim location expressed as `$(token_config_id):$(json_path)`, where
     * `token_config_id` is the ID of the token configuration used in validating the
     * JWT, and `json_path` is a RFC 9535 JSONPath
     * (https://goessner.net/articles/JsonPath/,
     * https://www.rfc-editor.org/rfc/rfc9535.html). The JSONPath expression may be in
     * dot or bracket notation, may only specify literal keys or array indexes, and
     * must return a singleton value, which will be interpreted as a string.
     */
    name: string;

    /**
     * The type of characteristic.
     */
    type: 'jwt';
  }
}

export interface ConfigurationUpdateParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Body param
   */
  auth_id_characteristics: Array<
    | ConfigurationUpdateParams.APIShieldAuthIDCharacteristic
    | ConfigurationUpdateParams.APIShieldAuthIDCharacteristicJWTClaim
  >;

  /**
   * Query param: Ensures that the configuration is written or retrieved in
   * normalized fashion
   */
  normalize?: boolean;
}

export namespace ConfigurationUpdateParams {
  /**
   * Auth ID Characteristic
   */
  export interface APIShieldAuthIDCharacteristic {
    /**
     * The name of the characteristic field, i.e., the header or cookie name.
     */
    name: string;

    /**
     * The type of characteristic.
     */
    type: 'header' | 'cookie';
  }

  /**
   * Auth ID Characteristic extracted from JWT Token Claims
   */
  export interface APIShieldAuthIDCharacteristicJWTClaim {
    /**
     * Claim location expressed as `$(token_config_id):$(json_path)`, where
     * `token_config_id` is the ID of the token configuration used in validating the
     * JWT, and `json_path` is a RFC 9535 JSONPath
     * (https://goessner.net/articles/JsonPath/,
     * https://www.rfc-editor.org/rfc/rfc9535.html). The JSONPath expression may be in
     * dot or bracket notation, may only specify literal keys or array indexes, and
     * must return a singleton value, which will be interpreted as a string.
     */
    name: string;

    /**
     * The type of characteristic.
     */
    type: 'jwt';
  }
}

export interface ConfigurationGetParams {
  /**
   * Path param: Identifier.
   */
  zone_id: string;

  /**
   * Query param: Ensures that the configuration is written or retrieved in
   * normalized fashion
   */
  normalize?: boolean;
}

export declare namespace Configurations {
  export {
    type Configuration as Configuration,
    type ConfigurationUpdateParams as ConfigurationUpdateParams,
    type ConfigurationGetParams as ConfigurationGetParams,
  };
}
