// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseCategories extends APIResource {
  static override readonly _key: readonly ['cloudforceOne', 'threatEvents', 'tags', 'categories'] =
    Object.freeze(['cloudforceOne', 'threatEvents', 'tags', 'categories'] as const);

  /**
   * Creates a new Source-of-Truth tag category for an account.
   *
   * @example
   * ```ts
   * const category =
   *   await client.cloudforceOne.threatEvents.tags.categories.create(
   *     { account_id: 'account_id', name: 'Actor' },
   *   );
   * ```
   */
  create(params: CategoryCreateParams, options?: RequestOptions): APIPromise<CategoryCreateResponse> {
    const { account_id, ...body } = params;
    return this._client.post(path`/accounts/${account_id}/cloudforce-one/events/tags/categories/create`, {
      body,
      ...options,
    });
  }

  /**
   * Returns all Source-of-Truth tag categories for an account.
   *
   * @example
   * ```ts
   * const categories =
   *   await client.cloudforceOne.threatEvents.tags.categories.list(
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  list(params: CategoryListParams, options?: RequestOptions): APIPromise<CategoryListResponse> {
    const { account_id, ...query } = params;
    return this._client.get(path`/accounts/${account_id}/cloudforce-one/events/tags/categories`, {
      query,
      ...options,
    });
  }

  /**
   * Deletes a Source-of-Truth tag category by UUID.
   *
   * @example
   * ```ts
   * const category =
   *   await client.cloudforceOne.threatEvents.tags.categories.delete(
   *     'category_uuid',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  delete(
    categoryUUID: string,
    params: CategoryDeleteParams,
    options?: RequestOptions,
  ): APIPromise<CategoryDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(
      path`/accounts/${account_id}/cloudforce-one/events/tags/categories/${categoryUUID}`,
      options,
    );
  }

  /**
   * Updates a Source-of-Truth tag category by UUID.
   *
   * @example
   * ```ts
   * const response =
   *   await client.cloudforceOne.threatEvents.tags.categories.edit(
   *     'category_uuid',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  edit(
    categoryUUID: string,
    params: CategoryEditParams,
    options?: RequestOptions,
  ): APIPromise<CategoryEditResponse> {
    const { account_id, ...body } = params;
    return this._client.patch(
      path`/accounts/${account_id}/cloudforce-one/events/tags/categories/${categoryUUID}`,
      { body, ...options },
    );
  }
}
export class Categories extends BaseCategories {}

export interface CategoryCreateResponse {
  name: string;

  uuid: string;

  createdAt?: string;

  description?: string;

  updatedAt?: string;
}

export interface CategoryListResponse {
  categories: Array<CategoryListResponse.Category>;
}

export namespace CategoryListResponse {
  export interface Category {
    name: string;

    uuid: string;

    createdAt?: string;

    description?: string;

    updatedAt?: string;
  }
}

export interface CategoryDeleteResponse {
  uuid: string;
}

export interface CategoryEditResponse {
  name: string;

  uuid: string;

  createdAt?: string;

  description?: string;

  updatedAt?: string;
}

export interface CategoryCreateParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;

  /**
   * Body param
   */
  name: string;

  /**
   * Body param
   */
  description?: string;
}

export interface CategoryListParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;

  /**
   * Query param
   */
  search?: string;
}

export interface CategoryDeleteParams {
  /**
   * Account ID.
   */
  account_id: string;
}

export interface CategoryEditParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;

  /**
   * Body param
   */
  description?: string;

  /**
   * Body param
   */
  name?: string;
}

export declare namespace Categories {
  export {
    type CategoryCreateResponse as CategoryCreateResponse,
    type CategoryListResponse as CategoryListResponse,
    type CategoryDeleteResponse as CategoryDeleteResponse,
    type CategoryEditResponse as CategoryEditResponse,
    type CategoryCreateParams as CategoryCreateParams,
    type CategoryListParams as CategoryListParams,
    type CategoryDeleteParams as CategoryDeleteParams,
    type CategoryEditParams as CategoryEditParams,
  };
}
