// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as WebpAPI from 'cloudflare/resources/settings/webp';

export class Webp extends APIResource {
  /**
   * When the client requesting the image supports the WebP image codec, and WebP
   * offers a performance advantage over the original image format, Cloudflare will
   * serve a WebP version of the original image.
   */
  edit(
    zoneId: string,
    body: WebpEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebpEditResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/settings/webp`, { body, ...options }) as Core.APIPromise<{
        result: WebpEditResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * When the client requesting the image supports the WebP image codec, and WebP
   * offers a performance advantage over the original image format, Cloudflare will
   * serve a WebP version of the original image.
   */
  get(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<WebpGetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/settings/webp`, options) as Core.APIPromise<{
        result: WebpGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * When the client requesting the image supports the WebP image codec, and WebP
 * offers a performance advantage over the original image format, Cloudflare will
 * serve a WebP version of the original image.
 */
export interface WebpEditResponse {
  /**
   * ID of the zone setting.
   */
  id: 'webp';

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
 * When the client requesting the image supports the WebP image codec, and WebP
 * offers a performance advantage over the original image format, Cloudflare will
 * serve a WebP version of the original image.
 */
export interface WebpGetResponse {
  /**
   * ID of the zone setting.
   */
  id: 'webp';

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

export interface WebpEditParams {
  /**
   * Value of the zone setting.
   */
  value: 'off' | 'on';
}

export namespace Webp {
  export import WebpEditResponse = WebpAPI.WebpEditResponse;
  export import WebpGetResponse = WebpAPI.WebpGetResponse;
  export import WebpEditParams = WebpAPI.WebpEditParams;
}
