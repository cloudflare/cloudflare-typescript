// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';
import * as SchedulesAPI from './schedules';

export class Schedules extends APIResource {
  /**
   * Updates Cron Triggers for a Worker.
   */
  update(
    scriptName: string,
    params: ScheduleUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScheduleUpdateResponse> {
    const { account_id, body } = params;
    return (
      this._client.put(`/accounts/${account_id}/workers/scripts/${scriptName}/schedules`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: ScheduleUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches Cron Triggers for a Worker.
   */
  get(
    scriptName: string,
    params: ScheduleGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScheduleGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/workers/scripts/${scriptName}/schedules`,
        options,
      ) as Core.APIPromise<{ result: ScheduleGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface Schedule {
  created_on?: string;

  cron?: string;

  modified_on?: string;
}

export interface ScheduleParam {
  cron?: string;
}

export interface ScheduleUpdateResponse {
  schedules?: Array<Schedule>;
}

export interface ScheduleGetResponse {
  schedules?: Array<Schedule>;
}

export interface ScheduleUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  body: Array<ScheduleParam>;
}

export interface ScheduleGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Schedules {
  export import Schedule = SchedulesAPI.Schedule;
  export import ScheduleUpdateResponse = SchedulesAPI.ScheduleUpdateResponse;
  export import ScheduleGetResponse = SchedulesAPI.ScheduleGetResponse;
  export import ScheduleUpdateParams = SchedulesAPI.ScheduleUpdateParams;
  export import ScheduleGetParams = SchedulesAPI.ScheduleGetParams;
}
