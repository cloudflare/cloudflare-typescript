// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SortQueryStringForCacheAPI from 'cloudflare/resources/zones/settings/sort-query-string-for-cache';

export class SortQueryStringForCache extends APIResource {
  /**
   * Cloudflare will treat files with the same query strings as the same file in
   * cache, regardless of the order of the query strings. This is limited to
   * Enterprise Zones.
   */
  edit(
    params: SortQueryStringForCacheEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SortQueryStringForCacheEditResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/settings/sort_query_string_for_cache`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: SortQueryStringForCacheEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Cloudflare will treat files with the same query strings as the same file in
   * cache, regardless of the order of the query strings. This is limited to
   * Enterprise Zones.
   */
  get(
    params: SortQueryStringForCacheGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SortQueryStringForCacheGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/settings/sort_query_string_for_cache`, options) as Core.APIPromise<{
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
export interface SortQueryStringForCacheEditResponse {
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

export interface SortQueryStringForCacheEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Value of the zone setting.
   */
  value: 'on' | 'off';
}

export interface SortQueryStringForCacheGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace SortQueryStringForCache {
  export import SortQueryStringForCacheEditResponse = SortQueryStringForCacheAPI.SortQueryStringForCacheEditResponse;
  export import SortQueryStringForCacheGetResponse = SortQueryStringForCacheAPI.SortQueryStringForCacheGetResponse;
  export import SortQueryStringForCacheEditParams = SortQueryStringForCacheAPI.SortQueryStringForCacheEditParams;
  export import SortQueryStringForCacheGetParams = SortQueryStringForCacheAPI.SortQueryStringForCacheGetParams;
}
