// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as DevicesAPI from './devices';
import { BaseDevices, Devices } from './devices';

export class BaseFleetStatus extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'dex', 'fleetStatus'] = Object.freeze([
    'zeroTrust',
    'dex',
    'fleetStatus',
  ] as const);
}
export class FleetStatus extends BaseFleetStatus {
  devices: DevicesAPI.Devices = new DevicesAPI.Devices(this._client);
}

FleetStatus.Devices = Devices;
FleetStatus.BaseDevices = BaseDevices;

export declare namespace FleetStatus {
  export { Devices as Devices, BaseDevices as BaseDevices };
}
