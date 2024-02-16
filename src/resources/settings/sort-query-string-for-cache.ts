// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SortQueryStringForCacheAPI from 'cloudflare/resources/settings/sort-query-string-for-cache';

export class SortQueryStringForCache extends APIResource {
  /**
   * Cloudflare will treat files with the same query strings as the same file in
   * cache, regardless of the order of the query strings. This is limited to
   * Enterprise Zones.
   */
  update(
    zoneId: string,
    body: SortQueryStringForCacheUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SortQueryStringForCacheUpdateResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/settings/sort_query_string_for_cache`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: SortQueryStringForCacheUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Cloudflare will treat files with the same query strings as the same file in
   * cache, regardless of the order of the query strings. This is limited to
   * Enterprise Zones.
   */
  get(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<SortQueryStringForCacheGetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/settings/sort_query_string_for_cache`, options) as Core.APIPromise<{
        result: SortQueryStringForCacheGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Cloudflare will treat files with the same query strings as the same file in
 * cache, regardless of the order of the query strings. This is limited to
 * Enterprise Zones.
 */
export interface SortQueryStringForCacheUpdateResponse {
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

/**
 * Cloudflare will treat files with the same query strings as the same file in
 * cache, regardless of the order of the query strings. This is limited to
 * Enterprise Zones.
 */
export interface SortQueryStringForCacheGetResponse {
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

export interface SortQueryStringForCacheUpdateParams {
  /**
   * Value of the zone setting.
   */
  value: 'on' | 'off';
}

export namespace SortQueryStringForCache {
  export import SortQueryStringForCacheUpdateResponse = SortQueryStringForCacheAPI.SortQueryStringForCacheUpdateResponse;
  export import SortQueryStringForCacheGetResponse = SortQueryStringForCacheAPI.SortQueryStringForCacheGetResponse;
  export import SortQueryStringForCacheUpdateParams = SortQueryStringForCacheAPI.SortQueryStringForCacheUpdateParams;
}
