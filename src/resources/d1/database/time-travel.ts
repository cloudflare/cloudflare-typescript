// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class TimeTravel extends APIResource {
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
    databaseId: string,
    params: TimeTravelGetBookmarkParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeTravelGetBookmarkResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/d1/database/${databaseId}/time_travel/bookmark`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: TimeTravelGetBookmarkResponse }>
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
    databaseId: string,
    params: TimeTravelRestoreParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeTravelRestoreResponse> {
    const { account_id, bookmark, timestamp } = params;
    return (
      this._client.post(`/accounts/${account_id}/d1/database/${databaseId}/time_travel/restore`, {
        query: { bookmark, timestamp },
        ...options,
      }) as Core.APIPromise<{ result: TimeTravelRestoreResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

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
