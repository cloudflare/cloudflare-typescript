// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PercentilesAPI from 'cloudflare/resources/dex/http-tests/percentiles';

export class Percentiles extends APIResource {
  /**
   * Get percentiles for an http test for a given time period between 1 hour and 7
   * days.
   */
  list(
    testId: string,
    params: PercentileListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<PercentileListResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/dex/http-tests/${testId}/percentiles`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: PercentileListResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface PercentileListResponse {
  dnsResponseTimeMs?: PercentileListResponse.DNSResponseTimeMs;

  resourceFetchTimeMs?: PercentileListResponse.ResourceFetchTimeMs;

  serverResponseTimeMs?: PercentileListResponse.ServerResponseTimeMs;
}

export namespace PercentileListResponse {
  export interface DNSResponseTimeMs {
    /**
     * p50 observed in the time period
     */
    p50?: number | null;

    /**
     * p90 observed in the time period
     */
    p90?: number | null;

    /**
     * p95 observed in the time period
     */
    p95?: number | null;

    /**
     * p99 observed in the time period
     */
    p99?: number | null;
  }

  export interface ResourceFetchTimeMs {
    /**
     * p50 observed in the time period
     */
    p50?: number | null;

    /**
     * p90 observed in the time period
     */
    p90?: number | null;

    /**
     * p95 observed in the time period
     */
    p95?: number | null;

    /**
     * p99 observed in the time period
     */
    p99?: number | null;
  }

  export interface ServerResponseTimeMs {
    /**
     * p50 observed in the time period
     */
    p50?: number | null;

    /**
     * p90 observed in the time period
     */
    p90?: number | null;

    /**
     * p95 observed in the time period
     */
    p95?: number | null;

    /**
     * p99 observed in the time period
     */
    p99?: number | null;
  }
}

export interface PercentileListParams {
  /**
   * Path param: unique identifier linked to an account in the API request path.
   */
  account_id: string;

  /**
   * Query param: End time for aggregate metrics in ISO format
   */
  timeEnd: string;

  /**
   * Query param: Start time for aggregate metrics in ISO format
   */
  timeStart: string;

  /**
   * Query param: Optionally filter result stats to a Cloudflare colo. Cannot be used
   * in combination with deviceId param.
   */
  colo?: string;

  /**
   * Query param: Optionally filter result stats to a specific device(s). Cannot be
   * used in combination with colo param.
   */
  deviceId?: Array<string>;
}

export namespace Percentiles {
  export import PercentileListResponse = PercentilesAPI.PercentileListResponse;
  export import PercentileListParams = PercentilesAPI.PercentileListParams;
}
