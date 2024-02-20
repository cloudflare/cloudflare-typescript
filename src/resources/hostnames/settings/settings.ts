// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as TLSAPI from 'cloudflare/resources/hostnames/settings/tls';

export class Settings extends APIResource {
  tls: TLSAPI.TLS = new TLSAPI.TLS(this._client);
}

export namespace Settings {
  export import TLS = TLSAPI.TLS;
  export import TLSDeleteResponse = TLSAPI.TLSDeleteResponse;
  export import TLSGetResponse = TLSAPI.TLSGetResponse;
  export import TLSReplaceResponse = TLSAPI.TLSReplaceResponse;
  export import TLSReplaceParams = TLSAPI.TLSReplaceParams;
}
