// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseRoles extends APIResource {
  static override readonly _key: readonly ['accounts', 'roles'] = Object.freeze([
    'accounts',
    'roles',
  ] as const);
}
export class Roles extends BaseRoles {}
