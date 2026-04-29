// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseWANs extends APIResource {
  static override readonly _key: readonly ['magicTransit', 'sites', 'wans'] = Object.freeze([
    'magicTransit',
    'sites',
    'wans',
  ] as const);
}
export class WANs extends BaseWANs {}
