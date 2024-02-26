// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SchedulesAPI from 'cloudflare/resources/workers/scripts/schedules';

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
  list(
    scriptName: string,
    params: ScheduleListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScheduleListResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/workers/scripts/${scriptName}/schedules`,
        options,
      ) as Core.APIPromise<{ result: ScheduleListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ScheduleUpdateResponse {
  schedules?: Array<ScheduleUpdateResponse.Schedule>;
}

export namespace ScheduleUpdateResponse {
  export interface Schedule {
    created_on?: unknown;

    cron?: unknown;

    modified_on?: unknown;
  }
}

export interface ScheduleListResponse {
  schedules?: Array<ScheduleListResponse.Schedule>;
}

export namespace ScheduleListResponse {
  export interface Schedule {
    created_on?: unknown;

    cron?: unknown;

    modified_on?: unknown;
  }
}

export interface ScheduleUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  body: unknown;
}

export interface ScheduleListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Schedules {
  export import ScheduleUpdateResponse = SchedulesAPI.ScheduleUpdateResponse;
  export import ScheduleListResponse = SchedulesAPI.ScheduleListResponse;
  export import ScheduleUpdateParams = SchedulesAPI.ScheduleUpdateParams;
  export import ScheduleListParams = SchedulesAPI.ScheduleListParams;
}
