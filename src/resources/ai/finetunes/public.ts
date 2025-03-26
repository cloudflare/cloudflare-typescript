// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { PagePromise, SinglePage } from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Public extends APIResource {
  /**
   * List Public Finetunes
   */
  list(
    params: PublicListParams,
    options?: RequestOptions,
  ): PagePromise<PublicListResponsesSinglePage, PublicListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/ai/finetunes/public`,
      SinglePage<PublicListResponse>,
      { query, ...options },
    );
  }
}

export type PublicListResponsesSinglePage = SinglePage<PublicListResponse>;

export interface PublicListResponse {
  id: string;

  created_at: string;

  model: string;

  modified_at: string;

  name: string;

  public: boolean;

  description?: string;
}

export interface PublicListParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Query param: Pagination Limit
   */
  limit?: number;

  /**
   * Query param: Pagination Offset
   */
  offset?: number;

  /**
   * Query param: Order By Column Name
   */
  orderBy?: string;
}

export declare namespace Public {
  export {
    type PublicListResponse as PublicListResponse,
    type PublicListResponsesSinglePage as PublicListResponsesSinglePage,
    type PublicListParams as PublicListParams,
  };
}
