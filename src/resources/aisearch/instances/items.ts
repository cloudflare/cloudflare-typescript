// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../pagination';

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
    options?: Core.RequestOptions,
  ): Core.PagePromise<ItemListResponsesV4PagePaginationArray, ItemListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/ai-search/instances/${id}/items`,
      ItemListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Get Items.
   *
   * @example
   * ```ts
   * const item = await client.aiSearch.instances.items.get(
   *   'my-ai-search',
   *   'item_id',
   *   { account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22' },
   * );
   * ```
   */
  get(
    id: string,
    itemId: string,
    params: ItemGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ItemGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/ai-search/instances/${id}/items/${itemId}`,
        options,
      ) as Core.APIPromise<{ result: ItemGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class ItemListResponsesV4PagePaginationArray extends V4PagePaginationArray<ItemListResponse> {}

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
   * Path param:
   */
  account_id: string;

  /**
   * Query param:
   */
  search?: string;

  /**
   * Query param:
   */
  status?: 'queued' | 'running' | 'completed' | 'error' | 'skipped';
}

export interface ItemGetParams {
  account_id: string;
}

Items.ItemListResponsesV4PagePaginationArray = ItemListResponsesV4PagePaginationArray;

export declare namespace Items {
  export {
    type ItemListResponse as ItemListResponse,
    type ItemGetResponse as ItemGetResponse,
    ItemListResponsesV4PagePaginationArray as ItemListResponsesV4PagePaginationArray,
    type ItemListParams as ItemListParams,
    type ItemGetParams as ItemGetParams,
  };
}
