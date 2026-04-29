// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as CustomTrustStoreAPI from './custom-trust-store';
import { CustomTrustStore } from './custom-trust-store';
import * as TotalTLSAPI from './total-tls';
import { TotalTLS } from './total-tls';

export class ACM extends APIResource {
  totalTLS: TotalTLSAPI.TotalTLS = new TotalTLSAPI.TotalTLS(this._client);
  customTrustStore: CustomTrustStoreAPI.CustomTrustStore = new CustomTrustStoreAPI.CustomTrustStore(
    this._client,
  );
}

ACM.TotalTLS = TotalTLS;
ACM.CustomTrustStore = CustomTrustStore;

export declare namespace ACM {
  export { TotalTLS as TotalTLS };

  export { CustomTrustStore as CustomTrustStore };
}
