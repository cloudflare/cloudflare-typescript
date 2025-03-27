// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
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
   * Get the namespace corresponding to the given ID.
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
   * True if new beta namespace, with additional preview features.
   */
  beta?: boolean;

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

Namespaces.Keys = Keys;
Namespaces.Metadata = Metadata;
Namespaces.Values = Values;

export declare namespace Namespaces {
  export {
    type Namespace as Namespace,
    type NamespaceUpdateResponse as NamespaceUpdateResponse,
    type NamespaceDeleteResponse as NamespaceDeleteResponse,
    type NamespacesV4PagePaginationArray as NamespacesV4PagePaginationArray,
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
    type KeysCursorLimitPagination as KeysCursorLimitPagination,
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
