// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { PagePromise, SinglePage } from '../../pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Authors extends APIResource {
  /**
   * Author Search
   */
  list(
    params: AuthorListParams,
    options?: RequestOptions,
  ): PagePromise<AuthorListResponsesSinglePage, AuthorListResponse> {
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/ai/authors/search`,
      SinglePage<AuthorListResponse>,
      options,
    );
  }
}

export type AuthorListResponsesSinglePage = SinglePage<AuthorListResponse>;

export type AuthorListResponse = unknown;

export interface AuthorListParams {
  account_id: string;
}

export declare namespace Authors {
  export {
    type AuthorListResponse as AuthorListResponse,
    type AuthorListResponsesSinglePage as AuthorListResponsesSinglePage,
    type AuthorListParams as AuthorListParams,
  };
}
