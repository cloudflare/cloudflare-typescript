// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { PagePromise, SinglePage } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';
import { path } from '../../internal/utils/path';

export class BaseMemberships extends APIResource {
  static override readonly _key: readonly ['tenants', 'memberships'] = Object.freeze([
    'tenants',
    'memberships',
  ] as const);

  /**
   * List of active members (Cloudflare users) for the Tenant.
   */
  list(
    tenantID: string,
    options?: RequestOptions,
  ): PagePromise<TenantMembershipsSinglePage, TenantMembership> {
    return this._client.getAPIList(
      path`/tenants/${tenantID}/memberships`,
      SinglePage<TenantMembership>,
      options,
    );
  }
}
export class Memberships extends BaseMemberships {}

export type TenantMembershipsSinglePage = SinglePage<TenantMembership>;

export interface TenantMembership {
  user_email: string;

  user_name: string;

  user_tag: string;
}

export declare namespace Memberships {
  export {
    type TenantMembership as TenantMembership,
    type TenantMembershipsSinglePage as TenantMembershipsSinglePage,
  };
}
