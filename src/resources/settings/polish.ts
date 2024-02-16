// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PolishAPI from 'cloudflare/resources/settings/polish';

export class Polish extends APIResource {
  /**
   * Automatically optimize image loading for website visitors on mobile devices.
   * Refer to our [blog post](http://blog.cloudflare.com/polish-solving-mobile-speed)
   * for more information.
   */
  update(
    zoneId: string,
    body: PolishUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PolishUpdateResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/settings/polish`, { body, ...options }) as Core.APIPromise<{
        result: PolishUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Automatically optimize image loading for website visitors on mobile devices.
   * Refer to our [blog post](http://blog.cloudflare.com/polish-solving-mobile-speed)
   * for more information.
   */
  get(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<PolishGetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/settings/polish`, options) as Core.APIPromise<{
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
export interface PolishUpdateResponse {
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

export interface PolishUpdateParams {
  /**
   * Removes metadata and compresses your images for faster page load times. Basic
   * (Lossless): Reduce the size of PNG, JPEG, and GIF files - no impact on visual
   * quality. Basic + JPEG (Lossy): Further reduce the size of JPEG files for faster
   * image loading. Larger JPEGs are converted to progressive images, loading a
   * lower-resolution image first and ending in a higher-resolution version. Not
   * recommended for hi-res photography sites.
   */
  value: PolishUpdateParams.Value;
}

export namespace PolishUpdateParams {
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

export namespace Polish {
  export import PolishUpdateResponse = PolishAPI.PolishUpdateResponse;
  export import PolishGetResponse = PolishAPI.PolishGetResponse;
  export import PolishUpdateParams = PolishAPI.PolishUpdateParams;
}
