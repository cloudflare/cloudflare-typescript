// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as ReferencesAPI from 'cloudflare/resources/load-balancers/pools/references';

export class References extends APIResource {
  /**
   * Get the list of resources that reference the provided pool.
   */
  accountLoadBalancerPoolsListPoolReferences(
    accountIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ReferenceAccountLoadBalancerPoolsListPoolReferencesResponse | null> {
    return (
      this._client.get(
        `/accounts/${accountIdentifier}/load_balancers/pools/${identifier}/references`,
        options,
      ) as Core.APIPromise<{ result: ReferenceAccountLoadBalancerPoolsListPoolReferencesResponse | null }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * List of resources that reference a given pool.
 */
export type ReferenceAccountLoadBalancerPoolsListPoolReferencesResponse =
  Array<ReferenceAccountLoadBalancerPoolsListPoolReferencesResponse.ReferenceAccountLoadBalancerPoolsListPoolReferencesResponseItem>;

export namespace ReferenceAccountLoadBalancerPoolsListPoolReferencesResponse {
  export interface ReferenceAccountLoadBalancerPoolsListPoolReferencesResponseItem {
    reference_type?: '*' | 'referral' | 'referrer';

    resource_id?: string;

    resource_name?: string;

    resource_type?: string;
  }
}

export namespace References {
  export import ReferenceAccountLoadBalancerPoolsListPoolReferencesResponse = ReferencesAPI.ReferenceAccountLoadBalancerPoolsListPoolReferencesResponse;
}
