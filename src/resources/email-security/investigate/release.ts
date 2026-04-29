// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseRelease extends APIResource {
  static override readonly _key: readonly ['emailSecurity', 'investigate', 'release'] = Object.freeze([
    'emailSecurity',
    'investigate',
    'release',
  ] as const);
}
export class Release extends BaseRelease {}
