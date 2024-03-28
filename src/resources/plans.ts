// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PlansAPI from 'cloudflare/resources/plans';

export class Plans extends APIResource {
  /**
   * Lists available plans the zone can subscribe to.
   */
  list(zoneIdentifier: string, options?: Core.RequestOptions): Core.APIPromise<PlanListResponse | null> {
    return (
      this._client.get(`/zones/${zoneIdentifier}/available_plans`, options) as Core.APIPromise<{
        result: PlanListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Details of the available plan that the zone can subscribe to.
   */
  get(
    zoneIdentifier: string,
    planIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AvailableRatePlan> {
    return (
      this._client.get(
        `/zones/${zoneIdentifier}/available_plans/${planIdentifier}`,
        options,
      ) as Core.APIPromise<{ result: AvailableRatePlan }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface AvailableRatePlan {
  /**
   * Identifier
   */
  id?: string;

  /**
   * Indicates whether you can subscribe to this plan.
   */
  can_subscribe?: boolean;

  /**
   * The monetary unit in which pricing information is displayed.
   */
  currency?: string;

  /**
   * Indicates whether this plan is managed externally.
   */
  externally_managed?: boolean;

  /**
   * The frequency at which you will be billed for this plan.
   */
  frequency?: 'weekly' | 'monthly' | 'quarterly' | 'yearly';

  /**
   * Indicates whether you are currently subscribed to this plan.
   */
  is_subscribed?: boolean;

  /**
   * Indicates whether this plan has a legacy discount applied.
   */
  legacy_discount?: boolean;

  /**
   * The legacy identifier for this rate plan, if any.
   */
  legacy_id?: string;

  /**
   * The plan name.
   */
  name?: string;

  /**
   * The amount you will be billed for this plan.
   */
  price?: number;
}

export type PlanListResponse = Array<AvailableRatePlan>;

export namespace Plans {
  export import AvailableRatePlan = PlansAPI.AvailableRatePlan;
  export import PlanListResponse = PlansAPI.PlanListResponse;
}
