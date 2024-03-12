// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AvailabilitiesAPI from 'cloudflare/resources/speed/availabilities';

export class Availabilities extends APIResource {
  /**
   * Retrieves quota for all plans, as well as the current zone quota.
   */
  list(
    params: AvailabilityListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ObservatoryAvailabilities> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/speed_api/availabilities`, options) as Core.APIPromise<{
        result: ObservatoryAvailabilities;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ObservatoryAvailabilities {
  quota?: ObservatoryAvailabilities.Quota;

  regions?: Array<ObservatoryAvailabilities.Region>;

  regionsPerPlan?: unknown;
}

export namespace ObservatoryAvailabilities {
  export interface Quota {
    /**
     * Cloudflare plan.
     */
    plan?: string;

    /**
     * The number of tests available per plan.
     */
    quotasPerPlan?: Record<string, number>;

    /**
     * The number of remaining schedules available.
     */
    remainingSchedules?: number;

    /**
     * The number of remaining tests available.
     */
    remainingTests?: number;

    /**
     * The number of schedules available per plan.
     */
    scheduleQuotasPerPlan?: Record<string, number>;
  }

  /**
   * A test region with a label.
   */
  export interface Region {
    label?: string;

    /**
     * A test region.
     */
    value?:
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
}

export interface AvailabilityListParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace Availabilities {
  export import ObservatoryAvailabilities = AvailabilitiesAPI.ObservatoryAvailabilities;
  export import AvailabilityListParams = AvailabilitiesAPI.AvailabilityListParams;
}
