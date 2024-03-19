// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as MobileRedirectAPI from 'cloudflare/resources/zones/settings/mobile-redirect';

export class MobileRedirect extends APIResource {
  /**
   * Automatically redirect visitors on mobile devices to a mobile-optimized
   * subdomain. Refer to
   * [Understanding Cloudflare Mobile Redirect](https://support.cloudflare.com/hc/articles/200168336)
   * for more information.
   */
  edit(
    params: MobileRedirectEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ZonesMobileRedirect> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings/mobile_redirect`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ZonesMobileRedirect }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Automatically redirect visitors on mobile devices to a mobile-optimized
   * subdomain. Refer to
   * [Understanding Cloudflare Mobile Redirect](https://support.cloudflare.com/hc/articles/200168336)
   * for more information.
   */
  get(params: MobileRedirectGetParams, options?: Core.RequestOptions): Core.APIPromise<ZonesMobileRedirect> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/mobile_redirect`, options) as Core.APIPromise<{
        result: ZonesMobileRedirect;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Automatically redirect visitors on mobile devices to a mobile-optimized
 * subdomain. Refer to
 * [Understanding Cloudflare Mobile Redirect](https://support.cloudflare.com/hc/articles/200168336)
 * for more information.
 */
export interface ZonesMobileRedirect {
  /**
   * Identifier of the zone setting.
   */
  id: 'mobile_redirect';

  /**
   * Current value of the zone setting.
   */
  value: ZonesMobileRedirect.Value;

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

export namespace ZonesMobileRedirect {
  /**
   * Current value of the zone setting.
   */
  export interface Value {
    /**
     * Which subdomain prefix you wish to redirect visitors on mobile devices to
     * (subdomain must already exist).
     */
    mobile_subdomain?: string | null;

    /**
     * Whether or not mobile redirect is enabled.
     */
    status?: 'on' | 'off';

    /**
     * Whether to drop the current page path and redirect to the mobile subdomain URL
     * root, or keep the path and redirect to the same page on the mobile subdomain.
     */
    strip_uri?: boolean;
  }
}

export interface MobileRedirectEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Value of the zone setting.
   */
  value: MobileRedirectEditParams.Value;
}

export namespace MobileRedirectEditParams {
  /**
   * Value of the zone setting.
   */
  export interface Value {
    /**
     * Which subdomain prefix you wish to redirect visitors on mobile devices to
     * (subdomain must already exist).
     */
    mobile_subdomain?: string | null;

    /**
     * Whether or not mobile redirect is enabled.
     */
    status?: 'on' | 'off';

    /**
     * Whether to drop the current page path and redirect to the mobile subdomain URL
     * root, or keep the path and redirect to the same page on the mobile subdomain.
     */
    strip_uri?: boolean;
  }
}

export interface MobileRedirectGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace MobileRedirect {
  export import ZonesMobileRedirect = MobileRedirectAPI.ZonesMobileRedirect;
  export import MobileRedirectEditParams = MobileRedirectAPI.MobileRedirectEditParams;
  export import MobileRedirectGetParams = MobileRedirectAPI.MobileRedirectGetParams;
}
