// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseMemberships extends APIResource {
  static override readonly _key: readonly ['tenants', 'memberships'] = Object.freeze([
    'tenants',
    'memberships',
  ] as const);
}
export class Memberships extends BaseMemberships {}
