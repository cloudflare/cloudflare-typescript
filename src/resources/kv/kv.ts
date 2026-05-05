// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as NamespacesAPI from './namespaces/namespaces';
import {
  BaseNamespaces,
  Namespace,
  NamespaceBulkDeleteParams,
  NamespaceBulkDeleteResponse,
  NamespaceBulkGetParams,
  NamespaceBulkGetResponse,
  NamespaceBulkUpdateParams,
  NamespaceBulkUpdateResponse,
  NamespaceCreateParams,
  NamespaceDeleteParams,
  NamespaceDeleteResponse,
  NamespaceGetParams,
  NamespaceListParams,
  NamespaceUpdateParams,
  Namespaces,
  NamespacesV4PagePaginationArray,
} from './namespaces/namespaces';

export class BaseKV extends APIResource {
  static override readonly _key: readonly ['kv'] = Object.freeze(['kv'] as const);
}
export class KV extends BaseKV {
  namespaces: NamespacesAPI.Namespaces = new NamespacesAPI.Namespaces(this._client);
}

KV.Namespaces = Namespaces;
KV.BaseNamespaces = BaseNamespaces;

export declare namespace KV {
  export {
    Namespaces as Namespaces,
    BaseNamespaces as BaseNamespaces,
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
}
