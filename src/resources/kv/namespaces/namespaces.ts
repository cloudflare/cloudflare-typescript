// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as KeysAPI from './keys';
import {
  BaseKeys,
  Key,
  KeyBulkDeleteParams,
  KeyBulkDeleteResponse,
  KeyBulkGetParams,
  KeyBulkGetResponse,
  KeyBulkUpdateParams,
  KeyBulkUpdateResponse,
  KeyListParams,
  Keys,
  KeysCursorLimitPagination,
} from './keys';
import * as MetadataAPI from './metadata';
import { BaseMetadata, Metadata, MetadataGetParams, MetadataGetResponse } from './metadata';
import * as ValuesAPI from './values';
import {
  BaseValues,
  ValueDeleteParams,
  ValueDeleteResponse,
  ValueGetParams,
  ValueUpdateParams,
  ValueUpdateResponse,
  Values as ValuesAPIValues,
} from './values';
import { APIPromise } from '../../../core/api-promise';
import {
  PagePromise,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseNamespaces extends APIResource {
  static override readonly _key: readonly ['kv', 'namespaces'] = Object.freeze(['kv', 'namespaces'] as const);

  /**
   * Creates a Workers KV namespace in the specified account with the given title.
   * Returns `400` if the account already owns a namespace with that title; an
   * existing namespace must be explicitly deleted before it can be replaced. An
   * optional jurisdiction restricts where data is durably stored and can only be set
   * at creation time.
   *
   * @example
   * ```ts
   * const namespace = await client.kv.namespaces.create({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   title: 'My Own Namespace',
   * });
   * ```
   */
  create(params: NamespaceCreateParams, options?: RequestOptions): APIPromise<Namespace> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/storage/kv/namespaces`, {
        body,
        ...options,
      }) as APIPromise<{ result: Namespace }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Changes the title of the specified Workers KV namespace and returns the updated
   * namespace. The namespace ID and stored key-value pairs are unchanged.
   *
   * @example
   * ```ts
   * const namespace = await client.kv.namespaces.update(
   *   '0f2ac74b498b48028cb68387c421e279',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     title: 'My Own Namespace',
   *   },
   * );
   * ```
   */
  update(
    namespaceID: string,
    params: NamespaceUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Namespace> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/storage/kv/namespaces/${namespaceID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: Namespace }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists Workers KV namespaces owned by the specified account. Use `page` and
   * `per_page` to select a page of results, and `order` and `direction` to control
   * sorting.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const namespace of client.kv.namespaces.list({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * })) {
   *   // ...
   * }
   * ```
   */
  list(
    params: NamespaceListParams,
    options?: RequestOptions,
  ): PagePromise<NamespacesV4PagePaginationArray, Namespace> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/storage/kv/namespaces`,
      V4PagePaginationArray<Namespace>,
      { query, ...options },
    );
  }

  /**
   * Deletes the specified Workers KV namespace and its stored key-value pairs from
   * the account.
   *
   * @example
   * ```ts
   * const namespace = await client.kv.namespaces.delete(
   *   '0f2ac74b498b48028cb68387c421e279',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  delete(
    namespaceID: string,
    params: NamespaceDeleteParams,
    options?: RequestOptions,
  ): APIPromise<NamespaceDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/storage/kv/namespaces/${namespaceID}`,
        options,
      ) as APIPromise<{ result: NamespaceDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes up to 10,000 key-value pairs from the specified Workers KV namespace.
   * Send a JSON array of the key names to delete. The result reports the number of
   * successful deletions and any keys that failed and should be retried.
   *
   * @example
   * ```ts
   * const response = await client.kv.namespaces.bulkDelete(
   *   '0f2ac74b498b48028cb68387c421e279',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     body: ['My-Key'],
   *   },
   * );
   * ```
   */
  bulkDelete(
    namespaceID: string,
    params: NamespaceBulkDeleteParams,
    options?: RequestOptions,
  ): APIPromise<NamespaceBulkDeleteResponse | null> {
    const { account_id, body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/storage/kv/namespaces/${namespaceID}/bulk/delete`, {
        body: body,
        ...options,
      }) as APIPromise<{ result: NamespaceBulkDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the text-based values of up to 100 keys from the specified Workers KV
   * namespace. The result maps each requested key to its value. Set `type` to `json`
   * to parse JSON values instead of returning strings, and set `withMetadata` to
   * `true` to include metadata with each value. Binary values are not supported by
   * this operation.
   *
   * @example
   * ```ts
   * const response = await client.kv.namespaces.bulkGet(
   *   '0f2ac74b498b48028cb68387c421e279',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     keys: ['My-Key'],
   *   },
   * );
   * ```
   */
  bulkGet(
    namespaceID: string,
    params: NamespaceBulkGetParams,
    options?: RequestOptions,
  ): APIPromise<NamespaceBulkGetResponse | null> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/storage/kv/namespaces/${namespaceID}/bulk/get`, {
        body,
        ...options,
      }) as APIPromise<{ result: NamespaceBulkGetResponse | null }>
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
   * @example
   * ```ts
   * const response = await client.kv.namespaces.bulkUpdate(
   *   '0f2ac74b498b48028cb68387c421e279',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     body: [{ key: 'My-Key', value: 'Some string' }],
   *   },
   * );
   * ```
   */
  bulkUpdate(
    namespaceID: string,
    params: NamespaceBulkUpdateParams,
    options?: RequestOptions,
  ): APIPromise<NamespaceBulkUpdateResponse | null> {
    const { account_id, body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/storage/kv/namespaces/${namespaceID}/bulk`, {
        body: body,
        ...options,
      }) as APIPromise<{ result: NamespaceBulkUpdateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the Workers KV namespace for the specified account and namespace ID.
   *
   * @example
   * ```ts
   * const namespace = await client.kv.namespaces.get(
   *   '0f2ac74b498b48028cb68387c421e279',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  get(namespaceID: string, params: NamespaceGetParams, options?: RequestOptions): APIPromise<Namespace> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/storage/kv/namespaces/${namespaceID}`,
        options,
      ) as APIPromise<{ result: Namespace }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Namespaces extends BaseNamespaces {
  keys: KeysAPI.Keys = new KeysAPI.Keys(this._client);
  metadata: MetadataAPI.Metadata = new MetadataAPI.Metadata(this._client);
  values: ValuesAPI.Values = new ValuesAPI.Values(this._client);
}

export type NamespacesV4PagePaginationArray = V4PagePaginationArray<Namespace>;

export interface Namespace {
  /**
   * ID of the Workers KV namespace.
   */
  id: string;

  /**
   * Human-readable string name for a Workers KV namespace.
   */
  title: string;

  /**
   * Specify the jurisdiction to restrict the KV namespace to durably store data
   * within. Can only be set at namespace creation time.
   */
  jurisdiction?: 'eu' | 'fedramp' | 'us';

  /**
   * True if keys written on the URL will be URL-decoded before storing. For example,
   * if set to "true", a key written on the URL as "%3F" will be stored as "?".
   */
  supports_url_encoding?: boolean;
}

export interface NamespaceDeleteResponse {}

export interface NamespaceBulkDeleteResponse {
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

export type NamespaceBulkGetResponse =
  | NamespaceBulkGetResponse.WorkersKVBulkGetResult
  | NamespaceBulkGetResponse.WorkersKVBulkGetResultWithMetadata;

export namespace NamespaceBulkGetResponse {
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

export interface NamespaceBulkUpdateResponse {
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

export interface NamespaceCreateParams {
  /**
   * Path param: ID of the Cloudflare account that owns the Workers KV namespaces.
   */
  account_id: string;

  /**
   * Body param: Human-readable string name for a Workers KV namespace.
   */
  title: string;

  /**
   * Body param: Specify the jurisdiction to restrict the KV namespace to durably
   * store data within. Can only be set at namespace creation time.
   */
  jurisdiction?: 'eu' | 'fedramp' | 'us';
}

export interface NamespaceUpdateParams {
  /**
   * Path param: ID of the Cloudflare account that owns the Workers KV namespaces.
   */
  account_id: string;

  /**
   * Body param: Human-readable string name for a Workers KV namespace.
   */
  title: string;
}

export interface NamespaceListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: ID of the Cloudflare account that owns the Workers KV namespaces.
   */
  account_id: string;

  /**
   * Query param: Sort namespaces in ascending (`asc`) or descending (`desc`) order.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: Namespace field to sort by (`id` or `title`).
   */
  order?: 'id' | 'title';
}

export interface NamespaceDeleteParams {
  /**
   * ID of the Cloudflare account that owns the Workers KV namespaces.
   */
  account_id: string;
}

export interface NamespaceBulkDeleteParams {
  /**
   * Path param: ID of the Cloudflare account that owns the Workers KV namespaces.
   */
  account_id: string;

  /**
   * Body param
   */
  body: Array<string>;
}

export interface NamespaceBulkGetParams {
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

export interface NamespaceBulkUpdateParams {
  /**
   * Path param: ID of the Cloudflare account that owns the Workers KV namespaces.
   */
  account_id: string;

  /**
   * Body param
   */
  body: Array<NamespaceBulkUpdateParams.Body>;
}

export namespace NamespaceBulkUpdateParams {
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

export interface NamespaceGetParams {
  /**
   * ID of the Cloudflare account that owns the Workers KV namespaces.
   */
  account_id: string;
}

Namespaces.Keys = Keys;
Namespaces.BaseKeys = BaseKeys;
Namespaces.Metadata = Metadata;
Namespaces.BaseMetadata = BaseMetadata;
Namespaces.Values = ValuesAPIValues;
Namespaces.BaseValues = BaseValues;

export declare namespace Namespaces {
  export {
    type Namespace as Namespace,
    type NamespaceDeleteResponse as NamespaceDeleteResponse,
    type NamespaceBulkDeleteResponse as NamespaceBulkDeleteResponse,
    type NamespaceBulkGetResponse as NamespaceBulkGetResponse,
    type NamespaceBulkUpdateResponse as NamespaceBulkUpdateResponse,
    type NamespacesV4PagePaginationArray as NamespacesV4PagePaginationArray,
    type NamespaceCreateParams as NamespaceCreateParams,
    type NamespaceUpdateParams as NamespaceUpdateParams,
    type NamespaceListParams as NamespaceListParams,
    type NamespaceDeleteParams as NamespaceDeleteParams,
    type NamespaceBulkDeleteParams as NamespaceBulkDeleteParams,
    type NamespaceBulkGetParams as NamespaceBulkGetParams,
    type NamespaceBulkUpdateParams as NamespaceBulkUpdateParams,
    type NamespaceGetParams as NamespaceGetParams,
  };

  export {
    Keys as Keys,
    BaseKeys as BaseKeys,
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

  export {
    Metadata as Metadata,
    BaseMetadata as BaseMetadata,
    type MetadataGetResponse as MetadataGetResponse,
    type MetadataGetParams as MetadataGetParams,
  };

  export {
    ValuesAPIValues as Values,
    BaseValues as BaseValues,
    type ValueUpdateResponse as ValueUpdateResponse,
    type ValueDeleteResponse as ValueDeleteResponse,
    type ValueUpdateParams as ValueUpdateParams,
    type ValueDeleteParams as ValueDeleteParams,
    type ValueGetParams as ValueGetParams,
  };
}
