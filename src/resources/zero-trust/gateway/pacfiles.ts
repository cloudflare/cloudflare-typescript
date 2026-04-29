// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BasePacfiles extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'gateway', 'pacfiles'] = Object.freeze([
    'zeroTrust',
    'gateway',
    'pacfiles',
  ] as const);
}
export class Pacfiles extends BasePacfiles {}
