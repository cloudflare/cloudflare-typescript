// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { APIPromise } from '../../../../api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Config extends APIResource {
  /**
   * Updates CMB config.
   */
  create(params: ConfigCreateParams, options?: RequestOptions): APIPromise<CmbConfig | null> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/logs/control/cmb/config`, {
        body,
        ...options,
      }) as APIPromise<{ result: CmbConfig | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes CMB config.
   */
  delete(params: ConfigDeleteParams, options?: RequestOptions): APIPromise<ConfigDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(path`/accounts/${account_id}/logs/control/cmb/config`, options) as APIPromise<{
        result: ConfigDeleteResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets CMB config.
   */
  get(params: ConfigGetParams, options?: RequestOptions): APIPromise<CmbConfig | null> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/logs/control/cmb/config`, options) as APIPromise<{
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
