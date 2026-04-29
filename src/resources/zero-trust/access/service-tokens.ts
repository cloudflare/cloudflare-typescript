// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseServiceTokens extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'access', 'serviceTokens'] = Object.freeze([
    'zeroTrust',
    'access',
    'serviceTokens',
  ] as const);
}
export class ServiceTokens extends BaseServiceTokens {}
