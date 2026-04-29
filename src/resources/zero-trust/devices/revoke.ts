// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseRevoke extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'devices', 'revoke'] = Object.freeze([
    'zeroTrust',
    'devices',
    'revoke',
  ] as const);
}
export class Revoke extends BaseRevoke {}
