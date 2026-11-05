// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseAccountTypes extends APIResource {
  static override readonly _key: readonly ['tenants', 'accountTypes'] = Object.freeze([
    'tenants',
    'accountTypes',
  ] as const);
}
export class AccountTypes extends BaseAccountTypes {}
