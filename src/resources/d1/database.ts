// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as DatabaseAPI from './database';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';

export class Database extends APIResource {
  /**
   * Returns the created D1 database.
   */
  create(
    params: DatabaseCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatabaseCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/d1/database`, { body, ...options }) as Core.APIPromise<{
        result: DatabaseCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns a list of D1 databases.
   */
  list(
    params: DatabaseListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DatabaseListResponsesV4PagePaginationArray, DatabaseListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/d1/database`,
      DatabaseListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }
}

export class DatabaseListResponsesV4PagePaginationArray extends V4PagePaginationArray<DatabaseListResponse> {}

export interface QueryResult {
  meta?: QueryResult.Meta;

  results?: Array<unknown>;

  success?: boolean;
}

export namespace QueryResult {
  export interface Meta {
    changed_db?: boolean;

    changes?: number;

    duration?: number;

    last_row_id?: number;

    rows_read?: number;

    rows_written?: number;

    size_after?: number;
  }
}

export interface DatabaseCreateResponse {
  /**
   * Specifies the timestamp the resource was created as an ISO8601 string.
   */
  created_at?: string;

  name?: string;

  uuid?: string;

  version?: string;
}

export interface DatabaseListResponse {
  /**
   * Specifies the timestamp the resource was created as an ISO8601 string.
   */
  created_at?: string;

  name?: string;

  uuid?: string;

  version?: string;
}

export interface DatabaseCreateParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

  /**
   * Body param:
   */
  name: string;
}

export interface DatabaseListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

  /**
   * Query param: a database name to search for.
   */
  name?: string;
}

export namespace Database {
  export import QueryResult = DatabaseAPI.QueryResult;
  export import DatabaseCreateResponse = DatabaseAPI.DatabaseCreateResponse;
  export import DatabaseListResponse = DatabaseAPI.DatabaseListResponse;
  export import DatabaseListResponsesV4PagePaginationArray = DatabaseAPI.DatabaseListResponsesV4PagePaginationArray;
  export import DatabaseCreateParams = DatabaseAPI.DatabaseCreateParams;
  export import DatabaseListParams = DatabaseAPI.DatabaseListParams;
}
