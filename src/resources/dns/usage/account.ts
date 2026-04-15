// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseAccount extends APIResource {
  static override readonly _key: readonly ['dns', 'usage', 'account'] = Object.freeze([
    'dns',
    'usage',
    'account',
  ] as const);
}
export class Account extends BaseAccount {}
