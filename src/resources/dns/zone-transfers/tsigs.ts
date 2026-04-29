// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseTSIGs extends APIResource {
  static override readonly _key: readonly ['dns', 'zoneTransfers', 'tsigs'] = Object.freeze([
    'dns',
    'zoneTransfers',
    'tsigs',
  ] as const);
}
export class TSIGs extends BaseTSIGs {}
