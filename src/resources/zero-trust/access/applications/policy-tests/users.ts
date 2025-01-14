// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../resource';
import * as Core from '../../../../../core';

export class Users extends APIResource {
  /**
   * Fetches a single page of user results from an Access policy test.
   */
  list(
    policyTestId: string,
    params: UserListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserListResponse> {
    const { account_id } = params;
    return this._client.get(`/accounts/${account_id}/access/policy-tests/${policyTestId}/users`, options);
  }
}

/**
 * Page of processed users.
 */
export type UserListResponse = Array<UserListResponse.UserListResponseItem>;

export namespace UserListResponse {
  export interface UserListResponseItem {
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
}

export interface UserListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export declare namespace Users {
  export { type UserListResponse as UserListResponse, type UserListParams as UserListParams };
}
