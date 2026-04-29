// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';

export class BaseReferences extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'riskScoring', 'integrations', 'references'] =
    Object.freeze(['zeroTrust', 'riskScoring', 'integrations', 'references'] as const);
}
export class References extends BaseReferences {}
