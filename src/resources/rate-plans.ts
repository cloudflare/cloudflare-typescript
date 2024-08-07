// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';

export class RatePlans extends APIResource {}

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
