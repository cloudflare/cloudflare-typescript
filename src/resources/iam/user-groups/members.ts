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

export class BaseMembers extends APIResource {
  static override readonly _key: readonly ['iam', 'userGroups', 'members'] = Object.freeze([
    'iam',
    'userGroups',
    'members',
  ] as const);

  /**
   * Add members to a User Group.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const memberCreateResponse of client.iam.userGroups.members.create(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     members: [{ id: '023e105f4ecef8ad9ca31a8372d0c353' }],
   *   },
   * )) {
   *   // ...
   * }
   * ```
   */
  create(
    userGroupID: string,
    params: MemberCreateParams,
    options?: RequestOptions,
  ): PagePromise<MemberCreateResponsesSinglePage, MemberCreateResponse> {
    const { account_id, members } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/iam/user_groups/${userGroupID}/members`,
      SinglePage<MemberCreateResponse>,
      { body: members, method: 'post', ...options },
    );
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
   *     members: [{ id: '023e105f4ecef8ad9ca31a8372d0c353' }],
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
    const { account_id, members } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/iam/user_groups/${userGroupID}/members`,
      SinglePage<MemberUpdateResponse>,
      { body: members, method: 'put', ...options },
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

  /**
   * Get details of a specific member in a user group.
   *
   * @example
   * ```ts
   * const member = await client.iam.userGroups.members.get(
   *   '023e105f4ecef8ad9ca31a8372d0c353',
   *   {
   *     account_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *     user_group_id: '023e105f4ecef8ad9ca31a8372d0c353',
   *   },
   * );
   * ```
   */
  get(memberID: string, params: MemberGetParams, options?: RequestOptions): APIPromise<MemberGetResponse> {
    const { account_id, user_group_id } = params;
    return (
      this._client.get(
        path`/accounts/${account_id}/iam/user_groups/${user_group_id}/members/${memberID}`,
        options,
      ) as APIPromise<{ result: MemberGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Members extends BaseMembers {}

export type MemberCreateResponsesSinglePage = SinglePage<MemberCreateResponse>;

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

/**
 * Detailed member information for a User Group member.
 */
export interface MemberGetResponse {
  /**
   * Account member identifier.
   */
  id: string;

  /**
   * When the member was added to the user group.
   */
  created_at?: string;

  /**
   * The contact email address of the user.
   */
  email?: string;

  /**
   * The member's status in the account.
   */
  status?: 'accepted' | 'pending';

  /**
   * Details of the user associated with this membership.
   */
  user?: MemberGetResponse.User;
}

export namespace MemberGetResponse {
  /**
   * Details of the user associated with this membership.
   */
  export interface User {
    /**
     * User identifier tag.
     */
    id?: string;

    /**
     * The contact email address of the user.
     */
    email?: string;

    /**
     * User's first name.
     */
    first_name?: string;

    /**
     * User's last name.
     */
    last_name?: string;
  }
}

export interface MemberCreateParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

  /**
   * Body param
   */
  members: Array<MemberCreateParams.Member>;
}

export namespace MemberCreateParams {
  export interface Member {
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
  members: Array<MemberUpdateParams.Member>;
}

export namespace MemberUpdateParams {
  export interface Member {
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

  /**
   * Query param: The sort order of returned user group members by email.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: A string used for filtering members by partial email match.
   */
  fuzzyEmail?: string;
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

export interface MemberGetParams {
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
    type MemberGetResponse as MemberGetResponse,
    type MemberCreateResponsesSinglePage as MemberCreateResponsesSinglePage,
    type MemberUpdateResponsesSinglePage as MemberUpdateResponsesSinglePage,
    type MemberListResponsesV4PagePaginationArray as MemberListResponsesV4PagePaginationArray,
    type MemberCreateParams as MemberCreateParams,
    type MemberUpdateParams as MemberUpdateParams,
    type MemberListParams as MemberListParams,
    type MemberDeleteParams as MemberDeleteParams,
    type MemberGetParams as MemberGetParams,
  };
}
