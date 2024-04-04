// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

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

export interface UnnamedSchemaRefC8302c265937f9d6f96fd69644e56b26 {
  created_on?: unknown;

  cron?: unknown;

  modified_on?: unknown;
}

export interface ScheduleUpdateResponse {
  schedules?: Array<UnnamedSchemaRefC8302c265937f9d6f96fd69644e56b26>;
}

export interface ScheduleGetResponse {
  schedules?: Array<UnnamedSchemaRefC8302c265937f9d6f96fd69644e56b26>;
}

export interface ScheduleUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  body: string;
}

export interface ScheduleGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Schedules {
  export import UnnamedSchemaRefC8302c265937f9d6f96fd69644e56b26 = SchedulesAPI.UnnamedSchemaRefC8302c265937f9d6f96fd69644e56b26;
  export import ScheduleUpdateResponse = SchedulesAPI.ScheduleUpdateResponse;
  export import ScheduleGetResponse = SchedulesAPI.ScheduleGetResponse;
  export import ScheduleUpdateParams = SchedulesAPI.ScheduleUpdateParams;
  export import ScheduleGetParams = SchedulesAPI.ScheduleGetParams;
}
