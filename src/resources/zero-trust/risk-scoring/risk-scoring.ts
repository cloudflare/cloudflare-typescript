// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as BehavioursAPI from './behaviours';
import { Behaviours } from './behaviours';
import * as SummaryAPI from './summary';
import { Summary } from './summary';
import * as IntegrationsAPI from './integrations/integrations';
import { Integrations } from './integrations/integrations';

export class RiskScoring extends APIResource {
  behaviours: BehavioursAPI.Behaviours = new BehavioursAPI.Behaviours(this._client);
  summary: SummaryAPI.Summary = new SummaryAPI.Summary(this._client);
  integrations: IntegrationsAPI.Integrations = new IntegrationsAPI.Integrations(this._client);
}

RiskScoring.Behaviours = Behaviours;
RiskScoring.Summary = Summary;
RiskScoring.Integrations = Integrations;

export declare namespace RiskScoring {
  export { Behaviours as Behaviours };

  export { Summary as Summary };

  export { Integrations as Integrations };
}
