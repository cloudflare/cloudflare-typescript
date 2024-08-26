// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import { APIPromise } from '../../../../core';
import * as Core from '../../../../core';
import * as HTTPTestsAPI from './http-tests';
import * as DEXAPI from '../dex';
import * as PercentilesAPI from './percentiles';

export class HTTPTests extends APIResource {
  percentiles: PercentilesAPI.Percentiles = new PercentilesAPI.Percentiles(this._client);

  /**
   * Get test details and aggregate performance metrics for an http test for a given
   * time period between 1 hour and 7 days.
   */
  get(testId: string, params: HTTPTestGetParams, options?: Core.RequestOptions): Core.APIPromise<HTTPDetails> {
    const { account_id, ...query } = params;
    return (this._client.get(`/accounts/${account_id}/dex/http-tests/${testId}`, { query, ...options }) as Core.APIPromise<{ result: HTTPDetails }>)._thenUnwrap((obj) => obj.result);
  }
}

export interface HTTPDetails {
  /**
   * The url of the HTTP synthetic application test
   */
  host?: string;

  httpStats?: HTTPDetails.HTTPStats | null;

  httpStatsByColo?: Array<HTTPDetails.HTTPStatsByColo>;

  /**
   * The interval at which the HTTP synthetic application test is set to run.
   */
  interval?: string;

  kind?: 'http';

  /**
   * The HTTP method to use when running the test
   */
  method?: string;

  /**
   * The name of the HTTP synthetic application test
   */
  name?: string;

  target_policies?: Array<DEXAPI.DeviceExperienceMonitor> | null;

  targeted?: boolean;
}

export namespace HTTPDetails {
  export interface HTTPStats {
    availabilityPct: HTTPStats.AvailabilityPct;

    dnsResponseTimeMs: PercentilesAPI.TestStatOverTime;

    httpStatusCode: Array<HTTPStats.HTTPStatusCode>;

    resourceFetchTimeMs: PercentilesAPI.TestStatOverTime;

    serverResponseTimeMs: PercentilesAPI.TestStatOverTime;

    /**
     * Count of unique devices that have run this test in the given time period
     */
    uniqueDevicesTotal: number;
  }

  export namespace HTTPStats {
    export interface AvailabilityPct {
      slots: Array<AvailabilityPct.Slot>;

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

    export namespace AvailabilityPct {
      export interface Slot {
        timestamp: string;

        value: number;
      }
    }

    export interface HTTPStatusCode {
      status200: number;

      status300: number;

      status400: number;

      status500: number;

      timestamp: string;
    }
  }

  export interface HTTPStatsByColo {
    availabilityPct: HTTPStatsByColo.AvailabilityPct;

    colo: string;

    dnsResponseTimeMs: PercentilesAPI.TestStatOverTime;

    httpStatusCode: Array<HTTPStatsByColo.HTTPStatusCode>;

    resourceFetchTimeMs: PercentilesAPI.TestStatOverTime;

    serverResponseTimeMs: PercentilesAPI.TestStatOverTime;

    /**
     * Count of unique devices that have run this test in the given time period
     */
    uniqueDevicesTotal: number;
  }

  export namespace HTTPStatsByColo {
    export interface AvailabilityPct {
      slots: Array<AvailabilityPct.Slot>;

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

    export namespace AvailabilityPct {
      export interface Slot {
        timestamp: string;

        value: number;
      }
    }

    export interface HTTPStatusCode {
      status200: number;

      status300: number;

      status400: number;

      status500: number;

      timestamp: string;
    }
  }
}

export interface HTTPTestGetParams {
  /**
   * Path param: unique identifier linked to an account in the API request path.
   */
  account_id: string;

  /**
   * Query param: Start time for aggregate metrics in ISO ms
   */
  from: string;

  /**
   * Query param: Time interval for aggregate time slots.
   */
  interval: 'minute' | 'hour';

  /**
   * Query param: End time for aggregate metrics in ISO ms
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

export namespace HTTPTests {
  export import HTTPDetails = HTTPTestsAPI.HTTPDetails;
  export import HTTPTestGetParams = HTTPTestsAPI.HTTPTestGetParams;
  export import Percentiles = PercentilesAPI.Percentiles;
  export import HTTPDetailsPercentiles = PercentilesAPI.HTTPDetailsPercentiles;
  export import TestStatOverTime = PercentilesAPI.TestStatOverTime;
  export import PercentileGetParams = PercentilesAPI.PercentileGetParams;
}
