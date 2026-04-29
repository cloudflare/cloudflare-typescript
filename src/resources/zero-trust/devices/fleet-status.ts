// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseFleetStatus extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'devices', 'fleetStatus'] = Object.freeze([
    'zeroTrust',
    'devices',
    'fleetStatus',
  ] as const);
}
export class FleetStatus extends BaseFleetStatus {}
