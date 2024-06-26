// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as AutomaticHTTPSRewritesAPI from './automatic-https-rewrites';

export class AutomaticHTTPSRewrites extends APIResource {}

/**
 * Enable the Automatic HTTPS Rewrites feature for this zone.
 */
export interface AutomaticHTTPSRewrites {
  /**
   * ID of the zone setting.
   */
  id: 'automatic_https_rewrites';

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

export namespace AutomaticHTTPSRewrites {
  export import AutomaticHTTPSRewrites = AutomaticHTTPSRewritesAPI.AutomaticHTTPSRewrites;
}
