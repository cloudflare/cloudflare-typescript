// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as TLSAPI from 'cloudflare/resources/hostnames/settings/tls';

export class TLS extends APIResource {
  /**
   * Delete the tls setting value for the hostname.
   */
  delete(
    zoneId: string,
    settingId: 'ciphers' | 'min_tls_version' | 'http2',
    hostname: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TLSDeleteResponse> {
    return (
      this._client.delete(
        `/zones/${zoneId}/hostnames/settings/${settingId}/${hostname}`,
        options,
      ) as Core.APIPromise<{ result: TLSDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List the requested TLS setting for the hostnames under this zone.
   */
  get(
    zoneId: string,
    settingId: 'ciphers' | 'min_tls_version' | 'http2',
    options?: Core.RequestOptions,
  ): Core.APIPromise<TLSGetResponse | null> {
    return (
      this._client.get(`/zones/${zoneId}/hostnames/settings/${settingId}`, options) as Core.APIPromise<{
        result: TLSGetResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update the tls setting value for the hostname.
   */
  replace(
    zoneId: string,
    settingId: 'ciphers' | 'min_tls_version' | 'http2',
    hostname: string,
    body: TLSReplaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TLSReplaceResponse> {
    return (
      this._client.put(`/zones/${zoneId}/hostnames/settings/${settingId}/${hostname}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: TLSReplaceResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
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

export interface TLSReplaceResponse {
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

export interface TLSReplaceParams {
  /**
   * The tls setting value.
   */
  value: number | string | Array<string>;
}

export namespace TLS {
  export import TLSDeleteResponse = TLSAPI.TLSDeleteResponse;
  export import TLSGetResponse = TLSAPI.TLSGetResponse;
  export import TLSReplaceResponse = TLSAPI.TLSReplaceResponse;
  export import TLSReplaceParams = TLSAPI.TLSReplaceParams;
}
