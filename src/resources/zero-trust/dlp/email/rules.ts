// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseRules extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'dlp', 'email', 'rules'] = Object.freeze([
    'zeroTrust',
    'dlp',
    'email',
    'rules',
  ] as const);
}
export class Rules extends BaseRules {}
