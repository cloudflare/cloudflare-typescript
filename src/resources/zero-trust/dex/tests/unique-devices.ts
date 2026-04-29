// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseUniqueDevices extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'dex', 'tests', 'uniqueDevices'] = Object.freeze([
    'zeroTrust',
    'dex',
    'tests',
    'uniqueDevices',
  ] as const);
}
export class UniqueDevices extends BaseUniqueDevices {}
