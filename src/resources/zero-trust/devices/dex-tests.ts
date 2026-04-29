// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseDEXTests extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'devices', 'dexTests'] = Object.freeze([
    'zeroTrust',
    'devices',
    'dexTests',
  ] as const);
}
export class DEXTests extends BaseDEXTests {}
