// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SchedulesAPI from 'cloudflare/resources/workers/scripts/schedules';

export class Schedules extends APIResource {
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

  /**
   * Updates Cron Triggers for a Worker.
   */
  replace(
    accountId: string,
    scriptName: string,
    body: ScheduleReplaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScheduleReplaceResponse> {
    return (
      this._client.put(`/accounts/${accountId}/workers/scripts/${scriptName}/schedules`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ScheduleReplaceResponse }>
    )._thenUnwrap((obj) => obj.result);
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

export interface ScheduleReplaceResponse {
  schedules?: Array<ScheduleReplaceResponse.Schedule>;
}

export namespace ScheduleReplaceResponse {
  export interface Schedule {
    created_on?: unknown;

    cron?: unknown;

    modified_on?: unknown;
  }
}

export type ScheduleReplaceParams = unknown;

export namespace Schedules {
  export import ScheduleListResponse = SchedulesAPI.ScheduleListResponse;
  export import ScheduleReplaceResponse = SchedulesAPI.ScheduleReplaceResponse;
  export import ScheduleReplaceParams = SchedulesAPI.ScheduleReplaceParams;
}
