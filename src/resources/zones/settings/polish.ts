// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PolishAPI from 'cloudflare/resources/zones/settings/polish';

export class Polish extends APIResource {
  /**
   * Automatically optimize image loading for website visitors on mobile devices.
   * Refer to our [blog post](http://blog.cloudflare.com/polish-solving-mobile-speed)
   * for more information.
   */
  edit(params: PolishEditParams, options?: Core.RequestOptions): Core.APIPromise<PolishEditResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings/polish`, { body, ...options }) as Core.APIPromise<{
        result: PolishEditResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Automatically optimize image loading for website visitors on mobile devices.
   * Refer to our [blog post](http://blog.cloudflare.com/polish-solving-mobile-speed)
   * for more information.
   */
  get(params: PolishGetParams, options?: Core.RequestOptions): Core.APIPromise<PolishGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/polish`, options) as Core.APIPromise<{
        result: PolishGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Removes metadata and compresses your images for faster page load times. Basic
 * (Lossless): Reduce the size of PNG, JPEG, and GIF files - no impact on visual
 * quality. Basic + JPEG (Lossy): Further reduce the size of JPEG files for faster
 * image loading. Larger JPEGs are converted to progressive images, loading a
 * lower-resolution image first and ending in a higher-resolution version. Not
 * recommended for hi-res photography sites.
 */
export interface PolishEditResponse {
  /**
   * ID of the zone setting.
   */
  id: 'polish';

  /**
   * Current value of the zone setting.
   */
  value: 'off' | 'lossless' | 'lossy';

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
 * Removes metadata and compresses your images for faster page load times. Basic
 * (Lossless): Reduce the size of PNG, JPEG, and GIF files - no impact on visual
 * quality. Basic + JPEG (Lossy): Further reduce the size of JPEG files for faster
 * image loading. Larger JPEGs are converted to progressive images, loading a
 * lower-resolution image first and ending in a higher-resolution version. Not
 * recommended for hi-res photography sites.
 */
export interface PolishGetResponse {
  /**
   * ID of the zone setting.
   */
  id: 'polish';

  /**
   * Current value of the zone setting.
   */
  value: 'off' | 'lossless' | 'lossy';

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

export interface PolishEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Removes metadata and compresses your images for faster page load
   * times. Basic (Lossless): Reduce the size of PNG, JPEG, and GIF files - no impact
   * on visual quality. Basic + JPEG (Lossy): Further reduce the size of JPEG files
   * for faster image loading. Larger JPEGs are converted to progressive images,
   * loading a lower-resolution image first and ending in a higher-resolution
   * version. Not recommended for hi-res photography sites.
   */
  value: PolishEditParams.Value;
}

export namespace PolishEditParams {
  /**
   * Removes metadata and compresses your images for faster page load times. Basic
   * (Lossless): Reduce the size of PNG, JPEG, and GIF files - no impact on visual
   * quality. Basic + JPEG (Lossy): Further reduce the size of JPEG files for faster
   * image loading. Larger JPEGs are converted to progressive images, loading a
   * lower-resolution image first and ending in a higher-resolution version. Not
   * recommended for hi-res photography sites.
   */
  export interface Value {
    /**
     * ID of the zone setting.
     */
    id: 'polish';

    /**
     * Current value of the zone setting.
     */
    value: 'off' | 'lossless' | 'lossy';
  }
}

export interface PolishGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace Polish {
  export import PolishEditResponse = PolishAPI.PolishEditResponse;
  export import PolishGetResponse = PolishAPI.PolishGetResponse;
  export import PolishEditParams = PolishAPI.PolishEditParams;
  export import PolishGetParams = PolishAPI.PolishGetParams;
}
