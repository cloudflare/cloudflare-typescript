// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as KeysAPI from './keys';
import {
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
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../pagination';

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
  create(params: NamespaceCreateParams, options?: Core.RequestOptions): Core.APIPromise<Namespace> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/storage/kv/namespaces`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: Namespace }>
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
    namespaceId: string,
    params: NamespaceUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Namespace> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/storage/kv/namespaces/${namespaceId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: Namespace }>
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
    options?: Core.RequestOptions,
  ): Core.PagePromise<NamespacesV4PagePaginationArray, Namespace> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/storage/kv/namespaces`,
      NamespacesV4PagePaginationArray,
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
    namespaceId: string,
    params: NamespaceDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NamespaceDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/storage/kv/namespaces/${namespaceId}`,
        options,
      ) as Core.APIPromise<{ result: NamespaceDeleteResponse | null }>
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
  get(
    namespaceId: string,
    params: NamespaceGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Namespace> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/storage/kv/namespaces/${namespaceId}`,
        options,
      ) as Core.APIPromise<{ result: Namespace }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class NamespacesV4PagePaginationArray extends V4PagePaginationArray<Namespace> {}

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
   * True if new beta namespace, with additional preview features.
   */
  beta?: boolean;

  /**
   * True if keys written on the URL will be URL-decoded before storing. For example,
   * if set to "true", a key written on the URL as "%3F" will be stored as "?".
   */
  supports_url_encoding?: boolean;
}

export interface NamespaceDeleteResponse {}

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

export interface NamespaceGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

Namespaces.NamespacesV4PagePaginationArray = NamespacesV4PagePaginationArray;
Namespaces.Keys = Keys;
Namespaces.KeysCursorLimitPagination = KeysCursorLimitPagination;
Namespaces.Metadata = Metadata;
Namespaces.Values = Values;

export declare namespace Namespaces {
  export {
    type Namespace as Namespace,
    type NamespaceDeleteResponse as NamespaceDeleteResponse,
    NamespacesV4PagePaginationArray as NamespacesV4PagePaginationArray,
    type NamespaceCreateParams as NamespaceCreateParams,
    type NamespaceUpdateParams as NamespaceUpdateParams,
    type NamespaceListParams as NamespaceListParams,
    type NamespaceDeleteParams as NamespaceDeleteParams,
    type NamespaceGetParams as NamespaceGetParams,
  };

  export {
    Keys as Keys,
    type Key as Key,
    type KeyBulkDeleteResponse as KeyBulkDeleteResponse,
    type KeyBulkGetResponse as KeyBulkGetResponse,
    type KeyBulkUpdateResponse as KeyBulkUpdateResponse,
    KeysCursorLimitPagination as KeysCursorLimitPagination,
    type KeyListParams as KeyListParams,
    type KeyBulkDeleteParams as KeyBulkDeleteParams,
    type KeyBulkGetParams as KeyBulkGetParams,
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
