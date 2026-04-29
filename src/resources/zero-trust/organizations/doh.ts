// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseDOH extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'organizations', 'doh'] = Object.freeze([
    'zeroTrust',
    'organizations',
    'doh',
  ] as const);
}
export class DOH extends BaseDOH {}
