// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseUnrevoke extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'devices', 'unrevoke'] = Object.freeze([
    'zeroTrust',
    'devices',
    'unrevoke',
  ] as const);
}
export class Unrevoke extends BaseUnrevoke {}
