// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as DevicesAPI from './devices';
import { Devices } from './devices';

export class FleetStatus extends APIResource {
  devices: DevicesAPI.Devices = new DevicesAPI.Devices(this._client);
}

FleetStatus.Devices = Devices;

export declare namespace FleetStatus {
  export { Devices as Devices };
}
