// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class SpendingLimit extends APIResource {
  /**
   * Configure a spending limit with amount, strategy, and duration.
   *
   * @example
   * ```ts
   * const spendingLimit =
   *   await client.aiGateway.billing.spendingLimit.create({
   *     account_id: 'account_id',
   *     amount: 10000,
   *     duration: 'monthly',
   *     strategy: 'fixed',
   *   });
   * ```
   */
  create(
    params: SpendingLimitCreateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SpendingLimitCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/ai-gateway/billing/spending-limit`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: SpendingLimitCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Remove the spending limit for the account.
   *
   * @example
   * ```ts
   * const spendingLimit =
   *   await client.aiGateway.billing.spendingLimit.delete({
   *     account_id: 'account_id',
   *   });
   * ```
   */
  delete(
    params: SpendingLimitDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SpendingLimitDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        `/accounts/${account_id}/ai-gateway/billing/spending-limit`,
        options,
      ) as Core.APIPromise<{ result: SpendingLimitDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieve the current spending limit configuration for the account.
   *
   * @example
   * ```ts
   * const spendingLimit =
   *   await client.aiGateway.billing.spendingLimit.get({
   *     account_id: 'account_id',
   *   });
   * ```
   */
  get(
    params: SpendingLimitGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SpendingLimitGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        `/accounts/${account_id}/ai-gateway/billing/spending-limit`,
        options,
      ) as Core.APIPromise<{ result: SpendingLimitGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type SpendingLimitCreateResponse = unknown;

export type SpendingLimitDeleteResponse = unknown;

export interface SpendingLimitGetResponse {
  config: SpendingLimitGetResponse.Config;

  enabled: boolean;
}

export namespace SpendingLimitGetResponse {
  export interface Config {
    amount: number | null;

    duration: string | null;

    strategy: string | null;
  }
}

export interface SpendingLimitCreateParams {
  /**
   * Path param: Cloudflare account ID.
   */
  account_id: string;

  /**
   * Body param: Spending limit amount in cents (min 100).
   */
  amount: number;

  /**
   * Body param: Spending limit duration.
   */
  duration: 'daily' | 'weekly' | 'monthly';

  /**
   * Body param: Spending limit strategy.
   */
  strategy: 'fixed' | 'sliding';
}

export interface SpendingLimitDeleteParams {
  /**
   * Cloudflare account ID.
   */
  account_id: string;
}

export interface SpendingLimitGetParams {
  /**
   * Cloudflare account ID.
   */
  account_id: string;
}

export declare namespace SpendingLimit {
  export {
    type SpendingLimitCreateResponse as SpendingLimitCreateResponse,
    type SpendingLimitDeleteResponse as SpendingLimitDeleteResponse,
    type SpendingLimitGetResponse as SpendingLimitGetResponse,
    type SpendingLimitCreateParams as SpendingLimitCreateParams,
    type SpendingLimitDeleteParams as SpendingLimitDeleteParams,
    type SpendingLimitGetParams as SpendingLimitGetParams,
  };
}
