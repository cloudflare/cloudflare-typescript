// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as NetflowsAPI from './netflows';
import * as TopAPI from './top';

export class Netflows extends APIResource {
  top: TopAPI.Top = new TopAPI.Top(this._client);

  /**
   * Percentage distribution of HTTP vs other protocols traffic over a given time
   * period.
   */
  summary(
    query?: NetflowSummaryParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NetflowSummaryResponse>;
  summary(options?: Core.RequestOptions): Core.APIPromise<NetflowSummaryResponse>;
  summary(
    query: NetflowSummaryParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<NetflowSummaryResponse> {
    if (isRequestOptions(query)) {
      return this.summary({}, query);
    }
    return (
      this._client.get('/radar/netflows/summary', { query, ...options }) as Core.APIPromise<{
        result: NetflowSummaryResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get network traffic change over time. Visit
   * https://en.wikipedia.org/wiki/NetFlow for more information on NetFlows.
   */
  timeseries(
    query?: NetflowTimeseriesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<NetflowTimeseriesResponse>;
  timeseries(options?: Core.RequestOptions): Core.APIPromise<NetflowTimeseriesResponse>;
  timeseries(
    query: NetflowTimeseriesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<NetflowTimeseriesResponse> {
    if (isRequestOptions(query)) {
      return this.timeseries({}, query);
    }
    return (
      this._client.get('/radar/netflows/timeseries', { query, ...options }) as Core.APIPromise<{
        result: NetflowTimeseriesResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface NetflowSummaryResponse {
  meta: NetflowSummaryResponse.Meta;

  summary_0: NetflowSummaryResponse.Summary0;
}

export namespace NetflowSummaryResponse {
  export interface Meta {
    dateRange: Array<Meta.DateRange>;

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
    HTTP: string;

    OTHER: string;
  }
}

export interface NetflowTimeseriesResponse {
  meta: NetflowTimeseriesResponse.Meta;

  serie_0: NetflowTimeseriesResponse.Serie0;
}

export namespace NetflowTimeseriesResponse {
  export interface Meta {
    aggInterval: string;

    dateRange: Array<Meta.DateRange>;

    lastUpdated: string;

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

  export interface Serie0 {
    timestamps: Array<string>;

    values: Array<string>;
  }
}

export interface NetflowSummaryParams {
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

export interface NetflowTimeseriesParams {
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
   * Array of comma separated list of locations (alpha-2 country codes). Start with
   * `-` to exclude from results. For example, `-US,PT` excludes results from the US,
   * but includes results from PT.
   */
  location?: Array<string>;

  /**
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;

  /**
   * Normalization method applied. Refer to
   * [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization/).
   */
  normalization?: 'PERCENTAGE_CHANGE' | 'MIN0_MAX';

  /**
   * Array of network traffic product types.
   */
  product?: Array<'HTTP' | 'ALL'>;
}

export namespace Netflows {
  export import NetflowSummaryResponse = NetflowsAPI.NetflowSummaryResponse;
  export import NetflowTimeseriesResponse = NetflowsAPI.NetflowTimeseriesResponse;
  export import NetflowSummaryParams = NetflowsAPI.NetflowSummaryParams;
  export import NetflowTimeseriesParams = NetflowsAPI.NetflowTimeseriesParams;
  export import Top = TopAPI.Top;
  export import TopAsesResponse = TopAPI.TopAsesResponse;
  export import TopLocationsResponse = TopAPI.TopLocationsResponse;
  export import TopAsesParams = TopAPI.TopAsesParams;
  export import TopLocationsParams = TopAPI.TopLocationsParams;
}
