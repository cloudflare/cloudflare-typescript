// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SubscriptionsAPI from 'cloudflare/resources/users/subscriptions';

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
  userSubscriptionGetUserSubscriptions(
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubscriptionUserSubscriptionGetUserSubscriptionsResponse | null> {
    return (
      this._client.get('/user/subscriptions', options) as Core.APIPromise<{
        result: SubscriptionUserSubscriptionGetUserSubscriptionsResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type SubscriptionUpdateResponse = unknown | string | null;

export interface SubscriptionDeleteResponse {
  /**
   * Subscription identifier tag.
   */
  subscription_id?: string;
}

export type SubscriptionUserSubscriptionGetUserSubscriptionsResponse =
  Array<SubscriptionUserSubscriptionGetUserSubscriptionsResponse.SubscriptionUserSubscriptionGetUserSubscriptionsResponseItem>;

export namespace SubscriptionUserSubscriptionGetUserSubscriptionsResponse {
  export interface SubscriptionUserSubscriptionGetUserSubscriptionsResponseItem {
    /**
     * Subscription identifier tag.
     */
    id?: string;

    app?: SubscriptionUserSubscriptionGetUserSubscriptionsResponseItem.App;

    /**
     * The list of add-ons subscribed to.
     */
    component_values?: Array<SubscriptionUserSubscriptionGetUserSubscriptionsResponseItem.ComponentValue>;

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
    rate_plan?: SubscriptionUserSubscriptionGetUserSubscriptionsResponseItem.RatePlan;

    /**
     * The state that the subscription is in.
     */
    state?: 'Trial' | 'Provisioned' | 'Paid' | 'AwaitingPayment' | 'Cancelled' | 'Failed' | 'Expired';

    /**
     * A simple zone object. May have null properties if not a zone subscription.
     */
    zone?: SubscriptionUserSubscriptionGetUserSubscriptionsResponseItem.Zone;
  }

  export namespace SubscriptionUserSubscriptionGetUserSubscriptionsResponseItem {
    export interface App {
      /**
       * app install id.
       */
      install_id?: string;
    }

    /**
     * A component value for a subscription.
     */
    export interface ComponentValue {
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
     * The rate plan applied to the subscription.
     */
    export interface RatePlan {
      /**
       * The ID of the rate plan.
       */
      id?: unknown;

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
     * A simple zone object. May have null properties if not a zone subscription.
     */
    export interface Zone {
      /**
       * Identifier
       */
      id?: string;

      /**
       * The domain name
       */
      name?: string;
    }
  }
}

export interface SubscriptionUpdateParams {
  app?: SubscriptionUpdateParams.App;

  /**
   * The list of add-ons subscribed to.
   */
  component_values?: Array<SubscriptionUpdateParams.ComponentValue>;

  /**
   * How often the subscription is renewed automatically.
   */
  frequency?: 'weekly' | 'monthly' | 'quarterly' | 'yearly';

  /**
   * The rate plan applied to the subscription.
   */
  rate_plan?: SubscriptionUpdateParams.RatePlan;

  /**
   * A simple zone object. May have null properties if not a zone subscription.
   */
  zone?: SubscriptionUpdateParams.Zone;
}

export namespace SubscriptionUpdateParams {
  export interface App {
    /**
     * app install id.
     */
    install_id?: string;
  }

  /**
   * A component value for a subscription.
   */
  export interface ComponentValue {
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
   * The rate plan applied to the subscription.
   */
  export interface RatePlan {
    /**
     * The ID of the rate plan.
     */
    id?: unknown;

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
   * A simple zone object. May have null properties if not a zone subscription.
   */
  export interface Zone {}
}

export namespace Subscriptions {
  export import SubscriptionUpdateResponse = SubscriptionsAPI.SubscriptionUpdateResponse;
  export import SubscriptionDeleteResponse = SubscriptionsAPI.SubscriptionDeleteResponse;
  export import SubscriptionUserSubscriptionGetUserSubscriptionsResponse = SubscriptionsAPI.SubscriptionUserSubscriptionGetUserSubscriptionsResponse;
  export import SubscriptionUpdateParams = SubscriptionsAPI.SubscriptionUpdateParams;
}
