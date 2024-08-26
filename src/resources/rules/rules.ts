// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ListsAPI from './lists/lists';

export class Rules extends APIResource {
  lists: ListsAPI.Lists = new ListsAPI.Lists(this._client);
}

export namespace Rules {
  export import Lists = ListsAPI.Lists;
  export import Hostname = ListsAPI.Hostname;
  export import ListsList = ListsAPI.ListsList;
  export import Redirect = ListsAPI.Redirect;
  export import ListDeleteResponse = ListsAPI.ListDeleteResponse;
  export import ListsListsSinglePage = ListsAPI.ListsListsSinglePage;
  export import ListCreateParams = ListsAPI.ListCreateParams;
  export import ListUpdateParams = ListsAPI.ListUpdateParams;
  export import ListListParams = ListsAPI.ListListParams;
  export import ListDeleteParams = ListsAPI.ListDeleteParams;
  export import ListGetParams = ListsAPI.ListGetParams;
}
