// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Crons extends APIResource {
  /**
   * Reads the last cron update time
   */
  list(params: CronListParams, options?: RequestOptions): APIPromise<CronListResponse> {
    const { account_id } = params;
    return this._client.get(path`/accounts/${account_id}/cloudforce-one/events/cron`, options);
  }

  /**
   * Reads the last cron update time
   */
  edit(params: CronEditParams, options?: RequestOptions): APIPromise<CronEditResponse> {
    const { account_id } = params;
    return this._client.patch(path`/accounts/${account_id}/cloudforce-one/events/cron`, options);
  }
}

export interface CronListResponse {
  update: string;
}

export interface CronEditResponse {
  id: number;

  update: string;
}

export interface CronListParams {
  /**
   * Account ID
   */
  account_id: number;
}

export interface CronEditParams {
  /**
   * Account ID
   */
  account_id: number;
}

export declare namespace Crons {
  export {
    type CronListResponse as CronListResponse,
    type CronEditResponse as CronEditResponse,
    type CronListParams as CronListParams,
    type CronEditParams as CronEditParams,
  };
}
