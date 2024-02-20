// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as MinTLSVersionAPI from 'cloudflare/resources/settings/min-tls-version';

export class MinTLSVersion extends APIResource {
  /**
   * Changes Minimum TLS Version setting.
   */
  edit(
    zoneId: string,
    body: MinTLSVersionEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MinTLSVersionEditResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/settings/min_tls_version`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: MinTLSVersionEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets Minimum TLS Version setting.
   */
  get(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<MinTLSVersionGetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/settings/min_tls_version`, options) as Core.APIPromise<{
        result: MinTLSVersionGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Only accepts HTTPS requests that use at least the TLS protocol version
 * specified. For example, if TLS 1.1 is selected, TLS 1.0 connections will be
 * rejected, while 1.1, 1.2, and 1.3 (if enabled) will be permitted.
 */
export interface MinTLSVersionEditResponse {
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

/**
 * Only accepts HTTPS requests that use at least the TLS protocol version
 * specified. For example, if TLS 1.1 is selected, TLS 1.0 connections will be
 * rejected, while 1.1, 1.2, and 1.3 (if enabled) will be permitted.
 */
export interface MinTLSVersionGetResponse {
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
   * Value of the zone setting.
   */
  value: '1.0' | '1.1' | '1.2' | '1.3';
}

export namespace MinTLSVersion {
  export import MinTLSVersionEditResponse = MinTLSVersionAPI.MinTLSVersionEditResponse;
  export import MinTLSVersionGetResponse = MinTLSVersionAPI.MinTLSVersionGetResponse;
  export import MinTLSVersionEditParams = MinTLSVersionAPI.MinTLSVersionEditParams;
}
