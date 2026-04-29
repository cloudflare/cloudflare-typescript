// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseBehaviours extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'riskScoring', 'behaviours'] = Object.freeze([
    'zeroTrust',
    'riskScoring',
    'behaviours',
  ] as const);
}
export class Behaviours extends BaseBehaviours {}
