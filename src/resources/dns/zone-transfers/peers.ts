// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BasePeers extends APIResource {
  static override readonly _key: readonly ['dns', 'zoneTransfers', 'peers'] = Object.freeze([
    'dns',
    'zoneTransfers',
    'peers',
  ] as const);
}
export class Peers extends BasePeers {}
