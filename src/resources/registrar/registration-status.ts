// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseRegistrationStatus extends APIResource {
  static override readonly _key: readonly ['registrar', 'registrationStatus'] = Object.freeze([
    'registrar',
    'registrationStatus',
  ] as const);
}
export class RegistrationStatus extends BaseRegistrationStatus {}
