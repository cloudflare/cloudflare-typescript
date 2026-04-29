// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseTop extends APIResource {
  static override readonly _key: readonly ['radar', 'quality', 'speed', 'top'] = Object.freeze([
    'radar',
    'quality',
    'speed',
    'top',
  ] as const);
}
export class Top extends BaseTop {}
