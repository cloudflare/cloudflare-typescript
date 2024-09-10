// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as SubscriptionsAPI from './subscriptions';

export class Subscriptions extends APIResource {
  /**
   * Updates a user's subscriptions.
   */
  update(
    identifier: string,
    body: SubscriptionUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubscriptionUpdateResponse> {
    return (
      this._client.put(`/user/subscriptions/${identifier}`, { body, ...options }) as Core.APIPromise<{
        result: SubscriptionUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes a user's subscription.
   */
  delete(identifier: string, options?: Core.RequestOptions): Core.APIPromise<SubscriptionDeleteResponse> {
    return this._client.delete(`/user/subscriptions/${identifier}`, options);
  }

  /**
   * Lists all of a user's subscriptions.
   */
  get(options?: Core.RequestOptions): Core.APIPromise<SubscriptionGetResponse | null> {
    return (
      this._client.get('/user/subscriptions', options) as Core.APIPromise<{
        result: SubscriptionGetResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * The rate plan applied to the subscription.
 */
export interface RatePlan {
  /**
   * The ID of the rate plan.
   */
  id?: string;

  /**
   * The currency applied to the rate plan subscription.
   */
  currency?: string;

  /**
   * Whether this rate plan is managed externally from Cloudflare.
   */
  externally_managed?: boolean;

  /**
   * Whether a rate plan is enterprise-based (or newly adopted term contract).
   */
  is_contract?: boolean;

  /**
   * The full name of the rate plan.
   */
  public_name?: string;

  /**
   * The scope that this rate plan applies to.
   */
  scope?: string;

  /**
   * The list of sets this rate plan applies to.
   */
  sets?: Array<string>;
}

/**
 * The rate plan applied to the subscription.
 */
export interface RatePlanParam {
  /**
   * The ID of the rate plan.
   */
  id?: string;

  /**
   * The currency applied to the rate plan subscription.
   */
  currency?: string;

  /**
   * Whether this rate plan is managed externally from Cloudflare.
   */
  externally_managed?: boolean;

  /**
   * Whether a rate plan is enterprise-based (or newly adopted term contract).
   */
  is_contract?: boolean;

  /**
   * The full name of the rate plan.
   */
  public_name?: string;

  /**
   * The scope that this rate plan applies to.
   */
  scope?: string;

  /**
   * The list of sets this rate plan applies to.
   */
  sets?: Array<string>;
}

export interface Subscription {
  /**
   * Subscription identifier tag.
   */
  id?: string;

  /**
   * The monetary unit in which pricing information is displayed.
   */
  currency?: string;

  /**
   * The end of the current period and also when the next billing is due.
   */
  current_period_end?: string;

  /**
   * When the current billing period started. May match initial_period_start if this
   * is the first period.
   */
  current_period_start?: string;

  /**
   * How often the subscription is renewed automatically.
   */
  frequency?: 'weekly' | 'monthly' | 'quarterly' | 'yearly';

  /**
   * The price of the subscription that will be billed, in US dollars.
   */
  price?: number;

  /**
   * The rate plan applied to the subscription.
   */
  rate_plan?: RatePlan;

  /**
   * The state that the subscription is in.
   */
  state?: 'Trial' | 'Provisioned' | 'Paid' | 'AwaitingPayment' | 'Cancelled' | 'Failed' | 'Expired';
}

/**
 * A component value for a subscription.
 */
export interface SubscriptionComponent {
  /**
   * The default amount assigned.
   */
  default?: number;

  /**
   * The name of the component value.
   */
  name?: string;

  /**
   * The unit price for the component value.
   */
  price?: number;

  /**
   * The amount of the component value assigned.
   */
  value?: number;
}

/**
 * A simple zone object. May have null properties if not a zone subscription.
 */
export interface SubscriptionZone {
  /**
   * Identifier
   */
  id?: string;

  /**
   * The domain name
   */
  name?: string;
}

export type SubscriptionUpdateResponse = unknown | string | null;

export interface SubscriptionDeleteResponse {
  /**
   * Subscription identifier tag.
   */
  subscription_id?: string;
}

export type SubscriptionGetResponse = Array<Subscription>;

export interface SubscriptionUpdateParams {
  /**
   * How often the subscription is renewed automatically.
   */
  frequency?: 'weekly' | 'monthly' | 'quarterly' | 'yearly';

  /**
   * The rate plan applied to the subscription.
   */
  rate_plan?: RatePlanParam;
}

export namespace Subscriptions {
  export import RatePlan = SubscriptionsAPI.RatePlan;
  export import Subscription = SubscriptionsAPI.Subscription;
  export import SubscriptionComponent = SubscriptionsAPI.SubscriptionComponent;
  export import SubscriptionZone = SubscriptionsAPI.SubscriptionZone;
  export import SubscriptionUpdateResponse = SubscriptionsAPI.SubscriptionUpdateResponse;
  export import SubscriptionDeleteResponse = SubscriptionsAPI.SubscriptionDeleteResponse;
  export import SubscriptionGetResponse = SubscriptionsAPI.SubscriptionGetResponse;
  export import SubscriptionUpdateParams = SubscriptionsAPI.SubscriptionUpdateParams;
}
