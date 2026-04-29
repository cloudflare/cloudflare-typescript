// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as QuotaAPI from './quota';
import { Quota } from './quota';
import * as StoresAPI from './stores/stores';
import { Stores } from './stores/stores';

export class SecretsStore extends APIResource {
  stores: StoresAPI.Stores = new StoresAPI.Stores(this._client);
  quota: QuotaAPI.Quota = new QuotaAPI.Quota(this._client);
}

SecretsStore.Stores = Stores;
SecretsStore.Quota = Quota;

export declare namespace SecretsStore {
  export { Stores as Stores };

  export { Quota as Quota };
}
