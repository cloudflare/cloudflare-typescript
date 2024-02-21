// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CacheReserveAPI from 'cloudflare/resources/cache/cache-reserve';

export class CacheReserve extends APIResource {
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

  /**
   * You can use Cache Reserve Clear to clear your Cache Reserve, but you must first
   * disable Cache Reserve. In most cases, this will be accomplished within 24 hours.
   * You cannot re-enable Cache Reserve while this process is ongoing. Keep in mind
   * that you cannot undo or cancel this operation.
   */
  clear(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<CacheReserveClearResponse> {
    return (
      this._client.post(`/zones/${zoneId}/cache/cache_reserve_clear`, options) as Core.APIPromise<{
        result: CacheReserveClearResponse;
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
  edit(
    zoneId: string,
    body: CacheReserveEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CacheReserveEditResponse> {
    return (
      this._client.patch(`/zones/${zoneId}/cache/cache_reserve`, { body, ...options }) as Core.APIPromise<{
        result: CacheReserveEditResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * You can use Cache Reserve Clear to clear your Cache Reserve, but you must first
   * disable Cache Reserve. In most cases, this will be accomplished within 24 hours.
   * You cannot re-enable Cache Reserve while this process is ongoing. Keep in mind
   * that you cannot undo or cancel this operation.
   */
  status(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<CacheReserveStatusResponse> {
    return (
      this._client.get(`/zones/${zoneId}/cache/cache_reserve_clear`, options) as Core.APIPromise<{
        result: CacheReserveStatusResponse;
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

/**
 * You can use Cache Reserve Clear to clear your Cache Reserve, but you must first
 * disable Cache Reserve. In most cases, this will be accomplished within 24 hours.
 * You cannot re-enable Cache Reserve while this process is ongoing. Keep in mind
 * that you cannot undo or cancel this operation.
 */
export interface CacheReserveClearResponse {
  /**
   * ID of the zone setting.
   */
  id: 'cache_reserve_clear';

  /**
   * last time this setting was modified.
   */
  modified_on: string | null;

  /**
   * The time that the latest Cache Reserve Clear operation started.
   */
  start_ts: string;

  /**
   * The current state of the Cache Reserve Clear operation.
   */
  state: 'In-progress' | 'Completed';

  /**
   * The time that the latest Cache Reserve Clear operation completed.
   */
  end_ts?: string;
}

/**
 * Increase cache lifetimes by automatically storing all cacheable files into
 * Cloudflare's persistent object storage buckets. Requires Cache Reserve
 * subscription. Note: using Tiered Cache with Cache Reserve is highly recommended
 * to reduce Reserve operations costs. See the
 * [developer docs](https://developers.cloudflare.com/cache/about/cache-reserve)
 * for more information.
 */
export interface CacheReserveEditResponse {
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
 * You can use Cache Reserve Clear to clear your Cache Reserve, but you must first
 * disable Cache Reserve. In most cases, this will be accomplished within 24 hours.
 * You cannot re-enable Cache Reserve while this process is ongoing. Keep in mind
 * that you cannot undo or cancel this operation.
 */
export interface CacheReserveStatusResponse {
  /**
   * ID of the zone setting.
   */
  id: 'cache_reserve_clear';

  /**
   * last time this setting was modified.
   */
  modified_on: string | null;

  /**
   * The time that the latest Cache Reserve Clear operation started.
   */
  start_ts: string;

  /**
   * The current state of the Cache Reserve Clear operation.
   */
  state: 'In-progress' | 'Completed';

  /**
   * The time that the latest Cache Reserve Clear operation completed.
   */
  end_ts?: string;
}

export interface CacheReserveEditParams {
  /**
   * Value of the Cache Reserve zone setting.
   */
  value: 'on' | 'off';
}

export namespace CacheReserve {
  export import CacheReserveListResponse = CacheReserveAPI.CacheReserveListResponse;
  export import CacheReserveClearResponse = CacheReserveAPI.CacheReserveClearResponse;
  export import CacheReserveEditResponse = CacheReserveAPI.CacheReserveEditResponse;
  export import CacheReserveStatusResponse = CacheReserveAPI.CacheReserveStatusResponse;
  export import CacheReserveEditParams = CacheReserveAPI.CacheReserveEditParams;
}
