// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Categories extends APIResource {
  /**
   * Fetches a list of all categories.
   */
  list(params: CategoryListParams, options?: RequestOptions): PagePromise<CategoriesSinglePage, Category> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/gateway/categories`,
      SinglePage<Category>,
      options,
    );
  }
}

export type CategoriesSinglePage = SinglePage<Category>;

export interface Category {
  /**
   * The identifier for this category. There is only one category per ID.
   */
  id?: number;

  /**
   * True if the category is in beta and subject to change.
   */
  beta?: boolean;

  /**
   * Which account types are allowed to create policies based on this category.
   * `blocked` categories are blocked unconditionally for all accounts.
   * `removalPending` categories can be removed from policies but not added.
   * `noBlock` categories cannot be blocked.
   */
  class?: 'free' | 'premium' | 'blocked' | 'removalPending' | 'noBlock';

  /**
   * A short summary of domains in the category.
   */
  description?: string;

  /**
   * The name of the category.
   */
  name?: string;

  /**
   * All subcategories for this category.
   */
  subcategories?: Array<Category.Subcategory>;
}

export namespace Category {
  export interface Subcategory {
    /**
     * The identifier for this category. There is only one category per ID.
     */
    id?: number;

    /**
     * True if the category is in beta and subject to change.
     */
    beta?: boolean;

    /**
     * Which account types are allowed to create policies based on this category.
     * `blocked` categories are blocked unconditionally for all accounts.
     * `removalPending` categories can be removed from policies but not added.
     * `noBlock` categories cannot be blocked.
     */
    class?: 'free' | 'premium' | 'blocked' | 'removalPending' | 'noBlock';

    /**
     * A short summary of domains in the category.
     */
    description?: string;

    /**
     * The name of the category.
     */
    name?: string;
  }
}

export interface CategoryListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export declare namespace Categories {
  export {
    type Category as Category,
    type CategoriesSinglePage as CategoriesSinglePage,
    type CategoryListParams as CategoryListParams,
  };
}
