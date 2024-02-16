// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ConnectivitySettingsAPI from 'cloudflare/resources/zerotrust/connectivity-settings';

export class ConnectivitySettings extends APIResource {
  /**
   * Updates the Zero Trust Connectivity Settings for the given account.
   */
  update(
    accountId: string,
    body: ConnectivitySettingUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectivitySettingUpdateResponse> {
    return (
      this._client.patch(`/accounts/${accountId}/zerotrust/connectivity_settings`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ConnectivitySettingUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets the Zero Trust Connectivity Settings for the given account.
   */
  get(accountId: string, options?: Core.RequestOptions): Core.APIPromise<ConnectivitySettingGetResponse> {
    return (
      this._client.get(`/accounts/${accountId}/zerotrust/connectivity_settings`, options) as Core.APIPromise<{
        result: ConnectivitySettingGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ConnectivitySettingUpdateResponse {
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

export interface ConnectivitySettingUpdateParams {
  /**
   * A flag to enable the ICMP proxy for the account network.
   */
  icmp_proxy_enabled?: boolean;

  /**
   * A flag to enable WARP to WARP traffic.
   */
  offramp_warp_enabled?: boolean;
}

export namespace ConnectivitySettings {
  export import ConnectivitySettingUpdateResponse = ConnectivitySettingsAPI.ConnectivitySettingUpdateResponse;
  export import ConnectivitySettingGetResponse = ConnectivitySettingsAPI.ConnectivitySettingGetResponse;
  export import ConnectivitySettingUpdateParams = ConnectivitySettingsAPI.ConnectivitySettingUpdateParams;
}
