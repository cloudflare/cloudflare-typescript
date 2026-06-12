// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { PagePromise, SinglePage } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseAccounts extends APIResource {
  static override readonly _key: readonly ['tenants', 'accounts'] = Object.freeze([
    'tenants',
    'accounts',
  ] as const);

  /**
   * List of accounts for the Tenant.
   */
  list(tenantID: string, options?: RequestOptions): PagePromise<TenantAccountsSinglePage, TenantAccount> {
    return this._client.getAPIList(path`/tenants/${tenantID}/accounts`, SinglePage<TenantAccount>, options);
  }
}
export class Accounts extends BaseAccounts {}

export type TenantAccountsSinglePage = SinglePage<TenantAccount>;

export interface TenantAccount {
  id: string;

  created_on: string;

  name: string | null;

  settings: TenantAccount.Settings;

  type: 'standard' | 'enterprise';
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

export declare namespace Accounts {
  export { type TenantAccount as TenantAccount, type TenantAccountsSinglePage as TenantAccountsSinglePage };
}
