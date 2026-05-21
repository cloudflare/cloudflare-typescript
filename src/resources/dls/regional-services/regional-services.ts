// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as PrefixBindingsAPI from './prefix-bindings';
import {
  PrefixBindingCreateParams,
  PrefixBindingCreateResponse,
  PrefixBindingDeleteParams,
  PrefixBindingDeleteResponse,
  PrefixBindingEditParams,
  PrefixBindingEditResponse,
  PrefixBindingGetParams,
  PrefixBindingGetResponse,
  PrefixBindingListParams,
  PrefixBindingListResponse,
  PrefixBindingListResponsesCursorPagination,
  PrefixBindings,
} from './prefix-bindings';

export class RegionalServices extends APIResource {
  prefixBindings: PrefixBindingsAPI.PrefixBindings = new PrefixBindingsAPI.PrefixBindings(this._client);
}

RegionalServices.PrefixBindings = PrefixBindings;
RegionalServices.PrefixBindingListResponsesCursorPagination = PrefixBindingListResponsesCursorPagination;

export declare namespace RegionalServices {
  export {
    PrefixBindings as PrefixBindings,
    type PrefixBindingCreateResponse as PrefixBindingCreateResponse,
    type PrefixBindingListResponse as PrefixBindingListResponse,
    type PrefixBindingDeleteResponse as PrefixBindingDeleteResponse,
    type PrefixBindingEditResponse as PrefixBindingEditResponse,
    type PrefixBindingGetResponse as PrefixBindingGetResponse,
    PrefixBindingListResponsesCursorPagination as PrefixBindingListResponsesCursorPagination,
    type PrefixBindingCreateParams as PrefixBindingCreateParams,
    type PrefixBindingListParams as PrefixBindingListParams,
    type PrefixBindingDeleteParams as PrefixBindingDeleteParams,
    type PrefixBindingEditParams as PrefixBindingEditParams,
    type PrefixBindingGetParams as PrefixBindingGetParams,
  };
}
