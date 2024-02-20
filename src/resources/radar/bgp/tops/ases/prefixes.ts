// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as PrefixesAPI from 'cloudflare/resources/radar/bgp/tops/ases/prefixes';

export class Prefixes extends APIResource {
  /**
   * Get the full list of autonomous systems on the global routing table ordered by
   * announced prefixes count. The data comes from public BGP MRT data archives and
   * updates every 2 hours.
   */
  list(query?: PrefixListParams, options?: Core.RequestOptions): Core.APIPromise<PrefixListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<PrefixListResponse>;
  list(
    query: PrefixListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<PrefixListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return (
      this._client.get('/radar/bgp/top/ases/prefixes', { query, ...options }) as Core.APIPromise<{
        result: PrefixListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface PrefixListResponse {
  asns: Array<PrefixListResponse.Asn>;

  meta: PrefixListResponse.Meta;
}

export namespace PrefixListResponse {
  export interface Asn {
    asn: number;

    country: string;

    name: string;

    pfxs_count: number;
  }

  export interface Meta {
    data_time: string;

    query_time: string;

    total_peers: number;
  }
}

export interface PrefixListParams {
  /**
   * Alpha-2 country code.
   */
  country?: string;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Maximum number of ASes to return
   */
  limit?: number;
}

export namespace Prefixes {
  export import PrefixListResponse = PrefixesAPI.PrefixListResponse;
  export import PrefixListParams = PrefixesAPI.PrefixListParams;
}
