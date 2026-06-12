// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';
import { SinglePage } from '../../pagination';

export class Memberships extends APIResource {
  /**
   * List of active members (Cloudflare users) for the Tenant.
   */
  list(
    tenantId: string,
    options?: Core.RequestOptions,
  ): Core.PagePromise<TenantMembershipsSinglePage, TenantMembership> {
    return this._client.getAPIList(`/tenants/${tenantId}/memberships`, TenantMembershipsSinglePage, options);
  }
}

export class TenantMembershipsSinglePage extends SinglePage<TenantMembership> {}

export interface TenantMembership {
  user_email: string;

  user_name: string;

  user_tag: string;
}

Memberships.TenantMembershipsSinglePage = TenantMembershipsSinglePage;

export declare namespace Memberships {
  export {
    type TenantMembership as TenantMembership,
    TenantMembershipsSinglePage as TenantMembershipsSinglePage,
  };
}
