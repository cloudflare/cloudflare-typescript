// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as NamespacesAPI from 'cloudflare/resources/storage/kv/namespaces/namespaces';
import * as BulkAPI from 'cloudflare/resources/storage/kv/namespaces/bulk';
import * as KeysAPI from 'cloudflare/resources/storage/kv/namespaces/keys';
import * as MetadataAPI from 'cloudflare/resources/storage/kv/namespaces/metadata';
import * as ValuesAPI from 'cloudflare/resources/storage/kv/namespaces/values';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from 'cloudflare/pagination';

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
  create(
    accountId: string,
    body: NamespaceCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NamespaceCreateResponse> {
    return (
      this._client.post(`/accounts/${accountId}/storage/kv/namespaces`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: NamespaceCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the namespaces owned by an account.
   */
  list(
    accountId: string,
    query?: NamespaceListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<NamespaceListResponsesV4PagePaginationArray, NamespaceListResponse>;
  list(
    accountId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<NamespaceListResponsesV4PagePaginationArray, NamespaceListResponse>;
  list(
    accountId: string,
    query: NamespaceListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<NamespaceListResponsesV4PagePaginationArray, NamespaceListResponse> {
    if (isRequestOptions(query)) {
      return this.list(accountId, {}, query);
    }
    return this._client.getAPIList(
      `/accounts/${accountId}/storage/kv/namespaces`,
      NamespaceListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Deletes the namespace corresponding to the given ID.
   */
  delete(
    accountId: string,
    namespaceId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NamespaceDeleteResponse> {
    return (
      this._client.delete(
        `/accounts/${accountId}/storage/kv/namespaces/${namespaceId}`,
        options,
      ) as Core.APIPromise<{ result: NamespaceDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Modifies a namespace's title.
   */
  replace(
    accountId: string,
    namespaceId: string,
    body: NamespaceReplaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NamespaceReplaceResponse> {
    return (
      this._client.put(`/accounts/${accountId}/storage/kv/namespaces/${namespaceId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: NamespaceReplaceResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class NamespaceListResponsesV4PagePaginationArray extends V4PagePaginationArray<NamespaceListResponse> {}

export interface NamespaceCreateResponse {
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

export interface NamespaceListResponse {
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

export type NamespaceDeleteResponse = unknown | string;

export type NamespaceReplaceResponse = unknown | string;

export interface NamespaceCreateParams {
  /**
   * A human-readable string name for a Namespace.
   */
  title: string;
}

export interface NamespaceListParams extends V4PagePaginationArrayParams {
  /**
   * Direction to order namespaces.
   */
  direction?: 'asc' | 'desc';

  /**
   * Field to order results by.
   */
  order?: 'id' | 'title';
}

export interface NamespaceReplaceParams {
  /**
   * A human-readable string name for a Namespace.
   */
  title: string;
}

export namespace Namespaces {
  export import NamespaceCreateResponse = NamespacesAPI.NamespaceCreateResponse;
  export import NamespaceListResponse = NamespacesAPI.NamespaceListResponse;
  export import NamespaceDeleteResponse = NamespacesAPI.NamespaceDeleteResponse;
  export import NamespaceReplaceResponse = NamespacesAPI.NamespaceReplaceResponse;
  export import NamespaceListResponsesV4PagePaginationArray = NamespacesAPI.NamespaceListResponsesV4PagePaginationArray;
  export import NamespaceCreateParams = NamespacesAPI.NamespaceCreateParams;
  export import NamespaceListParams = NamespacesAPI.NamespaceListParams;
  export import NamespaceReplaceParams = NamespacesAPI.NamespaceReplaceParams;
  export import Bulk = BulkAPI.Bulk;
  export import BulkDeleteResponse = BulkAPI.BulkDeleteResponse;
  export import BulkReplaceResponse = BulkAPI.BulkReplaceResponse;
  export import BulkDeleteParams = BulkAPI.BulkDeleteParams;
  export import BulkReplaceParams = BulkAPI.BulkReplaceParams;
  export import Keys = KeysAPI.Keys;
  export import KeyListResponse = KeysAPI.KeyListResponse;
  export import KeyListParams = KeysAPI.KeyListParams;
  export import Metadata = MetadataAPI.Metadata;
  export import MetadataGetResponse = MetadataAPI.MetadataGetResponse;
  export import Values = ValuesAPI.Values;
  export import ValueDeleteResponse = ValuesAPI.ValueDeleteResponse;
  export import ValueGetResponse = ValuesAPI.ValueGetResponse;
  export import ValueReplaceResponse = ValuesAPI.ValueReplaceResponse;
  export import ValueReplaceParams = ValuesAPI.ValueReplaceParams;
}
