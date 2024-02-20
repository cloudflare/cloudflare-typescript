// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SettingsAPI from 'cloudflare/resources/devices/settings';

export class Settings extends APIResource {
  /**
   * Describes the current device settings for a Zero Trust account.
   */
  list(identifier: unknown, options?: Core.RequestOptions): Core.APIPromise<SettingListResponse | null> {
    return (
      this._client.get(`/accounts/${identifier}/devices/settings`, options) as Core.APIPromise<{
        result: SettingListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates the current device settings for a Zero Trust account.
   */
  replace(
    identifier: unknown,
    body: SettingReplaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SettingReplaceResponse | null> {
    return (
      this._client.put(`/accounts/${identifier}/devices/settings`, { body, ...options }) as Core.APIPromise<{
        result: SettingReplaceResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
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

export interface SettingReplaceResponse {
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

export interface SettingReplaceParams {
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
  export import SettingListResponse = SettingsAPI.SettingListResponse;
  export import SettingReplaceResponse = SettingsAPI.SettingReplaceResponse;
  export import SettingReplaceParams = SettingsAPI.SettingReplaceParams;
}
