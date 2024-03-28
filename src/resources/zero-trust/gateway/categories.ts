// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as CategoriesAPI from 'cloudflare/resources/zero-trust/gateway/categories';
import { SinglePage } from 'cloudflare/pagination';

export class Categories extends APIResource {
  /**
   * Fetches a list of all categories.
   */
  list(
    params: CategoryListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ZeroTrustGatewayCategoriesSinglePage, ZeroTrustGatewayCategories> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/gateway/categories`,
      ZeroTrustGatewayCategoriesSinglePage,
      options,
    );
  }
}

export class ZeroTrustGatewayCategoriesSinglePage extends SinglePage<ZeroTrustGatewayCategories> {}

export interface ZeroTrustGatewayCategories {
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
  subcategories?: Array<ZeroTrustGatewayCategories.Subcategory>;
}

export namespace ZeroTrustGatewayCategories {
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

export namespace Categories {
  export import ZeroTrustGatewayCategories = CategoriesAPI.ZeroTrustGatewayCategories;
  export import ZeroTrustGatewayCategoriesSinglePage = CategoriesAPI.ZeroTrustGatewayCategoriesSinglePage;
  export import CategoryListParams = CategoriesAPI.CategoryListParams;
}
