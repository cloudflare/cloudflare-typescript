// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import {
  CursorLimitPagination,
  type CursorLimitPaginationParams,
  PagePromise,
} from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Objects extends APIResource {
  /**
   * Returns the Durable Objects in a given namespace.
   */
  list(
    id: string,
    params: ObjectListParams,
    options?: RequestOptions,
  ): PagePromise<DurableObjectsCursorLimitPagination, DurableObject> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/workers/durable_objects/namespaces/${id}/objects`,
      CursorLimitPagination<DurableObject>,
      { query, ...options },
    );
  }
}

export type DurableObjectsCursorLimitPagination = CursorLimitPagination<DurableObject>;

export interface DurableObject {
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

export declare namespace Objects {
  export {
    type DurableObject as DurableObject,
    type DurableObjectsCursorLimitPagination as DurableObjectsCursorLimitPagination,
    type ObjectListParams as ObjectListParams,
  };
}
