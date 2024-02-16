// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as TotalTLSAPI from 'cloudflare/resources/acms/total-tls';

export class Acms extends APIResource {
  totalTLS: TotalTLSAPI.TotalTLS = new TotalTLSAPI.TotalTLS(this._client);
}

export namespace Acms {
  export import TotalTLS = TotalTLSAPI.TotalTLS;
  export import TotalTLSUpdateResponse = TotalTLSAPI.TotalTLSUpdateResponse;
  export import TotalTLSGetResponse = TotalTLSAPI.TotalTLSGetResponse;
  export import TotalTLSUpdateParams = TotalTLSAPI.TotalTLSUpdateParams;
}
