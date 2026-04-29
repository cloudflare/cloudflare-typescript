// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseTop extends APIResource {
  static override readonly _key: readonly ['radar', 'dns', 'top'] = Object.freeze([
    'radar',
    'dns',
    'top',
  ] as const);
}
export class Top extends BaseTop {}
