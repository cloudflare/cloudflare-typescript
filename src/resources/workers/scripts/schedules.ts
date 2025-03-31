// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Schedules extends APIResource {
  /**
   * Updates Cron Triggers for a Worker.
   */
  update(
    scriptName: string,
    params: ScheduleUpdateParams,
    options?: RequestOptions,
  ): APIPromise<ScheduleUpdateResponse> {
    const { account_id, body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/workers/scripts/${scriptName}/schedules`, {
        body: body,
        ...options,
      }) as APIPromise<{ result: ScheduleUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches Cron Triggers for a Worker.
   */
  get(
    scriptName: string,
    params: ScheduleGetParams,
    options?: RequestOptions,
  ): APIPromise<ScheduleGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/workers/scripts/${scriptName}/schedules`,
        options,
      ) as APIPromise<{ result: ScheduleGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface Schedule {
  created_on?: string;

  cron?: string;

  modified_on?: string;
}

export interface ScheduleUpdateResponse {
  schedules?: Array<unknown>;
}

export interface ScheduleGetResponse {
  schedules?: Array<unknown>;
}

export interface ScheduleUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  body: Array<unknown>;
}

export interface ScheduleGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export declare namespace Schedules {
  export {
    type Schedule as Schedule,
    type ScheduleUpdateResponse as ScheduleUpdateResponse,
    type ScheduleGetResponse as ScheduleGetResponse,
    type ScheduleUpdateParams as ScheduleUpdateParams,
    type ScheduleGetParams as ScheduleGetParams,
  };
}
