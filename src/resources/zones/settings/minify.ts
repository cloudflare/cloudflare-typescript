// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as MinifyAPI from './minify';

export class MinifyResource extends APIResource {
  /**
   * Automatically minify certain assets for your website. Refer to
   * [Using Cloudflare Auto Minify](https://support.cloudflare.com/hc/en-us/articles/200168196)
   * for more information.
   */
  edit(params: MinifyEditParams, options?: Core.RequestOptions): Core.APIPromise<Minify> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings/minify`, { body, ...options }) as Core.APIPromise<{
        result: Minify;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Automatically minify certain assets for your website. Refer to
   * [Using Cloudflare Auto Minify](https://support.cloudflare.com/hc/en-us/articles/200168196)
   * for more information.
   */
  get(params: MinifyGetParams, options?: Core.RequestOptions): Core.APIPromise<Minify> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/minify`, options) as Core.APIPromise<{ result: Minify }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Automatically minify certain assets for your website. Refer to
 * [Using Cloudflare Auto Minify](https://support.cloudflare.com/hc/en-us/articles/200168196)
 * for more information.
 */
export interface Minify {
  /**
   * Zone setting identifier.
   */
  id: 'minify';

  /**
   * Current value of the zone setting.
   */
  value: Minify.Value;

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

export namespace Minify {
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

export namespace MinifyResource {
  export import Minify = MinifyAPI.Minify;
  export import MinifyEditParams = MinifyAPI.MinifyEditParams;
  export import MinifyGetParams = MinifyAPI.MinifyGetParams;
}
