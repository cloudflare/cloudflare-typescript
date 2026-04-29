// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseFull extends APIResource {
  static override readonly _key: readonly ['magicNetworkMonitoring', 'configs', 'full'] = Object.freeze([
    'magicNetworkMonitoring',
    'configs',
    'full',
  ] as const);
}
export class Full extends BaseFull {}
