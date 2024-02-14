// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as TLSAPI from 'cloudflare/resources/hostnames/settings/tls';

export class TLS extends APIResource {
  /**
   * List the requested TLS setting for the hostnames under this zone.
   */
  retrieve(
    zoneIdentifier: string,
    tlsSetting: 'ciphers' | 'min_tls_version' | 'http2',
    options?: Core.RequestOptions,
  ): Core.APIPromise<TLSRetrieveResponse | null> {
    return (
      this._client.get(
        `/zones/${zoneIdentifier}/hostnames/settings/${tlsSetting}`,
        options,
      ) as Core.APIPromise<{ result: TLSRetrieveResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update the tls setting value for the hostname.
   */
  update(
    zoneIdentifier: string,
    tlsSetting: 'ciphers' | 'min_tls_version' | 'http2',
    hostname: string,
    body: TLSUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TLSUpdateResponse> {
    return (
      this._client.put(`/zones/${zoneIdentifier}/hostnames/settings/${tlsSetting}/${hostname}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: TLSUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete the tls setting value for the hostname.
   */
  delete(
    zoneIdentifier: string,
    tlsSetting: 'ciphers' | 'min_tls_version' | 'http2',
    hostname: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TLSDeleteResponse> {
    return (
      this._client.delete(
        `/zones/${zoneIdentifier}/hostnames/settings/${tlsSetting}/${hostname}`,
        options,
      ) as Core.APIPromise<{ result: TLSDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type TLSRetrieveResponse = Array<TLSRetrieveResponse.TLSRetrieveResponseItem>;

export namespace TLSRetrieveResponse {
  export interface TLSRetrieveResponseItem {
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

export interface TLSUpdateParams {
  /**
   * The tls setting value.
   */
  value: number | string | Array<string>;
}

export namespace TLS {
  export import TLSRetrieveResponse = TLSAPI.TLSRetrieveResponse;
  export import TLSUpdateResponse = TLSAPI.TLSUpdateResponse;
  export import TLSDeleteResponse = TLSAPI.TLSDeleteResponse;
  export import TLSUpdateParams = TLSAPI.TLSUpdateParams;
}
