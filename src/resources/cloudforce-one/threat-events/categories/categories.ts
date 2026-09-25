// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as CatalogAPI from './catalog';
import { BaseCatalog, Catalog, CatalogListParams, CatalogListResponse } from './catalog';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseCategories extends APIResource {
  static override readonly _key: readonly ['cloudforceOne', 'threatEvents', 'categories'] = Object.freeze([
    'cloudforceOne',
    'threatEvents',
    'categories',
  ] as const);

  /**
   * Creates a new threat event category in Cloudforce One for organizing and
   * classifying threat events.
   *
   * @example
   * ```ts
   * const category =
   *   await client.cloudforceOne.threatEvents.categories.create(
   *     {
   *       account_id: 'account_id',
   *       killChain: 0,
   *       name: 'name',
   *     },
   *   );
   * ```
   */
  create(params: CategoryCreateParams, options?: RequestOptions): APIPromise<CategoryCreateResponse> {
    const { account_id, ...body } = params;
    return this._client.post(path`/accounts/${account_id}/cloudforce-one/events/categories/create`, {
      body,
      ...options,
    });
  }

  /**
   * Lists all threat event categories configured for classifying and organizing
   * threat events.
   *
   * @example
   * ```ts
   * const categories =
   *   await client.cloudforceOne.threatEvents.categories.list({
   *     account_id: 'account_id',
   *   });
   * ```
   */
  list(params: CategoryListParams, options?: RequestOptions): APIPromise<CategoryListResponse> {
    const { account_id, ...query } = params;
    return this._client.get(path`/accounts/${account_id}/cloudforce-one/events/categories`, {
      query,
      ...options,
    });
  }

  /**
   * Deprecated; use DELETE /events/event-categories/by-id/{category_id}. Available
   * through 2026-11-28.
   *
   * @deprecated Use DELETE /events/event-categories/by-id/{category_id} before 2026-11-28.
   */
  delete(
    categoryID: string,
    params: CategoryDeleteParams,
    options?: RequestOptions,
  ): APIPromise<CategoryDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(
      path`/accounts/${account_id}/cloudforce-one/events/categories/${categoryID}`,
      options,
    );
  }

  /**
   * Deprecated; use PATCH /events/event-categories/by-id/{category_id}. Available
   * through 2026-11-28.
   *
   * @deprecated Use PATCH /events/event-categories/by-id/{category_id} before 2026-11-28.
   */
  edit(
    categoryID: string,
    params: CategoryEditParams,
    options?: RequestOptions,
  ): APIPromise<CategoryEditResponse> {
    const { account_id, ...body } = params;
    return this._client.patch(path`/accounts/${account_id}/cloudforce-one/events/categories/${categoryID}`, {
      body,
      ...options,
    });
  }

  /**
   * Deprecated; use GET /events/event-categories/by-id/{category_id}. Available
   * through 2026-11-28.
   *
   * @deprecated Use GET /events/event-categories/by-id/{category_id} before 2026-11-28.
   */
  get(
    categoryID: string,
    params: CategoryGetParams,
    options?: RequestOptions,
  ): APIPromise<CategoryGetResponse> {
    const { account_id } = params;
    return this._client.get(
      path`/accounts/${account_id}/cloudforce-one/events/categories/${categoryID}`,
      options,
    );
  }
}
export class Categories extends BaseCategories {
  catalog: CatalogAPI.Catalog = new CatalogAPI.Catalog(this._client);
}

export interface CategoryCreateResponse {
  killChain: number;

  name: string;

  uuid: string;

  mitreAttack?: Array<string>;

  mitreCapec?: Array<string>;

  shortname?: string;
}

export type CategoryListResponse = Array<CategoryListResponse.CategoryListResponseItem>;

export namespace CategoryListResponse {
  export interface CategoryListResponseItem {
    killChain: number;

    name: string;

    uuid: string;

    mitreAttack?: Array<string>;

    mitreCapec?: Array<string>;

    shortname?: string;
  }
}

export interface CategoryDeleteResponse {
  uuid: string;
}

export interface CategoryEditResponse {
  killChain: number;

  name: string;

  uuid: string;

  mitreAttack?: Array<string>;

  mitreCapec?: Array<string>;

  shortname?: string;
}

export interface CategoryGetResponse {
  killChain: number;

  name: string;

  uuid: string;

  mitreAttack?: Array<string>;

  mitreCapec?: Array<string>;

  shortname?: string;
}

export interface CategoryCreateParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;

  /**
   * Body param
   */
  killChain: number;

  /**
   * Body param
   */
  name: string;

  /**
   * Body param
   */
  mitreAttack?: Array<string>;

  /**
   * Body param
   */
  mitreCapec?: Array<string>;

  /**
   * Body param
   */
  shortname?: string;
}

export interface CategoryListParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;

  /**
   * Query param: Array of dataset IDs to query categories from. If not provided,
   * uses the default dataset.
   */
  datasetIds?: Array<string>;
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
  killChain?: number;

  /**
   * Body param
   */
  mitreAttack?: Array<string>;

  /**
   * Body param
   */
  mitreCapec?: Array<string>;

  /**
   * Body param
   */
  name?: string;

  /**
   * Body param
   */
  shortname?: string;
}

export interface CategoryGetParams {
  /**
   * Account ID.
   */
  account_id: string;
}

Categories.Catalog = Catalog;
Categories.BaseCatalog = BaseCatalog;

export declare namespace Categories {
  export {
    type CategoryCreateResponse as CategoryCreateResponse,
    type CategoryListResponse as CategoryListResponse,
    type CategoryDeleteResponse as CategoryDeleteResponse,
    type CategoryEditResponse as CategoryEditResponse,
    type CategoryGetResponse as CategoryGetResponse,
    type CategoryCreateParams as CategoryCreateParams,
    type CategoryListParams as CategoryListParams,
    type CategoryDeleteParams as CategoryDeleteParams,
    type CategoryEditParams as CategoryEditParams,
    type CategoryGetParams as CategoryGetParams,
  };

  export {
    Catalog as Catalog,
    BaseCatalog as BaseCatalog,
    type CatalogListResponse as CatalogListResponse,
    type CatalogListParams as CatalogListParams,
  };
}
