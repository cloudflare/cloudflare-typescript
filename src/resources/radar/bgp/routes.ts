// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../../core';
import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as RoutesAPI from './routes';

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
   * Lookup prefix-to-ASN mapping on global routing tables.
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
   * Network prefix, IPv4 or IPv6.
   */
  prefix?: string;
}

export interface RoutePfx2asParams {
  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Return only results with the longest prefix match for the given prefix. For
   * example, specify a /32 prefix to lookup the origin ASN for an IPv4 address.
   */
  longestPrefixMatch?: boolean;

  /**
   * Lookup prefixes originated by the given ASN
   */
  origin?: number;

  /**
   * Network prefix, IPv4 or IPv6.
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

export namespace Routes {
  export import RouteMoasResponse = RoutesAPI.RouteMoasResponse;
  export import RoutePfx2asResponse = RoutesAPI.RoutePfx2asResponse;
  export import RouteStatsResponse = RoutesAPI.RouteStatsResponse;
  export import RouteMoasParams = RoutesAPI.RouteMoasParams;
  export import RoutePfx2asParams = RoutesAPI.RoutePfx2asParams;
  export import RouteStatsParams = RoutesAPI.RouteStatsParams;
}
