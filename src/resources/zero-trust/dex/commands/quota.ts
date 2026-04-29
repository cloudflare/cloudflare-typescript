// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseQuota extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'dex', 'commands', 'quota'] = Object.freeze([
    'zeroTrust',
    'dex',
    'commands',
    'quota',
  ] as const);
}
export class Quota extends BaseQuota {}
