// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseAccounts extends APIResource {
  static override readonly _key: readonly ['addressing', 'addressMaps', 'accounts'] = Object.freeze([
    'addressing',
    'addressMaps',
    'accounts',
  ] as const);
}
export class Accounts extends BaseAccounts {}
