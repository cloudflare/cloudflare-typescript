// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';

export class Top extends APIResource {
  /**
   * Retrieves the top autonomous systems by network traffic (NetFlows).
   */
  ases(query?: TopAsesParams, options?: Core.RequestOptions): Core.APIPromise<TopAsesResponse>;
  ases(options?: Core.RequestOptions): Core.APIPromise<TopAsesResponse>;
  ases(
    query: TopAsesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TopAsesResponse> {
    if (isRequestOptions(query)) {
      return this.ases({}, query);
    }
    return (
      this._client.get('/radar/netflows/top/ases', { query, ...options }) as Core.APIPromise<{
        result: TopAsesResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the top locations by network traffic (NetFlows).
   */
  locations(query?: TopLocationsParams, options?: Core.RequestOptions): Core.APIPromise<TopLocationsResponse>;
  locations(options?: Core.RequestOptions): Core.APIPromise<TopLocationsResponse>;
  locations(
    query: TopLocationsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TopLocationsResponse> {
    if (isRequestOptions(query)) {
      return this.locations({}, query);
    }
    return (
      this._client.get('/radar/netflows/top/locations', { query, ...options }) as Core.APIPromise<{
        result: TopLocationsResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface TopAsesResponse {
  top_0: Array<TopAsesResponse.Top0>;
}

export namespace TopAsesResponse {
  export interface Top0 {
    clientASN: number;

    clientASName: string;

    value: string;
  }
}

export interface TopLocationsResponse {
  top_0: Array<TopLocationsResponse.Top0>;
}

export namespace TopLocationsResponse {
  export interface Top0 {
    clientCountryAlpha2: string;

    clientCountryName: string;

    value: string;
  }
}

export interface TopAsesParams {
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
   * Limits the number of objects returned in the response.
   */
  limit?: number;

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

export interface TopLocationsParams {
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
   * Limits the number of objects returned in the response.
   */
  limit?: number;

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

export declare namespace Top {
  export {
    type TopAsesResponse as TopAsesResponse,
    type TopLocationsResponse as TopLocationsResponse,
    type TopAsesParams as TopAsesParams,
    type TopLocationsParams as TopLocationsParams,
  };
}
