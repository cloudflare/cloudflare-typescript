// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as BGPPrefixesAPI from 'cloudflare/resources/addressing/prefixes/bgp-prefixes';
import * as BindingsAPI from 'cloudflare/resources/addressing/prefixes/bindings';

export class Prefixes extends APIResource {
  bgpPrefixes: BGPPrefixesAPI.BGPPrefixes = new BGPPrefixesAPI.BGPPrefixes(this._client);
  bindings: BindingsAPI.Bindings = new BindingsAPI.Bindings(this._client);
}

export namespace Prefixes {
  export import BGPPrefixes = BGPPrefixesAPI.BGPPrefixes;
  export import BGPPrefixUpdateResponse = BGPPrefixesAPI.BGPPrefixUpdateResponse;
  export import BGPPrefixListResponse = BGPPrefixesAPI.BGPPrefixListResponse;
  export import BGPPrefixGetResponse = BGPPrefixesAPI.BGPPrefixGetResponse;
  export import BGPPrefixUpdateParams = BGPPrefixesAPI.BGPPrefixUpdateParams;
  export import Bindings = BindingsAPI.Bindings;
  export import BindingCreateResponse = BindingsAPI.BindingCreateResponse;
  export import BindingListResponse = BindingsAPI.BindingListResponse;
  export import BindingDeleteResponse = BindingsAPI.BindingDeleteResponse;
  export import BindingGetResponse = BindingsAPI.BindingGetResponse;
  export import BindingCreateParams = BindingsAPI.BindingCreateParams;
}
