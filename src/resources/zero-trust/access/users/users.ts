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
   * Creates a new user.
   *
   * @example
   * ```ts
   * const user = await client.zeroTrust.access.users.create({
   *   account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   email: 'jdoe@example.com',
   * });
   * ```
   */
  create(params: UserCreateParams, options?: Core.RequestOptions): Core.APIPromise<UserCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/access/users`, { body, ...options }) as Core.APIPromise<{
        result: UserCreateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a specific user's name for an account. Requires the user's current email
   * as confirmation (email cannot be changed).
   *
   * @example
   * ```ts
   * const user = await client.zeroTrust.access.users.update(
   *   'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     email: 'jdoe@example.com',
   *     name: 'Jane Doe',
   *   },
   * );
   * ```
   */
  update(
    userId: string,
    params: UserUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/access/users/${userId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: UserUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

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

  /**
   * Deletes a specific user for an account. This will also revoke any active seats
   * and tokens for the user.
   *
   * @example
   * ```ts
   * const user = await client.zeroTrust.access.users.delete(
   *   'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  delete(
    userId: string,
    params: UserDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(`/accounts/${account_id}/access/users/${userId}`, options) as Core.APIPromise<{
        result: UserDeleteResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Gets a specific user for an account.
   *
   * @example
   * ```ts
   * const user = await client.zeroTrust.access.users.get(
   *   'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * );
   * ```
   */
  get(
    userId: string,
    params: UserGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<UserGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/access/users/${userId}`, options) as Core.APIPromise<{
        result: UserGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
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

export interface UserCreateResponse {
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

export interface UserUpdateResponse {
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

export type UserDeleteResponse = unknown;

export interface UserGetResponse {
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

export interface UserCreateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param: The email of the user.
   */
  email: string;

  /**
   * Body param: The name of the user.
   */
  name?: string;
}

export interface UserUpdateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param: The email of the user.
   */
  email: string;

  /**
   * Body param: The name of the user.
   */
  name: string;
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

export interface UserDeleteParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export interface UserGetParams {
  /**
   * Identifier.
   */
  account_id: string;
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
    type UserCreateResponse as UserCreateResponse,
    type UserUpdateResponse as UserUpdateResponse,
    type UserListResponse as UserListResponse,
    type UserDeleteResponse as UserDeleteResponse,
    type UserGetResponse as UserGetResponse,
    UserListResponsesV4PagePaginationArray as UserListResponsesV4PagePaginationArray,
    type UserCreateParams as UserCreateParams,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
    type UserDeleteParams as UserDeleteParams,
    type UserGetParams as UserGetParams,
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
