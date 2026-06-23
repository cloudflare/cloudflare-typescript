// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { SinglePage } from '../../pagination';

export class Accounts extends APIResource {
  /**
   * List of accounts for the Tenant.
   */
  list(
    tenantId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<TenantAccountsSinglePage, TenantAccount> {
    return this._client.getAPIList(`/tenants/${tenantId}/accounts`, TenantAccountsSinglePage, options);
  }
}

export class TenantAccountsSinglePage extends SinglePage<TenantAccount> {}

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

Accounts.TenantAccountsSinglePage = TenantAccountsSinglePage;

export declare namespace Accounts {
  export { type TenantAccount as TenantAccount, TenantAccountsSinglePage as TenantAccountsSinglePage };
}
