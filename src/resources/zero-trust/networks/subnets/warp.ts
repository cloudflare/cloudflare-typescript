// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseWARP extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'networks', 'subnets', 'warp'] = Object.freeze([
    'zeroTrust',
    'networks',
    'subnets',
    'warp',
  ] as const);
}
export class WARP extends BaseWARP {}
