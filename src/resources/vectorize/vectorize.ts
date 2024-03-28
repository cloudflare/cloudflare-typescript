// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as IndexesAPI from 'cloudflare/resources/vectorize/indexes';

export class Vectorize extends APIResource {
  indexes: IndexesAPI.Indexes = new IndexesAPI.Indexes(this._client);
}

export namespace Vectorize {
  export import Indexes = IndexesAPI.Indexes;
  export import VectorizeCreateIndex = IndexesAPI.VectorizeCreateIndex;
  export import VectorizeIndexDeleteVectorsByID = IndexesAPI.VectorizeIndexDeleteVectorsByID;
  export import VectorizeIndexInsert = IndexesAPI.VectorizeIndexInsert;
  export import VectorizeIndexQuery = IndexesAPI.VectorizeIndexQuery;
  export import VectorizeIndexUpsert = IndexesAPI.VectorizeIndexUpsert;
  export import IndexDeleteResponse = IndexesAPI.IndexDeleteResponse;
  export import IndexGetByIDsResponse = IndexesAPI.IndexGetByIDsResponse;
  export import VectorizeCreateIndicesSinglePage = IndexesAPI.VectorizeCreateIndicesSinglePage;
  export import IndexCreateParams = IndexesAPI.IndexCreateParams;
  export import IndexUpdateParams = IndexesAPI.IndexUpdateParams;
  export import IndexDeleteByIDsParams = IndexesAPI.IndexDeleteByIDsParams;
  export import IndexGetByIDsParams = IndexesAPI.IndexGetByIDsParams;
  export import IndexInsertParams = IndexesAPI.IndexInsertParams;
  export import IndexQueryParams = IndexesAPI.IndexQueryParams;
  export import IndexUpsertParams = IndexesAPI.IndexUpsertParams;
}
