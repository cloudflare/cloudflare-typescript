// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class ConnectivitySettings extends APIResource {
  /**
   * Updates the Zero Trust Connectivity Settings for the given account.
   *
   * @example
   * ```ts
   * const response =
   *   await client.zeroTrust.connectivitySettings.edit({
   *     account_id: '699d98642c564d2e855e9661899b7252',
   *   });
   * ```
   */
  edit(
    params?: ConnectivitySettingEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectivitySettingEditResponse>;
  edit(options?: Core.RequestOptions): Core.APIPromise<ConnectivitySettingEditResponse>;
  edit(
    params: ConnectivitySettingEditParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectivitySettingEditResponse> {
    if (isRequestOptions(params)) {
      return this.edit({}, params);
    }
    const { account_id = this._client.accountId, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/zerotrust/connectivity_settings`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ConnectivitySettingEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets the Zero Trust Connectivity Settings for the given account.
   *
   * @example
   * ```ts
   * const connectivitySetting =
   *   await client.zeroTrust.connectivitySettings.get({
   *     account_id: '699d98642c564d2e855e9661899b7252',
   *   });
   * ```
   */
  get(
    params?: ConnectivitySettingGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectivitySettingGetResponse>;
  get(options?: Core.RequestOptions): Core.APIPromise<ConnectivitySettingGetResponse>;
  get(
    params: ConnectivitySettingGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectivitySettingGetResponse> {
    if (isRequestOptions(params)) {
      return this.get({}, params);
    }
    const { account_id = this._client.accountId } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/zerotrust/connectivity_settings`,
        options,
      ) as Core.APIPromise<{ result: ConnectivitySettingGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ConnectivitySettingEditResponse {
  /**
   * A flag to enable the ICMP proxy for the account network.
   */
  icmp_proxy_enabled?: boolean;

  /**
   * A flag to enable WARP to WARP traffic.
   */
  offramp_warp_enabled?: boolean;
}

export interface ConnectivitySettingGetResponse {
  /**
   * A flag to enable the ICMP proxy for the account network.
   */
  icmp_proxy_enabled?: boolean;

  /**
   * A flag to enable WARP to WARP traffic.
   */
  offramp_warp_enabled?: boolean;
}

export interface ConnectivitySettingEditParams {
  /**
   * Path param: Cloudflare account ID
   */
  account_id?: string;

  /**
   * Body param: A flag to enable the ICMP proxy for the account network.
   */
  icmp_proxy_enabled?: boolean;

  /**
   * Body param: A flag to enable WARP to WARP traffic.
   */
  offramp_warp_enabled?: boolean;
}

export interface ConnectivitySettingGetParams {
  /**
   * Cloudflare account ID
   */
  account_id?: string;
}

export declare namespace ConnectivitySettings {
  export {
    type ConnectivitySettingEditResponse as ConnectivitySettingEditResponse,
    type ConnectivitySettingGetResponse as ConnectivitySettingGetResponse,
    type ConnectivitySettingEditParams as ConnectivitySettingEditParams,
    type ConnectivitySettingGetParams as ConnectivitySettingGetParams,
  };
}
