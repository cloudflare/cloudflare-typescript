// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ConfigAPI from 'cloudflare/resources/logs/controls/cmb/config';

export class Config extends APIResource {
  /**
   * Updates CMB config.
   */
  create(
    accountId: string,
    body: ConfigCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConfigCreateResponse | null> {
    return (
      this._client.post(`/accounts/${accountId}/logs/control/cmb/config`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ConfigCreateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes CMB config.
   */
  delete(accountId: string, options?: Core.RequestOptions): Core.APIPromise<ConfigDeleteResponse | null> {
    return (
      this._client.delete(`/accounts/${accountId}/logs/control/cmb/config`, options) as Core.APIPromise<{
        result: ConfigDeleteResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets CMB config.
   */
  get(accountId: string, options?: Core.RequestOptions): Core.APIPromise<ConfigGetResponse | null> {
    return (
      this._client.get(`/accounts/${accountId}/logs/control/cmb/config`, options) as Core.APIPromise<{
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
   * Comma-separated list of regions.
   */
  regions?: string;
}

export namespace Config {
  export import ConfigCreateResponse = ConfigAPI.ConfigCreateResponse;
  export import ConfigDeleteResponse = ConfigAPI.ConfigDeleteResponse;
  export import ConfigGetResponse = ConfigAPI.ConfigGetResponse;
  export import ConfigCreateParams = ConfigAPI.ConfigCreateParams;
}
