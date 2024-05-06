// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as GatewaysAPI from 'cloudflare/resources/workers/ai/gateways/gateways';
import * as LogsAPI from 'cloudflare/resources/workers/ai/gateways/logs';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from 'cloudflare/pagination';

export class Gateways extends APIResource {
  logs: LogsAPI.Logs = new LogsAPI.Logs(this._client);

  /**
   * Create a new Gateway
   */
  create(
    accountTag: string,
    body: GatewayCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GatewayCreateResponse> {
    return (
      this._client.post(`/accounts/${accountTag}/ai-gateway/gateways`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: GatewayCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update a Gateway
   */
  update(
    accountTag: string,
    id: string,
    body: GatewayUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GatewayUpdateResponse> {
    return (
      this._client.put(`/accounts/${accountTag}/ai-gateway/gateways/${id}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: GatewayUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List Gateway's
   */
  list(
    accountTag: string,
    query?: GatewayListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<GatewayListResponsesV4PagePaginationArray, GatewayListResponse>;
  list(
    accountTag: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<GatewayListResponsesV4PagePaginationArray, GatewayListResponse>;
  list(
    accountTag: string,
    query: GatewayListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<GatewayListResponsesV4PagePaginationArray, GatewayListResponse> {
    if (isRequestOptions(query)) {
      return this.list(accountTag, {}, query);
    }
    return this._client.getAPIList(
      `/accounts/${accountTag}/ai-gateway/gateways`,
      GatewayListResponsesV4PagePaginationArray,
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
  ): Core.APIPromise<GatewayDeleteResponse> {
    return (
      this._client.delete(`/accounts/${accountTag}/ai-gateway/gateways/${id}`, options) as Core.APIPromise<{
        result: GatewayDeleteResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetch a Gateway
   */
  get(accountTag: string, id: string, options?: Core.RequestOptions): Core.APIPromise<GatewayGetResponse> {
    return (
      this._client.get(`/accounts/${accountTag}/ai-gateway/gateways/${id}`, options) as Core.APIPromise<{
        result: GatewayGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class GatewayListResponsesV4PagePaginationArray extends V4PagePaginationArray<GatewayListResponse> {}

export interface GatewayCreateResponse {
  task: GatewayCreateResponse.Task;
}

export namespace GatewayCreateResponse {
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

export interface GatewayUpdateResponse {
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

export interface GatewayListResponse {
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

export interface GatewayDeleteResponse {
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

export interface GatewayGetResponse {
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

export interface GatewayCreateParams {
  cache_invalidate_on_update: boolean;

  cache_ttl: number;

  collect_logs: boolean;

  name: string;

  slug: string;

  rate_limiting_interval?: number;

  rate_limiting_limit?: number;

  rate_limiting_technique?: string;
}

export interface GatewayUpdateParams {
  cache_invalidate_on_update: boolean;

  cache_ttl: number;

  collect_logs: boolean;

  name: string;

  slug: string;

  rate_limiting_interval?: number;

  rate_limiting_limit?: number;

  rate_limiting_technique?: string;
}

export interface GatewayListParams extends V4PagePaginationArrayParams {
  id?: string;

  /**
   * Order By Column Name
   */
  order_by?: string;
}

export namespace Gateways {
  export import GatewayCreateResponse = GatewaysAPI.GatewayCreateResponse;
  export import GatewayUpdateResponse = GatewaysAPI.GatewayUpdateResponse;
  export import GatewayListResponse = GatewaysAPI.GatewayListResponse;
  export import GatewayDeleteResponse = GatewaysAPI.GatewayDeleteResponse;
  export import GatewayGetResponse = GatewaysAPI.GatewayGetResponse;
  export import GatewayListResponsesV4PagePaginationArray = GatewaysAPI.GatewayListResponsesV4PagePaginationArray;
  export import GatewayCreateParams = GatewaysAPI.GatewayCreateParams;
  export import GatewayUpdateParams = GatewaysAPI.GatewayUpdateParams;
  export import GatewayListParams = GatewaysAPI.GatewayListParams;
  export import Logs = LogsAPI.Logs;
  export import LogGetResponse = LogsAPI.LogGetResponse;
  export import LogGetParams = LogsAPI.LogGetParams;
}
