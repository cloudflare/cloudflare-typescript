// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseBGPPrefixes extends APIResource {
  static override readonly _key: readonly ['addressing', 'prefixes', 'bgpPrefixes'] = Object.freeze([
    'addressing',
    'prefixes',
    'bgpPrefixes',
  ] as const);
}
export class BGPPrefixes extends BaseBGPPrefixes {}
