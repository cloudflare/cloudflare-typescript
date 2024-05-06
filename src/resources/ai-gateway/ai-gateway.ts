// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as LogsAPI from 'cloudflare/resources/ai-gateway/logs';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from 'cloudflare/pagination';

export class AIGateway extends APIResource {
  logs: LogsAPI.Logs = new LogsAPI.Logs(this._client);

  /**
   * Create a new Gateway
   */
  create(
    accountTag: string,
    body: AIGatewayCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AIGatewayCreateResponse> {
    return (
      this._client.post(`/accounts/${accountTag}/ai-gateway/gateways`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AIGatewayCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a Gateway
   */
  update(
    accountTag: string,
    id: string,
    body: AIGatewayUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AIGatewayUpdateResponse> {
    return (
      this._client.put(`/accounts/${accountTag}/ai-gateway/gateways/${id}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: AIGatewayUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List Gateway's
   */
  list(
    accountTag: string,
    query?: AIGatewayListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AIGatewayListResponsesV4PagePaginationArray, AIGatewayListResponse>;
  list(
    accountTag: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AIGatewayListResponsesV4PagePaginationArray, AIGatewayListResponse>;
  list(
    accountTag: string,
    query: AIGatewayListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<AIGatewayListResponsesV4PagePaginationArray, AIGatewayListResponse> {
    if (isRequestOptions(query)) {
      return this.list(accountTag, {}, query);
    }
    return this._client.getAPIList(
      `/accounts/${accountTag}/ai-gateway/gateways`,
      AIGatewayListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Delete a Gateway
   */
  delete(
    accountTag: string,
    id: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AIGatewayDeleteResponse> {
    return (
      this._client.delete(`/accounts/${accountTag}/ai-gateway/gateways/${id}`, options) as Core.APIPromise<{
        result: AIGatewayDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch a Gateway
   */
  get(accountTag: string, id: string, options?: Core.RequestOptions): Core.APIPromise<AIGatewayGetResponse> {
    return (
      this._client.get(`/accounts/${accountTag}/ai-gateway/gateways/${id}`, options) as Core.APIPromise<{
        result: AIGatewayGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class AIGatewayListResponsesV4PagePaginationArray extends V4PagePaginationArray<AIGatewayListResponse> {}

export interface AIGatewayCreateResponse {
  task: AIGatewayCreateResponse.Task;
}

export namespace AIGatewayCreateResponse {
  export interface Task {
    id: string;

    cache_invalidate_on_update: boolean;

    cache_ttl: number;

    collect_logs: boolean;

    created_at: string;

    modified_at: string;

    name: string;

    slug: string;

    rate_limiting_interval?: number;

    rate_limiting_limit?: number;

    rate_limiting_technique?: string;
  }
}

export interface AIGatewayUpdateResponse {
  id: string;

  cache_invalidate_on_update: boolean;

  cache_ttl: number;

  collect_logs: boolean;

  created_at: string;

  modified_at: string;

  name: string;

  slug: string;

  rate_limiting_interval?: number;

  rate_limiting_limit?: number;

  rate_limiting_technique?: string;
}

export interface AIGatewayListResponse {
  id: string;

  cache_invalidate_on_update: boolean;

  cache_ttl: number;

  collect_logs: boolean;

  created_at: string;

  modified_at: string;

  name: string;

  slug: string;

  rate_limiting_interval?: number;

  rate_limiting_limit?: number;

  rate_limiting_technique?: string;
}

export interface AIGatewayDeleteResponse {
  id: string;

  cache_invalidate_on_update: boolean;

  cache_ttl: number;

  collect_logs: boolean;

  created_at: string;

  modified_at: string;

  name: string;

  slug: string;

  rate_limiting_interval?: number;

  rate_limiting_limit?: number;

  rate_limiting_technique?: string;
}

export interface AIGatewayGetResponse {
  id: string;

  cache_invalidate_on_update: boolean;

  cache_ttl: number;

  collect_logs: boolean;

  created_at: string;

  modified_at: string;

  name: string;

  slug: string;

  rate_limiting_interval?: number;

  rate_limiting_limit?: number;

  rate_limiting_technique?: string;
}

export interface AIGatewayCreateParams {
  cache_invalidate_on_update: boolean;

  cache_ttl: number;

  collect_logs: boolean;

  name: string;

  slug: string;

  rate_limiting_interval?: number;

  rate_limiting_limit?: number;

  rate_limiting_technique?: string;
}

export interface AIGatewayUpdateParams {
  cache_invalidate_on_update: boolean;

  cache_ttl: number;

  collect_logs: boolean;

  name: string;

  slug: string;

  rate_limiting_interval?: number;

  rate_limiting_limit?: number;

  rate_limiting_technique?: string;
}

export interface AIGatewayListParams extends V4PagePaginationArrayParams {
  id?: string;

  /**
   * Order By Column Name
   */
  order_by?: string;
}

export namespace AIGateway {
  export import Logs = LogsAPI.Logs;
  export import LogGetResponse = LogsAPI.LogGetResponse;
  export import LogGetParams = LogsAPI.LogGetParams;
}
