// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Config extends APIResource {
  /**
   * Create a new Scan Config
   */
  create(params: ConfigCreateParams, options?: Core.RequestOptions): Core.APIPromise<ConfigCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/cloudforce-one/scans/config`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ConfigCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get the Scan Config for An Account
   */
  list(params: ConfigListParams, options?: Core.RequestOptions): Core.APIPromise<ConfigListResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/cloudforce-one/scans/config`, options) as Core.APIPromise<{
        result: ConfigListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete the Scan Config for an Account
   */
  delete(params: ConfigDeleteParams, options?: Core.RequestOptions): Core.APIPromise<ConfigDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(`/accounts/${account_id}/cloudforce-one/scans/config`, options) as Core.APIPromise<{
        result: ConfigDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ConfigCreateResponse {
  account_id: string;

  frequency: number;

  ips: Array<string>;
}

export interface ConfigListResponse {
  account_id: string;

  frequency: number;

  ips: Array<string>;
}

export type ConfigDeleteResponse = unknown;

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

export interface ConfigListParams {
  /**
   * Account ID
   */
  account_id: string;
}

export interface ConfigDeleteParams {
  /**
   * Account ID
   */
  account_id: string;
}

export declare namespace Config {
  export {
    type ConfigCreateResponse as ConfigCreateResponse,
    type ConfigListResponse as ConfigListResponse,
    type ConfigDeleteResponse as ConfigDeleteResponse,
    type ConfigCreateParams as ConfigCreateParams,
    type ConfigListParams as ConfigListParams,
    type ConfigDeleteParams as ConfigDeleteParams,
  };
}
