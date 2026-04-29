// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BasePolicies extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'access', 'applications', 'policies'] = Object.freeze(
    ['zeroTrust', 'access', 'applications', 'policies'] as const,
  );
}
export class Policies extends BasePolicies {}
