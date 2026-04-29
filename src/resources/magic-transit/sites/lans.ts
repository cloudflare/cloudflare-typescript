// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseLANs extends APIResource {
  static override readonly _key: readonly ['magicTransit', 'sites', 'lans'] = Object.freeze([
    'magicTransit',
    'sites',
    'lans',
  ] as const);
}
export class LANs extends BaseLANs {}
