// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ScheduleAPI from './schedule';
import * as TestsAPI from './pages/tests';

export class ScheduleResource extends APIResource {
  /**
   * Creates a scheduled test for a page.
   */
  create(
    url: string,
    params: ScheduleCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScheduleCreateResponse> {
    const { zone_id, region } = params;
    return (
      this._client.post(`/zones/${zone_id}/speed_api/schedule/${url}`, {
        query: { region },
        ...options,
      }) as Core.APIPromise<{ result: ScheduleCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes a scheduled test for a page.
   */
  delete(
    url: string,
    params: ScheduleDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ScheduleDeleteResponse> {
    const { zone_id, region } = params;
    return (
      this._client.delete(`/zones/${zone_id}/speed_api/schedule/${url}`, {
        query: { region },
        ...options,
      }) as Core.APIPromise<{ result: ScheduleDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the test schedule for a page in a specific region.
   */
  get(url: string, params: ScheduleGetParams, options?: Core.RequestOptions): Core.APIPromise<Schedule> {
    const { zone_id, ...query } = params;
    return (
      this._client.get(`/zones/${zone_id}/speed_api/schedule/${url}`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: Schedule }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * The test schedule.
 */
export interface Schedule {
  /**
   * The frequency of the test.
   */
  frequency?: 'DAILY' | 'WEEKLY';

  /**
   * A test region.
   */
  region?:
    | 'asia-east1'
    | 'asia-northeast1'
    | 'asia-northeast2'
    | 'asia-south1'
    | 'asia-southeast1'
    | 'australia-southeast1'
    | 'europe-north1'
    | 'europe-southwest1'
    | 'europe-west1'
    | 'europe-west2'
    | 'europe-west3'
    | 'europe-west4'
    | 'europe-west8'
    | 'europe-west9'
    | 'me-west1'
    | 'southamerica-east1'
    | 'us-central1'
    | 'us-east1'
    | 'us-east4'
    | 'us-south1'
    | 'us-west1';

  /**
   * A URL.
   */
  url?: string;
}

export interface ScheduleCreateResponse {
  /**
   * The test schedule.
   */
  schedule?: Schedule;

  test?: TestsAPI.Test;
}

export interface ScheduleDeleteResponse {
  /**
   * Number of items affected.
   */
  count?: number;
}

export interface ScheduleCreateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Query param: A test region.
   */
  region?:
    | 'asia-east1'
    | 'asia-northeast1'
    | 'asia-northeast2'
    | 'asia-south1'
    | 'asia-southeast1'
    | 'australia-southeast1'
    | 'europe-north1'
    | 'europe-southwest1'
    | 'europe-west1'
    | 'europe-west2'
    | 'europe-west3'
    | 'europe-west4'
    | 'europe-west8'
    | 'europe-west9'
    | 'me-west1'
    | 'southamerica-east1'
    | 'us-central1'
    | 'us-east1'
    | 'us-east4'
    | 'us-south1'
    | 'us-west1';
}

export interface ScheduleDeleteParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Query param: A test region.
   */
  region?:
    | 'asia-east1'
    | 'asia-northeast1'
    | 'asia-northeast2'
    | 'asia-south1'
    | 'asia-southeast1'
    | 'australia-southeast1'
    | 'europe-north1'
    | 'europe-southwest1'
    | 'europe-west1'
    | 'europe-west2'
    | 'europe-west3'
    | 'europe-west4'
    | 'europe-west8'
    | 'europe-west9'
    | 'me-west1'
    | 'southamerica-east1'
    | 'us-central1'
    | 'us-east1'
    | 'us-east4'
    | 'us-south1'
    | 'us-west1';
}

export interface ScheduleGetParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Query param: A test region.
   */
  region?:
    | 'asia-east1'
    | 'asia-northeast1'
    | 'asia-northeast2'
    | 'asia-south1'
    | 'asia-southeast1'
    | 'australia-southeast1'
    | 'europe-north1'
    | 'europe-southwest1'
    | 'europe-west1'
    | 'europe-west2'
    | 'europe-west3'
    | 'europe-west4'
    | 'europe-west8'
    | 'europe-west9'
    | 'me-west1'
    | 'southamerica-east1'
    | 'us-central1'
    | 'us-east1'
    | 'us-east4'
    | 'us-south1'
    | 'us-west1';
}

export namespace ScheduleResource {
  export import Schedule = ScheduleAPI.Schedule;
  export import ScheduleCreateResponse = ScheduleAPI.ScheduleCreateResponse;
  export import ScheduleDeleteResponse = ScheduleAPI.ScheduleDeleteResponse;
  export import ScheduleCreateParams = ScheduleAPI.ScheduleCreateParams;
  export import ScheduleDeleteParams = ScheduleAPI.ScheduleDeleteParams;
  export import ScheduleGetParams = ScheduleAPI.ScheduleGetParams;
}
