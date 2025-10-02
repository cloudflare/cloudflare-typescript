// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Search extends APIResource {
  /**
   * Searches for locations, autonomous systems, reports, bots, certificate logs,
   * certificate authorities, industries and verticals
   *
   * @example
   * ```ts
   * const response = await client.radar.search.global({
   *   query: 'United',
   * });
   * ```
   */
  global(query: SearchGlobalParams, options?: Core.RequestOptions): Core.APIPromise<SearchGlobalResponse> {
    return (
      this._client.get('/radar/search/global', { query, ...options }) as Core.APIPromise<{
        result: SearchGlobalResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface SearchGlobalResponse {
  search: Array<SearchGlobalResponse.Search>;
}

export namespace SearchGlobalResponse {
  export interface Search {
    code: string;

    name: string;

    type: string;
  }
}

export interface SearchGlobalParams {
  /**
   * String used to perform the search operation.
   */
  query: string;

  /**
   * Search types excluded from results.
   */
  exclude?: Array<
    | 'ADM1S'
    | 'ASNS'
    | 'BOTS'
    | 'CERTIFICATE_AUTHORITIES'
    | 'CERTIFICATE_LOGS'
    | 'INDUSTRIES'
    | 'LOCATIONS'
    | 'NOTEBOOKS'
    | 'TLDS'
    | 'VERTICALS'
  >;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Search types included in results.
   */
  include?: Array<
    | 'ADM1S'
    | 'ASNS'
    | 'BOTS'
    | 'CERTIFICATE_AUTHORITIES'
    | 'CERTIFICATE_LOGS'
    | 'INDUSTRIES'
    | 'LOCATIONS'
    | 'NOTEBOOKS'
    | 'TLDS'
    | 'VERTICALS'
  >;

  /**
   * Limits the number of objects returned in the response.
   */
  limit?: number;

  /**
   * Limits the number of objects per search category.
   */
  limitPerGroup?: number;
}

export declare namespace Search {
  export { type SearchGlobalResponse as SearchGlobalResponse, type SearchGlobalParams as SearchGlobalParams };
}
