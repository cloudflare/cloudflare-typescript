// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import { PagePromise, SinglePage } from '../../../../../pagination';
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
    const { account_id } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/access/policy-tests/${policyTestID}/users`,
      SinglePage<UserListResponse>,
      options,
    );
  }
}

export type UserListResponsesSinglePage = SinglePage<UserListResponse>;

export interface UserListResponse {
  /**
   * UUID
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
   * Identifier
   */
  account_id: string;
}

export declare namespace Users {
  export {
    type UserListResponse as UserListResponse,
    type UserListResponsesSinglePage as UserListResponsesSinglePage,
    type UserListParams as UserListParams,
  };
}
