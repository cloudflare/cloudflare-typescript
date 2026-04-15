// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SecretsAPI from './secrets';
import {
  BaseSecrets,
  SecretBulkDeleteParams,
  SecretBulkDeleteResponse,
  SecretCreateParams,
  SecretCreateResponse,
  SecretCreateResponsesSinglePage,
  SecretDeleteParams,
  SecretDeleteResponse,
  SecretDuplicateParams,
  SecretDuplicateResponse,
  SecretEditParams,
  SecretEditResponse,
  SecretGetParams,
  SecretGetResponse,
  SecretListParams,
  SecretListResponse,
  SecretListResponsesV4PagePaginationArray,
  Secrets,
} from './secrets';
import { APIPromise } from '../../../core/api-promise';
import {
  PagePromise,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseStores extends APIResource {
  static override readonly _key: readonly ['secretsStore', 'stores'] = Object.freeze([
    'secretsStore',
    'stores',
  ] as const);

  /**
   * Creates a store in the account
   *
   * @example
   * ```ts
   * const store = await client.secretsStore.stores.create({
   *   account_id: '985e105f4ecef8ad9ca31a8372d0c353',
   *   name: 'service_x_keys',
   * });
   * ```
   */
  create(params: StoreCreateParams, options?: RequestOptions): APIPromise<StoreCreateResponse> {
    const { account_id = this._client.accountID, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/secrets_store/stores`, {
        body,
        ...options,
      }) as APIPromise<{ result: StoreCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all the stores in an account
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const storeListResponse of client.secretsStore.stores.list(
   *   { account_id: '985e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: StoreListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<StoreListResponsesV4PagePaginationArray, StoreListResponse> {
    const { account_id = this._client.accountID, ...query } = params ?? {};
    return this._client.getAPIList(
      path`/accounts/${account_id}/secrets_store/stores`,
      V4PagePaginationArray<StoreListResponse>,
      { query, ...options },
    );
  }

  /**
   * Deletes a single store
   *
   * @example
   * ```ts
   * const store = await client.secretsStore.stores.delete(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   { account_id: '985e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  delete(
    storeID: string,
    params: StoreDeleteParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<StoreDeleteResponse | null> {
    const { account_id = this._client.accountID } = params ?? {};
    return (
      this._client.delete(
        path`/accounts/${account_id}/secrets_store/stores/${storeID}`,
        options,
      ) as APIPromise<{ result: StoreDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Stores extends BaseStores {
  secrets: SecretsAPI.Secrets = new SecretsAPI.Secrets(this._client);
}

export type StoreListResponsesV4PagePaginationArray = V4PagePaginationArray<StoreListResponse>;

export interface StoreCreateResponse {
  /**
   * Store Identifier
   */
  id: string;

  /**
   * Whenthe secret was created.
   */
  created: string;

  /**
   * When the secret was modified.
   */
  modified: string;

  /**
   * The name of the store
   */
  name: string;

  /**
   * Account Identifier
   */
  account_id?: string;
}

export interface StoreListResponse {
  /**
   * Store Identifier
   */
  id: string;

  /**
   * Whenthe secret was created.
   */
  created: string;

  /**
   * When the secret was modified.
   */
  modified: string;

  /**
   * The name of the store
   */
  name: string;

  /**
   * Account Identifier
   */
  account_id?: string;
}

/**
 * Result is null for delete operations.
 */
export type StoreDeleteResponse = unknown;

export interface StoreCreateParams {
  /**
   * Path param: Account Identifier
   */
  account_id?: string;

  /**
   * Body param: The name of the store
   */
  name: string;
}

export interface StoreListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Account Identifier
   */
  account_id?: string;

  /**
   * Query param: Direction to sort objects
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: Order secrets by values in the given field
   */
  order?: 'name' | 'comment' | 'created' | 'modified' | 'status';
}

export interface StoreDeleteParams {
  /**
   * Account Identifier
   */
  account_id?: string;
}

Stores.Secrets = Secrets;
Stores.BaseSecrets = BaseSecrets;

export declare namespace Stores {
  export {
    type StoreCreateResponse as StoreCreateResponse,
    type StoreListResponse as StoreListResponse,
    type StoreDeleteResponse as StoreDeleteResponse,
    type StoreListResponsesV4PagePaginationArray as StoreListResponsesV4PagePaginationArray,
    type StoreCreateParams as StoreCreateParams,
    type StoreListParams as StoreListParams,
    type StoreDeleteParams as StoreDeleteParams,
  };

  export {
    Secrets as Secrets,
    BaseSecrets as BaseSecrets,
    type SecretCreateResponse as SecretCreateResponse,
    type SecretListResponse as SecretListResponse,
    type SecretDeleteResponse as SecretDeleteResponse,
    type SecretBulkDeleteResponse as SecretBulkDeleteResponse,
    type SecretDuplicateResponse as SecretDuplicateResponse,
    type SecretEditResponse as SecretEditResponse,
    type SecretGetResponse as SecretGetResponse,
    type SecretCreateResponsesSinglePage as SecretCreateResponsesSinglePage,
    type SecretListResponsesV4PagePaginationArray as SecretListResponsesV4PagePaginationArray,
    type SecretCreateParams as SecretCreateParams,
    type SecretListParams as SecretListParams,
    type SecretDeleteParams as SecretDeleteParams,
    type SecretBulkDeleteParams as SecretBulkDeleteParams,
    type SecretDuplicateParams as SecretDuplicateParams,
    type SecretEditParams as SecretEditParams,
    type SecretGetParams as SecretGetParams,
  };
}
