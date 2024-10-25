// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as IPsAPI from './ips';

export class IPs extends APIResource {
  /**
   * Get time series data for the announced IP space count, represented as the number
   * of IPv4 /24s and IPv6 /48s, for a given ASN.
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
   * Include data delay meta information
   */
  includeDelay?: boolean;

  /**
   * Filter for ip version.
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

  /**
   * Array of locations (alpha-2 country codes).
   */
  location?: Array<string>;

  /**
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;
}

export namespace IPs {
  export import IPTimeseriesResponse = IPsAPI.IPTimeseriesResponse;
  export import IPTimeseriesParams = IPsAPI.IPTimeseriesParams;
}
