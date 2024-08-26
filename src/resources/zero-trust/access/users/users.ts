// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import { APIPromise } from '../../../../core';
import * as Core from '../../../../core';
import { ActiveSessions } from './active-sessions';
import { LastSeenIdentity } from './last-seen-identity';
import { FailedLogins } from './failed-logins';
import * as UsersAPI from './users';
import * as ActiveSessionsAPI from './active-sessions';
import * as FailedLoginsAPI from './failed-logins';
import * as LastSeenIdentityAPI from './last-seen-identity';
import { SinglePage } from '../../../../pagination';

export class Users extends APIResource {
  activeSessions: ActiveSessionsAPI.ActiveSessions = new ActiveSessionsAPI.ActiveSessions(this._client);
  lastSeenIdentity: LastSeenIdentityAPI.LastSeenIdentity = new LastSeenIdentityAPI.LastSeenIdentity(this._client);
  failedLogins: FailedLoginsAPI.FailedLogins = new FailedLoginsAPI.FailedLogins(this._client);

  /**
   * Gets a list of users for an account.
   */
  list(params: UserListParams, options?: Core.RequestOptions): Core.PagePromise<AccessUsersSinglePage, AccessUser> {
    const { account_id } = params;
    return this._client.getAPIList(`/accounts/${account_id}/access/users`, AccessUsersSinglePage, options);
  }
}

export class AccessUsersSinglePage extends SinglePage<AccessUser> {
}

export interface AccessUser {
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

export interface UserListParams {
  /**
   * Identifier
   */
  account_id: string;
}

export namespace Users {
  export import AccessUser = UsersAPI.AccessUser;
  export import AccessUsersSinglePage = UsersAPI.AccessUsersSinglePage;
  export import UserListParams = UsersAPI.UserListParams;
  export import ActiveSessions = ActiveSessionsAPI.ActiveSessions;
  export import ActiveSessionListResponse = ActiveSessionsAPI.ActiveSessionListResponse;
  export import ActiveSessionGetResponse = ActiveSessionsAPI.ActiveSessionGetResponse;
  export import ActiveSessionListResponsesSinglePage = ActiveSessionsAPI.ActiveSessionListResponsesSinglePage;
  export import ActiveSessionListParams = ActiveSessionsAPI.ActiveSessionListParams;
  export import ActiveSessionGetParams = ActiveSessionsAPI.ActiveSessionGetParams;
  export import LastSeenIdentity = LastSeenIdentityAPI.LastSeenIdentity;
  export import Identity = LastSeenIdentityAPI.Identity;
  export import LastSeenIdentityGetParams = LastSeenIdentityAPI.LastSeenIdentityGetParams;
  export import FailedLogins = FailedLoginsAPI.FailedLogins;
  export import FailedLoginListResponse = FailedLoginsAPI.FailedLoginListResponse;
  export import FailedLoginListResponsesSinglePage = FailedLoginsAPI.FailedLoginListResponsesSinglePage;
  export import FailedLoginListParams = FailedLoginsAPI.FailedLoginListParams;
}
