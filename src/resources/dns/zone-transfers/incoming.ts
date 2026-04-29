// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseIncoming extends APIResource {
  static override readonly _key: readonly ['dns', 'zoneTransfers', 'incoming'] = Object.freeze([
    'dns',
    'zoneTransfers',
    'incoming',
  ] as const);
}
export class Incoming extends BaseIncoming {}
