// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as AsesAPI from './ases';
import { AseGetParams, AseGetResponse, AsePrefixesParams, AsePrefixesResponse, Ases } from './ases';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class Top extends APIResource {
  ases: AsesAPI.Ases = new AsesAPI.Ases(this._client);

  /**
   * Retrieves the top network prefixes by BGP updates.
   */
  prefixes(
    query: TopPrefixesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<TopPrefixesResponse> {
    return (
      this._client.get('/radar/bgp/top/prefixes', { query, ...options }) as APIPromise<{
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

export interface TopPrefixesParams {
  /**
   * Comma-separated list of Autonomous System Numbers (ASNs). Prefix with `-` to
   * exclude ASNs from results. For example, `-174, 3356` excludes results from
   * AS174, but includes results from AS3356.
   */
  asn?: Array<string>;

  /**
   * End of the date range (inclusive).
   */
  dateEnd?: Array<string>;

  /**
   * Filters results by the specified date range. For example, use `7d` and
   * `7dcontrol` to compare this week with the previous week. Use this parameter or
   * set specific start and end dates (`dateStart` and `dateEnd` parameters).
   */
  dateRange?: Array<string>;

  /**
   * Start of the date range.
   */
  dateStart?: Array<string>;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Limits the number of objects returned in the response.
   */
  limit?: number;

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;

  /**
   * Array of BGP update types.
   */
  updateType?: Array<'ANNOUNCEMENT' | 'WITHDRAWAL'>;
}

Top.Ases = Ases;

export declare namespace Top {
  export { type TopPrefixesResponse as TopPrefixesResponse, type TopPrefixesParams as TopPrefixesParams };

  export {
    Ases as Ases,
    type AseGetResponse as AseGetResponse,
    type AsePrefixesResponse as AsePrefixesResponse,
    type AseGetParams as AseGetParams,
    type AsePrefixesParams as AsePrefixesParams,
  };
}
