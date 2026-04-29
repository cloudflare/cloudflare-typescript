// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseFailedLogins extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'access', 'users', 'failedLogins'] = Object.freeze([
    'zeroTrust',
    'access',
    'users',
    'failedLogins',
  ] as const);
}
export class FailedLogins extends BaseFailedLogins {}
