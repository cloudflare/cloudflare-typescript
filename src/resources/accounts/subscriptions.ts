// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseSubscriptions extends APIResource {
  static override readonly _key: readonly ['accounts', 'subscriptions'] = Object.freeze([
    'accounts',
    'subscriptions',
  ] as const);

  /**
   * Updates an account subscription.
   *
   * @example
   * ```ts
   * const subscription =
   *   await client.accounts.subscriptions.update(
   *     '506e3185e9c882d175a2d0cb0093d9f2',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  update(
    subscriptionIdentifier: string,
    params: SubscriptionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<Shared.Subscription> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/subscriptions/${subscriptionIdentifier}`, {
        body,
        ...options,
      }) as APIPromise<{ result: Shared.Subscription }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes an account's subscription.
   *
   * @example
   * ```ts
   * const subscription =
   *   await client.accounts.subscriptions.delete(
   *     '506e3185e9c882d175a2d0cb0093d9f2',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  delete(
    subscriptionIdentifier: string,
    params: SubscriptionDeleteParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/subscriptions/${subscriptionIdentifier}`,
        options,
      ) as APIPromise<{ result: SubscriptionDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Subscriptions extends BaseSubscriptions {}

export interface SubscriptionDeleteResponse {
  /**
   * Subscription identifier tag.
   */
  subscription_id?: string;
}

export interface SubscriptionUpdateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: How often the subscription is renewed automatically.
   */
  frequency?: 'weekly' | 'monthly' | 'quarterly' | 'yearly';

  /**
   * Body param: The rate plan applied to the subscription.
   */
  rate_plan?: Shared.RatePlanParam;
}

export interface SubscriptionDeleteParams {
  /**
   * Identifier
   */
  account_id: string;
}

export declare namespace Subscriptions {
  export {
    type SubscriptionDeleteResponse as SubscriptionDeleteResponse,
    type SubscriptionUpdateParams as SubscriptionUpdateParams,
    type SubscriptionDeleteParams as SubscriptionDeleteParams,
  };
}
