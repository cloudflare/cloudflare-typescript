// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseWARPChangeEvents extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'dex', 'warpChangeEvents'] = Object.freeze([
    'zeroTrust',
    'dex',
    'warpChangeEvents',
  ] as const);
}
export class WARPChangeEvents extends BaseWARPChangeEvents {}
