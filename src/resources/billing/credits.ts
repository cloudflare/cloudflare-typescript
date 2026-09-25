// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseCredits extends APIResource {
  static override readonly _key: readonly ['billing', 'credits'] = Object.freeze([
    'billing',
    'credits',
  ] as const);

  /**
   * Gets the credit balance and eligibility for an account.
   *
   * @example
   * ```ts
   * const credit = await client.billing.credits.get({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  get(params: CreditGetParams, options?: RequestOptions): APIPromise<CreditGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/billing/credits`, options) as APIPromise<{
        result: CreditGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Credits extends BaseCredits {}

export interface CreditGetResponse {
  /**
   * The confirmed credit balance in cents.
   */
  confirmed_balance_cents?: number;

  /**
   * Currency of the credit balance.
   */
  currency?: string;

  /**
   * Days remaining until the credits expire.
   */
  days_remaining?: number;

  /**
   * Whether the account is eligible to receive credits.
   */
  eligible?: boolean;

  /**
   * Whether a credit record exists for the account.
   */
  has_record?: boolean;

  /**
   * The original credit amount in cents.
   */
  original_amount_cents?: number;

  /**
   * Percentage of the original credit amount consumed.
   */
  percent_consumed?: number;

  /**
   * Projected date when the credits will be depleted.
   */
  projected_depletion_date?: string;

  /**
   * When the credits become valid.
   */
  valid_from?: string;

  /**
   * When the credits expire.
   */
  valid_to?: string;
}

export interface CreditGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export declare namespace Credits {
  export { type CreditGetResponse as CreditGetResponse, type CreditGetParams as CreditGetParams };
}
