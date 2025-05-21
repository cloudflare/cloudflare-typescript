// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as ListsAPI from './lists/lists';
import {
  Hostname,
  ListCreateParams,
  ListCreateResponse,
  ListDeleteParams,
  ListDeleteResponse,
  ListGetParams,
  ListGetResponse,
  ListListParams,
  ListListResponse,
  ListUpdateParams,
  ListUpdateResponse,
  Lists,
  ListsList,
  Redirect,
} from './lists/lists';

export class Rules extends APIResource {
  lists: ListsAPI.Lists = new ListsAPI.Lists(this._client);
}

Rules.Lists = Lists;

export declare namespace Rules {
  export {
    Lists as Lists,
    type Hostname as Hostname,
    type ListsList as ListsList,
    type Redirect as Redirect,
    type ListCreateResponse as ListCreateResponse,
    type ListUpdateResponse as ListUpdateResponse,
    type ListListResponse as ListListResponse,
    type ListDeleteResponse as ListDeleteResponse,
    type ListGetResponse as ListGetResponse,
    type ListCreateParams as ListCreateParams,
    type ListUpdateParams as ListUpdateParams,
    type ListListParams as ListListParams,
    type ListDeleteParams as ListDeleteParams,
    type ListGetParams as ListGetParams,
  };
}
