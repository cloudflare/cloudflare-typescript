// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as LogsAPI from './logs';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';

export class Logs extends APIResource {
  /**
   * List Gateway Logs
   */
  list(
    gatewayId: string,
    params: LogListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<LogListResponsesV4PagePaginationArray, LogListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/ai-gateway/gateways/${gatewayId}/logs`,
      LogListResponsesV4PagePaginationArray,
      { query, ...options },
    );
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
  feedback?: -1 | 0 | 1;

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

export namespace Logs {
  export import LogListResponse = LogsAPI.LogListResponse;
  export import LogListResponsesV4PagePaginationArray = LogsAPI.LogListResponsesV4PagePaginationArray;
  export import LogListParams = LogsAPI.LogListParams;
}
