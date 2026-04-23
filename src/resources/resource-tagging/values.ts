// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { CursorPaginationAfter, type CursorPaginationAfterParams } from '../../pagination';

export class Values extends APIResource {
  /**
   * Lists all distinct values for a given tag key, optionally filtered by resource
   * type.
   */
  list(
    tagKey: string,
    params: ValueListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ValueListResponsesCursorPaginationAfter, ValueListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/tags/values/${tagKey}`,
      ValueListResponsesCursorPaginationAfter,
      { query, ...options },
    );
  }
}

export class ValueListResponsesCursorPaginationAfter extends CursorPaginationAfter<ValueListResponse> {}

export type ValueListResponse = string;

export interface ValueListParams extends CursorPaginationAfterParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

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

Values.ValueListResponsesCursorPaginationAfter = ValueListResponsesCursorPaginationAfter;

export declare namespace Values {
  export {
    type ValueListResponse as ValueListResponse,
    ValueListResponsesCursorPaginationAfter as ValueListResponsesCursorPaginationAfter,
    type ValueListParams as ValueListParams,
  };
}
