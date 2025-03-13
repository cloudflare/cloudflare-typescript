// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class TCPResetsTimeouts extends APIResource {
  /**
   * Retrieves the distribution of connection stage by TCP connections terminated
   * within the first 10 packets by a reset or timeout.
   */
  summary(
    query?: TCPResetsTimeoutSummaryParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TCPResetsTimeoutSummaryResponse>;
  summary(options?: Core.RequestOptions): Core.APIPromise<TCPResetsTimeoutSummaryResponse>;
  summary(
    query: TCPResetsTimeoutSummaryParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TCPResetsTimeoutSummaryResponse> {
    if (isRequestOptions(query)) {
      return this.summary({}, query);
    }
    return (
      this._client.get('/radar/tcp_resets_timeouts/summary', { query, ...options }) as Core.APIPromise<{
        result: TCPResetsTimeoutSummaryResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the distribution of connection stage by TCP connections terminated
   * within the first 10 packets by a reset or timeout over time.
   */
  timeseriesGroups(
    query?: TCPResetsTimeoutTimeseriesGroupsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TCPResetsTimeoutTimeseriesGroupsResponse>;
  timeseriesGroups(options?: Core.RequestOptions): Core.APIPromise<TCPResetsTimeoutTimeseriesGroupsResponse>;
  timeseriesGroups(
    query: TCPResetsTimeoutTimeseriesGroupsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TCPResetsTimeoutTimeseriesGroupsResponse> {
    if (isRequestOptions(query)) {
      return this.timeseriesGroups({}, query);
    }
    return (
      this._client.get('/radar/tcp_resets_timeouts/timeseries_groups', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: TCPResetsTimeoutTimeseriesGroupsResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface TCPResetsTimeoutSummaryResponse {
  meta: TCPResetsTimeoutSummaryResponse.Meta;

  summary_0: TCPResetsTimeoutSummaryResponse.Summary0;
}

export namespace TCPResetsTimeoutSummaryResponse {
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
    /**
     * Connection resets within the first 10 packets from the client, but after the
     * server has received multiple data packets.
     */
    later_in_flow: string;

    /**
     * All other connections.
     */
    no_match: string;

    /**
     * Connection resets or timeouts after the server received both a SYN packet and an
     * ACK packet, meaning the connection was successfully established.
     */
    post_ack: string;

    /**
     * Connection resets or timeouts after the server received a packet with PSH flag
     * set, following connection establishment.
     */
    post_psh: string;

    /**
     * Connection resets or timeouts after the server received only a single SYN
     * packet.
     */
    post_syn: string;
  }
}

export interface TCPResetsTimeoutTimeseriesGroupsResponse {
  meta: TCPResetsTimeoutTimeseriesGroupsResponse.Meta;

  serie_0: TCPResetsTimeoutTimeseriesGroupsResponse.Serie0;
}

export namespace TCPResetsTimeoutTimeseriesGroupsResponse {
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
    later_in_flow: Array<string>;

    no_match: Array<string>;

    post_ack: Array<string>;

    post_psh: Array<string>;

    post_syn: Array<string>;

    timestamps: Array<string>;
  }
}

export interface TCPResetsTimeoutSummaryParams {
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

export interface TCPResetsTimeoutTimeseriesGroupsParams {
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

export declare namespace TCPResetsTimeouts {
  export {
    type TCPResetsTimeoutSummaryResponse as TCPResetsTimeoutSummaryResponse,
    type TCPResetsTimeoutTimeseriesGroupsResponse as TCPResetsTimeoutTimeseriesGroupsResponse,
    type TCPResetsTimeoutSummaryParams as TCPResetsTimeoutSummaryParams,
    type TCPResetsTimeoutTimeseriesGroupsParams as TCPResetsTimeoutTimeseriesGroupsParams,
  };
}
