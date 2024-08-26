// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as LogsAPI from './logs';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';

export class Logs extends APIResource {
  /**
   * List Gateway Logs
   */
  list(id: string, params: LogListParams, options?: Core.RequestOptions): Core.PagePromise<LogListResponsesV4PagePaginationArray, LogListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(`/accounts/${account_id}/ai-gateway/gateways/${id}/logs`, LogListResponsesV4PagePaginationArray, { query, ...options });
  }
}

export class LogListResponsesV4PagePaginationArray extends V4PagePaginationArray<LogListResponse> {
}

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

export namespace Logs {
  export import LogListResponse = LogsAPI.LogListResponse;
  export import LogListResponsesV4PagePaginationArray = LogsAPI.LogListResponsesV4PagePaginationArray;
  export import LogListParams = LogsAPI.LogListParams;
}
