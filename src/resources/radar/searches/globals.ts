// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as GlobalsAPI from 'cloudflare/resources/radar/searches/globals';

export class Globals extends APIResource {
  /**
   * Lets you search for locations, autonomous systems (AS) and reports.
   */
  list(query: GlobalListParams, options?: Core.RequestOptions): Core.APIPromise<GlobalListResponse> {
    return (
      this._client.get('/radar/search/global', { query, ...options }) as Core.APIPromise<{
        result: GlobalListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface GlobalListResponse {
  search: Array<GlobalListResponse.Search>;
}

export namespace GlobalListResponse {
  export interface Search {
    code: string;

    name: string;

    type: string;
  }
}

export interface GlobalListParams {
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

export namespace Globals {
  export import GlobalListResponse = GlobalsAPI.GlobalListResponse;
  export import GlobalListParams = GlobalsAPI.GlobalListParams;
}
