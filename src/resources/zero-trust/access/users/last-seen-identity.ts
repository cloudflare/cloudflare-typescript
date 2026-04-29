// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseLastSeenIdentity extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'access', 'users', 'lastSeenIdentity'] =
    Object.freeze(['zeroTrust', 'access', 'users', 'lastSeenIdentity'] as const);
}
export class LastSeenIdentity extends BaseLastSeenIdentity {}
