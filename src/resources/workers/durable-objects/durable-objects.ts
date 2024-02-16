// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as NamespacesAPI from 'cloudflare/resources/workers/durable-objects/namespaces/namespaces';

export class DurableObjects extends APIResource {
  namespaces: NamespacesAPI.Namespaces = new NamespacesAPI.Namespaces(this._client);
}

export namespace DurableObjects {
  export import Namespaces = NamespacesAPI.Namespaces;
  export import NamespaceListResponse = NamespacesAPI.NamespaceListResponse;
}
