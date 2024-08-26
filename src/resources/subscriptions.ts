// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import { APIPromise } from '../core';
import * as Core from '../core';
import * as SubscriptionsAPI from './subscriptions';
import * as UserSubscriptionsAPI from './user/subscriptions';
import { SubscriptionsSinglePage } from './user/subscriptions';
import { SinglePage } from '../pagination';

export class Subscriptions extends APIResource {
  /**
   * Create a zone subscription, either plan or add-ons.
   */
  create(identifier: string, body: SubscriptionCreateParams, options?: Core.RequestOptions): Core.APIPromise<SubscriptionCreateResponse> {
    return (this._client.post(`/zones/${identifier}/subscription`, { body, ...options }) as Core.APIPromise<{ result: SubscriptionCreateResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an account subscription.
   */
  update(subscriptionIdentifier: string, params: SubscriptionUpdateParams, options?: Core.RequestOptions): Core.APIPromise<SubscriptionUpdateResponse> {
    const { account_id, ...body } = params;
    return (this._client.put(`/accounts/${account_id}/subscriptions/${subscriptionIdentifier}`, { body, ...options }) as Core.APIPromise<{ result: SubscriptionUpdateResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all of an account's subscriptions.
   */
  list(params: SubscriptionListParams, options?: Core.RequestOptions): Core.PagePromise<SubscriptionsSinglePage, UserSubscriptionsAPI.Subscription> {
    const { account_id } = params;
    return this._client.getAPIList(`/accounts/${account_id}/subscriptions`, SubscriptionsSinglePage, options);
  }

  /**
   * Deletes an account's subscription.
   */
  delete(subscriptionIdentifier: string, params: SubscriptionDeleteParams, options?: Core.RequestOptions): Core.APIPromise<SubscriptionDeleteResponse> {
    const { account_id } = params;
    return (this._client.delete(`/accounts/${account_id}/subscriptions/${subscriptionIdentifier}`, options) as Core.APIPromise<{ result: SubscriptionDeleteResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists zone subscription details.
   */
  get(identifier: string, options?: Core.RequestOptions): Core.APIPromise<SubscriptionGetResponse> {
    return (this._client.get(`/zones/${identifier}/subscription`, options) as Core.APIPromise<{ result: SubscriptionGetResponse }>)._thenUnwrap((obj) => obj.result);
  }
}

export type SubscriptionCreateResponse = unknown | string | null

export type SubscriptionUpdateResponse = unknown | string | null

export interface SubscriptionDeleteResponse {
  /**
   * Subscription identifier tag.
   */
  subscription_id?: string;
}

export type SubscriptionGetResponse = unknown | string | null

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
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param:
   */
  app?: SubscriptionUpdateParams.App;

  /**
   * Body param: The list of add-ons subscribed to.
   */
  component_values?: Array<UserSubscriptionsAPI.SubscriptionComponentParam>;

  /**
   * Body param: How often the subscription is renewed automatically.
   */
  frequency?: 'weekly' | 'monthly' | 'quarterly' | 'yearly';

  /**
   * Body param: The rate plan applied to the subscription.
   */
  rate_plan?: UserSubscriptionsAPI.RatePlanParam;

  /**
   * Body param: A simple zone object. May have null properties if not a zone
   * subscription.
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

export interface SubscriptionListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export interface SubscriptionDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export { SubscriptionsSinglePage }
