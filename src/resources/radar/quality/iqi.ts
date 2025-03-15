// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as Core from '../../../core';

export class IQI extends APIResource {
  /**
   * Retrieves a summary (percentiles) of bandwidth, latency, or DNS response time
   * from the Radar Internet Quality Index (IQI).
   */
  summary(query: IQISummaryParams, options?: Core.RequestOptions): Core.APIPromise<IQISummaryResponse> {
    return (
      this._client.get('/radar/quality/iqi/summary', { query, ...options }) as Core.APIPromise<{
        result: IQISummaryResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves a time series (percentiles) of bandwidth, latency, or DNS response
   * time from the Radar Internet Quality Index (IQI).
   */
  timeseriesGroups(
    query: IQITimeseriesGroupsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IQITimeseriesGroupsResponse> {
    return (
      this._client.get('/radar/quality/iqi/timeseries_groups', { query, ...options }) as Core.APIPromise<{
        result: IQITimeseriesGroupsResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface IQISummaryResponse {
  meta: IQISummaryResponse.Meta;

  summary_0: IQISummaryResponse.Summary0;
}

export namespace IQISummaryResponse {
  export interface Meta {
    dateRange: Array<Meta.DateRange>;

    lastUpdated: string;

    normalization: string;

    confidenceInfo?: Meta.ConfidenceInfo;
  }

  export namespace Meta {
    export interface DateRange {
      /**
       * Adjusted end of date range.
       */
      endTime: string;

      /**
       * Adjusted start of date range.
       */
      startTime: string;
    }

    export interface ConfidenceInfo {
      annotations?: Array<ConfidenceInfo.Annotation>;

      level?: number;
    }

    export namespace ConfidenceInfo {
      export interface Annotation {
        dataSource: string;

        description: string;

        eventType: string;

        isInstantaneous: boolean;

        endTime?: string;

        linkedUrl?: string;

        startTime?: string;
      }
    }
  }

  export interface Summary0 {
    p25: string;

    p50: string;

    p75: string;
  }
}

export interface IQITimeseriesGroupsResponse {
  meta: unknown;

  serie_0: IQITimeseriesGroupsResponse.Serie0;
}

export namespace IQITimeseriesGroupsResponse {
  export interface Serie0 {
    p25: Array<string>;

    p50: Array<string>;

    p75: Array<string>;

    timestamps: Array<string>;
  }
}

export interface IQISummaryParams {
  /**
   * Defines which metric to return (bandwidth, latency, or DNS response time).
   */
  metric: 'BANDWIDTH' | 'DNS' | 'LATENCY';

  /**
   * Comma-separated list of Autonomous System Numbers (ASNs). Prefix with `-` to
   * exclude ASNs from results. For example, `-174, 3356` excludes results from
   * AS174, but includes results from AS3356.
   */
  asn?: Array<string>;

  /**
   * Comma-separated list of continents (alpha-2 continent codes). Prefix with `-` to
   * exclude continents from results. For example, `-EU,NA` excludes results from EU,
   * but includes results from NA.
   */
  continent?: Array<string>;

  /**
   * End of the date range (inclusive).
   */
  dateEnd?: Array<string>;

  /**
   * Filters results by the specified date range. For example, use `7d` and
   * `7dcontrol` to compare this week with the previous week. Use this parameter or
   * set specific start and end dates (`dateStart` and `dateEnd` parameters).
   */
  dateRange?: Array<string>;

  /**
   * Start of the date range.
   */
  dateStart?: Array<string>;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Comma-separated list of locations (alpha-2 codes). Prefix with `-` to exclude
   * locations from results. For example, `-US,PT` excludes results from the US, but
   * includes results from PT.
   */
  location?: Array<string>;

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;
}

export interface IQITimeseriesGroupsParams {
  /**
   * Defines which metric to return (bandwidth, latency, or DNS response time).
   */
  metric: 'BANDWIDTH' | 'DNS' | 'LATENCY';

  /**
   * Aggregation interval results should be returned in (for example, in 15 minutes
   * or 1 hour intervals). Refer to
   * [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).
   */
  aggInterval?: '15m' | '1h' | '1d' | '1w';

  /**
   * Comma-separated list of Autonomous System Numbers (ASNs). Prefix with `-` to
   * exclude ASNs from results. For example, `-174, 3356` excludes results from
   * AS174, but includes results from AS3356.
   */
  asn?: Array<string>;

  /**
   * Comma-separated list of continents (alpha-2 continent codes). Prefix with `-` to
   * exclude continents from results. For example, `-EU,NA` excludes results from EU,
   * but includes results from NA.
   */
  continent?: Array<string>;

  /**
   * End of the date range (inclusive).
   */
  dateEnd?: Array<string>;

  /**
   * Filters results by the specified date range. For example, use `7d` and
   * `7dcontrol` to compare this week with the previous week. Use this parameter or
   * set specific start and end dates (`dateStart` and `dateEnd` parameters).
   */
  dateRange?: Array<string>;

  /**
   * Start of the date range.
   */
  dateStart?: Array<string>;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Enables interpolation for all series (using the average).
   */
  interpolation?: boolean;

  /**
   * Comma-separated list of locations (alpha-2 codes). Prefix with `-` to exclude
   * locations from results. For example, `-US,PT` excludes results from the US, but
   * includes results from PT.
   */
  location?: Array<string>;

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;
}

export declare namespace IQI {
  export {
    type IQISummaryResponse as IQISummaryResponse,
    type IQITimeseriesGroupsResponse as IQITimeseriesGroupsResponse,
    type IQISummaryParams as IQISummaryParams,
    type IQITimeseriesGroupsParams as IQITimeseriesGroupsParams,
  };
}
