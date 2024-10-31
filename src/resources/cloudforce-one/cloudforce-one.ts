// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as RequestsAPI from './requests/requests';
import {
  RequestConstantsResponse,
  RequestCreateParams,
  RequestCreateResponse,
  RequestDeleteResponse,
  RequestGetResponse,
  RequestListParams,
  RequestListResponse,
  RequestListResponsesV4PagePaginationArray,
  RequestQuotaResponse,
  RequestTypesResponse,
  RequestUpdateParams,
  RequestUpdateResponse,
  Requests,
} from './requests/requests';

export class CloudforceOne extends APIResource {
  requests: RequestsAPI.Requests = new RequestsAPI.Requests(this._client);
}

CloudforceOne.Requests = Requests;
CloudforceOne.RequestListResponsesV4PagePaginationArray = RequestListResponsesV4PagePaginationArray;

export declare namespace CloudforceOne {
  export {
    Requests as Requests,
    type RequestCreateResponse as RequestCreateResponse,
    type RequestUpdateResponse as RequestUpdateResponse,
    type RequestListResponse as RequestListResponse,
    type RequestDeleteResponse as RequestDeleteResponse,
    type RequestConstantsResponse as RequestConstantsResponse,
    type RequestGetResponse as RequestGetResponse,
    type RequestQuotaResponse as RequestQuotaResponse,
    type RequestTypesResponse as RequestTypesResponse,
    RequestListResponsesV4PagePaginationArray as RequestListResponsesV4PagePaginationArray,
    type RequestCreateParams as RequestCreateParams,
    type RequestUpdateParams as RequestUpdateParams,
    type RequestListParams as RequestListParams,
  };
}
