// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as BindingsAPI from 'cloudflare/resources/addressing/prefixes/bgp/bindings';
import * as PrefixesAPI from 'cloudflare/resources/addressing/prefixes/bgp/prefixes';
import * as StatusesAPI from 'cloudflare/resources/addressing/prefixes/bgp/statuses';

export class BGP extends APIResource {
  bindings: BindingsAPI.Bindings = new BindingsAPI.Bindings(this._client);
  prefixes: PrefixesAPI.Prefixes = new PrefixesAPI.Prefixes(this._client);
  statuses: StatusesAPI.Statuses = new StatusesAPI.Statuses(this._client);
}

export namespace BGP {
  export import Bindings = BindingsAPI.Bindings;
  export import AddressingServiceBinding = BindingsAPI.AddressingServiceBinding;
  export import BindingListResponse = BindingsAPI.BindingListResponse;
  export import BindingDeleteResponse = BindingsAPI.BindingDeleteResponse;
  export import BindingCreateParams = BindingsAPI.BindingCreateParams;
  export import BindingListParams = BindingsAPI.BindingListParams;
  export import BindingDeleteParams = BindingsAPI.BindingDeleteParams;
  export import BindingGetParams = BindingsAPI.BindingGetParams;
  export import Prefixes = PrefixesAPI.Prefixes;
  export import AddressingIpamBGPPrefixes = PrefixesAPI.AddressingIpamBGPPrefixes;
  export import PrefixListResponse = PrefixesAPI.PrefixListResponse;
  export import PrefixListParams = PrefixesAPI.PrefixListParams;
  export import PrefixEditParams = PrefixesAPI.PrefixEditParams;
  export import PrefixGetParams = PrefixesAPI.PrefixGetParams;
  export import Statuses = StatusesAPI.Statuses;
  export import StatusEditResponse = StatusesAPI.StatusEditResponse;
  export import StatusGetResponse = StatusesAPI.StatusGetResponse;
  export import StatusEditParams = StatusesAPI.StatusEditParams;
  export import StatusGetParams = StatusesAPI.StatusGetParams;
}
