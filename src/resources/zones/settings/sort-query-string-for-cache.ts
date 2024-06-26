// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as SortQueryStringForCacheAPI from './sort-query-string-for-cache';

export class SortQueryStringForCacheResource extends APIResource {}

/**
 * Cloudflare will treat files with the same query strings as the same file in
 * cache, regardless of the order of the query strings. This is limited to
 * Enterprise Zones.
 */
export interface SortQueryStringForCache {
  /**
   * ID of the zone setting.
   */
  id: 'sort_query_string_for_cache';

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

export namespace SortQueryStringForCacheResource {
  export import SortQueryStringForCache = SortQueryStringForCacheAPI.SortQueryStringForCache;
}
