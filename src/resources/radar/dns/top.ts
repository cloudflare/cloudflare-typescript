// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as TopAPI from 'cloudflare/resources/radar/dns/top';
import * as RadarAPI from 'cloudflare/resources/radar/radar';

export class Top extends APIResource {
  /**
   * Get top autonomous systems by DNS queries made to Cloudflare's public DNS
   * resolver.
   */
  ases(query: TopAsesParams, options?: Core.RequestOptions): Core.APIPromise<TopAsesResponse> {
    return (
      this._client.get('/radar/dns/top/ases', { query, ...options }) as Core.APIPromise<{
        result: TopAsesResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get top locations by DNS queries made to Cloudflare's public DNS resolver.
   */
  locations(query: TopLocationsParams, options?: Core.RequestOptions): Core.APIPromise<TopLocationsResponse> {
    return (
      this._client.get('/radar/dns/top/locations', { query, ...options }) as Core.APIPromise<{
        result: TopLocationsResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface TopAsesResponse {
  meta: TopAsesResponse.Meta;

  top_0: Array<RadarAPI.UnnamedSchemaRef4124a22436f90127c7fa2c4543219752>;
}

export namespace TopAsesResponse {
  export interface Meta {
    dateRange: Array<RadarAPI.UnnamedSchemaRefBaac9d7da12de53e99142f8ecd3982e5>;

    confidenceInfo?: Meta.ConfidenceInfo;
  }

  export namespace Meta {
    export interface ConfidenceInfo {
      annotations?: Array<RadarAPI.UnnamedSchemaRefB5f3bd1840490bc487ffef84567807b1>;

      level?: number;
    }
  }
}

export interface TopLocationsResponse {
  meta: TopLocationsResponse.Meta;

  top_0: Array<RadarAPI.UnnamedSchemaRef83a14d589e799bc901b9ccc870251d09>;
}

export namespace TopLocationsResponse {
  export interface Meta {
    dateRange: Array<RadarAPI.UnnamedSchemaRefBaac9d7da12de53e99142f8ecd3982e5>;

    confidenceInfo?: Meta.ConfidenceInfo;
  }

  export namespace Meta {
    export interface ConfidenceInfo {
      annotations?: Array<RadarAPI.UnnamedSchemaRefB5f3bd1840490bc487ffef84567807b1>;

      level?: number;
    }
  }
}

export interface TopAsesParams {
  /**
   * Array of domain names.
   */
  domain: Array<string>;

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
   * Array of domain names.
   */
  domain: Array<string>;

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
