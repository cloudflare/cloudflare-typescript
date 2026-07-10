// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import { APIPromise } from '../../../../core/api-promise';
import {
  PagePromise,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../../../core/pagination';
import { type Uploadable } from '../../../../core/uploads';
import { buildHeaders } from '../../../../internal/headers';
import { RequestOptions } from '../../../../internal/request-options';
import { multipartFormRequestOptions } from '../../../../internal/uploads';
import { path } from '../../../../internal/utils/path';

export class BaseItems extends APIResource {
  static override readonly _key: readonly ['aiSearch', 'namespaces', 'instances', 'items'] = Object.freeze([
    'aiSearch',
    'namespaces',
    'instances',
    'items',
  ] as const);

  /**
   * Lists indexed items in an AI Search instance.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const itemListResponse of client.aiSearch.namespaces.instances.items.list(
   *   'my-ai-search',
   *   {
   *     account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *     name: 'my-namespace',
   *   },
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
    const { account_id, name, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/ai-search/namespaces/${name}/instances/${id}/items`,
      V4PagePaginationArray<ItemListResponse>,
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
   *     'item_id',
   *     {
   *       account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *       name: 'my-namespace',
   *       id: 'my-ai-search',
   *     },
   *   );
   * ```
   */
  delete(itemID: string, params: ItemDeleteParams, options?: RequestOptions): APIPromise<ItemDeleteResponse> {
    const { account_id, name, id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/ai-search/namespaces/${name}/instances/${id}/items/${itemID}`,
        options,
      ) as APIPromise<{ result: ItemDeleteResponse }>
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
   *     'item_id',
   *     {
   *       account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *       name: 'my-namespace',
   *       id: 'my-ai-search',
   *     },
   *   );
   * ```
   */
  chunks(itemID: string, params: ItemChunksParams, options?: RequestOptions): APIPromise<ItemChunksResponse> {
    const { account_id, name, id, ...query } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/ai-search/namespaces/${name}/instances/${id}/items/${itemID}/chunks`,
        { query, ...options },
      ) as APIPromise<{ result: ItemChunksResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Creates or updates an indexed item in an AI Search instance.
   *
   * @example
   * ```ts
   * const response =
   *   await client.aiSearch.namespaces.instances.items.createOrUpdate(
   *     'my-ai-search',
   *     {
   *       account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *       name: 'my-namespace',
   *       key: 'key',
   *       next_action: 'INDEX',
   *     },
   *   );
   * ```
   */
  createOrUpdate(
    id: string,
    params: ItemCreateOrUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ItemCreateOrUpdateResponse> {
    const { account_id, name, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/ai-search/namespaces/${name}/instances/${id}/items`, {
        body,
        ...options,
      }) as APIPromise<{ result: ItemCreateOrUpdateResponse }>
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
   *     'item_id',
   *     {
   *       account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *       name: 'my-namespace',
   *       id: 'my-ai-search',
   *     },
   *   );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  download(itemID: string, params: ItemDownloadParams, options?: RequestOptions): APIPromise<Response> {
    const { account_id, name, id } = params;
    return this._client.get(
      path`/accounts/${account_id}/ai-search/namespaces/${name}/instances/${id}/items/${itemID}/download`,
      {
        ...options,
        headers: buildHeaders([{ Accept: 'application/octet-stream' }, options?.headers]),
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
   *     'item_id',
   *     {
   *       account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *       name: 'my-namespace',
   *       id: 'my-ai-search',
   *     },
   *   );
   * ```
   */
  get(itemID: string, params: ItemGetParams, options?: RequestOptions): APIPromise<ItemGetResponse> {
    const { account_id, name, id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/ai-search/namespaces/${name}/instances/${id}/items/${itemID}`,
        options,
      ) as APIPromise<{ result: ItemGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists processing logs for a specific item in an AI Search instance.
   *
   * @example
   * ```ts
   * const response =
   *   await client.aiSearch.namespaces.instances.items.logs(
   *     'item_id',
   *     {
   *       account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *       name: 'my-namespace',
   *       id: 'my-ai-search',
   *     },
   *   );
   * ```
   */
  logs(itemID: string, params: ItemLogsParams, options?: RequestOptions): APIPromise<ItemLogsResponse> {
    const { account_id, name, id, ...query } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/ai-search/namespaces/${name}/instances/${id}/items/${itemID}/logs`,
        { query, ...options },
      ) as APIPromise<{ result: ItemLogsResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Syncs an item to an AI Search instance index.
   *
   * @example
   * ```ts
   * const response =
   *   await client.aiSearch.namespaces.instances.items.sync(
   *     'item_id',
   *     {
   *       account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *       name: 'my-namespace',
   *       id: 'my-ai-search',
   *       next_action: 'INDEX',
   *     },
   *   );
   * ```
   */
  sync(itemID: string, params: ItemSyncParams, options?: RequestOptions): APIPromise<ItemSyncResponse> {
    const { account_id, name, id, ...body } = params;
    return (
      this._client.patch(
        path`/accounts/${account_id}/ai-search/namespaces/${name}/instances/${id}/items/${itemID}`,
        { body, ...options },
      ) as APIPromise<{ result: ItemSyncResponse }>
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
   *     'my-ai-search',
   *     {
   *       account_id: 'c3dc5f0b34a14ff8e1b3ec04895e1b22',
   *       name: 'my-namespace',
   *       file: { file: fs.createReadStream('path/to/file') },
   *     },
   *   );
   * ```
   */
  upload(id: string, params: ItemUploadParams, options?: RequestOptions): APIPromise<ItemUploadResponse> {
    const { account_id, name, file } = params;
    return (
      this._client.post(
        path`/accounts/${account_id}/ai-search/namespaces/${name}/instances/${id}/items`,
        multipartFormRequestOptions({ body: file, ...options }, this._client),
      ) as APIPromise<{ result: ItemUploadResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Items extends BaseItems {}

export type ItemListResponsesV4PagePaginationArray = V4PagePaginationArray<ItemListResponse>;

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
   * Path param: Namespace name
   */
  name: string;

  /**
   * Query param: Filter items by their unique ID. Returns at most one item.
   */
  item_id?: string;

  /**
   * Query param: Filter items by their exact key (object key / filename). Keys are
   * unique per source, so combine with `source` to disambiguate across data sources.
   */
  key?: string;

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

  /**
   * Namespace name
   */
  name: string;

  /**
   * AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.
   */
  id: string;
}

export interface ItemChunksParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Path param: Namespace name
   */
  name: string;

  /**
   * Path param: AI Search instance ID. Lowercase alphanumeric, hyphens, and
   * underscores.
   */
  id: string;

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
   * Path param: Namespace name
   */
  name: string;

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

  /**
   * Namespace name
   */
  name: string;

  /**
   * AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.
   */
  id: string;
}

export interface ItemGetParams {
  account_id: string;

  /**
   * Namespace name
   */
  name: string;

  /**
   * AI Search instance ID. Lowercase alphanumeric, hyphens, and underscores.
   */
  id: string;
}

export interface ItemLogsParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Path param: Namespace name
   */
  name: string;

  /**
   * Path param: AI Search instance ID. Lowercase alphanumeric, hyphens, and
   * underscores.
   */
  id: string;

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
   * Path param: Namespace name
   */
  name: string;

  /**
   * Path param: AI Search instance ID. Lowercase alphanumeric, hyphens, and
   * underscores.
   */
  id: string;

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
   * Path param: Namespace name
   */
  name: string;

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
    file: Uploadable;

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
    type ItemListResponsesV4PagePaginationArray as ItemListResponsesV4PagePaginationArray,
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
