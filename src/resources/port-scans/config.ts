// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Config extends APIResource {
  /**
   * Create a new Scan Config
   */
  create(params: ConfigCreateParams, options?: Core.RequestOptions): Core.APIPromise<ConfigCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/${account_id}/scans/config`, { body, ...options }) as Core.APIPromise<{
        result: ConfigCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete the Scan Config for an Account
   */
  delete(params: ConfigDeleteParams, options?: Core.RequestOptions): Core.APIPromise<ConfigDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(`/${account_id}/scans/config`, options) as Core.APIPromise<{
        result: ConfigDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get the Scan Config for An Account
   */
  get(params: ConfigGetParams, options?: Core.RequestOptions): Core.APIPromise<ConfigGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/${account_id}/scans/config`, options) as Core.APIPromise<{
        result: ConfigGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ConfigCreateResponse {
  account_id: string;

  frequency: number;

  ips: Array<string>;
}

export type ConfigDeleteResponse = unknown;

export interface ConfigGetResponse {
  account_id: string;

  frequency: number;

  ips: Array<string>;
}

export interface ConfigCreateParams {
  /**
   * Path param: Account ID
   */
  account_id: string;

  /**
   * Body param:
   */
  frequency: number;

  /**
   * Body param:
   */
  ips: Array<string>;
}

export interface ConfigDeleteParams {
  /**
   * Account ID
   */
  account_id: string;
}

export interface ConfigGetParams {
  /**
   * Account ID
   */
  account_id: string;
}

export declare namespace Config {
  export {
    type ConfigCreateResponse as ConfigCreateResponse,
    type ConfigDeleteResponse as ConfigDeleteResponse,
    type ConfigGetResponse as ConfigGetResponse,
    type ConfigCreateParams as ConfigCreateParams,
    type ConfigDeleteParams as ConfigDeleteParams,
    type ConfigGetParams as ConfigGetParams,
  };
}
