// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as ConfigurationsAPI from './configurations';
import * as UserSchemasAPI from './user-schemas/user-schemas';

export class Configurations extends APIResource {
  /**
   * Set configuration properties
   */
  update(params: ConfigurationUpdateParams, options?: Core.RequestOptions): Core.APIPromise<ConfigurationUpdateResponse> {
    const { zone_id, ...body } = params;
    return this._client.put(`/zones/${zone_id}/api_gateway/configuration`, { body, ...options });
  }

  /**
   * Retrieve information about specific configuration properties
   */
  get(params: ConfigurationGetParams, options?: Core.RequestOptions): Core.APIPromise<Configuration> {
    const { zone_id, ...query } = params;
    return (this._client.get(`/zones/${zone_id}/api_gateway/configuration`, { query, ...options }) as Core.APIPromise<{ result: Configuration }>)._thenUnwrap((obj) => obj.result);
  }
}

export interface Configuration {
  auth_id_characteristics: Array<Configuration.APIShieldAuthIDCharacteristic | Configuration.APIShieldAuthIDCharacteristicJwtClaim>;
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
  export interface APIShieldAuthIDCharacteristicJwtClaim {
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

export interface ConfigurationUpdateResponse {
  errors: UserSchemasAPI.Message;

  messages: UserSchemasAPI.Message;

  /**
   * Whether the API call was successful
   */
  success: true;
}

export interface ConfigurationUpdateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param:
   */
  auth_id_characteristics: Array<ConfigurationUpdateParams.APIShieldAuthIDCharacteristic | ConfigurationUpdateParams.APIShieldAuthIDCharacteristicJwtClaim>;
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
  export interface APIShieldAuthIDCharacteristicJwtClaim {
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
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Query param: Requests information about certain properties.
   */
  properties?: Array<'auth_id_characteristics'>;
}

export namespace Configurations {
  export import Configuration = ConfigurationsAPI.Configuration;
  export import ConfigurationUpdateResponse = ConfigurationsAPI.ConfigurationUpdateResponse;
  export import ConfigurationUpdateParams = ConfigurationsAPI.ConfigurationUpdateParams;
  export import ConfigurationGetParams = ConfigurationsAPI.ConfigurationGetParams;
}
