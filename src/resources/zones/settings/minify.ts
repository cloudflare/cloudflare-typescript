// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as MinifyAPI from 'cloudflare/resources/zones/settings/minify';

export class Minify extends APIResource {
  /**
   * Automatically minify certain assets for your website. Refer to
   * [Using Cloudflare Auto Minify](https://support.cloudflare.com/hc/en-us/articles/200168196)
   * for more information.
   */
  edit(params: MinifyEditParams, options?: Core.RequestOptions): Core.APIPromise<ZoneSettingMinify> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings/minify`, { body, ...options }) as Core.APIPromise<{
        result: ZoneSettingMinify;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Automatically minify certain assets for your website. Refer to
   * [Using Cloudflare Auto Minify](https://support.cloudflare.com/hc/en-us/articles/200168196)
   * for more information.
   */
  get(params: MinifyGetParams, options?: Core.RequestOptions): Core.APIPromise<ZoneSettingMinify> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/minify`, options) as Core.APIPromise<{
        result: ZoneSettingMinify;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Automatically minify certain assets for your website. Refer to
 * [Using Cloudflare Auto Minify](https://support.cloudflare.com/hc/en-us/articles/200168196)
 * for more information.
 */
export interface ZoneSettingMinify {
  /**
   * Zone setting identifier.
   */
  id: 'minify';

  /**
   * Current value of the zone setting.
   */
  value: ZoneSettingMinify.Value;

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

export namespace ZoneSettingMinify {
  /**
   * Current value of the zone setting.
   */
  export interface Value {
    /**
     * Automatically minify all CSS files for your website.
     */
    css?: 'on' | 'off';

    /**
     * Automatically minify all HTML files for your website.
     */
    html?: 'on' | 'off';

    /**
     * Automatically minify all JavaScript files for your website.
     */
    js?: 'on' | 'off';
  }
}

export interface MinifyEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Value of the zone setting.
   */
  value: MinifyEditParams.Value;
}

export namespace MinifyEditParams {
  /**
   * Value of the zone setting.
   */
  export interface Value {
    /**
     * Automatically minify all CSS files for your website.
     */
    css?: 'on' | 'off';

    /**
     * Automatically minify all HTML files for your website.
     */
    html?: 'on' | 'off';

    /**
     * Automatically minify all JavaScript files for your website.
     */
    js?: 'on' | 'off';
  }
}

export interface MinifyGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace Minify {
  export import ZoneSettingMinify = MinifyAPI.ZoneSettingMinify;
  export import MinifyEditParams = MinifyAPI.MinifyEditParams;
  export import MinifyGetParams = MinifyAPI.MinifyGetParams;
}
