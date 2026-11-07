// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseEntitlements extends APIResource {
  static override readonly _key: readonly ['tenants', 'entitlements'] = Object.freeze([
    'tenants',
    'entitlements',
  ] as const);
}
export class Entitlements extends BaseEntitlements {}
