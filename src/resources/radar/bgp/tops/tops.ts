// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as PrefixesAPI from 'cloudflare/resources/radar/bgp/tops/prefixes';
import * as AsesAPI from 'cloudflare/resources/radar/bgp/tops/ases/ases';

export class Tops extends APIResource {
  ases: AsesAPI.Ases = new AsesAPI.Ases(this._client);
  prefixes: PrefixesAPI.Prefixes = new PrefixesAPI.Prefixes(this._client);
}

export namespace Tops {
  export import Ases = AsesAPI.Ases;
  export import AseListResponse = AsesAPI.AseListResponse;
  export import AseListParams = AsesAPI.AseListParams;
  export import Prefixes = PrefixesAPI.Prefixes;
  export import PrefixListResponse = PrefixesAPI.PrefixListResponse;
  export import PrefixListParams = PrefixesAPI.PrefixListParams;
}
