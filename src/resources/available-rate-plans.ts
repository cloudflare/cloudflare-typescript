// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as AvailableRatePlansAPI from 'cloudflare/resources/available-rate-plans';

export class AvailableRatePlans extends APIResource {
  /**
   * Lists all rate plans the zone can subscribe to.
   */
  zoneRatePlanListAvailableRatePlans(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AvailableRatePlanZoneRatePlanListAvailableRatePlansResponse | null> {
    return (
      this._client.get(`/zones/${zoneIdentifier}/available_rate_plans`, options) as Core.APIPromise<{
        result: AvailableRatePlanZoneRatePlanListAvailableRatePlansResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type AvailableRatePlanZoneRatePlanListAvailableRatePlansResponse =
  Array<AvailableRatePlanZoneRatePlanListAvailableRatePlansResponse.AvailableRatePlanZoneRatePlanListAvailableRatePlansResponseItem>;

export namespace AvailableRatePlanZoneRatePlanListAvailableRatePlansResponse {
  export interface AvailableRatePlanZoneRatePlanListAvailableRatePlansResponseItem {
    /**
     * Plan identifier tag.
     */
    id?: string;

    /**
     * Array of available components values for the plan.
     */
    components?: Array<AvailableRatePlanZoneRatePlanListAvailableRatePlansResponseItem.Component>;

    /**
     * The monetary unit in which pricing information is displayed.
     */
    currency?: string;

    /**
     * The duration of the plan subscription.
     */
    duration?: number;

    /**
     * The frequency at which you will be billed for this plan.
     */
    frequency?: 'weekly' | 'monthly' | 'quarterly' | 'yearly';

    /**
     * The plan name.
     */
    name?: string;
  }

  export namespace AvailableRatePlanZoneRatePlanListAvailableRatePlansResponseItem {
    export interface Component {
      /**
       * The default amount allocated.
       */
      default?: number;

      /**
       * The unique component.
       */
      name?: 'zones' | 'page_rules' | 'dedicated_certificates' | 'dedicated_certificates_custom';

      /**
       * The unit price of the addon.
       */
      unit_price?: number;
    }
  }
}

export namespace AvailableRatePlans {
  export import AvailableRatePlanZoneRatePlanListAvailableRatePlansResponse = AvailableRatePlansAPI.AvailableRatePlanZoneRatePlanListAvailableRatePlansResponse;
}
