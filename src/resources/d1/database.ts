// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
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
    accountIdentifier: string,
    databaseIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatabaseDeleteResponse> {
    return (
      this._client.delete(
        `/accounts/${accountIdentifier}/d1/database/${databaseIdentifier}`,
        options,
      ) as Core.APIPromise<{ result: DatabaseDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the specified D1 database.
   */
  get(
    accountIdentifier: string,
    databaseIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<D1API.D1> {
    return (
      this._client.get(
        `/accounts/${accountIdentifier}/d1/database/${databaseIdentifier}`,
        options,
      ) as Core.APIPromise<{ result: D1API.D1 }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the query result.
   */
  query(
    accountIdentifier: string,
    databaseIdentifier: string,
    body: DatabaseQueryParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatabaseQueryResponse> {
    return (
      this._client.post(`/accounts/${accountIdentifier}/d1/database/${databaseIdentifier}/query`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: DatabaseQueryResponse }>
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

export interface DatabaseQueryParams {
  sql: string;

  params?: Array<string>;
}

export namespace Database {
  export import QueryResult = DatabaseAPI.QueryResult;
  export import DatabaseCreateResponse = DatabaseAPI.DatabaseCreateResponse;
  export import DatabaseListResponse = DatabaseAPI.DatabaseListResponse;
  export import DatabaseDeleteResponse = DatabaseAPI.DatabaseDeleteResponse;
  export import DatabaseQueryResponse = DatabaseAPI.DatabaseQueryResponse;
  export import DatabaseListResponsesV4PagePaginationArray = DatabaseAPI.DatabaseListResponsesV4PagePaginationArray;
  export import DatabaseCreateParams = DatabaseAPI.DatabaseCreateParams;
  export import DatabaseListParams = DatabaseAPI.DatabaseListParams;
  export import DatabaseQueryParams = DatabaseAPI.DatabaseQueryParams;
}
