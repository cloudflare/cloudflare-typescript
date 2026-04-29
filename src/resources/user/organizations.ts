// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseOrganizations extends APIResource {
  static override readonly _key: readonly ['user', 'organizations'] = Object.freeze([
    'user',
    'organizations',
  ] as const);
}
export class Organizations extends BaseOrganizations {}
