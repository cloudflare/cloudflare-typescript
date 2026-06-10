// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import { PagePromise, SinglePage } from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseDataTags extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'dlp', 'dataTagCategories', 'dataTags'] =
    Object.freeze(['zeroTrust', 'dlp', 'dataTagCategories', 'dataTags'] as const);

  /**
   * Creates a new data tag.
   *
   * @example
   * ```ts
   * const dataTag =
   *   await client.zeroTrust.dlp.dataTagCategories.dataTags.create(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id', name: 'name' },
   *   );
   * ```
   */
  create(
    categoryID: string,
    params: DataTagCreateParams,
    options?: RequestOptions,
  ): APIPromise<DataTagCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/dlp/data_tag_categories/${categoryID}/data_tags`, {
        body,
        ...options,
      }) as APIPromise<{ result: DataTagCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update the attributes of a single data tag.
   *
   * @example
   * ```ts
   * const dataTag =
   *   await client.zeroTrust.dlp.dataTagCategories.dataTags.update(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       account_id: 'account_id',
   *       category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     },
   *   );
   * ```
   */
  update(
    tagID: string,
    params: DataTagUpdateParams,
    options?: RequestOptions,
  ): APIPromise<DataTagUpdateResponse> {
    const { account_id, category_id, ...body } = params;
    return (
      this._client.put(
        path`/accounts/${account_id}/dlp/data_tag_categories/${category_id}/data_tags/${tagID}`,
        { body, ...options },
      ) as APIPromise<{ result: DataTagUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieve all data tags in a data tag category
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const dataTagListResponse of client.zeroTrust.dlp.dataTagCategories.dataTags.list(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { account_id: 'account_id' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    categoryID: string,
    params: DataTagListParams,
    options?: RequestOptions,
  ): PagePromise<DataTagListResponsesSinglePage, DataTagListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/dlp/data_tag_categories/${categoryID}/data_tags`,
      SinglePage<DataTagListResponse>,
      options,
    );
  }

  /**
   * Delete a single data tag.
   *
   * @example
   * ```ts
   * const dataTag =
   *   await client.zeroTrust.dlp.dataTagCategories.dataTags.delete(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       account_id: 'account_id',
   *       category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     },
   *   );
   * ```
   */
  delete(
    tagID: string,
    params: DataTagDeleteParams,
    options?: RequestOptions,
  ): APIPromise<DataTagDeleteResponse | null> {
    const { account_id, category_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/dlp/data_tag_categories/${category_id}/data_tags/${tagID}`,
        options,
      ) as APIPromise<{ result: DataTagDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieve a specific data tag.
   *
   * @example
   * ```ts
   * const dataTag =
   *   await client.zeroTrust.dlp.dataTagCategories.dataTags.get(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     {
   *       account_id: 'account_id',
   *       category_id: '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     },
   *   );
   * ```
   */
  get(tagID: string, params: DataTagGetParams, options?: RequestOptions): APIPromise<DataTagGetResponse> {
    const { account_id, category_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/dlp/data_tag_categories/${category_id}/data_tags/${tagID}`,
        options,
      ) as APIPromise<{ result: DataTagGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class DataTags extends BaseDataTags {}

export type DataTagListResponsesSinglePage = SinglePage<DataTagListResponse>;

export interface DataTagCreateResponse {
  id: string;

  created_at: string;

  name: string;

  updated_at: string;

  description?: string | null;
}

export interface DataTagUpdateResponse {
  id: string;

  created_at: string;

  name: string;

  updated_at: string;

  description?: string | null;
}

export interface DataTagListResponse {
  id: string;

  created_at: string;

  name: string;

  updated_at: string;

  description?: string | null;
}

export type DataTagDeleteResponse = unknown;

export interface DataTagGetResponse {
  id: string;

  created_at: string;

  name: string;

  updated_at: string;

  description?: string | null;
}

export interface DataTagCreateParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param
   */
  name: string;

  /**
   * Body param
   */
  description?: string | null;
}

export interface DataTagUpdateParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Path param
   */
  category_id: string;

  /**
   * Body param
   */
  description?: string | null;

  /**
   * Body param
   */
  name?: string | null;
}

export interface DataTagListParams {
  account_id: string;
}

export interface DataTagDeleteParams {
  account_id: string;

  category_id: string;
}

export interface DataTagGetParams {
  account_id: string;

  category_id: string;
}

export declare namespace DataTags {
  export {
    type DataTagCreateResponse as DataTagCreateResponse,
    type DataTagUpdateResponse as DataTagUpdateResponse,
    type DataTagListResponse as DataTagListResponse,
    type DataTagDeleteResponse as DataTagDeleteResponse,
    type DataTagGetResponse as DataTagGetResponse,
    type DataTagListResponsesSinglePage as DataTagListResponsesSinglePage,
    type DataTagCreateParams as DataTagCreateParams,
    type DataTagUpdateParams as DataTagUpdateParams,
    type DataTagListParams as DataTagListParams,
    type DataTagDeleteParams as DataTagDeleteParams,
    type DataTagGetParams as DataTagGetParams,
  };
}
