// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import {
  CursorLimitPagination,
  type CursorLimitPaginationParams,
  PagePromise,
} from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseKeys extends APIResource {
  static override readonly _key: readonly ['kv', 'namespaces', 'keys'] = Object.freeze([
    'kv',
    'namespaces',
    'keys',
  ] as const);

  /**
   * Lists key names in the specified Workers KV namespace, with expiration times and
   * metadata when present. Use `prefix` to filter names and `cursor` to request the
   * next page. Values are not included.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const key of client.kv.namespaces.keys.list(
   *   '0f2ac74b498b48028cb68387c421e279',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    namespaceID: string,
    params: KeyListParams,
    options?: RequestOptions,
  ): PagePromise<KeysCursorLimitPagination, Key> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/storage/kv/namespaces/${namespaceID}/keys`,
      CursorLimitPagination<Key>,
      { query, ...options },
    );
  }

  /**
   * Deletes up to 10,000 key-value pairs from the specified Workers KV namespace.
   * Send a JSON array of the key names to delete. The result reports the number of
   * successful deletions and any keys that failed and should be retried.
   *
   * @deprecated Please use kv.namespaces.bulk_delete instead
   */
  bulkDelete(
    namespaceID: string,
    params: KeyBulkDeleteParams,
    options?: RequestOptions,
  ): APIPromise<KeyBulkDeleteResponse | null> {
    const { account_id, body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/storage/kv/namespaces/${namespaceID}/bulk/delete`, {
        body: body,
        ...options,
      }) as APIPromise<{ result: KeyBulkDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the text-based values of up to 100 keys from the specified Workers KV
   * namespace. The result maps each requested key to its value. Set `type` to `json`
   * to parse JSON values instead of returning strings, and set `withMetadata` to
   * `true` to include metadata with each value. Binary values are not supported by
   * this operation.
   *
   * @deprecated Please use kv.namespaces.bulk_get instead
   */
  bulkGet(
    namespaceID: string,
    params: KeyBulkGetParams,
    options?: RequestOptions,
  ): APIPromise<KeyBulkGetResponse | null> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/storage/kv/namespaces/${namespaceID}/bulk/get`, {
        body,
        ...options,
      }) as APIPromise<{ result: KeyBulkGetResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Writes up to 10,000 key-value pairs to the specified Workers KV namespace from a
   * JSON array, with optional metadata and expiration settings for each pair.
   * Existing values and expirations are overwritten. If neither `expiration` nor
   * `expiration_ttl` is specified, the key-value pair will not expire. If both are
   * set, `expiration_ttl` takes precedence. The entire request must be 100 megabytes
   * or less. The result reports the number of successful writes and any keys that
   * failed and should be retried.
   *
   * @deprecated Please use kv.namespaces.bulk_update instead
   */
  bulkUpdate(
    namespaceID: string,
    params: KeyBulkUpdateParams,
    options?: RequestOptions,
  ): APIPromise<KeyBulkUpdateResponse | null> {
    const { account_id, body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/storage/kv/namespaces/${namespaceID}/bulk`, {
        body: body,
        ...options,
      }) as APIPromise<{ result: KeyBulkUpdateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Keys extends BaseKeys {}

export type KeysCursorLimitPagination = CursorLimitPagination<Key>;

/**
 * A name for a value. A value stored under a given key may be retrieved via the
 * same key.
 */
export interface Key {
  /**
   * A key's name. The name may be at most 512 bytes. All printable, non-whitespace
   * characters are valid. Use percent-encoding to define key names as part of a URL.
   */
  name: string;

  /**
   * The time, measured in number of seconds since the UNIX epoch, at which the key
   * will expire. This property is omitted for keys that will not expire.
   */
  expiration?: number;

  /**
   * Arbitrary JSON that is associated with a key.
   */
  metadata?: unknown;
}

export interface KeyBulkDeleteResponse {
  /**
   * Number of keys successfully written or deleted by the bulk operation.
   */
  successful_key_count?: number;

  /**
   * Names of keys that failed to be written or deleted. Retry the operation for
   * these keys.
   */
  unsuccessful_keys?: Array<string>;
}

export type KeyBulkGetResponse =
  | KeyBulkGetResponse.WorkersKVBulkGetResult
  | KeyBulkGetResponse.WorkersKVBulkGetResultWithMetadata;

export namespace KeyBulkGetResponse {
  export interface WorkersKVBulkGetResult {
    /**
     * Requested keys are paired with their values in an object.
     */
    values?: { [key: string]: string | number | boolean | { [key: string]: unknown } };
  }

  export interface WorkersKVBulkGetResultWithMetadata {
    /**
     * Requested keys are paired with their values and metadata in an object.
     */
    values?: { [key: string]: WorkersKVBulkGetResultWithMetadata.Values | null };
  }

  export namespace WorkersKVBulkGetResultWithMetadata {
    export interface Values {
      /**
       * The metadata associated with the key.
       */
      metadata: unknown;

      /**
       * The value associated with the key.
       */
      value: unknown;

      /**
       * Expires the key at a certain time, measured in number of seconds since the UNIX
       * epoch.
       */
      expiration?: number;
    }
  }
}

export interface KeyBulkUpdateResponse {
  /**
   * Number of keys successfully written or deleted by the bulk operation.
   */
  successful_key_count?: number;

  /**
   * Names of keys that failed to be written or deleted. Retry the operation for
   * these keys.
   */
  unsuccessful_keys?: Array<string>;
}

export interface KeyListParams extends CursorLimitPaginationParams {
  /**
   * Path param: ID of the Cloudflare account that owns the Workers KV namespaces.
   */
  account_id: string;

  /**
   * Query param: Filters returned keys by a name prefix. Exact matches and any key
   * names that begin with the prefix will be returned.
   */
  prefix?: string;
}

export interface KeyBulkDeleteParams {
  /**
   * Path param: ID of the Cloudflare account that owns the Workers KV namespaces.
   */
  account_id: string;

  /**
   * Body param
   */
  body: Array<string>;
}

export interface KeyBulkGetParams {
  /**
   * Path param: ID of the Cloudflare account that owns the Workers KV namespaces.
   */
  account_id: string;

  /**
   * Body param: Array of keys to retrieve (maximum of 100).
   */
  keys: Array<string>;

  /**
   * Body param: Return values as strings with `text`, or parse stored JSON values
   * with `json`.
   */
  type?: 'text' | 'json';

  /**
   * Body param: Whether to include metadata in the response.
   */
  withMetadata?: boolean;
}

export interface KeyBulkUpdateParams {
  /**
   * Path param: ID of the Cloudflare account that owns the Workers KV namespaces.
   */
  account_id: string;

  /**
   * Body param
   */
  body: Array<KeyBulkUpdateParams.Body>;
}

export namespace KeyBulkUpdateParams {
  export interface Body {
    /**
     * A key's name. The name may be at most 512 bytes. All printable, non-whitespace
     * characters are valid.
     */
    key: string;

    /**
     * A UTF-8 encoded string to be stored, up to 25 MiB in length.
     */
    value: string;

    /**
     * Indicates whether or not the server should base64 decode the value before
     * storing it. Useful for writing values that wouldn't otherwise be valid JSON
     * strings, such as images.
     */
    base64?: boolean;

    /**
     * Expires the key at a certain time, measured in number of seconds since the UNIX
     * epoch.
     */
    expiration?: number;

    /**
     * Number of seconds until the key expires. Must be at least 60. Takes precedence
     * over `expiration` when both are specified.
     */
    expiration_ttl?: number;

    /**
     * Arbitrary JSON that is associated with a key.
     */
    metadata?: unknown;
  }
}

export declare namespace Keys {
  export {
    type Key as Key,
    type KeyBulkDeleteResponse as KeyBulkDeleteResponse,
    type KeyBulkGetResponse as KeyBulkGetResponse,
    type KeyBulkUpdateResponse as KeyBulkUpdateResponse,
    type KeysCursorLimitPagination as KeysCursorLimitPagination,
    type KeyListParams as KeyListParams,
    type KeyBulkDeleteParams as KeyBulkDeleteParams,
    type KeyBulkGetParams as KeyBulkGetParams,
    type KeyBulkUpdateParams as KeyBulkUpdateParams,
  };
}
