// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../../core';
import { APIResource } from '../../../resource';
import * as LogsAPI from './logs';
import * as RequestAPI from './request';
import * as ResponseAPI from './response';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../pagination';

export class Logs extends APIResource {
  request: RequestAPI.Request = new RequestAPI.Request(this._client);
  response: ResponseAPI.Response = new ResponseAPI.Response(this._client);

  /**
   * List Gateway Logs
   */
  list(
    id: string,
    params: LogListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<LogListResponsesV4PagePaginationArray, LogListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/ai-gateway/gateways/${id}/logs`,
      LogListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Get Gateway Log Detail
   */
  get(
    id: string,
    logId: string,
    params: LogGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LogGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/ai-gateway/gateways/${id}/logs/${logId}`,
        options,
      ) as Core.APIPromise<{ result: LogGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class LogListResponsesV4PagePaginationArray extends V4PagePaginationArray<LogListResponse> {}

export interface LogListResponse {
  id: string;

  cached: boolean;

  created_at: string;

  duration: number;

  model: string;

  path: string;

  provider: string;

  request: string;

  response: string;

  success: boolean;

  tokens_in: number;

  tokens_out: number;

  metadata?: string;

  request_content_type?: string;

  request_type?: string;

  response_content_type?: string;

  status_code?: number;

  step?: number;
}

export interface LogGetResponse {
  id: string;

  cached: boolean;

  created_at: string;

  duration: number;

  model: string;

  path: string;

  provider: string;

  request: string;

  response: string;

  success: boolean;

  tokens_in: number;

  tokens_out: number;

  metadata?: string;

  request_content_type?: string;

  request_type?: string;

  response_content_type?: string;

  status_code?: number;

  step?: number;
}

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
  order_by?: 'created_at' | 'provider';

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

export interface LogGetParams {
  account_id: string;
}

export namespace Logs {
  export import LogListResponse = LogsAPI.LogListResponse;
  export import LogGetResponse = LogsAPI.LogGetResponse;
  export import LogListResponsesV4PagePaginationArray = LogsAPI.LogListResponsesV4PagePaginationArray;
  export import LogListParams = LogsAPI.LogListParams;
  export import LogGetParams = LogsAPI.LogGetParams;
  export import Request = RequestAPI.Request;
  export import RequestGetResponse = RequestAPI.RequestGetResponse;
  export import RequestGetParams = RequestAPI.RequestGetParams;
  export import Response = ResponseAPI.Response;
  export import ResponseGetResponse = ResponseAPI.ResponseGetResponse;
  export import ResponseGetParams = ResponseAPI.ResponseGetParams;
}
