// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Shared from '../shared';
import { MembersV4PagePaginationArray } from '../shared';
import { APIPromise } from '../../api-promise';
import { PagePromise, V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class Members extends APIResource {
  /**
   * Add a user to the list of members for this account.
   */
  create(params: MemberCreateParams, options?: RequestOptions): APIPromise<Shared.Member> {
    const { account_id, ...body } = params;
    return (
      this._client.post(path`/accounts/${account_id}/members`, { body, ...options }) as APIPromise<{
        result: Shared.Member;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Modify an account member.
   */
  update(memberID: string, params: MemberUpdateParams, options?: RequestOptions): APIPromise<Shared.Member> {
    const { account_id, ...body } = params;
    return (
      this._client.put(path`/accounts/${account_id}/members/${memberID}`, {
        body,
        ...options,
      }) as APIPromise<{ result: Shared.Member }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all members of an account.
   */
  list(
    params: MemberListParams,
    options?: RequestOptions,
  ): PagePromise<MembersV4PagePaginationArray, Shared.Member> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(
      path`/accounts/${account_id}/members`,
      V4PagePaginationArray<Shared.Member>,
      { query, ...options },
    );
  }

  /**
   * Remove a member from an account.
   */
  delete(
    memberID: string,
    params: MemberDeleteParams,
    options?: RequestOptions,
  ): APIPromise<MemberDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(path`/accounts/${account_id}/members/${memberID}`, options) as APIPromise<{
        result: MemberDeleteResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get information about a specific member of an account.
   */
  get(memberID: string, params: MemberGetParams, options?: RequestOptions): APIPromise<Shared.Member> {
    const { account_id } = params;
    return (
      this._client.get(path`/accounts/${account_id}/members/${memberID}`, options) as APIPromise<{
        result: Shared.Member;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Whether the user is a member of the organization or has an invitation pending.
 */
export type Status = 'member' | 'invited';

export interface MemberDeleteResponse {
  /**
   * Identifier
   */
  id: string;
}

export type MemberCreateParams =
  | MemberCreateParams.IAMCreateMemberWithRoles
  | MemberCreateParams.IAMCreateMemberWithPolicies;

export declare namespace MemberCreateParams {
  export interface IAMCreateMemberWithRoles {
    /**
     * Path param: Account identifier tag.
     */
    account_id: string;

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

  export interface IAMCreateMemberWithPolicies {
    /**
     * Path param: Account identifier tag.
     */
    account_id: string;

    /**
     * Body param: The contact email address of the user.
     */
    email: string;

    /**
     * Body param: Array of policies associated with this member.
     */
    policies: Array<IAMCreateMemberWithPolicies.Policy>;

    /**
     * Body param:
     */
    status?: 'accepted' | 'pending';
  }

  export namespace IAMCreateMemberWithPolicies {
    export interface Policy {
      /**
       * Allow or deny operations against the resources.
       */
      access: 'allow' | 'deny';

      /**
       * A set of permission groups that are specified to the policy.
       */
      permission_groups: Array<Policy.PermissionGroup>;

      /**
       * A list of resource groups that the policy applies to.
       */
      resource_groups: Array<Policy.ResourceGroup>;
    }

    export namespace Policy {
      /**
       * A group of permissions.
       */
      export interface PermissionGroup {
        /**
         * Identifier of the group.
         */
        id: string;
      }

      /**
       * A group of scoped resources.
       */
      export interface ResourceGroup {
        /**
         * Identifier of the group.
         */
        id: string;
      }
    }
  }
}

export type MemberUpdateParams =
  | MemberUpdateParams.IAMUpdateMemberWithRoles
  | MemberUpdateParams.IAMUpdateMemberWithPolicies;

export declare namespace MemberUpdateParams {
  export interface IAMUpdateMemberWithRoles {
    /**
     * Path param: Account identifier tag.
     */
    account_id: string;

    /**
     * Body param: Roles assigned to this member.
     */
    roles?: Array<Shared.RoleParam>;
  }

  export interface IAMUpdateMemberWithPolicies {
    /**
     * Path param: Account identifier tag.
     */
    account_id: string;

    /**
     * Body param: Array of policies associated with this member.
     */
    policies: Array<IAMUpdateMemberWithPolicies.Policy>;
  }

  export namespace IAMUpdateMemberWithPolicies {
    export interface Policy {
      /**
       * Allow or deny operations against the resources.
       */
      access: 'allow' | 'deny';

      /**
       * A set of permission groups that are specified to the policy.
       */
      permission_groups: Array<Policy.PermissionGroup>;

      /**
       * A list of resource groups that the policy applies to.
       */
      resource_groups: Array<Policy.ResourceGroup>;
    }

    export namespace Policy {
      /**
       * A group of permissions.
       */
      export interface PermissionGroup {
        /**
         * Identifier of the group.
         */
        id: string;
      }

      /**
       * A group of scoped resources.
       */
      export interface ResourceGroup {
        /**
         * Identifier of the group.
         */
        id: string;
      }
    }
  }
}

export interface MemberListParams extends V4PagePaginationArrayParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

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
   * Account identifier tag.
   */
  account_id: string;
}

export interface MemberGetParams {
  /**
   * Account identifier tag.
   */
  account_id: string;
}

export declare namespace Members {
  export {
    type Status as Status,
    type MemberDeleteResponse as MemberDeleteResponse,
    type MemberCreateParams as MemberCreateParams,
    type MemberUpdateParams as MemberUpdateParams,
    type MemberListParams as MemberListParams,
    type MemberDeleteParams as MemberDeleteParams,
    type MemberGetParams as MemberGetParams,
  };
}

export { type MembersV4PagePaginationArray };
