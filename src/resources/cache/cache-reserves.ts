// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CacheReservesAPI from 'cloudflare/resources/cache/cache-reserves';

export class CacheReserves extends APIResource {
  /**
   * Increase cache lifetimes by automatically storing all cacheable files into
   * Cloudflare's persistent object storage buckets. Requires Cache Reserve
   * subscription. Note: using Tiered Cache with Cache Reserve is highly recommended
   * to reduce Reserve operations costs. See the
   * [developer docs](https://developers.cloudflare.com/cache/about/cache-reserve)
   * for more information.
   */
  update(
    zoneId: string,
    body: CacheReserveUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CacheReserveUpdateResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/cache/cache_reserve`, { body, ...options }) as Core.APIPromise<{
        result: CacheReserveUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Increase cache lifetimes by automatically storing all cacheable files into
   * Cloudflare's persistent object storage buckets. Requires Cache Reserve
   * subscription. Note: using Tiered Cache with Cache Reserve is highly recommended
   * to reduce Reserve operations costs. See the
   * [developer docs](https://developers.cloudflare.com/cache/about/cache-reserve)
   * for more information.
   */
  list(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<CacheReserveListResponse> {
    return (
      this._client.get(`/zones/${zoneId}/cache/cache_reserve`, options) as Core.APIPromise<{
        result: CacheReserveListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Increase cache lifetimes by automatically storing all cacheable files into
 * Cloudflare's persistent object storage buckets. Requires Cache Reserve
 * subscription. Note: using Tiered Cache with Cache Reserve is highly recommended
 * to reduce Reserve operations costs. See the
 * [developer docs](https://developers.cloudflare.com/cache/about/cache-reserve)
 * for more information.
 */
export interface CacheReserveUpdateResponse {
  /**
   * ID of the zone setting.
   */
  id: 'cache_reserve';

  /**
   * last time this setting was modified.
   */
  modified_on: string | null;

  /**
   * Value of the Cache Reserve zone setting.
   */
  value: 'on' | 'off';
}

/**
 * Increase cache lifetimes by automatically storing all cacheable files into
 * Cloudflare's persistent object storage buckets. Requires Cache Reserve
 * subscription. Note: using Tiered Cache with Cache Reserve is highly recommended
 * to reduce Reserve operations costs. See the
 * [developer docs](https://developers.cloudflare.com/cache/about/cache-reserve)
 * for more information.
 */
export interface CacheReserveListResponse {
  /**
   * ID of the zone setting.
   */
  id: 'cache_reserve';

  /**
   * last time this setting was modified.
   */
  modified_on: string | null;

  /**
   * Value of the Cache Reserve zone setting.
   */
  value: 'on' | 'off';
}

export interface CacheReserveUpdateParams {
  /**
   * Value of the Cache Reserve zone setting.
   */
  value: 'on' | 'off';
}

export namespace CacheReserves {
  export import CacheReserveUpdateResponse = CacheReservesAPI.CacheReserveUpdateResponse;
  export import CacheReserveListResponse = CacheReservesAPI.CacheReserveListResponse;
  export import CacheReserveUpdateParams = CacheReservesAPI.CacheReserveUpdateParams;
}
