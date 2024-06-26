// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as BrowserCacheTTLAPI from './browser-cache-ttl';

export class BrowserCacheTTLResource extends APIResource {}

/**
 * Browser Cache TTL (in seconds) specifies how long Cloudflare-cached resources
 * will remain on your visitors' computers. Cloudflare will honor any larger times
 * specified by your server.
 * (https://support.cloudflare.com/hc/en-us/articles/200168276).
 */
export interface BrowserCacheTTL {
  /**
   * ID of the zone setting.
   */
  id: 'browser_cache_ttl';

  /**
   * Current value of the zone setting.
   */
  value:
    | 0
    | 30
    | 60
    | 120
    | 300
    | 1200
    | 1800
    | 3600
    | 7200
    | 10800
    | 14400
    | 18000
    | 28800
    | 43200
    | 57600
    | 72000
    | 86400
    | 172800
    | 259200
    | 345600
    | 432000
    | 691200
    | 1382400
    | 2073600
    | 2678400
    | 5356800
    | 16070400
    | 31536000;

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

export namespace BrowserCacheTTLResource {
  export import BrowserCacheTTL = BrowserCacheTTLAPI.BrowserCacheTTL;
}
