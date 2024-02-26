// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ConfigAPI from 'cloudflare/resources/logs/controls/cmb/config';

export class Config extends APIResource {
  /**
   * Updates CMB config.
   */
  create(
    params: ConfigCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConfigCreateResponse | null> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/logs/control/cmb/config`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ConfigCreateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes CMB config.
   */
  delete(
    params: ConfigDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConfigDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(`/accounts/${account_id}/logs/control/cmb/config`, options) as Core.APIPromise<{
        result: ConfigDeleteResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets CMB config.
   */
  get(params: ConfigGetParams, options?: Core.RequestOptions): Core.APIPromise<ConfigGetResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/logs/control/cmb/config`, options) as Core.APIPromise<{
        result: ConfigGetResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ConfigCreateResponse {
  /**
   * Comma-separated list of regions.
   */
  regions?: string;
}

export type ConfigDeleteResponse = unknown | Array<unknown> | string;

export interface ConfigGetResponse {
  /**
   * Comma-separated list of regions.
   */
  regions?: string;
}

export interface ConfigCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: Comma-separated list of regions.
   */
  regions?: string;
}

export interface ConfigDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface ConfigGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Config {
  export import ConfigCreateResponse = ConfigAPI.ConfigCreateResponse;
  export import ConfigDeleteResponse = ConfigAPI.ConfigDeleteResponse;
  export import ConfigGetResponse = ConfigAPI.ConfigGetResponse;
  export import ConfigCreateParams = ConfigAPI.ConfigCreateParams;
  export import ConfigDeleteParams = ConfigAPI.ConfigDeleteParams;
  export import ConfigGetParams = ConfigAPI.ConfigGetParams;
}
