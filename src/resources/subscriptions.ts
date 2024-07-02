// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import * as Core from '../core';
import * as UserSubscriptionsAPI from './user/subscriptions';
import { SubscriptionsSinglePage } from './user/subscriptions';

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
   * Lists all of an account's subscriptions.
   */
  list(
    accountIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<SubscriptionsSinglePage, UserSubscriptionsAPI.Subscription> {
    return this._client.getAPIList(
      `/accounts/${accountIdentifier}/subscriptions`,
      SubscriptionsSinglePage,
      options,
    );
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

export type SubscriptionUpdateResponse = unknown | string | null;

export interface SubscriptionDeleteResponse {
  /**
   * Subscription identifier tag.
   */
  subscription_id?: string;
}

export type SubscriptionGetResponse = unknown | string | null;

export interface SubscriptionCreateParams {
  app?: SubscriptionCreateParams.App;

  /**
   * The list of add-ons subscribed to.
   */
  component_values?: Array<UserSubscriptionsAPI.SubscriptionComponentParam>;

  /**
   * How often the subscription is renewed automatically.
   */
  frequency?: 'weekly' | 'monthly' | 'quarterly' | 'yearly';

  /**
   * The rate plan applied to the subscription.
   */
  rate_plan?: UserSubscriptionsAPI.RatePlanParam;

  /**
   * A simple zone object. May have null properties if not a zone subscription.
   */
  zone?: UserSubscriptionsAPI.SubscriptionZoneParam;
}

export namespace SubscriptionCreateParams {
  export interface App {
    /**
     * app install id.
     */
    install_id?: string;
  }
}

export interface SubscriptionUpdateParams {
  app?: SubscriptionUpdateParams.App;

  /**
   * The list of add-ons subscribed to.
   */
  component_values?: Array<UserSubscriptionsAPI.SubscriptionComponentParam>;

  /**
   * How often the subscription is renewed automatically.
   */
  frequency?: 'weekly' | 'monthly' | 'quarterly' | 'yearly';

  /**
   * The rate plan applied to the subscription.
   */
  rate_plan?: UserSubscriptionsAPI.RatePlanParam;

  /**
   * A simple zone object. May have null properties if not a zone subscription.
   */
  zone?: UserSubscriptionsAPI.SubscriptionZoneParam;
}

export namespace SubscriptionUpdateParams {
  export interface App {
    /**
     * app install id.
     */
    install_id?: string;
  }
}

export { SubscriptionsSinglePage };
