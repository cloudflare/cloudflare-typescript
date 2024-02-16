// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as DNSSECAPI from 'cloudflare/resources/radar/as112/timeseries-groups/dnssec';

export class DNSSEC extends APIResource {
  /**
   * Percentage distribution of DNS AS112 queries by DNSSEC support over time.
   */
  list(query?: DNSSECListParams, options?: Core.RequestOptions): Core.APIPromise<DNSSECListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<DNSSECListResponse>;
  list(
    query: DNSSECListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DNSSECListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return (
      this._client.get('/radar/as112/timeseries_groups/dnssec', { query, ...options }) as Core.APIPromise<{
        result: DNSSECListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface DNSSECListResponse {
  meta: unknown;

  serie_0: DNSSECListResponse.Serie0;
}

export namespace DNSSECListResponse {
  export interface Serie0 {
    NOT_SUPPORTED: Array<string>;

    SUPPORTED: Array<string>;
  }
}

export interface DNSSECListParams {
  /**
   * Aggregation interval results should be returned in (for example, in 15 minutes
   * or 1 hour intervals). Refer to
   * [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).
   */
  aggInterval?: '15m' | '1h' | '1d' | '1w';

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
   * Array of comma separated list of locations (alpha-2 country codes). Start with
   * `-` to exclude from results. For example, `-US,PT` excludes results from the US,
   * but includes results from PT.
   */
  location?: Array<string>;

  /**
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;
}

export namespace DNSSEC {
  export import DNSSECListResponse = DNSSECAPI.DNSSECListResponse;
  export import DNSSECListParams = DNSSECAPI.DNSSECListParams;
}
