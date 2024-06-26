// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as HotlinkProtectionAPI from './hotlink-protection';

export class HotlinkProtectionResource extends APIResource {}

/**
 * When enabled, the Hotlink Protection option ensures that other sites cannot suck
 * up your bandwidth by building pages that use images hosted on your site. Anytime
 * a request for an image on your site hits Cloudflare, we check to ensure that
 * it's not another site requesting them. People will still be able to download and
 * view images from your page, but other sites won't be able to steal them for use
 * on their own pages.
 * (https://support.cloudflare.com/hc/en-us/articles/200170026).
 */
export interface HotlinkProtection {
  /**
   * ID of the zone setting.
   */
  id: 'hotlink_protection';

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

export namespace HotlinkProtectionResource {
  export import HotlinkProtection = HotlinkProtectionAPI.HotlinkProtection;
}
