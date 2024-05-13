// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as ConnectionTamperingAPI from './connection-tampering';

export class ConnectionTampering extends APIResource {
  /**
   * Distribution of connection tampering types over a given time period.
   */
  summary(
    query?: ConnectionTamperingSummaryParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectionTamperingSummaryResponse>;
  summary(options?: Core.RequestOptions): Core.APIPromise<ConnectionTamperingSummaryResponse>;
  summary(
    query: ConnectionTamperingSummaryParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectionTamperingSummaryResponse> {
    if (isRequestOptions(query)) {
      return this.summary({}, query);
    }
    return (
      this._client.get('/radar/connection_tampering/summary', { query, ...options }) as Core.APIPromise<{
        result: ConnectionTamperingSummaryResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Distribution of connection tampering types over time.
   */
  timeseriesGroups(
    query?: ConnectionTamperingTimeseriesGroupsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectionTamperingTimeseriesGroupsResponse>;
  timeseriesGroups(
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectionTamperingTimeseriesGroupsResponse>;
  timeseriesGroups(
    query: ConnectionTamperingTimeseriesGroupsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ConnectionTamperingTimeseriesGroupsResponse> {
    if (isRequestOptions(query)) {
      return this.timeseriesGroups({}, query);
    }
    return (
      this._client.get('/radar/connection_tampering/timeseries_groups', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: ConnectionTamperingTimeseriesGroupsResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface ConnectionTamperingSummaryResponse {
  meta: ConnectionTamperingSummaryResponse.Meta;

  summary_0: ConnectionTamperingSummaryResponse.Summary0;
}

export namespace ConnectionTamperingSummaryResponse {
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

        isInstantaneous: unknown;

        endTime?: string;

        linkedUrl?: string;

        startTime?: string;
      }
    }
  }

  export interface Summary0 {
    /**
     * Connections matching signatures for tampering later in the connection, after the
     * transfer of multiple data packets.
     */
    later_in_flow: string;

    /**
     * Connections that do not match any tampering signatures.
     */
    no_match: string;

    /**
     * Connections matching signatures for tampering after the receipt of a SYN packet
     * and ACK packet, meaning the TCP connection was successfully established but the
     * server did not receive any subsequent packets.
     */
    post_ack: string;

    /**
     * Connections matching signatures for tampering after the receipt of a packet with
     * PSH flag set, following connection establishment.
     */
    post_psh: string;

    /**
     * Connections matching signatures for tampering after the receipt of only a single
     * SYN packet, and before the handshake completes.
     */
    post_syn: string;
  }
}

export interface ConnectionTamperingTimeseriesGroupsResponse {
  meta: ConnectionTamperingTimeseriesGroupsResponse.Meta;

  serie_0: ConnectionTamperingTimeseriesGroupsResponse.Serie0;
}

export namespace ConnectionTamperingTimeseriesGroupsResponse {
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

        isInstantaneous: unknown;

        endTime?: string;

        linkedUrl?: string;

        startTime?: string;
      }
    }
  }

  export interface Serie0 {
    /**
     * Connections matching signatures for tampering later in the connection, after the
     * transfer of multiple data packets.
     */
    later_in_flow: Array<string>;

    /**
     * Connections that do not match any tampering signatures.
     */
    no_match: Array<string>;

    /**
     * Connections matching signatures for tampering after the receipt of a SYN packet
     * and ACK packet, meaning the TCP connection was successfully established but the
     * server did not receive any subsequent packets.
     */
    post_ack: Array<string>;

    /**
     * Connections matching signatures for tampering after the receipt of a packet with
     * PSH flag set, following connection establishment.
     */
    post_psh: Array<string>;

    /**
     * Connections matching signatures for tampering after the receipt of only a single
     * SYN packet, and before the handshake completes.
     */
    post_syn: Array<string>;

    timestamps: Array<string>;
  }
}

export interface ConnectionTamperingSummaryParams {
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

export interface ConnectionTamperingTimeseriesGroupsParams {
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

export namespace ConnectionTampering {
  export import ConnectionTamperingSummaryResponse = ConnectionTamperingAPI.ConnectionTamperingSummaryResponse;
  export import ConnectionTamperingTimeseriesGroupsResponse = ConnectionTamperingAPI.ConnectionTamperingTimeseriesGroupsResponse;
  export import ConnectionTamperingSummaryParams = ConnectionTamperingAPI.ConnectionTamperingSummaryParams;
  export import ConnectionTamperingTimeseriesGroupsParams = ConnectionTamperingAPI.ConnectionTamperingTimeseriesGroupsParams;
}
