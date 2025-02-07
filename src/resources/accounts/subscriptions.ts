// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Shared from '../shared';
import { SubscriptionsSinglePage } from '../shared';
import { APIPromise } from '../../api-promise';
import { PagePromise, SinglePage } from '../../pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Subscriptions extends APIResource {
  /**
   * Creates an account subscription.
   */
  create(params: SubscriptionCreateParams, options?: RequestOptions): APIPromise<SubscriptionCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/subscriptions`, { body, ...options }) as APIPromise<{
        result: SubscriptionCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates an account subscription.
   */
  update(
    subscriptionIdentifier: string,
    params: SubscriptionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/subscriptions/${subscriptionIdentifier}`, {
        body,
        ...options,
      }) as APIPromise<{ result: SubscriptionUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes an account's subscription.
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

  /**
   * Lists all of an account's subscriptions.
   */
  get(
    params: SubscriptionGetParams,
    options?: RequestOptions,
  ): PagePromise<SubscriptionsSinglePage, Shared.Subscription> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/subscriptions`,
      SinglePage<Shared.Subscription>,
      options,
    );
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

export interface SubscriptionCreateParams {
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

export interface SubscriptionGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export declare namespace Subscriptions {
  export {
    type SubscriptionCreateResponse as SubscriptionCreateResponse,
    type SubscriptionUpdateResponse as SubscriptionUpdateResponse,
    type SubscriptionDeleteResponse as SubscriptionDeleteResponse,
    type SubscriptionCreateParams as SubscriptionCreateParams,
    type SubscriptionUpdateParams as SubscriptionUpdateParams,
    type SubscriptionDeleteParams as SubscriptionDeleteParams,
    type SubscriptionGetParams as SubscriptionGetParams,
  };
}

export { type SubscriptionsSinglePage };
