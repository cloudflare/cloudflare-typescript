// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';

export class Users extends APIResource {
  /**
   * List users emails associated with devices with WARP client support for remote
   * captures which have been connected in the last 1 hour.
   */
  list(params: UserListParams, options?: Core.RequestOptions): Core.APIPromise<UserListResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/dex/commands/users`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: UserListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface UserListResponse {
  /**
   * List of user emails
   */
  userEmails?: Array<string>;
}

export interface UserListParams {
  /**
   * Path param: unique identifier linked to an account in the API request path
   */
  account_id: string;

  /**
   * Query param: filter user emails by search
   */
  search?: string;
}

export declare namespace Users {
  export { type UserListResponse as UserListResponse, type UserListParams as UserListParams };
}
