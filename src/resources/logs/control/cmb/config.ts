// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';

export class Config extends APIResource {
  /**
   * Updates CMB config.
   */
  create(params: ConfigCreateParams, options?: Core.RequestOptions): Core.APIPromise<CmbConfig | null> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/logs/control/cmb/config`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: CmbConfig | null }>
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
  get(params: ConfigGetParams, options?: Core.RequestOptions): Core.APIPromise<CmbConfig | null> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/logs/control/cmb/config`, options) as Core.APIPromise<{
        result: CmbConfig | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface CmbConfig {
  /**
   * Comma-separated list of regions.
   */
  regions?: string;
}

export type ConfigDeleteResponse = unknown;

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

export declare namespace Config {
  export {
    type CmbConfig as CmbConfig,
    type ConfigDeleteResponse as ConfigDeleteResponse,
    type ConfigCreateParams as ConfigCreateParams,
    type ConfigDeleteParams as ConfigDeleteParams,
    type ConfigGetParams as ConfigGetParams,
  };
}
