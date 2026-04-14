// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { SinglePage } from '../../../pagination';

export class TLS extends APIResource {
  /**
   * Update the tls setting value for the hostname.
   */
  update(
    settingId: 'ciphers' | 'min_tls_version' | 'http2',
    hostname: string,
    params: TLSUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Setting> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(`/zones/${zone_id}/hostnames/settings/${settingId}/${hostname}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: Setting }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete the tls setting value for the hostname.
   */
  delete(
    settingId: 'ciphers' | 'min_tls_version' | 'http2',
    hostname: string,
    params: TLSDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TLSDeleteResponse> {
    const { zone_id } = params;
    return (
      this._client.delete(
        `/zones/${zone_id}/hostnames/settings/${settingId}/${hostname}`,
        options,
      ) as Core.APIPromise<{ result: TLSDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List the requested TLS setting for the hostnames under this zone.
   */
  get(
    settingId: 'ciphers' | 'min_tls_version' | 'http2',
    params: TLSGetParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<TLSGetResponsesSinglePage, TLSGetResponse> {
    const { zone_id } = params;
    return this._client.getAPIList(
      `/zones/${zone_id}/hostnames/settings/${settingId}`,
      TLSGetResponsesSinglePage,
      options,
    );
  }
}

export class TLSGetResponsesSinglePage extends SinglePage<TLSGetResponse> {}

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
  zone_id: string;

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
  zone_id: string;
}

export interface TLSGetParams {
  /**
   * Identifier.
   */
  zone_id: string;
}

TLS.TLSGetResponsesSinglePage = TLSGetResponsesSinglePage;

export declare namespace TLS {
  export {
    type Setting as Setting,
    type SettingValue as SettingValue,
    type TLSDeleteResponse as TLSDeleteResponse,
    type TLSGetResponse as TLSGetResponse,
    TLSGetResponsesSinglePage as TLSGetResponsesSinglePage,
    type TLSUpdateParams as TLSUpdateParams,
    type TLSDeleteParams as TLSDeleteParams,
    type TLSGetParams as TLSGetParams,
  };
}
