// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as NamespacesAPI from 'cloudflare/resources/durable-objects/namespaces/namespaces';
import * as ObjectsAPI from 'cloudflare/resources/durable-objects/namespaces/objects';

export class Namespaces extends APIResource {
  objects: ObjectsAPI.Objects = new ObjectsAPI.Objects(this._client);

  /**
   * Returns the Durable Object namespaces owned by an account.
   */
  list(
    params: NamespaceListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NamespaceListResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/workers/durable_objects/namespaces`,
        options,
      ) as Core.APIPromise<{ result: NamespaceListResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface WorkersNamespace {
  id?: unknown;

  class?: unknown;

  name?: unknown;

  script?: unknown;
}

export type NamespaceListResponse = Array<WorkersNamespace>;

export interface NamespaceListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Namespaces {
  export import WorkersNamespace = NamespacesAPI.WorkersNamespace;
  export import NamespaceListResponse = NamespacesAPI.NamespaceListResponse;
  export import NamespaceListParams = NamespacesAPI.NamespaceListParams;
  export import Objects = ObjectsAPI.Objects;
  export import WorkersObject = ObjectsAPI.WorkersObject;
  export import WorkersObjectsCursorLimitPagination = ObjectsAPI.WorkersObjectsCursorLimitPagination;
  export import ObjectListParams = ObjectsAPI.ObjectListParams;
}
