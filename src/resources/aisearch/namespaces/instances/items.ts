// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../../pagination';
import { type Response } from '../../../../_shims/index';

export class Items extends APIResource {
  /**
   * Lists indexed items in an AI Search instance.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const itemListResponse of client.aiSearch.namespaces.instances.items.list(
   *   'my-namespace',
   *   'my-ai-search',
   *   { account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    name: string,
    id: string,
    params: ItemListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ItemListResponsesV4PagePaginationArray, ItemListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/ai-search/namespaces/${name}/instances/${id}/items`,
      ItemListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Deletes a file from a managed AI Search instance and triggers a reindex.
   *
   * @example
   * ```ts
   * const item =
   *   await client.aiSearch.namespaces.instances.items.delete(
   *     'my-namespace',
   *     'my-ai-search',
   *     'item_id',
   *     { account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22' },
   *   );
   * ```
   */
  delete(
    name: string,
    id: string,
    itemId: string,
    params: ItemDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ItemDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/ai-search/namespaces/${name}/instances/${id}/items/${itemId}`,
        options,
      ) as Core.APIPromise<{ result: ItemDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists chunks for a specific item in an AI Search instance, including their text
   * content.
   *
   * @example
   * ```ts
   * const response =
   *   await client.aiSearch.namespaces.instances.items.chunks(
   *     'my-namespace',
   *     'my-ai-search',
   *     'item_id',
   *     { account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22' },
   *   );
   * ```
   */
  chunks(
    name: string,
    id: string,
    itemId: string,
    params: ItemChunksParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ItemChunksResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/ai-search/namespaces/${name}/instances/${id}/items/${itemId}/chunks`,
        { query, ...options },
      ) as Core.APIPromise<{ result: ItemChunksResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Creates or updates an indexed item in an AI Search instance.
   *
   * @example
   * ```ts
   * const response =
   *   await client.aiSearch.namespaces.instances.items.createOrUpdate(
   *     'my-namespace',
   *     'my-ai-search',
   *     {
   *       account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *       key: 'key',
   *       next_action: 'INDEX',
   *     },
   *   );
   * ```
   */
  createOrUpdate(
    name: string,
    id: string,
    params: ItemCreateOrUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ItemCreateOrUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/ai-search/namespaces/${name}/instances/${id}/items`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ItemCreateOrUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Downloads the raw file content for a specific item from the managed AI Search
   * instance storage.
   *
   * @example
   * ```ts
   * const response =
   *   await client.aiSearch.namespaces.instances.items.download(
   *     'my-namespace',
   *     'my-ai-search',
   *     'item_id',
   *     { account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22' },
   *   );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  download(
    name: string,
    id: string,
    itemId: string,
    params: ItemDownloadParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Response> {
    const { account_id } = params;
    return this._client.get(
      `/accounts/${account_id}/ai-search/namespaces/${name}/instances/${id}/items/${itemId}/download`,
      {
        ...options,
        headers: { Accept: 'application/octet-stream', ...options?.headers },
        __binaryResponse: true,
      },
    );
  }

  /**
   * Retrieves a specific indexed item from an AI Search instance.
   *
   * @example
   * ```ts
   * const item =
   *   await client.aiSearch.namespaces.instances.items.get(
   *     'my-namespace',
   *     'my-ai-search',
   *     'item_id',
   *     { account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22' },
   *   );
   * ```
   */
  get(
    name: string,
    id: string,
    itemId: string,
    params: ItemGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ItemGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/ai-search/namespaces/${name}/instances/${id}/items/${itemId}`,
        options,
      ) as Core.APIPromise<{ result: ItemGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists processing logs for a specific item in an AI Search instance.
   *
   * @example
   * ```ts
   * const response =
   *   await client.aiSearch.namespaces.instances.items.logs(
   *     'my-namespace',
   *     'my-ai-search',
   *     'item_id',
   *     { account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22' },
   *   );
   * ```
   */
  logs(
    name: string,
    id: string,
    itemId: string,
    params: ItemLogsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ItemLogsResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/ai-search/namespaces/${name}/instances/${id}/items/${itemId}/logs`,
        { query, ...options },
      ) as Core.APIPromise<{ result: ItemLogsResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Syncs an item to an AI Search instance index.
   *
   * @example
   * ```ts
   * const response =
   *   await client.aiSearch.namespaces.instances.items.sync(
   *     'my-namespace',
   *     'my-ai-search',
   *     'item_id',
   *     {
   *       account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *       next_action: 'INDEX',
   *     },
   *   );
   * ```
   */
  sync(
    name: string,
    id: string,
    itemId: string,
    params: ItemSyncParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ItemSyncResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(
        `/accounts/${account_id}/ai-search/namespaces/${name}/instances/${id}/items/${itemId}`,
        { body, ...options },
      ) as Core.APIPromise<{ result: ItemSyncResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Uploads a file to a managed AI Search instance via multipart/form-data (max
   * 4MB).
   *
   * @example
   * ```ts
   * const response =
   *   await client.aiSearch.namespaces.instances.items.upload(
   *     'my-namespace',
   *     'my-ai-search',
   *     {
   *       account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *       file: { file: fs.createReadStream('path/to/file') },
   *     },
   *   );
   * ```
   */
  upload(
    name: string,
    id: string,
    params: ItemUploadParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ItemUploadResponse> {
    const { account_id, file } = params;
    return (
      this._client.post(
        `/accounts/${account_id}/ai-search/namespaces/${name}/instances/${id}/items`,
        Core.multipartFormRequestOptions({ body: file, ...options }),
      ) as Core.APIPromise<{ result: ItemUploadResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class ItemListResponsesV4PagePaginationArray extends V4PagePaginationArray<ItemListResponse> {}

export interface ItemListResponse {
  id: string;

  checksum: string;

  chunks_count: number | null;

  created_at: string;

  file_size: number | null;

  key: string;

  last_seen_at: string;

  namespace: string;

  next_action: 'INDEX' | 'DELETE' | null;

  /**
   * Identifies which data source this item belongs to. "builtin" for uploaded files,
   * "{type}:{source}" for external sources, null for legacy items.
   */
  source_id: string | null;

  status: 'queued' | 'running' | 'completed' | 'error' | 'skipped' | 'outdated';

  error?: string;
}

export interface ItemDeleteResponse {
  key: string;
}

export type ItemChunksResponse = Array<ItemChunksResponse.ItemChunksResponseItem>;

export namespace ItemChunksResponse {
  export interface ItemChunksResponseItem {
    id: string;

    item: ItemChunksResponseItem.Item;

    text: string;

    end_byte?: number;

    start_byte?: number;
  }

  export namespace ItemChunksResponseItem {
    export interface Item {
      key: string;

      metadata?: { [key: string]: unknown };

      timestamp?: number;
    }
  }
}

export interface ItemCreateOrUpdateResponse {
  id: string;

  checksum: string;

  chunks_count: number | null;

  created_at: string;

  file_size: number | null;

  key: string;

  last_seen_at: string;

  namespace: string;

  next_action: 'INDEX' | 'DELETE' | null;

  /**
   * Identifies which data source this item belongs to. "builtin" for uploaded files,
   * "{type}:{source}" for external sources, null for legacy items.
   */
  source_id: string | null;

  status: 'queued' | 'running' | 'completed' | 'error' | 'skipped' | 'outdated';

  error?: string;
}

export interface ItemGetResponse {
  id: string;

  checksum: string;

  chunks_count: number | null;

  created_at: string;

  file_size: number | null;

  key: string;

  last_seen_at: string;

  namespace: string;

  next_action: 'INDEX' | 'DELETE' | null;

  /**
   * Identifies which data source this item belongs to. "builtin" for uploaded files,
   * "{type}:{source}" for external sources, null for legacy items.
   */
  source_id: string | null;

  status: 'queued' | 'running' | 'completed' | 'error' | 'skipped' | 'outdated';

  error?: string;
}

export type ItemLogsResponse = Array<ItemLogsResponse.ItemLogsResponseItem>;

export namespace ItemLogsResponse {
  export interface ItemLogsResponseItem {
    action: string;

    chunkCount: number | null;

    errorType: string | null;

    fileKey: string;

    message: string | null;

    processingTimeMs: number | null;

    timestamp: string;
  }
}

export interface ItemSyncResponse {
  id: string;

  checksum: string;

  chunks_count: number | null;

  created_at: string;

  file_size: number | null;

  key: string;

  last_seen_at: string;

  namespace: string;

  next_action: 'INDEX' | 'DELETE' | null;

  /**
   * Identifies which data source this item belongs to. "builtin" for uploaded files,
   * "{type}:{source}" for external sources, null for legacy items.
   */
  source_id: string | null;

  status: 'queued' | 'running' | 'completed' | 'error' | 'skipped' | 'outdated';

  error?: string;
}

export interface ItemUploadResponse {
  id: string;

  checksum: string;

  chunks_count: number | null;

  created_at: string;

  file_size: number | null;

  key: string;

  last_seen_at: string;

  namespace: string;

  next_action: 'INDEX' | 'DELETE' | null;

  /**
   * Identifies which data source this item belongs to. "builtin" for uploaded files,
   * "{type}:{source}" for external sources, null for legacy items.
   */
  source_id: string | null;

  status: 'queued' | 'running' | 'completed' | 'error' | 'skipped' | 'outdated';

  error?: string;
}

export interface ItemListParams extends V4PagePaginationArrayParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Query param: Filter items by their unique ID. Returns at most one item.
   */
  item_id?: string;

  /**
   * Query param: JSON-encoded metadata filter using Vectorize filter syntax.
   * Examples: {"folder":"reports/"},
   * {"timestamp":{"$gte":1700000000000}}, {"folder":{"$in":["docs/","reports/"]}}
   */
  metadata_filter?: string;

  /**
   * Query param
   */
  search?: string;

  /**
   * Query param: Sort order for items. "status" (default) sorts by status priority
   * then last_seen_at. "modified_at" sorts by file modification time (most recent
   * first), falling back to created_at.
   */
  sort_by?: 'status' | 'modified_at';

  /**
   * Query param: Filter items by source_id. Use "builtin" for uploaded files, or a
   * source identifier like "web-crawler:https://example.com".
   */
  source?: string;

  /**
   * Query param
   */
  status?: 'queued' | 'running' | 'completed' | 'error' | 'skipped' | 'outdated';
}

export interface ItemDeleteParams {
  account_id: string;
}

export interface ItemChunksParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Query param
   */
  limit?: number;

  /**
   * Query param
   */
  offset?: number;
}

export interface ItemCreateOrUpdateParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param: Item key / filename. Must not exceed 128 characters.
   */
  key: string;

  /**
   * Body param
   */
  next_action: 'INDEX';

  /**
   * Body param: Wait for indexing to fully complete before responding. On RAGs with
   * vector indexing enabled, this additionally waits for Vectorize ingestion
   * confirmation (up to 40s) so the returned item reflects a queryable state. On
   * timeout the item is returned in `running` state and the background alarm
   * continues polling. Defaults to false.
   */
  wait_for_completion?: boolean;
}

export interface ItemDownloadParams {
  account_id: string;
}

export interface ItemGetParams {
  account_id: string;
}

export interface ItemLogsParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Query param
   */
  cursor?: string;

  /**
   * Query param
   */
  limit?: number;
}

export interface ItemSyncParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param
   */
  next_action: 'INDEX';

  /**
   * Body param: Wait for indexing to fully complete before responding. On RAGs with
   * vector indexing enabled, this additionally waits for Vectorize ingestion
   * confirmation (up to 40s) so the returned item reflects a queryable state. On
   * timeout the item is returned in `running` state and the background alarm
   * continues polling. Defaults to false.
   */
  wait_for_completion?: boolean;
}

export interface ItemUploadParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Body param
   */
  file: ItemUploadParams.File;
}

export namespace ItemUploadParams {
  export interface File {
    /**
     * The file to upload (max 4MB). Filename must not exceed 128 characters.
     */
    file: Core.Uploadable;

    /**
     * JSON string of custom metadata key-value pairs.
     */
    metadata?: string;

    /**
     * Wait for indexing to fully complete before responding. On RAGs with vector
     * indexing enabled, this additionally waits for Vectorize ingestion confirmation
     * (up to 40s) so the returned item reflects a queryable state. On timeout the item
     * is returned in `running` state and the background alarm continues polling.
     * Defaults to false.
     */
    wait_for_completion?: boolean;
  }
}

Items.ItemListResponsesV4PagePaginationArray = ItemListResponsesV4PagePaginationArray;

export declare namespace Items {
  export {
    type ItemListResponse as ItemListResponse,
    type ItemDeleteResponse as ItemDeleteResponse,
    type ItemChunksResponse as ItemChunksResponse,
    type ItemCreateOrUpdateResponse as ItemCreateOrUpdateResponse,
    type ItemGetResponse as ItemGetResponse,
    type ItemLogsResponse as ItemLogsResponse,
    type ItemSyncResponse as ItemSyncResponse,
    type ItemUploadResponse as ItemUploadResponse,
    ItemListResponsesV4PagePaginationArray as ItemListResponsesV4PagePaginationArray,
    type ItemListParams as ItemListParams,
    type ItemDeleteParams as ItemDeleteParams,
    type ItemChunksParams as ItemChunksParams,
    type ItemCreateOrUpdateParams as ItemCreateOrUpdateParams,
    type ItemDownloadParams as ItemDownloadParams,
    type ItemGetParams as ItemGetParams,
    type ItemLogsParams as ItemLogsParams,
    type ItemSyncParams as ItemSyncParams,
    type ItemUploadParams as ItemUploadParams,
  };
}
