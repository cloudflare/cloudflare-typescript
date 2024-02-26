// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as DatabasesAPI from 'cloudflare/resources/d1/databases';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from 'cloudflare/pagination';

export class Databases extends APIResource {
  /**
   * Returns the created D1 database.
   */
  create(
    params: DatabaseCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatabaseCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/d1/database`, { body, ...options }) as Core.APIPromise<{
        result: DatabaseCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns a list of D1 databases.
   */
  list(
    params: DatabaseListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<DatabaseListResponsesV4PagePaginationArray, DatabaseListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/d1/database`,
      DatabaseListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }
}

export class DatabaseListResponsesV4PagePaginationArray extends V4PagePaginationArray<DatabaseListResponse> {}

export interface DatabaseCreateResponse {
  /**
   * Specifies the timestamp the resource was created as an ISO8601 string.
   */
  created_at?: unknown;

  name?: string;

  uuid?: string;

  version?: string;
}

export interface DatabaseListResponse {
  /**
   * Specifies the timestamp the resource was created as an ISO8601 string.
   */
  created_at?: unknown;

  name?: string;

  uuid?: string;

  version?: string;
}

export interface DatabaseCreateParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

  /**
   * Body param:
   */
  name: string;
}

export interface DatabaseListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

  /**
   * Query param: a database name to search for.
   */
  name?: string;
}

export namespace Databases {
  export import DatabaseCreateResponse = DatabasesAPI.DatabaseCreateResponse;
  export import DatabaseListResponse = DatabasesAPI.DatabaseListResponse;
  export import DatabaseListResponsesV4PagePaginationArray = DatabasesAPI.DatabaseListResponsesV4PagePaginationArray;
  export import DatabaseCreateParams = DatabasesAPI.DatabaseCreateParams;
  export import DatabaseListParams = DatabasesAPI.DatabaseListParams;
}
