// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as NamespacesAPI from 'cloudflare/resources/durable-objects/namespaces/namespaces';
import * as ObjectsAPI from 'cloudflare/resources/durable-objects/namespaces/objects';
import { SinglePage } from 'cloudflare/pagination';

export class Namespaces extends APIResource {
  objects: ObjectsAPI.Objects = new ObjectsAPI.Objects(this._client);

  /**
   * Returns the Durable Object namespaces owned by an account.
   */
  list(
    params: NamespaceListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<NamespacesSinglePage, Namespace> {
    const { account_id } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/workers/durable_objects/namespaces`,
      NamespacesSinglePage,
      options,
    );
  }
}

export class NamespacesSinglePage extends SinglePage<Namespace> {}

export interface Namespace {
  id?: unknown;

  class?: unknown;

  name?: unknown;

  script?: unknown;
}

export interface NamespaceListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Namespaces {
  export import Namespace = NamespacesAPI.Namespace;
  export import NamespacesSinglePage = NamespacesAPI.NamespacesSinglePage;
  export import NamespaceListParams = NamespacesAPI.NamespaceListParams;
  export import Objects = ObjectsAPI.Objects;
  export import DurableObject = ObjectsAPI.DurableObject;
  export import DurableObjectsCursorLimitPagination = ObjectsAPI.DurableObjectsCursorLimitPagination;
  export import ObjectListParams = ObjectsAPI.ObjectListParams;
}
