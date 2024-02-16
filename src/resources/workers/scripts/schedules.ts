// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SchedulesAPI from 'cloudflare/resources/workers/scripts/schedules';

export class Schedules extends APIResource {
  /**
   * Fetches Cron Triggers for a Worker.
   */
  workerCronTriggerGetCronTriggers(
    accountId: string,
    scriptName: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScheduleWorkerCronTriggerGetCronTriggersResponse> {
    return (
      this._client.get(
        `/accounts/${accountId}/workers/scripts/${scriptName}/schedules`,
        options,
      ) as Core.APIPromise<{ result: ScheduleWorkerCronTriggerGetCronTriggersResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates Cron Triggers for a Worker.
   */
  workerCronTriggerUpdateCronTriggers(
    accountId: string,
    scriptName: string,
    body: ScheduleWorkerCronTriggerUpdateCronTriggersParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScheduleWorkerCronTriggerUpdateCronTriggersResponse> {
    return (
      this._client.put(`/accounts/${accountId}/workers/scripts/${scriptName}/schedules`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: ScheduleWorkerCronTriggerUpdateCronTriggersResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ScheduleWorkerCronTriggerGetCronTriggersResponse {
  schedules?: Array<ScheduleWorkerCronTriggerGetCronTriggersResponse.Schedule>;
}

export namespace ScheduleWorkerCronTriggerGetCronTriggersResponse {
  export interface Schedule {
    created_on?: unknown;

    cron?: unknown;

    modified_on?: unknown;
  }
}

export interface ScheduleWorkerCronTriggerUpdateCronTriggersResponse {
  schedules?: Array<ScheduleWorkerCronTriggerUpdateCronTriggersResponse.Schedule>;
}

export namespace ScheduleWorkerCronTriggerUpdateCronTriggersResponse {
  export interface Schedule {
    created_on?: unknown;

    cron?: unknown;

    modified_on?: unknown;
  }
}

export type ScheduleWorkerCronTriggerUpdateCronTriggersParams = unknown;

export namespace Schedules {
  export import ScheduleWorkerCronTriggerGetCronTriggersResponse = SchedulesAPI.ScheduleWorkerCronTriggerGetCronTriggersResponse;
  export import ScheduleWorkerCronTriggerUpdateCronTriggersResponse = SchedulesAPI.ScheduleWorkerCronTriggerUpdateCronTriggersResponse;
  export import ScheduleWorkerCronTriggerUpdateCronTriggersParams = SchedulesAPI.ScheduleWorkerCronTriggerUpdateCronTriggersParams;
}
