// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as PrefixesAPI from 'cloudflare/resources/radar/bgp/tops/prefixes';

export class Prefixes extends APIResource {
  /**
   * Get the top network prefixes by BGP updates. Values are a percentage out of the
   * total BGP updates.
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
      this._client.get('/radar/bgp/top/prefixes', { query, ...options }) as Core.APIPromise<{
        result: PrefixListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface PrefixListResponse {
  meta: PrefixListResponse.Meta;

  top_0: Array<PrefixListResponse.Top0>;
}

export namespace PrefixListResponse {
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

  export interface Top0 {
    prefix: string;

    value: string;
  }
}

export interface PrefixListParams {
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

export namespace Prefixes {
  export import PrefixListResponse = PrefixesAPI.PrefixListResponse;
  export import PrefixListParams = PrefixesAPI.PrefixListParams;
}
