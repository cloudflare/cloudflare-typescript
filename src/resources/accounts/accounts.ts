// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import { Members } from './members';
import { Roles } from './roles';
import * as AccountsAPI from './accounts';
import * as MembersAPI from './members';
import * as RolesAPI from './roles';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';

export class Accounts extends APIResource {
  members: MembersAPI.Members = new MembersAPI.Members(this._client);
  roles: RolesAPI.Roles = new RolesAPI.Roles(this._client);

  /**
   * Create an account (only available for tenant admins at this time)
   */
  create(body: AccountCreateParams, options?: Core.RequestOptions): Core.APIPromise<Account> {
    return (this._client.post('/accounts', { body, ...options }) as Core.APIPromise<{ result: Account }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update an existing account.
   */
  update(params: AccountUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Account> {
    const { account_id, ...body } = params;
    return (this._client.put(`/accounts/${account_id}`, { body, ...options }) as Core.APIPromise<{ result: Account }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all accounts you have ownership or verified access to.
   */
  list(query?: AccountListParams, options?: Core.RequestOptions): Core.PagePromise<AccountsV4PagePaginationArray, Account>
  list(options?: Core.RequestOptions): Core.PagePromise<AccountsV4PagePaginationArray, Account>
  list(query: AccountListParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.PagePromise<AccountsV4PagePaginationArray, Account> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return this._client.getAPIList('/accounts', AccountsV4PagePaginationArray, { query, ...options });
  }

  /**
   * Delete a specific account (only available for tenant admins at this time). This
   * is a permanent operation that will delete any zones or other resources under the
   * account
   */
  delete(params: AccountDeleteParams, options?: Core.RequestOptions): Core.APIPromise<AccountDeleteResponse | null> {
    const { account_id } = params;
    return (this._client.delete(`/accounts/${account_id}`, options) as Core.APIPromise<{ result: AccountDeleteResponse | null }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get information about a specific account that you are a member of.
   */
  get(params: AccountGetParams, options?: Core.RequestOptions): Core.APIPromise<Account> {
    const { account_id } = params;
    return (this._client.get(`/accounts/${account_id}`, options) as Core.APIPromise<{ result: Account }>)._thenUnwrap((obj) => obj.result);
  }
}

export class AccountsV4PagePaginationArray extends V4PagePaginationArray<Account> {
}

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

export interface AccountDeleteResponse {
  /**
   * Identifier
   */
  id: string;
}

export interface AccountCreateParams {
  /**
   * Account name
   */
  name: string;

  /**
   * the type of account being created. For self-serve customers, use standard. for
   * enterprise customers, use enterprise.
   */
  type: 'standard' | 'enterprise';

  /**
   * information related to the tenant unit, and optionally, an id of the unit to
   * create the account on. see
   * https://developers.cloudflare.com/tenant/how-to/manage-accounts/
   */
  unit?: AccountCreateParams.Unit;
}

export namespace AccountCreateParams {
  /**
   * information related to the tenant unit, and optionally, an id of the unit to
   * create the account on. see
   * https://developers.cloudflare.com/tenant/how-to/manage-accounts/
   */
  export interface Unit {
    /**
     * Tenant unit ID
     */
    id?: string;
  }
}

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

export interface AccountDeleteParams {
  /**
   * The account ID of the account to be deleted
   */
  account_id: string;
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
