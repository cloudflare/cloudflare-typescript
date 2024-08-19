// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as CacheReserveAPI from './cache-reserve';
import * as RegionalTieredCacheAPI from './regional-tiered-cache';
import * as SmartTieredCacheAPI from './smart-tiered-cache';
import * as VariantsAPI from './variants';

export class Cache extends APIResource {
  cacheReserve: CacheReserveAPI.CacheReserveResource = new CacheReserveAPI.CacheReserveResource(this._client);
  smartTieredCache: SmartTieredCacheAPI.SmartTieredCache = new SmartTieredCacheAPI.SmartTieredCache(
    this._client,
  );
  variants: VariantsAPI.Variants = new VariantsAPI.Variants(this._client);
  regionalTieredCache: RegionalTieredCacheAPI.RegionalTieredCacheResource =
    new RegionalTieredCacheAPI.RegionalTieredCacheResource(this._client);

  /**
   * ### Purge All Cached Content
   *
   * Removes ALL files from Cloudflare's cache. All tiers can purge everything.
   *
   * ```
   * {"purge_everything": true}
   * ```
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
   * **NB:** For Zones on Free/Pro/Business plan, you may purge up to 30 URLs in one
   * API call. For Zones on Enterprise plan, you may purge up to 500 URLs in one API
   * call.
   *
   * Single file purge example with files:
   *
   * ```
   * {"files": ["http://www.example.com/css/styles.css", "http://www.example.com/js/index.js"]}
   * ```
   *
   * Single file purge example with url and header pairs:
   *
   * ```
   * {"files": [{url: "http://www.example.com/cat_picture.jpg", headers: { "CF-IPCountry": "US", "CF-Device-Type": "desktop", "Accept-Language": "zh-CN" }}, {url: "http://www.example.com/dog_picture.jpg", headers: { "CF-IPCountry": "EU", "CF-Device-Type": "mobile", "Accept-Language": "en-US" }}]}
   * ```
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
   *
   * Flex purge with tags:
   *
   * ```
   * {"tags": ["a-cache-tag", "another-cache-tag"]}
   * ```
   *
   * Flex purge with hosts:
   *
   * ```
   * {"hosts": ["www.example.com", "images.example.com"]}
   * ```
   *
   * Flex purge with prefixes:
   *
   * ```
   * {"prefixes": ["www.example.com/foo", "images.example.com/bar/baz"]}
   * ```
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

export type CachePurgeParams =
  | CachePurgeParams.CachePurgeFlexPurgeByTags
  | CachePurgeParams.CachePurgeFlexPurgeByHostnames
  | CachePurgeParams.CachePurgeFlexPurgeByPrefixes
  | CachePurgeParams.CachePurgeEverything
  | CachePurgeParams.CachePurgeSingleFile
  | CachePurgeParams.CachePurgeSingleFileWithURLAndHeaders;

export namespace CachePurgeParams {
  export interface CachePurgeFlexPurgeByTags {
    /**
     * Path param:
     */
    zone_id: string;

    /**
     * Body param: For more information on cache tags and purging by tags, please refer
     * to
     * [purge by cache-tags documentation page](https://developers.cloudflare.com/cache/how-to/purge-cache/purge-by-tags/#purge-cache-by-cache-tags-enterprise-only).
     */
    tags?: Array<string>;
  }

  export interface CachePurgeFlexPurgeByHostnames {
    /**
     * Path param:
     */
    zone_id: string;

    /**
     * Body param: For more information purging by hostnames, please refer to
     * [purge by hostname documentation page](https://developers.cloudflare.com/cache/how-to/purge-cache/purge-by-hostname/).
     */
    hosts?: Array<string>;
  }

  export interface CachePurgeFlexPurgeByPrefixes {
    /**
     * Path param:
     */
    zone_id: string;

    /**
     * Body param: For more information on purging by prefixes, please refer to
     * [purge by prefix documentation page](https://developers.cloudflare.com/cache/how-to/purge-cache/purge_by_prefix/).
     */
    prefixes?: Array<string>;
  }

  export interface CachePurgeEverything {
    /**
     * Path param:
     */
    zone_id: string;

    /**
     * Body param: For more information, please refer to
     * [purge everything documentation page](https://developers.cloudflare.com/cache/how-to/purge-cache/purge-everything/).
     */
    purge_everything?: boolean;
  }

  export interface CachePurgeSingleFile {
    /**
     * Path param:
     */
    zone_id: string;

    /**
     * Body param: For more information on purging files, please refer to
     * [purge by single-file documentation page](https://developers.cloudflare.com/cache/how-to/purge-cache/purge-by-single-file/).
     */
    files?: Array<string>;
  }

  export interface CachePurgeSingleFileWithURLAndHeaders {
    /**
     * Path param:
     */
    zone_id: string;

    /**
     * Body param: For more information on purging files with URL and headers, please
     * refer to
     * [purge by single-file documentation page](https://developers.cloudflare.com/cache/how-to/purge-cache/purge-by-single-file/).
     */
    files?: Array<CachePurgeParams.CachePurgeSingleFileWithURLAndHeaders.File>;
  }

  export namespace CachePurgeSingleFileWithURLAndHeaders {
    export interface File {
      headers?: unknown;

      url?: string;
    }
  }
}

export namespace Cache {
  export import CacheReserveResource = CacheReserveAPI.CacheReserveResource;
  export import CacheReserve = CacheReserveAPI.CacheReserve;
  export import CacheReserveClear = CacheReserveAPI.CacheReserveClear;
  export import State = CacheReserveAPI.State;
  export import CacheReserveClearResponse = CacheReserveAPI.CacheReserveClearResponse;
  export import CacheReserveEditResponse = CacheReserveAPI.CacheReserveEditResponse;
  export import CacheReserveGetResponse = CacheReserveAPI.CacheReserveGetResponse;
  export import CacheReserveStatusResponse = CacheReserveAPI.CacheReserveStatusResponse;
  export import CacheReserveClearParams = CacheReserveAPI.CacheReserveClearParams;
  export import CacheReserveEditParams = CacheReserveAPI.CacheReserveEditParams;
  export import CacheReserveGetParams = CacheReserveAPI.CacheReserveGetParams;
  export import CacheReserveStatusParams = CacheReserveAPI.CacheReserveStatusParams;
  export import SmartTieredCache = SmartTieredCacheAPI.SmartTieredCache;
  export import SmartTieredCacheDeleteResponse = SmartTieredCacheAPI.SmartTieredCacheDeleteResponse;
  export import SmartTieredCacheEditResponse = SmartTieredCacheAPI.SmartTieredCacheEditResponse;
  export import SmartTieredCacheGetResponse = SmartTieredCacheAPI.SmartTieredCacheGetResponse;
  export import SmartTieredCacheDeleteParams = SmartTieredCacheAPI.SmartTieredCacheDeleteParams;
  export import SmartTieredCacheEditParams = SmartTieredCacheAPI.SmartTieredCacheEditParams;
  export import SmartTieredCacheGetParams = SmartTieredCacheAPI.SmartTieredCacheGetParams;
  export import Variants = VariantsAPI.Variants;
  export import CacheVariant = VariantsAPI.CacheVariant;
  export import CacheVariantIdentifier = VariantsAPI.CacheVariantIdentifier;
  export import VariantEditResponse = VariantsAPI.VariantEditResponse;
  export import VariantGetResponse = VariantsAPI.VariantGetResponse;
  export import VariantDeleteParams = VariantsAPI.VariantDeleteParams;
  export import VariantEditParams = VariantsAPI.VariantEditParams;
  export import VariantGetParams = VariantsAPI.VariantGetParams;
  export import RegionalTieredCacheResource = RegionalTieredCacheAPI.RegionalTieredCacheResource;
  export import RegionalTieredCache = RegionalTieredCacheAPI.RegionalTieredCache;
  export import RegionalTieredCacheEditResponse = RegionalTieredCacheAPI.RegionalTieredCacheEditResponse;
  export import RegionalTieredCacheGetResponse = RegionalTieredCacheAPI.RegionalTieredCacheGetResponse;
  export import RegionalTieredCacheEditParams = RegionalTieredCacheAPI.RegionalTieredCacheEditParams;
  export import RegionalTieredCacheGetParams = RegionalTieredCacheAPI.RegionalTieredCacheGetParams;
}
