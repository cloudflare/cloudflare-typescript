// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as MoasAPI from 'cloudflare/resources/radar/bgp/routes/moas';

export class Moas extends APIResource {
  /**
   * List all Multi-origin AS (MOAS) prefixes on the global routing tables.
   */
  list(query?: MoaListParams, options?: Core.RequestOptions): Core.APIPromise<MoaListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<MoaListResponse>;
  list(
    query: MoaListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<MoaListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return (
      this._client.get('/radar/bgp/routes/moas', { query, ...options }) as Core.APIPromise<{
        result: MoaListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface MoaListResponse {
  meta: MoaListResponse.Meta;

  moas: Array<MoaListResponse.Moa>;
}

export namespace MoaListResponse {
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

export interface MoaListParams {
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

export namespace Moas {
  export import MoaListResponse = MoasAPI.MoaListResponse;
  export import MoaListParams = MoasAPI.MoaListParams;
}
