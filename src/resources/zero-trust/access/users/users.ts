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
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../../../pagination';

export class Users extends APIResource {
  activeSessions: ActiveSessionsAPI.ActiveSessions = new ActiveSessionsAPI.ActiveSessions(this._client);
  lastSeenIdentity: LastSeenIdentityAPI.LastSeenIdentity = new LastSeenIdentityAPI.LastSeenIdentity(
    this._client,
  );
  failedLogins: FailedLoginsAPI.FailedLogins = new FailedLoginsAPI.FailedLogins(this._client);

  /**
   * Gets a list of users for an account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const userListResponse of client.zeroTrust.access.users.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: UserListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<UserListResponsesV4PagePaginationArray, UserListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/access/users`,
      UserListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }
}

export class UserListResponsesV4PagePaginationArray extends V4PagePaginationArray<UserListResponse> {}

export class AccessUsersV4PagePaginationArray extends V4PagePaginationArray<AccessUser> {}

export interface AccessUser {
  /**
   * The unique Cloudflare-generated Id of the SCIM resource.
   */
  id?: string;

  /**
   * Determines the status of the SCIM User resource.
   */
  active?: boolean;

  /**
   * The name of the SCIM User resource.
   */
  displayName?: string;

  emails?: Array<AccessUser.Email>;

  /**
   * The IdP-generated Id of the SCIM resource.
   */
  externalId?: string;

  /**
   * The metadata of the SCIM resource.
   */
  meta?: AccessUser.Meta;

  /**
   * The list of URIs which indicate the attributes contained within a SCIM resource.
   */
  schemas?: Array<string>;
}

export namespace AccessUser {
  export interface Email {
    /**
     * Indicates if the email address is the primary email belonging to the SCIM User
     * resource.
     */
    primary?: boolean;

    /**
     * Indicates the type of the email address.
     */
    type?: string;

    /**
     * The email address of the SCIM User resource.
     */
    value?: string;
  }

  /**
   * The metadata of the SCIM resource.
   */
  export interface Meta {
    /**
     * The timestamp of when the SCIM resource was created.
     */
    created?: string;

    /**
     * The timestamp of when the SCIM resource was last modified.
     */
    lastModified?: string;
  }
}

export interface UserListResponse {
  /**
   * UUID.
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

export interface UserListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier.
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

Users.UserListResponsesV4PagePaginationArray = UserListResponsesV4PagePaginationArray;
Users.ActiveSessions = ActiveSessions;
Users.ActiveSessionListResponsesSinglePage = ActiveSessionListResponsesSinglePage;
Users.LastSeenIdentity = LastSeenIdentity;
Users.FailedLogins = FailedLogins;
Users.FailedLoginListResponsesSinglePage = FailedLoginListResponsesSinglePage;

export declare namespace Users {
  export {
    type AccessUser as AccessUser,
    type UserListResponse as UserListResponse,
    UserListResponsesV4PagePaginationArray as UserListResponsesV4PagePaginationArray,
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
