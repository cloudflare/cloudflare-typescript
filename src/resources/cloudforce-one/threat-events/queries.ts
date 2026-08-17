// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { buildHeaders } from '../../../internal/headers';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseQueries extends APIResource {
  static override readonly _key: readonly ['cloudforceOne', 'threatEvents', 'queries'] = Object.freeze([
    'cloudforceOne',
    'threatEvents',
    'queries',
  ] as const);

  /**
   * Create a new saved event query for the account
   *
   * @example
   * ```ts
   * const query =
   *   await client.cloudforceOne.threatEvents.queries.create({
   *     account_id: 'account_id',
   *     alert_enabled: true,
   *     alert_rollup_enabled: true,
   *     name: 'name',
   *     query_json: 'query_json',
   *     rule_enabled: true,
   *   });
   * ```
   */
  create(params: QueryCreateParams, options?: RequestOptions): APIPromise<QueryCreateResponse> {
    const { account_id, ...body } = params;
    return this._client.post(path`/accounts/${account_id}/cloudforce-one/events/queries/create`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieve all saved event queries for the account
   *
   * @example
   * ```ts
   * const queries =
   *   await client.cloudforceOne.threatEvents.queries.list({
   *     account_id: 'account_id',
   *   });
   * ```
   */
  list(params: QueryListParams, options?: RequestOptions): APIPromise<QueryListResponse> {
    const { account_id } = params;
    return this._client.get(path`/accounts/${account_id}/cloudforce-one/events/queries`, options);
  }

  /**
   * Delete a saved event query by its ID
   *
   * @example
   * ```ts
   * await client.cloudforceOne.threatEvents.queries.delete(0, {
   *   account_id: 'account_id',
   * });
   * ```
   */
  delete(queryID: number, params: QueryDeleteParams, options?: RequestOptions): APIPromise<void> {
    const { account_id } = params;
    return this._client.delete(path`/accounts/${account_id}/cloudforce-one/events/queries/${queryID}`, {
      ...options,
      headers: buildHeaders([{ Accept: '*/*' }, options?.headers]),
    });
  }

  /**
   * Update an existing saved event query by its ID
   *
   * @example
   * ```ts
   * const response =
   *   await client.cloudforceOne.threatEvents.queries.edit(0, {
   *     account_id: 'account_id',
   *   });
   * ```
   */
  edit(queryID: number, params: QueryEditParams, options?: RequestOptions): APIPromise<QueryEditResponse> {
    const { account_id, ...body } = params;
    return this._client.patch(path`/accounts/${account_id}/cloudforce-one/events/queries/${queryID}`, {
      body,
      ...options,
    });
  }

  /**
   * Retrieve a saved event query by its ID
   *
   * @example
   * ```ts
   * const query =
   *   await client.cloudforceOne.threatEvents.queries.get(0, {
   *     account_id: 'account_id',
   *   });
   * ```
   */
  get(queryID: number, params: QueryGetParams, options?: RequestOptions): APIPromise<QueryGetResponse> {
    const { account_id } = params;
    return this._client.get(path`/accounts/${account_id}/cloudforce-one/events/queries/${queryID}`, options);
  }
}
export class Queries extends BaseQueries {}

export interface QueryCreateResponse {
  /**
   * Unique identifier for the saved query
   */
  id: number;

  /**
   * Account ID
   */
  account_id: number;

  /**
   * Whether alerts are enabled
   */
  alert_enabled: boolean;

  /**
   * Whether alert rollup is enabled
   */
  alert_rollup_enabled: boolean;

  /**
   * Creation timestamp
   */
  created_at: string;

  /**
   * Name of the saved query
   */
  name: string;

  /**
   * JSON string containing the query parameters
   */
  query_json: string;

  /**
   * Whether rule is enabled
   */
  rule_enabled: boolean;

  /**
   * Last update timestamp
   */
  updated_at: string;

  /**
   * Email of the user who created the query
   */
  user_email: string;

  /**
   * Intel Indicator Feed ID (numeric)
   */
  custom_threat_feed_id?: number | null;

  /**
   * WAF rules list ID for blocking
   */
  rule_list_id?: string;

  /**
   * Scope for the rule
   */
  rule_scope?: string;
}

export type QueryListResponse = Array<QueryListResponse.QueryListResponseItem>;

export namespace QueryListResponse {
  export interface QueryListResponseItem {
    /**
     * Unique identifier for the saved query
     */
    id: number;

    /**
     * Account ID
     */
    account_id: number;

    /**
     * Whether alerts are enabled
     */
    alert_enabled: boolean;

    /**
     * Whether alert rollup is enabled
     */
    alert_rollup_enabled: boolean;

    /**
     * Creation timestamp
     */
    created_at: string;

    /**
     * Name of the saved query
     */
    name: string;

    /**
     * JSON string containing the query parameters
     */
    query_json: string;

    /**
     * Whether rule is enabled
     */
    rule_enabled: boolean;

    /**
     * Last update timestamp
     */
    updated_at: string;

    /**
     * Email of the user who created the query
     */
    user_email: string;

    /**
     * Intel Indicator Feed ID (numeric)
     */
    custom_threat_feed_id?: number | null;

    /**
     * WAF rules list ID for blocking
     */
    rule_list_id?: string;

    /**
     * Scope for the rule
     */
    rule_scope?: string;
  }
}

export interface QueryEditResponse {
  /**
   * Unique identifier for the saved query
   */
  id: number;

  /**
   * Account ID
   */
  account_id: number;

  /**
   * Whether alerts are enabled
   */
  alert_enabled: boolean;

  /**
   * Whether alert rollup is enabled
   */
  alert_rollup_enabled: boolean;

  /**
   * Creation timestamp
   */
  created_at: string;

  /**
   * Name of the saved query
   */
  name: string;

  /**
   * JSON string containing the query parameters
   */
  query_json: string;

  /**
   * Whether rule is enabled
   */
  rule_enabled: boolean;

  /**
   * Last update timestamp
   */
  updated_at: string;

  /**
   * Email of the user who created the query
   */
  user_email: string;

  /**
   * Intel Indicator Feed ID (numeric)
   */
  custom_threat_feed_id?: number | null;

  /**
   * WAF rules list ID for blocking
   */
  rule_list_id?: string;

  /**
   * Scope for the rule
   */
  rule_scope?: string;
}

export interface QueryGetResponse {
  /**
   * Unique identifier for the saved query
   */
  id: number;

  /**
   * Account ID
   */
  account_id: number;

  /**
   * Whether alerts are enabled
   */
  alert_enabled: boolean;

  /**
   * Whether alert rollup is enabled
   */
  alert_rollup_enabled: boolean;

  /**
   * Creation timestamp
   */
  created_at: string;

  /**
   * Name of the saved query
   */
  name: string;

  /**
   * JSON string containing the query parameters
   */
  query_json: string;

  /**
   * Whether rule is enabled
   */
  rule_enabled: boolean;

  /**
   * Last update timestamp
   */
  updated_at: string;

  /**
   * Email of the user who created the query
   */
  user_email: string;

  /**
   * Intel Indicator Feed ID (numeric)
   */
  custom_threat_feed_id?: number | null;

  /**
   * WAF rules list ID for blocking
   */
  rule_list_id?: string;

  /**
   * Scope for the rule
   */
  rule_scope?: string;
}

export interface QueryCreateParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;

  /**
   * Body param: Enable alerts for this query
   */
  alert_enabled: boolean;

  /**
   * Body param: Enable alert rollup for this query
   */
  alert_rollup_enabled: boolean;

  /**
   * Body param: Unique name for the saved query
   */
  name: string;

  /**
   * Body param: JSON string containing the query parameters
   */
  query_json: string;

  /**
   * Body param: Enable rule for this query
   */
  rule_enabled: boolean;

  /**
   * Body param: Scope for the rule
   */
  rule_scope?: string;
}

export interface QueryListParams {
  /**
   * Account ID.
   */
  account_id: string;
}

export interface QueryDeleteParams {
  /**
   * Account ID.
   */
  account_id: string;
}

export interface QueryEditParams {
  /**
   * Path param: Account ID.
   */
  account_id: string;

  /**
   * Body param: Enable alerts for this query
   */
  alert_enabled?: boolean;

  /**
   * Body param: Enable alert rollup for this query
   */
  alert_rollup_enabled?: boolean;

  /**
   * Body param: Unique name for the saved query
   */
  name?: string;

  /**
   * Body param: JSON string containing the query parameters
   */
  query_json?: string;

  /**
   * Body param: Enable rule for this query
   */
  rule_enabled?: boolean;

  /**
   * Body param: Scope for the rule
   */
  rule_scope?: string;
}

export interface QueryGetParams {
  /**
   * Account ID.
   */
  account_id: string;
}

export declare namespace Queries {
  export {
    type QueryCreateResponse as QueryCreateResponse,
    type QueryListResponse as QueryListResponse,
    type QueryEditResponse as QueryEditResponse,
    type QueryGetResponse as QueryGetResponse,
    type QueryCreateParams as QueryCreateParams,
    type QueryListParams as QueryListParams,
    type QueryDeleteParams as QueryDeleteParams,
    type QueryEditParams as QueryEditParams,
    type QueryGetParams as QueryGetParams,
  };
}
