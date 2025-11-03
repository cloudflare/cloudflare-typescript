// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as NamespacesAPI from './namespaces/namespaces';
import {
  Namespace,
  NamespaceBulkDeleteParams,
  NamespaceBulkDeleteResponse,
  NamespaceBulkUpdateParams,
  NamespaceBulkUpdateResponse,
  NamespaceCreateParams,
  NamespaceDeleteParams,
  NamespaceDeleteResponse,
  NamespaceGetParams,
  NamespaceListParams,
  NamespaceUpdateParams,
  NamespaceUpdateResponse,
  Namespaces,
  NamespacesV4PagePaginationArray,
} from './namespaces/namespaces';

export class KV extends APIResource {
  namespaces: NamespacesAPI.Namespaces = new NamespacesAPI.Namespaces(this._client);
}

KV.Namespaces = Namespaces;
KV.NamespacesV4PagePaginationArray = NamespacesV4PagePaginationArray;

export declare namespace KV {
  export {
    Namespaces as Namespaces,
    type Namespace as Namespace,
    type NamespaceUpdateResponse as NamespaceUpdateResponse,
    type NamespaceDeleteResponse as NamespaceDeleteResponse,
    type NamespaceBulkDeleteResponse as NamespaceBulkDeleteResponse,
    type NamespaceBulkUpdateResponse as NamespaceBulkUpdateResponse,
    NamespacesV4PagePaginationArray as NamespacesV4PagePaginationArray,
    type NamespaceCreateParams as NamespaceCreateParams,
    type NamespaceUpdateParams as NamespaceUpdateParams,
    type NamespaceListParams as NamespaceListParams,
    type NamespaceDeleteParams as NamespaceDeleteParams,
    type NamespaceBulkDeleteParams as NamespaceBulkDeleteParams,
    type NamespaceBulkUpdateParams as NamespaceBulkUpdateParams,
    type NamespaceGetParams as NamespaceGetParams,
  };
}
