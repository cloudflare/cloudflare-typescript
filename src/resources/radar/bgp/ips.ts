// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as IPsAPI from './ips';

export class IPs extends APIResource {
  /**
   * Gets time-series data for the announced IP space count, represented as the
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

  serie_cn: IPTimeseriesResponse.SerieCn;
}

export namespace IPTimeseriesResponse {
  export interface Meta {
    dateRange: Array<Meta.DateRange>;
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
  }

  export interface Serie174 {
    ipv4: Array<string>;

    ipv6: Array<string>;

    timestamps: Array<string>;
  }

  export interface SerieCn {
    ipv4: Array<string>;

    ipv6: Array<string>;

    timestamps: Array<string>;
  }
}

export interface IPTimeseriesParams {
  /**
   * Comma separated list of ASNs.
   */
  asn?: string;

  /**
   * End of the date range (inclusive).
   */
  dateEnd?: string;

  /**
   * Shorthand date ranges for the last X days - use when you don't need specific
   * start and end dates.
   */
  dateRange?: string;

  /**
   * Start of the date range (inclusive).
   */
  dateStart?: string;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Include data delay meta information
   */
  includeDelay?: boolean;

  /**
   * Comma separated list of locations.
   */
  location?: string;

  /**
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;
}

export namespace IPs {
  export import IPTimeseriesResponse = IPsAPI.IPTimeseriesResponse;
  export import IPTimeseriesParams = IPsAPI.IPTimeseriesParams;
}
