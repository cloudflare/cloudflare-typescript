// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as DEXAPI from '../dex';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class Percentiles extends APIResource {
  /**
   * Get percentiles for an http test for a given time period between 1 hour and 7
   * days.
   */
  get(
    testID: string,
    params: PercentileGetParams,
    options?: RequestOptions,
  ): APIPromise<HTTPDetailsPercentiles> {
    const { account_id, ...query } = params;
    return (
      this._client.get(path`/accounts/${account_id}/dex/http-tests/${testID}/percentiles`, {
        query,
        ...options,
      }) as APIPromise<{ result: HTTPDetailsPercentiles }>
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
   * Query param: Start time for the query in ISO (RFC3339 - ISO 8601) format
   */
  from: string;

  /**
   * Query param: End time for the query in ISO (RFC3339 - ISO 8601) format
   */
  to: string;

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

export declare namespace Percentiles {
  export {
    type HTTPDetailsPercentiles as HTTPDetailsPercentiles,
    type TestStatOverTime as TestStatOverTime,
    type PercentileGetParams as PercentileGetParams,
  };
}
