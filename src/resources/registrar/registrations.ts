// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseRegistrations extends APIResource {
  static override readonly _key: readonly ['registrar', 'registrations'] = Object.freeze([
    'registrar',
    'registrations',
  ] as const);
}
export class Registrations extends BaseRegistrations {}
