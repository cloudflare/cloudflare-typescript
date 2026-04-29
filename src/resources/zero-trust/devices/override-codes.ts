// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseOverrideCodes extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'devices', 'overrideCodes'] = Object.freeze([
    'zeroTrust',
    'devices',
    'overrideCodes',
  ] as const);
}
export class OverrideCodes extends BaseOverrideCodes {}
