// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseBadDebt extends APIResource {
  static override readonly _key: readonly ['billing', 'badDebt'] = Object.freeze([
    'billing',
    'badDebt',
  ] as const);

  /**
   * Gets bad debt information for an account, including outstanding invoices and
   * total debt amount.
   *
   * @example
   * ```ts
   * const badDebt = await client.billing.badDebt.get({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  get(params: BadDebtGetParams, options?: RequestOptions): APIPromise<BadDebtGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/billing/bad-debt`, options) as APIPromise<{
        result: BadDebtGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class BadDebt extends BaseBadDebt {}

export interface BadDebtGetResponse {
  /**
   * Amount already paid towards the debt.
   */
  already_paid?: number;

  /**
   * The current bad debt status of the account.
   */
  bad_debt_status?: string;

  /**
   * List of outstanding invoices contributing to bad debt.
   */
  invoices?: Array<BadDebtGetResponse.Invoice>;

  /**
   * Total outstanding debt amount.
   */
  total_debt_amount?: number;
}

export namespace BadDebtGetResponse {
  export interface Invoice {
    /**
     * Billing history item identifier.
     */
    id?: string;

    /**
     * The billing item action.
     */
    action?: string;

    /**
     * The amount associated with this billing item.
     */
    amount?: number;

    /**
     * The amount remaining to pay.
     */
    amount_to_pay?: number;

    /**
     * The currency of the billing item.
     */
    currency?: string;

    /**
     * The billing item description.
     */
    description?: string;

    /**
     * The external invoice identifier.
     */
    external_invoice_id?: string;

    /**
     * URL to the hosted invoice.
     */
    hosted_invoice_url?: string;

    /**
     * The associated invoice identifier.
     */
    invoice_id?: string;

    /**
     * When the billing event occurred.
     */
    occurred_at?: string;

    /**
     * The associated receipt identifier.
     */
    receipt_id?: string;

    /**
     * The source of the billing item.
     */
    source?: string;

    /**
     * The source invoice identifier.
     */
    source_invoice_id?: string;

    /**
     * The status of the billing item.
     */
    status?: string;

    /**
     * The billing item type.
     */
    type?: string;
  }
}

export interface BadDebtGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export declare namespace BadDebt {
  export { type BadDebtGetResponse as BadDebtGetResponse, type BadDebtGetParams as BadDebtGetParams };
}
