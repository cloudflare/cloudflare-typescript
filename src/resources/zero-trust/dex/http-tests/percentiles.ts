// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as PercentilesAPI from 'cloudflare/resources/zero-trust/dex/http-tests/percentiles';
import * as DEXAPI from 'cloudflare/resources/zero-trust/dex/dex';

export class Percentiles extends APIResource {
  /**
   * Get percentiles for an http test for a given time period between 1 hour and 7
   * days.
   */
  get(
    testId: string,
    params: PercentileGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HTTPDetailsPercentiles> {
    const { account_id, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/dex/http-tests/${testId}/percentiles`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: HTTPDetailsPercentiles }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface HTTPDetailsPercentiles {
  dnsResponseTimeMs?: DEXAPI.Percentiles;

  resourceFetchTimeMs?: DEXAPI.Percentiles;

  serverResponseTimeMs?: DEXAPI.Percentiles;
}

export interface TestStatOverTime {
  slots: Array<TestStatOverTime.Slot>;

  /**
   * average observed in the time period
   */
  avg?: number | null;

  /**
   * highest observed in the time period
   */
  max?: number | null;

  /**
   * lowest observed in the time period
   */
  min?: number | null;
}

export namespace TestStatOverTime {
  export interface Slot {
    timestamp: string;

    value: number;
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
  export import HTTPDetailsPercentiles = PercentilesAPI.HTTPDetailsPercentiles;
  export import TestStatOverTime = PercentilesAPI.TestStatOverTime;
  export import PercentileGetParams = PercentilesAPI.PercentileGetParams;
}
