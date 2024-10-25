// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as NamespacesAPI from './namespaces/namespaces';

export class Dispatch extends APIResource {
  namespaces: NamespacesAPI.Namespaces = new NamespacesAPI.Namespaces(this._client);
}

export namespace Dispatch {
  export import Namespaces = NamespacesAPI.Namespaces;
  export type NamespaceCreateResponse = NamespacesAPI.NamespaceCreateResponse;
  export type NamespaceListResponse = NamespacesAPI.NamespaceListResponse;
  export type NamespaceDeleteResponse = NamespacesAPI.NamespaceDeleteResponse;
  export type NamespaceGetResponse = NamespacesAPI.NamespaceGetResponse;
  export import NamespaceListResponsesSinglePage = NamespacesAPI.NamespaceListResponsesSinglePage;
  export type NamespaceCreateParams = NamespacesAPI.NamespaceCreateParams;
  export type NamespaceListParams = NamespacesAPI.NamespaceListParams;
  export type NamespaceDeleteParams = NamespacesAPI.NamespaceDeleteParams;
  export type NamespaceGetParams = NamespacesAPI.NamespaceGetParams;
}
