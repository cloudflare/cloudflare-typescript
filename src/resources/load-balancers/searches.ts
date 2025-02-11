// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { V4PagePagination, type V4PagePaginationParams } from '../../pagination';

export class Searches extends APIResource {
  /**
   * Search for Load Balancing resources.
   */
  list(
    params: SearchListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<SearchListResponsesV4PagePagination, SearchListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/load_balancers/search`,
      SearchListResponsesV4PagePagination,
      { query, ...options },
    );
  }
}

export class SearchListResponsesV4PagePagination extends V4PagePagination<SearchListResponse> {}

export interface SearchListResponse {
  /**
   * A list of resources matching the search query.
   */
  resources?: Array<SearchListResponse.Resource>;
}

export namespace SearchListResponse {
  /**
   * A reference to a load balancer resource.
   */
  export interface Resource {
    /**
     * When listed as a reference, the type (direction) of the reference.
     */
    reference_type?: 'referral' | 'referrer';

    /**
     * A list of references to (referrer) or from (referral) this resource.
     */
    references?: Array<unknown>;

    resource_id?: string;

    /**
     * The human-identifiable name of the resource.
     */
    resource_name?: string;

    /**
     * The type of the resource.
     */
    resource_type?: 'load_balancer' | 'monitor' | 'pool';
  }
}

export interface SearchListParams extends V4PagePaginationParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

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

Searches.SearchListResponsesV4PagePagination = SearchListResponsesV4PagePagination;

export declare namespace Searches {
  export {
    type SearchListResponse as SearchListResponse,
    SearchListResponsesV4PagePagination as SearchListResponsesV4PagePagination,
    type SearchListParams as SearchListParams,
  };
}
