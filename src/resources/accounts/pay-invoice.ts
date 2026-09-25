// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BasePayInvoice extends APIResource {
  static override readonly _key: readonly ['accounts', 'payInvoice'] = Object.freeze([
    'accounts',
    'payInvoice',
  ] as const);

  /**
   * Pays an outstanding invoice for an account. Returns a Stripe client secret when
   * Strong Customer Authentication (SCA) is required to complete the payment.
   *
   * @example
   * ```ts
   * const payInvoice = await client.accounts.payInvoice.create({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  create(params: PayInvoiceCreateParams, options?: RequestOptions): APIPromise<PayInvoiceCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/pay-invoice`, { body, ...options }) as APIPromise<{
        result: PayInvoiceCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class PayInvoice extends BasePayInvoice {}

export interface PayInvoiceCreateResponse {
  /**
   * The Stripe client secret for frontend payment confirmation.
   */
  client_secret?: string;
}

export interface PayInvoiceCreateParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: The identifier of the invoice to pay.
   */
  invoice_id?: string;

  /**
   * Body param: The payment method to use. If omitted, the default payment method is
   * used.
   */
  payment_method_id?: string;

  /**
   * Body param: Whether to validate the payment method before processing.
   */
  validate_payment_method?: boolean;
}

export declare namespace PayInvoice {
  export {
    type PayInvoiceCreateResponse as PayInvoiceCreateResponse,
    type PayInvoiceCreateParams as PayInvoiceCreateParams,
  };
}
