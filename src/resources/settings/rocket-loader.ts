// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as RocketLoaderAPI from 'cloudflare/resources/settings/rocket-loader';

export class RocketLoader extends APIResource {
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
  update(
    zoneId: string,
    body: RocketLoaderUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RocketLoaderUpdateResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/settings/rocket_loader`, { body, ...options }) as Core.APIPromise<{
        result: RocketLoaderUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

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
  get(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<RocketLoaderGetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/settings/rocket_loader`, options) as Core.APIPromise<{
        result: RocketLoaderGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

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
export interface RocketLoaderUpdateResponse {
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
export interface RocketLoaderGetResponse {
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

export interface RocketLoaderUpdateParams {
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
  value: RocketLoaderUpdateParams.Value;
}

export namespace RocketLoaderUpdateParams {
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
  export interface Value {
    /**
     * ID of the zone setting.
     */
    id: 'rocket_loader';

    /**
     * Current value of the zone setting.
     */
    value: 'on' | 'off';
  }
}

export namespace RocketLoader {
  export import RocketLoaderUpdateResponse = RocketLoaderAPI.RocketLoaderUpdateResponse;
  export import RocketLoaderGetResponse = RocketLoaderAPI.RocketLoaderGetResponse;
  export import RocketLoaderUpdateParams = RocketLoaderAPI.RocketLoaderUpdateParams;
}
