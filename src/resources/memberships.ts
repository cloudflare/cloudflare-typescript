// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../resource';
import { isRequestOptions } from '../core';
import { APIPromise } from '../core';
import * as Core from '../core';
import * as MembershipsAPI from './memberships';
import * as Shared from './shared';
import * as AccountsAPI from './accounts/accounts';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../pagination';

export class Memberships extends APIResource {
  /**
   * Accept or reject this account invitation.
   */
  update(membershipId: string, body: MembershipUpdateParams, options?: Core.RequestOptions): Core.APIPromise<MembershipUpdateResponse> {
    return (this._client.put(`/memberships/${membershipId}`, { body, ...options }) as Core.APIPromise<{ result: MembershipUpdateResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * List memberships of accounts the user can access.
   */
  list(query?: MembershipListParams, options?: Core.RequestOptions): Core.PagePromise<MembershipsV4PagePaginationArray, Membership>
  list(options?: Core.RequestOptions): Core.PagePromise<MembershipsV4PagePaginationArray, Membership>
  list(query: MembershipListParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.PagePromise<MembershipsV4PagePaginationArray, Membership> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/memberships', MembershipsV4PagePaginationArray, { query, ...options });
  }

  /**
   * Remove the associated member from an account.
   */
  delete(membershipId: string, options?: Core.RequestOptions): Core.APIPromise<MembershipDeleteResponse> {
    return (this._client.delete(`/memberships/${membershipId}`, options) as Core.APIPromise<{ result: MembershipDeleteResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a specific membership.
   */
  get(membershipId: string, options?: Core.RequestOptions): Core.APIPromise<MembershipGetResponse> {
    return (this._client.get(`/memberships/${membershipId}`, options) as Core.APIPromise<{ result: MembershipGetResponse }>)._thenUnwrap((obj) => obj.result);
  }
}

export class MembershipsV4PagePaginationArray extends V4PagePaginationArray<Membership> {
}

export interface Membership {
  /**
   * Membership identifier tag.
   */
  id?: string;

  account?: AccountsAPI.Account;

  /**
   * Enterprise only. Indicates whether or not API access is enabled specifically for
   * this user on a given account.
   */
  api_access_enabled?: boolean | null;

  /**
   * All access permissions for the user at the account.
   */
  permissions?: Membership.Permissions;

  /**
   * List of role names for the user at the account.
   */
  roles?: Array<string>;

  /**
   * Status of this membership.
   */
  status?: 'accepted' | 'pending' | 'rejected';
}

export namespace Membership {
  /**
   * All access permissions for the user at the account.
   */
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

export interface MembershipUpdateResponse {
  /**
   * Membership identifier tag.
   */
  id?: string;

  account?: AccountsAPI.Account;

  /**
   * Enterprise only. Indicates whether or not API access is enabled specifically for
   * this user on a given account.
   */
  api_access_enabled?: boolean | null;

  /**
   * All access permissions for the user at the account.
   */
  permissions?: MembershipUpdateResponse.Permissions;

  /**
   * Access policy for the membership
   */
  policies?: Array<MembershipUpdateResponse.Policy>;

  /**
   * List of role names for the user at the account.
   */
  roles?: Array<string>;

  /**
   * Status of this membership.
   */
  status?: 'accepted' | 'pending' | 'rejected';
}

export namespace MembershipUpdateResponse {
  /**
   * All access permissions for the user at the account.
   */
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
}

export interface MembershipDeleteResponse {
  /**
   * Membership identifier tag.
   */
  id?: string;
}

export interface MembershipGetResponse {
  /**
   * Membership identifier tag.
   */
  id?: string;

  account?: AccountsAPI.Account;

  /**
   * Enterprise only. Indicates whether or not API access is enabled specifically for
   * this user on a given account.
   */
  api_access_enabled?: boolean | null;

  /**
   * All access permissions for the user at the account.
   */
  permissions?: MembershipGetResponse.Permissions;

  /**
   * Access policy for the membership
   */
  policies?: Array<MembershipGetResponse.Policy>;

  /**
   * List of role names for the user at the account.
   */
  roles?: Array<string>;

  /**
   * Status of this membership.
   */
  status?: 'accepted' | 'pending' | 'rejected';
}

export namespace MembershipGetResponse {
  /**
   * All access permissions for the user at the account.
   */
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
}

export interface MembershipUpdateParams {
  /**
   * Whether to accept or reject this account invitation.
   */
  status: 'accepted' | 'rejected';
}

export interface MembershipListParams extends V4PagePaginationArrayParams {
  account?: MembershipListParams.Account;

  /**
   * Direction to order memberships.
   */
  direction?: 'asc' | 'desc';

  /**
   * Account name
   */
  name?: string;

  /**
   * Field to order memberships by.
   */
  order?: 'id' | 'account.name' | 'status';

  /**
   * Status of this membership.
   */
  status?: 'accepted' | 'pending' | 'rejected';
}

export namespace MembershipListParams {
  export interface Account {
    /**
     * Account name
     */
    name?: string;
  }
}
