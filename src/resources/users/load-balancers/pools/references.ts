// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ReferencesAPI from 'cloudflare/resources/users/load-balancers/pools/references';

export class References extends APIResource {
  /**
   * Get the list of resources that reference the provided pool.
   */
  loadBalancerPoolsListPoolReferences(
    poolId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ReferenceLoadBalancerPoolsListPoolReferencesResponse | null> {
    return (
      this._client.get(`/user/load_balancers/pools/${poolId}/references`, options) as Core.APIPromise<{
        result: ReferenceLoadBalancerPoolsListPoolReferencesResponse | null;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * List of resources that reference a given pool.
 */
export type ReferenceLoadBalancerPoolsListPoolReferencesResponse =
  Array<ReferenceLoadBalancerPoolsListPoolReferencesResponse.ReferenceLoadBalancerPoolsListPoolReferencesResponseItem>;

export namespace ReferenceLoadBalancerPoolsListPoolReferencesResponse {
  export interface ReferenceLoadBalancerPoolsListPoolReferencesResponseItem {
    reference_type?: '*' | 'referral' | 'referrer';

    resource_id?: string;

    resource_name?: string;

    resource_type?: string;
  }
}

export namespace References {
  export import ReferenceLoadBalancerPoolsListPoolReferencesResponse = ReferencesAPI.ReferenceLoadBalancerPoolsListPoolReferencesResponse;
}
