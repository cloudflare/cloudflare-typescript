// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as BindingsAPI from './bindings';
import * as PrefixesAPI from './prefixes';
import * as StatusesAPI from './statuses';

export class BGP extends APIResource {
  bindings: BindingsAPI.Bindings = new BindingsAPI.Bindings(this._client);
  prefixes: PrefixesAPI.Prefixes = new PrefixesAPI.Prefixes(this._client);
  statuses: StatusesAPI.Statuses = new StatusesAPI.Statuses(this._client);
}

export namespace BGP {
  export import Bindings = BindingsAPI.Bindings;
  export type ServiceBinding = BindingsAPI.ServiceBinding;
  export type BindingDeleteResponse = BindingsAPI.BindingDeleteResponse;
  export import ServiceBindingsSinglePage = BindingsAPI.ServiceBindingsSinglePage;
  export type BindingCreateParams = BindingsAPI.BindingCreateParams;
  export type BindingListParams = BindingsAPI.BindingListParams;
  export type BindingDeleteParams = BindingsAPI.BindingDeleteParams;
  export type BindingGetParams = BindingsAPI.BindingGetParams;
  export import Prefixes = PrefixesAPI.Prefixes;
  export type BGPPrefix = PrefixesAPI.BGPPrefix;
  export import BGPPrefixesSinglePage = PrefixesAPI.BGPPrefixesSinglePage;
  export type PrefixListParams = PrefixesAPI.PrefixListParams;
  export type PrefixEditParams = PrefixesAPI.PrefixEditParams;
  export type PrefixGetParams = PrefixesAPI.PrefixGetParams;
  export import Statuses = StatusesAPI.Statuses;
  export type StatusEditResponse = StatusesAPI.StatusEditResponse;
  export type StatusGetResponse = StatusesAPI.StatusGetResponse;
  export type StatusEditParams = StatusesAPI.StatusEditParams;
  export type StatusGetParams = StatusesAPI.StatusGetParams;
}
