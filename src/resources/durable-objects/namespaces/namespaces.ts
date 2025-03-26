// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ObjectsAPI from './objects';
import { DurableObject, DurableObjectsCursorLimitPagination, ObjectListParams, Objects } from './objects';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Namespaces extends APIResource {
  objects: ObjectsAPI.Objects = new ObjectsAPI.Objects(this._client);

  /**
   * Returns the Durable Object namespaces owned by an account.
   */
  list(params: NamespaceListParams, options?: RequestOptions): PagePromise<NamespacesSinglePage, Namespace> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/workers/durable_objects/namespaces`,
      SinglePage<Namespace>,
      options,
    );
  }
}

export type NamespacesSinglePage = SinglePage<Namespace>;

export interface Namespace {
  id?: string;

  class?: string;

  name?: string;

  script?: string;

  use_sqlite?: boolean;
}

export interface NamespaceListParams {
  /**
   * Identifier
   */
  account_id: string;
}

Namespaces.Objects = Objects;

export declare namespace Namespaces {
  export {
    type Namespace as Namespace,
    type NamespacesSinglePage as NamespacesSinglePage,
    type NamespaceListParams as NamespaceListParams,
  };

  export {
    Objects as Objects,
    type DurableObject as DurableObject,
    type DurableObjectsCursorLimitPagination as DurableObjectsCursorLimitPagination,
    type ObjectListParams as ObjectListParams,
  };
}
