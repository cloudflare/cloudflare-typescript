// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as DatabaseAPI from './database';
import * as D1API from './d1';
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

  /**
   * Deletes the specified D1 database.
   */
  delete(
    databaseId: string,
    params: DatabaseDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatabaseDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(`/accounts/${account_id}/d1/database/${databaseId}`, options) as Core.APIPromise<{
        result: DatabaseDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the specified D1 database.
   */
  get(
    databaseId: string,
    params: DatabaseGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<D1API.D1> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/d1/database/${databaseId}`, options) as Core.APIPromise<{
        result: D1API.D1;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the query result as an object.
   */
  query(
    databaseId: string,
    params: DatabaseQueryParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatabaseQueryResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/d1/database/${databaseId}/query`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: DatabaseQueryResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the query result rows as arrays rather than objects. This is a
   * performance-optimized version of the /query endpoint.
   */
  raw(
    databaseId: string,
    params: DatabaseRawParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatabaseRawResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/d1/database/${databaseId}/raw`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: DatabaseRawResponse }>
    )._thenUnwrap((obj) => obj.result);
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

export type DatabaseDeleteResponse = unknown | string | null;

export type DatabaseQueryResponse = Array<QueryResult>;

export type DatabaseRawResponse = Array<DatabaseRawResponse.DatabaseRawResponseItem>;

export namespace DatabaseRawResponse {
  export interface DatabaseRawResponseItem {
    meta?: DatabaseRawResponseItem.Meta;

    results?: DatabaseRawResponseItem.Results;

    success?: boolean;
  }

  export namespace DatabaseRawResponseItem {
    export interface Meta {
      changed_db?: boolean;

      changes?: number;

      duration?: number;

      last_row_id?: number;

      rows_read?: number;

      rows_written?: number;

      size_after?: number;
    }

    export interface Results {
      columns?: Array<string>;

      rows?: Array<Array<number | string | unknown>>;
    }
  }
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

  /**
   * Body param: Specify the region to create the D1 primary, if available. If this
   * option is omitted, the D1 will be created as close as possible to the current
   * user.
   */
  primary_location_hint?: 'wnam' | 'enam' | 'weur' | 'eeur' | 'apac' | 'oc';
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

export interface DatabaseDeleteParams {
  /**
   * Account identifier tag.
   */
  account_id: string;
}

export interface DatabaseGetParams {
  /**
   * Account identifier tag.
   */
  account_id: string;
}

export interface DatabaseQueryParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

  /**
   * Body param: Your SQL query. Supports multiple statements, joined by semicolons,
   * which will be executed as a batch.
   */
  sql: string;

  /**
   * Body param:
   */
  params?: Array<string>;
}

export interface DatabaseRawParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

  /**
   * Body param: Your SQL query. Supports multiple statements, joined by semicolons,
   * which will be executed as a batch.
   */
  sql: string;

  /**
   * Body param:
   */
  params?: Array<string>;
}

export namespace Database {
  export import QueryResult = DatabaseAPI.QueryResult;
  export import DatabaseCreateResponse = DatabaseAPI.DatabaseCreateResponse;
  export import DatabaseListResponse = DatabaseAPI.DatabaseListResponse;
  export import DatabaseDeleteResponse = DatabaseAPI.DatabaseDeleteResponse;
  export import DatabaseQueryResponse = DatabaseAPI.DatabaseQueryResponse;
  export import DatabaseRawResponse = DatabaseAPI.DatabaseRawResponse;
  export import DatabaseListResponsesV4PagePaginationArray = DatabaseAPI.DatabaseListResponsesV4PagePaginationArray;
  export import DatabaseCreateParams = DatabaseAPI.DatabaseCreateParams;
  export import DatabaseListParams = DatabaseAPI.DatabaseListParams;
  export import DatabaseDeleteParams = DatabaseAPI.DatabaseDeleteParams;
  export import DatabaseGetParams = DatabaseAPI.DatabaseGetParams;
  export import DatabaseQueryParams = DatabaseAPI.DatabaseQueryParams;
  export import DatabaseRawParams = DatabaseAPI.DatabaseRawParams;
}
