// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as TotalTLSAPI from './total-tls';

export class ACM extends APIResource {
  totalTLS: TotalTLSAPI.TotalTLS = new TotalTLSAPI.TotalTLS(this._client);
}

export namespace ACM {
  export import TotalTLS = TotalTLSAPI.TotalTLS;
  export type CertificateAuthority = TotalTLSAPI.CertificateAuthority;
  export type TotalTLSCreateResponse = TotalTLSAPI.TotalTLSCreateResponse;
  export type TotalTLSGetResponse = TotalTLSAPI.TotalTLSGetResponse;
  export type TotalTLSCreateParams = TotalTLSAPI.TotalTLSCreateParams;
  export type TotalTLSGetParams = TotalTLSAPI.TotalTLSGetParams;
}
