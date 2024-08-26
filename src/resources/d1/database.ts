// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as DatabaseAPI from './database';
import * as D1API from './d1';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';

export class Database extends APIResource {
  /**
   * Returns the created D1 database.
   */
  create(params: DatabaseCreateParams, options?: Core.RequestOptions): Core.APIPromise<D1API.D1> {
    const { account_id, ...body } = params;
    return (this._client.post(`/accounts/${account_id}/d1/database`, { body, ...options }) as Core.APIPromise<{ result: D1API.D1 }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns a list of D1 databases.
   */
  list(params: DatabaseListParams, options?: Core.RequestOptions): Core.PagePromise<DatabaseListResponsesV4PagePaginationArray, DatabaseListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(`/accounts/${account_id}/d1/database`, DatabaseListResponsesV4PagePaginationArray, { query, ...options });
  }

  /**
   * Deletes the specified D1 database.
   */
  delete(databaseId: string, params: DatabaseDeleteParams, options?: Core.RequestOptions): Core.APIPromise<DatabaseDeleteResponse | null> {
    const { account_id } = params;
    return (this._client.delete(`/accounts/${account_id}/d1/database/${databaseId}`, options) as Core.APIPromise<{ result: DatabaseDeleteResponse | null }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns a URL where the SQL contents of your D1 can be downloaded. Note: this
   * process may take some time for larger DBs, during which your D1 will be
   * unavailable to serve queries. To avoid blocking your DB unnecessarily, an
   * in-progress export must be continually polled or will automatically cancel.
   */
  export(databaseId: string, params: DatabaseExportParams, options?: Core.RequestOptions): Core.APIPromise<DatabaseExportResponse> {
    const { account_id, ...body } = params;
    return (this._client.post(`/accounts/${account_id}/d1/database/${databaseId}/export`, { body, ...options }) as Core.APIPromise<{ result: DatabaseExportResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the specified D1 database.
   */
  get(databaseId: string, params: DatabaseGetParams, options?: Core.RequestOptions): Core.APIPromise<D1API.D1> {
    const { account_id } = params;
    return (this._client.get(`/accounts/${account_id}/d1/database/${databaseId}`, options) as Core.APIPromise<{ result: D1API.D1 }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Generates a temporary URL for uploading an SQL file to, then instructing the D1
   * to import it and polling it for status updates. Imports block the D1 for their
   * duration.
   */
  import(databaseId: string, params: DatabaseImportParams, options?: Core.RequestOptions): Core.APIPromise<DatabaseImportResponse> {
    const { account_id, ...body } = params;
    return (this._client.post(`/accounts/${account_id}/d1/database/${databaseId}/import`, { body, ...options }) as Core.APIPromise<{ result: DatabaseImportResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the query result as an object.
   */
  query(databaseId: string, params: DatabaseQueryParams, options?: Core.RequestOptions): Core.APIPromise<DatabaseQueryResponse> {
    const { account_id, ...body } = params;
    return (this._client.post(`/accounts/${account_id}/d1/database/${databaseId}/query`, { body, ...options }) as Core.APIPromise<{ result: DatabaseQueryResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the query result rows as arrays rather than objects. This is a
   * performance-optimized version of the /query endpoint.
   */
  raw(databaseId: string, params: DatabaseRawParams, options?: Core.RequestOptions): Core.APIPromise<DatabaseRawResponse> {
    const { account_id, ...body } = params;
    return (this._client.post(`/accounts/${account_id}/d1/database/${databaseId}/raw`, { body, ...options }) as Core.APIPromise<{ result: DatabaseRawResponse }>)._thenUnwrap((obj) => obj.result);
  }
}

export class DatabaseListResponsesV4PagePaginationArray extends V4PagePaginationArray<DatabaseListResponse> {
}

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

export interface DatabaseListResponse {
  /**
   * Specifies the timestamp the resource was created as an ISO8601 string.
   */
  created_at?: string;

  name?: string;

  uuid?: string;

  version?: string;
}

export type DatabaseDeleteResponse = unknown

export interface DatabaseExportResponse {
  /**
   * The current time-travel bookmark for your D1, used to poll for updates. Will not
   * change for the duration of the export task.
   */
  at_bookmark?: string;

  /**
   * Only present when status = 'error'. Contains the error message.
   */
  error?: string;

  /**
   * Logs since the last time you polled
   */
  messages?: Array<string>;

  /**
   * Only present when status = 'complete'
   */
  result?: DatabaseExportResponse.Result;

  status?: 'complete' | 'error';

  success?: boolean;

  type?: 'export';
}

export namespace DatabaseExportResponse {
  /**
   * Only present when status = 'complete'
   */
  export interface Result {
    /**
     * The generated SQL filename.
     */
    filename?: string;

    /**
     * The URL to download the exported SQL. Available for one hour.
     */
    signed_url?: string;
  }
}

export interface DatabaseImportResponse {
  /**
   * The current time-travel bookmark for your D1, used to poll for updates. Will not
   * change for the duration of the import. Only returned if an import process is
   * currently running or recently finished.
   */
  at_bookmark?: string;

  /**
   * Only present when status = 'error'. Contains the error message that prevented
   * the import from succeeding.
   */
  error?: string;

  /**
   * Derived from the database ID and etag, to use in avoiding repeated uploads. Only
   * returned when for the 'init' action.
   */
  filename?: string;

  /**
   * Logs since the last time you polled
   */
  messages?: Array<string>;

  /**
   * Only present when status = 'complete'
   */
  result?: DatabaseImportResponse.Result;

  status?: 'complete' | 'error';

  success?: boolean;

  type?: 'import';

  /**
   * The R2 presigned URL to use for uploading. Only returned when for the 'init'
   * action.
   */
  upload_url?: string;
}

export namespace DatabaseImportResponse {
  /**
   * Only present when status = 'complete'
   */
  export interface Result {
    /**
     * The time-travel bookmark if you need restore your D1 to directly after the
     * import succeeded.
     */
    final_bookmark?: string;

    meta?: Result.Meta;

    /**
     * The total number of queries that were executed during the import.
     */
    num_queries?: number;
  }

  export namespace Result {
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

export type DatabaseQueryResponse = Array<QueryResult>

export type DatabaseRawResponse = Array<DatabaseRawResponse.DatabaseRawResponseItem>

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

export interface DatabaseExportParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

  /**
   * Body param: Specifies that you will poll this endpoint until the export
   * completes
   */
  output_format: 'polling';

  /**
   * Body param: To poll an in-progress export, provide the current bookmark
   * (returned by your first polling response)
   */
  current_bookmark?: string;

  /**
   * Body param:
   */
  dump_options?: DatabaseExportParams.DumpOptions;
}

export namespace DatabaseExportParams {
  export interface DumpOptions {
    /**
     * Export only the table definitions, not their contents
     */
    no_data?: boolean;

    /**
     * Export only each table's contents, not its definition
     */
    no_schema?: boolean;

    /**
     * Filter the export to just one or more tables. Passing an empty array is the same
     * as not passing anything and means: export all tables.
     */
    tables?: Array<string>;
  }
}

export interface DatabaseGetParams {
  /**
   * Account identifier tag.
   */
  account_id: string;
}

export type DatabaseImportParams = DatabaseImportParams.Variant0 | DatabaseImportParams.Variant1 | DatabaseImportParams.Variant2

export namespace DatabaseImportParams {
  export interface Variant0 {
    /**
     * Path param: Account identifier tag.
     */
    account_id: string;

    /**
     * Body param: Indicates you have a new SQL file to upload.
     */
    action: 'init';

    /**
     * Body param: Required when action is 'init' or 'ingest'. An md5 hash of the file
     * you're uploading. Used to check if it already exists, and validate its contents
     * before ingesting.
     */
    etag: string;
  }

  export interface Variant1 {
    /**
     * Path param: Account identifier tag.
     */
    account_id: string;

    /**
     * Body param: Indicates you've finished uploading to tell the D1 to start
     * consuming it
     */
    action: 'ingest';

    /**
     * Body param: An md5 hash of the file you're uploading. Used to check if it
     * already exists, and validate its contents before ingesting.
     */
    etag: string;

    /**
     * Body param: The filename you have successfully uploaded.
     */
    filename: string;
  }

  export interface Variant2 {
    /**
     * Path param: Account identifier tag.
     */
    account_id: string;

    /**
     * Body param: Indicates you've finished uploading to tell the D1 to start
     * consuming it
     */
    action: 'poll';

    /**
     * Body param: This identifies the currently-running import, checking its status.
     */
    current_bookmark: string;
  }
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
  export import DatabaseListResponse = DatabaseAPI.DatabaseListResponse;
  export import DatabaseDeleteResponse = DatabaseAPI.DatabaseDeleteResponse;
  export import DatabaseExportResponse = DatabaseAPI.DatabaseExportResponse;
  export import DatabaseImportResponse = DatabaseAPI.DatabaseImportResponse;
  export import DatabaseQueryResponse = DatabaseAPI.DatabaseQueryResponse;
  export import DatabaseRawResponse = DatabaseAPI.DatabaseRawResponse;
  export import DatabaseListResponsesV4PagePaginationArray = DatabaseAPI.DatabaseListResponsesV4PagePaginationArray;
  export import DatabaseCreateParams = DatabaseAPI.DatabaseCreateParams;
  export import DatabaseListParams = DatabaseAPI.DatabaseListParams;
  export import DatabaseDeleteParams = DatabaseAPI.DatabaseDeleteParams;
  export import DatabaseExportParams = DatabaseAPI.DatabaseExportParams;
  export import DatabaseGetParams = DatabaseAPI.DatabaseGetParams;
  export import DatabaseImportParams = DatabaseAPI.DatabaseImportParams;
  export import DatabaseQueryParams = DatabaseAPI.DatabaseQueryParams;
  export import DatabaseRawParams = DatabaseAPI.DatabaseRawParams;
}
