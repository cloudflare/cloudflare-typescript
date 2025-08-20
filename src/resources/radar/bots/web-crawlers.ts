// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class WebCrawlers extends APIResource {
  /**
   * Retrieves an aggregated summary of HTTP requests from crawlers, grouped by the
   * specified dimension.
   *
   * @example
   * ```ts
   * const response =
   *   await client.radar.bots.webCrawlers.summary('USER_AGENT');
   * ```
   */
  summary(
    dimension: 'USER_AGENT' | 'REFERER' | 'CRAWL_REFER_RATIO' | 'VERTICAL' | 'INDUSTRY',
    query?: WebCrawlerSummaryParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebCrawlerSummaryResponse>;
  summary(
    dimension: 'USER_AGENT' | 'REFERER' | 'CRAWL_REFER_RATIO' | 'VERTICAL' | 'INDUSTRY',
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebCrawlerSummaryResponse>;
  summary(
    dimension: 'USER_AGENT' | 'REFERER' | 'CRAWL_REFER_RATIO' | 'VERTICAL' | 'INDUSTRY',
    query: WebCrawlerSummaryParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebCrawlerSummaryResponse> {
    if (isRequestOptions(query)) {
      return this.summary(dimension, {}, query);
    }
    return (
      this._client.get(`/radar/bots/crawlers/summary/${dimension}`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: WebCrawlerSummaryResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the distribution of HTTP requests from crawlers, grouped by chosen the
   * specified dimension over time.
   *
   * @example
   * ```ts
   * const response =
   *   await client.radar.bots.webCrawlers.timeseriesGroups(
   *     'USER_AGENT',
   *   );
   * ```
   */
  timeseriesGroups(
    dimension: 'USER_AGENT' | 'REFERER' | 'CRAWL_REFER_RATIO' | 'VERTICAL' | 'INDUSTRY',
    query?: WebCrawlerTimeseriesGroupsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebCrawlerTimeseriesGroupsResponse>;
  timeseriesGroups(
    dimension: 'USER_AGENT' | 'REFERER' | 'CRAWL_REFER_RATIO' | 'VERTICAL' | 'INDUSTRY',
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebCrawlerTimeseriesGroupsResponse>;
  timeseriesGroups(
    dimension: 'USER_AGENT' | 'REFERER' | 'CRAWL_REFER_RATIO' | 'VERTICAL' | 'INDUSTRY',
    query: WebCrawlerTimeseriesGroupsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<WebCrawlerTimeseriesGroupsResponse> {
    if (isRequestOptions(query)) {
      return this.timeseriesGroups(dimension, {}, query);
    }
    return (
      this._client.get(`/radar/bots/crawlers/timeseries_groups/${dimension}`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: WebCrawlerTimeseriesGroupsResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface WebCrawlerSummaryResponse {
  /**
   * Metadata for the results.
   */
  meta: WebCrawlerSummaryResponse.Meta;

  summary_0: { [key: string]: string };
}

export namespace WebCrawlerSummaryResponse {
  /**
   * Metadata for the results.
   */
  export interface Meta {
    confidenceInfo: Meta.ConfidenceInfo;

    dateRange: Array<Meta.DateRange>;

    /**
     * Timestamp of the last dataset update.
     */
    lastUpdated: string;

    /**
     * Normalization method applied to the results. Refer to
     * [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization/).
     */
    normalization:
      | 'PERCENTAGE'
      | 'MIN0_MAX'
      | 'MIN_MAX'
      | 'RAW_VALUES'
      | 'PERCENTAGE_CHANGE'
      | 'ROLLING_AVERAGE'
      | 'OVERLAPPED_PERCENTAGE'
      | 'RATIO';

    /**
     * Measurement units for the results.
     */
    units: Array<Meta.Unit>;
  }

  export namespace Meta {
    export interface ConfidenceInfo {
      annotations: Array<ConfidenceInfo.Annotation>;

      /**
       * Provides an indication of how much confidence Cloudflare has in the data.
       */
      level: number;
    }

    export namespace ConfidenceInfo {
      /**
       * Annotation associated with the result (e.g. outage or other type of event).
       */
      export interface Annotation {
        dataSource: string;

        description: string;

        endDate: string;

        eventType: string;

        /**
         * Whether event is a single point in time or a time range.
         */
        isInstantaneous: boolean;

        linkedUrl: string;

        startDate: string;
      }
    }

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

    export interface Unit {
      name: string;

      value: string;
    }
  }
}

export interface WebCrawlerTimeseriesGroupsResponse {
  /**
   * Metadata for the results.
   */
  meta: WebCrawlerTimeseriesGroupsResponse.Meta;

  serie_0: WebCrawlerTimeseriesGroupsResponse.Serie0;
}

export namespace WebCrawlerTimeseriesGroupsResponse {
  /**
   * Metadata for the results.
   */
  export interface Meta {
    /**
     * Aggregation interval of the results (e.g., in 15 minutes or 1 hour intervals).
     * Refer to
     * [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).
     */
    aggInterval: 'FIFTEEN_MINUTES' | 'ONE_HOUR' | 'ONE_DAY' | 'ONE_WEEK' | 'ONE_MONTH';

    confidenceInfo: Meta.ConfidenceInfo;

    dateRange: Array<Meta.DateRange>;

    /**
     * Timestamp of the last dataset update.
     */
    lastUpdated: string;

    /**
     * Normalization method applied to the results. Refer to
     * [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization/).
     */
    normalization:
      | 'PERCENTAGE'
      | 'MIN0_MAX'
      | 'MIN_MAX'
      | 'RAW_VALUES'
      | 'PERCENTAGE_CHANGE'
      | 'ROLLING_AVERAGE'
      | 'OVERLAPPED_PERCENTAGE'
      | 'RATIO';

    /**
     * Measurement units for the results.
     */
    units: Array<Meta.Unit>;
  }

  export namespace Meta {
    export interface ConfidenceInfo {
      annotations: Array<ConfidenceInfo.Annotation>;

      /**
       * Provides an indication of how much confidence Cloudflare has in the data.
       */
      level: number;
    }

    export namespace ConfidenceInfo {
      /**
       * Annotation associated with the result (e.g. outage or other type of event).
       */
      export interface Annotation {
        dataSource: string;

        description: string;

        endDate: string;

        eventType: string;

        /**
         * Whether event is a single point in time or a time range.
         */
        isInstantaneous: boolean;

        linkedUrl: string;

        startDate: string;
      }
    }

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

    export interface Unit {
      name: string;

      value: string;
    }
  }

  export interface Serie0 {
    timestamps: Array<string>;

    [k: string]: Array<string> | Array<string> | undefined;
  }
}

export interface WebCrawlerSummaryParams {
  /**
   * Filters results by bot operator.
   */
  botOperator?: Array<string>;

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
   * Filters results by industry.
   */
  industry?: Array<string>;

  /**
   * Limits the number of objects per group to the top items within the specified
   * time range. When item count exceeds the limit, extra items appear grouped under
   * an "other" category.
   */
  limitPerGroup?: number;

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;

  /**
   * Filters results by vertical.
   */
  vertical?: Array<string>;
}

export interface WebCrawlerTimeseriesGroupsParams {
  /**
   * Aggregation interval of the results (e.g., in 15 minutes or 1 hour intervals).
   * Refer to
   * [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).
   */
  aggInterval?: '15m' | '1h' | '1d' | '1w';

  /**
   * Filters results by bot operator.
   */
  botOperator?: Array<string>;

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
   * Filters results by industry.
   */
  industry?: Array<string>;

  /**
   * Limits the number of objects per group to the top items within the specified
   * time range. When item count exceeds the limit, extra items appear grouped under
   * an "other" category.
   */
  limitPerGroup?: number;

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;

  /**
   * Filters results by vertical.
   */
  vertical?: Array<string>;
}

export declare namespace WebCrawlers {
  export {
    type WebCrawlerSummaryResponse as WebCrawlerSummaryResponse,
    type WebCrawlerTimeseriesGroupsResponse as WebCrawlerTimeseriesGroupsResponse,
    type WebCrawlerSummaryParams as WebCrawlerSummaryParams,
    type WebCrawlerTimeseriesGroupsParams as WebCrawlerTimeseriesGroupsParams,
  };
}
