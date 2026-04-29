// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';

export class BaseUpdates extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'access', 'logs', 'scim', 'updates'] = Object.freeze([
    'zeroTrust',
    'access',
    'logs',
    'scim',
    'updates',
  ] as const);
}
export class Updates extends BaseUpdates {}
