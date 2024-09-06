// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as SearchAPI from './search';

export class Search extends APIResource {
  /**
   * Lets you search for locations, autonomous systems (AS) and reports.
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
   * Search for locations, AS and reports.
   */
  query: string;

  /**
   * Search types to be excluded from results.
   */
  exclude?: Array<'SPECIAL_EVENTS' | 'NOTEBOOKS' | 'LOCATIONS' | 'ASNS'>;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Search types to be included in results.
   */
  include?: Array<'SPECIAL_EVENTS' | 'NOTEBOOKS' | 'LOCATIONS' | 'ASNS'>;

  /**
   * Limit the number of objects in the response.
   */
  limit?: number;

  /**
   * Limit the number of objects per search category.
   */
  limitPerGroup?: number;
}

export namespace Search {
  export import SearchGlobalResponse = SearchAPI.SearchGlobalResponse;
  export import SearchGlobalParams = SearchAPI.SearchGlobalParams;
}
