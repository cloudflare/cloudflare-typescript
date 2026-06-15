// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';

export class CustomProviders extends APIResource {
  /**
   * Creates a new AI Gateway.
   *
   * @example
   * ```ts
   * const customProvider =
   *   await client.aiGateway.customProviders.create({
   *     account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0',
   *     base_url: 'https://example.com',
   *     name: 'name',
   *     slug: 'slug',
   *   });
   * ```
   */
  create(
    params: CustomProviderCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomProviderCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/ai-gateway/custom-providers`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: CustomProviderCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all AI Gateway evaluator types configured for the account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const customProviderListResponse of client.aiGateway.customProviders.list(
   *   { account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: CustomProviderListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<CustomProviderListResponsesV4PagePaginationArray, CustomProviderListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/ai-gateway/custom-providers`,
      CustomProviderListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Deletes an AI Gateway dataset.
   *
   * @example
   * ```ts
   * const customProvider =
   *   await client.aiGateway.customProviders.delete(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0' },
   *   );
   * ```
   */
  delete(
    id: string,
    params: CustomProviderDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomProviderDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/ai-gateway/custom-providers/${id}`,
        options,
      ) as Core.APIPromise<{ result: CustomProviderDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves details for a specific AI Gateway dataset.
   *
   * @example
   * ```ts
   * const customProvider =
   *   await client.aiGateway.customProviders.get(
   *     '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *     { account_id: '3ebbcb006d4d46d7bb6a8c7f14676cb0' },
   *   );
   * ```
   */
  get(
    id: string,
    params: CustomProviderGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<CustomProviderGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/ai-gateway/custom-providers/${id}`,
        options,
      ) as Core.APIPromise<{ result: CustomProviderGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class CustomProviderListResponsesV4PagePaginationArray extends V4PagePaginationArray<CustomProviderListResponse> {}

export interface CustomProviderCreateResponse {
  id: string;

  base_url: string;

  created_at: string;

  modified_at: string;

  name: string;

  slug: string;

  beta?: boolean;

  curl_example?: string;

  description?: string;

  enable?: boolean;

  headers?: string;

  js_example?: string;

  link?: string;

  logo?: string;

  position?: number;
}

export interface CustomProviderListResponse {
  id: string;

  base_url: string;

  created_at: string;

  modified_at: string;

  name: string;

  slug: string;

  beta?: boolean;

  curl_example?: string;

  description?: string;

  enable?: boolean;

  headers?: string;

  js_example?: string;

  link?: string;

  logo?: string;

  position?: number;
}

export interface CustomProviderDeleteResponse {
  id: string;

  base_url: string;

  created_at: string;

  modified_at: string;

  name: string;

  slug: string;

  beta?: boolean;

  curl_example?: string;

  description?: string;

  enable?: boolean;

  headers?: string;

  js_example?: string;

  link?: string;

  logo?: string;

  position?: number;
}

export interface CustomProviderGetResponse {
  id: string;

  base_url: string;

  created_at: string;

  modified_at: string;

  name: string;

  slug: string;

  beta?: boolean;

  curl_example?: string;

  description?: string;

  enable?: boolean;

  headers?: string;

  js_example?: string;

  link?: string;

  logo?: string;

  position?: number;
}

export interface CustomProviderCreateParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param
   */
  base_url: string;

  /**
   * Body param
   */
  name: string;

  /**
   * Body param
   */
  slug: string;

  /**
   * Body param
   */
  beta?: boolean;

  /**
   * Body param
   */
  curl_example?: string;

  /**
   * Body param
   */
  description?: string;

  /**
   * Body param
   */
  enable?: boolean;

  /**
   * Body param
   */
  headers?: string;

  /**
   * Body param
   */
  js_example?: string;

  /**
   * Body param
   */
  link?: string;

  /**
   * Body param
   */
  position?: number;
}

export interface CustomProviderListParams extends V4PagePaginationArrayParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Query param
   */
  beta?: boolean;

  /**
   * Query param
   */
  enable?: boolean;

  /**
   * Query param: Search by id, name, slug
   */
  search?: string;
}

export interface CustomProviderDeleteParams {
  account_id: string;
}

export interface CustomProviderGetParams {
  account_id: string;
}

CustomProviders.CustomProviderListResponsesV4PagePaginationArray =
  CustomProviderListResponsesV4PagePaginationArray;

export declare namespace CustomProviders {
  export {
    type CustomProviderCreateResponse as CustomProviderCreateResponse,
    type CustomProviderListResponse as CustomProviderListResponse,
    type CustomProviderDeleteResponse as CustomProviderDeleteResponse,
    type CustomProviderGetResponse as CustomProviderGetResponse,
    CustomProviderListResponsesV4PagePaginationArray as CustomProviderListResponsesV4PagePaginationArray,
    type CustomProviderCreateParams as CustomProviderCreateParams,
    type CustomProviderListParams as CustomProviderListParams,
    type CustomProviderDeleteParams as CustomProviderDeleteParams,
    type CustomProviderGetParams as CustomProviderGetParams,
  };
}
