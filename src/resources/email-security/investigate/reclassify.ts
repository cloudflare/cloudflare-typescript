// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseReclassify extends APIResource {
  static override readonly _key: readonly ['emailSecurity', 'investigate', 'reclassify'] = Object.freeze([
    'emailSecurity',
    'investigate',
    'reclassify',
  ] as const);
}
export class Reclassify extends BaseReclassify {}
