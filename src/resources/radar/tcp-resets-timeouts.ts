// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as TCPResetsTimeoutsAPI from './tcp-resets-timeouts';

export class TCPResetsTimeouts extends APIResource {
  /**
   * Percentage distribution by connection stage of TCP connections terminated within
   * the first 10 packets by a reset or timeout, for a given time period.
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
   * Percentage distribution by connection stage of TCP connections terminated within
   * the first 10 packets by a reset or timeout, over time.
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
    /**
     * Connection resets within the first 10 packets from the client, but after the
     * server has received multiple data packets.
     */
    later_in_flow: Array<string>;

    /**
     * All other connections.
     */
    no_match: Array<string>;

    /**
     * Connection resets or timeouts after the server received both a SYN packet and an
     * ACK packet, meaning the connection was successfully established.
     */
    post_ack: Array<string>;

    /**
     * Connection resets or timeouts after the server received a packet with PSH flag
     * set, following connection establishment.
     */
    post_psh: Array<string>;

    /**
     * Connection resets or timeouts after the server received only a single SYN
     * packet.
     */
    post_syn: Array<string>;

    timestamps: Array<string>;
  }
}

export interface TCPResetsTimeoutSummaryParams {
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

export interface TCPResetsTimeoutTimeseriesGroupsParams {
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
}

export namespace TCPResetsTimeouts {
  export import TCPResetsTimeoutSummaryResponse = TCPResetsTimeoutsAPI.TCPResetsTimeoutSummaryResponse;
  export import TCPResetsTimeoutTimeseriesGroupsResponse = TCPResetsTimeoutsAPI.TCPResetsTimeoutTimeseriesGroupsResponse;
  export import TCPResetsTimeoutSummaryParams = TCPResetsTimeoutsAPI.TCPResetsTimeoutSummaryParams;
  export import TCPResetsTimeoutTimeseriesGroupsParams = TCPResetsTimeoutsAPI.TCPResetsTimeoutTimeseriesGroupsParams;
}
