// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Tokens extends APIResource {
  /**
   * Create a new tokens.
   *
   * @example
   * ```ts
   * const token = await client.aiSearch.tokens.create({
   *   account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *   cf_api_id: 'cf_api_id',
   *   cf_api_key: 'cf_api_key',
   *   name: 'name',
   * });
   * ```
   */
  create(params: TokenCreateParams, options?: RequestOptions): APIPromise<TokenCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/ai-search/tokens`, { body, ...options }) as APIPromise<{
        result: TokenCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update tokens.
   *
   * @example
   * ```ts
   * const token = await client.aiSearch.tokens.update(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   {
   *     account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *     cf_api_id: 'cf_api_id',
   *     cf_api_key: 'cf_api_key',
   *     name: 'name',
   *   },
   * );
   * ```
   */
  update(id: string, params: TokenUpdateParams, options?: RequestOptions): APIPromise<TokenUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/ai-search/tokens/${id}`, {
        body,
        ...options,
      }) as APIPromise<{ result: TokenUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List tokens.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const tokenListResponse of client.aiSearch.tokens.list(
   *   { account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: TokenListParams,
    options?: RequestOptions,
  ): PagePromise<TokenListResponsesV4PagePaginationArray, TokenListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/ai-search/tokens`,
      V4PagePaginationArray<TokenListResponse>,
      { query, ...options },
    );
  }

  /**
   * Delete tokens.
   *
   * @example
   * ```ts
   * const token = await client.aiSearch.tokens.delete(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22' },
   * );
   * ```
   */
  delete(id: string, params: TokenDeleteParams, options?: RequestOptions): APIPromise<TokenDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(path`/accounts/${account_id}/ai-search/tokens/${id}`, options) as APIPromise<{
        result: TokenDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Read tokens.
   *
   * @example
   * ```ts
   * const response = await client.aiSearch.tokens.read(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22' },
   * );
   * ```
   */
  read(id: string, params: TokenReadParams, options?: RequestOptions): APIPromise<TokenReadResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/ai-search/tokens/${id}`, options) as APIPromise<{
        result: TokenReadResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type TokenListResponsesV4PagePaginationArray = V4PagePaginationArray<TokenListResponse>;

export interface TokenCreateResponse {
  id: string;

  cf_api_id: string;

  created_at: string;

  modified_at: string;

  name: string;

  created_by?: string | null;

  enabled?: boolean;

  legacy?: boolean;

  modified_by?: string | null;
}

export interface TokenUpdateResponse {
  id: string;

  cf_api_id: string;

  created_at: string;

  modified_at: string;

  name: string;

  created_by?: string | null;

  enabled?: boolean;

  legacy?: boolean;

  modified_by?: string | null;
}

export interface TokenListResponse {
  id: string;

  cf_api_id: string;

  created_at: string;

  modified_at: string;

  name: string;

  created_by?: string | null;

  enabled?: boolean;

  legacy?: boolean;

  modified_by?: string | null;
}

export interface TokenDeleteResponse {
  id: string;

  cf_api_id: string;

  created_at: string;

  modified_at: string;

  name: string;

  created_by?: string | null;

  enabled?: boolean;

  legacy?: boolean;

  modified_by?: string | null;
}

export interface TokenReadResponse {
  id: string;

  cf_api_id: string;

  created_at: string;

  modified_at: string;

  name: string;

  created_by?: string | null;

  enabled?: boolean;

  legacy?: boolean;

  modified_by?: string | null;
}

export interface TokenCreateParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param
   */
  cf_api_id: string;

  /**
   * Body param
   */
  cf_api_key: string;

  /**
   * Body param
   */
  name: string;
}

export interface TokenUpdateParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param
   */
  cf_api_id: string;

  /**
   * Body param
   */
  cf_api_key: string;

  /**
   * Body param
   */
  name: string;
}

export interface TokenListParams extends V4PagePaginationArrayParams {
  /**
   * Path param
   */
  account_id: string;
}

export interface TokenDeleteParams {
  account_id: string;
}

export interface TokenReadParams {
  account_id: string;
}

export declare namespace Tokens {
  export {
    type TokenCreateResponse as TokenCreateResponse,
    type TokenUpdateResponse as TokenUpdateResponse,
    type TokenListResponse as TokenListResponse,
    type TokenDeleteResponse as TokenDeleteResponse,
    type TokenReadResponse as TokenReadResponse,
    type TokenListResponsesV4PagePaginationArray as TokenListResponsesV4PagePaginationArray,
    type TokenCreateParams as TokenCreateParams,
    type TokenUpdateParams as TokenUpdateParams,
    type TokenListParams as TokenListParams,
    type TokenDeleteParams as TokenDeleteParams,
    type TokenReadParams as TokenReadParams,
  };
}
