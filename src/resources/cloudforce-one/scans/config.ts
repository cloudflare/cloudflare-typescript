// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { SinglePage } from '../../../pagination';

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
   * List Scan Configs
   */
  list(
    params: ConfigListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ConfigListResponsesSinglePage, ConfigListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/cloudforce-one/scans/config`,
      ConfigListResponsesSinglePage,
      options,
    );
  }

  /**
   * Delete a Scan Config
   */
  delete(
    configId: string,
    params: ConfigDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConfigDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/cloudforce-one/scans/config/${configId}`,
        options,
      ) as Core.APIPromise<{ result: ConfigDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update an existing Scan Config
   */
  edit(
    configId: string,
    params: ConfigEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConfigEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/cloudforce-one/scans/config/${configId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ConfigEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class ConfigListResponsesSinglePage extends SinglePage<ConfigListResponse> {}

export interface ConfigCreateResponse {
  /**
   * Config ID
   */
  id: string;

  account_id: string;

  /**
   * The number of days between each scan (0 = no recurring scans).
   */
  frequency: number;

  /**
   * A list of IP addresses or CIDR blocks to scan. The maximum number of total IP
   * addresses allowed is 5000.
   */
  ips: Array<string>;

  /**
   * A list of ports to scan. Allowed values:"default", "all", or a comma-separated
   * list of ports or range of ports (e.g. ["1-80", "443"]). Default will scan the
   * 100 most commonly open ports.
   */
  ports: Array<string>;
}

export interface ConfigListResponse {
  /**
   * Config ID
   */
  id: string;

  account_id: string;

  /**
   * The number of days between each scan (0 = no recurring scans).
   */
  frequency: number;

  /**
   * A list of IP addresses or CIDR blocks to scan. The maximum number of total IP
   * addresses allowed is 5000.
   */
  ips: Array<string>;

  /**
   * A list of ports to scan. Allowed values:"default", "all", or a comma-separated
   * list of ports or range of ports (e.g. ["1-80", "443"]). Default will scan the
   * 100 most commonly open ports.
   */
  ports: Array<string>;
}

export type ConfigDeleteResponse = unknown;

export interface ConfigEditResponse {
  /**
   * Config ID
   */
  id: string;

  account_id: string;

  /**
   * The number of days between each scan (0 = no recurring scans).
   */
  frequency: number;

  /**
   * A list of IP addresses or CIDR blocks to scan. The maximum number of total IP
   * addresses allowed is 5000.
   */
  ips: Array<string>;

  /**
   * A list of ports to scan. Allowed values:"default", "all", or a comma-separated
   * list of ports or range of ports (e.g. ["1-80", "443"]). Default will scan the
   * 100 most commonly open ports.
   */
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

Config.ConfigListResponsesSinglePage = ConfigListResponsesSinglePage;

export declare namespace Config {
  export {
    type ConfigCreateResponse as ConfigCreateResponse,
    type ConfigListResponse as ConfigListResponse,
    type ConfigDeleteResponse as ConfigDeleteResponse,
    type ConfigEditResponse as ConfigEditResponse,
    ConfigListResponsesSinglePage as ConfigListResponsesSinglePage,
    type ConfigCreateParams as ConfigCreateParams,
    type ConfigListParams as ConfigListParams,
    type ConfigDeleteParams as ConfigDeleteParams,
    type ConfigEditParams as ConfigEditParams,
  };
}
