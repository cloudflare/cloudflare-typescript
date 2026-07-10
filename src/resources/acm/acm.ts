// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CustomTrustStoreAPI from './custom-trust-store';
import {
  BaseCustomTrustStore,
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
  BaseTotalTLS,
  TotalTLS,
  TotalTLSEditParams,
  TotalTLSEditResponse,
  TotalTLSGetParams,
  TotalTLSGetResponse,
  TotalTLSUpdateParams,
  TotalTLSUpdateResponse,
} from './total-tls';

export class BaseACM extends APIResource {
  static override readonly _key: readonly ['acm'] = Object.freeze(['acm'] as const);
}
export class ACM extends BaseACM {
  totalTLS: TotalTLSAPI.TotalTLS = new TotalTLSAPI.TotalTLS(this._client);
  customTrustStore: CustomTrustStoreAPI.CustomTrustStore = new CustomTrustStoreAPI.CustomTrustStore(
    this._client,
  );
}

ACM.TotalTLS = TotalTLS;
ACM.BaseTotalTLS = BaseTotalTLS;
ACM.BaseCustomTrustStore = BaseCustomTrustStore;

export declare namespace ACM {
  export {
    TotalTLS as TotalTLS,
    BaseTotalTLS as BaseTotalTLS,
    type TotalTLSUpdateResponse as TotalTLSUpdateResponse,
    type TotalTLSEditResponse as TotalTLSEditResponse,
    type TotalTLSGetResponse as TotalTLSGetResponse,
    type TotalTLSUpdateParams as TotalTLSUpdateParams,
    type TotalTLSEditParams as TotalTLSEditParams,
    type TotalTLSGetParams as TotalTLSGetParams,
  };

  export {
    type CustomTrustStore as CustomTrustStore,
    BaseCustomTrustStore as BaseCustomTrustStore,
    type CustomTrustStoreDeleteResponse as CustomTrustStoreDeleteResponse,
    type CustomTrustStoresV4PagePaginationArray as CustomTrustStoresV4PagePaginationArray,
    type CustomTrustStoreCreateParams as CustomTrustStoreCreateParams,
    type CustomTrustStoreListParams as CustomTrustStoreListParams,
    type CustomTrustStoreDeleteParams as CustomTrustStoreDeleteParams,
    type CustomTrustStoreGetParams as CustomTrustStoreGetParams,
  };
}
