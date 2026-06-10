// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import { SinglePage } from '../../../../pagination';

export class DataTags extends APIResource {
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
    categoryId: string,
    params: DataTagCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DataTagCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/dlp/data_tag_categories/${categoryId}/data_tags`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: DataTagCreateResponse }>
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
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  update(
    categoryId: string,
    tagId: string,
    params: DataTagUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DataTagUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/dlp/data_tag_categories/${categoryId}/data_tags/${tagId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: DataTagUpdateResponse }>
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
    categoryId: string,
    params: DataTagListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DataTagListResponsesSinglePage, DataTagListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/dlp/data_tag_categories/${categoryId}/data_tags`,
      DataTagListResponsesSinglePage,
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
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  delete(
    categoryId: string,
    tagId: string,
    params: DataTagDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DataTagDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/dlp/data_tag_categories/${categoryId}/data_tags/${tagId}`,
        options,
      ) as Core.APIPromise<{ result: DataTagDeleteResponse | null }>
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
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  get(
    categoryId: string,
    tagId: string,
    params: DataTagGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DataTagGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/dlp/data_tag_categories/${categoryId}/data_tags/${tagId}`,
        options,
      ) as Core.APIPromise<{ result: DataTagGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class DataTagListResponsesSinglePage extends SinglePage<DataTagListResponse> {}

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
}

export interface DataTagGetParams {
  account_id: string;
}

DataTags.DataTagListResponsesSinglePage = DataTagListResponsesSinglePage;

export declare namespace DataTags {
  export {
    type DataTagCreateResponse as DataTagCreateResponse,
    type DataTagUpdateResponse as DataTagUpdateResponse,
    type DataTagListResponse as DataTagListResponse,
    type DataTagDeleteResponse as DataTagDeleteResponse,
    type DataTagGetResponse as DataTagGetResponse,
    DataTagListResponsesSinglePage as DataTagListResponsesSinglePage,
    type DataTagCreateParams as DataTagCreateParams,
    type DataTagUpdateParams as DataTagUpdateParams,
    type DataTagListParams as DataTagListParams,
    type DataTagDeleteParams as DataTagDeleteParams,
    type DataTagGetParams as DataTagGetParams,
  };
}
