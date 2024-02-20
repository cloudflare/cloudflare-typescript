// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as Pfx2asAPI from 'cloudflare/resources/radar/bgp/routes/pfx2as';

export class Pfx2as extends APIResource {
  /**
   * Lookup prefix-to-origin mapping on global routing tables.
   */
  list(query?: Pfx2aListParams, options?: Core.RequestOptions): Core.APIPromise<Pfx2aListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<Pfx2aListResponse>;
  list(
    query: Pfx2aListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Pfx2aListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return (
      this._client.get('/radar/bgp/routes/pfx2as', { query, ...options }) as Core.APIPromise<{
        result: Pfx2aListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface Pfx2aListResponse {
  meta: Pfx2aListResponse.Meta;

  prefix_origins: Array<Pfx2aListResponse.PrefixOrigin>;
}

export namespace Pfx2aListResponse {
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

export interface Pfx2aListParams {
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

export namespace Pfx2as {
  export import Pfx2aListResponse = Pfx2asAPI.Pfx2aListResponse;
  export import Pfx2aListParams = Pfx2asAPI.Pfx2aListParams;
}
