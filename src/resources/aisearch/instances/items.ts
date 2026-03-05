// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import {
  PagePromise,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Items extends APIResource {
  /**
   * Lists indexed items in an AI Search instance.
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
}

export type ItemListResponsesV4PagePaginationArray = V4PagePaginationArray<ItemListResponse>;

export interface ItemListResponse {
  id: number;

  checksum: string;

  chunks_count: number | null;

  created_at: string;

  file_size: number | null;

  key: string;

  last_seen_at: string;

  namespace: string;

  next_action: 'INDEX' | 'DELETE' | null;

  status: 'queued' | 'running' | 'completed' | 'error' | 'skipped';

  error?: string;

  public_id?: string;
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

export declare namespace Items {
  export {
    type ItemListResponse as ItemListResponse,
    type ItemListResponsesV4PagePaginationArray as ItemListResponsesV4PagePaginationArray,
    type ItemListParams as ItemListParams,
  };
}
