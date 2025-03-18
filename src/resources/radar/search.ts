// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Search extends APIResource {
  /**
   * Searches for locations, autonomous systems, and reports.
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
   * Search for locations, autonomous systems and reports.
   */
  query: string;

  /**
   * Search types to be excluded from results.
   */
  exclude?: Array<'SPECIAL_EVENTS' | 'NOTEBOOKS' | 'LOCATIONS' | 'ASNS'>;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Search types to be included in results.
   */
  include?: Array<'SPECIAL_EVENTS' | 'NOTEBOOKS' | 'LOCATIONS' | 'ASNS'>;

  /**
   * Limits the number of objects returned in the response.
   */
  limit?: number;

  /**
   * Limit the number of objects per search category.
   */
  limitPerGroup?: number;
}

export declare namespace Search {
  export { type SearchGlobalResponse as SearchGlobalResponse, type SearchGlobalParams as SearchGlobalParams };
}
