// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DatabaseAPI from 'cloudflare/resources/d1/database';

export class Database extends APIResource {
  /**
   * Returns the query result.
   */
  create(
    accountIdentifier: string,
    databaseIdentifier: string,
    body: DatabaseCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatabaseCreateResponse> {
    return (
      this._client.post(`/accounts/${accountIdentifier}/d1/database/${databaseIdentifier}/query`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: DatabaseCreateResponse }>
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
   * Returns the specified D1 database.
   */
  get(
    accountIdentifier: string,
    databaseIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatabaseGetResponse> {
    return (
      this._client.get(
        `/accounts/${accountIdentifier}/d1/database/${databaseIdentifier}`,
        options,
      ) as Core.APIPromise<{ result: DatabaseGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type DatabaseCreateResponse = Array<DatabaseCreateResponse.DatabaseCreateResponseItem>;

export namespace DatabaseCreateResponse {
  export interface DatabaseCreateResponseItem {
    meta?: DatabaseCreateResponseItem.Meta;

    results?: Array<unknown>;

    success?: boolean;
  }

  export namespace DatabaseCreateResponseItem {
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

export type DatabaseDeleteResponse = unknown | string;

export interface DatabaseGetResponse {
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

export interface DatabaseCreateParams {
  sql: string;

  params?: Array<string>;
}

export namespace Database {
  export import DatabaseCreateResponse = DatabaseAPI.DatabaseCreateResponse;
  export import DatabaseDeleteResponse = DatabaseAPI.DatabaseDeleteResponse;
  export import DatabaseGetResponse = DatabaseAPI.DatabaseGetResponse;
  export import DatabaseCreateParams = DatabaseAPI.DatabaseCreateParams;
}
