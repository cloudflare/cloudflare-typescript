// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import * as IQIAPI from './iqi';

export class IQI extends APIResource {
  /**
   * Get a summary (percentiles) of bandwidth, latency or DNS response time from the
   * Radar Internet Quality Index (IQI).
   */
  summary(query: IQISummaryParams, options?: Core.RequestOptions): Core.APIPromise<IQISummaryResponse> {
    return (this._client.get('/radar/quality/iqi/summary', { query, ...options }) as Core.APIPromise<{ result: IQISummaryResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a time series (percentiles) of bandwidth, latency or DNS response time from
   * the Radar Internet Quality Index (IQI).
   */
  timeseriesGroups(query: IQITimeseriesGroupsParams, options?: Core.RequestOptions): Core.APIPromise<IQITimeseriesGroupsResponse> {
    return (this._client.get('/radar/quality/iqi/timeseries_groups', { query, ...options }) as Core.APIPromise<{ result: IQITimeseriesGroupsResponse }>)._thenUnwrap((obj) => obj.result);
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
   * Which metric to return: bandwidth, latency or DNS response time.
   */
  metric: 'BANDWIDTH' | 'DNS' | 'LATENCY';

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
  dateRange?: Array<string>;

  /**
   * Array of datetimes to filter the start of a series.
   */
  dateStart?: Array<string>;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

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

export interface IQITimeseriesGroupsParams {
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
  dateRange?: Array<string>;

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

export namespace IQI {
  export import IQISummaryResponse = IQIAPI.IQISummaryResponse;
  export import IQITimeseriesGroupsResponse = IQIAPI.IQITimeseriesGroupsResponse;
  export import IQISummaryParams = IQIAPI.IQISummaryParams;
  export import IQITimeseriesGroupsParams = IQIAPI.IQITimeseriesGroupsParams;
}
