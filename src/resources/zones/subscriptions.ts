// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SubscriptionsAPI from 'cloudflare/resources/zones/subscriptions';

export class Subscriptions extends APIResource {
  /**
   * Create a zone subscription, either plan or add-ons.
   */
  create(
    identifier: string,
    body: SubscriptionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubscriptionCreateResponse> {
    return (
      this._client.post(`/zones/${identifier}/subscription`, { body, ...options }) as Core.APIPromise<{
        result: SubscriptionCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all of an account's subscriptions.
   */
  list(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubscriptionListResponse | null> {
    return (
      this._client.get(`/accounts/${accountIdentifier}/subscriptions`, options) as Core.APIPromise<{
        result: SubscriptionListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists zone subscription details.
   */
  get(identifier: string, options?: Core.RequestOptions): Core.APIPromise<SubscriptionGetResponse> {
    return (
      this._client.get(`/zones/${identifier}/subscription`, options) as Core.APIPromise<{
        result: SubscriptionGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type SubscriptionCreateResponse = unknown | string | null;

export type SubscriptionListResponse = Array<SubscriptionListResponse.SubscriptionListResponseItem>;

export namespace SubscriptionListResponse {
  export interface SubscriptionListResponseItem {
    /**
     * Subscription identifier tag.
     */
    id?: string;

    app?: SubscriptionListResponseItem.App;

    /**
     * The list of add-ons subscribed to.
     */
    component_values?: Array<SubscriptionListResponseItem.ComponentValue>;

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
    rate_plan?: SubscriptionListResponseItem.RatePlan;

    /**
     * The state that the subscription is in.
     */
    state?: 'Trial' | 'Provisioned' | 'Paid' | 'AwaitingPayment' | 'Cancelled' | 'Failed' | 'Expired';

    /**
     * A simple zone object. May have null properties if not a zone subscription.
     */
    zone?: SubscriptionListResponseItem.Zone;
  }

  export namespace SubscriptionListResponseItem {
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

export type SubscriptionGetResponse = unknown | string | null;

export interface SubscriptionCreateParams {
  app?: SubscriptionCreateParams.App;

  /**
   * The list of add-ons subscribed to.
   */
  component_values?: Array<SubscriptionCreateParams.ComponentValue>;

  /**
   * How often the subscription is renewed automatically.
   */
  frequency?: 'weekly' | 'monthly' | 'quarterly' | 'yearly';

  /**
   * The rate plan applied to the subscription.
   */
  rate_plan?: SubscriptionCreateParams.RatePlan;

  /**
   * A simple zone object. May have null properties if not a zone subscription.
   */
  zone?: SubscriptionCreateParams.Zone;
}

export namespace SubscriptionCreateParams {
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
   * A simple zone object. May have null properties if not a zone subscription.
   */
  export interface Zone {}
}

export namespace Subscriptions {
  export import SubscriptionCreateResponse = SubscriptionsAPI.SubscriptionCreateResponse;
  export import SubscriptionListResponse = SubscriptionsAPI.SubscriptionListResponse;
  export import SubscriptionGetResponse = SubscriptionsAPI.SubscriptionGetResponse;
  export import SubscriptionCreateParams = SubscriptionsAPI.SubscriptionCreateParams;
}
