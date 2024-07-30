// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as IndexesAPI from './indexes/indexes';

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
  export import IndexDeleteResponse = IndexesAPI.IndexDeleteResponse;
  export import IndexDeleteByIDsResponse = IndexesAPI.IndexDeleteByIDsResponse;
  export import IndexGetByIDsResponse = IndexesAPI.IndexGetByIDsResponse;
  export import IndexInfoResponse = IndexesAPI.IndexInfoResponse;
  export import IndexInsertResponse = IndexesAPI.IndexInsertResponse;
  export import IndexQueryResponse = IndexesAPI.IndexQueryResponse;
  export import IndexUpsertResponse = IndexesAPI.IndexUpsertResponse;
  export import CreateIndicesSinglePage = IndexesAPI.CreateIndicesSinglePage;
  export import IndexCreateParams = IndexesAPI.IndexCreateParams;
  export import IndexListParams = IndexesAPI.IndexListParams;
  export import IndexDeleteParams = IndexesAPI.IndexDeleteParams;
  export import IndexDeleteByIDsParams = IndexesAPI.IndexDeleteByIDsParams;
  export import IndexGetParams = IndexesAPI.IndexGetParams;
  export import IndexGetByIDsParams = IndexesAPI.IndexGetByIDsParams;
  export import IndexInfoParams = IndexesAPI.IndexInfoParams;
  export import IndexInsertParams = IndexesAPI.IndexInsertParams;
  export import IndexQueryParams = IndexesAPI.IndexQueryParams;
  export import IndexUpsertParams = IndexesAPI.IndexUpsertParams;
}
