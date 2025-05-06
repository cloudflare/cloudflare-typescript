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
   *   await client.zones.subscriptions.create(
   *     '506e3185e9c882d175a2d0cb0093d9f2',
   *   );
   * ```
   */
  create(
    identifier: string,
    body: SubscriptionCreateParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionCreateResponse> {
    return (
      this._client.post(path`/zones/${identifier}/subscription`, { body, ...options }) as APIPromise<{
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
   *   await client.zones.subscriptions.update(
   *     '506e3185e9c882d175a2d0cb0093d9f2',
   *   );
   * ```
   */
  update(
    identifier: string,
    body: SubscriptionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionUpdateResponse> {
    return (
      this._client.put(path`/zones/${identifier}/subscription`, { body, ...options }) as APIPromise<{
        result: SubscriptionUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists zone subscription details.
   *
   * @example
   * ```ts
   * const subscription = await client.zones.subscriptions.get(
   *   '506e3185e9c882d175a2d0cb0093d9f2',
   * );
   * ```
   */
  get(identifier: string, options?: RequestOptions): APIPromise<SubscriptionGetResponse> {
    return (
      this._client.get(path`/zones/${identifier}/subscription`, options) as APIPromise<{
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
  rate_plan?: Shared.RatePlanParam;
}

export interface SubscriptionUpdateParams {
  /**
   * How often the subscription is renewed automatically.
   */
  frequency?: 'weekly' | 'monthly' | 'quarterly' | 'yearly';

  /**
   * The rate plan applied to the subscription.
   */
  rate_plan?: Shared.RatePlanParam;
}

export declare namespace Subscriptions {
  export {
    type SubscriptionCreateResponse as SubscriptionCreateResponse,
    type SubscriptionUpdateResponse as SubscriptionUpdateResponse,
    type SubscriptionGetResponse as SubscriptionGetResponse,
    type SubscriptionCreateParams as SubscriptionCreateParams,
    type SubscriptionUpdateParams as SubscriptionUpdateParams,
  };
}
