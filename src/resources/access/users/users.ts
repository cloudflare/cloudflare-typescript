// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as UsersAPI from 'cloudflare/resources/access/users/users';
import * as ActiveSessionsAPI from 'cloudflare/resources/access/users/active-sessions';
import * as FailedLoginsAPI from 'cloudflare/resources/access/users/failed-logins';
import * as LastSeenIdentityAPI from 'cloudflare/resources/access/users/last-seen-identity';

export class Users extends APIResource {
  activeSessions: ActiveSessionsAPI.ActiveSessions = new ActiveSessionsAPI.ActiveSessions(this._client);
  lastSeenIdentity: LastSeenIdentityAPI.LastSeenIdentity = new LastSeenIdentityAPI.LastSeenIdentity(
    this._client,
  );
  failedLogins: FailedLoginsAPI.FailedLogins = new FailedLoginsAPI.FailedLogins(this._client);

  /**
   * Gets a list of users for an account.
   */
  list(identifier: string, options?: Core.RequestOptions): Core.APIPromise<UserListResponse | null> {
    return (
      this._client.get(`/accounts/${identifier}/access/users`, options) as Core.APIPromise<{
        result: UserListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type UserListResponse = Array<UserListResponse.UserListResponseItem>;

export namespace UserListResponse {
  export interface UserListResponseItem {
    /**
     * UUID
     */
    id?: string;

    /**
     * True if the user has authenticated with Cloudflare Access.
     */
    access_seat?: boolean;

    /**
     * The number of active devices registered to the user.
     */
    active_device_count?: number;

    created_at?: string;

    /**
     * The email of the user.
     */
    email?: string;

    /**
     * True if the user has logged into the WARP client.
     */
    gateway_seat?: boolean;

    /**
     * The time at which the user last successfully logged in.
     */
    last_successful_login?: string;

    /**
     * The name of the user.
     */
    name?: string;

    /**
     * The unique API identifier for the Zero Trust seat.
     */
    seat_uid?: unknown;

    /**
     * The unique API identifier for the user.
     */
    uid?: unknown;

    updated_at?: string;
  }
}

export namespace Users {
  export import UserListResponse = UsersAPI.UserListResponse;
  export import ActiveSessions = ActiveSessionsAPI.ActiveSessions;
  export import ActiveSessionRetrieveResponse = ActiveSessionsAPI.ActiveSessionRetrieveResponse;
  export import ActiveSessionListResponse = ActiveSessionsAPI.ActiveSessionListResponse;
  export import LastSeenIdentity = LastSeenIdentityAPI.LastSeenIdentity;
  export import LastSeenIdentityRetrieveResponse = LastSeenIdentityAPI.LastSeenIdentityRetrieveResponse;
  export import FailedLogins = FailedLoginsAPI.FailedLogins;
  export import FailedLoginZeroTrustUsersGetFailedLoginsResponse = FailedLoginsAPI.FailedLoginZeroTrustUsersGetFailedLoginsResponse;
}
