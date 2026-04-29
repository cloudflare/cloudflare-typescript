// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseActiveSessions extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'access', 'users', 'activeSessions'] = Object.freeze([
    'zeroTrust',
    'access',
    'users',
    'activeSessions',
  ] as const);
}
export class ActiveSessions extends BaseActiveSessions {}
