// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as TimeseriesGroupsAPI from 'cloudflare/resources/radar/connection-tampering/timeseries-groups';

export class TimeseriesGroups extends APIResource {
  /**
   * Distribution of connection tampering types over time.
   */
  list(
    query?: TimeseriesGroupListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<TimeseriesGroupListResponse>;
  list(
    query: TimeseriesGroupListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TimeseriesGroupListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return (
      this._client.get('/radar/connection_tampering/timeseries_groups', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: TimeseriesGroupListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface TimeseriesGroupListResponse {
  meta: TimeseriesGroupListResponse.Meta;

  serie_0: TimeseriesGroupListResponse.Serie0;
}

export namespace TimeseriesGroupListResponse {
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

export interface TimeseriesGroupListParams {
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

export namespace TimeseriesGroups {
  export import TimeseriesGroupListResponse = TimeseriesGroupsAPI.TimeseriesGroupListResponse;
  export import TimeseriesGroupListParams = TimeseriesGroupsAPI.TimeseriesGroupListParams;
}
