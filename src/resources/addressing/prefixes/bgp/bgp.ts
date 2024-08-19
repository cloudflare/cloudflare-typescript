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
  export import ServiceBinding = BindingsAPI.ServiceBinding;
  export import BindingDeleteResponse = BindingsAPI.BindingDeleteResponse;
  export import ServiceBindingsSinglePage = BindingsAPI.ServiceBindingsSinglePage;
  export import BindingCreateParams = BindingsAPI.BindingCreateParams;
  export import BindingListParams = BindingsAPI.BindingListParams;
  export import BindingDeleteParams = BindingsAPI.BindingDeleteParams;
  export import BindingGetParams = BindingsAPI.BindingGetParams;
  export import Prefixes = PrefixesAPI.Prefixes;
  export import BGPPrefix = PrefixesAPI.BGPPrefix;
  export import BGPPrefixesSinglePage = PrefixesAPI.BGPPrefixesSinglePage;
  export import PrefixListParams = PrefixesAPI.PrefixListParams;
  export import PrefixEditParams = PrefixesAPI.PrefixEditParams;
  export import PrefixGetParams = PrefixesAPI.PrefixGetParams;
  export import Statuses = StatusesAPI.Statuses;
  export import StatusEditResponse = StatusesAPI.StatusEditResponse;
  export import StatusGetResponse = StatusesAPI.StatusGetResponse;
  export import StatusEditParams = StatusesAPI.StatusEditParams;
  export import StatusGetParams = StatusesAPI.StatusGetParams;
}
