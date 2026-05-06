// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as ConfigAPI from './config';
import {
  Config,
  ConfigCreateParams,
  ConfigCreateResponse,
  ConfigDeleteParams,
  ConfigDeleteResponse,
  ConfigGetParams,
  ConfigGetResponse,
} from './config';

export class Topup extends APIResource {
  config: ConfigAPI.Config = new ConfigAPI.Config(this._client);

  /**
   * Create a credit top-up via Stripe PaymentIntent for the given account.
   *
   * @example
   * ```ts
   * const topup = await client.aiGateway.billing.topup.create({
   *   account_id: 'account_id',
   *   amount: 5000,
   * });
   * ```
   */
  create(params: TopupCreateParams, options?: Core.RequestOptions): Core.APIPromise<TopupCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/ai-gateway/billing/topup`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: TopupCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get the payment processing status of a top-up by its invoice ID.
   *
   * @example
   * ```ts
   * const response =
   *   await client.aiGateway.billing.topup.status({
   *     account_id: 'account_id',
   *     payment_intent_id: 'in_1abc',
   *   });
   * ```
   */
  status(params: TopupStatusParams, options?: Core.RequestOptions): Core.APIPromise<TopupStatusResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/ai-gateway/billing/topup/status`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: TopupStatusResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface TopupCreateResponse {
  /**
   * Stripe PaymentIntent client secret.
   */
  client_secret: string | null;

  /**
   * Whether the user was already onboarded.
   */
  onboarding: boolean;

  /**
   * Stripe invoice ID.
   */
  payment_intent_id: string;

  /**
   * Card brand (visa, mastercard, etc.).
   */
  brand?: string;

  /**
   * Last 4 digits of card.
   */
  last4?: string;
}

export interface TopupStatusResponse {
  payment_intent_id: string;

  status: 'completed' | 'pending';
}

export interface TopupCreateParams {
  /**
   * Path param: Cloudflare account ID.
   */
  account_id: string;

  /**
   * Body param: Top-up amount in cents (min 1000).
   */
  amount: number;
}

export interface TopupStatusParams {
  /**
   * Path param: Cloudflare account ID.
   */
  account_id: string;

  /**
   * Body param: Stripe invoice ID to check status for.
   */
  payment_intent_id: string;
}

Topup.Config = Config;

export declare namespace Topup {
  export {
    type TopupCreateResponse as TopupCreateResponse,
    type TopupStatusResponse as TopupStatusResponse,
    type TopupCreateParams as TopupCreateParams,
    type TopupStatusParams as TopupStatusParams,
  };

  export {
    Config as Config,
    type ConfigCreateResponse as ConfigCreateResponse,
    type ConfigDeleteResponse as ConfigDeleteResponse,
    type ConfigGetResponse as ConfigGetResponse,
    type ConfigCreateParams as ConfigCreateParams,
    type ConfigDeleteParams as ConfigDeleteParams,
    type ConfigGetParams as ConfigGetParams,
  };
}
