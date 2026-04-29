// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseAppTypes extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'gateway', 'appTypes'] = Object.freeze([
    'zeroTrust',
    'gateway',
    'appTypes',
  ] as const);
}
export class AppTypes extends BaseAppTypes {}
