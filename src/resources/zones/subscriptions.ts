// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Subscriptions extends APIResource {
  /**
   * Create a zone subscription, either plan or add-ons.
   *
   * @example
   * ```ts
   * const subscription =
   *   await client.zones.subscriptions.create({
   *     zone_id: '506e3185e9c882d175a2d0cb0093d9f2',
   *   });
   * ```
   */
  create(params: SubscriptionCreateParams, options?: RequestOptions): APIPromise<Shared.Subscription> {
    const { zone_id, ...body } = params;
    return (
      this._client.post(path`/zones/${zone_id}/subscription`, { body, ...options }) as APIPromise<{
        result: Shared.Subscription;
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
   *     zone_id: '506e3185e9c882d175a2d0cb0093d9f2',
   *   });
   * ```
   */
  update(params: SubscriptionUpdateParams, options?: RequestOptions): APIPromise<Shared.Subscription> {
    const { zone_id, ...body } = params;
    return (
      this._client.put(path`/zones/${zone_id}/subscription`, { body, ...options }) as APIPromise<{
        result: Shared.Subscription;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists zone subscription details.
   *
   * @example
   * ```ts
   * const subscription = await client.zones.subscriptions.get({
   *   zone_id: '506e3185e9c882d175a2d0cb0093d9f2',
   * });
   * ```
   */
  get(params: SubscriptionGetParams, options?: RequestOptions): APIPromise<Shared.Subscription> {
    const { zone_id } = params;
    return (
      this._client.get(path`/zones/${zone_id}/subscription`, options) as APIPromise<{
        result: Shared.Subscription;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface SubscriptionCreateParams {
  /**
   * Path param: Subscription identifier tag.
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
   * Path param: Subscription identifier tag.
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
   * Subscription identifier tag.
   */
  zone_id: string;
}

export declare namespace Subscriptions {
  export {
    type SubscriptionCreateParams as SubscriptionCreateParams,
    type SubscriptionUpdateParams as SubscriptionUpdateParams,
    type SubscriptionGetParams as SubscriptionGetParams,
  };
}
