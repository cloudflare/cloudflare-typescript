// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as NamespacesAPI from 'cloudflare/resources/workers/dispatch/namespaces/namespaces';

export class Dispatch extends APIResource {
  namespaces: NamespacesAPI.Namespaces = new NamespacesAPI.Namespaces(this._client);
}

export namespace Dispatch {
  export import Namespaces = NamespacesAPI.Namespaces;
}
