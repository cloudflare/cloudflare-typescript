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
  export import BGPPrefixListResponse = BGPPrefixesAPI.BGPPrefixListResponse;
  export import BGPPrefixEditResponse = BGPPrefixesAPI.BGPPrefixEditResponse;
  export import BGPPrefixGetResponse = BGPPrefixesAPI.BGPPrefixGetResponse;
  export import BGPPrefixListParams = BGPPrefixesAPI.BGPPrefixListParams;
  export import BGPPrefixEditParams = BGPPrefixesAPI.BGPPrefixEditParams;
  export import BGPPrefixGetParams = BGPPrefixesAPI.BGPPrefixGetParams;
  export import Bindings = BindingsAPI.Bindings;
  export import BindingCreateResponse = BindingsAPI.BindingCreateResponse;
  export import BindingListResponse = BindingsAPI.BindingListResponse;
  export import BindingDeleteResponse = BindingsAPI.BindingDeleteResponse;
  export import BindingGetResponse = BindingsAPI.BindingGetResponse;
  export import BindingCreateParams = BindingsAPI.BindingCreateParams;
  export import BindingListParams = BindingsAPI.BindingListParams;
  export import BindingDeleteParams = BindingsAPI.BindingDeleteParams;
  export import BindingGetParams = BindingsAPI.BindingGetParams;
}
