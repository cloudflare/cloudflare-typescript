// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';

export class Tokens extends APIResource {
  /**
   * Create a new token.
   *
   * @example
   * ```ts
   * const token = await client.aiSearch.tokens.create({
   *   account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *   cf_api_id: 'a1b2c3d4e5f6',
   *   cf_api_key: 'abc123',
   *   name: 'my-token',
   * });
   * ```
   */
  create(params: TokenCreateParams, options?: Core.RequestOptions): Core.APIPromise<TokenCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/ai-search/tokens`, { body, ...options }) as Core.APIPromise<{
        result: TokenCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update token.
   *
   * @example
   * ```ts
   * const token = await client.aiSearch.tokens.update(
   *   '62af0db3-c410-40b2-9ee3-0e93f6dd1de0',
   *   {
   *     account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *     cf_api_id: 'a1b2c3d4e5f6',
   *     cf_api_key: 'abc123',
   *     name: 'my-token',
   *   },
   * );
   * ```
   */
  update(
    id: string,
    params: TokenUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TokenUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/ai-search/tokens/${id}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: TokenUpdateResponse }>
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
    options?: Core.RequestOptions,
  ): Core.PagePromise<TokenListResponsesV4PagePaginationArray, TokenListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/ai-search/tokens`,
      TokenListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Delete token.
   *
   * @example
   * ```ts
   * const token = await client.aiSearch.tokens.delete(
   *   '62af0db3-c410-40b2-9ee3-0e93f6dd1de0',
   *   { account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22' },
   * );
   * ```
   */
  delete(
    id: string,
    params: TokenDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TokenDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(`/accounts/${account_id}/ai-search/tokens/${id}`, options) as Core.APIPromise<{
        result: TokenDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Read token.
   *
   * @example
   * ```ts
   * const response = await client.aiSearch.tokens.read(
   *   '62af0db3-c410-40b2-9ee3-0e93f6dd1de0',
   *   { account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22' },
   * );
   * ```
   */
  read(
    id: string,
    params: TokenReadParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TokenReadResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/ai-search/tokens/${id}`, options) as Core.APIPromise<{
        result: TokenReadResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class TokenListResponsesV4PagePaginationArray extends V4PagePaginationArray<TokenListResponse> {}

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

export type TokenDeleteResponse = unknown;

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

  /**
   * Body param
   */
  legacy?: boolean;
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

  /**
   * Body param
   */
  legacy?: boolean;
}

export interface TokenListParams extends V4PagePaginationArrayParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Query param: Filter tokens whose name contains this string (case-insensitive).
   */
  search?: string;
}

export interface TokenDeleteParams {
  account_id: string;
}

export interface TokenReadParams {
  account_id: string;
}

Tokens.TokenListResponsesV4PagePaginationArray = TokenListResponsesV4PagePaginationArray;

export declare namespace Tokens {
  export {
    type TokenCreateResponse as TokenCreateResponse,
    type TokenUpdateResponse as TokenUpdateResponse,
    type TokenListResponse as TokenListResponse,
    type TokenDeleteResponse as TokenDeleteResponse,
    type TokenReadResponse as TokenReadResponse,
    TokenListResponsesV4PagePaginationArray as TokenListResponsesV4PagePaginationArray,
    type TokenCreateParams as TokenCreateParams,
    type TokenUpdateParams as TokenUpdateParams,
    type TokenListParams as TokenListParams,
    type TokenDeleteParams as TokenDeleteParams,
    type TokenReadParams as TokenReadParams,
  };
}
