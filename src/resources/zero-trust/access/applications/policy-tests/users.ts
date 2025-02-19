// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import * as Core from '../../../../../core';
import { SinglePage } from '../../../../../pagination';

export class Users extends APIResource {
  /**
   * Fetches a single page of user results from an Access policy test.
   */
  list(
    policyTestId: string,
    params: UserListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<UserListResponsesSinglePage, UserListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/access/policy-tests/${policyTestId}/users`,
      UserListResponsesSinglePage,
      { query, ...options },
    );
  }
}

export class UserListResponsesSinglePage extends SinglePage<UserListResponse> {}

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
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Query param: Filter users by their policy evaluation status.
   */
  status?: 'success' | 'fail';
}

Users.UserListResponsesSinglePage = UserListResponsesSinglePage;

export declare namespace Users {
  export {
    type UserListResponse as UserListResponse,
    UserListResponsesSinglePage as UserListResponsesSinglePage,
    type UserListParams as UserListParams,
  };
}
