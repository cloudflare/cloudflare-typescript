// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseMove extends APIResource {
  static override readonly _key: readonly ['emailSecurity', 'investigate', 'move'] = Object.freeze([
    'emailSecurity',
    'investigate',
    'move',
  ] as const);
}
export class Move extends BaseMove {}
