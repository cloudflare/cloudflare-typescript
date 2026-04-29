// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';

export class BaseExcludes extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'devices', 'policies', 'default', 'excludes'] =
    Object.freeze(['zeroTrust', 'devices', 'policies', 'default', 'excludes'] as const);
}
export class Excludes extends BaseExcludes {}
