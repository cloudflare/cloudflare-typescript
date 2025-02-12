// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as Shared from '../shared';
import { SubscriptionsSinglePage } from '../shared';

export class Subscriptions extends APIResource {
  /**
   * Creates an account subscription.
   */
  create(
    params: SubscriptionCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubscriptionCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/subscriptions`, { body, ...options }) as Core.APIPromise<{
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
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubscriptionUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/subscriptions/${subscriptionIdentifier}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: SubscriptionUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes an account's subscription.
   */
  delete(
    subscriptionIdentifier: string,
    params: SubscriptionDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SubscriptionDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/subscriptions/${subscriptionIdentifier}`,
        options,
      ) as Core.APIPromise<{ result: SubscriptionDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists all of an account's subscriptions.
   */
  get(
    params: SubscriptionGetParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<SubscriptionsSinglePage, Shared.Subscription> {
    const { account_id } = params;
    return this._client.getAPIList(`/accounts/${account_id}/subscriptions`, SubscriptionsSinglePage, options);
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

export { SubscriptionsSinglePage };
