// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as MembersAPI from './members';
import * as RolesAPI from './roles';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';

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
     * Sets an abuse contact email to notify for abuse reports.
     */
    abuse_contact_email?: string;

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

export type AccountUpdateResponse = unknown;

export type AccountListResponse = unknown;

export type AccountGetResponse = unknown;

export interface AccountUpdateParams {
  /**
   * Path param: Account identifier tag.
   */
  account_id: string;

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
     * Sets an abuse contact email to notify for abuse reports.
     */
    abuse_contact_email?: string;

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
  /**
   * Account identifier tag.
   */
  account_id: string;
}

export namespace Accounts {
  export import Members = MembersAPI.Members;
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
  export import Roles = RolesAPI.Roles;
  export import RoleGetResponse = RolesAPI.RoleGetResponse;
  export import RoleListParams = RolesAPI.RoleListParams;
  export import RoleGetParams = RolesAPI.RoleGetParams;
}
