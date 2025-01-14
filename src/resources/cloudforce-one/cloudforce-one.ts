// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as RequestsAPI from './requests/requests';
import {
  Item,
  ListItem,
  ListItemsV4PagePaginationArray,
  Quota,
  RequestConstants,
  RequestCreateParams,
  RequestDeleteResponse,
  RequestListParams,
  RequestTypes,
  RequestUpdateParams,
  Requests,
} from './requests/requests';

export class CloudforceOne extends APIResource {
  requests: RequestsAPI.Requests = new RequestsAPI.Requests(this._client);
}

CloudforceOne.Requests = Requests;
CloudforceOne.ListItemsV4PagePaginationArray = ListItemsV4PagePaginationArray;

export declare namespace CloudforceOne {
  export {
    Requests as Requests,
    type Item as Item,
    type ListItem as ListItem,
    type Quota as Quota,
    type RequestConstants as RequestConstants,
    type RequestTypes as RequestTypes,
    type RequestDeleteResponse as RequestDeleteResponse,
    ListItemsV4PagePaginationArray as ListItemsV4PagePaginationArray,
    type RequestCreateParams as RequestCreateParams,
    type RequestUpdateParams as RequestUpdateParams,
    type RequestListParams as RequestListParams,
  };
}
