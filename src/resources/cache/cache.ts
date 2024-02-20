// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CacheAPI from 'cloudflare/resources/cache/cache';
import * as CacheReservesAPI from 'cloudflare/resources/cache/cache-reserves';
import * as RegionalTieredCacheAPI from 'cloudflare/resources/cache/regional-tiered-cache';
import * as TieredCacheSmartTopologyAPI from 'cloudflare/resources/cache/tiered-cache-smart-topology';
import * as VariantsAPI from 'cloudflare/resources/cache/variants';

export class Cache extends APIResource {
  cacheReserves: CacheReservesAPI.CacheReserves = new CacheReservesAPI.CacheReserves(this._client);
  tieredCacheSmartTopology: TieredCacheSmartTopologyAPI.TieredCacheSmartTopology =
    new TieredCacheSmartTopologyAPI.TieredCacheSmartTopology(this._client);
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
  purge(
    identifier: string,
    body: CachePurgeParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CachePurgeResponse | null> {
    return (
      this._client.post(`/zones/${identifier}/purge_cache`, { body, ...options }) as Core.APIPromise<{
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

export type CachePurgeParams =
  | CachePurgeParams._6q4XxEwrFlex
  | CachePurgeParams._6q4XxEwrEverything
  | CachePurgeParams._6q4XxEwrFiles;

export namespace CachePurgeParams {
  export interface _6q4XxEwrFlex {
    hosts?: Array<string>;

    prefixes?: Array<string>;

    tags?: Array<string>;
  }

  export interface _6q4XxEwrEverything {
    purge_everything?: boolean;
  }

  export interface _6q4XxEwrFiles {
    files?: Array<string | CachePurgeParams._6q4XxEwrFiles._6q4XxEwrURLAndHeaders>;
  }

  export namespace _6q4XxEwrFiles {
    export interface _6q4XxEwrURLAndHeaders {
      headers?: unknown;

      url?: string;
    }
  }
}

export namespace Cache {
  export import CachePurgeResponse = CacheAPI.CachePurgeResponse;
  export import CachePurgeParams = CacheAPI.CachePurgeParams;
  export import CacheReserves = CacheReservesAPI.CacheReserves;
  export import CacheReserveUpdateResponse = CacheReservesAPI.CacheReserveUpdateResponse;
  export import CacheReserveListResponse = CacheReservesAPI.CacheReserveListResponse;
  export import CacheReserveUpdateParams = CacheReservesAPI.CacheReserveUpdateParams;
  export import TieredCacheSmartTopology = TieredCacheSmartTopologyAPI.TieredCacheSmartTopology;
  export import TieredCacheSmartTopologyUpdateResponse = TieredCacheSmartTopologyAPI.TieredCacheSmartTopologyUpdateResponse;
  export import TieredCacheSmartTopologyDeleteResponse = TieredCacheSmartTopologyAPI.TieredCacheSmartTopologyDeleteResponse;
  export import TieredCacheSmartTopologyGetResponse = TieredCacheSmartTopologyAPI.TieredCacheSmartTopologyGetResponse;
  export import TieredCacheSmartTopologyUpdateParams = TieredCacheSmartTopologyAPI.TieredCacheSmartTopologyUpdateParams;
  export import Variants = VariantsAPI.Variants;
  export import VariantUpdateResponse = VariantsAPI.VariantUpdateResponse;
  export import VariantListResponse = VariantsAPI.VariantListResponse;
  export import VariantDeleteResponse = VariantsAPI.VariantDeleteResponse;
  export import VariantUpdateParams = VariantsAPI.VariantUpdateParams;
  export import RegionalTieredCache = RegionalTieredCacheAPI.RegionalTieredCache;
  export import RegionalTieredCacheUpdateResponse = RegionalTieredCacheAPI.RegionalTieredCacheUpdateResponse;
  export import RegionalTieredCacheGetResponse = RegionalTieredCacheAPI.RegionalTieredCacheGetResponse;
  export import RegionalTieredCacheUpdateParams = RegionalTieredCacheAPI.RegionalTieredCacheUpdateParams;
}
