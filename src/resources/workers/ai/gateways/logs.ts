// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as LogsAPI from 'cloudflare/resources/workers/ai/gateways/logs';

export class Logs extends APIResource {
  /**
   * List Gateway Logs
   */
  get(
    accountTag: string,
    id: string,
    query?: LogGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LogGetResponse>;
  get(accountTag: string, id: string, options?: Core.RequestOptions): Core.APIPromise<LogGetResponse>;
  get(
    accountTag: string,
    id: string,
    query: LogGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LogGetResponse> {
    if (isRequestOptions(query)) {
      return this.get(accountTag, id, {}, query);
    }
    return (
      this._client.get(`/accounts/${accountTag}/ai-gateway/gateways/${id}/logs`, {
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
  }
}

export interface LogGetParams {
  cached?: boolean;

  direction?: 'asc' | 'desc';

  end_date?: string;

  order_by?: 'created_at' | 'provider';

  page?: number;

  per_page?: number;

  search?: string;

  start_date?: string;

  success?: boolean;
}

export namespace Logs {
  export import LogGetResponse = LogsAPI.LogGetResponse;
  export import LogGetParams = LogsAPI.LogGetParams;
}
