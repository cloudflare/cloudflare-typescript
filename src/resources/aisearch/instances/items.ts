// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import {
  PagePromise,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Items extends APIResource {
  /**
   * Items List.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const itemListResponse of client.aiSearch.instances.items.list(
   *   'my-ai-search',
   *   { account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    id: string,
    params: ItemListParams,
    options?: RequestOptions,
  ): PagePromise<ItemListResponsesV4PagePaginationArray, ItemListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/ai-search/instances/${id}/items`,
      V4PagePaginationArray<ItemListResponse>,
      { query, ...options },
    );
  }

  /**
   * Get Items.
   *
   * @example
   * ```ts
   * const item = await client.aiSearch.instances.items.get(
   *   'item_id',
   *   {
   *     account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *     id: 'my-ai-search',
   *   },
   * );
   * ```
   */
  get(itemID: string, params: ItemGetParams, options?: RequestOptions): APIPromise<ItemGetResponse> {
    const { account_id, id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/ai-search/instances/${id}/items/${itemID}`,
        options,
      ) as APIPromise<{ result: ItemGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type ItemListResponsesV4PagePaginationArray = V4PagePaginationArray<ItemListResponse>;

export interface ItemListResponse {
  id: string;

  key: string;

  status: 'queued' | 'running' | 'completed' | 'error' | 'skipped';

  error?: string;

  last_seen_at?: string;

  next_action?: string;
}

export interface ItemGetResponse {
  id: string;

  key: string;

  status: 'queued' | 'running' | 'completed' | 'error' | 'skipped';

  error?: string;

  last_seen_at?: string;

  next_action?: string;
}

export interface ItemListParams extends V4PagePaginationArrayParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Query param
   */
  search?: string;

  /**
   * Query param
   */
  status?: 'queued' | 'running' | 'completed' | 'error' | 'skipped';
}

export interface ItemGetParams {
  account_id: string;

  /**
   * Use your AI Search ID.
   */
  id: string;
}

export declare namespace Items {
  export {
    type ItemListResponse as ItemListResponse,
    type ItemGetResponse as ItemGetResponse,
    type ItemListResponsesV4PagePaginationArray as ItemListResponsesV4PagePaginationArray,
    type ItemListParams as ItemListParams,
    type ItemGetParams as ItemGetParams,
  };
}
