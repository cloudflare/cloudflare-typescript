// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import * as MembersAPI from './members';
import * as Shared from '../shared';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';

export class Members extends APIResource {
  /**
   * Add a user to the list of members for this account.
   */
  create(params: MemberCreateParams, options?: Core.RequestOptions): Core.APIPromise<MemberCreateResponse> {
    const { account_id, ...body } = params;
    return (this._client.post(`/accounts/${account_id}/members`, { body, ...options }) as Core.APIPromise<{ result: MemberCreateResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Modify an account member.
   */
  update(memberId: string, params: MemberUpdateParams, options?: Core.RequestOptions): Core.APIPromise<MemberUpdateResponse> {
    const { account_id, ...body } = params;
    return (this._client.put(`/accounts/${account_id}/members/${memberId}`, { body, ...options }) as Core.APIPromise<{ result: MemberUpdateResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all members of an account.
   */
  list(params: MemberListParams, options?: Core.RequestOptions): Core.PagePromise<MemberListResponsesV4PagePaginationArray, MemberListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(`/accounts/${account_id}/members`, MemberListResponsesV4PagePaginationArray, { query, ...options });
  }

  /**
   * Remove a member from an account.
   */
  delete(memberId: string, params: MemberDeleteParams, options?: Core.RequestOptions): Core.APIPromise<MemberDeleteResponse | null> {
    const { account_id } = params;
    return (this._client.delete(`/accounts/${account_id}/members/${memberId}`, options) as Core.APIPromise<{ result: MemberDeleteResponse | null }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get information about a specific member of an account.
   */
  get(memberId: string, params: MemberGetParams, options?: Core.RequestOptions): Core.APIPromise<MemberGetResponse> {
    const { account_id } = params;
    return (this._client.get(`/accounts/${account_id}/members/${memberId}`, options) as Core.APIPromise<{ result: MemberGetResponse }>)._thenUnwrap((obj) => obj.result);
  }
}

export class MemberListResponsesV4PagePaginationArray extends V4PagePaginationArray<MemberListResponse> {
}

/**
 * Whether the user is a member of the organization or has an invitation pending.
 */
export type Status = 'member' | 'invited'

export interface UserWithInviteCode {
  /**
   * Membership identifier tag.
   */
  id?: string;

  /**
   * The unique activation code for the account membership.
   */
  code?: string;

  /**
   * Roles assigned to this member.
   */
  roles?: Array<UserWithInviteCode.Role>;

  /**
   * A member's status in the account.
   */
  status?: 'accepted' | 'pending';

  /**
   * Details of the user associated to the membership.
   */
  user?: UserWithInviteCode.User;
}

export namespace UserWithInviteCode {
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

    permissions: Role.Permissions;
  }

  export namespace Role {
    export interface Permissions {
      analytics?: Shared.PermissionGrant;

      billing?: Shared.PermissionGrant;

      cache_purge?: Shared.PermissionGrant;

      dns?: Shared.PermissionGrant;

      dns_records?: Shared.PermissionGrant;

      lb?: Shared.PermissionGrant;

      logs?: Shared.PermissionGrant;

      organization?: Shared.PermissionGrant;

      ssl?: Shared.PermissionGrant;

      waf?: Shared.PermissionGrant;

      zone_settings?: Shared.PermissionGrant;

      zones?: Shared.PermissionGrant;
    }
  }

  /**
   * Details of the user associated to the membership.
   */
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

export interface MemberCreateResponse {
  /**
   * Membership identifier tag.
   */
  id?: string;

  /**
   * Access policy for the membership
   */
  policies?: Array<MemberCreateResponse.Policy>;

  /**
   * Roles assigned to this Member.
   */
  roles?: Array<Shared.Role>;

  /**
   * A member's status in the account.
   */
  status?: 'accepted' | 'pending';

  /**
   * Details of the user associated to the membership.
   */
  user?: MemberCreateResponse.User;
}

export namespace MemberCreateResponse {
  export interface Policy {
    /**
     * Policy identifier.
     */
    id?: string;

    /**
     * Allow or deny operations against the resources.
     */
    access?: 'allow' | 'deny';

    /**
     * A set of permission groups that are specified to the policy.
     */
    permission_groups?: Array<Policy.PermissionGroup>;

    /**
     * A list of resource groups that the policy applies to.
     */
    resource_groups?: Array<Policy.ResourceGroup>;
  }

  export namespace Policy {
    /**
     * A named group of permissions that map to a group of operations against
     * resources.
     */
    export interface PermissionGroup {
      /**
       * Identifier of the group.
       */
      id: string;

      /**
       * Attributes associated to the permission group.
       */
      meta?: PermissionGroup.Meta;

      /**
       * Name of the group.
       */
      name?: string;
    }

    export namespace PermissionGroup {
      /**
       * Attributes associated to the permission group.
       */
      export interface Meta {
        key?: string;

        value?: string;
      }
    }

    /**
     * A group of scoped resources.
     */
    export interface ResourceGroup {
      /**
       * Identifier of the group.
       */
      id: string;

      /**
       * The scope associated to the resource group
       */
      scope: Array<ResourceGroup.Scope>;

      /**
       * Attributes associated to the resource group.
       */
      meta?: ResourceGroup.Meta;

      /**
       * Name of the resource group.
       */
      name?: string;
    }

    export namespace ResourceGroup {
      /**
       * A scope is a combination of scope objects which provides additional context.
       */
      export interface Scope {
        /**
         * This is a combination of pre-defined resource name and identifier (like Account
         * ID etc.)
         */
        key: string;

        /**
         * A list of scope objects for additional context.
         */
        objects: Array<Scope.Object>;
      }

      export namespace Scope {
        /**
         * A scope object represents any resource that can have actions applied against
         * invite.
         */
        export interface Object {
          /**
           * This is a combination of pre-defined resource name and identifier (like Zone ID
           * etc.)
           */
          key: string;
        }
      }

      /**
       * Attributes associated to the resource group.
       */
      export interface Meta {
        key?: string;

        value?: string;
      }
    }
  }

  /**
   * Details of the user associated to the membership.
   */
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

export interface MemberUpdateResponse {
  /**
   * Membership identifier tag.
   */
  id?: string;

  /**
   * Access policy for the membership
   */
  policies?: Array<MemberUpdateResponse.Policy>;

  /**
   * Roles assigned to this Member.
   */
  roles?: Array<Shared.Role>;

  /**
   * A member's status in the account.
   */
  status?: 'accepted' | 'pending';

  /**
   * Details of the user associated to the membership.
   */
  user?: MemberUpdateResponse.User;
}

export namespace MemberUpdateResponse {
  export interface Policy {
    /**
     * Policy identifier.
     */
    id?: string;

    /**
     * Allow or deny operations against the resources.
     */
    access?: 'allow' | 'deny';

    /**
     * A set of permission groups that are specified to the policy.
     */
    permission_groups?: Array<Policy.PermissionGroup>;

    /**
     * A list of resource groups that the policy applies to.
     */
    resource_groups?: Array<Policy.ResourceGroup>;
  }

  export namespace Policy {
    /**
     * A named group of permissions that map to a group of operations against
     * resources.
     */
    export interface PermissionGroup {
      /**
       * Identifier of the group.
       */
      id: string;

      /**
       * Attributes associated to the permission group.
       */
      meta?: PermissionGroup.Meta;

      /**
       * Name of the group.
       */
      name?: string;
    }

    export namespace PermissionGroup {
      /**
       * Attributes associated to the permission group.
       */
      export interface Meta {
        key?: string;

        value?: string;
      }
    }

    /**
     * A group of scoped resources.
     */
    export interface ResourceGroup {
      /**
       * Identifier of the group.
       */
      id: string;

      /**
       * The scope associated to the resource group
       */
      scope: Array<ResourceGroup.Scope>;

      /**
       * Attributes associated to the resource group.
       */
      meta?: ResourceGroup.Meta;

      /**
       * Name of the resource group.
       */
      name?: string;
    }

    export namespace ResourceGroup {
      /**
       * A scope is a combination of scope objects which provides additional context.
       */
      export interface Scope {
        /**
         * This is a combination of pre-defined resource name and identifier (like Account
         * ID etc.)
         */
        key: string;

        /**
         * A list of scope objects for additional context.
         */
        objects: Array<Scope.Object>;
      }

      export namespace Scope {
        /**
         * A scope object represents any resource that can have actions applied against
         * invite.
         */
        export interface Object {
          /**
           * This is a combination of pre-defined resource name and identifier (like Zone ID
           * etc.)
           */
          key: string;
        }
      }

      /**
       * Attributes associated to the resource group.
       */
      export interface Meta {
        key?: string;

        value?: string;
      }
    }
  }

  /**
   * Details of the user associated to the membership.
   */
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
   * Membership identifier tag.
   */
  id?: string;

  /**
   * Access policy for the membership
   */
  policies?: Array<MemberListResponse.Policy>;

  /**
   * Roles assigned to this Member.
   */
  roles?: Array<Shared.Role>;

  /**
   * A member's status in the account.
   */
  status?: 'accepted' | 'pending';

  /**
   * Details of the user associated to the membership.
   */
  user?: MemberListResponse.User;
}

export namespace MemberListResponse {
  export interface Policy {
    /**
     * Policy identifier.
     */
    id?: string;

    /**
     * Allow or deny operations against the resources.
     */
    access?: 'allow' | 'deny';

    /**
     * A set of permission groups that are specified to the policy.
     */
    permission_groups?: Array<Policy.PermissionGroup>;

    /**
     * A list of resource groups that the policy applies to.
     */
    resource_groups?: Array<Policy.ResourceGroup>;
  }

  export namespace Policy {
    /**
     * A named group of permissions that map to a group of operations against
     * resources.
     */
    export interface PermissionGroup {
      /**
       * Identifier of the group.
       */
      id: string;

      /**
       * Attributes associated to the permission group.
       */
      meta?: PermissionGroup.Meta;

      /**
       * Name of the group.
       */
      name?: string;
    }

    export namespace PermissionGroup {
      /**
       * Attributes associated to the permission group.
       */
      export interface Meta {
        key?: string;

        value?: string;
      }
    }

    /**
     * A group of scoped resources.
     */
    export interface ResourceGroup {
      /**
       * Identifier of the group.
       */
      id: string;

      /**
       * The scope associated to the resource group
       */
      scope: Array<ResourceGroup.Scope>;

      /**
       * Attributes associated to the resource group.
       */
      meta?: ResourceGroup.Meta;

      /**
       * Name of the resource group.
       */
      name?: string;
    }

    export namespace ResourceGroup {
      /**
       * A scope is a combination of scope objects which provides additional context.
       */
      export interface Scope {
        /**
         * This is a combination of pre-defined resource name and identifier (like Account
         * ID etc.)
         */
        key: string;

        /**
         * A list of scope objects for additional context.
         */
        objects: Array<Scope.Object>;
      }

      export namespace Scope {
        /**
         * A scope object represents any resource that can have actions applied against
         * invite.
         */
        export interface Object {
          /**
           * This is a combination of pre-defined resource name and identifier (like Zone ID
           * etc.)
           */
          key: string;
        }
      }

      /**
       * Attributes associated to the resource group.
       */
      export interface Meta {
        key?: string;

        value?: string;
      }
    }
  }

  /**
   * Details of the user associated to the membership.
   */
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

export interface MemberDeleteResponse {
  /**
   * Identifier
   */
  id: string;
}

export interface MemberGetResponse {
  /**
   * Membership identifier tag.
   */
  id?: string;

  /**
   * Access policy for the membership
   */
  policies?: Array<MemberGetResponse.Policy>;

  /**
   * Roles assigned to this Member.
   */
  roles?: Array<Shared.Role>;

  /**
   * A member's status in the account.
   */
  status?: 'accepted' | 'pending';

  /**
   * Details of the user associated to the membership.
   */
  user?: MemberGetResponse.User;
}

export namespace MemberGetResponse {
  export interface Policy {
    /**
     * Policy identifier.
     */
    id?: string;

    /**
     * Allow or deny operations against the resources.
     */
    access?: 'allow' | 'deny';

    /**
     * A set of permission groups that are specified to the policy.
     */
    permission_groups?: Array<Policy.PermissionGroup>;

    /**
     * A list of resource groups that the policy applies to.
     */
    resource_groups?: Array<Policy.ResourceGroup>;
  }

  export namespace Policy {
    /**
     * A named group of permissions that map to a group of operations against
     * resources.
     */
    export interface PermissionGroup {
      /**
       * Identifier of the group.
       */
      id: string;

      /**
       * Attributes associated to the permission group.
       */
      meta?: PermissionGroup.Meta;

      /**
       * Name of the group.
       */
      name?: string;
    }

    export namespace PermissionGroup {
      /**
       * Attributes associated to the permission group.
       */
      export interface Meta {
        key?: string;

        value?: string;
      }
    }

    /**
     * A group of scoped resources.
     */
    export interface ResourceGroup {
      /**
       * Identifier of the group.
       */
      id: string;

      /**
       * The scope associated to the resource group
       */
      scope: Array<ResourceGroup.Scope>;

      /**
       * Attributes associated to the resource group.
       */
      meta?: ResourceGroup.Meta;

      /**
       * Name of the resource group.
       */
      name?: string;
    }

    export namespace ResourceGroup {
      /**
       * A scope is a combination of scope objects which provides additional context.
       */
      export interface Scope {
        /**
         * This is a combination of pre-defined resource name and identifier (like Account
         * ID etc.)
         */
        key: string;

        /**
         * A list of scope objects for additional context.
         */
        objects: Array<Scope.Object>;
      }

      export namespace Scope {
        /**
         * A scope object represents any resource that can have actions applied against
         * invite.
         */
        export interface Object {
          /**
           * This is a combination of pre-defined resource name and identifier (like Zone ID
           * etc.)
           */
          key: string;
        }
      }

      /**
       * Attributes associated to the resource group.
       */
      export interface Meta {
        key?: string;

        value?: string;
      }
    }
  }

  /**
   * Details of the user associated to the membership.
   */
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

export type MemberCreateParams = MemberCreateParams.IAMCreateMemberWithRoles | MemberCreateParams.IAMCreateMemberWithPolicies

export namespace MemberCreateParams {
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
    policies: Array<MemberCreateParams.IAMCreateMemberWithPolicies.Policy>;

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

export type MemberUpdateParams = MemberUpdateParams.Member | MemberUpdateParams.IAMUpdateMemberWithPolicies

export namespace MemberUpdateParams {
  export interface Member {
    /**
     * Path param: Account identifier tag.
     */
    account_id: string;

    /**
     * Body param: Roles assigned to this member.
     */
    roles?: Array<MemberUpdateParams.Member.Role>;
  }

  export namespace Member {
    export interface Role {
      /**
       * Role identifier tag.
       */
      id: string;
    }
  }

  export interface IAMUpdateMemberWithPolicies {
    /**
     * Path param: Account identifier tag.
     */
    account_id: string;

    /**
     * Body param: Array of policies associated with this member.
     */
    policies: Array<MemberUpdateParams.IAMUpdateMemberWithPolicies.Policy>;
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

export namespace Members {
  export import Status = MembersAPI.Status;
  export import UserWithInviteCode = MembersAPI.UserWithInviteCode;
  export import MemberCreateResponse = MembersAPI.MemberCreateResponse;
  export import MemberUpdateResponse = MembersAPI.MemberUpdateResponse;
  export import MemberListResponse = MembersAPI.MemberListResponse;
  export import MemberDeleteResponse = MembersAPI.MemberDeleteResponse;
  export import MemberGetResponse = MembersAPI.MemberGetResponse;
  export import MemberListResponsesV4PagePaginationArray = MembersAPI.MemberListResponsesV4PagePaginationArray;
  export import MemberCreateParams = MembersAPI.MemberCreateParams;
  export import MemberUpdateParams = MembersAPI.MemberUpdateParams;
  export import MemberListParams = MembersAPI.MemberListParams;
  export import MemberDeleteParams = MembersAPI.MemberDeleteParams;
  export import MemberGetParams = MembersAPI.MemberGetParams;
}
