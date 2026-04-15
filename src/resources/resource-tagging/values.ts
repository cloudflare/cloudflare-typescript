// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { CursorPaginationAfter, type CursorPaginationAfterParams, PagePromise } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseValues extends APIResource {
  static override readonly _key: readonly ['resourceTagging', 'values'] = Object.freeze([
    'resourceTagging',
    'values',
  ] as const);

  /**
   * Lists all distinct values for a given tag key, optionally filtered by resource
   * type.
   */
  list(
    tagKey: string,
    params: ValueListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<ValueListResponsesCursorPaginationAfter, ValueListResponse> {
    const { account_id = this._client.accountID, ...query } = params ?? {};
    return this._client.getAPIList(
      path`/accounts/${account_id}/tags/values/${tagKey}`,
      CursorPaginationAfter<ValueListResponse>,
      { query, ...options },
    );
  }
}
export class Values extends BaseValues {}

export type ValueListResponsesCursorPaginationAfter = CursorPaginationAfter<ValueListResponse>;

export type ValueListResponse = string;

export interface ValueListParams extends CursorPaginationAfterParams {
  /**
   * Path param: Identifier.
   */
  account_id?: string;

  /**
   * Query param: Filter by resource type.
   */
  type?:
    | 'access_application'
    | 'access_application_policy'
    | 'access_group'
    | 'account'
    | 'ai_gateway'
    | 'alerting_policy'
    | 'alerting_webhook'
    | 'api_gateway_operation'
    | 'cloudflared_tunnel'
    | 'custom_certificate'
    | 'custom_hostname'
    | 'd1_database'
    | 'dns_record'
    | 'durable_object_namespace'
    | 'gateway_list'
    | 'gateway_rule'
    | 'image'
    | 'kv_namespace'
    | 'managed_client_certificate'
    | 'queue'
    | 'r2_bucket'
    | 'resource_share'
    | 'stream_live_input'
    | 'stream_video'
    | 'worker'
    | 'worker_version'
    | 'zone';
}

export declare namespace Values {
  export {
    type ValueListResponse as ValueListResponse,
    type ValueListResponsesCursorPaginationAfter as ValueListResponsesCursorPaginationAfter,
    type ValueListParams as ValueListParams,
  };
}
