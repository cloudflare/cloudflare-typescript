// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
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

export namespace Alerting {
  export import AvailableAlerts = AvailableAlertsAPI.AvailableAlerts;
  export import AvailableAlertListResponse = AvailableAlertsAPI.AvailableAlertListResponse;
  export import AvailableAlertListParams = AvailableAlertsAPI.AvailableAlertListParams;
  export import Destinations = DestinationsAPI.Destinations;
  export import History = HistoryAPI.History;
  export import AaaHistory = HistoryAPI.AaaHistory;
  export import AaaHistoriesV4PagePaginationArray = HistoryAPI.AaaHistoriesV4PagePaginationArray;
  export import HistoryListParams = HistoryAPI.HistoryListParams;
  export import Policies = PoliciesAPI.Policies;
  export import AaaPolicies = PoliciesAPI.AaaPolicies;
  export import PolicyCreateResponse = PoliciesAPI.PolicyCreateResponse;
  export import PolicyUpdateResponse = PoliciesAPI.PolicyUpdateResponse;
  export import PolicyListResponse = PoliciesAPI.PolicyListResponse;
  export import PolicyDeleteResponse = PoliciesAPI.PolicyDeleteResponse;
  export import PolicyCreateParams = PoliciesAPI.PolicyCreateParams;
  export import PolicyUpdateParams = PoliciesAPI.PolicyUpdateParams;
  export import PolicyListParams = PoliciesAPI.PolicyListParams;
  export import PolicyDeleteParams = PoliciesAPI.PolicyDeleteParams;
  export import PolicyGetParams = PoliciesAPI.PolicyGetParams;
}
