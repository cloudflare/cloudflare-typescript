// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as RequestsAPI from 'cloudflare/resources/cloudforce-one/requests/requests';

export class CloudforceOne extends APIResource {
  requests: RequestsAPI.Requests = new RequestsAPI.Requests(this._client);
}

export namespace CloudforceOne {
  export import Requests = RequestsAPI.Requests;
  export import RequestCreateResponse = RequestsAPI.RequestCreateResponse;
  export import RequestUpdateResponse = RequestsAPI.RequestUpdateResponse;
  export import RequestListResponse = RequestsAPI.RequestListResponse;
  export import RequestDeleteResponse = RequestsAPI.RequestDeleteResponse;
  export import RequestConstantsResponse = RequestsAPI.RequestConstantsResponse;
  export import RequestGetResponse = RequestsAPI.RequestGetResponse;
  export import RequestQuotaResponse = RequestsAPI.RequestQuotaResponse;
  export import RequestTypesResponse = RequestsAPI.RequestTypesResponse;
  export import RequestListResponsesV4PagePaginationArray = RequestsAPI.RequestListResponsesV4PagePaginationArray;
  export import RequestCreateParams = RequestsAPI.RequestCreateParams;
  export import RequestUpdateParams = RequestsAPI.RequestUpdateParams;
  export import RequestListParams = RequestsAPI.RequestListParams;
}
