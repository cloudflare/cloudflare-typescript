// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as Shared from '../shared';
import { SubscriptionsSinglePage } from '../shared';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, SinglePage } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Subscriptions extends APIResource {
  /**
   * Updates a user's subscriptions.
   */
  update(
    identifier: string,
    body: SubscriptionUpdateParams,
    options?: RequestOptions,
  ): APIPromise<SubscriptionUpdateResponse> {
    return (
      this._client.put(path`/user/subscriptions/${identifier}`, { body, ...options }) as APIPromise<{
        result: SubscriptionUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Deletes a user's subscription.
   */
  delete(identifier: string, options?: RequestOptions): APIPromise<SubscriptionDeleteResponse> {
    return this._client.delete(path`/user/subscriptions/${identifier}`, options);
  }

  /**
   * Lists all of a user's subscriptions.
   */
  get(options?: RequestOptions): PagePromise<SubscriptionsSinglePage, Shared.Subscription> {
    return this._client.getAPIList('/user/subscriptions', SinglePage<Shared.Subscription>, options);
  }
}

export type SubscriptionUpdateResponse = unknown | string | null;

export interface SubscriptionDeleteResponse {
  /**
   * Subscription identifier tag.
   */
  subscription_id?: string;
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
    type SubscriptionUpdateResponse as SubscriptionUpdateResponse,
    type SubscriptionDeleteResponse as SubscriptionDeleteResponse,
    type SubscriptionUpdateParams as SubscriptionUpdateParams,
  };
}

export { type SubscriptionsSinglePage };
