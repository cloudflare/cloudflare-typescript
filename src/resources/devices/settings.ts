// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SettingsAPI from 'cloudflare/resources/devices/settings';

export class Settings extends APIResource {
  /**
   * Describes the current device settings for a Zero Trust account.
   */
  zeroTrustAccountsGetDeviceSettingsForZeroTrustAccount(
    identifier: unknown,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SettingZeroTrustAccountsGetDeviceSettingsForZeroTrustAccountResponse | null> {
    return (
      this._client.get(`/accounts/${identifier}/devices/settings`, options) as Core.APIPromise<{
        result: SettingZeroTrustAccountsGetDeviceSettingsForZeroTrustAccountResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates the current device settings for a Zero Trust account.
   */
  zeroTrustAccountsUpdateDeviceSettingsForTheZeroTrustAccount(
    identifier: unknown,
    body: SettingZeroTrustAccountsUpdateDeviceSettingsForTheZeroTrustAccountParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SettingZeroTrustAccountsUpdateDeviceSettingsForTheZeroTrustAccountResponse | null> {
    return (
      this._client.put(`/accounts/${identifier}/devices/settings`, { body, ...options }) as Core.APIPromise<{
        result: SettingZeroTrustAccountsUpdateDeviceSettingsForTheZeroTrustAccountResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface SettingZeroTrustAccountsGetDeviceSettingsForZeroTrustAccountResponse {
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

export interface SettingZeroTrustAccountsUpdateDeviceSettingsForTheZeroTrustAccountResponse {
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

export interface SettingZeroTrustAccountsUpdateDeviceSettingsForTheZeroTrustAccountParams {
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

export namespace Settings {
  export import SettingZeroTrustAccountsGetDeviceSettingsForZeroTrustAccountResponse = SettingsAPI.SettingZeroTrustAccountsGetDeviceSettingsForZeroTrustAccountResponse;
  export import SettingZeroTrustAccountsUpdateDeviceSettingsForTheZeroTrustAccountResponse = SettingsAPI.SettingZeroTrustAccountsUpdateDeviceSettingsForTheZeroTrustAccountResponse;
  export import SettingZeroTrustAccountsUpdateDeviceSettingsForTheZeroTrustAccountParams = SettingsAPI.SettingZeroTrustAccountsUpdateDeviceSettingsForTheZeroTrustAccountParams;
}
