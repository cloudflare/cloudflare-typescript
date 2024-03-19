// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as NamespacesAPI from 'cloudflare/resources/kv/namespaces/namespaces';

export class KV extends APIResource {
  namespaces: NamespacesAPI.Namespaces = new NamespacesAPI.Namespaces(this._client);
}

export namespace KV {
  export import Namespaces = NamespacesAPI.Namespaces;
  export import WorkersKVNamespace = NamespacesAPI.WorkersKVNamespace;
  export import NamespaceUpdateResponse = NamespacesAPI.NamespaceUpdateResponse;
  export import NamespaceDeleteResponse = NamespacesAPI.NamespaceDeleteResponse;
  export import WorkersKVNamespacesV4PagePaginationArray = NamespacesAPI.WorkersKVNamespacesV4PagePaginationArray;
  export import NamespaceCreateParams = NamespacesAPI.NamespaceCreateParams;
  export import NamespaceUpdateParams = NamespacesAPI.NamespaceUpdateParams;
  export import NamespaceListParams = NamespacesAPI.NamespaceListParams;
  export import NamespaceDeleteParams = NamespacesAPI.NamespaceDeleteParams;
}
