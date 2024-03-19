// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as TldsAPI from 'cloudflare/resources/radar/email/security/top/tlds/tlds';

export class Top extends APIResource {
  tlds: TldsAPI.Tlds = new TldsAPI.Tlds(this._client);
}

export namespace Top {
  export import Tlds = TldsAPI.Tlds;
  export import TldGetResponse = TldsAPI.TldGetResponse;
  export import TldGetParams = TldsAPI.TldGetParams;
}
