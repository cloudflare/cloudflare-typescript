// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ObjectsAPI from './objects';
import {
  BaseObjects,
  DurableObject,
  DurableObjectsCursorPaginationAfter,
  ObjectListParams,
  Objects,
} from './objects';
import {
  PagePromise,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseNamespaces extends APIResource {
  static override readonly _key: readonly ['durableObjects', 'namespaces'] = Object.freeze([
    'durableObjects',
    'namespaces',
  ] as const);

  /**
   * Returns the Durable Object namespaces owned by an account.
   */
  list(
    params: NamespaceListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<NamespacesV4PagePaginationArray, Namespace> {
    const { account_id = this._client.accountID, ...query } = params ?? {};
    return this._client.getAPIList(
      path`/accounts/${account_id}/workers/durable_objects/namespaces`,
      V4PagePaginationArray<Namespace>,
      { query, ...options },
    );
  }
}
export class Namespaces extends BaseNamespaces {
  objects: ObjectsAPI.Objects = new ObjectsAPI.Objects(this._client);
}

export type NamespacesV4PagePaginationArray = V4PagePaginationArray<Namespace>;

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
  account_id?: string;
}

Namespaces.Objects = Objects;
Namespaces.BaseObjects = BaseObjects;

export declare namespace Namespaces {
  export {
    type Namespace as Namespace,
    type NamespacesV4PagePaginationArray as NamespacesV4PagePaginationArray,
    type NamespaceListParams as NamespaceListParams,
  };

  export {
    Objects as Objects,
    BaseObjects as BaseObjects,
    type DurableObject as DurableObject,
    type DurableObjectsCursorPaginationAfter as DurableObjectsCursorPaginationAfter,
    type ObjectListParams as ObjectListParams,
  };
}
