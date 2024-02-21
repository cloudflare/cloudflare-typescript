// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as AsesAPI from 'cloudflare/resources/radar/bgp/tops/ases';

export class Tops extends APIResource {
  ases: AsesAPI.Ases = new AsesAPI.Ases(this._client);
}

export namespace Tops {
  export import Ases = AsesAPI.Ases;
  export import AsePrefixesResponse = AsesAPI.AsePrefixesResponse;
  export import AsePrefixesParams = AsesAPI.AsePrefixesParams;
}
