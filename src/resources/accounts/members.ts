// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as MembersAPI from 'cloudflare/resources/accounts/members';
import * as RolesAPI from 'cloudflare/resources/accounts/roles';
import * as PermissionGroupsAPI from 'cloudflare/resources/user/tokens/permission-groups';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from 'cloudflare/pagination';

export class Members extends APIResource {
  /**
   * Add a user to the list of members for this account.
   */
  create(params: MemberCreateParams, options?: Core.RequestOptions): Core.APIPromise<MemberWithInviteCode> {
    const { account_id, ...body } = params;
    return (
      this._client.post(`/accounts/${account_id}/members`, { body, ...options }) as Core.APIPromise<{
        result: MemberWithInviteCode;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Modify an account member.
   */
  update(
    memberId: string,
    params: MemberUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Member> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}/members/${memberId}`, {
        body,
        ...options,
      }) as Core.APIPromise<{ result: Member }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all members of an account.
   */
  list(
    params: MemberListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MemberListResponsesV4PagePaginationArray, MemberListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      `/accounts/${account_id}/members`,
      MemberListResponsesV4PagePaginationArray,
      { query, ...options },
    );
  }

  /**
   * Remove a member from an account.
   */
  delete(
    memberId: string,
    params: MemberDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MemberDeleteResponse | null> {
    const { account_id, body } = params;
    return (
      this._client.delete(`/accounts/${account_id}/members/${memberId}`, {
        body: body,
        ...options,
      }) as Core.APIPromise<{ result: MemberDeleteResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get information about a specific member of an account.
   */
  get(memberId: string, params: MemberGetParams, options?: Core.RequestOptions): Core.APIPromise<Member> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/members/${memberId}`, options) as Core.APIPromise<{
        result: Member;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class MemberListResponsesV4PagePaginationArray extends V4PagePaginationArray<MemberListResponse> {}

export interface Member {
  /**
   * Membership identifier tag.
   */
  id: string;

  /**
   * Roles assigned to this member.
   */
  roles: Array<Member.Role>;

  status: unknown;

  user: Member.User;
}

export namespace Member {
  export interface Role {
    /**
     * Role identifier tag.
     */
    id: string;

    /**
     * Description of role's permissions.
     */
    description: string;

    /**
     * Role name.
     */
    name: string;

    permissions: PermissionGroupsAPI.Permission;
  }

  export interface User {
    /**
     * The contact email address of the user.
     */
    email: string;

    /**
     * Identifier
     */
    id?: string;

    /**
     * User's first name
     */
    first_name?: string | null;

    /**
     * User's last name
     */
    last_name?: string | null;

    /**
     * Indicates whether two-factor authentication is enabled for the user account.
     * Does not apply to API authentication.
     */
    two_factor_authentication_enabled?: boolean;
  }
}

/**
 * List of role names for the user at the account.
 */
export type MemberRoles = Array<string>;

export interface MemberWithInviteCode {
  /**
   * Membership identifier tag.
   */
  id: string;

  /**
   * Roles assigned to this member.
   */
  roles: Array<MemberWithInviteCode.Role>;

  status: unknown;

  user: MemberWithInviteCode.User;

  /**
   * The unique activation code for the account membership.
   */
  code?: string;
}

export namespace MemberWithInviteCode {
  export interface Role {
    /**
     * Role identifier tag.
     */
    id: string;

    /**
     * Description of role's permissions.
     */
    description: string;

    /**
     * Role name.
     */
    name: string;

    permissions: PermissionGroupsAPI.Permission;
  }

  export interface User {
    /**
     * The contact email address of the user.
     */
    email: string;

    /**
     * Identifier
     */
    id?: string;

    /**
     * User's first name
     */
    first_name?: string | null;

    /**
     * User's last name
     */
    last_name?: string | null;

    /**
     * Indicates whether two-factor authentication is enabled for the user account.
     * Does not apply to API authentication.
     */
    two_factor_authentication_enabled?: boolean;
  }
}

export interface MemberListResponse {
  /**
   * Identifier
   */
  id: string;

  /**
   * The contact email address of the user.
   */
  email: string;

  /**
   * Member Name.
   */
  name: string | null;

  /**
   * Roles assigned to this Member.
   */
  roles: Array<RolesAPI.Role>;

  /**
   * A member's status in the organization.
   */
  status: 'accepted' | 'invited';
}

export interface MemberDeleteResponse {
  /**
   * Identifier
   */
  id: string;
}

export interface MemberCreateParams {
  /**
   * Path param:
   */
  account_id: unknown;

  /**
   * Body param: The contact email address of the user.
   */
  email: string;

  /**
   * Body param: Array of roles associated with this member.
   */
  roles: Array<string>;

  /**
   * Body param:
   */
  status?: 'accepted' | 'pending';
}

export interface MemberUpdateParams {
  /**
   * Path param:
   */
  account_id: unknown;

  /**
   * Body param: Roles assigned to this member.
   */
  roles: Array<MemberUpdateParams.Role>;
}

export namespace MemberUpdateParams {
  export interface Role {
    /**
     * Role identifier tag.
     */
    id: string;
  }
}

export interface MemberListParams extends V4PagePaginationArrayParams {
  /**
   * Path param:
   */
  account_id: unknown;

  /**
   * Query param: Direction to order results.
   */
  direction?: 'asc' | 'desc';

  /**
   * Query param: Field to order results by.
   */
  order?: 'user.first_name' | 'user.last_name' | 'user.email' | 'status';

  /**
   * Query param: A member's status in the account.
   */
  status?: 'accepted' | 'pending' | 'rejected';
}

export interface MemberDeleteParams {
  /**
   * Path param:
   */
  account_id: unknown;

  /**
   * Body param:
   */
  body: unknown;
}

export interface MemberGetParams {
  account_id: unknown;
}

export namespace Members {
  export import Member = MembersAPI.Member;
  export import MemberRoles = MembersAPI.MemberRoles;
  export import MemberWithInviteCode = MembersAPI.MemberWithInviteCode;
  export import MemberListResponse = MembersAPI.MemberListResponse;
  export import MemberDeleteResponse = MembersAPI.MemberDeleteResponse;
  export import MemberListResponsesV4PagePaginationArray = MembersAPI.MemberListResponsesV4PagePaginationArray;
  export import MemberCreateParams = MembersAPI.MemberCreateParams;
  export import MemberUpdateParams = MembersAPI.MemberUpdateParams;
  export import MemberListParams = MembersAPI.MemberListParams;
  export import MemberDeleteParams = MembersAPI.MemberDeleteParams;
  export import MemberGetParams = MembersAPI.MemberGetParams;
}
