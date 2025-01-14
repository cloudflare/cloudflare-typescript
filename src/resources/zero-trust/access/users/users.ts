// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as Core from '../../../../core';
import * as ActiveSessionsAPI from './active-sessions';
import {
  ActiveSessionGetParams,
  ActiveSessionGetResponse,
  ActiveSessionListParams,
  ActiveSessionListResponse,
  ActiveSessionListResponsesSinglePage,
  ActiveSessions,
} from './active-sessions';
import * as FailedLoginsAPI from './failed-logins';
import {
  FailedLoginListParams,
  FailedLoginListResponse,
  FailedLoginListResponsesSinglePage,
  FailedLogins,
} from './failed-logins';
import * as LastSeenIdentityAPI from './last-seen-identity';
import { Identity, LastSeenIdentity, LastSeenIdentityGetParams } from './last-seen-identity';
import { SinglePage } from '../../../../pagination';

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
    params: UserListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AccessUsersSinglePage, AccessUser> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(`/accounts/${account_id}/access/users`, AccessUsersSinglePage, {
      query,
      ...options,
    });
  }
}

export class AccessUsersSinglePage extends SinglePage<AccessUser> {}

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
   * Path param: Identifier
   */
  account_id: string;

  /**
   * Query param: The email of the user.
   */
  email?: string;

  /**
   * Query param: The name of the user.
   */
  name?: string;

  /**
   * Query param: Search for users by other listed query parameters.
   */
  search?: string;
}

Users.AccessUsersSinglePage = AccessUsersSinglePage;
Users.ActiveSessions = ActiveSessions;
Users.ActiveSessionListResponsesSinglePage = ActiveSessionListResponsesSinglePage;
Users.LastSeenIdentity = LastSeenIdentity;
Users.FailedLogins = FailedLogins;
Users.FailedLoginListResponsesSinglePage = FailedLoginListResponsesSinglePage;

export declare namespace Users {
  export {
    type AccessUser as AccessUser,
    AccessUsersSinglePage as AccessUsersSinglePage,
    type UserListParams as UserListParams,
  };

  export {
    ActiveSessions as ActiveSessions,
    type ActiveSessionListResponse as ActiveSessionListResponse,
    type ActiveSessionGetResponse as ActiveSessionGetResponse,
    ActiveSessionListResponsesSinglePage as ActiveSessionListResponsesSinglePage,
    type ActiveSessionListParams as ActiveSessionListParams,
    type ActiveSessionGetParams as ActiveSessionGetParams,
  };

  export {
    LastSeenIdentity as LastSeenIdentity,
    type Identity as Identity,
    type LastSeenIdentityGetParams as LastSeenIdentityGetParams,
  };

  export {
    FailedLogins as FailedLogins,
    type FailedLoginListResponse as FailedLoginListResponse,
    FailedLoginListResponsesSinglePage as FailedLoginListResponsesSinglePage,
    type FailedLoginListParams as FailedLoginListParams,
  };
}
