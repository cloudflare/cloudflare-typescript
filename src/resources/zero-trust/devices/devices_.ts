// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseDevices extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'devices', 'devices'] = Object.freeze([
    'zeroTrust',
    'devices',
    'devices',
  ] as const);
}
export class Devices extends BaseDevices {}
