// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';

export class BaseSummary extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'riskScoring', 'summary'] = Object.freeze([
    'zeroTrust',
    'riskScoring',
    'summary',
  ] as const);
}
export class Summary extends BaseSummary {}
