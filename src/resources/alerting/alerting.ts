// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as AvailableAlertsAPI from './available-alerts';
import * as HistoryAPI from './history';
import * as PoliciesAPI from './policies';
import * as DestinationsAPI from './destinations/destinations';

export class Alerting extends APIResource {
  availableAlerts: AvailableAlertsAPI.AvailableAlerts = new AvailableAlertsAPI.AvailableAlerts(this._client);
  destinations: DestinationsAPI.Destinations = new DestinationsAPI.Destinations(this._client);
  history: HistoryAPI.HistoryResource = new HistoryAPI.HistoryResource(this._client);
  policies: PoliciesAPI.Policies = new PoliciesAPI.Policies(this._client);
}

export namespace Alerting {
  export import AvailableAlerts = AvailableAlertsAPI.AvailableAlerts;
  export type AvailableAlertListResponse = AvailableAlertsAPI.AvailableAlertListResponse;
  export type AvailableAlertListParams = AvailableAlertsAPI.AvailableAlertListParams;
  export import Destinations = DestinationsAPI.Destinations;
  export import HistoryResource = HistoryAPI.HistoryResource;
  export type History = HistoryAPI.History;
  export import HistoriesV4PagePaginationArray = HistoryAPI.HistoriesV4PagePaginationArray;
  export type HistoryListParams = HistoryAPI.HistoryListParams;
  export import Policies = PoliciesAPI.Policies;
  export type Mechanism = PoliciesAPI.Mechanism;
  export type Policy = PoliciesAPI.Policy;
  export type PolicyFilter = PoliciesAPI.PolicyFilter;
  export type PolicyCreateResponse = PoliciesAPI.PolicyCreateResponse;
  export type PolicyUpdateResponse = PoliciesAPI.PolicyUpdateResponse;
  export type PolicyDeleteResponse = PoliciesAPI.PolicyDeleteResponse;
  export import PoliciesSinglePage = PoliciesAPI.PoliciesSinglePage;
  export type PolicyCreateParams = PoliciesAPI.PolicyCreateParams;
  export type PolicyUpdateParams = PoliciesAPI.PolicyUpdateParams;
  export type PolicyListParams = PoliciesAPI.PolicyListParams;
  export type PolicyDeleteParams = PoliciesAPI.PolicyDeleteParams;
  export type PolicyGetParams = PoliciesAPI.PolicyGetParams;
}
