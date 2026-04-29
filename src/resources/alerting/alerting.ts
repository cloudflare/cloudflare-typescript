// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AvailableAlertsAPI from './available-alerts';
import { AvailableAlerts, BaseAvailableAlerts } from './available-alerts';
import * as HistoryAPI from './history';
import { BaseHistory, History } from './history';
import * as PoliciesAPI from './policies';
import { BasePolicies, Policies } from './policies';
import * as SilencesAPI from './silences';
import { BaseSilences, Silences } from './silences';
import * as DestinationsAPI from './destinations/destinations';
import { BaseDestinations, Destinations } from './destinations/destinations';

export class BaseAlerting extends APIResource {
  static override readonly _key: readonly ['alerting'] = Object.freeze(['alerting'] as const);
}
export class Alerting extends BaseAlerting {
  availableAlerts: AvailableAlertsAPI.AvailableAlerts = new AvailableAlertsAPI.AvailableAlerts(this._client);
  destinations: DestinationsAPI.Destinations = new DestinationsAPI.Destinations(this._client);
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
  policies: PoliciesAPI.Policies = new PoliciesAPI.Policies(this._client);
  silences: SilencesAPI.Silences = new SilencesAPI.Silences(this._client);
}

Alerting.AvailableAlerts = AvailableAlerts;
Alerting.BaseAvailableAlerts = BaseAvailableAlerts;
Alerting.Destinations = Destinations;
Alerting.BaseDestinations = BaseDestinations;
Alerting.History = History;
Alerting.BaseHistory = BaseHistory;
Alerting.Policies = Policies;
Alerting.BasePolicies = BasePolicies;
Alerting.Silences = Silences;
Alerting.BaseSilences = BaseSilences;

export declare namespace Alerting {
  export { AvailableAlerts as AvailableAlerts, BaseAvailableAlerts as BaseAvailableAlerts };

  export { Destinations as Destinations, BaseDestinations as BaseDestinations };

  export { History as History, BaseHistory as BaseHistory };

  export { Policies as Policies, BasePolicies as BasePolicies };

  export { Silences as Silences, BaseSilences as BaseSilences };
}
