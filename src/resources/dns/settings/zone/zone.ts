// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as ViewsAPI from './views';
import {
  ViewCreateParams,
  ViewCreateResponse,
  ViewDeleteParams,
  ViewDeleteResponse,
  ViewEditParams,
  ViewEditResponse,
  ViewGetParams,
  ViewGetResponse,
  ViewListParams,
  ViewListResponse,
  ViewListResponsesV4PagePaginationArray,
  Views,
} from './views';

export class Zone extends APIResource {
  views: ViewsAPI.Views = new ViewsAPI.Views(this._client);
}

Zone.Views = Views;
Zone.ViewListResponsesV4PagePaginationArray = ViewListResponsesV4PagePaginationArray;

export declare namespace Zone {
  export {
    Views as Views,
    type ViewCreateResponse as ViewCreateResponse,
    type ViewListResponse as ViewListResponse,
    type ViewDeleteResponse as ViewDeleteResponse,
    type ViewEditResponse as ViewEditResponse,
    type ViewGetResponse as ViewGetResponse,
    ViewListResponsesV4PagePaginationArray as ViewListResponsesV4PagePaginationArray,
    type ViewCreateParams as ViewCreateParams,
    type ViewListParams as ViewListParams,
    type ViewDeleteParams as ViewDeleteParams,
    type ViewEditParams as ViewEditParams,
    type ViewGetParams as ViewGetParams,
  };
}
