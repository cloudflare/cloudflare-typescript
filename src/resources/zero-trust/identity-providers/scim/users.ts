// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseUsers extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'identityProviders', 'scim', 'users'] = Object.freeze(
    ['zeroTrust', 'identityProviders', 'scim', 'users'] as const,
  );
}
export class Users extends BaseUsers {}
