// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as RoutesAPI from 'cloudflare/resources/radar/bgp/routes';

export class Routes extends APIResource {
  /**
   * List all Multi-origin AS (MOAS) prefixes on the global routing tables.
   */
  moas(query?: RouteMoasParams, options?: Core.RequestOptions): Core.APIPromise<RouteMoasResponse>;
  moas(options?: Core.RequestOptions): Core.APIPromise<RouteMoasResponse>;
  moas(
    query: RouteMoasParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RouteMoasResponse> {
    if (isRequestOptions(query)) {
      return this.moas({}, query);
    }
    return (
      this._client.get('/radar/bgp/routes/moas', { query, ...options }) as Core.APIPromise<{
        result: RouteMoasResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lookup prefix-to-origin mapping on global routing tables.
   */
  pfx2as(query?: RoutePfx2asParams, options?: Core.RequestOptions): Core.APIPromise<RoutePfx2asResponse>;
  pfx2as(options?: Core.RequestOptions): Core.APIPromise<RoutePfx2asResponse>;
  pfx2as(
    query: RoutePfx2asParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RoutePfx2asResponse> {
    if (isRequestOptions(query)) {
      return this.pfx2as({}, query);
    }
    return (
      this._client.get('/radar/bgp/routes/pfx2as', { query, ...options }) as Core.APIPromise<{
        result: RoutePfx2asResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get the BGP routing table stats (Beta).
   */
  stats(query?: RouteStatsParams, options?: Core.RequestOptions): Core.APIPromise<RouteStatsResponse>;
  stats(options?: Core.RequestOptions): Core.APIPromise<RouteStatsResponse>;
  stats(
    query: RouteStatsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RouteStatsResponse> {
    if (isRequestOptions(query)) {
      return this.stats({}, query);
    }
    return (
      this._client.get('/radar/bgp/routes/stats', { query, ...options }) as Core.APIPromise<{
        result: RouteStatsResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets time-series data for the announced IP space count, represented as the
   * number of IPv4 /24s and IPv6 /48s, for a given ASN.
   */
  timeseries(
    query?: RouteTimeseriesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RouteTimeseriesResponse>;
  timeseries(options?: Core.RequestOptions): Core.APIPromise<RouteTimeseriesResponse>;
  timeseries(
    query: RouteTimeseriesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RouteTimeseriesResponse> {
    if (isRequestOptions(query)) {
      return this.timeseries({}, query);
    }
    return (
      this._client.get('/radar/bgp/routes/timeseries', { query, ...options }) as Core.APIPromise<{
        result: RouteTimeseriesResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface RouteMoasResponse {
  meta: RouteMoasResponse.Meta;

  moas: Array<RouteMoasResponse.Moa>;
}

export namespace RouteMoasResponse {
  export interface Meta {
    data_time: string;

    query_time: string;

    total_peers: number;
  }

  export interface Moa {
    origins: Array<Moa.Origin>;

    prefix: string;
  }

  export namespace Moa {
    export interface Origin {
      origin: number;

      peer_count: number;

      rpki_validation: string;
    }
  }
}

export interface RoutePfx2asResponse {
  meta: RoutePfx2asResponse.Meta;

  prefix_origins: Array<RoutePfx2asResponse.PrefixOrigin>;
}

export namespace RoutePfx2asResponse {
  export interface Meta {
    data_time: string;

    query_time: string;

    total_peers: number;
  }

  export interface PrefixOrigin {
    origin: number;

    peer_count: number;

    prefix: string;

    rpki_validation: string;
  }
}

export interface RouteStatsResponse {
  meta: RouteStatsResponse.Meta;

  stats: RouteStatsResponse.Stats;
}

export namespace RouteStatsResponse {
  export interface Meta {
    data_time: string;

    query_time: string;

    total_peers: number;
  }

  export interface Stats {
    distinct_origins: number;

    distinct_origins_ipv4: number;

    distinct_origins_ipv6: number;

    distinct_prefixes: number;

    distinct_prefixes_ipv4: number;

    distinct_prefixes_ipv6: number;

    routes_invalid: number;

    routes_invalid_ipv4: number;

    routes_invalid_ipv6: number;

    routes_total: number;

    routes_total_ipv4: number;

    routes_total_ipv6: number;

    routes_unknown: number;

    routes_unknown_ipv4: number;

    routes_unknown_ipv6: number;

    routes_valid: number;

    routes_valid_ipv4: number;

    routes_valid_ipv6: number;
  }
}

export interface RouteTimeseriesResponse {
  meta: RouteTimeseriesResponse.Meta;

  serie_ipv4_24s: RouteTimeseriesResponse.SerieIPV4_24s;

  serie_ipv6_48s: RouteTimeseriesResponse.SerieIPV6_48s;
}

export namespace RouteTimeseriesResponse {
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

  export interface SerieIPV4_24s {
    timestamps: Array<string>;

    values: Array<number>;
  }

  export interface SerieIPV6_48s {
    timestamps: Array<string>;

    values: Array<number>;
  }
}

export interface RouteMoasParams {
  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Lookup only RPKI invalid MOASes
   */
  invalid_only?: boolean;

  /**
   * Lookup MOASes originated by the given ASN
   */
  origin?: number;

  /**
   * Lookup MOASes by prefix
   */
  prefix?: string;
}

export interface RoutePfx2asParams {
  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Lookup prefixes originated by the given ASN
   */
  origin?: number;

  /**
   * Lookup origins of the given prefix
   */
  prefix?: string;

  /**
   * Return only results with matching rpki status: valid, invalid or unknown
   */
  rpkiStatus?: 'VALID' | 'INVALID' | 'UNKNOWN';
}

export interface RouteStatsParams {
  /**
   * Single ASN as integer.
   */
  asn?: number;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Location Alpha2 code.
   */
  location?: string;
}

export interface RouteTimeseriesParams {
  /**
   * Single ASN as integer.
   */
  asn?: number;

  /**
   * End of the date range (inclusive).
   */
  dateEnd?: string;

  /**
   * Shorthand date ranges for the last X days - use when you don't need specific
   * start and end dates.
   */
  dateRange?:
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
    | '24wControl';

  /**
   * Start of the date range (inclusive).
   */
  dateStart?: string;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';
}

export namespace Routes {
  export import RouteMoasResponse = RoutesAPI.RouteMoasResponse;
  export import RoutePfx2asResponse = RoutesAPI.RoutePfx2asResponse;
  export import RouteStatsResponse = RoutesAPI.RouteStatsResponse;
  export import RouteTimeseriesResponse = RoutesAPI.RouteTimeseriesResponse;
  export import RouteMoasParams = RoutesAPI.RouteMoasParams;
  export import RoutePfx2asParams = RoutesAPI.RoutePfx2asParams;
  export import RouteStatsParams = RoutesAPI.RouteStatsParams;
  export import RouteTimeseriesParams = RoutesAPI.RouteTimeseriesParams;
}
