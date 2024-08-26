// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import { TotalTLS } from './total-tls';
import * as TotalTLSAPI from './total-tls';

export class ACM extends APIResource {
  totalTLS: TotalTLSAPI.TotalTLS = new TotalTLSAPI.TotalTLS(this._client);
}

export namespace ACM {
  export import TotalTLS = TotalTLSAPI.TotalTLS;
  export import CertificateAuthority = TotalTLSAPI.CertificateAuthority;
  export import TotalTLSCreateResponse = TotalTLSAPI.TotalTLSCreateResponse;
  export import TotalTLSGetResponse = TotalTLSAPI.TotalTLSGetResponse;
  export import TotalTLSCreateParams = TotalTLSAPI.TotalTLSCreateParams;
  export import TotalTLSGetParams = TotalTLSAPI.TotalTLSGetParams;
}
