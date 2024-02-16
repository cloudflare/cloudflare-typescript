// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ReferencesAPI from 'cloudflare/resources/load-balancers/monitors/references';

export class References extends APIResource {
  /**
   * Get the list of resources that reference the provided monitor.
   */
  accountLoadBalancerMonitorsListMonitorReferences(
    accountId: string,
    monitorId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ReferenceAccountLoadBalancerMonitorsListMonitorReferencesResponse | null> {
    return (
      this._client.get(
        `/accounts/${accountId}/load_balancers/monitors/${monitorId}/references`,
        options,
      ) as Core.APIPromise<{
        result: ReferenceAccountLoadBalancerMonitorsListMonitorReferencesResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * List of resources that reference a given monitor.
 */
export type ReferenceAccountLoadBalancerMonitorsListMonitorReferencesResponse =
  Array<ReferenceAccountLoadBalancerMonitorsListMonitorReferencesResponse.ReferenceAccountLoadBalancerMonitorsListMonitorReferencesResponseItem>;

export namespace ReferenceAccountLoadBalancerMonitorsListMonitorReferencesResponse {
  export interface ReferenceAccountLoadBalancerMonitorsListMonitorReferencesResponseItem {
    reference_type?: '*' | 'referral' | 'referrer';

    resource_id?: string;

    resource_name?: string;

    resource_type?: string;
  }
}

export namespace References {
  export import ReferenceAccountLoadBalancerMonitorsListMonitorReferencesResponse = ReferencesAPI.ReferenceAccountLoadBalancerMonitorsListMonitorReferencesResponse;
}
