// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BasePayBadDebt extends APIResource {
  static override readonly _key: readonly ['accounts', 'payBadDebt'] = Object.freeze([
    'accounts',
    'payBadDebt',
  ] as const);

  /**
   * Pays outstanding bad debt for an account. Discovers all debt automatically and
   * handles invoice deduplication.
   *
   * @example
   * ```ts
   * const payBadDebt = await client.accounts.payBadDebt.create({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  create(params: PayBadDebtCreateParams, options?: RequestOptions): APIPromise<PayBadDebtCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/pay-bad-debt`, { body, ...options }) as APIPromise<{
        result: PayBadDebtCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class PayBadDebt extends BasePayBadDebt {}

export interface PayBadDebtCreateResponse {
  /**
   * The Stripe client secret for frontend payment confirmation.
   */
  client_secret?: string;
}

export interface PayBadDebtCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: The payment method to use. If omitted, the default payment method is
   * used.
   */
  payment_method_id?: string;
}

export declare namespace PayBadDebt {
  export {
    type PayBadDebtCreateResponse as PayBadDebtCreateResponse,
    type PayBadDebtCreateParams as PayBadDebtCreateParams,
  };
}
