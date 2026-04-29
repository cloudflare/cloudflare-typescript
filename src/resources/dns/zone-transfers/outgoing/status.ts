// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseStatus extends APIResource {
  static override readonly _key: readonly ['dns', 'zoneTransfers', 'outgoing', 'status'] = Object.freeze([
    'dns',
    'zoneTransfers',
    'outgoing',
    'status',
  ] as const);
}
export class Status extends BaseStatus {}
