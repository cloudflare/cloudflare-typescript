// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as AvailableAlertsAPI from './available-alerts';
import {
  AvailableAlertListParams,
  AvailableAlertListResponse,
  AvailableAlerts,
  BaseAvailableAlerts,
} from './available-alerts';
import * as HistoryAPI from './history';
import {
  BaseHistoryResource,
  HistoriesV4PagePaginationArray,
  History,
  HistoryListParams,
  HistoryResource,
} from './history';
import * as PoliciesAPI from './policies';
import {
  BasePolicies,
  Mechanism,
  Policies,
  PoliciesSinglePage,
  Policy,
  PolicyCreateParams,
  PolicyCreateResponse,
  PolicyDeleteParams,
  PolicyDeleteResponse,
  PolicyFilter,
  PolicyGetParams,
  PolicyListParams,
  PolicyUpdateParams,
  PolicyUpdateResponse,
} from './policies';
import * as SilencesAPI from './silences';
import {
  BaseSilences,
  SilenceCreateParams,
  SilenceCreateResponse,
  SilenceDeleteParams,
  SilenceDeleteResponse,
  SilenceGetParams,
  SilenceGetResponse,
  SilenceListParams,
  SilenceListResponse,
  SilenceListResponsesSinglePage,
  SilenceUpdateParams,
  SilenceUpdateResponse,
  SilenceUpdateResponsesSinglePage,
  Silences,
} from './silences';
import * as DestinationsAPI from './destinations/destinations';
import { BaseDestinations, Destinations } from './destinations/destinations';

export class BaseAlerting extends APIResource {
  static override readonly _key: readonly ['alerting'] = Object.freeze(['alerting'] as const);
}
export class Alerting extends BaseAlerting {
  availableAlerts: AvailableAlertsAPI.AvailableAlerts = new AvailableAlertsAPI.AvailableAlerts(this._client);
  destinations: DestinationsAPI.Destinations = new DestinationsAPI.Destinations(this._client);
  history: HistoryAPI.HistoryResource = new HistoryAPI.HistoryResource(this._client);
  policies: PoliciesAPI.Policies = new PoliciesAPI.Policies(this._client);
  silences: SilencesAPI.Silences = new SilencesAPI.Silences(this._client);
}

Alerting.AvailableAlerts = AvailableAlerts;
Alerting.BaseAvailableAlerts = BaseAvailableAlerts;
Alerting.Destinations = Destinations;
Alerting.BaseDestinations = BaseDestinations;
Alerting.HistoryResource = HistoryResource;
Alerting.BaseHistoryResource = BaseHistoryResource;
Alerting.Policies = Policies;
Alerting.BasePolicies = BasePolicies;
Alerting.Silences = Silences;
Alerting.BaseSilences = BaseSilences;

export declare namespace Alerting {
  export {
    AvailableAlerts as AvailableAlerts,
    BaseAvailableAlerts as BaseAvailableAlerts,
    type AvailableAlertListResponse as AvailableAlertListResponse,
    type AvailableAlertListParams as AvailableAlertListParams,
  };

  export { Destinations as Destinations, BaseDestinations as BaseDestinations };

  export {
    HistoryResource as HistoryResource,
    BaseHistoryResource as BaseHistoryResource,
    type History as History,
    type HistoriesV4PagePaginationArray as HistoriesV4PagePaginationArray,
    type HistoryListParams as HistoryListParams,
  };

  export {
    Policies as Policies,
    BasePolicies as BasePolicies,
    type Mechanism as Mechanism,
    type Policy as Policy,
    type PolicyFilter as PolicyFilter,
    type PolicyCreateResponse as PolicyCreateResponse,
    type PolicyUpdateResponse as PolicyUpdateResponse,
    type PolicyDeleteResponse as PolicyDeleteResponse,
    type PoliciesSinglePage as PoliciesSinglePage,
    type PolicyCreateParams as PolicyCreateParams,
    type PolicyUpdateParams as PolicyUpdateParams,
    type PolicyListParams as PolicyListParams,
    type PolicyDeleteParams as PolicyDeleteParams,
    type PolicyGetParams as PolicyGetParams,
  };

  export {
    Silences as Silences,
    BaseSilences as BaseSilences,
    type SilenceCreateResponse as SilenceCreateResponse,
    type SilenceUpdateResponse as SilenceUpdateResponse,
    type SilenceListResponse as SilenceListResponse,
    type SilenceDeleteResponse as SilenceDeleteResponse,
    type SilenceGetResponse as SilenceGetResponse,
    type SilenceUpdateResponsesSinglePage as SilenceUpdateResponsesSinglePage,
    type SilenceListResponsesSinglePage as SilenceListResponsesSinglePage,
    type SilenceCreateParams as SilenceCreateParams,
    type SilenceUpdateParams as SilenceUpdateParams,
    type SilenceListParams as SilenceListParams,
    type SilenceDeleteParams as SilenceDeleteParams,
    type SilenceGetParams as SilenceGetParams,
  };
}
