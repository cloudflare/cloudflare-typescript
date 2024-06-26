// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as MobileRedirectAPI from './mobile-redirect';

export class MobileRedirectResource extends APIResource {}

/**
 * @deprecated: Deprecated: Use Single Redirects instead
 * https://developers.cloudflare.com/rules/url-forwarding/single-redirects/examples/#perform-mobile-redirects.
 * Automatically redirect visitors on mobile devices to a mobile-optimized
 * subdomain.
 */
export interface MobileRedirect {
  /**
   * Identifier of the zone setting.
   */
  id: 'mobile_redirect';

  /**
   * @deprecated: Current value of the zone setting.
   */
  value: MobileRedirect.Value;

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

export namespace MobileRedirect {
  /**
   * @deprecated: Current value of the zone setting.
   */
  export interface Value {
    /**
     * Which subdomain prefix you wish to redirect visitors on mobile devices to
     * (subdomain must already exist).
     */
    mobile_subdomain?: string | null;

    /**
     * Deprecated: Use Single Redirects instead
     * https://developers.cloudflare.com/rules/url-forwarding/single-redirects/examples/#perform-mobile-redirects.
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

export namespace MobileRedirectResource {
  export import MobileRedirect = MobileRedirectAPI.MobileRedirect;
}
