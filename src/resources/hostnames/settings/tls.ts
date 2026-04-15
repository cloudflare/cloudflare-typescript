// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseTLS extends APIResource {
  static override readonly _key: readonly ['hostnames', 'settings', 'tls'] = Object.freeze([
    'hostnames',
    'settings',
    'tls',
  ] as const);

  /**
   * Update the tls setting value for the hostname.
   */
  update(hostname: string, params: TLSUpdateParams, options?: RequestOptions): APIPromise<Setting> {
    const { zone_id = this._client.zoneID, setting_id, ...body } = params;
    return (
      this._client.put(path`/zones/${zone_id}/hostnames/settings/${setting_id}/${hostname}`, {
        body,
        ...options,
      }) as APIPromise<{ result: Setting }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete the tls setting value for the hostname.
   */
  delete(hostname: string, params: TLSDeleteParams, options?: RequestOptions): APIPromise<TLSDeleteResponse> {
    const { zone_id = this._client.zoneID, setting_id } = params;
    return (
      this._client.delete(
        path`/zones/${zone_id}/hostnames/settings/${setting_id}/${hostname}`,
        options,
      ) as APIPromise<{ result: TLSDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List the requested TLS setting for the hostnames under this zone.
   */
  get(
    settingID: 'ciphers' | 'min_tls_version' | 'http2',
    params: TLSGetParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<TLSGetResponsesSinglePage, TLSGetResponse> {
    const { zone_id = this._client.zoneID } = params ?? {};
    return this._client.getAPIList(
      path`/zones/${zone_id}/hostnames/settings/${settingID}`,
      SinglePage<TLSGetResponse>,
      options,
    );
  }
}
export class TLS extends BaseTLS {}

export type TLSGetResponsesSinglePage = SinglePage<TLSGetResponse>;

export interface Setting {
  /**
   * This is the time the tls setting was originally created for this hostname.
   */
  created_at?: string;

  /**
   * The hostname for which the tls settings are set.
   */
  hostname?: string;

  /**
   * Deployment status for the given tls setting.
   */
  status?: string;

  /**
   * This is the time the tls setting was updated.
   */
  updated_at?: string;

  /**
   * The TLS setting value. The type depends on the `setting_id` used in the request
   * path:
   *
   * - `ciphers`: an array of allowed cipher suite strings in BoringSSL format (e.g.,
   *   `["ECDHE-RSA-AES128-GCM-SHA256", "AES128-GCM-SHA256"]`)
   * - `min_tls_version`: a string indicating the minimum TLS version — one of
   *   `"1.0"`, `"1.1"`, `"1.2"`, or `"1.3"` (e.g., `"1.2"`)
   * - `http2`: a string indicating whether HTTP/2 is enabled — `"on"` or `"off"`
   *   (e.g., `"on"`)
   */
  value?: SettingValue;
}

/**
 * The TLS setting value. The type depends on the `setting_id` used in the request
 * path:
 *
 * - `ciphers`: an array of allowed cipher suite strings in BoringSSL format (e.g.,
 *   `["ECDHE-RSA-AES128-GCM-SHA256", "AES128-GCM-SHA256"]`)
 * - `min_tls_version`: a string indicating the minimum TLS version — one of
 *   `"1.0"`, `"1.1"`, `"1.2"`, or `"1.3"` (e.g., `"1.2"`)
 * - `http2`: a string indicating whether HTTP/2 is enabled — `"on"` or `"off"`
 *   (e.g., `"on"`)
 */
export type SettingValue = '1.0' | '1.1' | '1.2' | '1.3' | 'on' | 'off' | Array<string>;

/**
 * The TLS setting value. The type depends on the `setting_id` used in the request
 * path:
 *
 * - `ciphers`: an array of allowed cipher suite strings in BoringSSL format (e.g.,
 *   `["ECDHE-RSA-AES128-GCM-SHA256", "AES128-GCM-SHA256"]`)
 * - `min_tls_version`: a string indicating the minimum TLS version — one of
 *   `"1.0"`, `"1.1"`, `"1.2"`, or `"1.3"` (e.g., `"1.2"`)
 * - `http2`: a string indicating whether HTTP/2 is enabled — `"on"` or `"off"`
 *   (e.g., `"on"`)
 */
export type SettingValueParam = '1.0' | '1.1' | '1.2' | '1.3' | 'on' | 'off' | Array<string>;

export interface TLSDeleteResponse {
  /**
   * This is the time the tls setting was originally created for this hostname.
   */
  created_at?: string;

  /**
   * The hostname for which the tls settings are set.
   */
  hostname?: string;

  /**
   * Deployment status for the given tls setting.
   */
  status?: string;

  /**
   * This is the time the tls setting was updated.
   */
  updated_at?: string;

  /**
   * The TLS setting value. The type depends on the `setting_id` used in the request
   * path:
   *
   * - `ciphers`: an array of allowed cipher suite strings in BoringSSL format (e.g.,
   *   `["ECDHE-RSA-AES128-GCM-SHA256", "AES128-GCM-SHA256"]`)
   * - `min_tls_version`: a string indicating the minimum TLS version — one of
   *   `"1.0"`, `"1.1"`, `"1.2"`, or `"1.3"` (e.g., `"1.2"`)
   * - `http2`: a string indicating whether HTTP/2 is enabled — `"on"` or `"off"`
   *   (e.g., `"on"`)
   */
  value?: SettingValue;
}

export interface TLSGetResponse {
  /**
   * This is the time the tls setting was originally created for this hostname.
   */
  created_at?: string;

  /**
   * The hostname for which the tls settings are set.
   */
  hostname?: string;

  /**
   * Deployment status for the given tls setting.
   */
  status?: string;

  /**
   * This is the time the tls setting was updated.
   */
  updated_at?: string;

  /**
   * The TLS setting value. The type depends on the `setting_id` used in the request
   * path:
   *
   * - `ciphers`: an array of allowed cipher suite strings in BoringSSL format (e.g.,
   *   `["ECDHE-RSA-AES128-GCM-SHA256", "AES128-GCM-SHA256"]`)
   * - `min_tls_version`: a string indicating the minimum TLS version — one of
   *   `"1.0"`, `"1.1"`, `"1.2"`, or `"1.3"` (e.g., `"1.2"`)
   * - `http2`: a string indicating whether HTTP/2 is enabled — `"on"` or `"off"`
   *   (e.g., `"on"`)
   */
  value?: SettingValue;
}

export interface TLSUpdateParams {
  /**
   * Path param: Identifier.
   */
  zone_id?: string;

  /**
   * Path param: The TLS Setting name. The value type depends on the setting:
   *
   * - `ciphers`: value is an array of cipher suite strings (e.g.,
   *   `["ECDHE-RSA-AES128-GCM-SHA256", "AES128-GCM-SHA256"]`)
   * - `min_tls_version`: value is a TLS version string (`"1.0"`, `"1.1"`, `"1.2"`,
   *   or `"1.3"`)
   * - `http2`: value is `"on"` or `"off"`
   */
  setting_id: 'ciphers' | 'min_tls_version' | 'http2';

  /**
   * Body param: The TLS setting value. The type depends on the `setting_id` used in
   * the request path:
   *
   * - `ciphers`: an array of allowed cipher suite strings in BoringSSL format (e.g.,
   *   `["ECDHE-RSA-AES128-GCM-SHA256", "AES128-GCM-SHA256"]`)
   * - `min_tls_version`: a string indicating the minimum TLS version — one of
   *   `"1.0"`, `"1.1"`, `"1.2"`, or `"1.3"` (e.g., `"1.2"`)
   * - `http2`: a string indicating whether HTTP/2 is enabled — `"on"` or `"off"`
   *   (e.g., `"on"`)
   */
  value: SettingValueParam;
}

export interface TLSDeleteParams {
  /**
   * Identifier.
   */
  zone_id?: string;

  /**
   * The TLS Setting name. The value type depends on the setting:
   *
   * - `ciphers`: value is an array of cipher suite strings (e.g.,
   *   `["ECDHE-RSA-AES128-GCM-SHA256", "AES128-GCM-SHA256"]`)
   * - `min_tls_version`: value is a TLS version string (`"1.0"`, `"1.1"`, `"1.2"`,
   *   or `"1.3"`)
   * - `http2`: value is `"on"` or `"off"`
   */
  setting_id: 'ciphers' | 'min_tls_version' | 'http2';
}

export interface TLSGetParams {
  /**
   * Identifier.
   */
  zone_id?: string;
}

export declare namespace TLS {
  export {
    type Setting as Setting,
    type SettingValue as SettingValue,
    type TLSDeleteResponse as TLSDeleteResponse,
    type TLSGetResponse as TLSGetResponse,
    type TLSGetResponsesSinglePage as TLSGetResponsesSinglePage,
    type TLSUpdateParams as TLSUpdateParams,
    type TLSDeleteParams as TLSDeleteParams,
    type TLSGetParams as TLSGetParams,
  };
}
