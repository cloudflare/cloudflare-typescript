// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Queries extends APIResource {
  /**
   * Return a success message after creating new saved string queries
   */
  create(params?: QueryCreateParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  create(options?: Core.RequestOptions): Core.APIPromise<void>;
  create(
    params: QueryCreateParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(params)) {
      return this.create({}, params);
    }
    const { account_id = this._client.accountId, id, query_scan, query_tag, ...body } = params;
    return this._client.post(`/accounts/${account_id}/brand-protection/queries`, {
      query: { id, scan: query_scan, tag: query_tag },
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Return a success message after deleting saved string queries by ID
   */
  delete(params?: QueryDeleteParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  delete(options?: Core.RequestOptions): Core.APIPromise<void>;
  delete(
    params: QueryDeleteParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(params)) {
      return this.delete({}, params);
    }
    const { account_id = this._client.accountId, id, scan, tag } = params;
    return this._client.delete(`/accounts/${account_id}/brand-protection/queries`, {
      query: { id, scan, tag },
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }

  /**
   * Return a success message after creating new saved string queries in bulk
   */
  bulk(params?: QueryBulkParams, options?: Core.RequestOptions): Core.APIPromise<void>;
  bulk(options?: Core.RequestOptions): Core.APIPromise<void>;
  bulk(
    params: QueryBulkParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<void> {
    if (isRequestOptions(params)) {
      return this.bulk({}, params);
    }
    const { account_id = this._client.accountId, ...body } = params;
    return this._client.post(`/accounts/${account_id}/brand-protection/queries/bulk`, {
      body,
      ...options,
      headers: { Accept: '*/*', ...options?.headers },
    });
  }
}

export interface QueryCreateParams {
  /**
   * Path param
   */
  account_id?: string;

  /**
   * Query param
   */
  id?: string;

  /**
   * Query param
   */
  query_scan?: boolean;

  /**
   * Query param
   */
  query_tag?: string;

  /**
   * Body param
   */
  max_time?: string | null;

  /**
   * Body param
   */
  min_time?: string | null;

  /**
   * Body param
   */
  body_scan?: boolean;

  /**
   * Body param
   */
  string_matches?: unknown;

  /**
   * Body param
   */
  body_tag?: string;
}

export interface QueryDeleteParams {
  /**
   * Path param
   */
  account_id?: string;

  /**
   * Query param
   */
  id?: string;

  /**
   * Query param
   */
  scan?: boolean;

  /**
   * Query param
   */
  tag?: string;
}

export interface QueryBulkParams {
  /**
   * Path param
   */
  account_id?: string;

  /**
   * Body param
   */
  queries?: Array<{ [key: string]: unknown }>;
}

export declare namespace Queries {
  export {
    type QueryCreateParams as QueryCreateParams,
    type QueryDeleteParams as QueryDeleteParams,
    type QueryBulkParams as QueryBulkParams,
  };
}
