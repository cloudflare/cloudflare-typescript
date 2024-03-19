// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as NamespacesAPI from 'cloudflare/resources/workers-for-platforms/dispatch/namespaces/namespaces';

export class Dispatch extends APIResource {
  namespaces: NamespacesAPI.Namespaces = new NamespacesAPI.Namespaces(this._client);
}

export namespace Dispatch {
  export import Namespaces = NamespacesAPI.Namespaces;
  export import NamespaceCreateResponse = NamespacesAPI.NamespaceCreateResponse;
  export import NamespaceListResponse = NamespacesAPI.NamespaceListResponse;
  export import NamespaceDeleteResponse = NamespacesAPI.NamespaceDeleteResponse;
  export import NamespaceGetResponse = NamespacesAPI.NamespaceGetResponse;
  export import NamespaceCreateParams = NamespacesAPI.NamespaceCreateParams;
  export import NamespaceListParams = NamespacesAPI.NamespaceListParams;
  export import NamespaceDeleteParams = NamespacesAPI.NamespaceDeleteParams;
  export import NamespaceGetParams = NamespacesAPI.NamespaceGetParams;
}
