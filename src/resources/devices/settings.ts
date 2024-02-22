// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SettingsAPI from 'cloudflare/resources/devices/settings';

export class Settings extends APIResource {
  /**
   * Updates the current device settings for a Zero Trust account.
   */
  update(
    accountId: unknown,
    body: SettingUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SettingUpdateResponse | null> {
    return (
      this._client.put(`/accounts/${accountId}/devices/settings`, { body, ...options }) as Core.APIPromise<{
        result: SettingUpdateResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Describes the current device settings for a Zero Trust account.
   */
  list(accountId: unknown, options?: Core.RequestOptions): Core.APIPromise<SettingListResponse | null> {
    return (
      this._client.get(`/accounts/${accountId}/devices/settings`, options) as Core.APIPromise<{
        result: SettingListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface SettingUpdateResponse {
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

export interface SettingListResponse {
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
  export import SettingUpdateResponse = SettingsAPI.SettingUpdateResponse;
  export import SettingListResponse = SettingsAPI.SettingListResponse;
  export import SettingUpdateParams = SettingsAPI.SettingUpdateParams;
}
