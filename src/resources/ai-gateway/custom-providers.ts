// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseCustomProviders extends APIResource {
  static override readonly _key: readonly ['aiGateway', 'customProviders'] = Object.freeze([
    'aiGateway',
    'customProviders',
  ] as const);

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
    options?: RequestOptions,
  ): APIPromise<CustomProviderCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/ai-gateway/custom-providers`, {
        body,
        ...options,
      }) as APIPromise<{ result: CustomProviderCreateResponse }>
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
    options?: RequestOptions,
  ): PagePromise<CustomProviderListResponsesV4PagePaginationArray, CustomProviderListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/ai-gateway/custom-providers`,
      V4PagePaginationArray<CustomProviderListResponse>,
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
    options?: RequestOptions,
  ): APIPromise<CustomProviderDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/ai-gateway/custom-providers/${id}`,
        options,
      ) as APIPromise<{ result: CustomProviderDeleteResponse }>
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
    options?: RequestOptions,
  ): APIPromise<CustomProviderGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/ai-gateway/custom-providers/${id}`,
        options,
      ) as APIPromise<{ result: CustomProviderGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class CustomProviders extends BaseCustomProviders {}

export type CustomProviderListResponsesV4PagePaginationArray =
  V4PagePaginationArray<CustomProviderListResponse>;

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

export declare namespace CustomProviders {
  export {
    type CustomProviderCreateResponse as CustomProviderCreateResponse,
    type CustomProviderListResponse as CustomProviderListResponse,
    type CustomProviderDeleteResponse as CustomProviderDeleteResponse,
    type CustomProviderGetResponse as CustomProviderGetResponse,
    type CustomProviderListResponsesV4PagePaginationArray as CustomProviderListResponsesV4PagePaginationArray,
    type CustomProviderCreateParams as CustomProviderCreateParams,
    type CustomProviderListParams as CustomProviderListParams,
    type CustomProviderDeleteParams as CustomProviderDeleteParams,
    type CustomProviderGetParams as CustomProviderGetParams,
  };
}
