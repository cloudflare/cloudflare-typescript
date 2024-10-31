// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as DatabaseAPI from './database';
import {
  Database,
  DatabaseCreateParams,
  DatabaseDeleteParams,
  DatabaseDeleteResponse,
  DatabaseExportParams,
  DatabaseExportResponse,
  DatabaseGetParams,
  DatabaseImportParams,
  DatabaseImportResponse,
  DatabaseListParams,
  DatabaseListResponse,
  DatabaseListResponsesV4PagePaginationArray,
  DatabaseQueryParams,
  DatabaseQueryResponse,
  DatabaseRawParams,
  DatabaseRawResponse,
  QueryResult,
} from './database';

export class D1Resource extends APIResource {
  database: DatabaseAPI.Database = new DatabaseAPI.Database(this._client);
}

export interface D1 {
  /**
   * Specifies the timestamp the resource was created as an ISO8601 string.
   */
  created_at?: string;

  /**
   * The D1 database's size, in bytes.
   */
  file_size?: number;

  name?: string;

  num_tables?: number;

  uuid?: string;

  version?: string;
}

D1Resource.Database = Database;
D1Resource.DatabaseListResponsesV4PagePaginationArray = DatabaseListResponsesV4PagePaginationArray;

export declare namespace D1Resource {
  export {
    Database as Database,
    type QueryResult as QueryResult,
    type DatabaseListResponse as DatabaseListResponse,
    type DatabaseDeleteResponse as DatabaseDeleteResponse,
    type DatabaseExportResponse as DatabaseExportResponse,
    type DatabaseImportResponse as DatabaseImportResponse,
    type DatabaseQueryResponse as DatabaseQueryResponse,
    type DatabaseRawResponse as DatabaseRawResponse,
    DatabaseListResponsesV4PagePaginationArray as DatabaseListResponsesV4PagePaginationArray,
    type DatabaseCreateParams as DatabaseCreateParams,
    type DatabaseListParams as DatabaseListParams,
    type DatabaseDeleteParams as DatabaseDeleteParams,
    type DatabaseExportParams as DatabaseExportParams,
    type DatabaseGetParams as DatabaseGetParams,
    type DatabaseImportParams as DatabaseImportParams,
    type DatabaseQueryParams as DatabaseQueryParams,
    type DatabaseRawParams as DatabaseRawParams,
  };
}
