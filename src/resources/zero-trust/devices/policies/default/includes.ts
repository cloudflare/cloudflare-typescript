// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';

export class BaseIncludes extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'devices', 'policies', 'default', 'includes'] =
    Object.freeze(['zeroTrust', 'devices', 'policies', 'default', 'includes'] as const);
}
export class Includes extends BaseIncludes {}
