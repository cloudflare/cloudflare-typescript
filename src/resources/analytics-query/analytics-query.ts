// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as DataSecurityAPI from './data-security/data-security';
import { BaseDataSecurity, DataSecurity } from './data-security/data-security';
import { APIPromise } from '../../core/api-promise';
import { PagePromise, SinglePage } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseAnalyticsQuery extends APIResource {
  static override readonly _key: readonly ['analyticsQuery'] = Object.freeze(['analyticsQuery'] as const);

  /**
   * Returns aggregate summary stats for a dataset. Includes current-period and
   * previous-period totals for trend comparison.
   *
   * @example
   * ```ts
   * const response = await client.analyticsQuery.summary(
   *   'access-logins',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     filters: [],
   *     from: '2024-11-01T00:00:00Z',
   *     groupBy: [],
   *     stats: ['attemptsTotal'],
   *     to: '2024-11-08T00:00:00Z',
   *   },
   * );
   * ```
   */
  summary(
    dataset: string,
    params: AnalyticsQuerySummaryParams,
    options?: RequestOptions,
  ): APIPromise<AnalyticsQuerySummaryResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/analytics/query/${dataset}/summary`, {
        body,
        ...options,
      }) as APIPromise<{ result: AnalyticsQuerySummaryResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns time-bucketed analytics data for a dataset. Includes time slots, each
   * containing the requested stats, group-by dimensions, and resolution-controlled
   * bucket size (e.g. `hour`, `day`).
   *
   * @example
   * ```ts
   * const response = await client.analyticsQuery.timeseries(
   *   'shadow_it',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     filters: [
   *       {
   *         name: 'allowed',
   *         op: 'eq',
   *         values: [true],
   *       },
   *     ],
   *     from: '2024-11-01T00:00:00Z',
   *     groupBy: ['country', 'allowed'],
   *     resolution: 'day',
   *     stats: ['attemptsTotal'],
   *     to: '2024-11-08T00:00:00Z',
   *   },
   * );
   * ```
   */
  timeseries(
    dataset: string,
    params: AnalyticsQueryTimeseriesParams,
    options?: RequestOptions,
  ): APIPromise<AnalyticsQueryTimeseriesResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/analytics/query/${dataset}/timeseries`, {
        body,
        ...options,
      }) as APIPromise<{ result: AnalyticsQueryTimeseriesResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Returns the top N results for a dataset by a specified stat. Includes an array
   * of result rows, each containing the requested stats and group-by dimensions.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const analyticsQueryTopNResponse of client.analyticsQuery.topN(
   *   'gateway-http',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     filters: [],
   *     from: '2024-11-05T00:00:00Z',
   *     groupBy: ['appName', 'appCategory'],
   *     n: 10,
   *     orderBy: 'bytesTotal',
   *     stats: ['bytesTotal', 'requestsTotal'],
   *     to: '2024-11-06T00:00:00Z',
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  topN(
    dataset: string,
    params: AnalyticsQueryTopNParams,
    options?: RequestOptions,
  ): PagePromise<AnalyticsQueryTopNResponsesSinglePage, AnalyticsQueryTopNResponse> {
    const { account_id, ...body } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/analytics/query/${dataset}/top-n`,
      SinglePage<AnalyticsQueryTopNResponse>,
      { body, method: 'post', ...options },
    );
  }
}
export class AnalyticsQuery extends BaseAnalyticsQuery {
  dataSecurity: DataSecurityAPI.DataSecurity = new DataSecurityAPI.DataSecurity(this._client);
}

export type AnalyticsQueryTopNResponsesSinglePage = SinglePage<AnalyticsQueryTopNResponse>;

export interface AnalyticsQuerySummaryResponse {
  /**
   * Aggregated stats for the requested time range.
   */
  currentTotal: Array<{ [key: string]: unknown }>;

  /**
   * Aggregated stats for the equivalent preceding time range, for trend comparison.
   */
  previousTotal: Array<{ [key: string]: unknown }>;
}

export interface AnalyticsQueryTimeseriesResponse {
  /**
   * The resolution used for time bucketing.
   */
  resolution: string;

  /**
   * Time-bucketed result rows. Each slot contains a `time_bucket` field plus the
   * requested stats and group-by dimensions.
   */
  slots: Array<{ [key: string]: unknown }>;
}

/**
 * Maps field names to values. Keys represent stat names and group-by column names.
 * Values depend on the dataset (strings, numbers, booleans).
 */
export type AnalyticsQueryTopNResponse = { [key: string]: unknown };

export interface AnalyticsQuerySummaryParams {
  /**
   * Path param: Cloudflare account identifier.
   */
  account_id: string;

  /**
   * Body param: Filters to apply before aggregating results.
   */
  filters: Array<AnalyticsQuerySummaryParams.Filter>;

  /**
   * Body param: The start of the query time range (inclusive). RFC3339 format with
   * timezone is required (e.g. `2024-11-05T00:00:00Z`).
   */
  from: string;

  /**
   * Body param: Specifies the column names to group results by. Requires valid
   * columns for the target dataset.
   */
  groupBy: Array<string>;

  /**
   * Body param: Specifies the stat names to include in results. Requires valid stats
   * for the target dataset (e.g. `attemptsTotal`, `bytesTotal`).
   */
  stats: Array<string>;

  /**
   * Body param: Specifies the end of the query time range (exclusive). Requires
   * RFC3339 format with timezone.
   */
  to: string;
}

export namespace AnalyticsQuerySummaryParams {
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

export interface AnalyticsQueryTimeseriesParams {
  /**
   * Path param: Cloudflare account identifier.
   */
  account_id: string;

  /**
   * Body param: Filters to apply before aggregating results.
   */
  filters: Array<AnalyticsQueryTimeseriesParams.Filter>;

  /**
   * Body param: The start of the query time range (inclusive). RFC3339 format with
   * timezone is required (e.g. `2024-11-05T00:00:00Z`).
   */
  from: string;

  /**
   * Body param: Specifies the column names to group results by. Requires valid
   * columns for the target dataset.
   */
  groupBy: Array<string>;

  /**
   * Body param: Time bucket size for grouping results. Controls the granularity of
   * the returned time slots.
   */
  resolution: string;

  /**
   * Body param: Specifies the stat names to include in results. Requires valid stats
   * for the target dataset (e.g. `attemptsTotal`, `bytesTotal`).
   */
  stats: Array<string>;

  /**
   * Body param: Specifies the end of the query time range (exclusive). Requires
   * RFC3339 format with timezone.
   */
  to: string;
}

export namespace AnalyticsQueryTimeseriesParams {
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

export interface AnalyticsQueryTopNParams {
  /**
   * Path param: Cloudflare account identifier.
   */
  account_id: string;

  /**
   * Body param: Filters to apply before aggregating results.
   */
  filters: Array<AnalyticsQueryTopNParams.Filter>;

  /**
   * Body param: The start of the query time range (inclusive). RFC3339 format with
   * timezone is required (e.g. `2024-11-05T00:00:00Z`).
   */
  from: string;

  /**
   * Body param: Specifies the column names to group results by. Requires valid
   * columns for the target dataset.
   */
  groupBy: Array<string>;

  /**
   * Body param: Maximum number of results to return.
   */
  n: number;

  /**
   * Body param: Specifies the stat name for sorting results in descending order.
   * Requires a valid stat for the target dataset.
   */
  orderBy: string;

  /**
   * Body param: Specifies the stat names to include in results. Requires valid stats
   * for the target dataset (e.g. `attemptsTotal`, `bytesTotal`).
   */
  stats: Array<string>;

  /**
   * Body param: Specifies the end of the query time range (exclusive). Requires
   * RFC3339 format with timezone.
   */
  to: string;
}

export namespace AnalyticsQueryTopNParams {
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

AnalyticsQuery.DataSecurity = DataSecurity;
AnalyticsQuery.BaseDataSecurity = BaseDataSecurity;

export declare namespace AnalyticsQuery {
  export {
    type AnalyticsQuerySummaryResponse as AnalyticsQuerySummaryResponse,
    type AnalyticsQueryTimeseriesResponse as AnalyticsQueryTimeseriesResponse,
    type AnalyticsQueryTopNResponse as AnalyticsQueryTopNResponse,
    type AnalyticsQueryTopNResponsesSinglePage as AnalyticsQueryTopNResponsesSinglePage,
    type AnalyticsQuerySummaryParams as AnalyticsQuerySummaryParams,
    type AnalyticsQueryTimeseriesParams as AnalyticsQueryTimeseriesParams,
    type AnalyticsQueryTopNParams as AnalyticsQueryTopNParams,
  };

  export { DataSecurity as DataSecurity, BaseDataSecurity as BaseDataSecurity };
}
