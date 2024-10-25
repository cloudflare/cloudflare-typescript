// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as RequestsAPI from './requests/requests';

export class CloudforceOne extends APIResource {
  requests: RequestsAPI.Requests = new RequestsAPI.Requests(this._client);
}

export namespace CloudforceOne {
  export import Requests = RequestsAPI.Requests;
  export type Item = RequestsAPI.Item;
  export type ListItem = RequestsAPI.ListItem;
  export type Quota = RequestsAPI.Quota;
  export type RequestConstants = RequestsAPI.RequestConstants;
  export type RequestTypes = RequestsAPI.RequestTypes;
  export type RequestDeleteResponse = RequestsAPI.RequestDeleteResponse;
  export import ListItemsV4PagePaginationArray = RequestsAPI.ListItemsV4PagePaginationArray;
  export type RequestCreateParams = RequestsAPI.RequestCreateParams;
  export type RequestUpdateParams = RequestsAPI.RequestUpdateParams;
  export type RequestListParams = RequestsAPI.RequestListParams;
}
