// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Categories extends APIResource {
  /**
   * Creates a new category
   */
  create(
    accountID: number,
    body: CategoryCreateParams,
    options?: RequestOptions,
  ): APIPromise<CategoryCreateResponse> {
    return this._client.post(path`/accounts/${accountID}/cloudforce-one/events/categories/create`, {
      body,
      ...options,
    });
  }

  /**
   * Updates a category
   */
  update(
    categoryID: string,
    params: CategoryUpdateParams,
    options?: RequestOptions,
  ): APIPromise<CategoryUpdateResponse> {
    const { accountId, ...body } = params;
    return this._client.post(path`/accounts/${accountId}/cloudforce-one/events/categories/${categoryID}`, {
      body,
      ...options,
    });
  }

  /**
   * Lists categories
   */
  list(accountID: number, options?: RequestOptions): APIPromise<CategoryListResponse> {
    return this._client.get(path`/accounts/${accountID}/cloudforce-one/events/categories`, options);
  }

  /**
   * Deletes a category
   */
  delete(
    categoryID: string,
    params: CategoryDeleteParams,
    options?: RequestOptions,
  ): APIPromise<CategoryDeleteResponse> {
    const { accountId } = params;
    return this._client.delete(
      path`/accounts/${accountId}/cloudforce-one/events/categories/${categoryID}`,
      options,
    );
  }

  /**
   * Reads a category
   */
  get(
    categoryID: string,
    params: CategoryGetParams,
    options?: RequestOptions,
  ): APIPromise<CategoryGetResponse> {
    const { accountId } = params;
    return this._client.get(
      path`/accounts/${accountId}/cloudforce-one/events/categories/${categoryID}`,
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
  /**
   * Path param: Account ID
   */
  accountId: number;

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

export interface CategoryDeleteParams {
  /**
   * Account ID
   */
  accountId: number;
}

export interface CategoryGetParams {
  /**
   * Account ID
   */
  accountId: number;
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
    type CategoryDeleteParams as CategoryDeleteParams,
    type CategoryGetParams as CategoryGetParams,
  };
}
