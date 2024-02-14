// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as BgpPrefixesAPI from 'cloudflare/resources/addressing/prefixes/bgp-prefixes';
import * as BindingsAPI from 'cloudflare/resources/addressing/prefixes/bindings';

export class Prefixes extends APIResource {
  bgpPrefixes: BgpPrefixesAPI.BgpPrefixes = new BgpPrefixesAPI.BgpPrefixes(this._client);
  bindings: BindingsAPI.Bindings = new BindingsAPI.Bindings(this._client);
}

export namespace Prefixes {
  export import BgpPrefixes = BgpPrefixesAPI.BgpPrefixes;
  export import BgpPrefixRetrieveResponse = BgpPrefixesAPI.BgpPrefixRetrieveResponse;
  export import BgpPrefixUpdateResponse = BgpPrefixesAPI.BgpPrefixUpdateResponse;
  export import BgpPrefixListResponse = BgpPrefixesAPI.BgpPrefixListResponse;
  export import BgpPrefixUpdateParams = BgpPrefixesAPI.BgpPrefixUpdateParams;
  export import Bindings = BindingsAPI.Bindings;
  export import BindingCreateResponse = BindingsAPI.BindingCreateResponse;
  export import BindingRetrieveResponse = BindingsAPI.BindingRetrieveResponse;
  export import BindingListResponse = BindingsAPI.BindingListResponse;
  export import BindingDeleteResponse = BindingsAPI.BindingDeleteResponse;
  export import BindingCreateParams = BindingsAPI.BindingCreateParams;
}
