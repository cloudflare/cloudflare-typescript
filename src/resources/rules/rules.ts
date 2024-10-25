// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ListsAPI from './lists/lists';

export class Rules extends APIResource {
  lists: ListsAPI.Lists = new ListsAPI.Lists(this._client);
}

export namespace Rules {
  export import Lists = ListsAPI.Lists;
  export type Hostname = ListsAPI.Hostname;
  export type ListsList = ListsAPI.ListsList;
  export type Redirect = ListsAPI.Redirect;
  export type ListDeleteResponse = ListsAPI.ListDeleteResponse;
  export import ListsListsSinglePage = ListsAPI.ListsListsSinglePage;
  export type ListCreateParams = ListsAPI.ListCreateParams;
  export type ListUpdateParams = ListsAPI.ListUpdateParams;
  export type ListListParams = ListsAPI.ListListParams;
  export type ListDeleteParams = ListsAPI.ListDeleteParams;
  export type ListGetParams = ListsAPI.ListGetParams;
}
