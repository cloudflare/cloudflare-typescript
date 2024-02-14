// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as TestsAPI from 'cloudflare/resources/dex/tests/tests';
import * as UniqueDevicesAPI from 'cloudflare/resources/dex/tests/unique-devices';

export class Tests extends APIResource {
  uniqueDevices: UniqueDevicesAPI.UniqueDevices = new UniqueDevicesAPI.UniqueDevices(this._client);

  /**
   * List DEX tests
   */
  list(
    accountId: string,
    query?: TestListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<TestListResponse>;
  list(accountId: string, options?: Core.RequestOptions): Core.APIPromise<TestListResponse>;
  list(
    accountId: string,
    query: TestListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<TestListResponse> {
    if (isRequestOptions(query)) {
      return this.list(accountId, {}, query);
    }
    return (
      this._client.get(`/accounts/${accountId}/dex/tests`, { query, ...options }) as Core.APIPromise<{
        result: TestListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface TestListResponse {
  overviewMetrics: TestListResponse.OverviewMetrics;

  /**
   * array of test results objects.
   */
  tests: Array<TestListResponse.Test>;
}

export namespace TestListResponse {
  export interface OverviewMetrics {
    /**
     * number of tests.
     */
    testsTotal: number;

    /**
     * percentage availability for all traceroutes results in response
     */
    avgTracerouteAvailabilityPct?: number | null;
  }

  export interface Test {
    /**
     * API Resource UUID tag.
     */
    id: string;

    /**
     * date the test was created.
     */
    created: string;

    /**
     * the test description defined during configuration
     */
    description: string;

    /**
     * if true, then the test will run on targeted devices. Else, the test will not
     * run.
     */
    enabled: boolean;

    host: string;

    /**
     * The interval at which the synthetic application test is set to run.
     */
    interval: string;

    /**
     * test type, http or traceroute
     */
    kind: 'http' | 'traceroute';

    /**
     * name given to this test
     */
    name: string;

    updated: string;

    httpResults?: Test.HTTPResults | null;

    httpResultsByColo?: Array<Test.HTTPResultsByColo>;

    /**
     * for HTTP, the method to use when running the test
     */
    method?: string;

    tracerouteResults?: Test.TracerouteResults | null;

    tracerouteResultsByColo?: Array<Test.TracerouteResultsByColo>;
  }

  export namespace Test {
    export interface HTTPResults {
      resourceFetchTime: HTTPResults.ResourceFetchTime;
    }

    export namespace HTTPResults {
      export interface ResourceFetchTime {
        history: Array<ResourceFetchTime.History>;

        avgMs?: number | null;

        overTime?: ResourceFetchTime.OverTime | null;
      }

      export namespace ResourceFetchTime {
        export interface History {
          timePeriod: History.TimePeriod;

          avgMs?: number | null;

          deltaPct?: number | null;
        }

        export namespace History {
          export interface TimePeriod {
            units: 'hours' | 'days' | 'testRuns';

            value: number;
          }
        }

        export interface OverTime {
          timePeriod: OverTime.TimePeriod;

          values: Array<OverTime.Value>;
        }

        export namespace OverTime {
          export interface TimePeriod {
            units: 'hours' | 'days' | 'testRuns';

            value: number;
          }

          export interface Value {
            avgMs: number;

            timestamp: string;
          }
        }
      }
    }

    export interface HTTPResultsByColo {
      /**
       * Cloudflare colo
       */
      colo: string;

      resourceFetchTime: HTTPResultsByColo.ResourceFetchTime;
    }

    export namespace HTTPResultsByColo {
      export interface ResourceFetchTime {
        history: Array<ResourceFetchTime.History>;

        avgMs?: number | null;

        overTime?: ResourceFetchTime.OverTime | null;
      }

      export namespace ResourceFetchTime {
        export interface History {
          timePeriod: History.TimePeriod;

          avgMs?: number | null;

          deltaPct?: number | null;
        }

        export namespace History {
          export interface TimePeriod {
            units: 'hours' | 'days' | 'testRuns';

            value: number;
          }
        }

        export interface OverTime {
          timePeriod: OverTime.TimePeriod;

          values: Array<OverTime.Value>;
        }

        export namespace OverTime {
          export interface TimePeriod {
            units: 'hours' | 'days' | 'testRuns';

            value: number;
          }

          export interface Value {
            avgMs: number;

            timestamp: string;
          }
        }
      }
    }

    export interface TracerouteResults {
      roundTripTime: TracerouteResults.RoundTripTime;
    }

    export namespace TracerouteResults {
      export interface RoundTripTime {
        history: Array<RoundTripTime.History>;

        avgMs?: number | null;

        overTime?: RoundTripTime.OverTime | null;
      }

      export namespace RoundTripTime {
        export interface History {
          timePeriod: History.TimePeriod;

          avgMs?: number | null;

          deltaPct?: number | null;
        }

        export namespace History {
          export interface TimePeriod {
            units: 'hours' | 'days' | 'testRuns';

            value: number;
          }
        }

        export interface OverTime {
          timePeriod: OverTime.TimePeriod;

          values: Array<OverTime.Value>;
        }

        export namespace OverTime {
          export interface TimePeriod {
            units: 'hours' | 'days' | 'testRuns';

            value: number;
          }

          export interface Value {
            avgMs: number;

            timestamp: string;
          }
        }
      }
    }

    export interface TracerouteResultsByColo {
      /**
       * Cloudflare colo
       */
      colo: string;

      roundTripTime: TracerouteResultsByColo.RoundTripTime;
    }

    export namespace TracerouteResultsByColo {
      export interface RoundTripTime {
        history: Array<RoundTripTime.History>;

        avgMs?: number | null;

        overTime?: RoundTripTime.OverTime | null;
      }

      export namespace RoundTripTime {
        export interface History {
          timePeriod: History.TimePeriod;

          avgMs?: number | null;

          deltaPct?: number | null;
        }

        export namespace History {
          export interface TimePeriod {
            units: 'hours' | 'days' | 'testRuns';

            value: number;
          }
        }

        export interface OverTime {
          timePeriod: OverTime.TimePeriod;

          values: Array<OverTime.Value>;
        }

        export namespace OverTime {
          export interface TimePeriod {
            units: 'hours' | 'days' | 'testRuns';

            value: number;
          }

          export interface Value {
            avgMs: number;

            timestamp: string;
          }
        }
      }
    }
  }
}

export interface TestListParams {
  /**
   * Optionally filter result stats to a Cloudflare colo. Cannot be used in
   * combination with deviceId param.
   */
  colo?: string;

  /**
   * Optionally filter result stats to a specific device(s). Cannot be used in
   * combination with colo param.
   */
  deviceId?: Array<string>;

  /**
   * Page number of paginated results
   */
  page?: number;

  /**
   * Number of items per page
   */
  per_page?: number;

  /**
   * Optionally filter results by test name
   */
  testName?: string;
}

export namespace Tests {
  export import TestListResponse = TestsAPI.TestListResponse;
  export import TestListParams = TestsAPI.TestListParams;
  export import UniqueDevices = UniqueDevicesAPI.UniqueDevices;
  export import UniqueDeviceListResponse = UniqueDevicesAPI.UniqueDeviceListResponse;
  export import UniqueDeviceListParams = UniqueDevicesAPI.UniqueDeviceListParams;
}
