// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as TopTopAPI from 'cloudflare/resources/radar/attacks/layer3/top/top';
import * as TopAPI from 'cloudflare/resources/radar/http/top';
import * as LocationsAPI from 'cloudflare/resources/radar/attacks/layer3/top/locations';

export class Top extends APIResource {
  locations: LocationsAPI.Locations = new LocationsAPI.Locations(this._client);

  /**
   * Get the top attacks from origin to target location. Values are a percentage out
   * of the total layer 3 attacks (with billing country). You can optionally limit
   * the number of attacks per origin/target location (useful if all the top attacks
   * are from or to the same location).
   */
  attacks(query?: TopAttacksParams, options?: Core.RequestOptions): Core.APIPromise<TopAttacksResponse>;
  attacks(options?: Core.RequestOptions): Core.APIPromise<TopAttacksResponse>;
  attacks(
    query: TopAttacksParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TopAttacksResponse> {
    if (isRequestOptions(query)) {
      return this.attacks({}, query);
    }
    return (
      this._client.get('/radar/attacks/layer3/top/attacks', { query, ...options }) as Core.APIPromise<{
        result: TopAttacksResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get the Industry of attacks.
   */
  industry(query?: TopIndustryParams, options?: Core.RequestOptions): Core.APIPromise<TopIndustryResponse>;
  industry(options?: Core.RequestOptions): Core.APIPromise<TopIndustryResponse>;
  industry(
    query: TopIndustryParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TopIndustryResponse> {
    if (isRequestOptions(query)) {
      return this.industry({}, query);
    }
    return (
      this._client.get('/radar/attacks/layer3/top/industry', { query, ...options }) as Core.APIPromise<{
        result: TopIndustryResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get the Verticals of attacks.
   */
  vertical(query?: TopVerticalParams, options?: Core.RequestOptions): Core.APIPromise<TopVerticalResponse>;
  vertical(options?: Core.RequestOptions): Core.APIPromise<TopVerticalResponse>;
  vertical(
    query: TopVerticalParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TopVerticalResponse> {
    if (isRequestOptions(query)) {
      return this.vertical({}, query);
    }
    return (
      this._client.get('/radar/attacks/layer3/top/vertical', { query, ...options }) as Core.APIPromise<{
        result: TopVerticalResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface TopAttacksResponse {
  meta: TopAttacksResponse.Meta;

  top_0: Array<TopAttacksResponse.Top0>;
}

export namespace TopAttacksResponse {
  export interface Meta {
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

  export interface Top0 {
    originCountryAlpha2: string;

    originCountryName: string;

    value: string;
  }
}

export interface TopIndustryResponse {
  meta: TopIndustryResponse.Meta;

  top_0: Array<TopAPI.Browser>;
}

export namespace TopIndustryResponse {
  export interface Meta {
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
}

export interface TopVerticalResponse {
  meta: TopVerticalResponse.Meta;

  top_0: Array<TopAPI.Browser>;
}

export namespace TopVerticalResponse {
  export interface Meta {
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
}

export interface TopAttacksParams {
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
   * Filter for ip version.
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

  /**
   * Limit the number of objects in the response.
   */
  limit?: number;

  /**
   * Array of attack origin/target location attack limits. Together with
   * `limitPerLocation`, limits how many objects will be fetched per origin/target
   * location.
   */
  limitDirection?: 'ORIGIN' | 'TARGET';

  /**
   * Limit the number of attacks per origin/target (refer to `limitDirection`
   * parameter) location.
   */
  limitPerLocation?: number;

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

  /**
   * Array of L3/4 attack types.
   */
  protocol?: Array<'UDP' | 'TCP' | 'ICMP' | 'GRE'>;
}

export interface TopIndustryParams {
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
   * Filter for ip version.
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

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

  /**
   * Array of L3/4 attack types.
   */
  protocol?: Array<'UDP' | 'TCP' | 'ICMP' | 'GRE'>;
}

export interface TopVerticalParams {
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
   * Filter for ip version.
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

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

  /**
   * Array of L3/4 attack types.
   */
  protocol?: Array<'UDP' | 'TCP' | 'ICMP' | 'GRE'>;
}

export namespace Top {
  export import TopAttacksResponse = TopTopAPI.TopAttacksResponse;
  export import TopIndustryResponse = TopTopAPI.TopIndustryResponse;
  export import TopVerticalResponse = TopTopAPI.TopVerticalResponse;
  export import TopAttacksParams = TopTopAPI.TopAttacksParams;
  export import TopIndustryParams = TopTopAPI.TopIndustryParams;
  export import TopVerticalParams = TopTopAPI.TopVerticalParams;
  export import Locations = LocationsAPI.Locations;
  export import LocationOriginResponse = LocationsAPI.LocationOriginResponse;
  export import LocationTargetResponse = LocationsAPI.LocationTargetResponse;
  export import LocationOriginParams = LocationsAPI.LocationOriginParams;
  export import LocationTargetParams = LocationsAPI.LocationTargetParams;
}
