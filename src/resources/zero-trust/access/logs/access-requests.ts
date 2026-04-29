// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseAccessRequests extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'access', 'logs', 'accessRequests'] = Object.freeze([
    'zeroTrust',
    'access',
    'logs',
    'accessRequests',
  ] as const);
}
export class AccessRequests extends BaseAccessRequests {}
