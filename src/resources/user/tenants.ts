// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import { PagePromise, SinglePage } from '../../core/pagination';
import { RequestOptions } from '../../internal/request-options';

export class BaseTenants extends APIResource {
  static override readonly _key: readonly ['user', 'tenants'] = Object.freeze(['user', 'tenants'] as const);

  /**
   * Lists the Cloudflare tenants in which the authenticated user has direct
   * membership using the legacy Tenant response shape. Use `GET /organizations` to
   * list Organizations the user can access, including through hierarchy, using the
   * modern Organization response shape.
   *
   * @example
   * ```ts
   * // Automatically fetches more pages as needed.
   * for await (const tenantListResponse of client.user.tenants.list()) {
   *   // ...
   * }
   * ```
   */
  list(options?: RequestOptions): PagePromise<TenantListResponsesSinglePage, TenantListResponse> {
    return this._client.getAPIList('/user/tenants', SinglePage<TenantListResponse>, options);
  }
}
export class Tenants extends BaseTenants {}

export type TenantListResponsesSinglePage = SinglePage<TenantListResponse>;

export interface TenantListResponse {
  cdate: string;

  customer_id: string | null;

  edate: string;

  tenant_contacts: TenantListResponse.TenantContacts;

  tenant_labels: Array<string> | null;

  tenant_metadata: TenantListResponse.TenantMetadata;

  tenant_name: string;

  tenant_network: TenantListResponse.TenantNetwork;

  tenant_status: string;

  tenant_tag: string;

  tenant_type: string;

  tenant_units: Array<TenantListResponse.TenantUnit> | null;

  /**
   * Which top-level dashboard experiences to render for this tenant; both may be
   * true.
   */
  ui_flags: TenantListResponse.UIFlags;
}

export namespace TenantListResponse {
  export interface TenantContacts {
    email?: string;

    website?: string;
  }

  export interface TenantMetadata {
    billing_account_type?: string;

    configuration_account?: string;

    created_by?: string;

    dns?: TenantMetadata.DNS;

    flags?: { [key: string]: string };

    innate_account_entitlements?: Array<TenantMetadata.InnateAccountEntitlement>;

    tenant_entitlements?: Array<TenantMetadata.TenantEntitlement>;
  }

  export namespace TenantMetadata {
    export interface DNS {
      ns_pool: DNS.NSPool;
    }

    export namespace DNS {
      export interface NSPool {
        primary: string | null;

        secondary: string | null;
      }
    }

    export interface InnateAccountEntitlement {
      allocation: InnateAccountEntitlement.Allocation;

      feature: InnateAccountEntitlement.Feature;
    }

    export namespace InnateAccountEntitlement {
      export interface Allocation {
        type: string;

        value: boolean | number | string | { [key: string]: unknown } | null | Array<unknown>;
      }

      export interface Feature {
        key: string;
      }
    }

    export interface TenantEntitlement {
      allocation: TenantEntitlement.Allocation;

      feature: TenantEntitlement.Feature;
    }

    export namespace TenantEntitlement {
      export interface Allocation {
        type: string;

        value: boolean | number | string | { [key: string]: unknown } | null | Array<unknown>;
      }

      export interface Feature {
        key: string;
      }
    }
  }

  export interface TenantNetwork {
    choices?: { [key: string]: unknown };
  }

  export interface TenantUnit {
    unit_memberships: Array<TenantUnit.UnitMembership> | null;

    unit_metadata: unknown;

    unit_name: string;

    unit_status: string;

    unit_tag: string;
  }

  export namespace TenantUnit {
    export interface UnitMembership {
      member_metadata: unknown;

      member_status: string;

      member_tag: string;
    }
  }

  /**
   * Which top-level dashboard experiences to render for this tenant; both may be
   * true.
   */
  export interface UIFlags {
    /**
     * Render the Organizations experience for this tenant.
     */
    show_orgs_ui: boolean;

    /**
     * Render the legacy Tenants experience for this tenant.
     */
    show_tenants_ui: boolean;
  }
}

export declare namespace Tenants {
  export {
    type TenantListResponse as TenantListResponse,
    type TenantListResponsesSinglePage as TenantListResponsesSinglePage,
  };
}
