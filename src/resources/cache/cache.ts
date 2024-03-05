// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CacheAPI from 'cloudflare/resources/cache/cache';
import * as CacheReserveAPI from 'cloudflare/resources/cache/cache-reserve';
import * as RegionalTieredCacheAPI from 'cloudflare/resources/cache/regional-tiered-cache';
import * as SmartTieredCachedAPI from 'cloudflare/resources/cache/smart-tiered-cached';
import * as VariantsAPI from 'cloudflare/resources/cache/variants';

export class Cache extends APIResource {
  cacheReserve: CacheReserveAPI.CacheReserve = new CacheReserveAPI.CacheReserve(this._client);
  smartTieredCached: SmartTieredCachedAPI.SmartTieredCached = new SmartTieredCachedAPI.SmartTieredCached(
    this._client,
  );
  variants: VariantsAPI.Variants = new VariantsAPI.Variants(this._client);
  regionalTieredCache: RegionalTieredCacheAPI.RegionalTieredCache =
    new RegionalTieredCacheAPI.RegionalTieredCache(this._client);

  /**
   * ### Purge All Cached Content
   *
   * Removes ALL files from Cloudflare's cache. All tiers can purge everything.
   *
   * ### Purge Cached Content by URL
   *
   * Granularly removes one or more files from Cloudflare's cache by specifying URLs.
   * All tiers can purge by URL.
   *
   * To purge files with custom cache keys, include the headers used to compute the
   * cache key as in the example. If you have a device type or geo in your cache key,
   * you will need to include the CF-Device-Type or CF-IPCountry headers. If you have
   * lang in your cache key, you will need to include the Accept-Language header.
   *
   * **NB:** When including the Origin header, be sure to include the **scheme** and
   * **hostname**. The port number can be omitted if it is the default port (80 for
   * http, 443 for https), but must be included otherwise.
   *
   * ### Purge Cached Content by Tag, Host or Prefix
   *
   * Granularly removes one or more files from Cloudflare's cache either by
   * specifying the host, the associated Cache-Tag, or a Prefix. Only Enterprise
   * customers are permitted to purge by Tag, Host or Prefix.
   *
   * **NB:** Cache-Tag, host, and prefix purging each have a rate limit of 30,000
   * purge API calls in every 24 hour period. You may purge up to 30 tags, hosts, or
   * prefixes in one API call. This rate limit can be raised for customers who need
   * to purge at higher volume.
   */
  purge(params: CachePurgeParams, options?: Core.RequestOptions): Core.APIPromise<CachePurgeResponse | null> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(`/zones/${zone_id}/purge_cache`, { body, ...options }) as Core.APIPromise<{
        result: CachePurgeResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface CachePurgeResponse {
  /**
   * Identifier
   */
  id: string;
}

export interface CachePurgeParams {
  /**
   * Path param:
   */
  zone_id: string;

  /**
   * Body param:
   */
  files?: Array<string | CachePurgeParams.CachePurgeURLAndHeaders>;

  /**
   * Body param:
   */
  hosts?: Array<string>;

  /**
   * Body param:
   */
  prefixes?: Array<string>;

  /**
   * Body param:
   */
  purge_everything?: boolean;

  /**
   * Body param:
   */
  tags?: Array<string>;
}

export namespace CachePurgeParams {
  export interface CachePurgeURLAndHeaders {
    headers?: unknown;

    url?: string;
  }
}

export namespace Cache {
  export import CachePurgeResponse = CacheAPI.CachePurgeResponse;
  export import CachePurgeParams = CacheAPI.CachePurgeParams;
  export import CacheReserve = CacheReserveAPI.CacheReserve;
  export import CacheReserveClearResponse = CacheReserveAPI.CacheReserveClearResponse;
  export import CacheReserveEditResponse = CacheReserveAPI.CacheReserveEditResponse;
  export import CacheReserveGetResponse = CacheReserveAPI.CacheReserveGetResponse;
  export import CacheReserveStatusResponse = CacheReserveAPI.CacheReserveStatusResponse;
  export import CacheReserveClearParams = CacheReserveAPI.CacheReserveClearParams;
  export import CacheReserveEditParams = CacheReserveAPI.CacheReserveEditParams;
  export import CacheReserveGetParams = CacheReserveAPI.CacheReserveGetParams;
  export import CacheReserveStatusParams = CacheReserveAPI.CacheReserveStatusParams;
  export import SmartTieredCached = SmartTieredCachedAPI.SmartTieredCached;
  export import SmartTieredCachedDeleteResponse = SmartTieredCachedAPI.SmartTieredCachedDeleteResponse;
  export import SmartTieredCachedEditResponse = SmartTieredCachedAPI.SmartTieredCachedEditResponse;
  export import SmartTieredCachedGetResponse = SmartTieredCachedAPI.SmartTieredCachedGetResponse;
  export import SmartTieredCachedDeleteParams = SmartTieredCachedAPI.SmartTieredCachedDeleteParams;
  export import SmartTieredCachedEditParams = SmartTieredCachedAPI.SmartTieredCachedEditParams;
  export import SmartTieredCachedGetParams = SmartTieredCachedAPI.SmartTieredCachedGetParams;
  export import Variants = VariantsAPI.Variants;
  export import CacheVariants = VariantsAPI.CacheVariants;
  export import VariantEditResponse = VariantsAPI.VariantEditResponse;
  export import VariantGetResponse = VariantsAPI.VariantGetResponse;
  export import VariantDeleteParams = VariantsAPI.VariantDeleteParams;
  export import VariantEditParams = VariantsAPI.VariantEditParams;
  export import VariantGetParams = VariantsAPI.VariantGetParams;
  export import RegionalTieredCache = RegionalTieredCacheAPI.RegionalTieredCache;
  export import RegionalTieredCacheEditResponse = RegionalTieredCacheAPI.RegionalTieredCacheEditResponse;
  export import RegionalTieredCacheGetResponse = RegionalTieredCacheAPI.RegionalTieredCacheGetResponse;
  export import RegionalTieredCacheEditParams = RegionalTieredCacheAPI.RegionalTieredCacheEditParams;
  export import RegionalTieredCacheGetParams = RegionalTieredCacheAPI.RegionalTieredCacheGetParams;
}
