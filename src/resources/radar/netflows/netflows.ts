// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as TopAPI from './top';
import { Top, TopAsesParams, TopAsesResponse, TopLocationsParams, TopLocationsResponse } from './top';

export class Netflows extends APIResource {
  top: TopAPI.Top = new TopAPI.Top(this._client);

  /**
   * Retrieves the distribution of network traffic (NetFlows) by HTTP vs other
   * protocols.
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
   * Retrieves network traffic (NetFlows) over time.
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
   * Filters results by Autonomous System. Specify one or more Autonomous System
   * Numbers (ASNs) as a comma-separated list. Prefix with `-` to exclude ASNs from
   * results. For example, `-174, 3356` excludes results from AS174, but includes
   * results from AS3356.
   */
  asn?: Array<string>;

  /**
   * Filters results by continent. Specify a comma-separated list of alpha-2 codes.
   * Prefix with `-` to exclude continents from results. For example, `-EU,NA`
   * excludes results from EU, but includes results from NA.
   */
  continent?: Array<string>;

  /**
   * End of the date range (inclusive).
   */
  dateEnd?: Array<string>;

  /**
   * Filters results by date range. For example, use `7d` and `7dcontrol` to compare
   * this week with the previous week. Use this parameter or set specific start and
   * end dates (`dateStart` and `dateEnd` parameters).
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
   * Filters results by location. Specify a comma-separated list of alpha-2 codes.
   * Prefix with `-` to exclude locations from results. For example, `-US,PT`
   * excludes results from the US, but includes results from PT.
   */
  location?: Array<string>;

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;
}

export interface NetflowTimeseriesParams {
  /**
   * Aggregation interval of the results (e.g., in 15 minutes or 1 hour intervals).
   * Refer to
   * [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).
   */
  aggInterval?: '15m' | '1h' | '1d' | '1w';

  /**
   * Filters results by Autonomous System. Specify one or more Autonomous System
   * Numbers (ASNs) as a comma-separated list. Prefix with `-` to exclude ASNs from
   * results. For example, `-174, 3356` excludes results from AS174, but includes
   * results from AS3356.
   */
  asn?: Array<string>;

  /**
   * Filters results by continent. Specify a comma-separated list of alpha-2 codes.
   * Prefix with `-` to exclude continents from results. For example, `-EU,NA`
   * excludes results from EU, but includes results from NA.
   */
  continent?: Array<string>;

  /**
   * End of the date range (inclusive).
   */
  dateEnd?: Array<string>;

  /**
   * Filters results by date range. For example, use `7d` and `7dcontrol` to compare
   * this week with the previous week. Use this parameter or set specific start and
   * end dates (`dateStart` and `dateEnd` parameters).
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
   * Filters results by location. Specify a comma-separated list of alpha-2 codes.
   * Prefix with `-` to exclude locations from results. For example, `-US,PT`
   * excludes results from the US, but includes results from PT.
   */
  location?: Array<string>;

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;

  /**
   * Normalization method applied to the results. Refer to
   * [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization/).
   */
  normalization?: 'PERCENTAGE_CHANGE' | 'MIN0_MAX';

  /**
   * Filters the results by network traffic product types.
   */
  product?: Array<'HTTP' | 'ALL'>;
}

Netflows.Top = Top;

export declare namespace Netflows {
  export {
    type NetflowSummaryResponse as NetflowSummaryResponse,
    type NetflowTimeseriesResponse as NetflowTimeseriesResponse,
    type NetflowSummaryParams as NetflowSummaryParams,
    type NetflowTimeseriesParams as NetflowTimeseriesParams,
  };

  export {
    Top as Top,
    type TopAsesResponse as TopAsesResponse,
    type TopLocationsResponse as TopLocationsResponse,
    type TopAsesParams as TopAsesParams,
    type TopLocationsParams as TopLocationsParams,
  };
}
