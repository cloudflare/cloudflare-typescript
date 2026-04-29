// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as BehavioursAPI from './behaviours';
import { BaseBehaviours, Behaviours } from './behaviours';
import * as SummaryAPI from './summary';
import { BaseSummary, Summary } from './summary';
import * as IntegrationsAPI from './integrations/integrations';
import { BaseIntegrations, Integrations } from './integrations/integrations';

export class BaseRiskScoring extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'riskScoring'] = Object.freeze([
    'zeroTrust',
    'riskScoring',
  ] as const);
}
export class RiskScoring extends BaseRiskScoring {
  behaviours: BehavioursAPI.Behaviours = new BehavioursAPI.Behaviours(this._client);
  summary: SummaryAPI.Summary = new SummaryAPI.Summary(this._client);
  integrations: IntegrationsAPI.Integrations = new IntegrationsAPI.Integrations(this._client);
}

RiskScoring.Behaviours = Behaviours;
RiskScoring.BaseBehaviours = BaseBehaviours;
RiskScoring.Summary = Summary;
RiskScoring.BaseSummary = BaseSummary;
RiskScoring.Integrations = Integrations;
RiskScoring.BaseIntegrations = BaseIntegrations;

export declare namespace RiskScoring {
  export { Behaviours as Behaviours, BaseBehaviours as BaseBehaviours };

  export { Summary as Summary, BaseSummary as BaseSummary };

  export { Integrations as Integrations, BaseIntegrations as BaseIntegrations };
}
