// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as RequestsAPI from './requests/requests';

export class CloudforceOne extends APIResource {
  requests: RequestsAPI.Requests = new RequestsAPI.Requests(this._client);
}

export namespace CloudforceOne {
  export import Requests = RequestsAPI.Requests;
  export import Item = RequestsAPI.Item;
  export import ListItem = RequestsAPI.ListItem;
  export import Quota = RequestsAPI.Quota;
  export import RequestConstants = RequestsAPI.RequestConstants;
  export import RequestTypes = RequestsAPI.RequestTypes;
  export import RequestDeleteResponse = RequestsAPI.RequestDeleteResponse;
  export import ListItemsV4PagePaginationArray = RequestsAPI.ListItemsV4PagePaginationArray;
  export import RequestCreateParams = RequestsAPI.RequestCreateParams;
  export import RequestUpdateParams = RequestsAPI.RequestUpdateParams;
  export import RequestListParams = RequestsAPI.RequestListParams;
}
