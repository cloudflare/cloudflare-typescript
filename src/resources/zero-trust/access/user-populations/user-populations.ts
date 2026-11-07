// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as UsersAPI from './users';
import {
  BaseUsers,
  UserCreateParams,
  UserCreateResponse,
  UserDeleteParams,
  UserGetParams,
  UserGetResponse,
  UserListParams,
  UserListResponse,
  UserReplaceParams,
  UserReplaceResponse,
  UserUpdateParams,
  UserUpdateResponse,
  Users,
} from './users';
import { APIPromise } from '../../../../core/api-promise';
import {
  PagePromise,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../../../core/pagination';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseUserPopulations extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'access', 'userPopulations'] = Object.freeze([
    'zeroTrust',
    'access',
    'userPopulations',
  ] as const);

  /**
   * Creates a user population in an account.
   *
   * @example
   * ```ts
   * const userPopulation =
   *   await client.zeroTrust.access.userPopulations.create({
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     name: 'Employees',
   *   });
   * ```
   */
  create(
    params: UserPopulationCreateParams,
    options?: RequestOptions,
  ): APIPromise<UserPopulationCreateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/access/user_populations`, {
        body,
        ...options,
      }) as APIPromise<{ result: UserPopulationCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Updates a user population's name.
   *
   * @example
   * ```ts
   * const userPopulation =
   *   await client.zeroTrust.access.userPopulations.update(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     {
   *       account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *       name: 'Employees',
   *     },
   *   );
   * ```
   */
  update(
    userPopulationID: string,
    params: UserPopulationUpdateParams,
    options?: RequestOptions,
  ): APIPromise<UserPopulationUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/access/user_populations/${userPopulationID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: UserPopulationUpdateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Lists the user populations in an account.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const userPopulationListResponse of client.zeroTrust.access.userPopulations.list(
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    params: UserPopulationListParams,
    options?: RequestOptions,
  ): PagePromise<UserPopulationListResponsesV4PagePaginationArray, UserPopulationListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/access/user_populations`,
      V4PagePaginationArray<UserPopulationListResponse>,
      { query, ...options },
    );
  }

  /**
   * Deletes a user population that is not attached to an application.
   *
   * @example
   * ```ts
   * const userPopulation =
   *   await client.zeroTrust.access.userPopulations.delete(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  delete(
    userPopulationID: string,
    params: UserPopulationDeleteParams,
    options?: RequestOptions,
  ): APIPromise<UserPopulationDeleteResponse> {
    const { account_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/access/user_populations/${userPopulationID}`,
        options,
      ) as APIPromise<{ result: UserPopulationDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Fetches a user population.
   *
   * @example
   * ```ts
   * const userPopulation =
   *   await client.zeroTrust.access.userPopulations.get(
   *     'f174e90a-fafe-4643-bbbc-4a0ed4fc8415',
   *     { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   *   );
   * ```
   */
  get(
    userPopulationID: string,
    params: UserPopulationGetParams,
    options?: RequestOptions,
  ): APIPromise<UserPopulationGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/access/user_populations/${userPopulationID}`,
        options,
      ) as APIPromise<{ result: UserPopulationGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class UserPopulations extends BaseUserPopulations {
  users: UsersAPI.Users = new UsersAPI.Users(this._client);
}

export type UserPopulationListResponsesV4PagePaginationArray =
  V4PagePaginationArray<UserPopulationListResponse>;

export interface UserPopulationCreateResponse {
  /**
   * UUID.
   */
  id: string;

  /**
   * The name of the user population. Leading and trailing whitespace is trimmed
   * before validation. After trimming, the name must contain at least one
   * non-whitespace character and must not exceed 128 UTF-8 bytes.
   */
  name: string;
}

export interface UserPopulationUpdateResponse {
  /**
   * UUID.
   */
  id: string;

  /**
   * The name of the user population. Leading and trailing whitespace is trimmed
   * before validation. After trimming, the name must contain at least one
   * non-whitespace character and must not exceed 128 UTF-8 bytes.
   */
  name: string;
}

export interface UserPopulationListResponse {
  /**
   * UUID.
   */
  id: string;

  /**
   * The name of the user population. Leading and trailing whitespace is trimmed
   * before validation. After trimming, the name must contain at least one
   * non-whitespace character and must not exceed 128 UTF-8 bytes.
   */
  name: string;
}

export interface UserPopulationDeleteResponse {
  /**
   * UUID.
   */
  id?: string;
}

export interface UserPopulationGetResponse {
  /**
   * UUID.
   */
  id: string;

  /**
   * The name of the user population. Leading and trailing whitespace is trimmed
   * before validation. After trimming, the name must contain at least one
   * non-whitespace character and must not exceed 128 UTF-8 bytes.
   */
  name: string;
}

export interface UserPopulationCreateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param: The name of the user population. Leading and trailing whitespace is
   * trimmed before validation. After trimming, the name must contain at least one
   * non-whitespace character and must not exceed 128 UTF-8 bytes.
   */
  name: string;
}

export interface UserPopulationUpdateParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;

  /**
   * Body param: The name of the user population. Leading and trailing whitespace is
   * trimmed before validation. After trimming, the name must contain at least one
   * non-whitespace character and must not exceed 128 UTF-8 bytes.
   */
  name: string;
}

export interface UserPopulationListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Identifier.
   */
  account_id: string;
}

export interface UserPopulationDeleteParams {
  /**
   * Identifier.
   */
  account_id: string;
}

export interface UserPopulationGetParams {
  /**
   * Identifier.
   */
  account_id: string;
}

UserPopulations.Users = Users;
UserPopulations.BaseUsers = BaseUsers;

export declare namespace UserPopulations {
  export {
    type UserPopulationCreateResponse as UserPopulationCreateResponse,
    type UserPopulationUpdateResponse as UserPopulationUpdateResponse,
    type UserPopulationListResponse as UserPopulationListResponse,
    type UserPopulationDeleteResponse as UserPopulationDeleteResponse,
    type UserPopulationGetResponse as UserPopulationGetResponse,
    type UserPopulationListResponsesV4PagePaginationArray as UserPopulationListResponsesV4PagePaginationArray,
    type UserPopulationCreateParams as UserPopulationCreateParams,
    type UserPopulationUpdateParams as UserPopulationUpdateParams,
    type UserPopulationListParams as UserPopulationListParams,
    type UserPopulationDeleteParams as UserPopulationDeleteParams,
    type UserPopulationGetParams as UserPopulationGetParams,
  };

  export {
    Users as Users,
    BaseUsers as BaseUsers,
    type UserCreateResponse as UserCreateResponse,
    type UserUpdateResponse as UserUpdateResponse,
    type UserListResponse as UserListResponse,
    type UserGetResponse as UserGetResponse,
    type UserReplaceResponse as UserReplaceResponse,
    type UserCreateParams as UserCreateParams,
    type UserUpdateParams as UserUpdateParams,
    type UserListParams as UserListParams,
    type UserDeleteParams as UserDeleteParams,
    type UserGetParams as UserGetParams,
    type UserReplaceParams as UserReplaceParams,
  };
}
