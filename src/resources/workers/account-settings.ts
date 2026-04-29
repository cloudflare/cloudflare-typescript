// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseAccountSettings extends APIResource {
  static override readonly _key: readonly ['workers', 'accountSettings'] = Object.freeze([
    'workers',
    'accountSettings',
  ] as const);
}
export class AccountSettings extends BaseAccountSettings {}
