// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import { APIPromise } from '../../core';
import * as Core from '../../core';
import { AvailableAlerts } from './available-alerts';
import { Destinations } from './destinations/destinations';
import { HistoryResource } from './history';
import { Policies } from './policies';
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
  export import AvailableAlertListResponse = AvailableAlertsAPI.AvailableAlertListResponse;
  export import AvailableAlertListParams = AvailableAlertsAPI.AvailableAlertListParams;
  export import Destinations = DestinationsAPI.Destinations;
  export import HistoryResource = HistoryAPI.HistoryResource;
  export import History = HistoryAPI.History;
  export import HistoriesV4PagePaginationArray = HistoryAPI.HistoriesV4PagePaginationArray;
  export import HistoryListParams = HistoryAPI.HistoryListParams;
  export import Policies = PoliciesAPI.Policies;
  export import Mechanism = PoliciesAPI.Mechanism;
  export import Policy = PoliciesAPI.Policy;
  export import PolicyFilter = PoliciesAPI.PolicyFilter;
  export import PolicyCreateResponse = PoliciesAPI.PolicyCreateResponse;
  export import PolicyUpdateResponse = PoliciesAPI.PolicyUpdateResponse;
  export import PolicyDeleteResponse = PoliciesAPI.PolicyDeleteResponse;
  export import PoliciesSinglePage = PoliciesAPI.PoliciesSinglePage;
  export import PolicyCreateParams = PoliciesAPI.PolicyCreateParams;
  export import PolicyUpdateParams = PoliciesAPI.PolicyUpdateParams;
  export import PolicyListParams = PoliciesAPI.PolicyListParams;
  export import PolicyDeleteParams = PoliciesAPI.PolicyDeleteParams;
  export import PolicyGetParams = PoliciesAPI.PolicyGetParams;
}
