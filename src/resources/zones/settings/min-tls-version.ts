// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as MinTLSVersionAPI from './min-tls-version';

export class MinTLSVersionResource extends APIResource {
  /**
   * Changes Minimum TLS Version setting.
   */
  edit(params: MinTLSVersionEditParams, options?: Core.RequestOptions): Core.APIPromise<MinTLSVersion> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings/min_tls_version`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: MinTLSVersion }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets Minimum TLS Version setting.
   */
  get(params: MinTLSVersionGetParams, options?: Core.RequestOptions): Core.APIPromise<MinTLSVersion> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/min_tls_version`, options) as Core.APIPromise<{
        result: MinTLSVersion;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Only accepts HTTPS requests that use at least the TLS protocol version
 * specified. For example, if TLS 1.1 is selected, TLS 1.0 connections will be
 * rejected, while 1.1, 1.2, and 1.3 (if enabled) will be permitted.
 */
export interface MinTLSVersion {
  /**
   * ID of the zone setting.
   */
  id: 'min_tls_version';

  /**
   * Current value of the zone setting.
   */
  value: '1.0' | '1.1' | '1.2' | '1.3';

  /**
   * Whether or not this setting can be modified for this zone (based on your
   * Cloudflare plan level).
   */
  editable?: true | false;

  /**
   * last time this setting was modified.
   */
  modified_on?: string | null;
}

export interface MinTLSVersionEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Value of the zone setting.
   */
  value: '1.0' | '1.1' | '1.2' | '1.3';
}

export interface MinTLSVersionGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace MinTLSVersionResource {
  export import MinTLSVersion = MinTLSVersionAPI.MinTLSVersion;
  export import MinTLSVersionEditParams = MinTLSVersionAPI.MinTLSVersionEditParams;
  export import MinTLSVersionGetParams = MinTLSVersionAPI.MinTLSVersionGetParams;
}
