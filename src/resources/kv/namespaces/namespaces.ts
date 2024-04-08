// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as NamespacesAPI from 'cloudflare/resources/kv/namespaces/namespaces';
import * as Shared from 'cloudflare/resources/shared';
import * as BulkAPI from 'cloudflare/resources/kv/namespaces/bulk';
import * as KeysAPI from 'cloudflare/resources/kv/namespaces/keys';
import * as MetadataAPI from 'cloudflare/resources/kv/namespaces/metadata';
import * as ValuesAPI from 'cloudflare/resources/kv/namespaces/values';
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
  ): Core.APIPromise<Shared.UnnamedSchemaRef8d6a37a1e4190f86652802244d29525f> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/storage/kv/namespaces/${namespaceId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: Shared.UnnamedSchemaRef8d6a37a1e4190f86652802244d29525f }>
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
  ): Core.APIPromise<Shared.UnnamedSchemaRef8d6a37a1e4190f86652802244d29525f> {
    const { account_id, body } = params;
    return (
      this._client.delete(`/accounts/${account_id}/storage/kv/namespaces/${namespaceId}`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: Shared.UnnamedSchemaRef8d6a37a1e4190f86652802244d29525f }>
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
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export namespace Namespaces {
  export import Namespace = NamespacesAPI.Namespace;
  export import NamespacesV4PagePaginationArray = NamespacesAPI.NamespacesV4PagePaginationArray;
  export import NamespaceCreateParams = NamespacesAPI.NamespaceCreateParams;
  export import NamespaceUpdateParams = NamespacesAPI.NamespaceUpdateParams;
  export import NamespaceListParams = NamespacesAPI.NamespaceListParams;
  export import NamespaceDeleteParams = NamespacesAPI.NamespaceDeleteParams;
  export import Bulk = BulkAPI.Bulk;
  export import BulkUpdateParams = BulkAPI.BulkUpdateParams;
  export import BulkDeleteParams = BulkAPI.BulkDeleteParams;
  export import Keys = KeysAPI.Keys;
  export import Key = KeysAPI.Key;
  export import KeysCursorLimitPagination = KeysAPI.KeysCursorLimitPagination;
  export import KeyListParams = KeysAPI.KeyListParams;
  export import Metadata = MetadataAPI.Metadata;
  export import MetadataGetResponse = MetadataAPI.MetadataGetResponse;
  export import MetadataGetParams = MetadataAPI.MetadataGetParams;
  export import Values = ValuesAPI.Values;
  export import ValueGetResponse = ValuesAPI.ValueGetResponse;
  export import ValueUpdateParams = ValuesAPI.ValueUpdateParams;
  export import ValueDeleteParams = ValuesAPI.ValueDeleteParams;
  export import ValueGetParams = ValuesAPI.ValueGetParams;
}
