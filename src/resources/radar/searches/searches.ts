// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as GlobalsAPI from 'cloudflare/resources/radar/searches/globals';

export class Searches extends APIResource {
  globals: GlobalsAPI.Globals = new GlobalsAPI.Globals(this._client);
}

export namespace Searches {
  export import Globals = GlobalsAPI.Globals;
  export import GlobalListResponse = GlobalsAPI.GlobalListResponse;
  export import GlobalListParams = GlobalsAPI.GlobalListParams;
}
