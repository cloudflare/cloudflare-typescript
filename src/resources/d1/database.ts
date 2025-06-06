// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as D1API from './d1';
import { APIPromise } from '../../core/api-promise';
import {
  PagePromise,
  SinglePage,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Database extends APIResource {
  /**
   * Returns the created D1 database.
   *
   * @example
   * ```ts
   * const d1 = await client.d1.database.create({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   name: 'my-database',
   * });
   * ```
   */
  create(params: DatabaseCreateParams, options?: RequestOptions): APIPromise<D1API.D1> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/d1/database`, { body, ...options }) as APIPromise<{
        result: D1API.D1;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates the specified D1 database.
   *
   * @example
   * ```ts
   * const d1 = await client.d1.database.update(
   *   'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     read_replication: { mode: 'auto' },
   *   },
   * );
   * ```
   */
  update(databaseID: string, params: DatabaseUpdateParams, options?: RequestOptions): APIPromise<D1API.D1> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/d1/database/${databaseID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: D1API.D1 }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns a list of D1 databases.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const databaseListResponse of client.d1.database.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: DatabaseListParams,
    options?: RequestOptions,
  ): PagePromise<DatabaseListResponsesV4PagePaginationArray, DatabaseListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/d1/database`,
      V4PagePaginationArray<DatabaseListResponse>,
      { query, ...options },
    );
  }

  /**
   * Deletes the specified D1 database.
   *
   * @example
   * ```ts
   * const database = await client.d1.database.delete(
   *   'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  delete(
    databaseID: string,
    params: DatabaseDeleteParams,
    options?: RequestOptions,
  ): APIPromise<DatabaseDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(path`/accounts/${account_id}/d1/database/${databaseID}`, options) as APIPromise<{
        result: DatabaseDeleteResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates partially the specified D1 database.
   *
   * @example
   * ```ts
   * const d1 = await client.d1.database.edit(
   *   'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  edit(databaseID: string, params: DatabaseEditParams, options?: RequestOptions): APIPromise<D1API.D1> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(path`/accounts/${account_id}/d1/database/${databaseID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: D1API.D1 }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns a URL where the SQL contents of your D1 can be downloaded. Note: this
   * process may take some time for larger DBs, during which your D1 will be
   * unavailable to serve queries. To avoid blocking your DB unnecessarily, an
   * in-progress export must be continually polled or will automatically cancel.
   *
   * @example
   * ```ts
   * const response = await client.d1.database.export(
   *   'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     output_format: 'polling',
   *   },
   * );
   * ```
   */
  export(
    databaseID: string,
    params: DatabaseExportParams,
    options?: RequestOptions,
  ): APIPromise<DatabaseExportResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/d1/database/${databaseID}/export`, {
        body,
        ...options,
      }) as APIPromise<{ result: DatabaseExportResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the specified D1 database.
   *
   * @example
   * ```ts
   * const d1 = await client.d1.database.get(
   *   'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  get(databaseID: string, params: DatabaseGetParams, options?: RequestOptions): APIPromise<D1API.D1> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/d1/database/${databaseID}`, options) as APIPromise<{
        result: D1API.D1;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Generates a temporary URL for uploading an SQL file to, then instructing the D1
   * to import it and polling it for status updates. Imports block the D1 for their
   * duration.
   *
   * @example
   * ```ts
   * const response = await client.d1.database.import(
   *   'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     action: 'init',
   *     etag: 'etag',
   *   },
   * );
   * ```
   */
  import(
    databaseID: string,
    params: DatabaseImportParams,
    options?: RequestOptions,
  ): APIPromise<DatabaseImportResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/d1/database/${databaseID}/import`, {
        body,
        ...options,
      }) as APIPromise<{ result: DatabaseImportResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the query result as an object.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const queryResult of client.d1.database.query(
   *   'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     sql: 'SELECT * FROM myTable WHERE field = ? OR field = ?;',
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  query(
    databaseID: string,
    params: DatabaseQueryParams,
    options?: RequestOptions,
  ): PagePromise<QueryResultsSinglePage, QueryResult> {
    const { account_id, ...body } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/d1/database/${databaseID}/query`,
      SinglePage<QueryResult>,
      { body, method: 'post', ...options },
    );
  }

  /**
   * Returns the query result rows as arrays rather than objects. This is a
   * performance-optimized version of the /query endpoint.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const databaseRawResponse of client.d1.database.raw(
   *   'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     sql: 'SELECT * FROM myTable WHERE field = ? OR field = ?;',
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  raw(
    databaseID: string,
    params: DatabaseRawParams,
    options?: RequestOptions,
  ): PagePromise<DatabaseRawResponsesSinglePage, DatabaseRawResponse> {
    const { account_id, ...body } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/d1/database/${databaseID}/raw`,
      SinglePage<DatabaseRawResponse>,
      { body, method: 'post', ...options },
    );
  }
}

export type DatabaseListResponsesV4PagePaginationArray = V4PagePaginationArray<DatabaseListResponse>;

export type QueryResultsSinglePage = SinglePage<QueryResult>;

export type DatabaseRawResponsesSinglePage = SinglePage<DatabaseRawResponse>;

export interface QueryResult {
  meta?: QueryResult.Meta;

  results?: Array<unknown>;

  success?: boolean;
}

export namespace QueryResult {
  export interface Meta {
    /**
     * Denotes if the database has been altered in some way, like deleting rows.
     */
    changed_db?: boolean;

    /**
     * Rough indication of how many rows were modified by the query, as provided by
     * SQLite's `sqlite3_total_changes()`.
     */
    changes?: number;

    /**
     * The duration of the SQL query execution inside the database. Does not include
     * any network communication.
     */
    duration?: number;

    /**
     * The row ID of the last inserted row in a table with an `INTEGER PRIMARY KEY` as
     * provided by SQLite. Tables created with `WITHOUT ROWID` do not populate this.
     */
    last_row_id?: number;

    /**
     * Number of rows read during the SQL query execution, including indices (not all
     * rows are necessarily returned).
     */
    rows_read?: number;

    /**
     * Number of rows written during the SQL query execution, including indices.
     */
    rows_written?: number;

    /**
     * Denotes if the query has been handled by the database primary instance.
     */
    served_by_primary?: boolean;

    /**
     * Region location hint of the database instance that handled the query.
     */
    served_by_region?: 'WNAM' | 'ENAM' | 'WEUR' | 'EEUR' | 'APAC' | 'OC';

    /**
     * Size of the database after the query committed, in bytes.
     */
    size_after?: number;

    /**
     * Various durations for the query.
     */
    timings?: Meta.Timings;
  }

  export namespace Meta {
    /**
     * Various durations for the query.
     */
    export interface Timings {
      /**
       * The duration of the SQL query execution inside the database. Does not include
       * any network communication.
       */
      sql_duration_ms?: number;
    }
  }
}

export interface DatabaseListResponse {
  /**
   * Specifies the timestamp the resource was created as an ISO8601 string.
   */
  created_at?: string;

  /**
   * D1 database name.
   */
  name?: string;

  /**
   * D1 database identifier (UUID).
   */
  uuid?: string;

  version?: string;
}

export type DatabaseDeleteResponse = unknown;

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
      /**
       * Denotes if the database has been altered in some way, like deleting rows.
       */
      changed_db?: boolean;

      /**
       * Rough indication of how many rows were modified by the query, as provided by
       * SQLite's `sqlite3_total_changes()`.
       */
      changes?: number;

      /**
       * The duration of the SQL query execution inside the database. Does not include
       * any network communication.
       */
      duration?: number;

      /**
       * The row ID of the last inserted row in a table with an `INTEGER PRIMARY KEY` as
       * provided by SQLite. Tables created with `WITHOUT ROWID` do not populate this.
       */
      last_row_id?: number;

      /**
       * Number of rows read during the SQL query execution, including indices (not all
       * rows are necessarily returned).
       */
      rows_read?: number;

      /**
       * Number of rows written during the SQL query execution, including indices.
       */
      rows_written?: number;

      /**
       * Denotes if the query has been handled by the database primary instance.
       */
      served_by_primary?: boolean;

      /**
       * Region location hint of the database instance that handled the query.
       */
      served_by_region?: 'WNAM' | 'ENAM' | 'WEUR' | 'EEUR' | 'APAC' | 'OC';

      /**
       * Size of the database after the query committed, in bytes.
       */
      size_after?: number;

      /**
       * Various durations for the query.
       */
      timings?: Meta.Timings;
    }

    export namespace Meta {
      /**
       * Various durations for the query.
       */
      export interface Timings {
        /**
         * The duration of the SQL query execution inside the database. Does not include
         * any network communication.
         */
        sql_duration_ms?: number;
      }
    }
  }
}

export interface DatabaseRawResponse {
  meta?: DatabaseRawResponse.Meta;

  results?: DatabaseRawResponse.Results;

  success?: boolean;
}

export namespace DatabaseRawResponse {
  export interface Meta {
    /**
     * Denotes if the database has been altered in some way, like deleting rows.
     */
    changed_db?: boolean;

    /**
     * Rough indication of how many rows were modified by the query, as provided by
     * SQLite's `sqlite3_total_changes()`.
     */
    changes?: number;

    /**
     * The duration of the SQL query execution inside the database. Does not include
     * any network communication.
     */
    duration?: number;

    /**
     * The row ID of the last inserted row in a table with an `INTEGER PRIMARY KEY` as
     * provided by SQLite. Tables created with `WITHOUT ROWID` do not populate this.
     */
    last_row_id?: number;

    /**
     * Number of rows read during the SQL query execution, including indices (not all
     * rows are necessarily returned).
     */
    rows_read?: number;

    /**
     * Number of rows written during the SQL query execution, including indices.
     */
    rows_written?: number;

    /**
     * Denotes if the query has been handled by the database primary instance.
     */
    served_by_primary?: boolean;

    /**
     * Region location hint of the database instance that handled the query.
     */
    served_by_region?: 'WNAM' | 'ENAM' | 'WEUR' | 'EEUR' | 'APAC' | 'OC';

    /**
     * Size of the database after the query committed, in bytes.
     */
    size_after?: number;

    /**
     * Various durations for the query.
     */
    timings?: Meta.Timings;
  }

  export namespace Meta {
    /**
     * Various durations for the query.
     */
    export interface Timings {
      /**
       * The duration of the SQL query execution inside the database. Does not include
       * any network communication.
       */
      sql_duration_ms?: number;
    }
  }

  export interface Results {
    columns?: Array<string>;

    rows?: Array<Array<number | string | unknown>>;
  }
}

export interface DatabaseCreateParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

  /**
   * Body param: D1 database name.
   */
  name: string;

  /**
   * Body param: Specify the region to create the D1 primary, if available. If this
   * option is omitted, the D1 will be created as close as possible to the current
   * user.
   */
  primary_location_hint?: 'wnam' | 'enam' | 'weur' | 'eeur' | 'apac' | 'oc';
}

export interface DatabaseUpdateParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

  /**
   * Body param: Configuration for D1 read replication.
   */
  read_replication: DatabaseUpdateParams.ReadReplication;
}

export namespace DatabaseUpdateParams {
  /**
   * Configuration for D1 read replication.
   */
  export interface ReadReplication {
    /**
     * The read replication mode for the database. Use 'auto' to create replicas and
     * allow D1 automatically place them around the world, or 'disabled' to not use any
     * database replicas (it can take a few hours for all replicas to be deleted).
     */
    mode: 'auto' | 'disabled';
  }
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

export interface DatabaseEditParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

  /**
   * Body param: Configuration for D1 read replication.
   */
  read_replication?: DatabaseEditParams.ReadReplication;
}

export namespace DatabaseEditParams {
  /**
   * Configuration for D1 read replication.
   */
  export interface ReadReplication {
    /**
     * The read replication mode for the database. Use 'auto' to create replicas and
     * allow D1 automatically place them around the world, or 'disabled' to not use any
     * database replicas (it can take a few hours for all replicas to be deleted).
     */
    mode: 'auto' | 'disabled';
  }
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

export type DatabaseImportParams =
  | DatabaseImportParams.Init
  | DatabaseImportParams.Ingest
  | DatabaseImportParams.Poll;

export declare namespace DatabaseImportParams {
  export interface Init {
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

  export interface Ingest {
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

  export interface Poll {
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

export declare namespace Database {
  export {
    type QueryResult as QueryResult,
    type DatabaseListResponse as DatabaseListResponse,
    type DatabaseDeleteResponse as DatabaseDeleteResponse,
    type DatabaseExportResponse as DatabaseExportResponse,
    type DatabaseImportResponse as DatabaseImportResponse,
    type DatabaseRawResponse as DatabaseRawResponse,
    type DatabaseListResponsesV4PagePaginationArray as DatabaseListResponsesV4PagePaginationArray,
    type QueryResultsSinglePage as QueryResultsSinglePage,
    type DatabaseRawResponsesSinglePage as DatabaseRawResponsesSinglePage,
    type DatabaseCreateParams as DatabaseCreateParams,
    type DatabaseUpdateParams as DatabaseUpdateParams,
    type DatabaseListParams as DatabaseListParams,
    type DatabaseDeleteParams as DatabaseDeleteParams,
    type DatabaseEditParams as DatabaseEditParams,
    type DatabaseExportParams as DatabaseExportParams,
    type DatabaseGetParams as DatabaseGetParams,
    type DatabaseImportParams as DatabaseImportParams,
    type DatabaseQueryParams as DatabaseQueryParams,
    type DatabaseRawParams as DatabaseRawParams,
  };
}
