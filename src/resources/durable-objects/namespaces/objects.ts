// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ObjectsAPI from 'cloudflare/resources/durable-objects/namespaces/objects';

export class Objects extends APIResource {
  /**
   * Returns the Durable Objects in a given namespace.
   */
  list(
    id: string,
    params: ObjectListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObjectListResponse | null> {
    const { account_id, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/workers/durable_objects/namespaces/${id}/objects`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: ObjectListResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

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

export type ObjectListResponse = Array<WorkersObject>;

export interface ObjectListParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Query param: Opaque token indicating the position from which to continue when
   * requesting the next set of records. A valid value for the cursor can be obtained
   * from the cursors object in the result_info structure.
   */
  cursor?: string;

  /**
   * Query param: The number of objects to return. The cursor attribute may be used
   * to iterate over the next batch of objects if there are more than the limit.
   */
  limit?: number;
}

export namespace Objects {
  export import WorkersObject = ObjectsAPI.WorkersObject;
  export import ObjectListResponse = ObjectsAPI.ObjectListResponse;
  export import ObjectListParams = ObjectsAPI.ObjectListParams;
}
