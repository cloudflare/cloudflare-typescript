// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as IndexesAPI from 'cloudflare/resources/vectorize/indexes';

export class Vectorize extends APIResource {
  indexes: IndexesAPI.Indexes = new IndexesAPI.Indexes(this._client);
}

export namespace Vectorize {
  export import Indexes = IndexesAPI.Indexes;
  export import CreateIndex = IndexesAPI.CreateIndex;
  export import IndexDeleteVectorsByID = IndexesAPI.IndexDeleteVectorsByID;
  export import IndexDimensionConfiguration = IndexesAPI.IndexDimensionConfiguration;
  export import IndexInsert = IndexesAPI.IndexInsert;
  export import IndexQuery = IndexesAPI.IndexQuery;
  export import IndexUpsert = IndexesAPI.IndexUpsert;
  export import IndexGetByIDsResponse = IndexesAPI.IndexGetByIDsResponse;
  export import CreateIndicesSinglePage = IndexesAPI.CreateIndicesSinglePage;
  export import IndexCreateParams = IndexesAPI.IndexCreateParams;
  export import IndexUpdateParams = IndexesAPI.IndexUpdateParams;
  export import IndexDeleteByIDsParams = IndexesAPI.IndexDeleteByIDsParams;
  export import IndexGetByIDsParams = IndexesAPI.IndexGetByIDsParams;
  export import IndexInsertParams = IndexesAPI.IndexInsertParams;
  export import IndexQueryParams = IndexesAPI.IndexQueryParams;
  export import IndexUpsertParams = IndexesAPI.IndexUpsertParams;
}
