// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { SinglePage } from '../../../pagination';

export class Categories extends APIResource {
  /**
   * List all categories.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const category of client.zeroTrust.gateway.categories.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: CategoryListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CategoriesSinglePage, Category> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/gateway/categories`,
      CategoriesSinglePage,
      options,
    );
  }
}

export class CategoriesSinglePage extends SinglePage<Category> {}

export interface Category {
  /**
   * Identify this category. Only one category per ID.
   */
  id?: number;

  /**
   * Indicate whether the category is in beta and subject to change.
   */
  beta?: boolean;

  /**
   * Specify which account types can create policies for this category. `blocked`
   * Blocks unconditionally for all accounts. `removalPending` Allows removal from
   * policies but disables addition. `noBlock` Prevents blocking.
   */
  class?: 'free' | 'premium' | 'blocked' | 'removalPending' | 'noBlock';

  /**
   * Provide a short summary of domains in the category.
   */
  description?: string;

  /**
   * Specify the category name.
   */
  name?: string;

  /**
   * Provide all subcategories for this category.
   */
  subcategories?: Array<Category.Subcategory>;
}

export namespace Category {
  export interface Subcategory {
    /**
     * Identify this category. Only one category per ID.
     */
    id?: number;

    /**
     * Indicate whether the category is in beta and subject to change.
     */
    beta?: boolean;

    /**
     * Specify which account types can create policies for this category. `blocked`
     * Blocks unconditionally for all accounts. `removalPending` Allows removal from
     * policies but disables addition. `noBlock` Prevents blocking.
     */
    class?: 'free' | 'premium' | 'blocked' | 'removalPending' | 'noBlock';

    /**
     * Provide a short summary of domains in the category.
     */
    description?: string;

    /**
     * Specify the category name.
     */
    name?: string;
  }
}

export interface CategoryListParams {
  /**
   * Provide the identifier string.
   */
  account_id: string;
}

Categories.CategoriesSinglePage = CategoriesSinglePage;

export declare namespace Categories {
  export {
    type Category as Category,
    CategoriesSinglePage as CategoriesSinglePage,
    type CategoryListParams as CategoryListParams,
  };
}
