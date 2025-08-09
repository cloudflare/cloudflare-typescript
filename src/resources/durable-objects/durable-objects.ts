// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as NamespacesAPI from './namespaces/namespaces';
import {
  Namespace,
  NamespaceListParams,
  Namespaces,
  NamespacesV4PagePaginationArray,
} from './namespaces/namespaces';

export class DurableObjects extends APIResource {
  namespaces: NamespacesAPI.Namespaces = new NamespacesAPI.Namespaces(this._client);
}

DurableObjects.Namespaces = Namespaces;
DurableObjects.NamespacesV4PagePaginationArray = NamespacesV4PagePaginationArray;

export declare namespace DurableObjects {
  export {
    Namespaces as Namespaces,
    type Namespace as Namespace,
    NamespacesV4PagePaginationArray as NamespacesV4PagePaginationArray,
    type NamespaceListParams as NamespaceListParams,
  };
}
