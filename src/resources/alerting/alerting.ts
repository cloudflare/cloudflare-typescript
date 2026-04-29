// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AvailableAlertsAPI from './available-alerts';
import { AvailableAlerts } from './available-alerts';
import * as HistoryAPI from './history';
import { History } from './history';
import * as PoliciesAPI from './policies';
import { Policies } from './policies';
import * as SilencesAPI from './silences';
import { Silences } from './silences';
import * as DestinationsAPI from './destinations/destinations';
import { Destinations } from './destinations/destinations';

export class Alerting extends APIResource {
  availableAlerts: AvailableAlertsAPI.AvailableAlerts = new AvailableAlertsAPI.AvailableAlerts(this._client);
  destinations: DestinationsAPI.Destinations = new DestinationsAPI.Destinations(this._client);
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
  policies: PoliciesAPI.Policies = new PoliciesAPI.Policies(this._client);
  silences: SilencesAPI.Silences = new SilencesAPI.Silences(this._client);
}

Alerting.AvailableAlerts = AvailableAlerts;
Alerting.Destinations = Destinations;
Alerting.History = History;
Alerting.Policies = Policies;
Alerting.Silences = Silences;

export declare namespace Alerting {
  export { AvailableAlerts as AvailableAlerts };

  export { Destinations as Destinations };

  export { History as History };

  export { Policies as Policies };

  export { Silences as Silences };
}
