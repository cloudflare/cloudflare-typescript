// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as AlertingAPI from 'cloudflare/resources/alerting/alerting';
import * as AvailableAlertsAPI from 'cloudflare/resources/alerting/available-alerts';
import * as HistoryAPI from 'cloudflare/resources/alerting/history';
import * as PoliciesAPI from 'cloudflare/resources/alerting/policies';
import * as DestinationsAPI from 'cloudflare/resources/alerting/destinations/destinations';

export class Alerting extends APIResource {
  availableAlerts: AvailableAlertsAPI.AvailableAlerts = new AvailableAlertsAPI.AvailableAlerts(this._client);
  destinations: DestinationsAPI.Destinations = new DestinationsAPI.Destinations(this._client);
  history: HistoryAPI.History = new HistoryAPI.History(this._client);
  policies: PoliciesAPI.Policies = new PoliciesAPI.Policies(this._client);
}

export interface UnnamedSchemaRefD6e23adacaca017802aaa484a8b3f405 {
  /**
   * UUID
   */
  id?: string;
}

export namespace Alerting {
  export import UnnamedSchemaRefD6e23adacaca017802aaa484a8b3f405 = AlertingAPI.UnnamedSchemaRefD6e23adacaca017802aaa484a8b3f405;
  export import AvailableAlerts = AvailableAlertsAPI.AvailableAlerts;
  export import AvailableAlertListResponse = AvailableAlertsAPI.AvailableAlertListResponse;
  export import AvailableAlertListParams = AvailableAlertsAPI.AvailableAlertListParams;
  export import Destinations = DestinationsAPI.Destinations;
  export import History = HistoryAPI.History;
  export import AlertingHistory = HistoryAPI.AlertingHistory;
  export import AlertingHistoriesV4PagePaginationArray = HistoryAPI.AlertingHistoriesV4PagePaginationArray;
  export import HistoryListParams = HistoryAPI.HistoryListParams;
  export import Policies = PoliciesAPI.Policies;
  export import AlertingPolicies = PoliciesAPI.AlertingPolicies;
  export import PolicyCreateResponse = PoliciesAPI.PolicyCreateResponse;
  export import PolicyUpdateResponse = PoliciesAPI.PolicyUpdateResponse;
  export import AlertingPoliciesSinglePage = PoliciesAPI.AlertingPoliciesSinglePage;
  export import PolicyCreateParams = PoliciesAPI.PolicyCreateParams;
  export import PolicyUpdateParams = PoliciesAPI.PolicyUpdateParams;
  export import PolicyListParams = PoliciesAPI.PolicyListParams;
  export import PolicyDeleteParams = PoliciesAPI.PolicyDeleteParams;
  export import PolicyGetParams = PoliciesAPI.PolicyGetParams;
}
