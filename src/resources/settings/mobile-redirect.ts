// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as MobileRedirectAPI from 'cloudflare/resources/settings/mobile-redirect';

export class MobileRedirect extends APIResource {
  /**
   * Automatically redirect visitors on mobile devices to a mobile-optimized
   * subdomain. Refer to
   * [Understanding Cloudflare Mobile Redirect](https://support.cloudflare.com/hc/articles/200168336)
   * for more information.
   */
  update(
    zoneId: string,
    body: MobileRedirectUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MobileRedirectUpdateResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/settings/mobile_redirect`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: MobileRedirectUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Automatically redirect visitors on mobile devices to a mobile-optimized
   * subdomain. Refer to
   * [Understanding Cloudflare Mobile Redirect](https://support.cloudflare.com/hc/articles/200168336)
   * for more information.
   */
  get(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<MobileRedirectGetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/settings/mobile_redirect`, options) as Core.APIPromise<{
        result: MobileRedirectGetResponse;
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
export interface MobileRedirectUpdateResponse {
  /**
   * Identifier of the zone setting.
   */
  id: 'mobile_redirect';

  /**
   * Current value of the zone setting.
   */
  value: MobileRedirectUpdateResponse.Value;

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

export namespace MobileRedirectUpdateResponse {
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

/**
 * Automatically redirect visitors on mobile devices to a mobile-optimized
 * subdomain. Refer to
 * [Understanding Cloudflare Mobile Redirect](https://support.cloudflare.com/hc/articles/200168336)
 * for more information.
 */
export interface MobileRedirectGetResponse {
  /**
   * Identifier of the zone setting.
   */
  id: 'mobile_redirect';

  /**
   * Current value of the zone setting.
   */
  value: MobileRedirectGetResponse.Value;

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

export namespace MobileRedirectGetResponse {
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

export interface MobileRedirectUpdateParams {
  /**
   * Value of the zone setting.
   */
  value: MobileRedirectUpdateParams.Value;
}

export namespace MobileRedirectUpdateParams {
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

export namespace MobileRedirect {
  export import MobileRedirectUpdateResponse = MobileRedirectAPI.MobileRedirectUpdateResponse;
  export import MobileRedirectGetResponse = MobileRedirectAPI.MobileRedirectGetResponse;
  export import MobileRedirectUpdateParams = MobileRedirectAPI.MobileRedirectUpdateParams;
}
