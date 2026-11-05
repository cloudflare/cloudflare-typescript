// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseTenantCustomNameservers extends APIResource {
  static override readonly _key: readonly ['tenantCustomNameservers'] = Object.freeze([
    'tenantCustomNameservers',
  ] as const);
}
export class TenantCustomNameservers extends BaseTenantCustomNameservers {}
