// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as DatabasesAPI from 'cloudflare/resources/d1/databases';

export class Databases extends APIResource {
  /**
   * Returns the created D1 database.
   */
  create(
    accountId: string,
    body: DatabaseCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatabaseCreateResponse> {
    return (
      this._client.post(`/accounts/${accountId}/d1/database`, { body, ...options }) as Core.APIPromise<{
        result: DatabaseCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns a list of D1 databases.
   */
  list(
    accountId: string,
    query?: DatabaseListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatabaseListResponse>;
  list(accountId: string, options?: Core.RequestOptions): Core.APIPromise<DatabaseListResponse>;
  list(
    accountId: string,
    query: DatabaseListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DatabaseListResponse> {
    if (isRequestOptions(query)) {
      return this.list(accountId, {}, query);
    }
    return (
      this._client.get(`/accounts/${accountId}/d1/database`, { query, ...options }) as Core.APIPromise<{
        result: DatabaseListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface DatabaseCreateResponse {
  /**
   * Specifies the timestamp the resource was created as an ISO8601 string.
   */
  created_at?: unknown;

  name?: string;

  uuid?: string;

  version?: string;
}

export type DatabaseListResponse = Array<DatabaseListResponse.DatabaseListResponseItem>;

export namespace DatabaseListResponse {
  export interface DatabaseListResponseItem {
    /**
     * Specifies the timestamp the resource was created as an ISO8601 string.
     */
    created_at?: unknown;

    name?: string;

    uuid?: string;

    version?: string;
  }
}

export interface DatabaseCreateParams {
  name: string;
}

export interface DatabaseListParams {
  /**
   * a database name to search for.
   */
  name?: string;

  /**
   * Page number of paginated results.
   */
  page?: number;

  /**
   * Number of items per page.
   */
  per_page?: number;
}

export namespace Databases {
  export import DatabaseCreateResponse = DatabasesAPI.DatabaseCreateResponse;
  export import DatabaseListResponse = DatabasesAPI.DatabaseListResponse;
  export import DatabaseCreateParams = DatabasesAPI.DatabaseCreateParams;
  export import DatabaseListParams = DatabasesAPI.DatabaseListParams;
}
