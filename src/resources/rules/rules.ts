// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as ListsAPI from 'cloudflare/resources/rules/lists/lists';

export class Rules extends APIResource {
  lists: ListsAPI.Lists = new ListsAPI.Lists(this._client);
}

export namespace Rules {
  export import Lists = ListsAPI.Lists;
  export import ListUpdateResponse = ListsAPI.ListUpdateResponse;
  export import ListDeleteResponse = ListsAPI.ListDeleteResponse;
  export import ListGetResponse = ListsAPI.ListGetResponse;
  export import ListListsCreateAListResponse = ListsAPI.ListListsCreateAListResponse;
  export import ListListsGetListsResponse = ListsAPI.ListListsGetListsResponse;
  export import ListUpdateParams = ListsAPI.ListUpdateParams;
  export import ListListsCreateAListParams = ListsAPI.ListListsCreateAListParams;
}
