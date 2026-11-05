// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { PagePromise, V4PagePaginationArray, type V4PagePaginationArrayParams } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseAccounts extends APIResource {
  static override readonly _key: readonly ['tenants', 'accounts'] = Object.freeze([
    'tenants',
    'accounts',
  ] as const);

  /**
   * Lists all Cloudflare accounts across this tenant's hierarchy using the legacy
   * Account response shape. Use `GET /organizations/{organization_id}/accounts` to
   * list only accounts immediately attached to a specific Organization using the
   * modern Account response shape. Use `page_token` and `page_size` for cursor
   * pagination, or provide `page` and `per_page` together for legacy offset
   * pagination. Cursor pagination takes precedence when requested.
   */
  list(
    tenantID: string,
    query: AccountListParams | null | undefined = {},
    options?: RequestOptions,
  ): PagePromise<AccountListResponsesV4PagePaginationArray, AccountListResponse> {
    return this._client.getAPIList(
      path`/tenants/${tenantID}/accounts`,
      V4PagePaginationArray<AccountListResponse>,
      { query, ...options },
    );
  }
}
export class Accounts extends BaseAccounts {}

export type AccountListResponsesV4PagePaginationArray = V4PagePaginationArray<AccountListResponse>;

export interface TenantAccount {
  id: string;

  created_on: string;

  name: string | null;

  settings: TenantAccount.Settings;

  type: 'standard' | 'enterprise';

  /**
   * Account tags, present only when `include_tags=true` is requested.
   */
  tags?: { [key: string]: string };
}

export namespace TenantAccount {
  export interface Settings {
    abuse_contact_email: string | null;

    access_approval_expiry: string | null;

    api_access_enabled: boolean | null;

    /**
     * @deprecated Use
     * [DNS Settings](https://developers.cloudflare.com/api/operations/dns-settings-for-an-account-list-dns-settings)
     * instead. Deprecated.
     */
    default_nameservers: string | null;

    enforce_twofactor: boolean | null;

    /**
     * @deprecated Use
     * [DNS Settings](https://developers.cloudflare.com/api/operations/dns-settings-for-an-account-list-dns-settings)
     * instead. Deprecated.
     */
    use_account_custom_ns_by_default: boolean | null;
  }
}

export interface AccountListResponse {
  account_pubname: string | null;

  account_tag: string;

  account_type: 'standard' | 'enterprise';

  created_on: string;

  settings: AccountListResponse.Settings;
}

export namespace AccountListResponse {
  export interface Settings {
    access_approval_expiry: string | null;

    api_access_enabled: boolean;

    enforce_two_factor: boolean;

    use_account_custom_ns_by_default: boolean;
  }
}

export interface AccountListParams extends V4PagePaginationArrayParams {
  account_pubname?: AccountListParams.AccountPubname;

  /**
   * Sort direction for the order_by field. Valid values: `asc`, `desc`. Defaults to
   * `asc` when order_by is specified.
   */
  direction?: 'asc' | 'desc';

  /**
   * Whether to calculate and return the exact `result_info.total_size` for cursor
   * pagination. Defaults to true. When false, `total_size` is omitted. Legacy
   * `page`/`per_page` requests always calculate `total_count`.
   */
  include_total?: boolean;

  name?: AccountListParams.Name;

  /**
   * Field to order results by. Currently supported values: `account_name`.
   */
  order_by?: 'account_name';

  /**
   * The amount of items to return. Defaults to 10.
   */
  page_size?: number;

  /**
   * An opaque token returned from the last list response that when provided will
   * retrieve the next page.
   *
   * Parameters used to filter the retrieved list must remain in subsequent requests
   * with a page token.
   */
  page_token?: string;

  /**
   * Filter accounts by lifecycle status. Defaults to `active`.
   */
  status?: 'active' | 'deleted';
}

export namespace AccountListParams {
  export interface AccountPubname {
    /**
     * (case-insensitive) Filter the list of accounts to where the account_pubname
     * contains a particular string.
     */
    contains?: string;

    /**
     * (case-insensitive) Filter the list of accounts to where the account_pubname ends
     * with a particular string.
     */
    endsWith?: string;

    /**
     * (case-insensitive) Filter the list of accounts to where the account_pubname
     * starts with a particular string.
     */
    startsWith?: string;
  }

  export interface Name {
    /**
     * (case-insensitive) Filter the list of accounts to where the name contains a
     * particular string.
     */
    contains?: string;

    /**
     * (case-insensitive) Filter the list of accounts to where the name ends with a
     * particular string.
     */
    endsWith?: string;

    /**
     * (case-insensitive) Filter the list of accounts to where the name starts with a
     * particular string.
     */
    startsWith?: string;
  }
}

export declare namespace Accounts {
  export {
    type TenantAccount as TenantAccount,
    type AccountListResponse as AccountListResponse,
    type AccountListResponsesV4PagePaginationArray as AccountListResponsesV4PagePaginationArray,
    type AccountListParams as AccountListParams,
  };
}
