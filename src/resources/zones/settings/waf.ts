// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as WAFAPI from './waf';

export class WAFResource extends APIResource {}

/**
 * The WAF examines HTTP requests to your website. It inspects both GET and POST
 * requests and applies rules to help filter out illegitimate traffic from
 * legitimate website visitors. The Cloudflare WAF inspects website addresses or
 * URLs to detect anything out of the ordinary. If the Cloudflare WAF determines
 * suspicious user behavior, then the WAF will 'challenge' the web visitor with a
 * page that asks them to submit a CAPTCHA successfully to continue their action.
 * If the challenge is failed, the action will be stopped. What this means is that
 * Cloudflare's WAF will block any traffic identified as illegitimate before it
 * reaches your origin web server.
 * (https://support.cloudflare.com/hc/en-us/articles/200172016).
 */
export interface WAF {
  /**
   * ID of the zone setting.
   */
  id: 'waf';

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

export namespace WAFResource {
  export import WAF = WAFAPI.WAF;
}
