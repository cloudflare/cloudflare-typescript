// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as StatsAPI from 'cloudflare/resources/radar/bgp/routes/stats';

export class Stats extends APIResource {
  /**
   * Get the BGP routing table stats (Beta).
   */
  list(query?: StatListParams, options?: Core.RequestOptions): Core.APIPromise<StatListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<StatListResponse>;
  list(
    query: StatListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<StatListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return (
      this._client.get('/radar/bgp/routes/stats', { query, ...options }) as Core.APIPromise<{
        result: StatListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface StatListResponse {
  meta: StatListResponse.Meta;

  stats: StatListResponse.Stats;
}

export namespace StatListResponse {
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

export interface StatListParams {
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

export namespace Stats {
  export import StatListResponse = StatsAPI.StatListResponse;
  export import StatListParams = StatsAPI.StatListParams;
}
