// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as HTTPTestsAPI from 'cloudflare/resources/zero-trust/dex/http-tests/http-tests';
import * as PercentilesAPI from 'cloudflare/resources/zero-trust/dex/http-tests/percentiles';

export class HTTPTests extends APIResource {
  percentiles: PercentilesAPI.Percentiles = new PercentilesAPI.Percentiles(this._client);

  /**
   * Get test details and aggregate performance metrics for an http test for a given
   * time period between 1 hour and 7 days.
   */
  get(
    testId: string,
    params: HTTPTestGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HTTPTestGetResponse> {
    const { account_id, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/dex/http-tests/${testId}`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: HTTPTestGetResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface HTTPTestGetResponse {
  /**
   * The url of the HTTP synthetic application test
   */
  host?: string;

  httpStats?: HTTPTestGetResponse.HTTPStats | null;

  httpStatsByColo?: Array<HTTPTestGetResponse.HTTPStatsByColo>;

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
}

export namespace HTTPTestGetResponse {
  export interface HTTPStats {
    dnsResponseTimeMs: HTTPStats.DNSResponseTimeMs;

    httpStatusCode: Array<HTTPStats.HTTPStatusCode>;

    resourceFetchTimeMs: HTTPStats.ResourceFetchTimeMs;

    serverResponseTimeMs: HTTPStats.ServerResponseTimeMs;

    /**
     * Count of unique devices that have run this test in the given time period
     */
    uniqueDevicesTotal: number;
  }

  export namespace HTTPStats {
    export interface DNSResponseTimeMs {
      slots: Array<DNSResponseTimeMs.Slot>;

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

    export namespace DNSResponseTimeMs {
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

    export interface ResourceFetchTimeMs {
      slots: Array<ResourceFetchTimeMs.Slot>;

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

    export namespace ResourceFetchTimeMs {
      export interface Slot {
        timestamp: string;

        value: number;
      }
    }

    export interface ServerResponseTimeMs {
      slots: Array<ServerResponseTimeMs.Slot>;

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

    export namespace ServerResponseTimeMs {
      export interface Slot {
        timestamp: string;

        value: number;
      }
    }
  }

  export interface HTTPStatsByColo {
    colo: string;

    dnsResponseTimeMs: HTTPStatsByColo.DNSResponseTimeMs;

    httpStatusCode: Array<HTTPStatsByColo.HTTPStatusCode>;

    resourceFetchTimeMs: HTTPStatsByColo.ResourceFetchTimeMs;

    serverResponseTimeMs: HTTPStatsByColo.ServerResponseTimeMs;

    /**
     * Count of unique devices that have run this test in the given time period
     */
    uniqueDevicesTotal: number;
  }

  export namespace HTTPStatsByColo {
    export interface DNSResponseTimeMs {
      slots: Array<DNSResponseTimeMs.Slot>;

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

    export namespace DNSResponseTimeMs {
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

    export interface ResourceFetchTimeMs {
      slots: Array<ResourceFetchTimeMs.Slot>;

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

    export namespace ResourceFetchTimeMs {
      export interface Slot {
        timestamp: string;

        value: number;
      }
    }

    export interface ServerResponseTimeMs {
      slots: Array<ServerResponseTimeMs.Slot>;

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

    export namespace ServerResponseTimeMs {
      export interface Slot {
        timestamp: string;

        value: number;
      }
    }
  }
}

export interface HTTPTestGetParams {
  /**
   * Path param: unique identifier linked to an account in the API request path.
   */
  account_id: string;

  /**
   * Query param: Time interval for aggregate time slots.
   */
  interval: 'minute' | 'hour';

  /**
   * Query param: End time for aggregate metrics in ISO ms
   */
  timeEnd: string;

  /**
   * Query param: Start time for aggregate metrics in ISO ms
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

export namespace HTTPTests {
  export import HTTPTestGetResponse = HTTPTestsAPI.HTTPTestGetResponse;
  export import HTTPTestGetParams = HTTPTestsAPI.HTTPTestGetParams;
  export import Percentiles = PercentilesAPI.Percentiles;
  export import PercentileListResponse = PercentilesAPI.PercentileListResponse;
  export import PercentileListParams = PercentilesAPI.PercentileListParams;
}
