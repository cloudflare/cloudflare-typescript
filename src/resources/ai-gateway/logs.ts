// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as LogsAPI from './logs';

export class Logs extends APIResource {
  /**
   * List Gateway Logs
   */
  get(id: string, params: LogGetParams, options?: Core.RequestOptions): Core.APIPromise<LogGetResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/ai-gateway/gateways/${id}/logs`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: LogGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type LogGetResponse = Array<LogGetResponse.LogGetResponseItem>;

export namespace LogGetResponse {
  export interface LogGetResponseItem {
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

    status_code?: number;
  }
}

export interface LogGetParams {
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
  page?: number;

  /**
   * Query param:
   */
  per_page?: number;

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
  export import LogGetResponse = LogsAPI.LogGetResponse;
  export import LogGetParams = LogsAPI.LogGetParams;
}
