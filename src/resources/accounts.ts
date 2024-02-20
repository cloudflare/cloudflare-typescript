// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as AccountsAPI from 'cloudflare/resources/accounts';
import { V4PagePaginationArray, type V4PagePaginationArrayParams } from 'cloudflare/pagination';

export class Accounts extends APIResource {
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
  get(accountId: unknown, options?: Core.RequestOptions): Core.APIPromise<AccountGetResponse> {
    return (
      this._client.get(`/accounts/${accountId}`, options) as Core.APIPromise<{ result: AccountGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Update an existing account.
   */
  replace(
    accountId: unknown,
    body: AccountReplaceParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AccountReplaceResponse> {
    return (
      this._client.put(`/accounts/${accountId}`, { body, ...options }) as Core.APIPromise<{
        result: AccountReplaceResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export class AccountListResponsesV4PagePaginationArray extends V4PagePaginationArray<AccountListResponse> {}

export type AccountListResponse = unknown;

export type AccountGetResponse = unknown | string | null;

export type AccountReplaceResponse = unknown | string | null;

export interface AccountListParams extends V4PagePaginationArrayParams {
  /**
   * Direction to order results.
   */
  direction?: 'asc' | 'desc';
}

export interface AccountReplaceParams {
  /**
   * Account name
   */
  name: string;

  /**
   * Account settings
   */
  settings?: AccountReplaceParams.Settings;
}

export namespace AccountReplaceParams {
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

export namespace Accounts {
  export import AccountListResponse = AccountsAPI.AccountListResponse;
  export import AccountGetResponse = AccountsAPI.AccountGetResponse;
  export import AccountReplaceResponse = AccountsAPI.AccountReplaceResponse;
  export import AccountListResponsesV4PagePaginationArray = AccountsAPI.AccountListResponsesV4PagePaginationArray;
  export import AccountListParams = AccountsAPI.AccountListParams;
  export import AccountReplaceParams = AccountsAPI.AccountReplaceParams;
}
