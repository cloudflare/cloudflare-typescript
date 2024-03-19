// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as WebpAPI from 'cloudflare/resources/zones/settings/webp';

export class Webp extends APIResource {
  /**
   * When the client requesting the image supports the WebP image codec, and WebP
   * offers a performance advantage over the original image format, Cloudflare will
   * serve a WebP version of the original image.
   */
  edit(params: WebpEditParams, options?: Core.RequestOptions): Core.APIPromise<ZonesWebp> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings/webp`, { body, ...options }) as Core.APIPromise<{
        result: ZonesWebp;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * When the client requesting the image supports the WebP image codec, and WebP
   * offers a performance advantage over the original image format, Cloudflare will
   * serve a WebP version of the original image.
   */
  get(params: WebpGetParams, options?: Core.RequestOptions): Core.APIPromise<ZonesWebp> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/webp`, options) as Core.APIPromise<{ result: ZonesWebp }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * When the client requesting the image supports the WebP image codec, and WebP
 * offers a performance advantage over the original image format, Cloudflare will
 * serve a WebP version of the original image.
 */
export interface ZonesWebp {
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
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Value of the zone setting.
   */
  value: 'off' | 'on';
}

export interface WebpGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace Webp {
  export import ZonesWebp = WebpAPI.ZonesWebp;
  export import WebpEditParams = WebpAPI.WebpEditParams;
  export import WebpGetParams = WebpAPI.WebpGetParams;
}
