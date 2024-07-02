// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as SearchesAPI from './searches';

export class Searches extends APIResource {
  /**
   * Search for Load Balancing resources.
   */
  get(params: SearchGetParams, options?: Core.RequestOptions): Core.APIPromise<SearchGetResponse | null> {
    const { account_id, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/load_balancers/search`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: SearchGetResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type SearchGetResponse = Array<unknown>;

export interface SearchGetParams {
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
  search_params?: SearchGetParams.SearchParams;
}

export namespace SearchGetParams {
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
  export import SearchGetResponse = SearchesAPI.SearchGetResponse;
  export import SearchGetParams = SearchesAPI.SearchGetParams;
}
