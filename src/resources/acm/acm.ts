// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as TotalTLSAPI from './total-tls';
import {
  CertificateAuthority,
  TotalTLS,
  TotalTLSEditParams,
  TotalTLSEditResponse,
  TotalTLSGetParams,
  TotalTLSGetResponse,
  TotalTLSUpdateParams,
  TotalTLSUpdateResponse,
} from './total-tls';

export class ACM extends APIResource {
  totalTLS: TotalTLSAPI.TotalTLS = new TotalTLSAPI.TotalTLS(this._client);
}

ACM.TotalTLS = TotalTLS;

export declare namespace ACM {
  export {
    TotalTLS as TotalTLS,
    type CertificateAuthority as CertificateAuthority,
    type TotalTLSUpdateResponse as TotalTLSUpdateResponse,
    type TotalTLSEditResponse as TotalTLSEditResponse,
    type TotalTLSGetResponse as TotalTLSGetResponse,
    type TotalTLSUpdateParams as TotalTLSUpdateParams,
    type TotalTLSEditParams as TotalTLSEditParams,
    type TotalTLSGetParams as TotalTLSGetParams,
  };
}
