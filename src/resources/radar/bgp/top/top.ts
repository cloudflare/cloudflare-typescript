// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as AsesAPI from './ases';
import { AseGetParams, AseGetResponse, AsePrefixesParams, AsePrefixesResponse, Ases } from './ases';
import { APIPromise } from '../../../../api-promise';
import { RequestOptions } from '../../../../internal/request-options';

export class Top extends APIResource {
  ases: AsesAPI.Ases = new AsesAPI.Ases(this._client);

  /**
   * Get the top network prefixes by BGP updates. Values are a percentage out of the
   * total BGP updates.
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
