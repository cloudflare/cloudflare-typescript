// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CategoriesAPI from 'cloudflare/resources/gateways/categories';

export class Categories extends APIResource {
  /**
   * Fetches a list of all categories.
   */
  zeroTrustGatewayCategoriesListCategories(
    accountId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CategoryZeroTrustGatewayCategoriesListCategoriesResponse | null> {
    return (
      this._client.get(`/accounts/${accountId}/gateway/categories`, options) as Core.APIPromise<{
        result: CategoryZeroTrustGatewayCategoriesListCategoriesResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type CategoryZeroTrustGatewayCategoriesListCategoriesResponse =
  Array<CategoryZeroTrustGatewayCategoriesListCategoriesResponse.CategoryZeroTrustGatewayCategoriesListCategoriesResponseItem>;

export namespace CategoryZeroTrustGatewayCategoriesListCategoriesResponse {
  export interface CategoryZeroTrustGatewayCategoriesListCategoriesResponseItem {
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
    subcategories?: Array<CategoryZeroTrustGatewayCategoriesListCategoriesResponseItem.Subcategory>;
  }

  export namespace CategoryZeroTrustGatewayCategoriesListCategoriesResponseItem {
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
}

export namespace Categories {
  export import CategoryZeroTrustGatewayCategoriesListCategoriesResponse = CategoriesAPI.CategoryZeroTrustGatewayCategoriesListCategoriesResponse;
}
