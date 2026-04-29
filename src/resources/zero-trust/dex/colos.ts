// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseColos extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'dex', 'colos'] = Object.freeze([
    'zeroTrust',
    'dex',
    'colos',
  ] as const);
}
export class Colos extends BaseColos {}
