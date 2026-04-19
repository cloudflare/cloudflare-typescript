// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as CustomTrustStoreAPI from './custom-trust-store';
import {
  CustomTrustStore,
  CustomTrustStoreCreateParams,
  CustomTrustStoreDeleteParams,
  CustomTrustStoreDeleteResponse,
  CustomTrustStoreGetParams,
  CustomTrustStoreListParams,
  CustomTrustStoresV4PagePaginationArray,
} from './custom-trust-store';
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
  customTrustStore: CustomTrustStoreAPI.CustomTrustStore = new CustomTrustStoreAPI.CustomTrustStore(
    this._client,
  );
}

ACM.TotalTLS = TotalTLS;
ACM.CustomTrustStoresV4PagePaginationArray = CustomTrustStoresV4PagePaginationArray;

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

  export {
    type CustomTrustStore as CustomTrustStore,
    type CustomTrustStoreDeleteResponse as CustomTrustStoreDeleteResponse,
    CustomTrustStoresV4PagePaginationArray as CustomTrustStoresV4PagePaginationArray,
    type CustomTrustStoreCreateParams as CustomTrustStoreCreateParams,
    type CustomTrustStoreListParams as CustomTrustStoreListParams,
    type CustomTrustStoreDeleteParams as CustomTrustStoreDeleteParams,
    type CustomTrustStoreGetParams as CustomTrustStoreGetParams,
  };
}
