// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseGlobalWARPOverride extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'devices', 'resilience', 'globalWARPOverride'] =
    Object.freeze(['zeroTrust', 'devices', 'resilience', 'globalWARPOverride'] as const);
}
export class GlobalWARPOverride extends BaseGlobalWARPOverride {}
