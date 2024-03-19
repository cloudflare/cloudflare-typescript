// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ObjectsAPI from 'cloudflare/resources/durable-objects/namespaces/objects';
import { CursorLimitPagination, type CursorLimitPaginationParams } from 'cloudflare/pagination';

export class Objects extends APIResource {
  /**
   * Returns the Durable Objects in a given namespace.
   */
  list(
    id: string,
    params: ObjectListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<WorkersObjectsCursorLimitPagination, WorkersObject> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/workers/durable_objects/namespaces/${id}/objects`,
      WorkersObjectsCursorLimitPagination,
      { query, ...options },
    );
  }
}

export class WorkersObjectsCursorLimitPagination extends CursorLimitPagination<WorkersObject> {}

export interface WorkersObject {
  /**
   * ID of the Durable Object.
   */
  id?: string;

  /**
   * Whether the Durable Object has stored data.
   */
  hasStoredData?: boolean;
}

export interface ObjectListParams extends CursorLimitPaginationParams {
  /**
   * Path param: Identifier
   */
  account_id: string;
}

export namespace Objects {
  export import WorkersObject = ObjectsAPI.WorkersObject;
  export import WorkersObjectsCursorLimitPagination = ObjectsAPI.WorkersObjectsCursorLimitPagination;
  export import ObjectListParams = ObjectsAPI.ObjectListParams;
}
