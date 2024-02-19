// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as NamespacesAPI from 'cloudflare/resources/storage/kv/namespaces/namespaces';

export class Kv extends APIResource {
  namespaces: NamespacesAPI.Namespaces = new NamespacesAPI.Namespaces(this._client);
}

export namespace Kv {
  export import Namespaces = NamespacesAPI.Namespaces;
  export import NamespaceUpdateResponse = NamespacesAPI.NamespaceUpdateResponse;
  export import NamespaceListResponse = NamespacesAPI.NamespaceListResponse;
  export import NamespaceDeleteResponse = NamespacesAPI.NamespaceDeleteResponse;
  export import NamespaceWorkersKvNamespaceCreateANamespaceResponse = NamespacesAPI.NamespaceWorkersKvNamespaceCreateANamespaceResponse;
  export import NamespaceListResponsesV4PagePaginationArray = NamespacesAPI.NamespaceListResponsesV4PagePaginationArray;
  export import NamespaceUpdateParams = NamespacesAPI.NamespaceUpdateParams;
  export import NamespaceListParams = NamespacesAPI.NamespaceListParams;
  export import NamespaceWorkersKvNamespaceCreateANamespaceParams = NamespacesAPI.NamespaceWorkersKvNamespaceCreateANamespaceParams;
}
