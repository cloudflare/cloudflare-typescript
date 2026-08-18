// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseCategories extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'resourceLibrary', 'categories'] = Object.freeze([
    'zeroTrust',
    'resourceLibrary',
    'categories',
  ] as const);

  /**
   * List application categories.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const categoryListResponse of client.zeroTrust.resourceLibrary.categories.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: CategoryListParams,
    options?: RequestOptions,
  ): PagePromise<CategoryListResponsesSinglePage, CategoryListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/resource-library/categories`,
      SinglePage<CategoryListResponse>,
      { query, ...options },
    );
  }

  /**
   * Get application category by ID.
   *
   * @example
   * ```ts
   * const category =
   *   await client.zeroTrust.resourceLibrary.categories.get(
   *     '0b63249c-95bf-4cc0-a7cc-d7faaaf1dac0',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  get(id: string, params: CategoryGetParams, options?: RequestOptions): APIPromise<CategoryGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/resource-library/categories/${id}`,
        options,
      ) as APIPromise<{ result: CategoryGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Categories extends BaseCategories {}

export type CategoryListResponsesSinglePage = SinglePage<CategoryListResponse>;

export interface CategoryListResponse {
  /**
   * Returns the category ID.
   */
  id: string;

  /**
   * Returns the category creation time.
   */
  created_at: string;

  /**
   * Returns the category description.
   */
  description: string;

  /**
   * Returns the category name.
   */
  name: string;
}

export interface CategoryGetResponse {
  /**
   * Returns the category ID.
   */
  id: string;

  /**
   * Returns the category creation time.
   */
  created_at: string;

  /**
   * Returns the category description.
   */
  description: string;

  /**
   * Returns the category name.
   */
  name: string;
}

export interface CategoryListParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;

  /**
   * Query param: Limit of number of results to return.
   */
  limit?: number;

  /**
   * Query param: Offset of results to return.
   */
  offset?: number;
}

export interface CategoryGetParams {
  /**
   * Account ID.
   */
  account_id: string;
}

export declare namespace Categories {
  export {
    type CategoryListResponse as CategoryListResponse,
    type CategoryGetResponse as CategoryGetResponse,
    type CategoryListResponsesSinglePage as CategoryListResponsesSinglePage,
    type CategoryListParams as CategoryListParams,
    type CategoryGetParams as CategoryGetParams,
  };
}
