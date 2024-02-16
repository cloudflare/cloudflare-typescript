// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as AccountsAPI from 'cloudflare/resources/accounts';

export class Accounts extends APIResource {
  /**
   * Update an existing account.
   */
  update(
    accountId: unknown,
    body: AccountUpdateParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountUpdateResponse> {
    return (
      this._client.put(`/accounts/${accountId}`, { body, ...options }) as Core.APIPromise<{
        result: AccountUpdateResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * List all accounts you have ownership or verified access to.
   */
  list(query?: AccountListParams, options?: Core.RequestOptions): Core.APIPromise<AccountListResponse | null>;
  list(options?: Core.RequestOptions): Core.APIPromise<AccountListResponse | null>;
  list(
    query: AccountListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountListResponse | null> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return (
      this._client.get('/accounts', { query, ...options }) as Core.APIPromise<{
        result: AccountListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get information about a specific account that you are a member of.
   */
  get(accountId: unknown, options?: Core.RequestOptions): Core.APIPromise<AccountGetResponse> {
    return (
      this._client.get(`/accounts/${accountId}`, options) as Core.APIPromise<{ result: AccountGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type AccountUpdateResponse = unknown | string | null;

export type AccountListResponse = Array<unknown>;

export type AccountGetResponse = unknown | string | null;

export interface AccountUpdateParams {
  /**
   * Account name
   */
  name: string;

  /**
   * Account settings
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
     * Indicates whether new zones should use the account-level custom nameservers by
     * default.
     *
     * Deprecated in favor of `default_nameservers`.
     */
    use_account_custom_ns_by_default?: boolean;
  }
}

export interface AccountListParams {
  /**
   * Direction to order results.
   */
  direction?: 'asc' | 'desc';

  /**
   * Page number of paginated results.
   */
  page?: number;

  /**
   * Maximum number of results per page.
   */
  per_page?: number;
}

export namespace Accounts {
  export import AccountUpdateResponse = AccountsAPI.AccountUpdateResponse;
  export import AccountListResponse = AccountsAPI.AccountListResponse;
  export import AccountGetResponse = AccountsAPI.AccountGetResponse;
  export import AccountUpdateParams = AccountsAPI.AccountUpdateParams;
  export import AccountListParams = AccountsAPI.AccountListParams;
}
