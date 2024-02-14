// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as AccountsAPI from 'cloudflare/resources/accounts';

export class Accounts extends APIResource {
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
}

export type AccountListResponse = Array<unknown>;

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
  export import AccountListResponse = AccountsAPI.AccountListResponse;
  export import AccountListParams = AccountsAPI.AccountListParams;
}
