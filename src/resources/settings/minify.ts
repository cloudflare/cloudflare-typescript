// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as MinifyAPI from 'cloudflare/resources/settings/minify';

export class Minify extends APIResource {
  /**
   * Automatically minify certain assets for your website. Refer to
   * [Using Cloudflare Auto Minify](https://support.cloudflare.com/hc/en-us/articles/200168196)
   * for more information.
   */
  update(
    zoneId: string,
    body: MinifyUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MinifyUpdateResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/settings/minify`, { body, ...options }) as Core.APIPromise<{
        result: MinifyUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Automatically minify certain assets for your website. Refer to
   * [Using Cloudflare Auto Minify](https://support.cloudflare.com/hc/en-us/articles/200168196)
   * for more information.
   */
  get(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<MinifyGetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/settings/minify`, options) as Core.APIPromise<{
        result: MinifyGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Automatically minify certain assets for your website. Refer to
 * [Using Cloudflare Auto Minify](https://support.cloudflare.com/hc/en-us/articles/200168196)
 * for more information.
 */
export interface MinifyUpdateResponse {
  /**
   * Zone setting identifier.
   */
  id: 'minify';

  /**
   * Current value of the zone setting.
   */
  value: MinifyUpdateResponse.Value;

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

export namespace MinifyUpdateResponse {
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

/**
 * Automatically minify certain assets for your website. Refer to
 * [Using Cloudflare Auto Minify](https://support.cloudflare.com/hc/en-us/articles/200168196)
 * for more information.
 */
export interface MinifyGetResponse {
  /**
   * Zone setting identifier.
   */
  id: 'minify';

  /**
   * Current value of the zone setting.
   */
  value: MinifyGetResponse.Value;

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

export namespace MinifyGetResponse {
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

export interface MinifyUpdateParams {
  /**
   * Value of the zone setting.
   */
  value: MinifyUpdateParams.Value;
}

export namespace MinifyUpdateParams {
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

export namespace Minify {
  export import MinifyUpdateResponse = MinifyAPI.MinifyUpdateResponse;
  export import MinifyGetResponse = MinifyAPI.MinifyGetResponse;
  export import MinifyUpdateParams = MinifyAPI.MinifyUpdateParams;
}
