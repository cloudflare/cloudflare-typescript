// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as BulksAPI from 'cloudflare/resources/storage/kv/namespaces/bulks';

export class Bulks extends APIResource {
  /**
   * Remove multiple KV pairs from the namespace. Body should be an array of up to
   * 10,000 keys to be removed.
   */
  delete(
    accountId: string,
    namespaceId: string,
    body: BulkDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BulkDeleteResponse> {
    return (
      this._client.delete(`/accounts/${accountId}/storage/kv/namespaces/${namespaceId}/bulk`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: BulkDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Write multiple keys and values at once. Body should be an array of up to 10,000
   * key-value pairs to be stored, along with optional expiration information.
   * Existing values and expirations will be overwritten. If neither `expiration` nor
   * `expiration_ttl` is specified, the key-value pair will never expire. If both are
   * set, `expiration_ttl` is used and `expiration` is ignored. The entire request
   * size must be 100 megabytes or less.
   */
  workersKvNamespaceWriteMultipleKeyValuePairs(
    accountId: string,
    namespaceId: string,
    body: BulkWorkersKvNamespaceWriteMultipleKeyValuePairsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BulkWorkersKvNamespaceWriteMultipleKeyValuePairsResponse> {
    return (
      this._client.put(`/accounts/${accountId}/storage/kv/namespaces/${namespaceId}/bulk`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: BulkWorkersKvNamespaceWriteMultipleKeyValuePairsResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type BulkDeleteResponse = unknown | string;

export type BulkWorkersKvNamespaceWriteMultipleKeyValuePairsResponse = unknown | string;

export type BulkDeleteParams = Array<string>;

export type BulkWorkersKvNamespaceWriteMultipleKeyValuePairsParams =
  Array<BulkWorkersKvNamespaceWriteMultipleKeyValuePairsParams.Body>;

export namespace BulkWorkersKvNamespaceWriteMultipleKeyValuePairsParams {
  export interface Body {
    /**
     * Whether or not the server should base64 decode the value before storing it.
     * Useful for writing values that wouldn't otherwise be valid JSON strings, such as
     * images.
     */
    base64?: boolean;

    /**
     * The time, measured in number of seconds since the UNIX epoch, at which the key
     * should expire.
     */
    expiration?: number;

    /**
     * The number of seconds for which the key should be visible before it expires. At
     * least 60.
     */
    expiration_ttl?: number;

    /**
     * A key's name. The name may be at most 512 bytes. All printable, non-whitespace
     * characters are valid.
     */
    key?: string;

    /**
     * Arbitrary JSON that is associated with a key.
     */
    metadata?: unknown;

    /**
     * A UTF-8 encoded string to be stored, up to 25 MiB in length.
     */
    value?: string;
  }
}

export namespace Bulks {
  export import BulkDeleteResponse = BulksAPI.BulkDeleteResponse;
  export import BulkWorkersKvNamespaceWriteMultipleKeyValuePairsResponse = BulksAPI.BulkWorkersKvNamespaceWriteMultipleKeyValuePairsResponse;
  export import BulkDeleteParams = BulksAPI.BulkDeleteParams;
  export import BulkWorkersKvNamespaceWriteMultipleKeyValuePairsParams = BulksAPI.BulkWorkersKvNamespaceWriteMultipleKeyValuePairsParams;
}
