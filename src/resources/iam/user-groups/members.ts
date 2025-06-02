// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import { APIPromise } from '../../../core/api-promise';
import {
  PagePromise,
  SinglePage,
  V4PagePaginationArray,
  type V4PagePaginationArrayParams,
} from '../../../core/pagination';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Members extends APIResource {
  /**
   * Add members to a User Group.
   *
   * @example
   * ```ts
   * const member = await client.iam.userGroups.members.create(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     body: [{ id: '023e105f4ecef8ad9ca31a8372d0c353' }],
   *   },
   * );
   * ```
   */
  create(
    userGroupID: string,
    params: MemberCreateParams,
    options?: RequestOptions,
  ): APIPromise<MemberCreateResponse> {
    const { account_id, body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/iam/user_groups/${userGroupID}/members`, {
        body: body,
        ...options,
      }) as APIPromise<{ result: MemberCreateResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Replace the set of members attached to a User Group.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const memberUpdateResponse of client.iam.userGroups.members.update(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     body: [{ id: '023e105f4ecef8ad9ca31a8372d0c353' }],
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  update(
    userGroupID: string,
    params: MemberUpdateParams,
    options?: RequestOptions,
  ): PagePromise<MemberUpdateResponsesSinglePage, MemberUpdateResponse> {
    const { account_id, body } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/iam/user_groups/${userGroupID}/members`,
      SinglePage<MemberUpdateResponse>,
      { body: body, method: 'put', ...options },
    );
  }

  /**
   * List all the members attached to a user group.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const memberListResponse of client.iam.userGroups.members.list(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   { account_id: '023e105f4ecef8ad9ca31a8372d0c353' },
   * )) {
   *   // ...
   * }
   * ```
   */
  list(
    userGroupID: string,
    params: MemberListParams,
    options?: RequestOptions,
  ): PagePromise<MemberListResponsesV4PagePaginationArray, MemberListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/iam/user_groups/${userGroupID}/members`,
      V4PagePaginationArray<MemberListResponse>,
      { query, ...options },
    );
  }

  /**
   * Remove a member from User Group
   *
   * @example
   * ```ts
   * const member = await client.iam.userGroups.members.delete(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     user_group_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   },
   * );
   * ```
   */
  delete(
    memberID: string,
    params: MemberDeleteParams,
    options?: RequestOptions,
  ): APIPromise<MemberDeleteResponse> {
    const { account_id, user_group_id } = params;
    return (
      this._client.delete(
        path`/accounts/${account_id}/iam/user_groups/${user_group_id}/members/${memberID}`,
        options,
      ) as APIPromise<{ result: MemberDeleteResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type MemberUpdateResponsesSinglePage = SinglePage<MemberUpdateResponse>;

export type MemberListResponsesV4PagePaginationArray = V4PagePaginationArray<MemberListResponse>;

/**
 * Member attached to a User Group.
 */
export interface MemberCreateResponse {
  /**
   * Account member identifier.
   */
  id: string;

  /**
   * The contact email address of the user.
   */
  email?: string;

  /**
   * The member's status in the account.
   */
  status?: 'accepted' | 'pending';
}

/**
 * Member attached to a User Group.
 */
export interface MemberUpdateResponse {
  /**
   * Account member identifier.
   */
  id: string;

  /**
   * The contact email address of the user.
   */
  email?: string;

  /**
   * The member's status in the account.
   */
  status?: 'accepted' | 'pending';
}

/**
 * Member attached to a User Group.
 */
export interface MemberListResponse {
  /**
   * Account member identifier.
   */
  id: string;

  /**
   * The contact email address of the user.
   */
  email?: string;

  /**
   * The member's status in the account.
   */
  status?: 'accepted' | 'pending';
}

/**
 * Member attached to a User Group.
 */
export interface MemberDeleteResponse {
  /**
   * Account member identifier.
   */
  id: string;

  /**
   * The contact email address of the user.
   */
  email?: string;

  /**
   * The member's status in the account.
   */
  status?: 'accepted' | 'pending';
}

export interface MemberCreateParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

  /**
   * Body param:
   */
  body: Array<MemberCreateParams.Body>;
}

export namespace MemberCreateParams {
  export interface Body {
    /**
     * The identifier of an existing account Member.
     */
    id: string;
  }
}

export interface MemberUpdateParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

  /**
   * Body param: Set/Replace members to a user group.
   */
  body: Array<MemberUpdateParams.Body>;
}

export namespace MemberUpdateParams {
  export interface Body {
    /**
     * The identifier of an existing account Member.
     */
    id: string;
  }
}

export interface MemberListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;
}

export interface MemberDeleteParams {
  /**
   * Account identifier tag.
   */
  account_id: string;

  /**
   * User Group identifier tag.
   */
  user_group_id: string;
}

export declare namespace Members {
  export {
    type MemberCreateResponse as MemberCreateResponse,
    type MemberUpdateResponse as MemberUpdateResponse,
    type MemberListResponse as MemberListResponse,
    type MemberDeleteResponse as MemberDeleteResponse,
    type MemberUpdateResponsesSinglePage as MemberUpdateResponsesSinglePage,
    type MemberListResponsesV4PagePaginationArray as MemberListResponsesV4PagePaginationArray,
    type MemberCreateParams as MemberCreateParams,
    type MemberUpdateParams as MemberUpdateParams,
    type MemberListParams as MemberListParams,
    type MemberDeleteParams as MemberDeleteParams,
  };
}
