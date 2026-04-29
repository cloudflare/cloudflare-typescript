// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseOrigin extends APIResource {
  static override readonly _key: readonly ['radar', 'postQuantum', 'origin'] = Object.freeze([
    'radar',
    'postQuantum',
    'origin',
  ] as const);
}
export class Origin extends BaseOrigin {}
