// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AccountTypesAPI from './account-types';
import { AccountTypes, BaseAccountTypes } from './account-types';
import * as AccountsAPI from './accounts';
import {
  AccountListParams,
  AccountListResponse,
  AccountListResponsesV4PagePaginationArray,
  Accounts,
  BaseAccounts,
  TenantAccount,
} from './accounts';
import * as EntitlementsAPI from './entitlements';
import { BaseEntitlements, Entitlements } from './entitlements';
import * as MembershipsAPI from './memberships';
import { BaseMemberships, Memberships } from './memberships';

export class BaseTenants extends APIResource {
  static override readonly _key: readonly ['tenants'] = Object.freeze(['tenants'] as const);
}
export class Tenants extends BaseTenants {
  accountTypes: AccountTypesAPI.AccountTypes = new AccountTypesAPI.AccountTypes(this._client);
  accounts: AccountsAPI.Accounts = new AccountsAPI.Accounts(this._client);
  entitlements: EntitlementsAPI.Entitlements = new EntitlementsAPI.Entitlements(this._client);
  memberships: MembershipsAPI.Memberships = new MembershipsAPI.Memberships(this._client);
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
  export { AccountTypes as AccountTypes, BaseAccountTypes as BaseAccountTypes };

  export {
    Accounts as Accounts,
    BaseAccounts as BaseAccounts,
    type TenantAccount as TenantAccount,
    type AccountListResponse as AccountListResponse,
    type AccountListResponsesV4PagePaginationArray as AccountListResponsesV4PagePaginationArray,
    type AccountListParams as AccountListParams,
  };

  export { Entitlements as Entitlements, BaseEntitlements as BaseEntitlements };

  export { Memberships as Memberships, BaseMemberships as BaseMemberships };
}
