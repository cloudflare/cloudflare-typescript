// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as IndexesAPI from './indexes/indexes';
import {
  CreateIndex,
  CreateIndicesSinglePage,
  IndexCreateParams,
  IndexDeleteByIDsParams,
  IndexDeleteByIDsResponse,
  IndexDeleteParams,
  IndexDeleteResponse,
  IndexDeleteVectorsByID,
  IndexDimensionConfiguration,
  IndexGetByIDsParams,
  IndexGetByIDsResponse,
  IndexGetParams,
  IndexInfoParams,
  IndexInfoResponse,
  IndexInsert,
  IndexInsertParams,
  IndexInsertResponse,
  IndexListParams,
  IndexQuery,
  IndexQueryParams,
  IndexQueryResponse,
  IndexUpsert,
  IndexUpsertParams,
  IndexUpsertResponse,
  Indexes,
} from './indexes/indexes';

export class Vectorize extends APIResource {
  indexes: IndexesAPI.Indexes = new IndexesAPI.Indexes(this._client);
}

Vectorize.Indexes = Indexes;
Vectorize.CreateIndicesSinglePage = CreateIndicesSinglePage;

export declare namespace Vectorize {
  export {
    Indexes as Indexes,
    type CreateIndex as CreateIndex,
    type IndexDeleteVectorsByID as IndexDeleteVectorsByID,
    type IndexDimensionConfiguration as IndexDimensionConfiguration,
    type IndexInsert as IndexInsert,
    type IndexQuery as IndexQuery,
    type IndexUpsert as IndexUpsert,
    type IndexDeleteResponse as IndexDeleteResponse,
    type IndexDeleteByIDsResponse as IndexDeleteByIDsResponse,
    type IndexGetByIDsResponse as IndexGetByIDsResponse,
    type IndexInfoResponse as IndexInfoResponse,
    type IndexInsertResponse as IndexInsertResponse,
    type IndexQueryResponse as IndexQueryResponse,
    type IndexUpsertResponse as IndexUpsertResponse,
    CreateIndicesSinglePage as CreateIndicesSinglePage,
    type IndexCreateParams as IndexCreateParams,
    type IndexListParams as IndexListParams,
    type IndexDeleteParams as IndexDeleteParams,
    type IndexDeleteByIDsParams as IndexDeleteByIDsParams,
    type IndexGetParams as IndexGetParams,
    type IndexGetByIDsParams as IndexGetByIDsParams,
    type IndexInfoParams as IndexInfoParams,
    type IndexInsertParams as IndexInsertParams,
    type IndexQueryParams as IndexQueryParams,
    type IndexUpsertParams as IndexUpsertParams,
  };
}
