// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from '../../core';
import { APIResource } from '../../resource';
import * as MembersAPI from './members';
import * as Shared from '../shared';
import { MembersV4PagePaginationArray } from '../shared';
import { type V4PagePaginationArrayParams } from '../../pagination';

export class Members extends APIResource {
  /**
   * Add a user to the list of members for this account.
   */
  create(params: MemberCreateParams, options?: Core.RequestOptions): Core.APIPromise<MemberCreateResponse> {
    const { account_id, ...body } = params;
    return this._client.post(`/accounts/${account_id}/members`, { body, ...options });
  }

  /**
   * Modify an account member.
   */
  update(
    memberId: string,
    params: MemberUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MemberUpdateResponse> {
    const { account_id, ...body } = params;
    return this._client.put(`/accounts/${account_id}/members/${memberId}`, { body, ...options });
  }

  /**
   * List all members of an account.
   */
  list(
    params: MemberListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<MembersV4PagePaginationArray, Shared.Member> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(`/accounts/${account_id}/members`, MembersV4PagePaginationArray, {
      query,
      ...options,
    });
  }

  /**
   * Remove a member from an account.
   */
  delete(
    memberId: string,
    params: MemberDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MemberDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(`/accounts/${account_id}/members/${memberId}`, options) as Core.APIPromise<{
        result: MemberDeleteResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get information about a specific member of an account.
   */
  get(
    memberId: string,
    params: MemberGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<MemberGetResponse> {
    const { account_id } = params;
    return this._client.get(`/accounts/${account_id}/members/${memberId}`, options);
  }
}

/**
 * Whether the user is a member of the organization or has an invitation pending.
 */
export type Status = 'member' | 'invited';

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

export type MemberCreateResponse =
  | MemberCreateResponse.IamAPIResponseCommon
  | MemberCreateResponse.IamAPIResponseCommon;

export namespace MemberCreateResponse {
  export interface IamAPIResponseCommon {
    result?: Shared.Member;
  }

  export interface IamAPIResponseCommon {
    result?: IamAPIResponseCommon.Result;
  }

  export namespace IamAPIResponseCommon {
    export interface Result {
      /**
       * Membership identifier tag.
       */
      id?: string;

      /**
       * Access policy for the membership
       */
      policies?: Array<Result.Policy>;

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
      user?: Result.User;
    }

    export namespace Result {
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
           * Name of the group.
           */
          name?: string;
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
           * Attributes associated to the resource group.
           */
          meta?: unknown;

          /**
           * Name of the resource group.
           */
          name?: string;

          /**
           * The scope associated to the resource group
           */
          scope?: Array<ResourceGroup.Scope>;
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
               * This is a combination of pre-defined resource name and identifier (like Account
               * ID etc.)
               */
              key: string;
            }
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
  }
}

export type MemberUpdateResponse =
  | MemberUpdateResponse.IamAPIResponseCommon
  | MemberUpdateResponse.IamAPIResponseCommon;

export namespace MemberUpdateResponse {
  export interface IamAPIResponseCommon {
    result?: Shared.Member;
  }

  export interface IamAPIResponseCommon {
    result?: IamAPIResponseCommon.Result;
  }

  export namespace IamAPIResponseCommon {
    export interface Result {
      /**
       * Membership identifier tag.
       */
      id?: string;

      /**
       * Access policy for the membership
       */
      policies?: Array<Result.Policy>;

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
      user?: Result.User;
    }

    export namespace Result {
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
           * Name of the group.
           */
          name?: string;
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
           * Attributes associated to the resource group.
           */
          meta?: unknown;

          /**
           * Name of the resource group.
           */
          name?: string;

          /**
           * The scope associated to the resource group
           */
          scope?: Array<ResourceGroup.Scope>;
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
               * This is a combination of pre-defined resource name and identifier (like Account
               * ID etc.)
               */
              key: string;
            }
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
  }
}

export interface MemberDeleteResponse {
  /**
   * Identifier
   */
  id: string;
}

export type MemberGetResponse =
  | MemberGetResponse.IamAPIResponseCommon
  | MemberGetResponse.IamAPIResponseCommon;

export namespace MemberGetResponse {
  export interface IamAPIResponseCommon {
    result?: Shared.Member;
  }

  export interface IamAPIResponseCommon {
    result?: IamAPIResponseCommon.Result;
  }

  export namespace IamAPIResponseCommon {
    export interface Result {
      /**
       * Membership identifier tag.
       */
      id?: string;

      /**
       * Access policy for the membership
       */
      policies?: Array<Result.Policy>;

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
      user?: Result.User;
    }

    export namespace Result {
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
           * Name of the group.
           */
          name?: string;
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
           * Attributes associated to the resource group.
           */
          meta?: unknown;

          /**
           * Name of the resource group.
           */
          name?: string;

          /**
           * The scope associated to the resource group
           */
          scope?: Array<ResourceGroup.Scope>;
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
               * This is a combination of pre-defined resource name and identifier (like Account
               * ID etc.)
               */
              key: string;
            }
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
  }
}

export interface MemberCreateParams {
  /**
   * Path param:
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

export interface MemberUpdateParams {
  /**
   * Path param:
   */
  account_id: string;

  /**
   * Body param: Roles assigned to this member.
   */
  roles?: Array<MemberUpdateParams.Role>;
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
  account_id: string;
}

export interface MemberGetParams {
  account_id: string;
}

export namespace Members {
  export import Status = MembersAPI.Status;
  export import UserWithInviteCode = MembersAPI.UserWithInviteCode;
  export import MemberCreateResponse = MembersAPI.MemberCreateResponse;
  export import MemberUpdateResponse = MembersAPI.MemberUpdateResponse;
  export import MemberDeleteResponse = MembersAPI.MemberDeleteResponse;
  export import MemberGetResponse = MembersAPI.MemberGetResponse;
  export import MemberCreateParams = MembersAPI.MemberCreateParams;
  export import MemberUpdateParams = MembersAPI.MemberUpdateParams;
  export import MemberListParams = MembersAPI.MemberListParams;
  export import MemberDeleteParams = MembersAPI.MemberDeleteParams;
  export import MemberGetParams = MembersAPI.MemberGetParams;
}

export { MembersV4PagePaginationArray };
