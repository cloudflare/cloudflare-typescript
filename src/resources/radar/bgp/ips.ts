// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class IPs extends APIResource {
  /**
   * Retrieves time series data for the announced IP space count, represented as the
   * number of IPv4 /24s and IPv6 /48s, for a given ASN.
   */
  timeseries(
    query?: IPTimeseriesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<IPTimeseriesResponse>;
  timeseries(options?: Core.RequestOptions): Core.APIPromise<IPTimeseriesResponse>;
  timeseries(
    query: IPTimeseriesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<IPTimeseriesResponse> {
    if (isRequestOptions(query)) {
      return this.timeseries({}, query);
    }
    return (
      this._client.get('/radar/bgp/ips/timeseries', { query, ...options }) as Core.APIPromise<{
        result: IPTimeseriesResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface IPTimeseriesResponse {
  meta: IPTimeseriesResponse.Meta;

  serie_174: IPTimeseriesResponse.Serie174;
}

export namespace IPTimeseriesResponse {
  export interface Meta {
    queries: Array<Meta.Query>;
  }

  export namespace Meta {
    export interface Query {
      dateRange: Query.DateRange;

      entity: string;
    }

    export namespace Query {
      export interface DateRange {
        endTime: string;

        startTime: string;
      }
    }
  }

  export interface Serie174 {
    ipv4: Array<string>;

    ipv6: Array<string>;

    timestamps: Array<string>;
  }
}

export interface IPTimeseriesParams {
  /**
   * Comma-separated list of Autonomous System Numbers (ASNs). Prefix with `-` to
   * exclude ASNs from results. For example, `-174, 3356` excludes results from
   * AS174, but includes results from AS3356.
   */
  asn?: Array<string>;

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
   * Include data delay meta information.
   */
  includeDelay?: boolean;

  /**
   * Filters results by IP version (Ipv4 vs. IPv6).
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

  /**
   * Comma-separated list of locations (alpha-2 codes).
   */
  location?: Array<string>;

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;
}

export declare namespace IPs {
  export { type IPTimeseriesResponse as IPTimeseriesResponse, type IPTimeseriesParams as IPTimeseriesParams };
}
