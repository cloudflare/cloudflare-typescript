// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import * as Core from '../../../../core';
import * as AsesAPI from './ases';

export class Ases extends APIResource {
  /**
   * Get the top autonomous systems (ASes) by BGP updates (announcements only).
   * Values are a percentage out of the total updates.
   */
  get(query?: AseGetParams, options?: Core.RequestOptions): Core.APIPromise<AseGetResponse>;
  get(options?: Core.RequestOptions): Core.APIPromise<AseGetResponse>;
  get(
    query: AseGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AseGetResponse> {
    if (isRequestOptions(query)) {
      return this.get({}, query);
    }
    return (
      this._client.get('/radar/bgp/top/ases', { query, ...options }) as Core.APIPromise<{
        result: AseGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

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

export interface AseGetResponse {
  meta: AseGetResponse.Meta;

  top_0: Array<AseGetResponse.Top0>;
}

export namespace AseGetResponse {
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
    asn: number;

    ASName: string;

    /**
     * Percentage of updates by this AS out of the total updates by all autonomous
     * systems.
     */
    value: string;
  }
}

export interface AsePrefixesResponse {
  asns: Array<AsePrefixesResponse.ASN>;

  meta: AsePrefixesResponse.Meta;
}

export namespace AsePrefixesResponse {
  export interface ASN {
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

export interface AseGetParams {
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
  dateRange?: Array<string>;

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
   * Array of BGP network prefixes.
   */
  prefix?: Array<string>;

  /**
   * Array of BGP update types.
   */
  updateType?: Array<'ANNOUNCEMENT' | 'WITHDRAWAL'>;
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
  export import AseGetResponse = AsesAPI.AseGetResponse;
  export import AsePrefixesResponse = AsesAPI.AsePrefixesResponse;
  export import AseGetParams = AsesAPI.AseGetParams;
  export import AsePrefixesParams = AsesAPI.AsePrefixesParams;
}
