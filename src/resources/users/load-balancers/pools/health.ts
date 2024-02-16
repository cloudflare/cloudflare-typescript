// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as HealthAPI from 'cloudflare/resources/users/load-balancers/pools/health';

export class Health extends APIResource {
  /**
   * Fetch the latest pool health status for a single pool.
   */
  loadBalancerPoolsPoolHealthDetails(
    poolId: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HealthLoadBalancerPoolsPoolHealthDetailsResponse> {
    return (
      this._client.get(`/user/load_balancers/pools/${poolId}/health`, options) as Core.APIPromise<{
        result: HealthLoadBalancerPoolsPoolHealthDetailsResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * A list of regions from which to run health checks. Null means every Cloudflare
 * data center.
 */
export type HealthLoadBalancerPoolsPoolHealthDetailsResponse = unknown | string | null;

export namespace Health {
  export import HealthLoadBalancerPoolsPoolHealthDetailsResponse = HealthAPI.HealthLoadBalancerPoolsPoolHealthDetailsResponse;
}
