// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as AsesAPI from 'cloudflare/resources/radar/bgp/tops/ases';

export class Ases extends APIResource {
  /**
   * Get the full list of autonomous systems on the global routing table ordered by
   * announced prefixes count. The data comes from public BGP MRT data archives and
   * updates every 2 hours.
   */
  prefixes(query?: AsePrefixesParams, options?: Core.RequestOptions): Core.APIPromise<AsePrefixesResponse>;
  prefixes(options?: Core.RequestOptions): Core.APIPromise<AsePrefixesResponse>;
  prefixes(
    query: AsePrefixesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AsePrefixesResponse> {
    if (isRequestOptions(query)) {
      return this.prefixes({}, query);
    }
    return (
      this._client.get('/radar/bgp/top/ases/prefixes', { query, ...options }) as Core.APIPromise<{
        result: AsePrefixesResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface AsePrefixesResponse {
  asns: Array<AsePrefixesResponse.Asn>;

  meta: AsePrefixesResponse.Meta;
}

export namespace AsePrefixesResponse {
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

export interface AsePrefixesParams {
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

export namespace Ases {
  export import AsePrefixesResponse = AsesAPI.AsePrefixesResponse;
  export import AsePrefixesParams = AsesAPI.AsePrefixesParams;
}
