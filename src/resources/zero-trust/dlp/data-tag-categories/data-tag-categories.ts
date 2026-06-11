// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as DataTagsAPI from './data-tags';
import {
  DataTagCreateParams,
  DataTagCreateResponse,
  DataTagDeleteParams,
  DataTagDeleteResponse,
  DataTagGetParams,
  DataTagGetResponse,
  DataTagListParams,
  DataTagListResponse,
  DataTagListResponsesSinglePage,
  DataTagUpdateParams,
  DataTagUpdateResponse,
  DataTags,
} from './data-tags';
import { SinglePage } from '../../../../pagination';

export class DataTagCategories extends APIResource {
  dataTags: DataTagsAPI.DataTags = new DataTagsAPI.DataTags(this._client);

  /**
   * Creates a new data tag category.
   *
   * @example
   * ```ts
   * const dataTagCategory =
   *   await client.zeroTrust.dlp.dataTagCategories.create({
   *     account_id: 'account_id',
   *     name: 'name',
   *   });
   * ```
   */
  create(
    params: DataTagCategoryCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DataTagCategoryCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/dlp/data_tag_categories`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: DataTagCategoryCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update the attributes of a single data tag category.
   *
   * @example
   * ```ts
   * const dataTagCategory =
   *   await client.zeroTrust.dlp.dataTagCategories.update(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  update(
    categoryId: string,
    params: DataTagCategoryUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DataTagCategoryUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/dlp/data_tag_categories/${categoryId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: DataTagCategoryUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieve all data tag categories in an account
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const dataTagCategoryListResponse of client.zeroTrust.dlp.dataTagCategories.list(
   *   { account_id: 'account_id' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: DataTagCategoryListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DataTagCategoryListResponsesSinglePage, DataTagCategoryListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/dlp/data_tag_categories`,
      DataTagCategoryListResponsesSinglePage,
      options,
    );
  }

  /**
   * Delete a single data tag category.
   *
   * @example
   * ```ts
   * const dataTagCategory =
   *   await client.zeroTrust.dlp.dataTagCategories.delete(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  delete(
    categoryId: string,
    params: DataTagCategoryDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DataTagCategoryDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/dlp/data_tag_categories/${categoryId}`,
        options,
      ) as Core.APIPromise<{ result: DataTagCategoryDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieve a specific data tag category.
   *
   * @example
   * ```ts
   * const dataTagCategory =
   *   await client.zeroTrust.dlp.dataTagCategories.get(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: 'account_id' },
   *   );
   * ```
   */
  get(
    categoryId: string,
    params: DataTagCategoryGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DataTagCategoryGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/dlp/data_tag_categories/${categoryId}`,
        options,
      ) as Core.APIPromise<{ result: DataTagCategoryGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class DataTagCategoryListResponsesSinglePage extends SinglePage<DataTagCategoryListResponse> {}

export interface DataTagCategoryCreateResponse {
  id: string;

  created_at: string;

  name: string;

  tags: Array<DataTagCategoryCreateResponse.Tag>;

  updated_at: string;

  description?: string | null;

  template_id?: string | null;
}

export namespace DataTagCategoryCreateResponse {
  export interface Tag {
    id: string;

    created_at: string;

    name: string;

    updated_at: string;

    description?: string | null;
  }
}

export interface DataTagCategoryUpdateResponse {
  id: string;

  created_at: string;

  name: string;

  tags: Array<DataTagCategoryUpdateResponse.Tag>;

  updated_at: string;

  description?: string | null;

  template_id?: string | null;
}

export namespace DataTagCategoryUpdateResponse {
  export interface Tag {
    id: string;

    created_at: string;

    name: string;

    updated_at: string;

    description?: string | null;
  }
}

export interface DataTagCategoryListResponse {
  id: string;

  created_at: string;

  name: string;

  tags: Array<DataTagCategoryListResponse.Tag>;

  updated_at: string;

  description?: string | null;

  template_id?: string | null;
}

export namespace DataTagCategoryListResponse {
  export interface Tag {
    id: string;

    created_at: string;

    name: string;

    updated_at: string;

    description?: string | null;
  }
}

export type DataTagCategoryDeleteResponse = unknown;

export interface DataTagCategoryGetResponse {
  id: string;

  created_at: string;

  name: string;

  tags: Array<DataTagCategoryGetResponse.Tag>;

  updated_at: string;

  description?: string | null;

  template_id?: string | null;
}

export namespace DataTagCategoryGetResponse {
  export interface Tag {
    id: string;

    created_at: string;

    name: string;

    updated_at: string;

    description?: string | null;
  }
}

export interface DataTagCategoryCreateParams {
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

  /**
   * Body param: Tags to create with the category. Mutually exclusive with
   * `template_id`.
   */
  tags?: Array<DataTagCategoryCreateParams.Tag>;

  /**
   * Body param
   */
  template_id?: string | null;
}

export namespace DataTagCategoryCreateParams {
  export interface Tag {
    name: string;

    description?: string | null;
  }
}

export interface DataTagCategoryUpdateParams {
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

  /**
   * Body param: The desired final state of tags.
   *
   * - `None` (omitted): no tag changes.
   * - `Some([])`: delete all tags.
   * - `Some([...])`: desired final set + order.
   */
  tags?: Array<DataTagCategoryUpdateParams.Tag> | null;
}

export namespace DataTagCategoryUpdateParams {
  export interface Tag {
    /**
     * If `None` (omitted), a new tag will be created. Otherwise, an existing tag will
     * be updated.
     */
    id?: string | null;

    description?: string | null;

    name?: string | null;
  }
}

export interface DataTagCategoryListParams {
  account_id: string;
}

export interface DataTagCategoryDeleteParams {
  account_id: string;
}

export interface DataTagCategoryGetParams {
  account_id: string;
}

DataTagCategories.DataTagCategoryListResponsesSinglePage = DataTagCategoryListResponsesSinglePage;
DataTagCategories.DataTags = DataTags;
DataTagCategories.DataTagListResponsesSinglePage = DataTagListResponsesSinglePage;

export declare namespace DataTagCategories {
  export {
    type DataTagCategoryCreateResponse as DataTagCategoryCreateResponse,
    type DataTagCategoryUpdateResponse as DataTagCategoryUpdateResponse,
    type DataTagCategoryListResponse as DataTagCategoryListResponse,
    type DataTagCategoryDeleteResponse as DataTagCategoryDeleteResponse,
    type DataTagCategoryGetResponse as DataTagCategoryGetResponse,
    DataTagCategoryListResponsesSinglePage as DataTagCategoryListResponsesSinglePage,
    type DataTagCategoryCreateParams as DataTagCategoryCreateParams,
    type DataTagCategoryUpdateParams as DataTagCategoryUpdateParams,
    type DataTagCategoryListParams as DataTagCategoryListParams,
    type DataTagCategoryDeleteParams as DataTagCategoryDeleteParams,
    type DataTagCategoryGetParams as DataTagCategoryGetParams,
  };

  export {
    DataTags as DataTags,
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
