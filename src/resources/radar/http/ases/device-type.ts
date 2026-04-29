// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseDeviceType extends APIResource {
  static override readonly _key: readonly ['radar', 'http', 'ases', 'deviceType'] = Object.freeze([
    'radar',
    'http',
    'ases',
    'deviceType',
  ] as const);
}
export class DeviceType extends BaseDeviceType {}
