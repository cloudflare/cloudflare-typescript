// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as NamespacesAPI from './namespaces/namespaces';

export class KV extends APIResource {
  namespaces: NamespacesAPI.Namespaces = new NamespacesAPI.Namespaces(this._client);
}

export namespace KV {
  export import Namespaces = NamespacesAPI.Namespaces;
  export type Namespace = NamespacesAPI.Namespace;
  export type NamespaceUpdateResponse = NamespacesAPI.NamespaceUpdateResponse;
  export type NamespaceDeleteResponse = NamespacesAPI.NamespaceDeleteResponse;
  export import NamespacesV4PagePaginationArray = NamespacesAPI.NamespacesV4PagePaginationArray;
  export type NamespaceCreateParams = NamespacesAPI.NamespaceCreateParams;
  export type NamespaceUpdateParams = NamespacesAPI.NamespaceUpdateParams;
  export type NamespaceListParams = NamespacesAPI.NamespaceListParams;
  export type NamespaceDeleteParams = NamespacesAPI.NamespaceDeleteParams;
  export type NamespaceGetParams = NamespacesAPI.NamespaceGetParams;
}
