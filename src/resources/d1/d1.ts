// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as DatabaseAPI from 'cloudflare/resources/d1/database';
import * as DatabasesAPI from 'cloudflare/resources/d1/databases';

export class D1 extends APIResource {
  databases: DatabasesAPI.Databases = new DatabasesAPI.Databases(this._client);
  database: DatabaseAPI.Database = new DatabaseAPI.Database(this._client);
}

export namespace D1 {
  export import Databases = DatabasesAPI.Databases;
  export import DatabaseCreateResponse = DatabasesAPI.DatabaseCreateResponse;
  export import DatabaseListResponse = DatabasesAPI.DatabaseListResponse;
  export import DatabaseListResponsesV4PagePaginationArray = DatabasesAPI.DatabaseListResponsesV4PagePaginationArray;
  export import DatabaseCreateParams = DatabasesAPI.DatabaseCreateParams;
  export import DatabaseListParams = DatabasesAPI.DatabaseListParams;
  export import Database = DatabaseAPI.Database;
  export import DatabaseDeleteResponse = DatabaseAPI.DatabaseDeleteResponse;
  export import DatabaseGetResponse = DatabaseAPI.DatabaseGetResponse;
  export import DatabaseQueryResponse = DatabaseAPI.DatabaseQueryResponse;
  export import DatabaseQueryParams = DatabaseAPI.DatabaseQueryParams;
}
