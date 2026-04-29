// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseUserPolicyChecks extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'access', 'applications', 'userPolicyChecks'] =
    Object.freeze(['zeroTrust', 'access', 'applications', 'userPolicyChecks'] as const);
}
export class UserPolicyChecks extends BaseUserPolicyChecks {}
