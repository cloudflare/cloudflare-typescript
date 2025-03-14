// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { PagePromise, SinglePage } from '../../../pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Config extends APIResource {
  /**
   * Create a new Scan Config
   */
  create(params: ConfigCreateParams, options?: RequestOptions): APIPromise<ConfigCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/cloudforce-one/scans/config`, {
        body,
        ...options,
      }) as APIPromise<{ result: ConfigCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List Scan Configs
   */
  list(
    params: ConfigListParams,
    options?: RequestOptions,
  ): PagePromise<ConfigListResponsesSinglePage, ConfigListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/cloudforce-one/scans/config`,
      SinglePage<ConfigListResponse>,
      options,
    );
  }

  /**
   * Delete a Scan Config
   */
  delete(
    configID: string,
    params: ConfigDeleteParams,
    options?: RequestOptions,
  ): APIPromise<ConfigDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/cloudforce-one/scans/config/${configID}`,
        options,
      ) as APIPromise<{ result: ConfigDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update an existing Scan Config
   */
  edit(configID: string, params: ConfigEditParams, options?: RequestOptions): APIPromise<ConfigEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(path`/accounts/${account_id}/cloudforce-one/scans/config/${configID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: ConfigEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type ConfigListResponsesSinglePage = SinglePage<ConfigListResponse>;

export interface ConfigCreateResponse {
  id: string;

  account_id: string;

  frequency: number;

  ips: Array<string>;

  ports: Array<string>;
}

export interface ConfigListResponse {
  id: string;

  account_id: string;

  frequency: number;

  ips: Array<string>;

  ports: Array<string>;
}

export type ConfigDeleteResponse = unknown;

export interface ConfigEditResponse {
  id: string;

  account_id: string;

  frequency: number;

  ips: Array<string>;

  ports: Array<string>;
}

export interface ConfigCreateParams {
  /**
   * Path param: Account ID
   */
  account_id: string;

  /**
   * Body param: A list of IP addresses or CIDR blocks to scan. The maximum number of
   * total IP addresses allowed is 5000.
   */
  ips: Array<string>;

  /**
   * Body param: The number of days between each scan (0 = no recurring scans).
   */
  frequency?: number;

  /**
   * Body param: A list of ports to scan. Allowed values:"default", "all", or a
   * comma-separated list of ports or range of ports (e.g. ["1-80", "443"]). Default
   * will scan the 100 most commonly open ports.
   */
  ports?: Array<string>;
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

export interface ConfigEditParams {
  /**
   * Path param: Account ID
   */
  account_id: string;

  /**
   * Body param: The number of days between each scan (0 = no recurring scans).
   */
  frequency?: number;

  /**
   * Body param: A list of IP addresses or CIDR blocks to scan. The maximum number of
   * total IP addresses allowed is 5000.
   */
  ips?: Array<string>;

  /**
   * Body param: A list of ports to scan. Allowed values:"default", "all", or a
   * comma-separated list of ports or range of ports (e.g. ["1-80", "443"]). Default
   * will scan the 100 most commonly open ports.
   */
  ports?: Array<string>;
}

export declare namespace Config {
  export {
    type ConfigCreateResponse as ConfigCreateResponse,
    type ConfigListResponse as ConfigListResponse,
    type ConfigDeleteResponse as ConfigDeleteResponse,
    type ConfigEditResponse as ConfigEditResponse,
    type ConfigListResponsesSinglePage as ConfigListResponsesSinglePage,
    type ConfigCreateParams as ConfigCreateParams,
    type ConfigListParams as ConfigListParams,
    type ConfigDeleteParams as ConfigDeleteParams,
    type ConfigEditParams as ConfigEditParams,
  };
}
