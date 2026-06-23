// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import * as AccountTypesAPI from './account-types';
import { AccountTypeListResponse, AccountTypeListResponsesSinglePage, AccountTypes } from './account-types';
import * as AccountsAPI from './accounts';
import { Accounts, TenantAccount, TenantAccountsSinglePage } from './accounts';
import * as EntitlementsAPI from './entitlements';
import { Entitlements, TenantEntitlements } from './entitlements';
import * as MembershipsAPI from './memberships';
import { Memberships, TenantMembership, TenantMembershipsSinglePage } from './memberships';

export class Tenants extends APIResource {
  accountTypes: AccountTypesAPI.AccountTypes = new AccountTypesAPI.AccountTypes(this._client);
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);
  entitlements: EntitlementsAPI.Entitlements = new EntitlementsAPI.Entitlements(this._client);
  memberships: MembershipsAPI.Memberships = new MembershipsAPI.Memberships(this._client);

  /**
   * Retrieves a Tenant by Tenant ID.
   */
  get(tenantId: string, options?: Core.RequestOptions): Core.APIPromise<Tenant> {
    return (
      this._client.get(`/tenants/${tenantId}`, options) as Core.APIPromise<{ result: Tenant }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface Tenant {
  cdate: string;

  edate: string;

  tenant_contacts: Tenant.TenantContacts;

  tenant_labels: Array<string>;

  tenant_metadata: Tenant.TenantMetadata;

  tenant_name: string;

  tenant_network: unknown;

  tenant_status: string;

  tenant_tag: string;

  tenant_type: string;

  tenant_units: Array<Tenant.TenantUnit>;

  customer_id?: string;
}

export namespace Tenant {
  export interface TenantContacts {
    email?: string;

    website?: string;
  }

  export interface TenantMetadata {
    dns?: TenantMetadata.DNS;
  }

  export namespace TenantMetadata {
    export interface DNS {
      ns_pool: DNS.NSPool;
    }

    export namespace DNS {
      export interface NSPool {
        primary?: string;

        secondary?: string;
      }
    }
  }

  export interface TenantUnit {
    unit_memberships: Array<unknown>;

    unit_metadata: unknown;

    unit_name: string;

    unit_status: string;

    unit_tag: string;
  }
}

Tenants.AccountTypes = AccountTypes;
Tenants.AccountTypeListResponsesSinglePage = AccountTypeListResponsesSinglePage;
Tenants.Accounts = Accounts;
Tenants.TenantAccountsSinglePage = TenantAccountsSinglePage;
Tenants.Entitlements = Entitlements;
Tenants.Memberships = Memberships;
Tenants.TenantMembershipsSinglePage = TenantMembershipsSinglePage;

export declare namespace Tenants {
  export { type Tenant as Tenant };

  export {
    AccountTypes as AccountTypes,
    type AccountTypeListResponse as AccountTypeListResponse,
    AccountTypeListResponsesSinglePage as AccountTypeListResponsesSinglePage,
  };

  export {
    Accounts as Accounts,
    type TenantAccount as TenantAccount,
    TenantAccountsSinglePage as TenantAccountsSinglePage,
  };

  export { Entitlements as Entitlements, type TenantEntitlements as TenantEntitlements };

  export {
    Memberships as Memberships,
    type TenantMembership as TenantMembership,
    TenantMembershipsSinglePage as TenantMembershipsSinglePage,
  };
}
