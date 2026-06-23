// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as Core from '../../core';

export class Entitlements extends APIResource {
  /**
   * List of innate entitlements available for the Tenant.
   */
  get(tenantId: string, options?: Core.RequestOptions): Core.APIPromise<TenantEntitlements> {
    return (
      this._client.get(`/tenants/${tenantId}/entitlements`, options) as Core.APIPromise<{
        result: TenantEntitlements;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface TenantEntitlements {
  allow_add_subdomain: TenantEntitlements.AllowAddSubdomain;

  allow_auto_accept_invites: TenantEntitlements.AllowAutoAcceptInvites;

  cname_setup_allowed: TenantEntitlements.CNAMESetupAllowed;

  custom_entitlements: Array<TenantEntitlements.CustomEntitlement> | null;

  mhs_certificate_count: TenantEntitlements.MhsCertificateCount;

  partial_setup_allowed: TenantEntitlements.PartialSetupAllowed;
}

export namespace TenantEntitlements {
  export interface AllowAddSubdomain {
    type: 'bool';

    value: boolean;
  }

  export interface AllowAutoAcceptInvites {
    type: 'bool';

    value: boolean;
  }

  export interface CNAMESetupAllowed {
    type: 'bool';

    value: boolean;
  }

  export interface CustomEntitlement {
    allocation:
      | CustomEntitlement.OrganizationsAPIMaxCountAllocation
      | CustomEntitlement.OrganizationsAPIBoolAllocation
      | CustomEntitlement.OrganizationsAPINullAllocation;

    feature: CustomEntitlement.Feature;
  }

  export namespace CustomEntitlement {
    export interface OrganizationsAPIMaxCountAllocation {
      type: 'max_count';

      value: number;
    }

    export interface OrganizationsAPIBoolAllocation {
      type: 'bool';

      value: boolean;
    }

    export interface OrganizationsAPINullAllocation {
      type: '';

      value?: unknown;
    }

    export interface Feature {
      key: string;
    }
  }

  export interface MhsCertificateCount {
    type: 'max_count';

    value: number;
  }

  export interface PartialSetupAllowed {
    type: 'bool';

    value: boolean;
  }
}

export declare namespace Entitlements {
  export { type TenantEntitlements as TenantEntitlements };
}
