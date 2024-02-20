// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SchedulesAPI from 'cloudflare/resources/workers/scripts/schedules';

export class Schedules extends APIResource {
  /**
   * Updates Cron Triggers for a Worker.
   */
  update(
    accountId: string,
    scriptName: string,
    body: ScheduleUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScheduleUpdateResponse> {
    return (
      this._client.put(`/accounts/${accountId}/workers/scripts/${scriptName}/schedules`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ScheduleUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches Cron Triggers for a Worker.
   */
  list(
    accountId: string,
    scriptName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScheduleListResponse> {
    return (
      this._client.get(
        `/accounts/${accountId}/workers/scripts/${scriptName}/schedules`,
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

export type ScheduleUpdateParams = unknown;

export namespace Schedules {
  export import ScheduleUpdateResponse = SchedulesAPI.ScheduleUpdateResponse;
  export import ScheduleListResponse = SchedulesAPI.ScheduleListResponse;
  export import ScheduleUpdateParams = SchedulesAPI.ScheduleUpdateParams;
}
