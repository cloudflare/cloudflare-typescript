// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseCategories extends APIResource {
  static override readonly _key: readonly ['cloudforceOne', 'threatSignals', 'categories'] = Object.freeze([
    'cloudforceOne',
    'threatSignals',
    'categories',
  ] as const);

  /**
   * Lists the predefined categories that can be assigned to feeds.
   *
   * @example
   * ```ts
   * const categories =
   *   await client.cloudforceOne.threatSignals.categories.list({
   *     account_id: 'account_id',
   *   });
   * ```
   */
  list(params: CategoryListParams, options?: RequestOptions): APIPromise<CategoryListResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/cloudforce-one/v2/threat-signals/categories`,
        options,
      ) as APIPromise<{ result: CategoryListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Categories extends BaseCategories {}

export interface CategoryListResponse {
  categories: Array<CategoryListResponse.Category>;
}

export namespace CategoryListResponse {
  export interface Category {
    /**
     * Wire value accepted by the feed `category_id` field.
     */
    id: string;

    /**
     * Plain-language description of the category.
     */
    description: string;

    /**
     * Human-readable display label.
     */
    name: string;
  }
}

export interface CategoryListParams {
  account_id: string;
}

export declare namespace Categories {
  export { type CategoryListResponse as CategoryListResponse, type CategoryListParams as CategoryListParams };
}
