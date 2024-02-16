// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as SearchesAPI from 'cloudflare/resources/load-balancers/searches';

export class Searches extends APIResource {
  /**
   * Search for Load Balancing resources.
   */
  list(
    accountId: string,
    query?: SearchListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SearchListResponse | null>;
  list(accountId: string, options?: Core.RequestOptions): Core.APIPromise<SearchListResponse | null>;
  list(
    accountId: string,
    query: SearchListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SearchListResponse | null> {
    if (isRequestOptions(query)) {
      return this.list(accountId, {}, query);
    }
    return (
      this._client.get(`/accounts/${accountId}/load_balancers/search`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: SearchListResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type SearchListResponse = Array<unknown>;

export interface SearchListParams {
  page?: unknown;

  per_page?: unknown;

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
