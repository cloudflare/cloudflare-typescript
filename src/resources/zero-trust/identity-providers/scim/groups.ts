// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseGroups extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'identityProviders', 'scim', 'groups'] =
    Object.freeze(['zeroTrust', 'identityProviders', 'scim', 'groups'] as const);
}
export class Groups extends BaseGroups {}
