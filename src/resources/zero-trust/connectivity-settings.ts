// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ConnectivitySettingsAPI from './connectivity-settings';

export class ConnectivitySettings extends APIResource {
  /**
   * Updates the Zero Trust Connectivity Settings for the given account.
   */
  edit(
    params: ConnectivitySettingEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectivitySettingEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(`/accounts/${account_id}/zerotrust/connectivity_settings`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ConnectivitySettingEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets the Zero Trust Connectivity Settings for the given account.
   */
  get(
    params: ConnectivitySettingGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectivitySettingGetResponse> {
    const { account_id } = params;
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

export namespace ConnectivitySettings {
  export import ConnectivitySettingEditResponse = ConnectivitySettingsAPI.ConnectivitySettingEditResponse;
  export import ConnectivitySettingGetResponse = ConnectivitySettingsAPI.ConnectivitySettingGetResponse;
  export import ConnectivitySettingEditParams = ConnectivitySettingsAPI.ConnectivitySettingEditParams;
  export import ConnectivitySettingGetParams = ConnectivitySettingsAPI.ConnectivitySettingGetParams;
}
