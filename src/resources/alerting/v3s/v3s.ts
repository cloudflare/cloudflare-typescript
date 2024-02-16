// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as HistoriesAPI from 'cloudflare/resources/alerting/v3s/histories';
import * as PoliciesAPI from 'cloudflare/resources/alerting/v3s/policies';
import * as DestinationsAPI from 'cloudflare/resources/alerting/v3s/destinations/destinations';

export class V3s extends APIResource {
  destinations: DestinationsAPI.Destinations = new DestinationsAPI.Destinations(this._client);
  histories: HistoriesAPI.Histories = new HistoriesAPI.Histories(this._client);
  policies: PoliciesAPI.Policies = new PoliciesAPI.Policies(this._client);
}

export namespace V3s {
  export import Destinations = DestinationsAPI.Destinations;
  export import Histories = HistoriesAPI.Histories;
  export import HistoryNotificationHistoryListHistoryResponse = HistoriesAPI.HistoryNotificationHistoryListHistoryResponse;
  export import HistoryNotificationHistoryListHistoryParams = HistoriesAPI.HistoryNotificationHistoryListHistoryParams;
  export import Policies = PoliciesAPI.Policies;
  export import PolicyUpdateResponse = PoliciesAPI.PolicyUpdateResponse;
  export import PolicyDeleteResponse = PoliciesAPI.PolicyDeleteResponse;
  export import PolicyGetResponse = PoliciesAPI.PolicyGetResponse;
  export import PolicyNotificationPoliciesCreateANotificationPolicyResponse = PoliciesAPI.PolicyNotificationPoliciesCreateANotificationPolicyResponse;
  export import PolicyNotificationPoliciesListNotificationPoliciesResponse = PoliciesAPI.PolicyNotificationPoliciesListNotificationPoliciesResponse;
  export import PolicyUpdateParams = PoliciesAPI.PolicyUpdateParams;
  export import PolicyNotificationPoliciesCreateANotificationPolicyParams = PoliciesAPI.PolicyNotificationPoliciesCreateANotificationPolicyParams;
}
