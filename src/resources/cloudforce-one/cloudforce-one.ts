// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as RequestsAPI from './requests/requests';
import {
  Item,
  ListItem,
  ListItemsSinglePage,
  Quota,
  RequestConstants,
  RequestCreateParams,
  RequestDeleteResponse,
  RequestListParams,
  RequestTypes,
  RequestTypesResponse,
  RequestTypesResponsesSinglePage,
  RequestUpdateParams,
  Requests,
} from './requests/requests';

export class CloudforceOne extends APIResource {
  requests: RequestsAPI.Requests = new RequestsAPI.Requests(this._client);
}

CloudforceOne.Requests = Requests;
CloudforceOne.ListItemsSinglePage = ListItemsSinglePage;
CloudforceOne.RequestTypesResponsesSinglePage = RequestTypesResponsesSinglePage;

export declare namespace CloudforceOne {
  export {
    Requests as Requests,
    type Item as Item,
    type ListItem as ListItem,
    type Quota as Quota,
    type RequestConstants as RequestConstants,
    type RequestTypes as RequestTypes,
    type RequestDeleteResponse as RequestDeleteResponse,
    type RequestTypesResponse as RequestTypesResponse,
    ListItemsSinglePage as ListItemsSinglePage,
    RequestTypesResponsesSinglePage as RequestTypesResponsesSinglePage,
    type RequestCreateParams as RequestCreateParams,
    type RequestUpdateParams as RequestUpdateParams,
    type RequestListParams as RequestListParams,
  };
}
