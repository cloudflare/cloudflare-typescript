// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as NamespacesAPI from 'cloudflare/resources/kv/namespaces/namespaces';

export class KV extends APIResource {
  namespaces: NamespacesAPI.Namespaces = new NamespacesAPI.Namespaces(this._client);
}

export namespace KV {
  export import Namespaces = NamespacesAPI.Namespaces;
  export import NamespaceCreateResponse = NamespacesAPI.NamespaceCreateResponse;
  export import NamespaceUpdateResponse = NamespacesAPI.NamespaceUpdateResponse;
  export import NamespaceListResponse = NamespacesAPI.NamespaceListResponse;
  export import NamespaceDeleteResponse = NamespacesAPI.NamespaceDeleteResponse;
  export import NamespaceListResponsesV4PagePaginationArray = NamespacesAPI.NamespaceListResponsesV4PagePaginationArray;
  export import NamespaceCreateParams = NamespacesAPI.NamespaceCreateParams;
  export import NamespaceUpdateParams = NamespacesAPI.NamespaceUpdateParams;
  export import NamespaceListParams = NamespacesAPI.NamespaceListParams;
  export import NamespaceDeleteParams = NamespacesAPI.NamespaceDeleteParams;
}
