// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CacheReserveAPI from 'cloudflare/resources/cache-reserve';

export class CacheReserve extends APIResource {
  /**
   * You can use Cache Reserve Clear to clear your Cache Reserve, but you must first
   * disable Cache Reserve. In most cases, this will be accomplished within 24 hours.
   * You cannot re-enable Cache Reserve while this process is ongoing. Keep in mind
   * that you cannot undo or cancel this operation.
   */
  create(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<CacheReserveCreateResponse> {
    return (
      this._client.post(`/zones/${zoneId}/cache/cache_reserve_clear`, options) as Core.APIPromise<{
        result: CacheReserveCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * You can use Cache Reserve Clear to clear your Cache Reserve, but you must first
   * disable Cache Reserve. In most cases, this will be accomplished within 24 hours.
   * You cannot re-enable Cache Reserve while this process is ongoing. Keep in mind
   * that you cannot undo or cancel this operation.
   */
  get(zoneId: string, options?: Core.RequestOptions): Core.APIPromise<CacheReserveGetResponse> {
    return (
      this._client.get(`/zones/${zoneId}/cache/cache_reserve_clear`, options) as Core.APIPromise<{
        result: CacheReserveGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * You can use Cache Reserve Clear to clear your Cache Reserve, but you must first
 * disable Cache Reserve. In most cases, this will be accomplished within 24 hours.
 * You cannot re-enable Cache Reserve while this process is ongoing. Keep in mind
 * that you cannot undo or cancel this operation.
 */
export interface CacheReserveCreateResponse {
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
 * You can use Cache Reserve Clear to clear your Cache Reserve, but you must first
 * disable Cache Reserve. In most cases, this will be accomplished within 24 hours.
 * You cannot re-enable Cache Reserve while this process is ongoing. Keep in mind
 * that you cannot undo or cancel this operation.
 */
export interface CacheReserveGetResponse {
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

export namespace CacheReserve {
  export import CacheReserveCreateResponse = CacheReserveAPI.CacheReserveCreateResponse;
  export import CacheReserveGetResponse = CacheReserveAPI.CacheReserveGetResponse;
}
