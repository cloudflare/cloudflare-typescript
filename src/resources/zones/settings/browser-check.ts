// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as BrowserCheckAPI from './browser-check';

export class BrowserCheckResource extends APIResource {}

/**
 * Browser Integrity Check is similar to Bad Behavior and looks for common HTTP
 * headers abused most commonly by spammers and denies access to your page. It will
 * also challenge visitors that do not have a user agent or a non standard user
 * agent (also commonly used by abuse bots, crawlers or visitors).
 * (https://support.cloudflare.com/hc/en-us/articles/200170086).
 */
export interface BrowserCheck {
  /**
   * ID of the zone setting.
   */
  id: 'browser_check';

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

export namespace BrowserCheckResource {
  export import BrowserCheck = BrowserCheckAPI.BrowserCheck;
}
