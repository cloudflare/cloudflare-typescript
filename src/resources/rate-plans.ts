// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import { APIPromise } from '../core';
import * as Core from '../core';
import * as RatePlansAPI from './rate-plans';

export class RatePlans extends APIResource {
  /**
   * Lists all rate plans the zone can subscribe to.
   */
  get(params: RatePlanGetParams, options?: Core.RequestOptions): Core.APIPromise<RatePlanGetResponse | null> {
    const { zone_id } = params;
    return (this._client.get(`/zones/${zone_id}/available_rate_plans`, options) as Core.APIPromise<{ result: RatePlanGetResponse | null }>)._thenUnwrap((obj) => obj.result);
  }
}

export interface RatePlan {
  /**
   * Plan identifier tag.
   */
  id?: string;

  /**
   * Array of available components values for the plan.
   */
  components?: Array<RatePlan.Component>;

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

export namespace RatePlan {
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

export type RatePlanGetResponse = Array<RatePlan>

export interface RatePlanGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}
