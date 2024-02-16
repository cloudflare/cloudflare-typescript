// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SubscriptionsAPI from 'cloudflare/resources/subscriptions';

export class Subscriptions extends APIResource {
  /**
   * Updates an account subscription.
   */
  update(
    accountIdentifier: string,
    subscriptionIdentifier: string,
    body: SubscriptionUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubscriptionUpdateResponse> {
    return (
      this._client.put(`/accounts/${accountIdentifier}/subscriptions/${subscriptionIdentifier}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: SubscriptionUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes an account's subscription.
   */
  delete(
    accountIdentifier: string,
    subscriptionIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubscriptionDeleteResponse> {
    return (
      this._client.delete(
        `/accounts/${accountIdentifier}/subscriptions/${subscriptionIdentifier}`,
        options,
      ) as Core.APIPromise<{ result: SubscriptionDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Creates an account subscription.
   */
  accountSubscriptionsCreateSubscription(
    accountIdentifier: string,
    body: SubscriptionAccountSubscriptionsCreateSubscriptionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubscriptionAccountSubscriptionsCreateSubscriptionResponse> {
    return (
      this._client.post(`/accounts/${accountIdentifier}/subscriptions`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: SubscriptionAccountSubscriptionsCreateSubscriptionResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all of an account's subscriptions.
   */
  accountSubscriptionsListSubscriptions(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubscriptionAccountSubscriptionsListSubscriptionsResponse | null> {
    return (
      this._client.get(`/accounts/${accountIdentifier}/subscriptions`, options) as Core.APIPromise<{
        result: SubscriptionAccountSubscriptionsListSubscriptionsResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Create a zone subscription, either plan or add-ons.
   */
  zoneSubscriptionCreateZoneSubscription(
    identifier: string,
    body: SubscriptionZoneSubscriptionCreateZoneSubscriptionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubscriptionZoneSubscriptionCreateZoneSubscriptionResponse> {
    return (
      this._client.post(`/zones/${identifier}/subscription`, { body, ...options }) as Core.APIPromise<{
        result: SubscriptionZoneSubscriptionCreateZoneSubscriptionResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates zone subscriptions, either plan or add-ons.
   */
  zoneSubscriptionUpdateZoneSubscription(
    identifier: string,
    body: SubscriptionZoneSubscriptionUpdateZoneSubscriptionParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubscriptionZoneSubscriptionUpdateZoneSubscriptionResponse> {
    return (
      this._client.put(`/zones/${identifier}/subscription`, { body, ...options }) as Core.APIPromise<{
        result: SubscriptionZoneSubscriptionUpdateZoneSubscriptionResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists zone subscription details.
   */
  zoneSubscriptionZoneSubscriptionDetails(
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubscriptionZoneSubscriptionZoneSubscriptionDetailsResponse> {
    return (
      this._client.get(`/zones/${identifier}/subscription`, options) as Core.APIPromise<{
        result: SubscriptionZoneSubscriptionZoneSubscriptionDetailsResponse;
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

export type SubscriptionAccountSubscriptionsCreateSubscriptionResponse = unknown | string | null;

export type SubscriptionAccountSubscriptionsListSubscriptionsResponse =
  Array<SubscriptionAccountSubscriptionsListSubscriptionsResponse.SubscriptionAccountSubscriptionsListSubscriptionsResponseItem>;

export namespace SubscriptionAccountSubscriptionsListSubscriptionsResponse {
  export interface SubscriptionAccountSubscriptionsListSubscriptionsResponseItem {
    /**
     * Subscription identifier tag.
     */
    id?: string;

    app?: SubscriptionAccountSubscriptionsListSubscriptionsResponseItem.App;

    /**
     * The list of add-ons subscribed to.
     */
    component_values?: Array<SubscriptionAccountSubscriptionsListSubscriptionsResponseItem.ComponentValue>;

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
    rate_plan?: SubscriptionAccountSubscriptionsListSubscriptionsResponseItem.RatePlan;

    /**
     * The state that the subscription is in.
     */
    state?: 'Trial' | 'Provisioned' | 'Paid' | 'AwaitingPayment' | 'Cancelled' | 'Failed' | 'Expired';

    /**
     * A simple zone object. May have null properties if not a zone subscription.
     */
    zone?: SubscriptionAccountSubscriptionsListSubscriptionsResponseItem.Zone;
  }

  export namespace SubscriptionAccountSubscriptionsListSubscriptionsResponseItem {
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

export type SubscriptionZoneSubscriptionCreateZoneSubscriptionResponse = unknown | string | null;

export type SubscriptionZoneSubscriptionUpdateZoneSubscriptionResponse = unknown | string | null;

export type SubscriptionZoneSubscriptionZoneSubscriptionDetailsResponse = unknown | string | null;

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

export interface SubscriptionAccountSubscriptionsCreateSubscriptionParams {
  app?: SubscriptionAccountSubscriptionsCreateSubscriptionParams.App;

  /**
   * The list of add-ons subscribed to.
   */
  component_values?: Array<SubscriptionAccountSubscriptionsCreateSubscriptionParams.ComponentValue>;

  /**
   * How often the subscription is renewed automatically.
   */
  frequency?: 'weekly' | 'monthly' | 'quarterly' | 'yearly';

  /**
   * The rate plan applied to the subscription.
   */
  rate_plan?: SubscriptionAccountSubscriptionsCreateSubscriptionParams.RatePlan;

  /**
   * A simple zone object. May have null properties if not a zone subscription.
   */
  zone?: SubscriptionAccountSubscriptionsCreateSubscriptionParams.Zone;
}

export namespace SubscriptionAccountSubscriptionsCreateSubscriptionParams {
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

export interface SubscriptionZoneSubscriptionCreateZoneSubscriptionParams {
  app?: SubscriptionZoneSubscriptionCreateZoneSubscriptionParams.App;

  /**
   * The list of add-ons subscribed to.
   */
  component_values?: Array<SubscriptionZoneSubscriptionCreateZoneSubscriptionParams.ComponentValue>;

  /**
   * How often the subscription is renewed automatically.
   */
  frequency?: 'weekly' | 'monthly' | 'quarterly' | 'yearly';

  /**
   * The rate plan applied to the subscription.
   */
  rate_plan?: SubscriptionZoneSubscriptionCreateZoneSubscriptionParams.RatePlan;

  /**
   * A simple zone object. May have null properties if not a zone subscription.
   */
  zone?: SubscriptionZoneSubscriptionCreateZoneSubscriptionParams.Zone;
}

export namespace SubscriptionZoneSubscriptionCreateZoneSubscriptionParams {
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

export interface SubscriptionZoneSubscriptionUpdateZoneSubscriptionParams {
  app?: SubscriptionZoneSubscriptionUpdateZoneSubscriptionParams.App;

  /**
   * The list of add-ons subscribed to.
   */
  component_values?: Array<SubscriptionZoneSubscriptionUpdateZoneSubscriptionParams.ComponentValue>;

  /**
   * How often the subscription is renewed automatically.
   */
  frequency?: 'weekly' | 'monthly' | 'quarterly' | 'yearly';

  /**
   * The rate plan applied to the subscription.
   */
  rate_plan?: SubscriptionZoneSubscriptionUpdateZoneSubscriptionParams.RatePlan;

  /**
   * A simple zone object. May have null properties if not a zone subscription.
   */
  zone?: SubscriptionZoneSubscriptionUpdateZoneSubscriptionParams.Zone;
}

export namespace SubscriptionZoneSubscriptionUpdateZoneSubscriptionParams {
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
  export import SubscriptionAccountSubscriptionsCreateSubscriptionResponse = SubscriptionsAPI.SubscriptionAccountSubscriptionsCreateSubscriptionResponse;
  export import SubscriptionAccountSubscriptionsListSubscriptionsResponse = SubscriptionsAPI.SubscriptionAccountSubscriptionsListSubscriptionsResponse;
  export import SubscriptionZoneSubscriptionCreateZoneSubscriptionResponse = SubscriptionsAPI.SubscriptionZoneSubscriptionCreateZoneSubscriptionResponse;
  export import SubscriptionZoneSubscriptionUpdateZoneSubscriptionResponse = SubscriptionsAPI.SubscriptionZoneSubscriptionUpdateZoneSubscriptionResponse;
  export import SubscriptionZoneSubscriptionZoneSubscriptionDetailsResponse = SubscriptionsAPI.SubscriptionZoneSubscriptionZoneSubscriptionDetailsResponse;
  export import SubscriptionUpdateParams = SubscriptionsAPI.SubscriptionUpdateParams;
  export import SubscriptionAccountSubscriptionsCreateSubscriptionParams = SubscriptionsAPI.SubscriptionAccountSubscriptionsCreateSubscriptionParams;
  export import SubscriptionZoneSubscriptionCreateZoneSubscriptionParams = SubscriptionsAPI.SubscriptionZoneSubscriptionCreateZoneSubscriptionParams;
  export import SubscriptionZoneSubscriptionUpdateZoneSubscriptionParams = SubscriptionsAPI.SubscriptionZoneSubscriptionUpdateZoneSubscriptionParams;
}
