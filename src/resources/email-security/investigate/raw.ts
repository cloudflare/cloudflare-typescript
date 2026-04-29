// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseRaw extends APIResource {
  static override readonly _key: readonly ['emailSecurity', 'investigate', 'raw'] = Object.freeze([
    'emailSecurity',
    'investigate',
    'raw',
  ] as const);
}
export class Raw extends BaseRaw {}
