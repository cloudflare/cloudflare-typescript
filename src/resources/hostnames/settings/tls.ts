// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as TLSAPI from 'cloudflare/resources/hostnames/settings/tls';

export class TLS extends APIResource {
  /**
   * Update the tls setting value for the hostname.
   */
  update(
    settingId: 'ciphers' | 'min_tls_version' | 'http2',
    hostname: string,
    params: TLSUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TLSUpdateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(`/zones/${zone_id}/hostnames/settings/${settingId}/${hostname}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: TLSUpdateResponse }>
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
  ): Core.APIPromise<TLSGetResponse | null> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/hostnames/settings/${settingId}`, options) as Core.APIPromise<{
        result: TLSGetResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface TLSUpdateResponse {
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
   * The tls setting value.
   */
  value?: number | string | Array<string>;
}

export interface TLSDeleteResponse {
  /**
   * This is the time the tls setting was originally created for this hostname.
   */
  created_at?: string;

  /**
   * The hostname for which the tls settings are set.
   */
  hostname?: string;

  status?: unknown;

  /**
   * This is the time the tls setting was updated.
   */
  updated_at?: string;

  value?: unknown;
}

export type TLSGetResponse = Array<TLSGetResponse.TLSGetResponseItem>;

export namespace TLSGetResponse {
  export interface TLSGetResponseItem {
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
     * The tls setting value.
     */
    value?: number | string | Array<string>;
  }
}

export interface TLSUpdateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: The tls setting value.
   */
  value: number | string | Array<string>;
}

export interface TLSDeleteParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface TLSGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace TLS {
  export import TLSUpdateResponse = TLSAPI.TLSUpdateResponse;
  export import TLSDeleteResponse = TLSAPI.TLSDeleteResponse;
  export import TLSGetResponse = TLSAPI.TLSGetResponse;
  export import TLSUpdateParams = TLSAPI.TLSUpdateParams;
  export import TLSDeleteParams = TLSAPI.TLSDeleteParams;
  export import TLSGetParams = TLSAPI.TLSGetParams;
}
