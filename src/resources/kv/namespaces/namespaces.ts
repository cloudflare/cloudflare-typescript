// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as BulkAPI from './bulk';
import { Bulk, BulkDeleteParams, BulkDeleteResponse, BulkUpdateParams, BulkUpdateResponse } from './bulk';
import * as KeysAPI from './keys';
import { Key, KeyListParams, Keys, KeysCursorLimitPagination } from './keys';
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

Namespaces.NamespacesV4PagePaginationArray = NamespacesV4PagePaginationArray;
Namespaces.Bulk = Bulk;
Namespaces.Keys = Keys;
Namespaces.KeysCursorLimitPagination = KeysCursorLimitPagination;
Namespaces.Metadata = Metadata;
Namespaces.Values = Values;

export declare namespace Namespaces {
  export {
    type Namespace as Namespace,
    type NamespaceUpdateResponse as NamespaceUpdateResponse,
    type NamespaceDeleteResponse as NamespaceDeleteResponse,
    NamespacesV4PagePaginationArray as NamespacesV4PagePaginationArray,
    type NamespaceCreateParams as NamespaceCreateParams,
    type NamespaceUpdateParams as NamespaceUpdateParams,
    type NamespaceListParams as NamespaceListParams,
    type NamespaceDeleteParams as NamespaceDeleteParams,
    type NamespaceGetParams as NamespaceGetParams,
  };

  export {
    Bulk as Bulk,
    type BulkUpdateResponse as BulkUpdateResponse,
    type BulkDeleteResponse as BulkDeleteResponse,
    type BulkUpdateParams as BulkUpdateParams,
    type BulkDeleteParams as BulkDeleteParams,
  };

  export {
    Keys as Keys,
    type Key as Key,
    KeysCursorLimitPagination as KeysCursorLimitPagination,
    type KeyListParams as KeyListParams,
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
