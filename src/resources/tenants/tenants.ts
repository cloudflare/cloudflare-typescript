// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccountTypesAPI from './account-types';
import {
  AccountTypeListResponse,
  AccountTypeListResponsesSinglePage,
  AccountTypes,
  BaseAccountTypes,
} from './account-types';
import * as AccountsAPI from './accounts';
import { Accounts, BaseAccounts, TenantAccount, TenantAccountsSinglePage } from './accounts';
import * as EntitlementsAPI from './entitlements';
import { BaseEntitlements, Entitlements, TenantEntitlements } from './entitlements';
import * as MembershipsAPI from './memberships';
import { BaseMemberships, Memberships, TenantMembership, TenantMembershipsSinglePage } from './memberships';
import { APIPromise } from '../../core/api-promise';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseTenants extends APIResource {
  static override readonly _key: readonly ['tenants'] = Object.freeze(['tenants'] as const);

  /**
   * Retrieves a Tenant by Tenant ID.
   */
  get(tenantID: string, options?: RequestOptions): APIPromise<Tenant> {
    return (
      this._client.get(path`/tenants/${tenantID}`, options) as APIPromise<{ result: Tenant }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Tenants extends BaseTenants {
  accountTypes: AccountTypesAPI.AccountTypes = new AccountTypesAPI.AccountTypes(this._client);
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);
  entitlements: EntitlementsAPI.Entitlements = new EntitlementsAPI.Entitlements(this._client);
  memberships: MembershipsAPI.Memberships = new MembershipsAPI.Memberships(this._client);
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
Tenants.BaseAccountTypes = BaseAccountTypes;
Tenants.Accounts = Accounts;
Tenants.BaseAccounts = BaseAccounts;
Tenants.Entitlements = Entitlements;
Tenants.BaseEntitlements = BaseEntitlements;
Tenants.Memberships = Memberships;
Tenants.BaseMemberships = BaseMemberships;

export declare namespace Tenants {
  export { type Tenant as Tenant };

  export {
    AccountTypes as AccountTypes,
    BaseAccountTypes as BaseAccountTypes,
    type AccountTypeListResponse as AccountTypeListResponse,
    type AccountTypeListResponsesSinglePage as AccountTypeListResponsesSinglePage,
  };

  export {
    Accounts as Accounts,
    BaseAccounts as BaseAccounts,
    type TenantAccount as TenantAccount,
    type TenantAccountsSinglePage as TenantAccountsSinglePage,
  };

  export {
    Entitlements as Entitlements,
    BaseEntitlements as BaseEntitlements,
    type TenantEntitlements as TenantEntitlements,
  };

  export {
    Memberships as Memberships,
    BaseMemberships as BaseMemberships,
    type TenantMembership as TenantMembership,
    type TenantMembershipsSinglePage as TenantMembershipsSinglePage,
  };
}
