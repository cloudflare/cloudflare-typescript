// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ZonesSubscriptionsAPI from './subscriptions';
import * as SubscriptionsAPI from '../user/subscriptions';
import { SubscriptionsSinglePage } from '../user/subscriptions';

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
    params: SubscriptionListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<SubscriptionsSinglePage, SubscriptionsAPI.Subscription> {
    const { account_id } = params;
    return this._client.getAPIList(`/accounts/${account_id}/subscriptions`, SubscriptionsSinglePage, options);
  }

  /**
   * Updates zone subscriptions, either plan or add-ons.
   */
  edit(
    identifier: string,
    body: SubscriptionEditParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubscriptionEditResponse> {
    return (
      this._client.put(`/zones/${identifier}/subscription`, { body, ...options }) as Core.APIPromise<{
        result: SubscriptionEditResponse;
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

export type SubscriptionEditResponse = unknown | string | null;

export type SubscriptionGetResponse = unknown | string | null;

export interface SubscriptionCreateParams {
  app?: SubscriptionCreateParams.App;

  /**
   * The list of add-ons subscribed to.
   */
  component_values?: Array<SubscriptionsAPI.SubscriptionComponentParam>;

  /**
   * How often the subscription is renewed automatically.
   */
  frequency?: 'weekly' | 'monthly' | 'quarterly' | 'yearly';

  /**
   * The rate plan applied to the subscription.
   */
  rate_plan?: SubscriptionsAPI.RatePlanParam;

  /**
   * A simple zone object. May have null properties if not a zone subscription.
   */
  zone?: SubscriptionsAPI.SubscriptionZoneParam;
}

export namespace SubscriptionCreateParams {
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

export interface SubscriptionEditParams {
  app?: SubscriptionEditParams.App;

  /**
   * The list of add-ons subscribed to.
   */
  component_values?: Array<SubscriptionsAPI.SubscriptionComponentParam>;

  /**
   * How often the subscription is renewed automatically.
   */
  frequency?: 'weekly' | 'monthly' | 'quarterly' | 'yearly';

  /**
   * The rate plan applied to the subscription.
   */
  rate_plan?: SubscriptionsAPI.RatePlanParam;

  /**
   * A simple zone object. May have null properties if not a zone subscription.
   */
  zone?: SubscriptionsAPI.SubscriptionZoneParam;
}

export namespace SubscriptionEditParams {
  export interface App {
    /**
     * app install id.
     */
    install_id?: string;
  }
}

export namespace Subscriptions {
  export import SubscriptionCreateResponse = ZonesSubscriptionsAPI.SubscriptionCreateResponse;
  export import SubscriptionEditResponse = ZonesSubscriptionsAPI.SubscriptionEditResponse;
  export import SubscriptionGetResponse = ZonesSubscriptionsAPI.SubscriptionGetResponse;
  export import SubscriptionCreateParams = ZonesSubscriptionsAPI.SubscriptionCreateParams;
  export import SubscriptionListParams = ZonesSubscriptionsAPI.SubscriptionListParams;
  export import SubscriptionEditParams = ZonesSubscriptionsAPI.SubscriptionEditParams;
}

export { SubscriptionsSinglePage };
