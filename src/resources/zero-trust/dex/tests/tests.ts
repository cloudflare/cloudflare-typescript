// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as UniqueDevicesAPI from './unique-devices';
import { BaseUniqueDevices, UniqueDevices } from './unique-devices';

export class BaseTests extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'dex', 'tests'] = Object.freeze([
    'zeroTrust',
    'dex',
    'tests',
  ] as const);
}
export class Tests extends BaseTests {
  uniqueDevices: UniqueDevicesAPI.UniqueDevices = new UniqueDevicesAPI.UniqueDevices(this._client);
}

Tests.UniqueDevices = UniqueDevices;
Tests.BaseUniqueDevices = BaseUniqueDevices;

export declare namespace Tests {
  export { UniqueDevices as UniqueDevices, BaseUniqueDevices as BaseUniqueDevices };
}
