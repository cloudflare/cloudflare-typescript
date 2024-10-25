// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as DatabaseAPI from './database';

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

export namespace D1Resource {
  export import Database = DatabaseAPI.Database;
  export type QueryResult = DatabaseAPI.QueryResult;
  export type DatabaseListResponse = DatabaseAPI.DatabaseListResponse;
  export type DatabaseDeleteResponse = DatabaseAPI.DatabaseDeleteResponse;
  export type DatabaseExportResponse = DatabaseAPI.DatabaseExportResponse;
  export type DatabaseImportResponse = DatabaseAPI.DatabaseImportResponse;
  export type DatabaseQueryResponse = DatabaseAPI.DatabaseQueryResponse;
  export type DatabaseRawResponse = DatabaseAPI.DatabaseRawResponse;
  export import DatabaseListResponsesV4PagePaginationArray = DatabaseAPI.DatabaseListResponsesV4PagePaginationArray;
  export type DatabaseCreateParams = DatabaseAPI.DatabaseCreateParams;
  export type DatabaseListParams = DatabaseAPI.DatabaseListParams;
  export type DatabaseDeleteParams = DatabaseAPI.DatabaseDeleteParams;
  export type DatabaseExportParams = DatabaseAPI.DatabaseExportParams;
  export type DatabaseGetParams = DatabaseAPI.DatabaseGetParams;
  export type DatabaseImportParams = DatabaseAPI.DatabaseImportParams;
  export type DatabaseQueryParams = DatabaseAPI.DatabaseQueryParams;
  export type DatabaseRawParams = DatabaseAPI.DatabaseRawParams;
}
