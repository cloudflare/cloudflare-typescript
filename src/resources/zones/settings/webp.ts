// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as WebPAPI from 'cloudflare/resources/zones/settings/webp';

export class WebP extends APIResource {
  /**
   * When the client requesting the image supports the WebP image codec, and WebP
   * offers a performance advantage over the original image format, Cloudflare will
   * serve a WebP version of the original image.
   */
  edit(params: WebPEditParams, options?: Core.RequestOptions): Core.APIPromise<ZoneSettingWebP> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings/webp`, { body, ...options }) as Core.APIPromise<{
        result: ZoneSettingWebP;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * When the client requesting the image supports the WebP image codec, and WebP
   * offers a performance advantage over the original image format, Cloudflare will
   * serve a WebP version of the original image.
   */
  get(params: WebPGetParams, options?: Core.RequestOptions): Core.APIPromise<ZoneSettingWebP> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/webp`, options) as Core.APIPromise<{
        result: ZoneSettingWebP;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * When the client requesting the image supports the WebP image codec, and WebP
 * offers a performance advantage over the original image format, Cloudflare will
 * serve a WebP version of the original image.
 */
export interface ZoneSettingWebP {
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

export interface WebPEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Value of the zone setting.
   */
  value: 'off' | 'on';
}

export interface WebPGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace WebP {
  export import ZoneSettingWebP = WebPAPI.ZoneSettingWebP;
  export import WebPEditParams = WebPAPI.WebPEditParams;
  export import WebPGetParams = WebPAPI.WebPGetParams;
}
