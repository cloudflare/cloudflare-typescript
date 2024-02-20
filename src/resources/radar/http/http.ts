// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as TLSVersionAPI from 'cloudflare/resources/radar/http/tls-version';

export class HTTP extends APIResource {
  tlsVersion: TLSVersionAPI.TLSVersion = new TLSVersionAPI.TLSVersion(this._client);
}

export namespace HTTP {
  export import TLSVersion = TLSVersionAPI.TLSVersion;
  export import TLSVersionListResponse = TLSVersionAPI.TLSVersionListResponse;
  export import TLSVersionListParams = TLSVersionAPI.TLSVersionListParams;
}
