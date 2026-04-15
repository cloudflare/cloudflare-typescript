// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as NamespacesAPI from './namespaces/namespaces';
import {
  BaseNamespaces,
  Namespace,
  NamespaceListParams,
  Namespaces,
  NamespacesV4PagePaginationArray,
} from './namespaces/namespaces';

export class BaseDurableObjects extends APIResource {
  static override readonly _key: readonly ['durableObjects'] = Object.freeze(['durableObjects'] as const);
}
export class DurableObjects extends BaseDurableObjects {
  namespaces: NamespacesAPI.Namespaces = new NamespacesAPI.Namespaces(this._client);
}

DurableObjects.Namespaces = Namespaces;
DurableObjects.BaseNamespaces = BaseNamespaces;

export declare namespace DurableObjects {
  export {
    Namespaces as Namespaces,
    BaseNamespaces as BaseNamespaces,
    type Namespace as Namespace,
    type NamespacesV4PagePaginationArray as NamespacesV4PagePaginationArray,
    type NamespaceListParams as NamespaceListParams,
  };
}
