// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as ObjectsAPI from './objects';
import { DurableObject, DurableObjectsCursorPaginationAfter, ObjectListParams, Objects } from './objects';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../pagination';

export class Namespaces extends APIResource {
  objects: ObjectsAPI.Objects = new ObjectsAPI.Objects(this._client);

  /**
   * Returns the Durable Object namespaces owned by an account.
   */
  list(
    params: NamespaceListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<NamespacesV4PagePaginationArray, Namespace> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/workers/durable_objects/namespaces`,
      NamespacesV4PagePaginationArray,
      { query, ...options },
    );
  }
}

export class NamespacesV4PagePaginationArray extends V4PagePaginationArray<Namespace> {}

export interface Namespace {
  id?: string;

  class?: string;

  name?: string;

  script?: string;

  use_sqlite?: boolean;
}

export interface NamespaceListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;
}

Namespaces.NamespacesV4PagePaginationArray = NamespacesV4PagePaginationArray;
Namespaces.Objects = Objects;
Namespaces.DurableObjectsCursorPaginationAfter = DurableObjectsCursorPaginationAfter;

export declare namespace Namespaces {
  export {
    type Namespace as Namespace,
    NamespacesV4PagePaginationArray as NamespacesV4PagePaginationArray,
    type NamespaceListParams as NamespaceListParams,
  };

  export {
    Objects as Objects,
    type DurableObject as DurableObject,
    DurableObjectsCursorPaginationAfter as DurableObjectsCursorPaginationAfter,
    type ObjectListParams as ObjectListParams,
  };
}
