// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as SecretsAPI from './secrets';
import {
  SecretBulkDeleteParams,
  SecretBulkDeleteResponse,
  SecretBulkDeleteResponsesSinglePage,
  SecretBulkdEditParams,
  SecretBulkdEditResponse,
  SecretBulkdEditResponsesSinglePage,
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
  SinglePage,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Stores extends APIResource {
  secrets: SecretsAPI.Secrets = new SecretsAPI.Secrets(this._client);

  /**
   * Creates a store in the account
   */
  create(
    params: StoreCreateParams,
    options?: RequestOptions,
  ): PagePromise<StoreCreateResponsesSinglePage, StoreCreateResponse> {
    const { account_id, body } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/secrets_store/stores`,
      SinglePage<StoreCreateResponse>,
      { body: body, method: 'post', ...options },
    );
  }

  /**
   * Lists all the stores in an account
   */
  list(
    params: StoreListParams,
    options?: RequestOptions,
  ): PagePromise<StoreListResponsesV4PagePaginationArray, StoreListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/secrets_store/stores`,
      V4PagePaginationArray<StoreListResponse>,
      { query, ...options },
    );
  }

  /**
   * Deletes a single store
   */
  delete(
    storeID: string,
    params: StoreDeleteParams,
    options?: RequestOptions,
  ): APIPromise<StoreDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/secrets_store/stores/${storeID}`,
        options,
      ) as APIPromise<{ result: StoreDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type StoreCreateResponsesSinglePage = SinglePage<StoreCreateResponse>;

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
}

export interface StoreDeleteResponse {
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
}

export interface StoreCreateParams {
  /**
   * Path param: Account Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  body: Array<StoreCreateParams.Body>;
}

export namespace StoreCreateParams {
  export interface Body {
    /**
     * The name of the store
     */
    name: string;
  }
}

export interface StoreListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Account Identifier
   */
  account_id: string;

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
  account_id: string;
}

Stores.Secrets = Secrets;

export declare namespace Stores {
  export {
    type StoreCreateResponse as StoreCreateResponse,
    type StoreListResponse as StoreListResponse,
    type StoreDeleteResponse as StoreDeleteResponse,
    type StoreCreateResponsesSinglePage as StoreCreateResponsesSinglePage,
    type StoreListResponsesV4PagePaginationArray as StoreListResponsesV4PagePaginationArray,
    type StoreCreateParams as StoreCreateParams,
    type StoreListParams as StoreListParams,
    type StoreDeleteParams as StoreDeleteParams,
  };

  export {
    Secrets as Secrets,
    type SecretCreateResponse as SecretCreateResponse,
    type SecretListResponse as SecretListResponse,
    type SecretDeleteResponse as SecretDeleteResponse,
    type SecretBulkDeleteResponse as SecretBulkDeleteResponse,
    type SecretBulkdEditResponse as SecretBulkdEditResponse,
    type SecretDuplicateResponse as SecretDuplicateResponse,
    type SecretEditResponse as SecretEditResponse,
    type SecretGetResponse as SecretGetResponse,
    type SecretCreateResponsesSinglePage as SecretCreateResponsesSinglePage,
    type SecretListResponsesV4PagePaginationArray as SecretListResponsesV4PagePaginationArray,
    type SecretBulkDeleteResponsesSinglePage as SecretBulkDeleteResponsesSinglePage,
    type SecretBulkdEditResponsesSinglePage as SecretBulkdEditResponsesSinglePage,
    type SecretCreateParams as SecretCreateParams,
    type SecretListParams as SecretListParams,
    type SecretDeleteParams as SecretDeleteParams,
    type SecretBulkDeleteParams as SecretBulkDeleteParams,
    type SecretBulkdEditParams as SecretBulkdEditParams,
    type SecretDuplicateParams as SecretDuplicateParams,
    type SecretEditParams as SecretEditParams,
    type SecretGetParams as SecretGetParams,
  };
}
