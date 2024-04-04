// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SubscriptionsAPI from 'cloudflare/resources/zones/subscriptions';
import * as Shared from 'cloudflare/resources/shared';
import { SinglePage } from 'cloudflare/pagination';

export class Subscriptions extends APIResource {
  /**
   * Create a zone subscription, either plan or add-ons.
   */
  create(
    identifier: string,
    body: SubscriptionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a> {
    return (
      this._client.post(`/zones/${identifier}/subscription`, { body, ...options }) as Core.APIPromise<{
        result: Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all of an account's subscriptions.
   */
  list(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<SubscriptionListResponsesSinglePage, SubscriptionListResponse> {
    return this._client.getAPIList(
      `/accounts/${accountIdentifier}/subscriptions`,
      SubscriptionListResponsesSinglePage,
      options,
    );
  }

  /**
   * Lists zone subscription details.
   */
  get(
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a> {
    return (
      this._client.get(`/zones/${identifier}/subscription`, options) as Core.APIPromise<{
        result: Shared.UnnamedSchemaRef9444735ca60712dbcf8afd832eb5716a;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class SubscriptionListResponsesSinglePage extends SinglePage<SubscriptionListResponse> {}

export interface SubscriptionListResponse {
  /**
   * Subscription identifier tag.
   */
  id?: string;

  app?: SubscriptionListResponse.App;

  /**
   * The list of add-ons subscribed to.
   */
  component_values?: Array<SubscriptionListResponse.ComponentValue>;

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
  rate_plan?: SubscriptionListResponse.RatePlan;

  /**
   * The state that the subscription is in.
   */
  state?: 'Trial' | 'Provisioned' | 'Paid' | 'AwaitingPayment' | 'Cancelled' | 'Failed' | 'Expired';

  /**
   * A simple zone object. May have null properties if not a zone subscription.
   */
  zone?: SubscriptionListResponse.Zone;
}

export namespace SubscriptionListResponse {
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
  export import SubscriptionListResponse = SubscriptionsAPI.SubscriptionListResponse;
  export import SubscriptionListResponsesSinglePage = SubscriptionsAPI.SubscriptionListResponsesSinglePage;
  export import SubscriptionCreateParams = SubscriptionsAPI.SubscriptionCreateParams;
}
