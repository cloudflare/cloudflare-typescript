// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as NamespacesAPI from 'cloudflare/resources/durable-objects/namespaces/namespaces';

export class DurableObjects extends APIResource {
  namespaces: NamespacesAPI.Namespaces = new NamespacesAPI.Namespaces(this._client);
}

export namespace DurableObjects {
  export import Namespaces = NamespacesAPI.Namespaces;
  export import DurableObjectNamespace = NamespacesAPI.DurableObjectNamespace;
  export import NamespaceListResponse = NamespacesAPI.NamespaceListResponse;
  export import NamespaceListParams = NamespacesAPI.NamespaceListParams;
}
