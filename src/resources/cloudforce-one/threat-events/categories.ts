// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

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
  create(params: CategoryCreateParams, options?: RequestOptions): APIPromise<CategoryCreateResponse> {
    const { account_id, ...body } = params;
    return this._client.post(path`/accounts/${account_id}/cloudforce-one/events/categories/create`, {
      body,
      ...options,
    });
  }

  /**
   * Lists categories
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
    const { account_id } = params;
    return this._client.get(path`/accounts/${account_id}/cloudforce-one/events/categories`, options);
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

export interface CategoryCreateResponse {
  killChain: number;

  name: string;

  uuid: string;

  mitreAttack?: Array<string>;

  shortname?: string;
}

export type CategoryListResponse = Array<CategoryListResponse.CategoryListResponseItem>;

export namespace CategoryListResponse {
  export interface CategoryListResponseItem {
    killChain: number;

    name: string;

    uuid: string;

    mitreAttack?: Array<string>;

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

  shortname?: string;
}

export interface CategoryGetResponse {
  killChain: number;

  name: string;

  uuid: string;

  mitreAttack?: Array<string>;

  shortname?: string;
}

export interface CategoryCreateParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;

  /**
   * Body param:
   */
  killChain: number;

  /**
   * Body param:
   */
  name: string;

  /**
   * Body param:
   */
  mitreAttack?: Array<string>;

  /**
   * Body param:
   */
  shortname?: string;
}

export interface CategoryListParams {
  /**
   * Account ID.
   */
  account_id: string;
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
   * Body param:
   */
  killChain?: number;

  /**
   * Body param:
   */
  mitreAttack?: Array<string>;

  /**
   * Body param:
   */
  name?: string;

  /**
   * Body param:
   */
  shortname?: string;
}

export interface CategoryGetParams {
  /**
   * Account ID.
   */
  account_id: string;
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
