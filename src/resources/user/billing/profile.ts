// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseProfile extends APIResource {
  static override readonly _key: readonly ['user', 'billing', 'profile'] = Object.freeze([
    'user',
    'billing',
    'profile',
  ] as const);
}
export class Profile extends BaseProfile {}
