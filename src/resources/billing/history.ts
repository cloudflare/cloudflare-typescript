// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { PagePromise, V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseHistory extends APIResource {
  static override readonly _key: readonly ['billing', 'history'] = Object.freeze([
    'billing',
    'history',
  ] as const);

  /**
   * Gets the billing history for an account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const historyListResponse of client.billing.history.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: HistoryListParams,
    options?: RequestOptions,
  ): PagePromise<HistoryListResponsesV4PagePaginationArray, HistoryListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/billing/history`,
      V4PagePaginationArray<HistoryListResponse>,
      { query, ...options },
    );
  }
}
export class History extends BaseHistory {}

export type HistoryListResponsesV4PagePaginationArray = V4PagePaginationArray<HistoryListResponse>;

export interface HistoryListResponse {
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

export interface HistoryListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Query param: Filter billing history by status.
   */
  status?: string;
}

export declare namespace History {
  export {
    type HistoryListResponse as HistoryListResponse,
    type HistoryListResponsesV4PagePaginationArray as HistoryListResponsesV4PagePaginationArray,
    type HistoryListParams as HistoryListParams,
  };
}
