// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as SearchesAPI from './searches';

export class Searches extends APIResource {
  /**
   * Search for Load Balancing resources.
   */
  get(params: SearchGetParams, options?: Core.RequestOptions): Core.APIPromise<SearchGetResponse> {
    const { account_id, ...query } = params;
    return (this._client.get(`/accounts/${account_id}/load_balancers/search`, { query, ...options }) as Core.APIPromise<{ result: SearchGetResponse }>)._thenUnwrap((obj) => obj.result);
  }
}

export interface SearchGetResponse {
  /**
   * A list of resources matching the search query.
   */
  resources?: Array<SearchGetResponse.Resource>;
}

export namespace SearchGetResponse {
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

export interface SearchGetParams {
  /**
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Query param:
   */
  page?: number;

  /**
   * Query param:
   */
  per_page?: number;

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
