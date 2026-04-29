// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as CustomTrustStoreAPI from './custom-trust-store';
import { BaseCustomTrustStore, CustomTrustStore } from './custom-trust-store';
import * as TotalTLSAPI from './total-tls';
import { BaseTotalTLS, TotalTLS } from './total-tls';

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
ACM.CustomTrustStore = CustomTrustStore;
ACM.BaseCustomTrustStore = BaseCustomTrustStore;

export declare namespace ACM {
  export { TotalTLS as TotalTLS, BaseTotalTLS as BaseTotalTLS };

  export { CustomTrustStore as CustomTrustStore, BaseCustomTrustStore as BaseCustomTrustStore };
}
