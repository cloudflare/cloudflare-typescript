// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class AutoOriginTLSKex extends APIResource {
  /**
   * Enable or disable Auto-Origin TLS KEX selection for the zone by sending
   * `{"enabled": true}` or `{"enabled": false}`. When enabled, Cloudflare runs a
   * periodic scan of the zone's origins to determine the preferred key-exchange
   * algorithm and writes that preference to the edge so it is sent first in the TLS
   * ClientHello to the origin.
   *
   * @example
   * ```ts
   * const response = await client.ssl.autoOriginTLSKex.edit({
   *   zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   enabled: true,
   * });
   * ```
   */
  edit(
    params: AutoOriginTLSKexEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AutoOriginTLSKexEditResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings/auto_origin_tls_kex`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AutoOriginTLSKexEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * When enabled, Cloudflare automatically selects the preferred TLS key-exchange
   * algorithm to use when establishing the TLS connection to the zone's origin,
   * picking from the algorithms permitted by the zone's
   * `origin_tls_compliance_modes` setting. When disabled, the default key-exchange
   * ordering is used.
   *
   * @example
   * ```ts
   * const autoOriginTLSKex =
   *   await client.ssl.autoOriginTLSKex.get({
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
   */
  get(
    params: AutoOriginTLSKexGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AutoOriginTLSKexGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/auto_origin_tls_kex`, options) as Core.APIPromise<{
        result: AutoOriginTLSKexGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface AutoOriginTLSKexEditResponse {
  id: string;

  /**
   * Whether Auto-Origin TLS KEX selection is enabled for the zone.
   */
  enabled: boolean;

  /**
   * Last time this setting was modified.
   */
  modified_on: string;
}

export interface AutoOriginTLSKexGetResponse {
  id: string;

  /**
   * Whether Auto-Origin TLS KEX selection is enabled for the zone.
   */
  enabled: boolean;

  /**
   * Last time this setting was modified.
   */
  modified_on: string;
}

export interface AutoOriginTLSKexEditParams {
  /**
   * Path param
   */
  zone_id: string;

  /**
   * Body param: Controls enablement of Auto-Origin TLS KEX selection for the zone.
   */
  enabled: boolean;
}

export interface AutoOriginTLSKexGetParams {
  zone_id: string;
}

export declare namespace AutoOriginTLSKex {
  export {
    type AutoOriginTLSKexEditResponse as AutoOriginTLSKexEditResponse,
    type AutoOriginTLSKexGetResponse as AutoOriginTLSKexGetResponse,
    type AutoOriginTLSKexEditParams as AutoOriginTLSKexEditParams,
    type AutoOriginTLSKexGetParams as AutoOriginTLSKexGetParams,
  };
}
