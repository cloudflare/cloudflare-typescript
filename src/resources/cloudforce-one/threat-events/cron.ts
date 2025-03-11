// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Cron extends APIResource {
  /**
   * Reads the last cron update time
   */
  create(accountID: number, options?: RequestOptions): APIPromise<CronCreateResponse> {
    return this._client.post(path`/accounts/${accountID}/cloudforce-one/events/cron`, options);
  }

  /**
   * Reads the last cron update time
   */
  list(accountID: number, options?: RequestOptions): APIPromise<CronListResponse> {
    return this._client.get(path`/accounts/${accountID}/cloudforce-one/events/cron`, options);
  }
}

export interface CronCreateResponse {
  id: number;

  update: string;
}

export interface CronListResponse {
  update: string;
}

export declare namespace Cron {
  export { type CronCreateResponse as CronCreateResponse, type CronListResponse as CronListResponse };
}
