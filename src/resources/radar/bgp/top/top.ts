// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as TopAPI from 'cloudflare/resources/radar/bgp/top/top';
import * as RadarAPI from 'cloudflare/resources/radar/radar';
import * as AsesAPI from 'cloudflare/resources/radar/bgp/top/ases';

export class Top extends APIResource {
  ases: AsesAPI.Ases = new AsesAPI.Ases(this._client);

  /**
   * Get the top network prefixes by BGP updates. Values are a percentage out of the
   * total BGP updates.
   */
  prefixes(query?: TopPrefixesParams, options?: Core.RequestOptions): Core.APIPromise<TopPrefixesResponse>;
  prefixes(options?: Core.RequestOptions): Core.APIPromise<TopPrefixesResponse>;
  prefixes(
    query: TopPrefixesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TopPrefixesResponse> {
    if (isRequestOptions(query)) {
      return this.prefixes({}, query);
    }
    return (
      this._client.get('/radar/bgp/top/prefixes', { query, ...options }) as Core.APIPromise<{
        result: TopPrefixesResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface TopPrefixesResponse {
  meta: TopPrefixesResponse.Meta;

  top_0: Array<TopPrefixesResponse.Top0>;
}

export namespace TopPrefixesResponse {
  export interface Meta {
    dateRange: Array<RadarAPI.UnnamedSchemaRefBaac9d7da12de53e99142f8ecd3982e5>;
  }

  export interface Top0 {
    prefix: string;

    value: string;
  }
}

export interface TopPrefixesParams {
  /**
   * Array of comma separated list of ASNs, start with `-` to exclude from results.
   * For example, `-174, 3356` excludes results from AS174, but includes results from
   * AS3356.
   */
  asn?: Array<string>;

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

  /**
   * Array of BGP update types.
   */
  updateType?: Array<'ANNOUNCEMENT' | 'WITHDRAWAL'>;
}

export namespace Top {
  export import TopPrefixesResponse = TopAPI.TopPrefixesResponse;
  export import TopPrefixesParams = TopAPI.TopPrefixesParams;
  export import Ases = AsesAPI.Ases;
  export import AseGetResponse = AsesAPI.AseGetResponse;
  export import AsePrefixesResponse = AsesAPI.AsePrefixesResponse;
  export import AseGetParams = AsesAPI.AseGetParams;
  export import AsePrefixesParams = AsesAPI.AsePrefixesParams;
}
