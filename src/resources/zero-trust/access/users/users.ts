// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as UsersAPI from 'cloudflare/resources/zero-trust/access/users/users';
import * as ActiveSessionsAPI from 'cloudflare/resources/zero-trust/access/users/active-sessions';
import * as FailedLoginsAPI from 'cloudflare/resources/zero-trust/access/users/failed-logins';
import * as LastSeenIdentityAPI from 'cloudflare/resources/zero-trust/access/users/last-seen-identity';
import { SinglePage } from 'cloudflare/pagination';

export class Users extends APIResource {
  activeSessions: ActiveSessionsAPI.ActiveSessions = new ActiveSessionsAPI.ActiveSessions(this._client);
  lastSeenIdentity: LastSeenIdentityAPI.LastSeenIdentity = new LastSeenIdentityAPI.LastSeenIdentity(
    this._client,
  );
  failedLogins: FailedLoginsAPI.FailedLogins = new FailedLoginsAPI.FailedLogins(this._client);

  /**
   * Gets a list of users for an account.
   */
  list(
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<ZeroTrustUsersSinglePage, ZeroTrustUsers> {
    return this._client.getAPIList(`/accounts/${identifier}/access/users`, ZeroTrustUsersSinglePage, options);
  }
}

export class ZeroTrustUsersSinglePage extends SinglePage<ZeroTrustUsers> {}

export interface ZeroTrustUsers {
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
  seat_uid?: string;

  /**
   * The unique API identifier for the user.
   */
  uid?: string;

  updated_at?: string;
}

export namespace Users {
  export import ZeroTrustUsers = UsersAPI.ZeroTrustUsers;
  export import ZeroTrustUsersSinglePage = UsersAPI.ZeroTrustUsersSinglePage;
  export import ActiveSessions = ActiveSessionsAPI.ActiveSessions;
  export import ActiveSessionListResponse = ActiveSessionsAPI.ActiveSessionListResponse;
  export import ActiveSessionGetResponse = ActiveSessionsAPI.ActiveSessionGetResponse;
  export import ActiveSessionListResponsesSinglePage = ActiveSessionsAPI.ActiveSessionListResponsesSinglePage;
  export import LastSeenIdentity = LastSeenIdentityAPI.LastSeenIdentity;
  export import ZeroTrustIdentity = LastSeenIdentityAPI.ZeroTrustIdentity;
  export import FailedLogins = FailedLoginsAPI.FailedLogins;
  export import FailedLoginListResponse = FailedLoginsAPI.FailedLoginListResponse;
  export import FailedLoginListResponsesSinglePage = FailedLoginsAPI.FailedLoginListResponsesSinglePage;
}
