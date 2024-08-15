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
