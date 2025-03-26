// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as NamespacesAPI from './namespaces/namespaces';
import {
  NamespaceCreateParams,
  NamespaceCreateResponse,
  NamespaceDeleteParams,
  NamespaceDeleteResponse,
  NamespaceGetParams,
  NamespaceGetResponse,
  NamespaceListParams,
  NamespaceListResponse,
  NamespaceListResponsesSinglePage,
  Namespaces,
} from './namespaces/namespaces';

export class Dispatch extends APIResource {
  namespaces: NamespacesAPI.Namespaces = new NamespacesAPI.Namespaces(this._client);
}

Dispatch.Namespaces = Namespaces;

export declare namespace Dispatch {
  export {
    Namespaces as Namespaces,
    type NamespaceCreateResponse as NamespaceCreateResponse,
    type NamespaceListResponse as NamespaceListResponse,
    type NamespaceDeleteResponse as NamespaceDeleteResponse,
    type NamespaceGetResponse as NamespaceGetResponse,
    type NamespaceListResponsesSinglePage as NamespaceListResponsesSinglePage,
    type NamespaceCreateParams as NamespaceCreateParams,
    type NamespaceListParams as NamespaceListParams,
    type NamespaceDeleteParams as NamespaceDeleteParams,
    type NamespaceGetParams as NamespaceGetParams,
  };
}
