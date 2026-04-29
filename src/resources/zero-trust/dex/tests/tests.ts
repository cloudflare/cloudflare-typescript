// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as UniqueDevicesAPI from './unique-devices';
import { UniqueDevices } from './unique-devices';

export class Tests extends APIResource {
  uniqueDevices: UniqueDevicesAPI.UniqueDevices = new UniqueDevicesAPI.UniqueDevices(this._client);
}

Tests.UniqueDevices = UniqueDevices;

export declare namespace Tests {
  export { UniqueDevices as UniqueDevices };
}
