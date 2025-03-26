// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class ConnectivitySettings extends APIResource {
  /**
   * Updates the Zero Trust Connectivity Settings for the given account.
   */
  edit(
    params: ConnectivitySettingEditParams,
    options?: RequestOptions,
  ): APIPromise<ConnectivitySettingEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(path`/accounts/${account_id}/zerotrust/connectivity_settings`, {
        body,
        ...options,
      }) as APIPromise<{ result: ConnectivitySettingEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets the Zero Trust Connectivity Settings for the given account.
   */
  get(
    params: ConnectivitySettingGetParams,
    options?: RequestOptions,
  ): APIPromise<ConnectivitySettingGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/zerotrust/connectivity_settings`, options) as APIPromise<{
        result: ConnectivitySettingGetResponse;
      }>
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
  account_id: string;

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
  account_id: string;
}

export declare namespace ConnectivitySettings {
  export {
    type ConnectivitySettingEditResponse as ConnectivitySettingEditResponse,
    type ConnectivitySettingGetResponse as ConnectivitySettingGetResponse,
    type ConnectivitySettingEditParams as ConnectivitySettingEditParams,
    type ConnectivitySettingGetParams as ConnectivitySettingGetParams,
  };
}
