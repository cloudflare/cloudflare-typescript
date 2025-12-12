// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';

export class Tokens extends APIResource {
  /**
   * Create new tokens.
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
  create(params: TokenCreateParams, options?: Core.RequestOptions): Core.APIPromise<TokenCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/ai-search/tokens`, { body, ...options }) as Core.APIPromise<{
        result: TokenCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Delete tokens.
   *
   * @example
   * ```ts
   * const token = await client.aiSearch.tokens.update(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
   *   { account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22' },
   * );
   * ```
   */
  update(
    id: string,
    params: TokenUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TokenUpdateResponse> {
    const { account_id } = params;
    return (
      this._client.delete(`/accounts/${account_id}/ai-search/tokens/${id}`, options) as Core.APIPromise<{
        result: TokenUpdateResponse;
      }>
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
   * Delete tokens.
   *
   * @example
   * ```ts
   * const response = await client.aiSearch.tokens.read(
   *   '182bd5e5-6e1a-4fe4-a799-aa6d9a6ab26e',
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
      this._client.delete(`/accounts/${account_id}/ai-search/tokens/${id}`, options) as Core.APIPromise<{
        result: TokenReadResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class TokenListResponsesV4PagePaginationArray extends V4PagePaginationArray<TokenListResponse> {}

export interface TokenCreateResponse {
  id: string;

  account_id: string;

  account_tag: string;

  cf_api_id: string;

  cf_api_key: string;

  created_at: string;

  modified_at: string;

  name: string;

  created_by?: string;

  enabled?: boolean;

  legacy?: boolean;

  modified_by?: string;

  synced_at?: string;
}

export interface TokenUpdateResponse {
  id: string;

  account_id: string;

  account_tag: string;

  cf_api_id: string;

  cf_api_key: string;

  created_at: string;

  modified_at: string;

  name: string;

  created_by?: string;

  enabled?: boolean;

  legacy?: boolean;

  modified_by?: string;

  synced_at?: string;
}

export interface TokenListResponse {
  id: string;

  account_id: string;

  account_tag: string;

  cf_api_id: string;

  cf_api_key: string;

  created_at: string;

  modified_at: string;

  name: string;

  created_by?: string;

  enabled?: boolean;

  legacy?: boolean;

  modified_by?: string;

  synced_at?: string;
}

export interface TokenDeleteResponse {
  id: string;

  account_id: string;

  account_tag: string;

  cf_api_id: string;

  cf_api_key: string;

  created_at: string;

  modified_at: string;

  name: string;

  created_by?: string;

  enabled?: boolean;

  legacy?: boolean;

  modified_by?: string;

  synced_at?: string;
}

export interface TokenReadResponse {
  id: string;

  account_id: string;

  account_tag: string;

  cf_api_id: string;

  cf_api_key: string;

  created_at: string;

  modified_at: string;

  name: string;

  created_by?: string;

  enabled?: boolean;

  legacy?: boolean;

  modified_by?: string;

  synced_at?: string;
}

export interface TokenCreateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param:
   */
  cf_api_id: string;

  /**
   * Body param:
   */
  cf_api_key: string;

  /**
   * Body param:
   */
  name: string;

  /**
   * Body param:
   */
  legacy?: boolean;
}

export interface TokenUpdateParams {
  account_id: string;
}

export interface TokenListParams extends V4PagePaginationArrayParams {
  /**
   * Path param:
   */
  account_id: string;
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
