// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BasePayBadDebt extends APIResource {
  static override readonly _key: readonly ['accounts', 'payBadDebt'] = Object.freeze([
    'accounts',
    'payBadDebt',
  ] as const);
}
export class PayBadDebt extends BasePayBadDebt {}
