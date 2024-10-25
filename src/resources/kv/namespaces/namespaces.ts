// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as NamespacesAPI from './namespaces';
import * as BulkAPI from './bulk';
import * as KeysAPI from './keys';
import * as MetadataAPI from './metadata';
import * as ValuesAPI from './values';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../pagination';

export class Namespaces extends APIResource {
  bulk: BulkAPI.Bulk = new BulkAPI.Bulk(this._client);
  keys: KeysAPI.Keys = new KeysAPI.Keys(this._client);
  metadata: MetadataAPI.Metadata = new MetadataAPI.Metadata(this._client);
  values: ValuesAPI.Values = new ValuesAPI.Values(this._client);

  /**
   * Creates a namespace under the given title. A `400` is returned if the account
   * already owns a namespace with this title. A namespace must be explicitly deleted
   * to be replaced.
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
   */
  update(
    namespaceId: string,
    params: NamespaceUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NamespaceUpdateResponse | null> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/storage/kv/namespaces/${namespaceId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: NamespaceUpdateResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the namespaces owned by an account.
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
   * True if keys written on the URL will be URL-decoded before storing. For example,
   * if set to "true", a key written on the URL as "%3F" will be stored as "?".
   */
  supports_url_encoding?: boolean;
}

export interface NamespaceUpdateResponse {}

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

export namespace Namespaces {
  export type Namespace = NamespacesAPI.Namespace;
  export type NamespaceUpdateResponse = NamespacesAPI.NamespaceUpdateResponse;
  export type NamespaceDeleteResponse = NamespacesAPI.NamespaceDeleteResponse;
  export import NamespacesV4PagePaginationArray = NamespacesAPI.NamespacesV4PagePaginationArray;
  export type NamespaceCreateParams = NamespacesAPI.NamespaceCreateParams;
  export type NamespaceUpdateParams = NamespacesAPI.NamespaceUpdateParams;
  export type NamespaceListParams = NamespacesAPI.NamespaceListParams;
  export type NamespaceDeleteParams = NamespacesAPI.NamespaceDeleteParams;
  export type NamespaceGetParams = NamespacesAPI.NamespaceGetParams;
  export import Bulk = BulkAPI.Bulk;
  export type BulkUpdateResponse = BulkAPI.BulkUpdateResponse;
  export type BulkDeleteResponse = BulkAPI.BulkDeleteResponse;
  export type BulkUpdateParams = BulkAPI.BulkUpdateParams;
  export type BulkDeleteParams = BulkAPI.BulkDeleteParams;
  export import Keys = KeysAPI.Keys;
  export type Key = KeysAPI.Key;
  export import KeysCursorLimitPagination = KeysAPI.KeysCursorLimitPagination;
  export type KeyListParams = KeysAPI.KeyListParams;
  export import Metadata = MetadataAPI.Metadata;
  export type MetadataGetResponse = MetadataAPI.MetadataGetResponse;
  export type MetadataGetParams = MetadataAPI.MetadataGetParams;
  export import Values = ValuesAPI.Values;
  export type ValueUpdateResponse = ValuesAPI.ValueUpdateResponse;
  export type ValueDeleteResponse = ValuesAPI.ValueDeleteResponse;
  export type ValueUpdateParams = ValuesAPI.ValueUpdateParams;
  export type ValueDeleteParams = ValuesAPI.ValueDeleteParams;
  export type ValueGetParams = ValuesAPI.ValueGetParams;
}
