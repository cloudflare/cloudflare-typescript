// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ListsAPI from './lists/lists';
import {
  Hostname,
  ListCreateParams,
  ListDeleteParams,
  ListDeleteResponse,
  ListGetParams,
  ListListParams,
  ListUpdateParams,
  Lists,
  ListsList,
  ListsListsSinglePage,
  Redirect,
} from './lists/lists';

export class Rules extends APIResource {
  lists: ListsAPI.Lists = new ListsAPI.Lists(this._client);
}

Rules.Lists = Lists;
Rules.ListsListsSinglePage = ListsListsSinglePage;

export declare namespace Rules {
  export {
    Lists as Lists,
    type Hostname as Hostname,
    type ListsList as ListsList,
    type Redirect as Redirect,
    type ListDeleteResponse as ListDeleteResponse,
    ListsListsSinglePage as ListsListsSinglePage,
    type ListCreateParams as ListCreateParams,
    type ListUpdateParams as ListUpdateParams,
    type ListListParams as ListListParams,
    type ListDeleteParams as ListDeleteParams,
    type ListGetParams as ListGetParams,
  };
}
