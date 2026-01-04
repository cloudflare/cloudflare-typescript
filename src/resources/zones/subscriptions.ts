// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';

export class Subscriptions extends APIResource {
  /**
   * Create a zone subscription, either plan or add-ons.
   *
   * @example
   * ```ts
   * const subscription =
   *   await client.zones.subscriptions.create({
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
   */
  create(
    params: SubscriptionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubscriptionCreateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(`/zones/${zone_id}/subscription`, { body, ...options }) as Core.APIPromise<{
        result: SubscriptionCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates zone subscriptions, either plan or add-ons.
   *
   * @example
   * ```ts
   * const subscription =
   *   await client.zones.subscriptions.update({
   *     zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
   */
  update(
    params: SubscriptionUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubscriptionUpdateResponse> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(`/zones/${zone_id}/subscription`, { body, ...options }) as Core.APIPromise<{
        result: SubscriptionUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists zone subscription details.
   *
   * @example
   * ```ts
   * const subscription = await client.zones.subscriptions.get({
   *   zone_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  get(
    params: SubscriptionGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubscriptionGetResponse> {
    const { zone_id } = params;
    return (
      this._client.get(`/zones/${zone_id}/subscription`, options) as Core.APIPromise<{
        result: SubscriptionGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface SubscriptionCreateResponse {
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
  frequency?: 'weekly' | 'monthly' | 'quarterly' | 'yearly' | 'not-applicable';

  /**
   * The price of the subscription that will be billed, in US dollars.
   */
  price?: number;

  /**
   * The rate plan applied to the subscription.
   */
  rate_plan?: Shared.RatePlan;

  /**
   * The state that the subscription is in.
   */
  state?: 'Trial' | 'Provisioned' | 'Paid' | 'AwaitingPayment' | 'Cancelled' | 'Failed' | 'Expired';
}

export interface SubscriptionUpdateResponse {
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
  frequency?: 'weekly' | 'monthly' | 'quarterly' | 'yearly' | 'not-applicable';

  /**
   * The price of the subscription that will be billed, in US dollars.
   */
  price?: number;

  /**
   * The rate plan applied to the subscription.
   */
  rate_plan?: Shared.RatePlan;

  /**
   * The state that the subscription is in.
   */
  state?: 'Trial' | 'Provisioned' | 'Paid' | 'AwaitingPayment' | 'Cancelled' | 'Failed' | 'Expired';
}

export interface SubscriptionGetResponse {
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
  frequency?: 'weekly' | 'monthly' | 'quarterly' | 'yearly' | 'not-applicable';

  /**
   * The price of the subscription that will be billed, in US dollars.
   */
  price?: number;

  /**
   * The rate plan applied to the subscription.
   */
  rate_plan?: Shared.RatePlan;

  /**
   * The state that the subscription is in.
   */
  state?: 'Trial' | 'Provisioned' | 'Paid' | 'AwaitingPayment' | 'Cancelled' | 'Failed' | 'Expired';
}

export interface SubscriptionCreateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: How often the subscription is renewed automatically.
   */
  frequency?: 'weekly' | 'monthly' | 'quarterly' | 'yearly';

  /**
   * Body param: The rate plan applied to the subscription.
   */
  rate_plan?: Shared.RatePlanParam;
}

export interface SubscriptionUpdateParams {
  /**
   * Path param: Identifier
   */
  zone_id: string;

  /**
   * Body param: How often the subscription is renewed automatically.
   */
  frequency?: 'weekly' | 'monthly' | 'quarterly' | 'yearly';

  /**
   * Body param: The rate plan applied to the subscription.
   */
  rate_plan?: Shared.RatePlanParam;
}

export interface SubscriptionGetParams {
  /**
   * Identifier
   */
  zone_id: string;
}

export declare namespace Subscriptions {
  export {
    type SubscriptionCreateResponse as SubscriptionCreateResponse,
    type SubscriptionUpdateResponse as SubscriptionUpdateResponse,
    type SubscriptionGetResponse as SubscriptionGetResponse,
    type SubscriptionCreateParams as SubscriptionCreateParams,
    type SubscriptionUpdateParams as SubscriptionUpdateParams,
    type SubscriptionGetParams as SubscriptionGetParams,
  };
}
