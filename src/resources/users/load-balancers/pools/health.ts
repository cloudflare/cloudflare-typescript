// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as HealthAPI from 'cloudflare/resources/users/load-balancers/pools/health';

export class Health extends APIResource {
  /**
   * Fetch the latest pool health status for a single pool.
   */
  list(poolId: string, options?: Core.RequestOptions): Core.APIPromise<HealthListResponse> {
    return (
      this._client.get(`/user/load_balancers/pools/${poolId}/health`, options) as Core.APIPromise<{
        result: HealthListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * A list of regions from which to run health checks. Null means every Cloudflare
 * data center.
 */
export type HealthListResponse = unknown | string | null;

export namespace Health {
  export import HealthListResponse = HealthAPI.HealthListResponse;
}
