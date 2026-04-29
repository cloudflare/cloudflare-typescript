// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseRegistrations extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'devices', 'registrations'] = Object.freeze([
    'zeroTrust',
    'devices',
    'registrations',
  ] as const);
}
export class Registrations extends BaseRegistrations {}
