// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as SearchesAPI from 'cloudflare/resources/load-balancers/searches';

export class Searches extends APIResource {
  /**
   * Search for Load Balancing resources.
   */
  list(params: SearchListParams, options?: Core.RequestOptions): Core.APIPromise<SearchListResponse | null> {
    const { account_id, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/load_balancers/search`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: SearchListResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type SearchListResponse = Array<unknown>;

export interface SearchListParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Query param:
   */
  page?: unknown;

  /**
   * Query param:
   */
  per_page?: unknown;

  /**
   * Query param:
   */
  search_params?: SearchListParams.SearchParams;
}

export namespace SearchListParams {
  export interface SearchParams {
    /**
     * Search query term.
     */
    query?: string;

    /**
     * The type of references to include ("\*" for all).
     */
    references?: '' | '*' | 'referral' | 'referrer';
  }
}

export namespace Searches {
  export import SearchListResponse = SearchesAPI.SearchListResponse;
  export import SearchListParams = SearchesAPI.SearchListParams;
}
