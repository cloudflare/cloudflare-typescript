// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as BrotliAPI from 'cloudflare/resources/settings/brotli';

export class Brotli extends APIResource {
  /**
   * When the client requesting an asset supports the Brotli compression algorithm,
   * Cloudflare will serve a Brotli compressed version of the asset.
   */
  update(
    zoneId: string,
    body: BrotliUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BrotliUpdateResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/settings/brotli`, { body, ...options }) as Core.APIPromise<{
        result: BrotliUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * When the client requesting an asset supports the Brotli compression algorithm,
   * Cloudflare will serve a Brotli compressed version of the asset.
   */
  get(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<BrotliGetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/settings/brotli`, options) as Core.APIPromise<{
        result: BrotliGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * When the client requesting an asset supports the Brotli compression algorithm,
 * Cloudflare will serve a Brotli compressed version of the asset.
 */
export interface BrotliUpdateResponse {
  /**
   * ID of the zone setting.
   */
  id: 'brotli';

  /**
   * Current value of the zone setting.
   */
  value: 'off' | 'on';

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
 * When the client requesting an asset supports the Brotli compression algorithm,
 * Cloudflare will serve a Brotli compressed version of the asset.
 */
export interface BrotliGetResponse {
  /**
   * ID of the zone setting.
   */
  id: 'brotli';

  /**
   * Current value of the zone setting.
   */
  value: 'off' | 'on';

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

export interface BrotliUpdateParams {
  /**
   * Value of the zone setting.
   */
  value: 'off' | 'on';
}

export namespace Brotli {
  export import BrotliUpdateResponse = BrotliAPI.BrotliUpdateResponse;
  export import BrotliGetResponse = BrotliAPI.BrotliGetResponse;
  export import BrotliUpdateParams = BrotliAPI.BrotliUpdateParams;
}
