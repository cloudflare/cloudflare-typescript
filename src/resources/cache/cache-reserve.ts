// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as CacheReserveAPI from './cache-reserve';

export class CacheReserveResource extends APIResource {
  /**
   * You can use Cache Reserve Clear to clear your Cache Reserve, but you must first
   * disable Cache Reserve. In most cases, this will be accomplished within 24 hours.
   * You cannot re-enable Cache Reserve while this process is ongoing. Keep in mind
   * that you cannot undo or cancel this operation.
   */
  clear(
    params: CacheReserveClearParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CacheReserveClearResponse> {
    const { zone_id, body } = params;
    return (
      this._client.post(`/zones/${zone_id}/cache/cache_reserve_clear`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: CacheReserveClearResponse }>
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
    params: CacheReserveEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CacheReserveEditResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.patch(`/zones/${zone_id}/cache/cache_reserve`, { body, ...options }) as Core.APIPromise<{
        result: CacheReserveEditResponse;
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
  get(
    params: CacheReserveGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CacheReserveGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/cache/cache_reserve`, options) as Core.APIPromise<{
        result: CacheReserveGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * You can use Cache Reserve Clear to clear your Cache Reserve, but you must first
   * disable Cache Reserve. In most cases, this will be accomplished within 24 hours.
   * You cannot re-enable Cache Reserve while this process is ongoing. Keep in mind
   * that you cannot undo or cancel this operation.
   */
  status(
    params: CacheReserveStatusParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CacheReserveStatusResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/cache/cache_reserve_clear`, options) as Core.APIPromise<{
        result: CacheReserveStatusResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * ID of the zone setting.
 */
export type CacheReserve = 'cache_reserve';

/**
 * ID of the zone setting.
 */
export type CacheReserveClear = 'cache_reserve_clear';

/**
 * The current state of the Cache Reserve Clear operation.
 */
export type State = 'In-progress' | 'Completed';

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
  id: CacheReserveClear;

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
  state: State;

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
  id: CacheReserve;

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
export interface CacheReserveGetResponse {
  /**
   * ID of the zone setting.
   */
  id: CacheReserve;

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
  id: CacheReserveClear;

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
  state: State;

  /**
   * The time that the latest Cache Reserve Clear operation completed.
   */
  end_ts?: string;
}

export interface CacheReserveClearParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface CacheReserveEditParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: Value of the Cache Reserve zone setting.
   */
  value: 'on' | 'off';
}

export interface CacheReserveGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export interface CacheReserveStatusParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace CacheReserveResource {
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
}
