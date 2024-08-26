// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import * as TopAPI from './top';

export class Top extends APIResource {
  /**
   * Get the top autonomous systems (AS) by network traffic (NetFlows) over a given
   * time period. Visit https://en.wikipedia.org/wiki/NetFlow for more information.
   */
  ases(query?: TopAsesParams, options?: Core.RequestOptions): Core.APIPromise<TopAsesResponse>
  ases(options?: Core.RequestOptions): Core.APIPromise<TopAsesResponse>
  ases(query: TopAsesParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<TopAsesResponse> {
    if (isRequestOptions(query)) {
      return this.ases({}, query);
    }
    return (this._client.get('/radar/netflows/top/ases', { query, ...options }) as Core.APIPromise<{ result: TopAsesResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get the top locations by network traffic (NetFlows) over a given time period.
   * Visit https://en.wikipedia.org/wiki/NetFlow for more information.
   */
  locations(query?: TopLocationsParams, options?: Core.RequestOptions): Core.APIPromise<TopLocationsResponse>
  locations(options?: Core.RequestOptions): Core.APIPromise<TopLocationsResponse>
  locations(query: TopLocationsParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<TopLocationsResponse> {
    if (isRequestOptions(query)) {
      return this.locations({}, query);
    }
    return (this._client.get('/radar/netflows/top/locations', { query, ...options }) as Core.APIPromise<{ result: TopLocationsResponse }>)._thenUnwrap((obj) => obj.result);
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
   * Limit the number of objects in the response.
   */
  limit?: number;

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

export interface TopLocationsParams {
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
   * Limit the number of objects in the response.
   */
  limit?: number;

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

export namespace Top {
  export import TopAsesResponse = TopAPI.TopAsesResponse;
  export import TopLocationsResponse = TopAPI.TopLocationsResponse;
  export import TopAsesParams = TopAPI.TopAsesParams;
  export import TopLocationsParams = TopAPI.TopLocationsParams;
}
