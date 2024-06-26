// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as MinifyAPI from './minify';

export class MinifyResource extends APIResource {}

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

export namespace MinifyResource {
  export import Minify = MinifyAPI.Minify;
}
