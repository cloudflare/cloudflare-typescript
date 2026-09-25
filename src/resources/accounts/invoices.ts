// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseInvoices extends APIResource {
  static override readonly _key: readonly ['accounts', 'invoices'] = Object.freeze([
    'accounts',
    'invoices',
  ] as const);

  /**
   * Toggles PDF invoice generation for an account.
   *
   * @example
   * ```ts
   * const response = await client.accounts.invoices.edit({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   * });
   * ```
   */
  edit(params: InvoiceEditParams, options?: RequestOptions): APIPromise<InvoiceEditResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.patch(path`/accounts/${account_id}/invoices`, { body, ...options }) as APIPromise<{
        result: InvoiceEditResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Invoices extends BaseInvoices {}

export type InvoiceEditResponse = unknown | string | null;

export interface InvoiceEditParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Body param: Whether to enable or disable PDF invoice generation.
   */
  toggle?: boolean;
}

export declare namespace Invoices {
  export { type InvoiceEditResponse as InvoiceEditResponse, type InvoiceEditParams as InvoiceEditParams };
}
