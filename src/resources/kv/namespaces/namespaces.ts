// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as KeysAPI from './keys';
import {
  Key,
  KeyBulkDeleteParams,
  KeyBulkDeleteResponse,
  KeyBulkUpdateParams,
  KeyBulkUpdateResponse,
  KeyListParams,
  Keys,
  KeysCursorPaginationAfter,
} from './keys';
import * as MetadataAPI from './metadata';
import { Metadata, MetadataGetParams, MetadataGetResponse } from './metadata';
import * as ValuesAPI from './values';
import {
  ValueDeleteParams,
  ValueDeleteResponse,
  ValueGetParams,
  ValueUpdateParams,
  ValueUpdateResponse,
  Values,
} from './values';
import { APIPromise } from '../../../core/api-promise';
import {
  PagePromise,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Namespaces extends APIResource {
  keys: KeysAPI.Keys = new KeysAPI.Keys(this._client);
  metadata: MetadataAPI.Metadata = new MetadataAPI.Metadata(this._client);
  values: ValuesAPI.Values = new ValuesAPI.Values(this._client);

  /**
   * Creates a namespace under the given title. A `400` is returned if the account
   * already owns a namespace with this title. A namespace must be explicitly deleted
   * to be replaced.
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
   * Modifies a namespace's title.
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
  ): APIPromise<NamespaceUpdateResponse | null> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/storage/kv/namespaces/${namespaceID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: NamespaceUpdateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the namespaces owned by an account.
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
   * Deletes the namespace corresponding to the given ID.
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
   * Remove multiple KV pairs from the namespace. Body should be an array of up to
   * 10,000 keys to be removed.
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
   * Write multiple keys and values at once. Body should be an array of up to 10,000
   * key-value pairs to be stored, along with optional expiration information.
   * Existing values and expirations will be overwritten. If neither `expiration` nor
   * `expiration_ttl` is specified, the key-value pair will never expire. If both are
   * set, `expiration_ttl` is used and `expiration` is ignored. The entire request
   * size must be 100 megabytes or less.
   *
   * @example
   * ```ts
   * const response = await client.kv.namespaces.bulkUpdate(
   *   '0f2ac74b498b48028cb68387c421e279',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     body: [{}],
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
   * Get the namespace corresponding to the given ID.
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

export type NamespacesV4PagePaginationArray = V4PagePaginationArray<Namespace>;

export interface Namespace {
  /**
   * Namespace identifier tag.
   */
  id: string;

  /**
   * A human-readable string name for a Namespace.
   */
  title: string;

  /**
   * True if keys written on the URL will be URL-decoded before storing. For example,
   * if set to "true", a key written on the URL as "%3F" will be stored as "?".
   */
  supports_url_encoding?: boolean;
}

export interface NamespaceUpdateResponse {}

export interface NamespaceDeleteResponse {}

export interface NamespaceBulkDeleteResponse {
  /**
   * Number of keys successfully updated
   */
  successful_key_count?: number;

  /**
   * Name of the keys that failed to be fully updated. They should be retried.
   */
  unsuccessful_keys?: Array<string>;
}

export interface NamespaceBulkUpdateResponse {
  /**
   * Number of keys successfully updated
   */
  successful_key_count?: number;

  /**
   * Name of the keys that failed to be fully updated. They should be retried.
   */
  unsuccessful_keys?: Array<string>;
}

export interface NamespaceCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: A human-readable string name for a Namespace.
   */
  title: string;
}

export interface NamespaceUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: A human-readable string name for a Namespace.
   */
  title: string;
}

export interface NamespaceListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Query param: Direction to order namespaces.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: Field to order results by.
   */
  order?: 'id' | 'title';
}

export interface NamespaceDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface NamespaceBulkDeleteParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  body: Array<string>;
}

export interface NamespaceBulkUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  body: Array<NamespaceBulkUpdateParams.Body>;
}

export namespace NamespaceBulkUpdateParams {
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
    metadata?: { [key: string]: unknown };

    /**
     * A UTF-8 encoded string to be stored, up to 25 MiB in length.
     */
    value?: string;
  }
}

export interface NamespaceGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

Namespaces.Keys = Keys;
Namespaces.Metadata = Metadata;
Namespaces.Values = Values;

export declare namespace Namespaces {
  export {
    type Namespace as Namespace,
    type NamespaceUpdateResponse as NamespaceUpdateResponse,
    type NamespaceDeleteResponse as NamespaceDeleteResponse,
    type NamespaceBulkDeleteResponse as NamespaceBulkDeleteResponse,
    type NamespaceBulkUpdateResponse as NamespaceBulkUpdateResponse,
    type NamespacesV4PagePaginationArray as NamespacesV4PagePaginationArray,
    type NamespaceCreateParams as NamespaceCreateParams,
    type NamespaceUpdateParams as NamespaceUpdateParams,
    type NamespaceListParams as NamespaceListParams,
    type NamespaceDeleteParams as NamespaceDeleteParams,
    type NamespaceBulkDeleteParams as NamespaceBulkDeleteParams,
    type NamespaceBulkUpdateParams as NamespaceBulkUpdateParams,
    type NamespaceGetParams as NamespaceGetParams,
  };

  export {
    Keys as Keys,
    type Key as Key,
    type KeyBulkDeleteResponse as KeyBulkDeleteResponse,
    type KeyBulkUpdateResponse as KeyBulkUpdateResponse,
    type KeysCursorPaginationAfter as KeysCursorPaginationAfter,
    type KeyListParams as KeyListParams,
    type KeyBulkDeleteParams as KeyBulkDeleteParams,
    type KeyBulkUpdateParams as KeyBulkUpdateParams,
  };

  export {
    Metadata as Metadata,
    type MetadataGetResponse as MetadataGetResponse,
    type MetadataGetParams as MetadataGetParams,
  };

  export {
    Values as Values,
    type ValueUpdateResponse as ValueUpdateResponse,
    type ValueDeleteResponse as ValueDeleteResponse,
    type ValueUpdateParams as ValueUpdateParams,
    type ValueDeleteParams as ValueDeleteParams,
    type ValueGetParams as ValueGetParams,
  };
}
