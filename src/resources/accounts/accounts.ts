// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as MembersAPI from 'cloudflare/resources/accounts/members';
import * as RolesAPI from 'cloudflare/resources/accounts/roles';
import * as PermissionGroupsAPI from 'cloudflare/resources/user/tokens/permission-groups';
import { SinglePage, V4PagePaginationArray, type V4PagePaginationArrayParams } from 'cloudflare/pagination';

export class Accounts extends APIResource {
  members: MembersAPI.Members = new MembersAPI.Members(this._client);
  roles: RolesAPI.Roles = new RolesAPI.Roles(this._client);

  /**
   * Update an existing account.
   */
  update(params: AccountUpdateParams, options?: Core.RequestOptions): Core.APIPromise<AccountUpdateResponse> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}`, { body, ...options }) as Core.APIPromise<{
        result: AccountUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all accounts you have ownership or verified access to.
   */
  list(
    query?: AccountListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AccountListResponsesV4PagePaginationArray, AccountListResponse>;
  list(
    options?: Core.RequestOptions,
  ): Core.PagePromise<AccountListResponsesV4PagePaginationArray, AccountListResponse>;
  list(
    query: AccountListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<AccountListResponsesV4PagePaginationArray, AccountListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/accounts', AccountListResponsesV4PagePaginationArray, {
      query,
      ...options,
    });
  }

  /**
   * Get information about a specific account that you are a member of.
   */
  get(params: AccountGetParams, options?: Core.RequestOptions): Core.APIPromise<AccountGetResponse> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}`, options) as Core.APIPromise<{ result: AccountGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class AccountListResponsesV4PagePaginationArray extends V4PagePaginationArray<AccountListResponse> {}

export class RolesSinglePage extends SinglePage<Role> {}

export interface Account {
  /**
   * Identifier
   */
  id: string;

  /**
   * Account name
   */
  name: string;

  /**
   * Timestamp for the creation of the account
   */
  created_on?: string;

  /**
   * Account settings
   */
  settings?: Account.Settings;
}

export namespace Account {
  /**
   * Account settings
   */
  export interface Settings {
    /**
     * Specifies the default nameservers to be used for new zones added to this
     * account.
     *
     * - `cloudflare.standard` for Cloudflare-branded nameservers
     * - `custom.account` for account custom nameservers
     * - `custom.tenant` for tenant custom nameservers
     *
     * See
     * [Custom Nameservers](https://developers.cloudflare.com/dns/additional-options/custom-nameservers/)
     * for more information.
     */
    default_nameservers?: 'cloudflare.standard' | 'custom.account' | 'custom.tenant';

    /**
     * Indicates whether membership in this account requires that Two-Factor
     * Authentication is enabled
     */
    enforce_twofactor?: boolean;

    /**
     * @deprecated: Indicates whether new zones should use the account-level custom
     * nameservers by default.
     *
     * Deprecated in favor of `default_nameservers`.
     */
    use_account_custom_ns_by_default?: boolean;
  }
}

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
   * Role Name.
   */
  name: string;

  /**
   * Access permissions for this User.
   */
  permissions: Array<PermissionGroupsAPI.Permission>;
}

export interface User {
  /**
   * Membership identifier tag.
   */
  id: string;

  /**
   * Roles assigned to this member.
   */
  roles: Array<User.Role>;

  status: unknown;

  user: User.User;
}

export namespace User {
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
      analytics?: RolesAPI.PermissionGrant;

      billing?: RolesAPI.PermissionGrant;

      cache_purge?: RolesAPI.PermissionGrant;

      dns?: RolesAPI.PermissionGrant;

      dns_records?: RolesAPI.PermissionGrant;

      lb?: RolesAPI.PermissionGrant;

      logs?: RolesAPI.PermissionGrant;

      organization?: RolesAPI.PermissionGrant;

      ssl?: RolesAPI.PermissionGrant;

      waf?: RolesAPI.PermissionGrant;

      zone_settings?: RolesAPI.PermissionGrant;

      zones?: RolesAPI.PermissionGrant;
    }
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

export type AccountUpdateResponse = unknown | string | null;

export type AccountListResponse = unknown;

export type AccountGetResponse = unknown | string | null;

export interface AccountUpdateParams {
  /**
   * Path param:
   */
  account_id: unknown;

  /**
   * Body param: Account name
   */
  name: string;

  /**
   * Body param: Account settings
   */
  settings?: AccountUpdateParams.Settings;
}

export namespace AccountUpdateParams {
  /**
   * Account settings
   */
  export interface Settings {
    /**
     * Specifies the default nameservers to be used for new zones added to this
     * account.
     *
     * - `cloudflare.standard` for Cloudflare-branded nameservers
     * - `custom.account` for account custom nameservers
     * - `custom.tenant` for tenant custom nameservers
     *
     * See
     * [Custom Nameservers](https://developers.cloudflare.com/dns/additional-options/custom-nameservers/)
     * for more information.
     */
    default_nameservers?: 'cloudflare.standard' | 'custom.account' | 'custom.tenant';

    /**
     * Indicates whether membership in this account requires that Two-Factor
     * Authentication is enabled
     */
    enforce_twofactor?: boolean;

    /**
     * @deprecated: Indicates whether new zones should use the account-level custom
     * nameservers by default.
     *
     * Deprecated in favor of `default_nameservers`.
     */
    use_account_custom_ns_by_default?: boolean;
  }
}

export interface AccountListParams extends V4PagePaginationArrayParams {
  /**
   * Direction to order results.
   */
  direction?: 'asc' | 'desc';

  /**
   * Name of the account.
   */
  name?: string;
}

export interface AccountGetParams {
  account_id: unknown;
}

export namespace Accounts {
  export import Members = MembersAPI.Members;
  export import UserWithInviteCode = MembersAPI.UserWithInviteCode;
  export import MemberListResponse = MembersAPI.MemberListResponse;
  export import MemberDeleteResponse = MembersAPI.MemberDeleteResponse;
  export import MemberListResponsesV4PagePaginationArray = MembersAPI.MemberListResponsesV4PagePaginationArray;
  export import MemberCreateParams = MembersAPI.MemberCreateParams;
  export import MemberUpdateParams = MembersAPI.MemberUpdateParams;
  export import MemberListParams = MembersAPI.MemberListParams;
  export import MemberDeleteParams = MembersAPI.MemberDeleteParams;
  export import MemberGetParams = MembersAPI.MemberGetParams;
  export import Roles = RolesAPI.Roles;
  export import PermissionGrant = RolesAPI.PermissionGrant;
  export import RoleGetResponse = RolesAPI.RoleGetResponse;
  export import RoleListParams = RolesAPI.RoleListParams;
  export import RoleGetParams = RolesAPI.RoleGetParams;
}
