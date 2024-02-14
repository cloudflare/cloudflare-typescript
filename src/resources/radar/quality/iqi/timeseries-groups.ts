// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as TimeseriesGroupsAPI from 'cloudflare/resources/radar/quality/iqi/timeseries-groups';

export class TimeseriesGroups extends APIResource {
  /**
   * Get a time series (percentiles) of bandwidth, latency or DNS response time from
   * the Radar Internet Quality Index (IQI).
   */
  list(
    query: TimeseriesGroupListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupListResponse> {
    return (
      this._client.get('/radar/quality/iqi/timeseries_groups', { query, ...options }) as Core.APIPromise<{
        result: TimeseriesGroupListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface TimeseriesGroupListResponse {
  meta: unknown;

  serie_0: TimeseriesGroupListResponse.Serie0;
}

export namespace TimeseriesGroupListResponse {
  export interface Serie0 {
    p25: Array<string>;

    p50: Array<string>;

    p75: Array<string>;

    timestamps: Array<string>;
  }
}

export interface TimeseriesGroupListParams {
  /**
   * Which metric to return: bandwidth, latency or DNS response time.
   */
  metric: 'BANDWIDTH' | 'DNS' | 'LATENCY';

  /**
   * Aggregation interval results should be returned in (for example, in 15 minutes
   * or 1 hour intervals). Refer to
   * [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).
   */
  aggInterval?: '15m' | '1h' | '1d' | '1w';

  /**
   * Array of comma separated list of ASNs, start with `-` to exclude from results.
   * For example, `-174, 3356` excludes results from AS174, but includes results from
   * AS3356.
   */
  asn?: Array<string>;

  /**
   * Array of comma separated list of continents (alpha-2 continent codes). Start
   * with `-` to exclude from results. For example, `-EU,NA` excludes results from
   * Europe, but includes results from North America.
   */
  continent?: Array<string>;

  /**
   * End of the date range (inclusive).
   */
  dateEnd?: Array<string>;

  /**
   * For example, use `7d` and `7dControl` to compare this week with the previous
   * week. Use this parameter or set specific start and end dates (`dateStart` and
   * `dateEnd` parameters).
   */
  dateRange?: Array<
    | '1d'
    | '2d'
    | '7d'
    | '14d'
    | '28d'
    | '12w'
    | '24w'
    | '52w'
    | '1dControl'
    | '2dControl'
    | '7dControl'
    | '14dControl'
    | '28dControl'
    | '12wControl'
    | '24wControl'
  >;

  /**
   * Array of datetimes to filter the start of a series.
   */
  dateStart?: Array<string>;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Enable interpolation for all series (using the average).
   */
  interpolation?: boolean;

  /**
   * Array of comma separated list of locations (alpha-2 country codes). Start with
   * `-` to exclude from results. For example, `-US,PT` excludes results from the US,
   * but includes results from PT.
   */
  location?: Array<string>;

  /**
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;
}

export namespace TimeseriesGroups {
  export import TimeseriesGroupListResponse = TimeseriesGroupsAPI.TimeseriesGroupListResponse;
  export import TimeseriesGroupListParams = TimeseriesGroupsAPI.TimeseriesGroupListParams;
}
