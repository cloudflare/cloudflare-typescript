// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import {
  PagePromise,
  SinglePage,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Secrets extends APIResource {
  /**
   * Creates a secret in the account
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const secretCreateResponse of client.secretsStore.stores.secrets.create(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   {
   *     account_id: '985e105f4ecef8ad9ca31a8372d0c353',
   *     body: [
   *       {
   *         name: 'MY_API_KEY',
   *         scopes: ['workers', 'ai_gateway'],
   *         value: 'api-token-secret-123',
   *       },
   *     ],
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  create(
    storeID: string,
    params: SecretCreateParams,
    options?: RequestOptions,
  ): PagePromise<SecretCreateResponsesSinglePage, SecretCreateResponse> {
    const { account_id, body } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/secrets_store/stores/${storeID}/secrets`,
      SinglePage<SecretCreateResponse>,
      { body: body, method: 'post', ...options },
    );
  }

  /**
   * Lists all store secrets
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const secretListResponse of client.secretsStore.stores.secrets.list(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   { account_id: '985e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    storeID: string,
    params: SecretListParams,
    options?: RequestOptions,
  ): PagePromise<SecretListResponsesV4PagePaginationArray, SecretListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/secrets_store/stores/${storeID}/secrets`,
      V4PagePaginationArray<SecretListResponse>,
      { query, ...options },
    );
  }

  /**
   * Deletes a single secret
   *
   * @example
   * ```ts
   * const secret =
   *   await client.secretsStore.stores.secrets.delete(
   *     '3fd85f74b32742f1bff64a85009dda07',
   *     {
   *       account_id: '985e105f4ecef8ad9ca31a8372d0c353',
   *       store_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     },
   *   );
   * ```
   */
  delete(
    secretID: string,
    params: SecretDeleteParams,
    options?: RequestOptions,
  ): APIPromise<SecretDeleteResponse> {
    const { account_id, store_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/secrets_store/stores/${store_id}/secrets/${secretID}`,
        options,
      ) as APIPromise<{ result: SecretDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes one or more secrets
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const secretBulkDeleteResponse of client.secretsStore.stores.secrets.bulkDelete(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   { account_id: '985e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  bulkDelete(
    storeID: string,
    params: SecretBulkDeleteParams,
    options?: RequestOptions,
  ): PagePromise<SecretBulkDeleteResponsesSinglePage, SecretBulkDeleteResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/secrets_store/stores/${storeID}/secrets`,
      SinglePage<SecretBulkDeleteResponse>,
      { method: 'delete', ...options },
    );
  }

  /**
   * Duplicates the secret, keeping the value
   *
   * @example
   * ```ts
   * const response =
   *   await client.secretsStore.stores.secrets.duplicate(
   *     '3fd85f74b32742f1bff64a85009dda07',
   *     {
   *       account_id: '985e105f4ecef8ad9ca31a8372d0c353',
   *       store_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       name: 'MY_API_KEY',
   *       scopes: ['workers', 'ai_gateway'],
   *     },
   *   );
   * ```
   */
  duplicate(
    secretID: string,
    params: SecretDuplicateParams,
    options?: RequestOptions,
  ): APIPromise<SecretDuplicateResponse> {
    const { account_id, store_id, ...body } = params;
    return (
      this._client.post(
        path`/accounts/${account_id}/secrets_store/stores/${store_id}/secrets/${secretID}/duplicate`,
        { body, ...options },
      ) as APIPromise<{ result: SecretDuplicateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a single secret
   *
   * @example
   * ```ts
   * const response =
   *   await client.secretsStore.stores.secrets.edit(
   *     '3fd85f74b32742f1bff64a85009dda07',
   *     {
   *       account_id: '985e105f4ecef8ad9ca31a8372d0c353',
   *       store_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     },
   *   );
   * ```
   */
  edit(secretID: string, params: SecretEditParams, options?: RequestOptions): APIPromise<SecretEditResponse> {
    const { account_id, store_id, ...body } = params;
    return (
      this._client.patch(path`/accounts/${account_id}/secrets_store/stores/${store_id}/secrets/${secretID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: SecretEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns details of a single secret
   *
   * @example
   * ```ts
   * const secret = await client.secretsStore.stores.secrets.get(
   *   '3fd85f74b32742f1bff64a85009dda07',
   *   {
   *     account_id: '985e105f4ecef8ad9ca31a8372d0c353',
   *     store_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   },
   * );
   * ```
   */
  get(secretID: string, params: SecretGetParams, options?: RequestOptions): APIPromise<SecretGetResponse> {
    const { account_id, store_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/secrets_store/stores/${store_id}/secrets/${secretID}`,
        options,
      ) as APIPromise<{ result: SecretGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type SecretCreateResponsesSinglePage = SinglePage<SecretCreateResponse>;

export type SecretListResponsesV4PagePaginationArray = V4PagePaginationArray<SecretListResponse>;

export type SecretBulkDeleteResponsesSinglePage = SinglePage<SecretBulkDeleteResponse>;

export interface SecretCreateResponse {
  /**
   * Secret identifier tag.
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
   * The name of the secret
   */
  name: string;

  status: 'pending' | 'active' | 'deleted';

  /**
   * Store Identifier
   */
  store_id: string;

  /**
   * Freeform text describing the secret
   */
  comment?: string;
}

export interface SecretListResponse {
  /**
   * Secret identifier tag.
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
   * The name of the secret
   */
  name: string;

  status: 'pending' | 'active' | 'deleted';

  /**
   * Store Identifier
   */
  store_id: string;

  /**
   * Freeform text describing the secret
   */
  comment?: string;
}

export interface SecretDeleteResponse {
  /**
   * Secret identifier tag.
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
   * The name of the secret
   */
  name: string;

  status: 'pending' | 'active' | 'deleted';

  /**
   * Store Identifier
   */
  store_id: string;

  /**
   * Freeform text describing the secret
   */
  comment?: string;
}

export interface SecretBulkDeleteResponse {
  /**
   * Secret identifier tag.
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
   * The name of the secret
   */
  name: string;

  status: 'pending' | 'active' | 'deleted';

  /**
   * Store Identifier
   */
  store_id: string;

  /**
   * Freeform text describing the secret
   */
  comment?: string;
}

export interface SecretDuplicateResponse {
  /**
   * Secret identifier tag.
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
   * The name of the secret
   */
  name: string;

  status: 'pending' | 'active' | 'deleted';

  /**
   * Store Identifier
   */
  store_id: string;

  /**
   * Freeform text describing the secret
   */
  comment?: string;
}

export interface SecretEditResponse {
  /**
   * Secret identifier tag.
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
   * The name of the secret
   */
  name: string;

  status: 'pending' | 'active' | 'deleted';

  /**
   * Store Identifier
   */
  store_id: string;

  /**
   * Freeform text describing the secret
   */
  comment?: string;
}

export interface SecretGetResponse {
  /**
   * Secret identifier tag.
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
   * The name of the secret
   */
  name: string;

  status: 'pending' | 'active' | 'deleted';

  /**
   * Store Identifier
   */
  store_id: string;

  /**
   * Freeform text describing the secret
   */
  comment?: string;
}

export interface SecretCreateParams {
  /**
   * Path param: Account Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  body: Array<SecretCreateParams.Body>;
}

export namespace SecretCreateParams {
  export interface Body {
    /**
     * The name of the secret
     */
    name: string;

    /**
     * The list of services that can use this secret.
     */
    scopes: Array<string>;

    /**
     * The value of the secret. Note that this is 'write only' - no API reponse will
     * provide this value, it is only used to create/modify secrets.
     */
    value: string;

    /**
     * Freeform text describing the secret
     */
    comment?: string;
  }
}

export interface SecretListParams extends V4PagePaginationArrayParams {
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

  /**
   * Query param: Only secrets with the given scopes will be returned
   */
  scopes?: Array<Array<string>>;

  /**
   * Query param: Search secrets using a filter string, filtering across name and
   * comment
   */
  search?: string;
}

export interface SecretDeleteParams {
  /**
   * Account Identifier
   */
  account_id: string;

  /**
   * Store Identifier
   */
  store_id: string;
}

export interface SecretBulkDeleteParams {
  /**
   * Account Identifier
   */
  account_id: string;
}

export interface SecretDuplicateParams {
  /**
   * Path param: Account Identifier
   */
  account_id: string;

  /**
   * Path param: Store Identifier
   */
  store_id: string;

  /**
   * Body param: The name of the secret
   */
  name: string;

  /**
   * Body param: The list of services that can use this secret.
   */
  scopes: Array<string>;

  /**
   * Body param: Freeform text describing the secret
   */
  comment?: string;
}

export interface SecretEditParams {
  /**
   * Path param: Account Identifier
   */
  account_id: string;

  /**
   * Path param: Store Identifier
   */
  store_id: string;

  /**
   * Body param: Freeform text describing the secret
   */
  comment?: string;

  /**
   * Body param: The list of services that can use this secret.
   */
  scopes?: Array<string>;
}

export interface SecretGetParams {
  /**
   * Account Identifier
   */
  account_id: string;

  /**
   * Store Identifier
   */
  store_id: string;
}

export declare namespace Secrets {
  export {
    type SecretCreateResponse as SecretCreateResponse,
    type SecretListResponse as SecretListResponse,
    type SecretDeleteResponse as SecretDeleteResponse,
    type SecretBulkDeleteResponse as SecretBulkDeleteResponse,
    type SecretDuplicateResponse as SecretDuplicateResponse,
    type SecretEditResponse as SecretEditResponse,
    type SecretGetResponse as SecretGetResponse,
    type SecretCreateResponsesSinglePage as SecretCreateResponsesSinglePage,
    type SecretListResponsesV4PagePaginationArray as SecretListResponsesV4PagePaginationArray,
    type SecretBulkDeleteResponsesSinglePage as SecretBulkDeleteResponsesSinglePage,
    type SecretCreateParams as SecretCreateParams,
    type SecretListParams as SecretListParams,
    type SecretDeleteParams as SecretDeleteParams,
    type SecretBulkDeleteParams as SecretBulkDeleteParams,
    type SecretDuplicateParams as SecretDuplicateParams,
    type SecretEditParams as SecretEditParams,
    type SecretGetParams as SecretGetParams,
  };
}
