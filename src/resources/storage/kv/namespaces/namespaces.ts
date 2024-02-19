// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as NamespacesAPI from 'cloudflare/resources/storage/kv/namespaces/namespaces';
import * as BulksAPI from 'cloudflare/resources/storage/kv/namespaces/bulks';
import * as KeysAPI from 'cloudflare/resources/storage/kv/namespaces/keys';
import * as MetadataAPI from 'cloudflare/resources/storage/kv/namespaces/metadata';
import * as ValuesAPI from 'cloudflare/resources/storage/kv/namespaces/values';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from 'cloudflare/pagination';

export class Namespaces extends APIResource {
  bulks: BulksAPI.Bulks = new BulksAPI.Bulks(this._client);
  keys: KeysAPI.Keys = new KeysAPI.Keys(this._client);
  metadata: MetadataAPI.Metadata = new MetadataAPI.Metadata(this._client);
  values: ValuesAPI.Values = new ValuesAPI.Values(this._client);

  /**
   * Modifies a namespace's title.
   */
  update(
    accountId: string,
    namespaceId: string,
    body: NamespaceUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NamespaceUpdateResponse> {
    return (
      this._client.put(`/accounts/${accountId}/storage/kv/namespaces/${namespaceId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: NamespaceUpdateResponse }>
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
   * Creates a namespace under the given title. A `400` is returned if the account
   * already owns a namespace with this title. A namespace must be explicitly deleted
   * to be replaced.
   */
  workersKvNamespaceCreateANamespace(
    accountId: string,
    body: NamespaceWorkersKvNamespaceCreateANamespaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NamespaceWorkersKvNamespaceCreateANamespaceResponse> {
    return (
      this._client.post(`/accounts/${accountId}/storage/kv/namespaces`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: NamespaceWorkersKvNamespaceCreateANamespaceResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class NamespaceListResponsesV4PagePaginationArray extends V4PagePaginationArray<NamespaceListResponse> {}

export type NamespaceUpdateResponse = unknown | string;

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

export interface NamespaceWorkersKvNamespaceCreateANamespaceResponse {
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

export interface NamespaceUpdateParams {
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

export interface NamespaceWorkersKvNamespaceCreateANamespaceParams {
  /**
   * A human-readable string name for a Namespace.
   */
  title: string;
}

export namespace Namespaces {
  export import NamespaceUpdateResponse = NamespacesAPI.NamespaceUpdateResponse;
  export import NamespaceListResponse = NamespacesAPI.NamespaceListResponse;
  export import NamespaceDeleteResponse = NamespacesAPI.NamespaceDeleteResponse;
  export import NamespaceWorkersKvNamespaceCreateANamespaceResponse = NamespacesAPI.NamespaceWorkersKvNamespaceCreateANamespaceResponse;
  export import NamespaceListResponsesV4PagePaginationArray = NamespacesAPI.NamespaceListResponsesV4PagePaginationArray;
  export import NamespaceUpdateParams = NamespacesAPI.NamespaceUpdateParams;
  export import NamespaceListParams = NamespacesAPI.NamespaceListParams;
  export import NamespaceWorkersKvNamespaceCreateANamespaceParams = NamespacesAPI.NamespaceWorkersKvNamespaceCreateANamespaceParams;
  export import Bulks = BulksAPI.Bulks;
  export import BulkDeleteResponse = BulksAPI.BulkDeleteResponse;
  export import BulkWorkersKvNamespaceWriteMultipleKeyValuePairsResponse = BulksAPI.BulkWorkersKvNamespaceWriteMultipleKeyValuePairsResponse;
  export import BulkDeleteParams = BulksAPI.BulkDeleteParams;
  export import BulkWorkersKvNamespaceWriteMultipleKeyValuePairsParams = BulksAPI.BulkWorkersKvNamespaceWriteMultipleKeyValuePairsParams;
  export import Keys = KeysAPI.Keys;
  export import KeyListResponse = KeysAPI.KeyListResponse;
  export import KeyListParams = KeysAPI.KeyListParams;
  export import Metadata = MetadataAPI.Metadata;
  export import MetadataGetResponse = MetadataAPI.MetadataGetResponse;
  export import Values = ValuesAPI.Values;
  export import ValueUpdateResponse = ValuesAPI.ValueUpdateResponse;
  export import ValueDeleteResponse = ValuesAPI.ValueDeleteResponse;
  export import ValueGetResponse = ValuesAPI.ValueGetResponse;
  export import ValueUpdateParams = ValuesAPI.ValueUpdateParams;
}
