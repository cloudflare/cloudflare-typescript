// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as ListsAPI from 'cloudflare/resources/rules/lists/lists';

export class Rules extends APIResource {
  lists: ListsAPI.Lists = new ListsAPI.Lists(this._client);
}

export namespace Rules {
  export import Lists = ListsAPI.Lists;
  export import Hostname = ListsAPI.Hostname;
  export import List = ListsAPI.List;
  export import Redirect = ListsAPI.Redirect;
  export import UnnamedSchemaRefE706d5e8367564544e2991af82ebb07a = ListsAPI.UnnamedSchemaRefE706d5e8367564544e2991af82ebb07a;
  export import ListDeleteResponse = ListsAPI.ListDeleteResponse;
  export import ListsSinglePage = ListsAPI.ListsSinglePage;
  export import ListCreateParams = ListsAPI.ListCreateParams;
  export import ListUpdateParams = ListsAPI.ListUpdateParams;
  export import ListListParams = ListsAPI.ListListParams;
  export import ListDeleteParams = ListsAPI.ListDeleteParams;
  export import ListGetParams = ListsAPI.ListGetParams;
}
