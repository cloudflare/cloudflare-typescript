// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as ConnectionTamperingAPI from 'cloudflare/resources/radar/connection-tampering/connection-tampering';
import * as TimeseriesGroupsAPI from 'cloudflare/resources/radar/connection-tampering/timeseries-groups';

export class ConnectionTampering extends APIResource {
  timeseriesGroups: TimeseriesGroupsAPI.TimeseriesGroups = new TimeseriesGroupsAPI.TimeseriesGroups(
    this._client,
  );

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

export interface ConnectionTamperingSummaryParams {
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

export namespace ConnectionTampering {
  export import ConnectionTamperingSummaryResponse = ConnectionTamperingAPI.ConnectionTamperingSummaryResponse;
  export import ConnectionTamperingSummaryParams = ConnectionTamperingAPI.ConnectionTamperingSummaryParams;
  export import TimeseriesGroups = TimeseriesGroupsAPI.TimeseriesGroups;
  export import TimeseriesGroupListResponse = TimeseriesGroupsAPI.TimeseriesGroupListResponse;
  export import TimeseriesGroupListParams = TimeseriesGroupsAPI.TimeseriesGroupListParams;
}
