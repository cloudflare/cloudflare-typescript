// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as AvailabilitiesAPI from './availabilities';
import * as SpeedAPI from './speed';

export class Availabilities extends APIResource {
  /**
   * Retrieves quota for all plans, as well as the current zone quota.
   */
  list(params: AvailabilityListParams, options?: Core.RequestOptions): Core.APIPromise<Availability> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/speed_api/availabilities`, options) as Core.APIPromise<{
        result: Availability;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface Availability {
  quota?: Availability.Quota;

  regions?: Array<SpeedAPI.LabeledRegion>;

  regionsPerPlan?: unknown;
}

export namespace Availability {
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
}

export interface AvailabilityListParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export namespace Availabilities {
  export import Availability = AvailabilitiesAPI.Availability;
  export import AvailabilityListParams = AvailabilitiesAPI.AvailabilityListParams;
}
