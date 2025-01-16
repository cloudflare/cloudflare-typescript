// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';
import * as MembersAPI from './members';
import {
  MemberCreateParams,
  MemberDeleteParams,
  MemberDeleteResponse,
  MemberGetParams,
  MemberListParams,
  MemberUpdateParams,
  Members,
  Status,
} from './members';
import * as RolesAPI from './roles';
import { RoleGetParams, RoleListParams, Roles } from './roles';
import * as SubscriptionsAPI from './subscriptions';
import {
  SubscriptionCreateParams,
  SubscriptionCreateResponse,
  SubscriptionDeleteParams,
  SubscriptionDeleteResponse,
  SubscriptionGetParams,
  SubscriptionGetResponse,
  SubscriptionUpdateParams,
  SubscriptionUpdateResponse,
  Subscriptions,
} from './subscriptions';
import * as LogsAPI from './logs/logs';
import { Logs } from './logs/logs';
import * as TokensAPI from './tokens/tokens';
import {
  TokenCreateParams,
  TokenCreateResponse,
  TokenDeleteParams,
  TokenDeleteResponse,
  TokenGetParams,
  TokenListParams,
  TokenUpdateParams,
  TokenVerifyParams,
  TokenVerifyResponse,
  Tokens,
} from './tokens/tokens';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../pagination';

export class Accounts extends APIResource {
  members: MembersAPI.Members = new MembersAPI.Members(this._client);
  roles: RolesAPI.Roles = new RolesAPI.Roles(this._client);
  subscriptions: SubscriptionsAPI.Subscriptions = new SubscriptionsAPI.Subscriptions(this._client);
  tokens: TokensAPI.Tokens = new TokensAPI.Tokens(this._client);
  logs: LogsAPI.Logs = new LogsAPI.Logs(this._client);

  /**
   * Create an account (only available for tenant admins at this time)
   */
  create(body: AccountCreateParams, options?: Core.RequestOptions): Core.APIPromise<Account> {
    return (
      this._client.post('/accounts', { body, ...options }) as Core.APIPromise<{ result: Account }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update an existing account.
   */
  update(params: AccountUpdateParams, options?: Core.RequestOptions): Core.APIPromise<Account> {
    const { account_id, ...body } = params;
    return (
      this._client.put(`/accounts/${account_id}`, { body, ...options }) as Core.APIPromise<{
        result: Account;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all accounts you have ownership or verified access to.
   */
  list(
    query?: AccountListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<AccountsV4PagePaginationArray, Account>;
  list(options?: Core.RequestOptions): Core.PagePromise<AccountsV4PagePaginationArray, Account>;
  list(
    query: AccountListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.PagePromise<AccountsV4PagePaginationArray, Account> {
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
  delete(
    params: AccountDeleteParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountDeleteResponse | null> {
    const { account_id } = params;
    return (
      this._client.delete(`/accounts/${account_id}`, options) as Core.APIPromise<{
        result: AccountDeleteResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get information about a specific account that you are a member of.
   */
  get(params: AccountGetParams, options?: Core.RequestOptions): Core.APIPromise<Account> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}`, options) as Core.APIPromise<{ result: Account }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class AccountsV4PagePaginationArray extends V4PagePaginationArray<Account> {}

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
     * @deprecated: Specifies the default nameservers to be used for new zones added to
     * this account.
     *
     * - `cloudflare.standard` for Cloudflare-branded nameservers
     * - `custom.account` for account custom nameservers
     * - `custom.tenant` for tenant custom nameservers
     *
     * See
     * [Custom Nameservers](https://developers.cloudflare.com/dns/additional-options/custom-nameservers/)
     * for more information.
     *
     * Deprecated in favor of
     * [DNS Settings](https://developers.cloudflare.com/api/operations/dns-settings-for-an-account-update-dns-settings).
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
     * Deprecated in favor of
     * [DNS Settings](https://developers.cloudflare.com/api/operations/dns-settings-for-an-account-update-dns-settings).
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
     * @deprecated: Specifies the default nameservers to be used for new zones added to
     * this account.
     *
     * - `cloudflare.standard` for Cloudflare-branded nameservers
     * - `custom.account` for account custom nameservers
     * - `custom.tenant` for tenant custom nameservers
     *
     * See
     * [Custom Nameservers](https://developers.cloudflare.com/dns/additional-options/custom-nameservers/)
     * for more information.
     *
     * Deprecated in favor of
     * [DNS Settings](https://developers.cloudflare.com/api/operations/dns-settings-for-an-account-update-dns-settings).
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
     * Deprecated in favor of
     * [DNS Settings](https://developers.cloudflare.com/api/operations/dns-settings-for-an-account-update-dns-settings).
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

Accounts.Members = Members;
Accounts.Roles = Roles;
Accounts.Subscriptions = Subscriptions;
Accounts.Tokens = Tokens;
Accounts.Logs = Logs;

export declare namespace Accounts {
  export {
    Members as Members,
    type Status as Status,
    type MemberDeleteResponse as MemberDeleteResponse,
    type MemberCreateParams as MemberCreateParams,
    type MemberUpdateParams as MemberUpdateParams,
    type MemberListParams as MemberListParams,
    type MemberDeleteParams as MemberDeleteParams,
    type MemberGetParams as MemberGetParams,
  };

  export { Roles as Roles, type RoleListParams as RoleListParams, type RoleGetParams as RoleGetParams };

  export {
    Subscriptions as Subscriptions,
    type SubscriptionCreateResponse as SubscriptionCreateResponse,
    type SubscriptionUpdateResponse as SubscriptionUpdateResponse,
    type SubscriptionDeleteResponse as SubscriptionDeleteResponse,
    type SubscriptionGetResponse as SubscriptionGetResponse,
    type SubscriptionCreateParams as SubscriptionCreateParams,
    type SubscriptionUpdateParams as SubscriptionUpdateParams,
    type SubscriptionDeleteParams as SubscriptionDeleteParams,
    type SubscriptionGetParams as SubscriptionGetParams,
  };

  export {
    Tokens as Tokens,
    type TokenCreateResponse as TokenCreateResponse,
    type TokenDeleteResponse as TokenDeleteResponse,
    type TokenVerifyResponse as TokenVerifyResponse,
    type TokenCreateParams as TokenCreateParams,
    type TokenUpdateParams as TokenUpdateParams,
    type TokenListParams as TokenListParams,
    type TokenDeleteParams as TokenDeleteParams,
    type TokenGetParams as TokenGetParams,
    type TokenVerifyParams as TokenVerifyParams,
  };

  export { Logs as Logs };
}
