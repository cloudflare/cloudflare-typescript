// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as LocationsAPI from 'cloudflare/resources/radar/attacks/layer7/top/locations';
import * as RadarAPI from 'cloudflare/resources/radar/radar';

export class Locations extends APIResource {
  /**
   * Get the top origin locations of and by layer 7 attacks. Values are a percentage
   * out of the total layer 7 attacks. The origin location is determined by the
   * client IP.
   */
  origin(
    query?: LocationOriginParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LocationOriginResponse>;
  origin(options?: Core.RequestOptions): Core.APIPromise<LocationOriginResponse>;
  origin(
    query: LocationOriginParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LocationOriginResponse> {
    if (isRequestOptions(query)) {
      return this.origin({}, query);
    }
    return (
      this._client.get('/radar/attacks/layer7/top/locations/origin', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: LocationOriginResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get the top target locations of and by layer 7 attacks. Values are a percentage
   * out of the total layer 7 attacks. The target location is determined by the
   * attacked zone's billing country, when available.
   */
  target(
    query?: LocationTargetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LocationTargetResponse>;
  target(options?: Core.RequestOptions): Core.APIPromise<LocationTargetResponse>;
  target(
    query: LocationTargetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LocationTargetResponse> {
    if (isRequestOptions(query)) {
      return this.target({}, query);
    }
    return (
      this._client.get('/radar/attacks/layer7/top/locations/target', {
        query,
        ...options,
      }) as Core.APIPromise<{ result: LocationTargetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface LocationOriginResponse {
  meta: LocationOriginResponse.Meta;

  top_0: Array<LocationOriginResponse.Top0>;
}

export namespace LocationOriginResponse {
  export interface Meta {
    dateRange: Array<RadarAPI.UnnamedSchemaRefBaac9d7da12de53e99142f8ecd3982e5>;

    lastUpdated: string;

    confidenceInfo?: Meta.ConfidenceInfo;
  }

  export namespace Meta {
    export interface ConfidenceInfo {
      annotations?: Array<RadarAPI.UnnamedSchemaRefB5f3bd1840490bc487ffef84567807b1>;

      level?: number;
    }
  }

  export interface Top0 {
    originCountryAlpha2: string;

    originCountryName: string;

    rank: number;

    value: string;
  }
}

export interface LocationTargetResponse {
  meta: LocationTargetResponse.Meta;

  top_0: Array<LocationTargetResponse.Top0>;
}

export namespace LocationTargetResponse {
  export interface Meta {
    dateRange: Array<RadarAPI.UnnamedSchemaRefBaac9d7da12de53e99142f8ecd3982e5>;

    lastUpdated: string;

    confidenceInfo?: Meta.ConfidenceInfo;
  }

  export namespace Meta {
    export interface ConfidenceInfo {
      annotations?: Array<RadarAPI.UnnamedSchemaRefB5f3bd1840490bc487ffef84567807b1>;

      level?: number;
    }
  }

  export interface Top0 {
    rank: number;

    targetCountryAlpha2: string;

    targetCountryName: string;

    value: string;
  }
}

export interface LocationOriginParams {
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
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;
}

export interface LocationTargetParams {
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
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;
}

export namespace Locations {
  export import LocationOriginResponse = LocationsAPI.LocationOriginResponse;
  export import LocationTargetResponse = LocationsAPI.LocationTargetResponse;
  export import LocationOriginParams = LocationsAPI.LocationOriginParams;
  export import LocationTargetParams = LocationsAPI.LocationTargetParams;
}
