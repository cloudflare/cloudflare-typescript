// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseUnpaidInvoice extends APIResource {
  static override readonly _key: readonly ['billing', 'unpaidInvoice'] = Object.freeze([
    'billing',
    'unpaidInvoice',
  ] as const);

  /**
   * Gets unpaid invoice information for an account.
   *
   * @example
   * ```ts
   * const unpaidInvoice =
   *   await client.billing.unpaidInvoice.get({
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   });
   * ```
   */
  get(params: UnpaidInvoiceGetParams, options?: RequestOptions): APIPromise<UnpaidInvoiceGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/billing/unpaid-invoice`, options) as APIPromise<{
        result: UnpaidInvoiceGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class UnpaidInvoice extends BaseUnpaidInvoice {}

export interface UnpaidInvoiceGetResponse {
  /**
   * List of unpaid invoices.
   */
  invoices?: Array<UnpaidInvoiceGetResponse.Invoice>;
}

export namespace UnpaidInvoiceGetResponse {
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

export interface UnpaidInvoiceGetParams {
  /**
   * Identifier
   */
  account_id: string;
}

export declare namespace UnpaidInvoice {
  export {
    type UnpaidInvoiceGetResponse as UnpaidInvoiceGetResponse,
    type UnpaidInvoiceGetParams as UnpaidInvoiceGetParams,
  };
}
