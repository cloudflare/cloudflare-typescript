// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as BindingsAPI from './bindings';
import {
  BindingCreateParams,
  BindingDeleteParams,
  BindingDeleteResponse,
  BindingGetParams,
  BindingListParams,
  Bindings,
  ServiceBinding,
  ServiceBindingsSinglePage,
} from './bindings';
import * as PrefixesAPI from './prefixes';
import {
  BGPPrefix,
  BGPPrefixesSinglePage,
  PrefixCreateParams,
  PrefixEditParams,
  PrefixGetParams,
  PrefixListParams,
  Prefixes,
} from './prefixes';
import * as StatusesAPI from './statuses';
import {
  StatusEditParams,
  StatusEditResponse,
  StatusGetParams,
  StatusGetResponse,
  Statuses,
} from './statuses';

export class BGP extends APIResource {
  bindings: BindingsAPI.Bindings = new BindingsAPI.Bindings(this._client);
  prefixes: PrefixesAPI.Prefixes = new PrefixesAPI.Prefixes(this._client);
  statuses: StatusesAPI.Statuses = new StatusesAPI.Statuses(this._client);
}

BGP.Bindings = Bindings;
BGP.ServiceBindingsSinglePage = ServiceBindingsSinglePage;
BGP.Prefixes = Prefixes;
BGP.BGPPrefixesSinglePage = BGPPrefixesSinglePage;
BGP.Statuses = Statuses;

export declare namespace BGP {
  export {
    Bindings as Bindings,
    type ServiceBinding as ServiceBinding,
    type BindingDeleteResponse as BindingDeleteResponse,
    ServiceBindingsSinglePage as ServiceBindingsSinglePage,
    type BindingCreateParams as BindingCreateParams,
    type BindingListParams as BindingListParams,
    type BindingDeleteParams as BindingDeleteParams,
    type BindingGetParams as BindingGetParams,
  };

  export {
    Prefixes as Prefixes,
    type BGPPrefix as BGPPrefix,
    BGPPrefixesSinglePage as BGPPrefixesSinglePage,
    type PrefixCreateParams as PrefixCreateParams,
    type PrefixListParams as PrefixListParams,
    type PrefixEditParams as PrefixEditParams,
    type PrefixGetParams as PrefixGetParams,
  };

  export {
    Statuses as Statuses,
    type StatusEditResponse as StatusEditResponse,
    type StatusGetResponse as StatusGetResponse,
    type StatusEditParams as StatusEditParams,
    type StatusGetParams as StatusGetParams,
  };
}
