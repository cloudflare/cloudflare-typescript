// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as PrefixBindingsAPI from './prefix-bindings';
import {
  BasePrefixBindings,
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

export class BaseRegionalServices extends APIResource {
  static override readonly _key: readonly ['dls', 'regionalServices'] = Object.freeze([
    'dls',
    'regionalServices',
  ] as const);
}
export class RegionalServices extends BaseRegionalServices {
  prefixBindings: PrefixBindingsAPI.PrefixBindings = new PrefixBindingsAPI.PrefixBindings(this._client);
}

RegionalServices.PrefixBindings = PrefixBindings;
RegionalServices.BasePrefixBindings = BasePrefixBindings;

export declare namespace RegionalServices {
  export {
    PrefixBindings as PrefixBindings,
    BasePrefixBindings as BasePrefixBindings,
    type PrefixBindingCreateResponse as PrefixBindingCreateResponse,
    type PrefixBindingListResponse as PrefixBindingListResponse,
    type PrefixBindingDeleteResponse as PrefixBindingDeleteResponse,
    type PrefixBindingEditResponse as PrefixBindingEditResponse,
    type PrefixBindingGetResponse as PrefixBindingGetResponse,
    type PrefixBindingListResponsesCursorPagination as PrefixBindingListResponsesCursorPagination,
    type PrefixBindingCreateParams as PrefixBindingCreateParams,
    type PrefixBindingListParams as PrefixBindingListParams,
    type PrefixBindingDeleteParams as PrefixBindingDeleteParams,
    type PrefixBindingEditParams as PrefixBindingEditParams,
    type PrefixBindingGetParams as PrefixBindingGetParams,
  };
}
