// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as ListsAPI from './lists/lists';
import {
  BaseLists,
  Hostname,
  ListCreateParams,
  ListCreateResponse,
  ListDeleteParams,
  ListDeleteResponse,
  ListGetParams,
  ListGetResponse,
  ListListParams,
  ListUpdateParams,
  ListUpdateResponse,
  Lists,
  ListsList,
  ListsListsSinglePage,
  Redirect,
} from './lists/lists';

export class BaseRules extends APIResource {
  static override readonly _key: readonly ['rules'] = Object.freeze(['rules'] as const);
}
export class Rules extends BaseRules {
  lists: ListsAPI.Lists = new ListsAPI.Lists(this._client);
}

Rules.Lists = Lists;
Rules.BaseLists = BaseLists;

export declare namespace Rules {
  export {
    Lists as Lists,
    BaseLists as BaseLists,
    type Hostname as Hostname,
    type ListsList as ListsList,
    type Redirect as Redirect,
    type ListCreateResponse as ListCreateResponse,
    type ListUpdateResponse as ListUpdateResponse,
    type ListDeleteResponse as ListDeleteResponse,
    type ListGetResponse as ListGetResponse,
    type ListsListsSinglePage as ListsListsSinglePage,
    type ListCreateParams as ListCreateParams,
    type ListUpdateParams as ListUpdateParams,
    type ListListParams as ListListParams,
    type ListDeleteParams as ListDeleteParams,
    type ListGetParams as ListGetParams,
  };
}
