// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as HealthAPI from 'cloudflare/resources/load-balancers/pools/health';

export class Health extends APIResource {
  /**
   * Fetch the latest pool health status for a single pool.
   */
  accountLoadBalancerPoolsPoolHealthDetails(
    accountIdentifier: string,
    identifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HealthAccountLoadBalancerPoolsPoolHealthDetailsResponse> {
    return (
      this._client.get(
        `/accounts/${accountIdentifier}/load_balancers/pools/${identifier}/health`,
        options,
      ) as Core.APIPromise<{ result: HealthAccountLoadBalancerPoolsPoolHealthDetailsResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * A list of regions from which to run health checks. Null means every Cloudflare
 * data center.
 */
export type HealthAccountLoadBalancerPoolsPoolHealthDetailsResponse = unknown | string | null;

export namespace Health {
  export import HealthAccountLoadBalancerPoolsPoolHealthDetailsResponse = HealthAPI.HealthAccountLoadBalancerPoolsPoolHealthDetailsResponse;
}
