// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseTimeTravel extends APIResource {
  static override readonly _key: readonly ['d1', 'database', 'timeTravel'] = Object.freeze([
    'd1',
    'database',
    'timeTravel',
  ] as const);

  /**
   * Retrieves the current bookmark, or the nearest bookmark at or before a provided
   * timestamp. Bookmarks can be used with the restore endpoint to revert the
   * database to a previous point in time.
   *
   * @example
   * ```ts
   * const response =
   *   await client.d1.database.timeTravel.getBookmark(
   *     'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  getBookmark(
    databaseID: string,
    params: TimeTravelGetBookmarkParams,
    options?: RequestOptions,
  ): APIPromise<TimeTravelGetBookmarkResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(path`/accounts/${account_id}/d1/database/${databaseID}/time_travel/bookmark`, {
        query,
        ...options,
      }) as APIPromise<{ result: TimeTravelGetBookmarkResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Restores a D1 database to a previous point in time either via a bookmark or a
   * timestamp.
   *
   * @example
   * ```ts
   * const response =
   *   await client.d1.database.timeTravel.restore(
   *     'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  restore(
    databaseID: string,
    params: TimeTravelRestoreParams,
    options?: RequestOptions,
  ): APIPromise<TimeTravelRestoreResponse> {
    const { account_id, bookmark, timestamp } = params;
    return (
      this._client.post(path`/accounts/${account_id}/d1/database/${databaseID}/time_travel/restore`, {
        query: { bookmark, timestamp },
        ...options,
      }) as APIPromise<{ result: TimeTravelRestoreResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class TimeTravel extends BaseTimeTravel {}

export interface TimeTravelGetBookmarkResponse {
  /**
   * A bookmark representing a specific state of the database at a specific point in
   * time.
   */
  bookmark?: string;
}

/**
 * Response from a time travel restore operation.
 */
export interface TimeTravelRestoreResponse {
  /**
   * The new bookmark representing the state of the database after the restore
   * operation.
   */
  bookmark?: string;

  /**
   * A message describing the result of the restore operation.
   */
  message?: string;

  /**
   * The bookmark representing the state of the database before the restore
   * operation. Can be used to undo the restore if needed.
   */
  previous_bookmark?: string;
}

export interface TimeTravelGetBookmarkParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

  /**
   * Query param: An optional ISO 8601 timestamp. If provided, returns the nearest
   * available bookmark at or before this timestamp. If omitted, returns the current
   * bookmark.
   */
  timestamp?: string;
}

export interface TimeTravelRestoreParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

  /**
   * Query param: A bookmark to restore the database to. Required if `timestamp` is
   * not provided.
   */
  bookmark?: string;

  /**
   * Query param: An ISO 8601 timestamp to restore the database to. Required if
   * `bookmark` is not provided.
   */
  timestamp?: string;
}

export declare namespace TimeTravel {
  export {
    type TimeTravelGetBookmarkResponse as TimeTravelGetBookmarkResponse,
    type TimeTravelRestoreResponse as TimeTravelRestoreResponse,
    type TimeTravelGetBookmarkParams as TimeTravelGetBookmarkParams,
    type TimeTravelRestoreParams as TimeTravelRestoreParams,
  };
}
