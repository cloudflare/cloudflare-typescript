// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as NamespacesAPI from './namespaces/namespaces';

export class Dispatch extends APIResource {
  namespaces: NamespacesAPI.Namespaces = new NamespacesAPI.Namespaces(this._client);
}

export namespace Dispatch {
  export import Namespaces = NamespacesAPI.Namespaces;
  export import NamespaceCreateResponse = NamespacesAPI.NamespaceCreateResponse;
  export import NamespaceListResponse = NamespacesAPI.NamespaceListResponse;
  export import NamespaceDeleteResponse = NamespacesAPI.NamespaceDeleteResponse;
  export import NamespaceGetResponse = NamespacesAPI.NamespaceGetResponse;
  export import NamespaceListResponsesSinglePage = NamespacesAPI.NamespaceListResponsesSinglePage;
  export import NamespaceCreateParams = NamespacesAPI.NamespaceCreateParams;
  export import NamespaceListParams = NamespacesAPI.NamespaceListParams;
  export import NamespaceDeleteParams = NamespacesAPI.NamespaceDeleteParams;
  export import NamespaceGetParams = NamespacesAPI.NamespaceGetParams;
}
