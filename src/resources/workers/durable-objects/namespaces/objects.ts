// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as ObjectsAPI from 'cloudflare/resources/workers/durable-objects/namespaces/objects';

export class Objects extends APIResource {
  /**
   * Returns the Durable Objects in a given namespace.
   */
  list(
    accountId: string,
    id: string,
    query?: ObjectListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObjectListResponse | null>;
  list(
    accountId: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObjectListResponse | null>;
  list(
    accountId: string,
    id: string,
    query: ObjectListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObjectListResponse | null> {
    if (isRequestOptions(query)) {
      return this.list(accountId, id, {}, query);
    }
    return (
      this._client.get(`/accounts/${accountId}/workers/durable_objects/namespaces/${id}/objects`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: ObjectListResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type ObjectListResponse = Array<ObjectListResponse.ObjectListResponseItem>;

export namespace ObjectListResponse {
  export interface ObjectListResponseItem {
    /**
     * ID of the Durable Object.
     */
    id?: string;

    /**
     * Whether the Durable Object has stored data.
     */
    hasStoredData?: boolean;
  }
}

export interface ObjectListParams {
  /**
   * Opaque token indicating the position from which to continue when requesting the
   * next set of records. A valid value for the cursor can be obtained from the
   * cursors object in the result_info structure.
   */
  cursor?: string;

  /**
   * The number of objects to return. The cursor attribute may be used to iterate
   * over the next batch of objects if there are more than the limit.
   */
  limit?: number;
}

export namespace Objects {
  export import ObjectListResponse = ObjectsAPI.ObjectListResponse;
  export import ObjectListParams = ObjectsAPI.ObjectListParams;
}
