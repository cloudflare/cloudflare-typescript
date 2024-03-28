// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SettingsAPI from 'cloudflare/resources/zero-trust/devices/settings';

export class Settings extends APIResource {
  /**
   * Updates the current device settings for a Zero Trust account.
   */
  update(
    params: SettingUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZeroTrustAccountDeviceSettings | null> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/devices/settings`, { body, ...options }) as Core.APIPromise<{
        result: ZeroTrustAccountDeviceSettings | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Describes the current device settings for a Zero Trust account.
   */
  list(
    params: SettingListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZeroTrustAccountDeviceSettings | null> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/devices/settings`, options) as Core.APIPromise<{
        result: ZeroTrustAccountDeviceSettings | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ZeroTrustAccountDeviceSettings {
  /**
   * Enable gateway proxy filtering on TCP.
   */
  gateway_proxy_enabled?: boolean;

  /**
   * Enable gateway proxy filtering on UDP.
   */
  gateway_udp_proxy_enabled?: boolean;

  /**
   * Enable installation of cloudflare managed root certificate.
   */
  root_certificate_installation_enabled?: boolean;

  /**
   * Enable using CGNAT virtual IPv4.
   */
  use_zt_virtual_ip?: boolean;
}

export interface SettingUpdateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param: Enable gateway proxy filtering on TCP.
   */
  gateway_proxy_enabled?: boolean;

  /**
   * Body param: Enable gateway proxy filtering on UDP.
   */
  gateway_udp_proxy_enabled?: boolean;

  /**
   * Body param: Enable installation of cloudflare managed root certificate.
   */
  root_certificate_installation_enabled?: boolean;

  /**
   * Body param: Enable using CGNAT virtual IPv4.
   */
  use_zt_virtual_ip?: boolean;
}

export interface SettingListParams {
  account_id: string;
}

export namespace Settings {
  export import ZeroTrustAccountDeviceSettings = SettingsAPI.ZeroTrustAccountDeviceSettings;
  export import SettingUpdateParams = SettingsAPI.SettingUpdateParams;
  export import SettingListParams = SettingsAPI.SettingListParams;
}
