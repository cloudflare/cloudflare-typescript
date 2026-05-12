// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as DatabaseAPI from './database/database';
import {
  Database,
  DatabaseCreateParams,
  DatabaseDeleteParams,
  DatabaseDeleteResponse,
  DatabaseEditParams,
  DatabaseExportParams,
  DatabaseExportResponse,
  DatabaseGetParams,
  DatabaseImportParams,
  DatabaseImportResponse,
  DatabaseListParams,
  DatabaseListResponse,
  DatabaseListResponsesV4PagePaginationArray,
  DatabaseQueryParams,
  DatabaseRawParams,
  DatabaseRawResponse,
  DatabaseRawResponsesSinglePage,
  DatabaseUpdateParams,
  QueryResult,
  QueryResultsSinglePage,
} from './database/database';

export class D1Resource extends APIResource {
  database: DatabaseAPI.Database = new DatabaseAPI.Database(this._client);
}

/**
 * The details of the D1 database.
 */
export interface D1 {
  /**
   * Specifies the timestamp the resource was created as an ISO8601 string.
   */
  created_at?: string;

  /**
   * The D1 database's size, in bytes.
   */
  file_size?: number;

  /**
   * Specify the location to restrict the D1 database to run and store data. If this
   * option is present, the location hint is ignored.
   */
  jurisdiction?: 'eu' | 'fedramp' | null;

  /**
   * D1 database name.
   */
  name?: string;

  num_tables?: number;

  /**
   * Configuration for D1 read replication.
   */
  read_replication?: D1.ReadReplication;

  /**
   * D1 database identifier (UUID).
   */
  uuid?: string;

  version?: string;
}

export namespace D1 {
  /**
   * Configuration for D1 read replication.
   */
  export interface ReadReplication {
    /**
     * The read replication mode for the database. Mode 'auto' denotes that D1 creates
     * replicas and automatically places them around the world. Mode 'disabled' denotes
     * that no database replicas are used.
     */
    mode: 'auto' | 'disabled';
  }
}

D1Resource.Database = Database;
D1Resource.DatabaseListResponsesV4PagePaginationArray = DatabaseListResponsesV4PagePaginationArray;
D1Resource.QueryResultsSinglePage = QueryResultsSinglePage;
D1Resource.DatabaseRawResponsesSinglePage = DatabaseRawResponsesSinglePage;

export declare namespace D1Resource {
  export { type D1 as D1 };

  export {
    Database as Database,
    type QueryResult as QueryResult,
    type DatabaseListResponse as DatabaseListResponse,
    type DatabaseDeleteResponse as DatabaseDeleteResponse,
    type DatabaseExportResponse as DatabaseExportResponse,
    type DatabaseImportResponse as DatabaseImportResponse,
    type DatabaseRawResponse as DatabaseRawResponse,
    DatabaseListResponsesV4PagePaginationArray as DatabaseListResponsesV4PagePaginationArray,
    QueryResultsSinglePage as QueryResultsSinglePage,
    DatabaseRawResponsesSinglePage as DatabaseRawResponsesSinglePage,
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
