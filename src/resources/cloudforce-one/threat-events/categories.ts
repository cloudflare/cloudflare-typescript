// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class Categories extends APIResource {
  /**
   * Creates a new category
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
  create(
    params: CategoryCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CategoryCreateResponse> {
    const { account_id = this._client.accountId, ...body } = params;
    return this._client.post(`/accounts/${account_id}/cloudforce-one/events/categories/create`, {
      body,
      ...options,
    });
  }

  /**
   * Lists categories across multiple datasets
   *
   * @example
   * ```ts
   * const categories =
   *   await client.cloudforceOne.threatEvents.categories.list({
   *     account_id: 'account_id',
   *   });
   * ```
   */
  list(params?: CategoryListParams, options?: Core.RequestOptions): Core.APIPromise<CategoryListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<CategoryListResponse>;
  list(
    params: CategoryListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CategoryListResponse> {
    if (isRequestOptions(params)) {
      return this.list({}, params);
    }
    const { account_id = this._client.accountId, ...query } = params;
    return this._client.get(`/accounts/${account_id}/cloudforce-one/events/categories`, {
      query,
      ...options,
    });
  }

  /**
   * Deletes a category
   *
   * @example
   * ```ts
   * const category =
   *   await client.cloudforceOne.threatEvents.categories.delete(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  delete(
    categoryId: string,
    params?: CategoryDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CategoryDeleteResponse>;
  delete(categoryId: string, options?: Core.RequestOptions): Core.APIPromise<CategoryDeleteResponse>;
  delete(
    categoryId: string,
    params: CategoryDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CategoryDeleteResponse> {
    if (isRequestOptions(params)) {
      return this.delete(categoryId, {}, params);
    }
    const { account_id = this._client.accountId } = params;
    return this._client.delete(
      `/accounts/${account_id}/cloudforce-one/events/categories/${categoryId}`,
      options,
    );
  }

  /**
   * Updates a category
   *
   * @example
   * ```ts
   * const response =
   *   await client.cloudforceOne.threatEvents.categories.edit(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  edit(
    categoryId: string,
    params?: CategoryEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CategoryEditResponse>;
  edit(categoryId: string, options?: Core.RequestOptions): Core.APIPromise<CategoryEditResponse>;
  edit(
    categoryId: string,
    params: CategoryEditParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CategoryEditResponse> {
    if (isRequestOptions(params)) {
      return this.edit(categoryId, {}, params);
    }
    const { account_id = this._client.accountId, ...body } = params;
    return this._client.patch(`/accounts/${account_id}/cloudforce-one/events/categories/${categoryId}`, {
      body,
      ...options,
    });
  }

  /**
   * Reads a category
   *
   * @example
   * ```ts
   * const category =
   *   await client.cloudforceOne.threatEvents.categories.get(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  get(
    categoryId: string,
    params?: CategoryGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CategoryGetResponse>;
  get(categoryId: string, options?: Core.RequestOptions): Core.APIPromise<CategoryGetResponse>;
  get(
    categoryId: string,
    params: CategoryGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CategoryGetResponse> {
    if (isRequestOptions(params)) {
      return this.get(categoryId, {}, params);
    }
    const { account_id = this._client.accountId } = params;
    return this._client.get(
      `/accounts/${account_id}/cloudforce-one/events/categories/${categoryId}`,
      options,
    );
  }
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
  account_id?: string;

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
  account_id?: string;

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
  account_id?: string;
}

export interface CategoryEditParams {
  /**
   * Path param: Account ID.
   */
  account_id?: string;

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
  account_id?: string;
}

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
}
