// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseIntegration extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'dlp', 'entries', 'integration'] = Object.freeze([
    'zeroTrust',
    'dlp',
    'entries',
    'integration',
  ] as const);
}
export class Integration extends BaseIntegration {}
