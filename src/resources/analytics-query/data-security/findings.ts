// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class BaseFindings extends APIResource {
  static override readonly _key: readonly ['analyticsQuery', 'dataSecurity', 'findings'] = Object.freeze([
    'analyticsQuery',
    'dataSecurity',
    'findings',
  ] as const);

  /**
   * Returns aggregate current-period and previous-period totals for CASB findings.
   *
   * @example
   * ```ts
   * const response =
   *   await client.analyticsQuery.dataSecurity.findings.summary(
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       filters: [],
   *       from: '2024-11-01T00:00:00Z',
   *       to: '2024-11-08T00:00:00Z',
   *     },
   *   );
   * ```
   */
  summary(params: FindingSummaryParams, options?: RequestOptions): APIPromise<FindingSummaryResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/analytics/query/data-security/findings/summary`, {
        body,
        ...options,
      }) as APIPromise<{ result: FindingSummaryResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns merged time-bucketed CASB findings.
   *
   * @example
   * ```ts
   * const response =
   *   await client.analyticsQuery.dataSecurity.findings.timeseries(
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       filters: [],
   *       from: '2024-11-01T00:00:00Z',
   *       to: '2024-11-08T00:00:00Z',
   *     },
   *   );
   * ```
   */
  timeseries(
    params: FindingTimeseriesParams,
    options?: RequestOptions,
  ): APIPromise<FindingTimeseriesResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/analytics/query/data-security/findings/timeseries`, {
        body,
        ...options,
      }) as APIPromise<{ result: FindingTimeseriesResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Findings extends BaseFindings {}

export interface FindingSummaryResponse {
  /**
   * Aggregated stats for the requested time range.
   */
  currentTotal: Array<{ [key: string]: unknown }>;

  /**
   * Aggregated stats for the equivalent preceding time range, for trend comparison.
   */
  previousTotal: Array<{ [key: string]: unknown }>;
}

/**
 * Merged CASB and CDE findings timeseries result.
 */
export interface FindingTimeseriesResponse {
  /**
   * Contains time-bucketed result rows. Each slot includes a `timestamp` plus
   * `content` and `posture` maps with `cloud` and `saas` keys.
   */
  slots: Array<{ [key: string]: unknown }>;

  /**
   * Always null for this endpoint.
   */
  resolution?: string | null;
}

export interface FindingSummaryParams {
  /**
   * Path param: Cloudflare account identifier.
   */
  account_id: string;

  /**
   * Body param: Filters to apply.
   */
  filters: Array<FindingSummaryParams.Filter>;

  /**
   * Body param: Start of the query time range (inclusive). RFC3339.
   */
  from: string;

  /**
   * Body param: End of the query time range (exclusive). RFC3339.
   */
  to: string;
}

export namespace FindingSummaryParams {
  /**
   * A filter to apply to the query.
   */
  export interface Filter {
    /**
     * Specifies the column name to filter on. Requires a valid column for the target
     * dataset (e.g. `country`, `allowed`, `appId`).
     */
    name: string;

    /**
     * Filter operator. Common values: `eq`, `neq`, `in`, `not_in`, `gt`, `lt`, `gte`,
     * `lte`.
     */
    op: string;

    /**
     * Values to match against. Type depends on the column.
     */
    values: Array<string | boolean | number>;
  }
}

export interface FindingTimeseriesParams {
  /**
   * Path param: Cloudflare account identifier.
   */
  account_id: string;

  /**
   * Body param: Filters to apply.
   */
  filters: Array<FindingTimeseriesParams.Filter>;

  /**
   * Body param: Start of the query time range (inclusive). RFC3339.
   */
  from: string;

  /**
   * Body param: End of the query time range (exclusive). RFC3339.
   */
  to: string;
}

export namespace FindingTimeseriesParams {
  /**
   * A filter to apply to the query.
   */
  export interface Filter {
    /**
     * Specifies the column name to filter on. Requires a valid column for the target
     * dataset (e.g. `country`, `allowed`, `appId`).
     */
    name: string;

    /**
     * Filter operator. Common values: `eq`, `neq`, `in`, `not_in`, `gt`, `lt`, `gte`,
     * `lte`.
     */
    op: string;

    /**
     * Values to match against. Type depends on the column.
     */
    values: Array<string | boolean | number>;
  }
}

export declare namespace Findings {
  export {
    type FindingSummaryResponse as FindingSummaryResponse,
    type FindingTimeseriesResponse as FindingTimeseriesResponse,
    type FindingSummaryParams as FindingSummaryParams,
    type FindingTimeseriesParams as FindingTimeseriesParams,
  };
}
