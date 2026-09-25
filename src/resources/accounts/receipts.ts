// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { APIPromise } from '../../core/api-promise';
import { buildHeaders } from '../../internal/headers';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseReceipts extends APIResource {
  static override readonly _key: readonly ['accounts', 'receipts'] = Object.freeze([
    'accounts',
    'receipts',
  ] as const);

  /**
   * Downloads a receipt as a PDF document.
   *
   * @example
   * ```ts
   * const response = await client.accounts.receipts.pdf(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   *
   * const content = await response.blob();
   * console.log(content);
   * ```
   */
  pdf(receiptID: string, params: ReceiptPDFParams, options?: RequestOptions): APIPromise<Response> {
    const { account_id, ...query } = params;
    return this._client.get(path`/accounts/${account_id}/receipts/${receiptID}/pdf`, {
      query,
      ...options,
      headers: buildHeaders([{ Accept: 'application/pdf' }, options?.headers]),
      __binaryResponse: true,
    });
  }
}
export class Receipts extends BaseReceipts {}

export interface ReceiptPDFParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Query param: The document type to generate.
   */
  doctype?: string;
}

export declare namespace Receipts {
  export { type ReceiptPDFParams as ReceiptPDFParams };
}
