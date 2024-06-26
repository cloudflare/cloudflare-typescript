// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as RocketLoaderAPI from './rocket-loader';

export class RocketLoaderResource extends APIResource {}

/**
 * Rocket Loader is a general-purpose asynchronous JavaScript optimisation that
 * prioritises rendering your content while loading your site's Javascript
 * asynchronously. Turning on Rocket Loader will immediately improve a web page's
 * rendering time sometimes measured as Time to First Paint (TTFP), and also the
 * `window.onload` time (assuming there is JavaScript on the page). This can have a
 * positive impact on your Google search ranking. When turned on, Rocket Loader
 * will automatically defer the loading of all Javascript referenced in your HTML,
 * with no configuration required. Refer to
 * [Understanding Rocket Loader](https://support.cloudflare.com/hc/articles/200168056)
 * for more information.
 */
export interface RocketLoader {
  /**
   * ID of the zone setting.
   */
  id: 'rocket_loader';

  /**
   * Current value of the zone setting.
   */
  value: 'on' | 'off';

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

export namespace RocketLoaderResource {
  export import RocketLoader = RocketLoaderAPI.RocketLoader;
}
