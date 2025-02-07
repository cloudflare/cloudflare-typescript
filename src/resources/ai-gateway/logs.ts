// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { APIPromise } from '../../api-promise';
import { PagePromise, V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Logs extends APIResource {
  /**
   * List Gateway Logs
   */
  list(
    gatewayID: string,
    params: LogListParams,
    options?: RequestOptions,
  ): PagePromise<LogListResponsesV4PagePaginationArray, LogListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/ai-gateway/gateways/${gatewayID}/logs`,
      V4PagePaginationArray<LogListResponse>,
      { query, ...options },
    );
  }

  /**
   * Delete Gateway Logs
   */
  delete(
    gatewayID: string,
    params: LogDeleteParams,
    options?: RequestOptions,
  ): APIPromise<LogDeleteResponse> {
    const { account_id, filters, limit, order_by, order_by_direction } = params;
    return this._client.delete(path`/accounts/${account_id}/ai-gateway/gateways/${gatewayID}/logs`, {
      query: { filters, limit, order_by, order_by_direction },
      ...options,
    });
  }

  /**
   * Patch Gateway Log
   */
  edit(id: string, params: LogEditParams, options?: RequestOptions): APIPromise<LogEditResponse> {
    const { account_id, gateway_id, ...body } = params;
    return (
      this._client.patch(path`/accounts/${account_id}/ai-gateway/gateways/${gateway_id}/logs/${id}`, {
        body,
        ...options,
      }) as APIPromise<{ result: LogEditResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Gateway Log Detail
   */
  get(id: string, params: LogGetParams, options?: RequestOptions): APIPromise<LogGetResponse> {
    const { account_id, gateway_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/ai-gateway/gateways/${gateway_id}/logs/${id}`,
        options,
      ) as APIPromise<{ result: LogGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get Gateway Log Request
   */
  request(id: string, params: LogRequestParams, options?: RequestOptions): APIPromise<unknown> {
    const { account_id, gateway_id } = params;
    return this._client.get(
      path`/accounts/${account_id}/ai-gateway/gateways/${gateway_id}/logs/${id}/request`,
      options,
    );
  }

  /**
   * Get Gateway Log Response
   */
  response(id: string, params: LogResponseParams, options?: RequestOptions): APIPromise<unknown> {
    const { account_id, gateway_id } = params;
    return this._client.get(
      path`/accounts/${account_id}/ai-gateway/gateways/${gateway_id}/logs/${id}/response`,
      options,
    );
  }
}

export type LogListResponsesV4PagePaginationArray = V4PagePaginationArray<LogListResponse>;

export interface LogListResponse {
  id: string;

  cached: boolean;

  created_at: string;

  duration: number;

  model: string;

  path: string;

  provider: string;

  success: boolean;

  tokens_in: number | null;

  tokens_out: number | null;

  cost?: number;

  custom_cost?: boolean;

  metadata?: string;

  model_type?: string;

  request_content_type?: string;

  request_type?: string;

  response_content_type?: string;

  status_code?: number;

  step?: number;
}

export interface LogDeleteResponse {
  success: boolean;
}

export type LogEditResponse = unknown;

export interface LogGetResponse {
  id: string;

  cached: boolean;

  created_at: string;

  duration: number;

  model: string;

  path: string;

  provider: string;

  success: boolean;

  tokens_in: number | null;

  tokens_out: number | null;

  cost?: number;

  custom_cost?: boolean;

  metadata?: string;

  model_type?: string;

  request_content_type?: string;

  request_head?: string;

  request_head_complete?: boolean;

  request_size?: number;

  request_type?: string;

  response_content_type?: string;

  response_head?: string;

  response_head_complete?: boolean;

  response_size?: number;

  status_code?: number;

  step?: number;
}

export type LogRequestResponse = unknown;

export type LogResponseResponse = unknown;

export interface LogListParams extends V4PagePaginationArrayParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Query param:
   */
  cached?: boolean;

  /**
   * Query param:
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param:
   */
  end_date?: string;

  /**
   * Query param:
   */
  feedback?: 0 | 1;

  /**
   * Query param:
   */
  filters?: Array<LogListParams.Filter>;

  /**
   * Query param:
   */
  max_cost?: number;

  /**
   * Query param:
   */
  max_duration?: number;

  /**
   * Query param:
   */
  max_tokens_in?: number;

  /**
   * Query param:
   */
  max_tokens_out?: number;

  /**
   * Query param:
   */
  max_total_tokens?: number;

  /**
   * Query param:
   */
  meta_info?: boolean;

  /**
   * Query param:
   */
  min_cost?: number;

  /**
   * Query param:
   */
  min_duration?: number;

  /**
   * Query param:
   */
  min_tokens_in?: number;

  /**
   * Query param:
   */
  min_tokens_out?: number;

  /**
   * Query param:
   */
  min_total_tokens?: number;

  /**
   * Query param:
   */
  model?: string;

  /**
   * Query param:
   */
  model_type?: string;

  /**
   * Query param:
   */
  order_by?: 'created_at' | 'provider' | 'model' | 'model_type' | 'success' | 'cached';

  /**
   * Query param:
   */
  order_by_direction?: 'asc' | 'desc';

  /**
   * Query param:
   */
  provider?: string;

  /**
   * Query param:
   */
  request_content_type?: string;

  /**
   * Query param:
   */
  response_content_type?: string;

  /**
   * Query param:
   */
  search?: string;

  /**
   * Query param:
   */
  start_date?: string;

  /**
   * Query param:
   */
  success?: boolean;
}

export namespace LogListParams {
  export interface Filter {
    key:
      | 'id'
      | 'created_at'
      | 'request_content_type'
      | 'response_content_type'
      | 'success'
      | 'cached'
      | 'provider'
      | 'model'
      | 'model_type'
      | 'cost'
      | 'tokens'
      | 'tokens_in'
      | 'tokens_out'
      | 'duration'
      | 'feedback'
      | 'event_id'
      | 'request_type'
      | 'metadata.key'
      | 'metadata.value'
      | 'prompts.prompt_id'
      | 'prompts.version_id';

    operator: 'eq' | 'neq' | 'contains' | 'lt' | 'gt';

    value: Array<string | null | number | boolean>;
  }
}

export interface LogDeleteParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Query param:
   */
  filters?: Array<LogDeleteParams.Filter>;

  /**
   * Query param:
   */
  limit?: number;

  /**
   * Query param:
   */
  order_by?:
    | 'created_at'
    | 'provider'
    | 'model'
    | 'model_type'
    | 'success'
    | 'cached'
    | 'cost'
    | 'tokens_in'
    | 'tokens_out'
    | 'duration'
    | 'feedback';

  /**
   * Query param:
   */
  order_by_direction?: 'asc' | 'desc';
}

export namespace LogDeleteParams {
  export interface Filter {
    key:
      | 'id'
      | 'created_at'
      | 'request_content_type'
      | 'response_content_type'
      | 'success'
      | 'cached'
      | 'provider'
      | 'model'
      | 'model_type'
      | 'cost'
      | 'tokens'
      | 'tokens_in'
      | 'tokens_out'
      | 'duration'
      | 'feedback'
      | 'event_id'
      | 'request_type'
      | 'metadata.key'
      | 'metadata.value'
      | 'prompts.prompt_id'
      | 'prompts.version_id';

    operator: 'eq' | 'neq' | 'contains' | 'lt' | 'gt';

    value: Array<string | null | number | boolean>;
  }
}

export interface LogEditParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Path param: gateway id
   */
  gateway_id: string;

  /**
   * Body param:
   */
  feedback?: number | null;

  /**
   * Body param:
   */
  metadata?: Record<string, string | number | boolean> | null;

  /**
   * Body param:
   */
  score?: number | null;
}

export interface LogGetParams {
  account_id: string;

  /**
   * gateway id
   */
  gateway_id: string;
}

export interface LogRequestParams {
  account_id: string;

  /**
   * gateway id
   */
  gateway_id: string;
}

export interface LogResponseParams {
  account_id: string;

  /**
   * gateway id
   */
  gateway_id: string;
}

export declare namespace Logs {
  export {
    type LogListResponse as LogListResponse,
    type LogDeleteResponse as LogDeleteResponse,
    type LogEditResponse as LogEditResponse,
    type LogGetResponse as LogGetResponse,
    type LogRequestResponse as LogRequestResponse,
    type LogResponseResponse as LogResponseResponse,
    type LogListResponsesV4PagePaginationArray as LogListResponsesV4PagePaginationArray,
    type LogListParams as LogListParams,
    type LogDeleteParams as LogDeleteParams,
    type LogEditParams as LogEditParams,
    type LogGetParams as LogGetParams,
    type LogRequestParams as LogRequestParams,
    type LogResponseParams as LogResponseParams,
  };
}
