// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseZone extends APIResource {
  static override readonly _key: readonly ['dns', 'settings', 'zone'] = Object.freeze([
    'dns',
    'settings',
    'zone',
  ] as const);
}
export class Zone extends BaseZone {}
