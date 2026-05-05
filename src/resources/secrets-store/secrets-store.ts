// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as QuotaAPI from './quota';
import { BaseQuota, Quota, QuotaGetParams, QuotaGetResponse } from './quota';
import * as StoresAPI from './stores/stores';
import {
  BaseStores,
  StoreCreateParams,
  StoreCreateResponse,
  StoreDeleteParams,
  StoreDeleteResponse,
  StoreListParams,
  StoreListResponse,
  StoreListResponsesV4PagePaginationArray,
  Stores,
} from './stores/stores';

export class BaseSecretsStore extends APIResource {
  static override readonly _key: readonly ['secretsStore'] = Object.freeze(['secretsStore'] as const);
}
export class SecretsStore extends BaseSecretsStore {
  stores: StoresAPI.Stores = new StoresAPI.Stores(this._client);
  quota: QuotaAPI.Quota = new QuotaAPI.Quota(this._client);
}

SecretsStore.Stores = Stores;
SecretsStore.BaseStores = BaseStores;
SecretsStore.Quota = Quota;
SecretsStore.BaseQuota = BaseQuota;

export declare namespace SecretsStore {
  export {
    Stores as Stores,
    BaseStores as BaseStores,
    type StoreCreateResponse as StoreCreateResponse,
    type StoreListResponse as StoreListResponse,
    type StoreDeleteResponse as StoreDeleteResponse,
    type StoreListResponsesV4PagePaginationArray as StoreListResponsesV4PagePaginationArray,
    type StoreCreateParams as StoreCreateParams,
    type StoreListParams as StoreListParams,
    type StoreDeleteParams as StoreDeleteParams,
  };

  export {
    Quota as Quota,
    BaseQuota as BaseQuota,
    type QuotaGetResponse as QuotaGetResponse,
    type QuotaGetParams as QuotaGetParams,
  };
}
