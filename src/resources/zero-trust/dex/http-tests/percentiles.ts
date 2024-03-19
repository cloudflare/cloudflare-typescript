// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PercentilesAPI from 'cloudflare/resources/zero-trust/dex/http-tests/percentiles';

export class Percentiles extends APIResource {
  /**
   * Get percentiles for an http test for a given time period between 1 hour and 7
   * days.
   */
  get(
    testId: string,
    params: PercentileGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DigitalExperienceMonitoringHTTPDetailsPercentiles> {
    const { account_id, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/dex/http-tests/${testId}/percentiles`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: DigitalExperienceMonitoringHTTPDetailsPercentiles }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface DigitalExperienceMonitoringHTTPDetailsPercentiles {
  dnsResponseTimeMs?: DigitalExperienceMonitoringHTTPDetailsPercentiles.DNSResponseTimeMs;

  resourceFetchTimeMs?: DigitalExperienceMonitoringHTTPDetailsPercentiles.ResourceFetchTimeMs;

  serverResponseTimeMs?: DigitalExperienceMonitoringHTTPDetailsPercentiles.ServerResponseTimeMs;
}

export namespace DigitalExperienceMonitoringHTTPDetailsPercentiles {
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

export interface PercentileGetParams {
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
  export import DigitalExperienceMonitoringHTTPDetailsPercentiles = PercentilesAPI.DigitalExperienceMonitoringHTTPDetailsPercentiles;
  export import PercentileGetParams = PercentilesAPI.PercentileGetParams;
}
