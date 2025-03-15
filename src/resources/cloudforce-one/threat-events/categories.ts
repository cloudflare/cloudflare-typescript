// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Categories extends APIResource {
  /**
   * Creates a new category
   */
  create(
    params: CategoryCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CategoryCreateResponse> {
    const { account_id, ...body } = params;
    return this._client.post(`/accounts/${account_id}/cloudforce-one/events/categories/create`, {
      body,
      ...options,
    });
  }

  /**
   * Lists categories
   */
  list(params: CategoryListParams, options?: Core.RequestOptions): Core.APIPromise<CategoryListResponse> {
    const { account_id } = params;
    return this._client.get(`/accounts/${account_id}/cloudforce-one/events/categories`, options);
  }

  /**
   * Deletes a category
   */
  delete(
    categoryId: string,
    params: CategoryDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CategoryDeleteResponse> {
    const { account_id } = params;
    return this._client.delete(
      `/accounts/${account_id}/cloudforce-one/events/categories/${categoryId}`,
      options,
    );
  }

  /**
   * Updates a category
   */
  edit(
    categoryId: string,
    params: CategoryEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CategoryEditResponse> {
    const { account_id, ...body } = params;
    return this._client.patch(`/accounts/${account_id}/cloudforce-one/events/categories/${categoryId}`, {
      body,
      ...options,
    });
  }

  /**
   * Reads a category
   */
  get(
    categoryId: string,
    params: CategoryGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CategoryGetResponse> {
    const { account_id } = params;
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
   * Path param: Account ID
   */
  account_id: number;

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
   * Account ID
   */
  account_id: number;
}

export interface CategoryDeleteParams {
  /**
   * Account ID
   */
  account_id: number;
}

export interface CategoryEditParams {
  /**
   * Path param: Account ID
   */
  account_id: number;

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
   * Account ID
   */
  account_id: number;
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
