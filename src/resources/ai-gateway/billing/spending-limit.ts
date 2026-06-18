// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseSpendingLimit extends APIResource {
  static override readonly _key: readonly ['aiGateway', 'billing', 'spendingLimit'] = Object.freeze([
    'aiGateway',
    'billing',
    'spendingLimit',
  ] as const);

  /**
   * Deprecated: spending limits can no longer be created, enabled, or modified and
   * this endpoint always responds 403. Use the new AI Gateway spend limits instead:
   * https://developers.cloudflare.com/ai-gateway/features/spend-limits/. Existing
   * limits can be removed via DELETE /spending-limit.
   *
   * @deprecated
   */
  create(
    params: SpendingLimitCreateParams,
    options?: RequestOptions,
  ): APIPromise<SpendingLimitCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/ai-gateway/billing/spending-limit`, {
        body,
        ...options,
      }) as APIPromise<{ result: SpendingLimitCreateResponse }>
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
    options?: RequestOptions,
  ): APIPromise<SpendingLimitDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/ai-gateway/billing/spending-limit`,
        options,
      ) as APIPromise<{ result: SpendingLimitDeleteResponse }>
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
  get(params: SpendingLimitGetParams, options?: RequestOptions): APIPromise<SpendingLimitGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/ai-gateway/billing/spending-limit`,
        options,
      ) as APIPromise<{ result: SpendingLimitGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class SpendingLimit extends BaseSpendingLimit {}

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
