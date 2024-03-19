// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as DatabaseAPI from 'cloudflare/resources/d1/database';

export class D1 extends APIResource {
  database: DatabaseAPI.Database = new DatabaseAPI.Database(this._client);
}

export namespace D1 {
  export import Database = DatabaseAPI.Database;
  export import D1CreateDatabase = DatabaseAPI.D1CreateDatabase;
  export import D1DatabaseDetails = DatabaseAPI.D1DatabaseDetails;
  export import D1QueryResult = DatabaseAPI.D1QueryResult;
  export import DatabaseDeleteResponse = DatabaseAPI.DatabaseDeleteResponse;
  export import DatabaseQueryResponse = DatabaseAPI.DatabaseQueryResponse;
  export import D1CreateDatabasesV4PagePaginationArray = DatabaseAPI.D1CreateDatabasesV4PagePaginationArray;
  export import DatabaseCreateParams = DatabaseAPI.DatabaseCreateParams;
  export import DatabaseListParams = DatabaseAPI.DatabaseListParams;
  export import DatabaseQueryParams = DatabaseAPI.DatabaseQueryParams;
}
