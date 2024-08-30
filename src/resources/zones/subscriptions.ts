// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as ZonesSubscriptionsAPI from './subscriptions';
import * as SubscriptionsAPI from '../user/subscriptions';

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
   * Updates zone subscriptions, either plan or add-ons.
   */
  update(
    identifier: string,
    body: SubscriptionUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubscriptionUpdateResponse> {
    return (
      this._client.put(`/zones/${identifier}/subscription`, { body, ...options }) as Core.APIPromise<{
        result: SubscriptionUpdateResponse;
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

export type SubscriptionUpdateResponse = unknown | string | null;

export type SubscriptionGetResponse = unknown | string | null;

export interface SubscriptionCreateParams {
  /**
   * How often the subscription is renewed automatically.
   */
  frequency?: 'weekly' | 'monthly' | 'quarterly' | 'yearly';

  /**
   * The rate plan applied to the subscription.
   */
  rate_plan?: SubscriptionsAPI.RatePlanParam;
}

export interface SubscriptionUpdateParams {
  /**
   * How often the subscription is renewed automatically.
   */
  frequency?: 'weekly' | 'monthly' | 'quarterly' | 'yearly';

  /**
   * The rate plan applied to the subscription.
   */
  rate_plan?: SubscriptionsAPI.RatePlanParam;
}

export namespace Subscriptions {
  export import SubscriptionCreateResponse = ZonesSubscriptionsAPI.SubscriptionCreateResponse;
  export import SubscriptionUpdateResponse = ZonesSubscriptionsAPI.SubscriptionUpdateResponse;
  export import SubscriptionGetResponse = ZonesSubscriptionsAPI.SubscriptionGetResponse;
  export import SubscriptionCreateParams = ZonesSubscriptionsAPI.SubscriptionCreateParams;
  export import SubscriptionUpdateParams = ZonesSubscriptionsAPI.SubscriptionUpdateParams;
}
