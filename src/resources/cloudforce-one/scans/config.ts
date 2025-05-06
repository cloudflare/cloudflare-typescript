// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { SinglePage } from '../../../pagination';

export class Config extends APIResource {
  /**
   * Create a new Scan Config
   *
   * @example
   * ```ts
   * const config =
   *   await client.cloudforceOne.scans.config.create({
   *     account_id: 'account_id',
   *     ips: ['1.1.1.1', '2606:4700:4700::1111'],
   *   });
   * ```
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
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const configListResponse of client.cloudforceOne.scans.config.list(
   *   { account_id: 'account_id' },
   * )) {
   *   // ...
   * }
   * ```
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
   *
   * @example
   * ```ts
   * const config =
   *   await client.cloudforceOne.scans.config.delete(
   *     'config_id',
   *     { account_id: 'account_id' },
   *   );
   * ```
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
   *
   * @example
   * ```ts
   * const response =
   *   await client.cloudforceOne.scans.config.edit(
   *     'config_id',
   *     { account_id: 'account_id' },
   *   );
   * ```
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
   * Defines the Config ID.
   */
  id: string;

  account_id: string;

  /**
   * Defines the number of days between each scan (0 = One-off scan).
   */
  frequency: number;

  /**
   * Defines a list of IP addresses or CIDR blocks to scan. The maximum number of
   * total IP addresses allowed is 5000.
   */
  ips: Array<string>;

  /**
   * Defines a list of ports to scan. Valid values are:"default", "all", or a
   * comma-separated list of ports or range of ports (e.g. ["1-80", "443"]).
   * "default" scans the 100 most commonly open ports.
   */
  ports: Array<string>;
}

export interface ConfigListResponse {
  /**
   * Defines the Config ID.
   */
  id: string;

  account_id: string;

  /**
   * Defines the number of days between each scan (0 = One-off scan).
   */
  frequency: number;

  /**
   * Defines a list of IP addresses or CIDR blocks to scan. The maximum number of
   * total IP addresses allowed is 5000.
   */
  ips: Array<string>;

  /**
   * Defines a list of ports to scan. Valid values are:"default", "all", or a
   * comma-separated list of ports or range of ports (e.g. ["1-80", "443"]).
   * "default" scans the 100 most commonly open ports.
   */
  ports: Array<string>;
}

export type ConfigDeleteResponse = unknown;

export interface ConfigEditResponse {
  /**
   * Defines the Config ID.
   */
  id: string;

  account_id: string;

  /**
   * Defines the number of days between each scan (0 = One-off scan).
   */
  frequency: number;

  /**
   * Defines a list of IP addresses or CIDR blocks to scan. The maximum number of
   * total IP addresses allowed is 5000.
   */
  ips: Array<string>;

  /**
   * Defines a list of ports to scan. Valid values are:"default", "all", or a
   * comma-separated list of ports or range of ports (e.g. ["1-80", "443"]).
   * "default" scans the 100 most commonly open ports.
   */
  ports: Array<string>;
}

export interface ConfigCreateParams {
  /**
   * Path param: Defines the Account ID.
   */
  account_id: string;

  /**
   * Body param: Defines a list of IP addresses or CIDR blocks to scan. The maximum
   * number of total IP addresses allowed is 5000.
   */
  ips: Array<string>;

  /**
   * Body param: Defines the number of days between each scan (0 = One-off scan).
   */
  frequency?: number;

  /**
   * Body param: Defines a list of ports to scan. Valid values are:"default", "all",
   * or a comma-separated list of ports or range of ports (e.g. ["1-80", "443"]).
   * "default" scans the 100 most commonly open ports.
   */
  ports?: Array<string>;
}

export interface ConfigListParams {
  /**
   * Defines the Account ID.
   */
  account_id: string;
}

export interface ConfigDeleteParams {
  /**
   * Defines the Account ID.
   */
  account_id: string;
}

export interface ConfigEditParams {
  /**
   * Path param: Defines the Account ID.
   */
  account_id: string;

  /**
   * Body param: Defines the number of days between each scan (0 = One-off scan).
   */
  frequency?: number;

  /**
   * Body param: Defines a list of IP addresses or CIDR blocks to scan. The maximum
   * number of total IP addresses allowed is 5000.
   */
  ips?: Array<string>;

  /**
   * Body param: Defines a list of ports to scan. Valid values are:"default", "all",
   * or a comma-separated list of ports or range of ports (e.g. ["1-80", "443"]).
   * "default" scans the 100 most commonly open ports.
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
