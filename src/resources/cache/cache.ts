// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CacheReserveAPI from './cache-reserve';
import {
  BaseCacheReserveResource,
  CacheReserve,
  CacheReserveClear,
  CacheReserveClearParams,
  CacheReserveClearResponse,
  CacheReserveEditParams,
  CacheReserveEditResponse,
  CacheReserveGetParams,
  CacheReserveGetResponse,
  CacheReserveResource,
  CacheReserveStatusParams,
  CacheReserveStatusResponse,
} from './cache-reserve';
import * as OriginCloudRegionsAPI from './origin-cloud-regions';
import {
  BaseOriginCloudRegions,
  OriginCloudRegionBulkDeleteParams,
  OriginCloudRegionBulkDeleteResponse,
  OriginCloudRegionBulkUpdateParams,
  OriginCloudRegionBulkUpdateResponse,
  OriginCloudRegionDeleteParams,
  OriginCloudRegionDeleteResponse,
  OriginCloudRegionGetParams,
  OriginCloudRegionGetResponse,
  OriginCloudRegionListParams,
  OriginCloudRegionListResponse,
  OriginCloudRegionListResponsesV4PagePaginationArray,
  OriginCloudRegionSupportedRegionsParams,
  OriginCloudRegionSupportedRegionsResponse,
  OriginCloudRegionUpdateParams,
  OriginCloudRegionUpdateResponse,
  OriginCloudRegions,
} from './origin-cloud-regions';
import * as RegionalTieredCacheAPI from './regional-tiered-cache';
import {
  BaseRegionalTieredCacheResource,
  RegionalTieredCache,
  RegionalTieredCacheEditParams,
  RegionalTieredCacheEditResponse,
  RegionalTieredCacheGetParams,
  RegionalTieredCacheGetResponse,
  RegionalTieredCacheResource,
} from './regional-tiered-cache';
import * as SmartTieredCacheAPI from './smart-tiered-cache';
import {
  BaseSmartTieredCache,
  SmartTieredCache,
  SmartTieredCacheCreateParams,
  SmartTieredCacheCreateResponse,
  SmartTieredCacheDeleteParams,
  SmartTieredCacheDeleteResponse,
  SmartTieredCacheEditParams,
  SmartTieredCacheEditResponse,
  SmartTieredCacheGetParams,
  SmartTieredCacheGetResponse,
} from './smart-tiered-cache';
import * as VariantsAPI from './variants';
import {
  BaseVariants,
  VariantDeleteParams,
  VariantDeleteResponse,
  VariantEditParams,
  VariantEditResponse,
  VariantGetParams,
  VariantGetResponse,
  Variants,
} from './variants';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseCache extends APIResource {
  static override readonly _key: readonly ['cache'] = Object.freeze(['cache'] as const);

  /**
   * Marks cached content as stale in every Cloudflare data center and cache tier,
   * including Cache Reserve. The content stays in cache. The next request for it
   * makes Cloudflare revalidate it with your origin, using the `ETag` and
   * `Last-Modified` values it was cached with:
   *
   * - If your origin answers `304 Not Modified`, Cloudflare serves the cached copy
   *   without downloading it again, and `CF-Cache-Status` is `REVALIDATED`.
   * - If your origin sends a full response, Cloudflare serves and caches the new
   *   content, and `CF-Cache-Status` is `EXPIRED`.
   *
   * With Tiered Cache, each tier revalidates with the tier above it, so a visitor
   * can see `EXPIRED` even when your origin answered `304`.
   *
   * Until content is revalidated, your `stale-while-revalidate` and `stale-if-error`
   * directives still apply, counted from the time you invalidated it. For example,
   * if your origin fails during revalidation, Cloudflare can keep serving the stale
   * copy for the `stale-if-error` window.
   *
   * ### Invalidate or purge?
   *
   * - **Invalidate** when content may not have changed, for example after a deploy.
   *   Unchanged content costs your origin a `304` instead of a full response. That
   *   saving needs an origin that sends `ETag` or `Last-Modified` and answers
   *   conditional requests. Otherwise, every revalidation downloads the full
   *   response.
   * - **Purge**, with `POST /zones/{zone_id}/purge_cache`, when content must not be
   *   served again, for example content you removed for legal or security reasons.
   *
   * Invalidating takes the same request bodies as purging, needs the same
   * permission, and counts against the same rate limits. After a broad invalidation,
   * such as `purge_everything`, expect more conditional requests to your origin
   * while visitors request the invalidated content again.
   *
   * ### Choose what to invalidate
   *
   * Send one of these fields in the request body:
   *
   * - `files`: specific URLs. If your cache key includes request headers, send each
   *   URL with the header values it was cached with.
   * - `tags`: all content whose `Cache-Tag` response header contains one of the
   *   tags.
   * - `hosts`: all content cached for the hostnames.
   * - `prefixes`: all content whose URL starts with one of the prefixes.
   * - `purge_everything`: all cached content in the zone.
   *
   * ### Check the result
   *
   * A `200` response with `success: true` means Cloudflare accepted the request. To
   * check, request an invalidated URL and confirm that the `CF-Cache-Status`
   * response header is `REVALIDATED` or `EXPIRED`.
   *
   * ### Availability and limits
   *
   * Rate limits and the number of items you can send in one request depend on your
   * plan. See
   * [Purge cache: availability and limits](https://developers.cloudflare.com/cache/how-to/purge-cache/#availability-and-limits).
   *
   * @example
   * ```ts
   * const response = await client.cache.invalidate({
   *   zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   tags: ['product-1234', 'homepage'],
   * });
   * ```
   */
  invalidate(
    params: CacheInvalidateParams,
    options?: RequestOptions,
  ): APIPromise<CacheInvalidateResponse | null> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(path`/zones/${zone_id}/invalidate_cache`, { body, ...options }) as APIPromise<{
        result: CacheInvalidateResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Marks cached content as stale for one environment of the zone. Content cached
   * for the zone's other environments, including production, is not affected.
   * Otherwise this works like `POST /zones/{zone_id}/invalidate_cache`: the next
   * request for invalidated content makes Cloudflare revalidate it with your origin,
   * and the request body takes the same fields.
   *
   * Environments are part of
   * [Version Management](https://developers.cloudflare.com/version-management/). To
   * delete the content instead, use
   * `POST /zones/{zone_id}/environments/{environment_id}/purge_cache`.
   *
   * Invalidating by URL (`files`) does not work for environments that select
   * requests by IP address, country, ASN, or threat score, and fails with error
   * `1136`. Use `tags`, `hosts`, `prefixes`, or `purge_everything` for those
   * environments.
   *
   * ### Availability and limits
   *
   * Rate limits and the number of items you can send in one request depend on your
   * plan. See
   * [Purge cache: availability and limits](https://developers.cloudflare.com/cache/how-to/purge-cache/#availability-and-limits).
   *
   * @example
   * ```ts
   * const response = await client.cache.invalidateEnvironment(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   {
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     tags: ['product-1234', 'homepage'],
   *   },
   * );
   * ```
   */
  invalidateEnvironment(
    environmentID: string,
    params: CacheInvalidateEnvironmentParams,
    options?: RequestOptions,
  ): APIPromise<CacheInvalidateEnvironmentResponse | null> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(path`/zones/${zone_id}/environments/${environmentID}/invalidate_cache`, {
        body,
        ...options,
      }) as APIPromise<{ result: CacheInvalidateEnvironmentResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes cached content in every Cloudflare data center and cache tier, including
   * Cache Reserve. The next request for purged content is a cache `MISS`: Cloudflare
   * fetches the full response from your origin and caches it again. Cloudflare does
   * not serve purged content from cache again, even if your origin is unavailable.
   *
   * To keep content cached and have Cloudflare revalidate it with your origin
   * instead, use `POST /zones/{zone_id}/invalidate_cache`.
   *
   * ### Choose what to purge
   *
   * Send one of these fields in the request body:
   *
   * - `files`: specific URLs. If your cache key includes request headers, send each
   *   URL with the header values it was cached with.
   * - `tags`: all content whose `Cache-Tag` response header contains one of the
   *   tags.
   * - `hosts`: all content cached for the hostnames.
   * - `prefixes`: all content whose URL starts with one of the prefixes.
   * - `purge_everything`: all cached content in the zone.
   *
   * ### Check the result
   *
   * A `200` response with `success: true` means Cloudflare accepted the request. It
   * does not confirm that any content was cached or removed. To check, request a
   * purged URL and confirm that the `CF-Cache-Status` response header is `MISS`.
   *
   * ### Availability and limits
   *
   * Rate limits and the number of items you can send in one request depend on your
   * plan. See
   * [Purge cache: availability and limits](https://developers.cloudflare.com/cache/how-to/purge-cache/#availability-and-limits).
   *
   * @example
   * ```ts
   * const response = await client.cache.purge({
   *   zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   tags: ['product-1234', 'homepage'],
   * });
   * ```
   */
  purge(params: CachePurgeParams, options?: RequestOptions): APIPromise<CachePurgeResponse | null> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(path`/zones/${zone_id}/purge_cache`, { body, ...options }) as APIPromise<{
        result: CachePurgeResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes cached content for one environment of the zone. Content cached for the
   * zone's other environments, including production, is not affected. Otherwise this
   * works like `POST /zones/{zone_id}/purge_cache`: the next request for purged
   * content is a cache `MISS`, and the request body takes the same fields.
   *
   * Environments are part of
   * [Version Management](https://developers.cloudflare.com/version-management/). To
   * keep content cached and have Cloudflare revalidate it instead, use
   * `POST /zones/{zone_id}/environments/{environment_id}/invalidate_cache`.
   *
   * Purging by URL (`files`) does not work for environments that select requests by
   * IP address, country, ASN, or threat score, and fails with error `1136`. Use
   * `tags`, `hosts`, `prefixes`, or `purge_everything` for those environments.
   *
   * ### Availability and limits
   *
   * Rate limits and the number of items you can send in one request depend on your
   * plan. See
   * [Purge cache: availability and limits](https://developers.cloudflare.com/cache/how-to/purge-cache/#availability-and-limits).
   *
   * @example
   * ```ts
   * const response = await client.cache.purgeEnvironment(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   {
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     tags: ['product-1234', 'homepage'],
   *   },
   * );
   * ```
   */
  purgeEnvironment(
    environmentID: string,
    params: CachePurgeEnvironmentParams,
    options?: RequestOptions,
  ): APIPromise<CachePurgeEnvironmentResponse | null> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(path`/zones/${zone_id}/environments/${environmentID}/purge_cache`, {
        body,
        ...options,
      }) as APIPromise<{ result: CachePurgeEnvironmentResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Cache extends BaseCache {
  cacheReserve: CacheReserveAPI.CacheReserveResource = new CacheReserveAPI.CacheReserveResource(this._client);
  smartTieredCache: SmartTieredCacheAPI.SmartTieredCache = new SmartTieredCacheAPI.SmartTieredCache(
    this._client,
  );
  variants: VariantsAPI.Variants = new VariantsAPI.Variants(this._client);
  regionalTieredCache: RegionalTieredCacheAPI.RegionalTieredCacheResource =
    new RegionalTieredCacheAPI.RegionalTieredCacheResource(this._client);
  originCloudRegions: OriginCloudRegionsAPI.OriginCloudRegions = new OriginCloudRegionsAPI.OriginCloudRegions(
    this._client,
  );
}

export interface CacheInvalidateResponse {
  id: string;
}

export interface CacheInvalidateEnvironmentResponse {
  id: string;
}

export interface CachePurgeResponse {
  id: string;
}

export interface CachePurgeEnvironmentResponse {
  id: string;
}

export type CacheInvalidateParams =
  | CacheInvalidateParams.CachePurgeFlexPurgeByTags
  | CacheInvalidateParams.CachePurgeFlexPurgeByHostnames
  | CacheInvalidateParams.CachePurgeFlexPurgeByPrefixes
  | CacheInvalidateParams.CachePurgeEverything
  | CacheInvalidateParams.CachePurgeSingleFile
  | CacheInvalidateParams.CachePurgeSingleFileWithURLAndHeaders;

export declare namespace CacheInvalidateParams {
  export interface CachePurgeFlexPurgeByTags {
    /**
     * Path param: The zone ID.
     */
    zone_id: string;

    /**
     * Body param: Cache tags. Targets all content whose `Cache-Tag` response header
     * contains at least one of these tags. See
     * [Purge cache by cache-tags](https://developers.cloudflare.com/cache/how-to/purge-cache/purge-by-tags/).
     */
    tags?: Array<string>;
  }

  export interface CachePurgeFlexPurgeByHostnames {
    /**
     * Path param: The zone ID.
     */
    zone_id: string;

    /**
     * Body param: Hostnames, such as `www.example.com`. Targets all content cached for
     * these hostnames. See
     * [Purge cache by hostname](https://developers.cloudflare.com/cache/how-to/purge-cache/purge-by-hostname/).
     */
    hosts?: Array<string>;
  }

  export interface CachePurgeFlexPurgeByPrefixes {
    /**
     * Path param: The zone ID.
     */
    zone_id: string;

    /**
     * Body param: URL prefixes, each a hostname followed by a path, such as
     * `www.example.com/blog/`. Targets all content whose URL starts with one of these
     * prefixes. Do not include a scheme, query string, or fragment. See
     * [Purge cache by prefix](https://developers.cloudflare.com/cache/how-to/purge-cache/purge_by_prefix/).
     */
    prefixes?: Array<string>;
  }

  export interface CachePurgeEverything {
    /**
     * Path param: The zone ID.
     */
    zone_id: string;

    /**
     * Body param: Set to `true` to target all cached content in the zone, or in the
     * environment for the environment endpoints. Must be the only field in the
     * request. See
     * [Purge everything](https://developers.cloudflare.com/cache/how-to/purge-cache/purge-everything/).
     */
    purge_everything?: boolean;
  }

  export interface CachePurgeSingleFile {
    /**
     * Path param: The zone ID.
     */
    zone_id: string;

    /**
     * Body param: Full URLs, such as `https://www.example.com/css/styles.css`. Targets
     * the content cached for each URL. If your cache key includes request headers,
     * send objects with `url` and `headers` instead. See
     * [Purge by single-file](https://developers.cloudflare.com/cache/how-to/purge-cache/purge-by-single-file/).
     */
    files?: Array<string>;
  }

  export interface CachePurgeSingleFileWithURLAndHeaders {
    /**
     * Path param: The zone ID.
     */
    zone_id: string;

    /**
     * Body param: URLs with the request headers your cache key uses. Use this form
     * when your cache key includes request headers, or the visitor's device type,
     * country, or language: send the header values each URL was cached with, such as
     * `CF-Device-Type`, `CF-IPCountry`, or `Accept-Language`.
     *
     * When you send the `Origin` header, include the scheme and hostname. Include the
     * port unless it is the default for the scheme: 80 for `http`, 443 for `https`.
     *
     * See
     * [Purge by single-file](https://developers.cloudflare.com/cache/how-to/purge-cache/purge-by-single-file/).
     */
    files?: Array<CachePurgeSingleFileWithURLAndHeaders.File>;
  }

  export namespace CachePurgeSingleFileWithURLAndHeaders {
    export interface File {
      /**
       * Request headers and the values the content was cached with.
       */
      headers?: { [key: string]: string };

      /**
       * Full URL of the content.
       */
      url?: string;
    }
  }
}

export type CacheInvalidateEnvironmentParams =
  | CacheInvalidateEnvironmentParams.CachePurgeFlexPurgeByTags
  | CacheInvalidateEnvironmentParams.CachePurgeFlexPurgeByHostnames
  | CacheInvalidateEnvironmentParams.CachePurgeFlexPurgeByPrefixes
  | CacheInvalidateEnvironmentParams.CachePurgeEverything
  | CacheInvalidateEnvironmentParams.CachePurgeSingleFile
  | CacheInvalidateEnvironmentParams.CachePurgeSingleFileWithURLAndHeaders;

export declare namespace CacheInvalidateEnvironmentParams {
  export interface CachePurgeFlexPurgeByTags {
    /**
     * Path param: The zone ID.
     */
    zone_id: string;

    /**
     * Body param: Cache tags. Targets all content whose `Cache-Tag` response header
     * contains at least one of these tags. See
     * [Purge cache by cache-tags](https://developers.cloudflare.com/cache/how-to/purge-cache/purge-by-tags/).
     */
    tags?: Array<string>;
  }

  export interface CachePurgeFlexPurgeByHostnames {
    /**
     * Path param: The zone ID.
     */
    zone_id: string;

    /**
     * Body param: Hostnames, such as `www.example.com`. Targets all content cached for
     * these hostnames. See
     * [Purge cache by hostname](https://developers.cloudflare.com/cache/how-to/purge-cache/purge-by-hostname/).
     */
    hosts?: Array<string>;
  }

  export interface CachePurgeFlexPurgeByPrefixes {
    /**
     * Path param: The zone ID.
     */
    zone_id: string;

    /**
     * Body param: URL prefixes, each a hostname followed by a path, such as
     * `www.example.com/blog/`. Targets all content whose URL starts with one of these
     * prefixes. Do not include a scheme, query string, or fragment. See
     * [Purge cache by prefix](https://developers.cloudflare.com/cache/how-to/purge-cache/purge_by_prefix/).
     */
    prefixes?: Array<string>;
  }

  export interface CachePurgeEverything {
    /**
     * Path param: The zone ID.
     */
    zone_id: string;

    /**
     * Body param: Set to `true` to target all cached content in the zone, or in the
     * environment for the environment endpoints. Must be the only field in the
     * request. See
     * [Purge everything](https://developers.cloudflare.com/cache/how-to/purge-cache/purge-everything/).
     */
    purge_everything?: boolean;
  }

  export interface CachePurgeSingleFile {
    /**
     * Path param: The zone ID.
     */
    zone_id: string;

    /**
     * Body param: Full URLs, such as `https://www.example.com/css/styles.css`. Targets
     * the content cached for each URL. If your cache key includes request headers,
     * send objects with `url` and `headers` instead. See
     * [Purge by single-file](https://developers.cloudflare.com/cache/how-to/purge-cache/purge-by-single-file/).
     */
    files?: Array<string>;
  }

  export interface CachePurgeSingleFileWithURLAndHeaders {
    /**
     * Path param: The zone ID.
     */
    zone_id: string;

    /**
     * Body param: URLs with the request headers your cache key uses. Use this form
     * when your cache key includes request headers, or the visitor's device type,
     * country, or language: send the header values each URL was cached with, such as
     * `CF-Device-Type`, `CF-IPCountry`, or `Accept-Language`.
     *
     * When you send the `Origin` header, include the scheme and hostname. Include the
     * port unless it is the default for the scheme: 80 for `http`, 443 for `https`.
     *
     * See
     * [Purge by single-file](https://developers.cloudflare.com/cache/how-to/purge-cache/purge-by-single-file/).
     */
    files?: Array<CachePurgeSingleFileWithURLAndHeaders.File>;
  }

  export namespace CachePurgeSingleFileWithURLAndHeaders {
    export interface File {
      /**
       * Request headers and the values the content was cached with.
       */
      headers?: { [key: string]: string };

      /**
       * Full URL of the content.
       */
      url?: string;
    }
  }
}

export type CachePurgeParams =
  | CachePurgeParams.CachePurgeFlexPurgeByTags
  | CachePurgeParams.CachePurgeFlexPurgeByHostnames
  | CachePurgeParams.CachePurgeFlexPurgeByPrefixes
  | CachePurgeParams.CachePurgeEverything
  | CachePurgeParams.CachePurgeSingleFile
  | CachePurgeParams.CachePurgeSingleFileWithURLAndHeaders;

export declare namespace CachePurgeParams {
  export interface CachePurgeFlexPurgeByTags {
    /**
     * Path param: The zone ID.
     */
    zone_id: string;

    /**
     * Body param: Cache tags. Targets all content whose `Cache-Tag` response header
     * contains at least one of these tags. See
     * [Purge cache by cache-tags](https://developers.cloudflare.com/cache/how-to/purge-cache/purge-by-tags/).
     */
    tags?: Array<string>;
  }

  export interface CachePurgeFlexPurgeByHostnames {
    /**
     * Path param: The zone ID.
     */
    zone_id: string;

    /**
     * Body param: Hostnames, such as `www.example.com`. Targets all content cached for
     * these hostnames. See
     * [Purge cache by hostname](https://developers.cloudflare.com/cache/how-to/purge-cache/purge-by-hostname/).
     */
    hosts?: Array<string>;
  }

  export interface CachePurgeFlexPurgeByPrefixes {
    /**
     * Path param: The zone ID.
     */
    zone_id: string;

    /**
     * Body param: URL prefixes, each a hostname followed by a path, such as
     * `www.example.com/blog/`. Targets all content whose URL starts with one of these
     * prefixes. Do not include a scheme, query string, or fragment. See
     * [Purge cache by prefix](https://developers.cloudflare.com/cache/how-to/purge-cache/purge_by_prefix/).
     */
    prefixes?: Array<string>;
  }

  export interface CachePurgeEverything {
    /**
     * Path param: The zone ID.
     */
    zone_id: string;

    /**
     * Body param: Set to `true` to target all cached content in the zone, or in the
     * environment for the environment endpoints. Must be the only field in the
     * request. See
     * [Purge everything](https://developers.cloudflare.com/cache/how-to/purge-cache/purge-everything/).
     */
    purge_everything?: boolean;
  }

  export interface CachePurgeSingleFile {
    /**
     * Path param: The zone ID.
     */
    zone_id: string;

    /**
     * Body param: Full URLs, such as `https://www.example.com/css/styles.css`. Targets
     * the content cached for each URL. If your cache key includes request headers,
     * send objects with `url` and `headers` instead. See
     * [Purge by single-file](https://developers.cloudflare.com/cache/how-to/purge-cache/purge-by-single-file/).
     */
    files?: Array<string>;
  }

  export interface CachePurgeSingleFileWithURLAndHeaders {
    /**
     * Path param: The zone ID.
     */
    zone_id: string;

    /**
     * Body param: URLs with the request headers your cache key uses. Use this form
     * when your cache key includes request headers, or the visitor's device type,
     * country, or language: send the header values each URL was cached with, such as
     * `CF-Device-Type`, `CF-IPCountry`, or `Accept-Language`.
     *
     * When you send the `Origin` header, include the scheme and hostname. Include the
     * port unless it is the default for the scheme: 80 for `http`, 443 for `https`.
     *
     * See
     * [Purge by single-file](https://developers.cloudflare.com/cache/how-to/purge-cache/purge-by-single-file/).
     */
    files?: Array<CachePurgeSingleFileWithURLAndHeaders.File>;
  }

  export namespace CachePurgeSingleFileWithURLAndHeaders {
    export interface File {
      /**
       * Request headers and the values the content was cached with.
       */
      headers?: { [key: string]: string };

      /**
       * Full URL of the content.
       */
      url?: string;
    }
  }
}

export type CachePurgeEnvironmentParams =
  | CachePurgeEnvironmentParams.CachePurgeFlexPurgeByTags
  | CachePurgeEnvironmentParams.CachePurgeFlexPurgeByHostnames
  | CachePurgeEnvironmentParams.CachePurgeFlexPurgeByPrefixes
  | CachePurgeEnvironmentParams.CachePurgeEverything
  | CachePurgeEnvironmentParams.CachePurgeSingleFile
  | CachePurgeEnvironmentParams.CachePurgeSingleFileWithURLAndHeaders;

export declare namespace CachePurgeEnvironmentParams {
  export interface CachePurgeFlexPurgeByTags {
    /**
     * Path param: The zone ID.
     */
    zone_id: string;

    /**
     * Body param: Cache tags. Targets all content whose `Cache-Tag` response header
     * contains at least one of these tags. See
     * [Purge cache by cache-tags](https://developers.cloudflare.com/cache/how-to/purge-cache/purge-by-tags/).
     */
    tags?: Array<string>;
  }

  export interface CachePurgeFlexPurgeByHostnames {
    /**
     * Path param: The zone ID.
     */
    zone_id: string;

    /**
     * Body param: Hostnames, such as `www.example.com`. Targets all content cached for
     * these hostnames. See
     * [Purge cache by hostname](https://developers.cloudflare.com/cache/how-to/purge-cache/purge-by-hostname/).
     */
    hosts?: Array<string>;
  }

  export interface CachePurgeFlexPurgeByPrefixes {
    /**
     * Path param: The zone ID.
     */
    zone_id: string;

    /**
     * Body param: URL prefixes, each a hostname followed by a path, such as
     * `www.example.com/blog/`. Targets all content whose URL starts with one of these
     * prefixes. Do not include a scheme, query string, or fragment. See
     * [Purge cache by prefix](https://developers.cloudflare.com/cache/how-to/purge-cache/purge_by_prefix/).
     */
    prefixes?: Array<string>;
  }

  export interface CachePurgeEverything {
    /**
     * Path param: The zone ID.
     */
    zone_id: string;

    /**
     * Body param: Set to `true` to target all cached content in the zone, or in the
     * environment for the environment endpoints. Must be the only field in the
     * request. See
     * [Purge everything](https://developers.cloudflare.com/cache/how-to/purge-cache/purge-everything/).
     */
    purge_everything?: boolean;
  }

  export interface CachePurgeSingleFile {
    /**
     * Path param: The zone ID.
     */
    zone_id: string;

    /**
     * Body param: Full URLs, such as `https://www.example.com/css/styles.css`. Targets
     * the content cached for each URL. If your cache key includes request headers,
     * send objects with `url` and `headers` instead. See
     * [Purge by single-file](https://developers.cloudflare.com/cache/how-to/purge-cache/purge-by-single-file/).
     */
    files?: Array<string>;
  }

  export interface CachePurgeSingleFileWithURLAndHeaders {
    /**
     * Path param: The zone ID.
     */
    zone_id: string;

    /**
     * Body param: URLs with the request headers your cache key uses. Use this form
     * when your cache key includes request headers, or the visitor's device type,
     * country, or language: send the header values each URL was cached with, such as
     * `CF-Device-Type`, `CF-IPCountry`, or `Accept-Language`.
     *
     * When you send the `Origin` header, include the scheme and hostname. Include the
     * port unless it is the default for the scheme: 80 for `http`, 443 for `https`.
     *
     * See
     * [Purge by single-file](https://developers.cloudflare.com/cache/how-to/purge-cache/purge-by-single-file/).
     */
    files?: Array<CachePurgeSingleFileWithURLAndHeaders.File>;
  }

  export namespace CachePurgeSingleFileWithURLAndHeaders {
    export interface File {
      /**
       * Request headers and the values the content was cached with.
       */
      headers?: { [key: string]: string };

      /**
       * Full URL of the content.
       */
      url?: string;
    }
  }
}

Cache.CacheReserveResource = CacheReserveResource;
Cache.BaseCacheReserveResource = BaseCacheReserveResource;
Cache.SmartTieredCache = SmartTieredCache;
Cache.BaseSmartTieredCache = BaseSmartTieredCache;
Cache.Variants = Variants;
Cache.BaseVariants = BaseVariants;
Cache.RegionalTieredCacheResource = RegionalTieredCacheResource;
Cache.BaseRegionalTieredCacheResource = BaseRegionalTieredCacheResource;
Cache.OriginCloudRegions = OriginCloudRegions;
Cache.BaseOriginCloudRegions = BaseOriginCloudRegions;

export declare namespace Cache {
  export {
    type CacheInvalidateResponse as CacheInvalidateResponse,
    type CacheInvalidateEnvironmentResponse as CacheInvalidateEnvironmentResponse,
    type CachePurgeResponse as CachePurgeResponse,
    type CachePurgeEnvironmentResponse as CachePurgeEnvironmentResponse,
    type CacheInvalidateParams as CacheInvalidateParams,
    type CacheInvalidateEnvironmentParams as CacheInvalidateEnvironmentParams,
    type CachePurgeParams as CachePurgeParams,
    type CachePurgeEnvironmentParams as CachePurgeEnvironmentParams,
  };

  export {
    CacheReserveResource as CacheReserveResource,
    BaseCacheReserveResource as BaseCacheReserveResource,
    type CacheReserve as CacheReserve,
    type CacheReserveClear as CacheReserveClear,
    type CacheReserveClearResponse as CacheReserveClearResponse,
    type CacheReserveEditResponse as CacheReserveEditResponse,
    type CacheReserveGetResponse as CacheReserveGetResponse,
    type CacheReserveStatusResponse as CacheReserveStatusResponse,
    type CacheReserveClearParams as CacheReserveClearParams,
    type CacheReserveEditParams as CacheReserveEditParams,
    type CacheReserveGetParams as CacheReserveGetParams,
    type CacheReserveStatusParams as CacheReserveStatusParams,
  };

  export {
    SmartTieredCache as SmartTieredCache,
    BaseSmartTieredCache as BaseSmartTieredCache,
    type SmartTieredCacheCreateResponse as SmartTieredCacheCreateResponse,
    type SmartTieredCacheDeleteResponse as SmartTieredCacheDeleteResponse,
    type SmartTieredCacheEditResponse as SmartTieredCacheEditResponse,
    type SmartTieredCacheGetResponse as SmartTieredCacheGetResponse,
    type SmartTieredCacheCreateParams as SmartTieredCacheCreateParams,
    type SmartTieredCacheDeleteParams as SmartTieredCacheDeleteParams,
    type SmartTieredCacheEditParams as SmartTieredCacheEditParams,
    type SmartTieredCacheGetParams as SmartTieredCacheGetParams,
  };

  export {
    Variants as Variants,
    BaseVariants as BaseVariants,
    type VariantDeleteResponse as VariantDeleteResponse,
    type VariantEditResponse as VariantEditResponse,
    type VariantGetResponse as VariantGetResponse,
    type VariantDeleteParams as VariantDeleteParams,
    type VariantEditParams as VariantEditParams,
    type VariantGetParams as VariantGetParams,
  };

  export {
    RegionalTieredCacheResource as RegionalTieredCacheResource,
    BaseRegionalTieredCacheResource as BaseRegionalTieredCacheResource,
    type RegionalTieredCache as RegionalTieredCache,
    type RegionalTieredCacheEditResponse as RegionalTieredCacheEditResponse,
    type RegionalTieredCacheGetResponse as RegionalTieredCacheGetResponse,
    type RegionalTieredCacheEditParams as RegionalTieredCacheEditParams,
    type RegionalTieredCacheGetParams as RegionalTieredCacheGetParams,
  };

  export {
    OriginCloudRegions as OriginCloudRegions,
    BaseOriginCloudRegions as BaseOriginCloudRegions,
    type OriginCloudRegionUpdateResponse as OriginCloudRegionUpdateResponse,
    type OriginCloudRegionListResponse as OriginCloudRegionListResponse,
    type OriginCloudRegionDeleteResponse as OriginCloudRegionDeleteResponse,
    type OriginCloudRegionBulkDeleteResponse as OriginCloudRegionBulkDeleteResponse,
    type OriginCloudRegionBulkUpdateResponse as OriginCloudRegionBulkUpdateResponse,
    type OriginCloudRegionGetResponse as OriginCloudRegionGetResponse,
    type OriginCloudRegionSupportedRegionsResponse as OriginCloudRegionSupportedRegionsResponse,
    type OriginCloudRegionListResponsesV4PagePaginationArray as OriginCloudRegionListResponsesV4PagePaginationArray,
    type OriginCloudRegionUpdateParams as OriginCloudRegionUpdateParams,
    type OriginCloudRegionListParams as OriginCloudRegionListParams,
    type OriginCloudRegionDeleteParams as OriginCloudRegionDeleteParams,
    type OriginCloudRegionBulkDeleteParams as OriginCloudRegionBulkDeleteParams,
    type OriginCloudRegionBulkUpdateParams as OriginCloudRegionBulkUpdateParams,
    type OriginCloudRegionGetParams as OriginCloudRegionGetParams,
    type OriginCloudRegionSupportedRegionsParams as OriginCloudRegionSupportedRegionsParams,
  };
}
