// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import { CursorPaginationAfter, type CursorPaginationAfterParams } from '../../../pagination';

export class Objects extends APIResource {
  /**
   * Returns the Durable Objects in a given namespace.
   */
  list(
    id: string,
    params: ObjectListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DurableObjectsCursorPaginationAfter, DurableObject> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/workers/durable_objects/namespaces/${id}/objects`,
      DurableObjectsCursorPaginationAfter,
      { query, ...options },
    );
  }
}

export class DurableObjectsCursorPaginationAfter extends CursorPaginationAfter<DurableObject> {}

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

export interface ObjectListParams extends CursorPaginationAfterParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Query param: The number of objects to return. The cursor attribute may be used
   * to iterate over the next batch of objects if there are more than the limit.
   */
  limit?: number;
}

Objects.DurableObjectsCursorPaginationAfter = DurableObjectsCursorPaginationAfter;

export declare namespace Objects {
  export {
    type DurableObject as DurableObject,
    DurableObjectsCursorPaginationAfter as DurableObjectsCursorPaginationAfter,
    type ObjectListParams as ObjectListParams,
  };
}
