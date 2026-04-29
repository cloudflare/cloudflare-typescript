// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseProfiles extends APIResource {
  static override readonly _key: readonly ['billing', 'profiles'] = Object.freeze([
    'billing',
    'profiles',
  ] as const);
}
export class Profiles extends BaseProfiles {}
