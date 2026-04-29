// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseDevices extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'dex', 'commands', 'devices'] = Object.freeze([
    'zeroTrust',
    'dex',
    'commands',
    'devices',
  ] as const);
}
export class Devices extends BaseDevices {}
