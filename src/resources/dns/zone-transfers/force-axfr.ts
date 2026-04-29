// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseForceAXFR extends APIResource {
  static override readonly _key: readonly ['dns', 'zoneTransfers', 'forceAXFR'] = Object.freeze([
    'dns',
    'zoneTransfers',
    'forceAXFR',
  ] as const);
}
export class ForceAXFR extends BaseForceAXFR {}
