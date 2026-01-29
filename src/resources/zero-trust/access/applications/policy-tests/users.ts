// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import {
  PagePromise,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../../../../core/pagination';
import { RequestOptions } from '../../../../../internal/request-options';
import { path } from '../../../../../internal/utils/path';

export class Users extends APIResource {
  /**
   * Fetches a single page of user results from an Access policy test.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const userListResponse of client.zeroTrust.access.applications.policyTests.users.list(
   *   'f1a8b3c9d4e5f6789a0b1c2d3e4f5678a9b0c1d2e3f4a5b67890c1d2e3f4b5a6',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    policyTestID: string,
    params: UserListParams,
    options?: RequestOptions,
  ): PagePromise<UserListResponsesV4PagePaginationArray, UserListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/access/policy-tests/${policyTestID}/users`,
      V4PagePaginationArray<UserListResponse>,
      { query, ...options },
    );
  }
}

export type UserListResponsesV4PagePaginationArray = V4PagePaginationArray<UserListResponse>;

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
  status?: 'approved' | 'blocked' | 'error';
}

export interface UserListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Query param: Filter users by their policy evaluation status.
   */
  status?: 'success' | 'fail' | 'error';
}

export declare namespace Users {
  export {
    type UserListResponse as UserListResponse,
    type UserListResponsesV4PagePaginationArray as UserListResponsesV4PagePaginationArray,
    type UserListParams as UserListParams,
  };
}
