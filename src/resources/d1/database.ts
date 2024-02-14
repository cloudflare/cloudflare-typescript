// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DatabaseAPI from 'cloudflare/resources/d1/database';

export class Database extends APIResource {
  /**
   * Returns the specified D1 database.
   */
  retrieve(
    accountIdentifier: string,
    databaseIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatabaseRetrieveResponse> {
    return (
      this._client.get(
        `/accounts/${accountIdentifier}/d1/database/${databaseIdentifier}`,
        options,
      ) as Core.APIPromise<{ result: DatabaseRetrieveResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes the specified D1 database.
   */
  delete(
    accountIdentifier: string,
    databaseIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatabaseDeleteResponse | null> {
    return (
      this._client.delete(
        `/accounts/${accountIdentifier}/d1/database/${databaseIdentifier}`,
        options,
      ) as Core.APIPromise<{ result: DatabaseDeleteResponse | null }>
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

export interface DatabaseRetrieveResponse {
  /**
   * Specifies the timestamp the resource was created as an ISO8601 string.
   */
  created_at?: unknown;

  /**
   * The D1 database's size, in bytes.
   */
  file_size?: number;

  name?: string;

  num_tables?: number;

  uuid?: string;

  version?: string;
}

export type DatabaseDeleteResponse = unknown | string;

export type DatabaseQueryResponse = Array<DatabaseQueryResponse.DatabaseQueryResponseItem>;

export namespace DatabaseQueryResponse {
  export interface DatabaseQueryResponseItem {
    meta?: DatabaseQueryResponseItem.Meta;

    results?: Array<unknown>;

    success?: boolean;
  }

  export namespace DatabaseQueryResponseItem {
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
}

export interface DatabaseQueryParams {
  sql: string;

  params?: Array<string>;
}

export namespace Database {
  export import DatabaseRetrieveResponse = DatabaseAPI.DatabaseRetrieveResponse;
  export import DatabaseDeleteResponse = DatabaseAPI.DatabaseDeleteResponse;
  export import DatabaseQueryResponse = DatabaseAPI.DatabaseQueryResponse;
  export import DatabaseQueryParams = DatabaseAPI.DatabaseQueryParams;
}
