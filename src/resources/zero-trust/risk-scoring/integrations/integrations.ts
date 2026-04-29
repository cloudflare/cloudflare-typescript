// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as ReferencesAPI from './references';
import { BaseReferences, References } from './references';

export class BaseIntegrations extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'riskScoring', 'integrations'] = Object.freeze([
    'zeroTrust',
    'riskScoring',
    'integrations',
  ] as const);
}
export class Integrations extends BaseIntegrations {
  references: ReferencesAPI.References = new ReferencesAPI.References(this._client);
}

Integrations.References = References;
Integrations.BaseReferences = BaseReferences;

export declare namespace Integrations {
  export { References as References, BaseReferences as BaseReferences };
}
