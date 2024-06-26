// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as CacheLevelAPI from './cache-level';

export class CacheLevelResource extends APIResource {}

/**
 * Cache Level functions based off the setting level. The basic setting will cache
 * most static resources (i.e., css, images, and JavaScript). The simplified
 * setting will ignore the query string when delivering a cached resource. The
 * aggressive setting will cache all static resources, including ones with a query
 * string. (https://support.cloudflare.com/hc/en-us/articles/200168256).
 */
export interface CacheLevel {
  /**
   * ID of the zone setting.
   */
  id: 'cache_level';

  /**
   * Current value of the zone setting.
   */
  value: 'aggressive' | 'basic' | 'simplified';

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

export namespace CacheLevelResource {
  export import CacheLevel = CacheLevelAPI.CacheLevel;
}
