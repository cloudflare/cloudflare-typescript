// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as ListsAPI from 'cloudflare/resources/rules/lists/lists';

export class Rules extends APIResource {
  lists: ListsAPI.Lists = new ListsAPI.Lists(this._client);
}

export namespace Rules {
  export import Lists = ListsAPI.Lists;
  export import ListCreateResponse = ListsAPI.ListCreateResponse;
  export import ListListResponse = ListsAPI.ListListResponse;
  export import ListDeleteResponse = ListsAPI.ListDeleteResponse;
  export import ListGetResponse = ListsAPI.ListGetResponse;
  export import ListReplaceResponse = ListsAPI.ListReplaceResponse;
  export import ListCreateParams = ListsAPI.ListCreateParams;
  export import ListReplaceParams = ListsAPI.ListReplaceParams;
}
