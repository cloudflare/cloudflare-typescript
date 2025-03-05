// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Config extends APIResource {
  /**
   * Create a new Scan Config
   */
  create(params: ConfigCreateParams, options?: RequestOptions): APIPromise<ConfigCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/${account_id}/scans/config`, { body, ...options }) as APIPromise<{
        result: ConfigCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete the Scan Config for an Account
   */
  delete(params: ConfigDeleteParams, options?: RequestOptions): APIPromise<ConfigDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(path`/${account_id}/scans/config`, options) as APIPromise<{
        result: ConfigDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get the Scan Config for An Account
   */
  get(params: ConfigGetParams, options?: RequestOptions): APIPromise<ConfigGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/${account_id}/scans/config`, options) as APIPromise<{
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
