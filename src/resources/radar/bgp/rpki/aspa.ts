// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseASPA extends APIResource {
  static override readonly _key: readonly ['radar', 'bgp', 'rpki', 'aspa'] = Object.freeze([
    'radar',
    'bgp',
    'rpki',
    'aspa',
  ] as const);
}
export class ASPA extends BaseASPA {}
