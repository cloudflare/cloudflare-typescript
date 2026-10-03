// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseIndicators extends APIResource {
  static override readonly _key: readonly ['cloudforceOne', 'threatSignals', 'indicators'] = Object.freeze([
    'cloudforceOne',
    'threatSignals',
    'indicators',
  ] as const);

  /**
   * Lists indicators of compromise extracted from the account's Threat Signals
   * articles.
   *
   * @example
   * ```ts
   * const indicators =
   *   await client.cloudforceOne.threatSignals.indicators.list({
   *     account_id: 'account_id',
   *   });
   * ```
   */
  list(params: IndicatorListParams, options?: RequestOptions): APIPromise<IndicatorListResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(path`/accounts/${account_id}/cloudforce-one/v2/threat-signals/indicators`, {
        query,
        ...options,
      }) as APIPromise<{ result: IndicatorListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Indicators extends BaseIndicators {}

export interface IndicatorListResponse {
  indicators: Array<IndicatorListResponse.Indicator>;

  pagination: IndicatorListResponse.Pagination;
}

export namespace IndicatorListResponse {
  export interface Indicator {
    id: string;

    article_id: string;

    article_title: string | null;

    /**
     * Threat Events dataset identifier for navigating from this indicator. Null when
     * the account feeds dataset mapping is unavailable.
     */
    dataset_id: string | null;

    feed_display_name: string | null;

    feed_id: string;

    type: string;

    value: string;
  }

  export interface Pagination {
    count: number;

    cursor: string | null;

    has_more: boolean;

    /**
     * Ordinal of this cursor page; not a total-results offset.
     */
    page: number;

    per_page: number;

    total_count: number | null;

    total_count_is_exact: boolean;
  }
}

export interface IndicatorListParams {
  /**
   * Path param
   */
  account_id: string;

  /**
   * Query param
   */
  article_id?: string;

  /**
   * Query param
   */
  cursor?: string;

  /**
   * Query param
   */
  feed_id?: string;

  /**
   * Query param
   */
  include_total?: boolean;

  /**
   * Query param
   */
  per_page?: number;

  /**
   * Query param: NFC-normalized and trimmed, case-insensitive literal substring
   * search of indicator values. Requires 3–500 Unicode code points; the upper
   * code-point bound is described here because OpenAPI string length cannot
   * precisely express it without imposing UTF-16 semantics.
   */
  search?: string;

  /**
   * Query param
   */
  sort?: string;
}

export declare namespace Indicators {
  export {
    type IndicatorListResponse as IndicatorListResponse,
    type IndicatorListParams as IndicatorListParams,
  };
}
