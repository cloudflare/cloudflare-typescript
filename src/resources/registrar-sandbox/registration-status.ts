// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';

export class BaseRegistrationStatus extends APIResource {
  static override readonly _key: readonly ['registrarSandbox', 'registrationStatus'] = Object.freeze([
    'registrarSandbox',
    'registrationStatus',
  ] as const);
}
export class RegistrationStatus extends BaseRegistrationStatus {}
