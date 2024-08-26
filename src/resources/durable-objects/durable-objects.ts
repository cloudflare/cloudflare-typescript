// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import { Namespaces } from './namespaces/namespaces';
import * as NamespacesAPI from './namespaces/namespaces';

export class DurableObjects extends APIResource {
  namespaces: NamespacesAPI.Namespaces = new NamespacesAPI.Namespaces(this._client);
}

export namespace DurableObjects {
  export import Namespaces = NamespacesAPI.Namespaces;
  export import Namespace = NamespacesAPI.Namespace;
  export import NamespacesSinglePage = NamespacesAPI.NamespacesSinglePage;
  export import NamespaceListParams = NamespacesAPI.NamespaceListParams;
}
