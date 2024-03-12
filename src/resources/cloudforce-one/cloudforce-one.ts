// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as RequestsAPI from 'cloudflare/resources/cloudforce-one/requests/requests';

export class CloudforceOne extends APIResource {
  requests: RequestsAPI.Requests = new RequestsAPI.Requests(this._client);
}

export namespace CloudforceOne {
  export import Requests = RequestsAPI.Requests;
  export import CloudforceOneQuota = RequestsAPI.CloudforceOneQuota;
  export import CloudforceOneRequestConstants = RequestsAPI.CloudforceOneRequestConstants;
  export import CloudforceOneRequestItem = RequestsAPI.CloudforceOneRequestItem;
  export import CloudforceOneRequestListItem = RequestsAPI.CloudforceOneRequestListItem;
  export import CloudforceOneRequestTypes = RequestsAPI.CloudforceOneRequestTypes;
  export import RequestDeleteResponse = RequestsAPI.RequestDeleteResponse;
  export import CloudforceOneRequestListItemsV4PagePaginationArray = RequestsAPI.CloudforceOneRequestListItemsV4PagePaginationArray;
  export import RequestCreateParams = RequestsAPI.RequestCreateParams;
  export import RequestUpdateParams = RequestsAPI.RequestUpdateParams;
  export import RequestListParams = RequestsAPI.RequestListParams;
}
