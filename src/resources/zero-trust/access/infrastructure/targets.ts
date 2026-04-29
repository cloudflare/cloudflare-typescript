// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseTargets extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'access', 'infrastructure', 'targets'] =
    Object.freeze(['zeroTrust', 'access', 'infrastructure', 'targets'] as const);
}
export class Targets extends BaseTargets {}
