// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class Categories extends APIResource {
  /**
   * Creates a new category
   */
  create(
    accountId: number,
    body: CategoryCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CategoryCreateResponse> {
    return this._client.post(`/accounts/${accountId}/cloudforce-one/events/categories/create`, {
      body,
      ...options,
    });
  }

  /**
   * Updates a category
   */
  update(
    accountId: number,
    categoryId: string,
    body?: CategoryUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CategoryUpdateResponse>;
  update(
    accountId: number,
    categoryId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CategoryUpdateResponse>;
  update(
    accountId: number,
    categoryId: string,
    body: CategoryUpdateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<CategoryUpdateResponse> {
    if (isRequestOptions(body)) {
      return this.update(accountId, categoryId, {}, body);
    }
    return this._client.post(`/accounts/${accountId}/cloudforce-one/events/categories/${categoryId}`, {
      body,
      ...options,
    });
  }

  /**
   * Lists categories
   */
  list(accountId: number, options?: Core.RequestOptions): Core.APIPromise<CategoryListResponse> {
    return this._client.get(`/accounts/${accountId}/cloudforce-one/events/categories`, options);
  }

  /**
   * Deletes a category
   */
  delete(
    accountId: number,
    categoryId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CategoryDeleteResponse> {
    return this._client.delete(
      `/accounts/${accountId}/cloudforce-one/events/categories/${categoryId}`,
      options,
    );
  }

  /**
   * Reads a category
   */
  get(
    accountId: number,
    categoryId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CategoryGetResponse> {
    return this._client.get(`/accounts/${accountId}/cloudforce-one/events/categories/${categoryId}`, options);
  }
}

export interface CategoryCreateResponse {
  killChain: number;

  name: string;

  uuid: string;

  mitreAttack?: Array<string>;

  shortname?: string;
}

export interface CategoryUpdateResponse {
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

export interface CategoryGetResponse {
  killChain: number;

  name: string;

  uuid: string;

  mitreAttack?: Array<string>;

  shortname?: string;
}

export interface CategoryCreateParams {
  killChain: number;

  name: string;

  mitreAttack?: Array<string>;

  shortname?: string;
}

export interface CategoryUpdateParams {
  killChain?: number;

  mitreAttack?: Array<string>;

  name?: string;

  shortname?: string;
}

export declare namespace Categories {
  export {
    type CategoryCreateResponse as CategoryCreateResponse,
    type CategoryUpdateResponse as CategoryUpdateResponse,
    type CategoryListResponse as CategoryListResponse,
    type CategoryDeleteResponse as CategoryDeleteResponse,
    type CategoryGetResponse as CategoryGetResponse,
    type CategoryCreateParams as CategoryCreateParams,
    type CategoryUpdateParams as CategoryUpdateParams,
  };
}
