// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import {
  CursorPaginationAfter,
  type CursorPaginationAfterParams,
  PagePromise,
} from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseCategories extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'resourceLibrary', 'categories'] = Object.freeze([
    'zeroTrust',
    'resourceLibrary',
    'categories',
  ] as const);

  /**
   * List the categories available for classifying applications, ordered by name.
   * Results are paginated by `offset` or `cursor`.
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
  ): PagePromise<CategoryListResponsesCursorPaginationAfter, CategoryListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/resource-library/categories`,
      CursorPaginationAfter<CategoryListResponse>,
      { query, ...options },
    );
  }

  /**
   * Retrieve an application category by its numeric ID.
   *
   * @example
   * ```ts
   * const category =
   *   await client.zeroTrust.resourceLibrary.categories.get(
   *     12,
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  get(id: number, params: CategoryGetParams, options?: RequestOptions): APIPromise<CategoryGetResponse> {
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

export type CategoryListResponsesCursorPaginationAfter = CursorPaginationAfter<CategoryListResponse>;

export interface CategoryListResponse {
  /**
   * Numeric identifier for an application category.
   */
  id: number;

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
   * Numeric identifier for an application category.
   */
  id: number;

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

export interface CategoryListParams extends CursorPaginationAfterParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;

  /**
   * Query param: Number of results to return. Defaults to 25; values are clamped to
   * 1–250.
   */
  limit?: number;

  /**
   * Query param: Number of results to skip. Defaults to 0; negative values are
   * clamped to 0. Ignored when `cursor` is provided.
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
    type CategoryListResponsesCursorPaginationAfter as CategoryListResponsesCursorPaginationAfter,
    type CategoryListParams as CategoryListParams,
    type CategoryGetParams as CategoryGetParams,
  };
}
