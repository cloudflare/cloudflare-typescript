// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as IndexesAPI from './indexes/indexes';

export class Vectorize extends APIResource {
  indexes: IndexesAPI.Indexes = new IndexesAPI.Indexes(this._client);
}

export namespace Vectorize {
  export import Indexes = IndexesAPI.Indexes;
  export type CreateIndex = IndexesAPI.CreateIndex;
  export type IndexDeleteVectorsByID = IndexesAPI.IndexDeleteVectorsByID;
  export type IndexDimensionConfiguration = IndexesAPI.IndexDimensionConfiguration;
  export type IndexInsert = IndexesAPI.IndexInsert;
  export type IndexQuery = IndexesAPI.IndexQuery;
  export type IndexUpsert = IndexesAPI.IndexUpsert;
  export type IndexDeleteResponse = IndexesAPI.IndexDeleteResponse;
  export type IndexDeleteByIDsResponse = IndexesAPI.IndexDeleteByIDsResponse;
  export type IndexGetByIDsResponse = IndexesAPI.IndexGetByIDsResponse;
  export type IndexInfoResponse = IndexesAPI.IndexInfoResponse;
  export type IndexInsertResponse = IndexesAPI.IndexInsertResponse;
  export type IndexQueryResponse = IndexesAPI.IndexQueryResponse;
  export type IndexUpsertResponse = IndexesAPI.IndexUpsertResponse;
  export import CreateIndicesSinglePage = IndexesAPI.CreateIndicesSinglePage;
  export type IndexCreateParams = IndexesAPI.IndexCreateParams;
  export type IndexListParams = IndexesAPI.IndexListParams;
  export type IndexDeleteParams = IndexesAPI.IndexDeleteParams;
  export type IndexDeleteByIDsParams = IndexesAPI.IndexDeleteByIDsParams;
  export type IndexGetParams = IndexesAPI.IndexGetParams;
  export type IndexGetByIDsParams = IndexesAPI.IndexGetByIDsParams;
  export type IndexInfoParams = IndexesAPI.IndexInfoParams;
  export type IndexInsertParams = IndexesAPI.IndexInsertParams;
  export type IndexQueryParams = IndexesAPI.IndexQueryParams;
  export type IndexUpsertParams = IndexesAPI.IndexUpsertParams;
}
