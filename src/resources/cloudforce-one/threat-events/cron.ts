// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class Cron extends APIResource {
  /**
   * Reads the last cron update time
   */
  create(accountId: number, options?: Core.RequestOptions): Core.APIPromise<CronCreateResponse> {
    return this._client.post(`/accounts/${accountId}/cloudforce-one/events/cron`, options);
  }

  /**
   * Reads the last cron update time
   */
  list(accountId: number, options?: Core.RequestOptions): Core.APIPromise<CronListResponse> {
    return this._client.get(`/accounts/${accountId}/cloudforce-one/events/cron`, options);
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
