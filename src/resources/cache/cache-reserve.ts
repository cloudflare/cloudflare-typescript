// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

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

  /**
   * Last time this setting was modified.
   */
  modified_on?: string | null;
}

export interface CacheReserveEditResponse {
  /**
   * ID of the zone setting.
   */
  id: CacheReserve;

  /**
   * Whether the setting is editable
   */
  editable: boolean;

  /**
   * The value of the feature
   */
  value: 'on' | 'off';

  /**
   * Last time this setting was modified.
   */
  modified_on?: string | null;
}

export interface CacheReserveGetResponse {
  /**
   * ID of the zone setting.
   */
  id: CacheReserve;

  /**
   * Whether the setting is editable
   */
  editable: boolean;

  /**
   * The value of the feature
   */
  value: 'on' | 'off';

  /**
   * Last time this setting was modified.
   */
  modified_on?: string | null;
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

  /**
   * Last time this setting was modified.
   */
  modified_on?: string | null;
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

export declare namespace CacheReserveResource {
  export {
    type CacheReserve as CacheReserve,
    type CacheReserveClear as CacheReserveClear,
    type State as State,
    type CacheReserveClearResponse as CacheReserveClearResponse,
    type CacheReserveEditResponse as CacheReserveEditResponse,
    type CacheReserveGetResponse as CacheReserveGetResponse,
    type CacheReserveStatusResponse as CacheReserveStatusResponse,
    type CacheReserveClearParams as CacheReserveClearParams,
    type CacheReserveEditParams as CacheReserveEditParams,
    type CacheReserveGetParams as CacheReserveGetParams,
    type CacheReserveStatusParams as CacheReserveStatusParams,
  };
}
