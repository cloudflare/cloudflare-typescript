// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as V3API from 'cloudflare/resources/alerting/v3/v3';
import * as HistoriesAPI from 'cloudflare/resources/alerting/v3/histories';
import * as PoliciesAPI from 'cloudflare/resources/alerting/v3/policies';
import * as DestinationsAPI from 'cloudflare/resources/alerting/v3/destinations/destinations';

export class V3 extends APIResource {
  destinations: DestinationsAPI.Destinations = new DestinationsAPI.Destinations(this._client);
  histories: HistoriesAPI.Histories = new HistoriesAPI.Histories(this._client);
  policies: PoliciesAPI.Policies = new PoliciesAPI.Policies(this._client);

  /**
   * Gets a list of all alert types for which an account is eligible.
   */
  list(params: V3ListParams, options?: Core.RequestOptions): Core.APIPromise<V3ListResponse | null> {
    const { account_id } = params;
    return (
      this._client.get(`/accounts/${account_id}/alerting/v3/available_alerts`, options) as Core.APIPromise<{
        result: V3ListResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export type V3ListResponse = unknown | Array<unknown> | string;

export interface V3ListParams {
  /**
   * The account id
   */
  account_id: string;
}

export namespace V3 {
  export import V3ListResponse = V3API.V3ListResponse;
  export import V3ListParams = V3API.V3ListParams;
  export import Destinations = DestinationsAPI.Destinations;
  export import Histories = HistoriesAPI.Histories;
  export import AaaHistory = HistoriesAPI.AaaHistory;
  export import AaaHistoriesV4PagePaginationArray = HistoriesAPI.AaaHistoriesV4PagePaginationArray;
  export import HistoryListParams = HistoriesAPI.HistoryListParams;
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
