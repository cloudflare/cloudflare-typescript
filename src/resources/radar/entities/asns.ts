// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseASNs extends APIResource {
  static override readonly _key: readonly ['radar', 'entities', 'asns'] = Object.freeze([
    'radar',
    'entities',
    'asns',
  ] as const);
}
export class ASNs extends BaseASNs {}
