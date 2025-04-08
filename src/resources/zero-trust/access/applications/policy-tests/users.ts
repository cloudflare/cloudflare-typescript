// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import { PagePromise, SinglePage } from '../../../../../core/pagination';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Users extends APIResource {
  /**
   * Fetches a single page of user results from an Access policy test.
   */
  list(
    policyTestID: string,
    params: UserListParams,
    options?: RequestOptions,
  ): PagePromise<UserListResponsesSinglePage, UserListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/access/policy-tests/${policyTestID}/users`,
      SinglePage<UserListResponse>,
      { query, ...options },
    );
  }
}

export type UserListResponsesSinglePage = SinglePage<UserListResponse>;

export interface UserListResponse {
  /**
   * UUID.
   */
  id?: string;

  /**
   * The email of the user.
   */
  email?: string;

  /**
   * The name of the user.
   */
  name?: string;

  /**
   * Policy evaluation result for an individual user.
   */
  status?: 'approved' | 'blocked';
}

export interface UserListParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Query param: Filter users by their policy evaluation status.
   */
  status?: 'success' | 'fail';
}

export declare namespace Users {
  export {
    type UserListResponse as UserListResponse,
    type UserListResponsesSinglePage as UserListResponsesSinglePage,
    type UserListParams as UserListParams,
  };
}
