// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class MarkdownForAgents extends APIResource {
  /**
   * Retrieves the overall median HTML-to-markdown reduction ratio for AI agent
   * requests over the given date range.
   *
   * @example
   * ```ts
   * const response =
   *   await client.radar.ai.markdownForAgents.summary();
   * ```
   */
  summary(
    query?: MarkdownForAgentSummaryParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MarkdownForAgentSummaryResponse>;
  summary(options?: Core.RequestOptions): Core.APIPromise<MarkdownForAgentSummaryResponse>;
  summary(
    query: MarkdownForAgentSummaryParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<MarkdownForAgentSummaryResponse> {
    if (isRequestOptions(query)) {
      return this.summary({}, query);
    }
    return (
      this._client.get('/radar/ai/markdown_for_agents/summary', { query, ...options }) as Core.APIPromise<{
        result: MarkdownForAgentSummaryResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the median HTML-to-markdown reduction ratio over time for AI agent
   * requests.
   *
   * @example
   * ```ts
   * const response =
   *   await client.radar.ai.markdownForAgents.timeseries();
   * ```
   */
  timeseries(
    query?: MarkdownForAgentTimeseriesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MarkdownForAgentTimeseriesResponse>;
  timeseries(options?: Core.RequestOptions): Core.APIPromise<MarkdownForAgentTimeseriesResponse>;
  timeseries(
    query: MarkdownForAgentTimeseriesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<MarkdownForAgentTimeseriesResponse> {
    if (isRequestOptions(query)) {
      return this.timeseries({}, query);
    }
    return (
      this._client.get('/radar/ai/markdown_for_agents/timeseries', { query, ...options }) as Core.APIPromise<{
        result: MarkdownForAgentTimeseriesResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface MarkdownForAgentSummaryResponse {
  /**
   * Metadata for the results.
   */
  meta: MarkdownForAgentSummaryResponse.Meta;

  summary_0: MarkdownForAgentSummaryResponse.Summary0;
}

export namespace MarkdownForAgentSummaryResponse {
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
        /**
         * Data source for annotations.
         */
        dataSource:
          | 'ALL'
          | 'AI_BOTS'
          | 'AI_GATEWAY'
          | 'BGP'
          | 'BOTS'
          | 'CONNECTION_ANOMALY'
          | 'CT'
          | 'DNS'
          | 'DNS_MAGNITUDE'
          | 'DNS_AS112'
          | 'DOS'
          | 'EMAIL_ROUTING'
          | 'EMAIL_SECURITY'
          | 'FW'
          | 'FW_PG'
          | 'HTTP'
          | 'HTTP_CONTROL'
          | 'HTTP_CRAWLER_REFERER'
          | 'HTTP_ORIGINS'
          | 'IQI'
          | 'LEAKED_CREDENTIALS'
          | 'NET'
          | 'ROBOTS_TXT'
          | 'SPEED'
          | 'WORKERS_AI';

        description: string;

        endDate: string;

        /**
         * Event type for annotations.
         */
        eventType: 'EVENT' | 'GENERAL' | 'OUTAGE' | 'PARTIAL_PROJECTION' | 'PIPELINE' | 'TRAFFIC_ANOMALY';

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

  export interface Summary0 {
    /**
     * A numeric string that can include decimals and infinity values.
     */
    value: string;
  }
}

export interface MarkdownForAgentTimeseriesResponse {
  /**
   * Metadata for the results.
   */
  meta: MarkdownForAgentTimeseriesResponse.Meta;

  [k: string]:
    | MarkdownForAgentTimeseriesResponse.unnamed_schema_ref_75bae70cf28e6bcef364b9840db3bdeb
    | MarkdownForAgentTimeseriesResponse.Meta
    | undefined;
}

export namespace MarkdownForAgentTimeseriesResponse {
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
        /**
         * Data source for annotations.
         */
        dataSource:
          | 'ALL'
          | 'AI_BOTS'
          | 'AI_GATEWAY'
          | 'BGP'
          | 'BOTS'
          | 'CONNECTION_ANOMALY'
          | 'CT'
          | 'DNS'
          | 'DNS_MAGNITUDE'
          | 'DNS_AS112'
          | 'DOS'
          | 'EMAIL_ROUTING'
          | 'EMAIL_SECURITY'
          | 'FW'
          | 'FW_PG'
          | 'HTTP'
          | 'HTTP_CONTROL'
          | 'HTTP_CRAWLER_REFERER'
          | 'HTTP_ORIGINS'
          | 'IQI'
          | 'LEAKED_CREDENTIALS'
          | 'NET'
          | 'ROBOTS_TXT'
          | 'SPEED'
          | 'WORKERS_AI';

        description: string;

        endDate: string;

        /**
         * Event type for annotations.
         */
        eventType: 'EVENT' | 'GENERAL' | 'OUTAGE' | 'PARTIAL_PROJECTION' | 'PIPELINE' | 'TRAFFIC_ANOMALY';

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

  export interface unnamed_schema_ref_75bae70cf28e6bcef364b9840db3bdeb {
    timestamps: Array<string>;

    values: Array<string>;
  }
}

export interface MarkdownForAgentSummaryParams {
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
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;
}

export interface MarkdownForAgentTimeseriesParams {
  /**
   * Aggregation interval of the results (e.g., in 15 minutes or 1 hour intervals).
   * Refer to
   * [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).
   */
  aggInterval?: '15m' | '1h' | '1d' | '1w';

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
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;
}

export declare namespace MarkdownForAgents {
  export {
    type MarkdownForAgentSummaryResponse as MarkdownForAgentSummaryResponse,
    type MarkdownForAgentTimeseriesResponse as MarkdownForAgentTimeseriesResponse,
    type MarkdownForAgentSummaryParams as MarkdownForAgentSummaryParams,
    type MarkdownForAgentTimeseriesParams as MarkdownForAgentTimeseriesParams,
  };
}
