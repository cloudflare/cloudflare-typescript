// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as IndexesAPI from 'cloudflare/resources/vectorize/indexes';

export class Vectorize extends APIResource {
  indexes: IndexesAPI.Indexes = new IndexesAPI.Indexes(this._client);
}

export namespace Vectorize {
  export import Indexes = IndexesAPI.Indexes;
  export import IndexCreateResponse = IndexesAPI.IndexCreateResponse;
  export import IndexUpdateResponse = IndexesAPI.IndexUpdateResponse;
  export import IndexListResponse = IndexesAPI.IndexListResponse;
  export import IndexDeleteResponse = IndexesAPI.IndexDeleteResponse;
  export import IndexGetResponse = IndexesAPI.IndexGetResponse;
  export import IndexInsertResponse = IndexesAPI.IndexInsertResponse;
  export import IndexQueryResponse = IndexesAPI.IndexQueryResponse;
  export import IndexUpsertResponse = IndexesAPI.IndexUpsertResponse;
  export import IndexCreateParams = IndexesAPI.IndexCreateParams;
  export import IndexUpdateParams = IndexesAPI.IndexUpdateParams;
  export import IndexInsertParams = IndexesAPI.IndexInsertParams;
  export import IndexQueryParams = IndexesAPI.IndexQueryParams;
  export import IndexUpsertParams = IndexesAPI.IndexUpsertParams;
}
