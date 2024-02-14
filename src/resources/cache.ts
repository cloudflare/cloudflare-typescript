// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CacheAPI from 'cloudflare/resources/cache';

export class Cache extends APIResource {
  /**
   * Instructs Cloudflare to check a regional hub data center on the way to your
   * upper tier. This can help improve performance for smart and custom tiered cache
   * topologies.
   */
  regionalTieredCaches(
    zoneId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CacheRegionalTieredCachesResponse> {
    return (
      this._client.get(`/zones/${zoneId}/cache/regional_tiered_cache`, options) as Core.APIPromise<{
        result: CacheRegionalTieredCachesResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Instructs Cloudflare to check a regional hub data center on the way to your
   * upper tier. This can help improve performance for smart and custom tiered cache
   * topologies.
   */
  updateRegionalTieredCache(
    zoneId: string,
    body: CacheUpdateRegionalTieredCacheParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CacheUpdateRegionalTieredCacheResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/cache/regional_tiered_cache`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: CacheUpdateRegionalTieredCacheResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Instructs Cloudflare to check a regional hub data center on the way to your
 * upper tier. This can help improve performance for smart and custom tiered cache
 * topologies.
 */
export interface CacheRegionalTieredCachesResponse {
  /**
   * ID of the zone setting.
   */
  id: 'tc_regional';

  /**
   * last time this setting was modified.
   */
  modified_on: string | null;

  /**
   * Instructs Cloudflare to check a regional hub data center on the way to your
   * upper tier. This can help improve performance for smart and custom tiered cache
   * topologies.
   */
  value: CacheRegionalTieredCachesResponse.Value;
}

export namespace CacheRegionalTieredCachesResponse {
  /**
   * Instructs Cloudflare to check a regional hub data center on the way to your
   * upper tier. This can help improve performance for smart and custom tiered cache
   * topologies.
   */
  export interface Value {
    /**
     * ID of the zone setting.
     */
    id: 'tc_regional';

    /**
     * last time this setting was modified.
     */
    modified_on: string | null;
  }
}

/**
 * Instructs Cloudflare to check a regional hub data center on the way to your
 * upper tier. This can help improve performance for smart and custom tiered cache
 * topologies.
 */
export interface CacheUpdateRegionalTieredCacheResponse {
  /**
   * ID of the zone setting.
   */
  id: 'tc_regional';

  /**
   * last time this setting was modified.
   */
  modified_on: string | null;

  /**
   * Instructs Cloudflare to check a regional hub data center on the way to your
   * upper tier. This can help improve performance for smart and custom tiered cache
   * topologies.
   */
  value: CacheUpdateRegionalTieredCacheResponse.Value;
}

export namespace CacheUpdateRegionalTieredCacheResponse {
  /**
   * Instructs Cloudflare to check a regional hub data center on the way to your
   * upper tier. This can help improve performance for smart and custom tiered cache
   * topologies.
   */
  export interface Value {
    /**
     * ID of the zone setting.
     */
    id: 'tc_regional';

    /**
     * last time this setting was modified.
     */
    modified_on: string | null;
  }
}

export interface CacheUpdateRegionalTieredCacheParams {
  /**
   * Value of the Regional Tiered Cache zone setting.
   */
  value: 'on' | 'off';
}

export namespace Cache {
  export import CacheRegionalTieredCachesResponse = CacheAPI.CacheRegionalTieredCachesResponse;
  export import CacheUpdateRegionalTieredCacheResponse = CacheAPI.CacheUpdateRegionalTieredCacheResponse;
  export import CacheUpdateRegionalTieredCacheParams = CacheAPI.CacheUpdateRegionalTieredCacheParams;
}
