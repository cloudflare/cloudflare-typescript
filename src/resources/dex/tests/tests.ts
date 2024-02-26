// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as TestsAPI from 'cloudflare/resources/dex/tests/tests';
import * as UniqueDevicesAPI from 'cloudflare/resources/dex/tests/unique-devices';
import { V4PagePagination, type V4PagePaginationParams } from 'cloudflare/pagination';

export class Tests extends APIResource {
  uniqueDevices: UniqueDevicesAPI.UniqueDevices = new UniqueDevicesAPI.UniqueDevices(this._client);

  /**
   * List DEX tests
   */
  list(
    params: TestListParams,
    options?: Core.RequestOptions,
  ): Core.PagePromise<TestListResponsesV4PagePagination, TestListResponse> {
    const { account_id, ...query } = params;
    return this._client.getAPIList(`/accounts/${account_id}/dex/tests`, TestListResponsesV4PagePagination, {
      query,
      ...options,
    });
  }
}

export class TestListResponsesV4PagePagination extends V4PagePagination<TestListResponse> {}

export interface TestListResponse {
  errors: Array<TestListResponse.Error>;

  messages: Array<TestListResponse.Message>;

  result: TestListResponse.Result;

  /**
   * Whether the API call was successful
   */
  success: true;

  result_info?: TestListResponse.ResultInfo;
}

export namespace TestListResponse {
  export interface Error {
    code: number;

    message: string;
  }

  export interface Message {
    code: number;

    message: string;
  }

  export interface Result {
    overviewMetrics: Result.OverviewMetrics;

    /**
     * array of test results objects.
     */
    tests: Array<Result.Test>;
  }

  export namespace Result {
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

  export interface ResultInfo {
    /**
     * Total number of results for the requested service
     */
    count?: number;

    /**
     * Current page within paginated list of results
     */
    page?: number;

    /**
     * Number of results per page of results
     */
    per_page?: number;

    /**
     * Total results available without any search parameters
     */
    total_count?: number;
  }
}

export interface TestListParams extends V4PagePaginationParams {
  /**
   * Path param: unique identifier linked to an account in the API request path.
   */
  account_id: string;

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

  /**
   * Query param: Optionally filter results by test name
   */
  testName?: string;
}

export namespace Tests {
  export import TestListResponse = TestsAPI.TestListResponse;
  export import TestListResponsesV4PagePagination = TestsAPI.TestListResponsesV4PagePagination;
  export import TestListParams = TestsAPI.TestListParams;
  export import UniqueDevices = UniqueDevicesAPI.UniqueDevices;
  export import UniqueDeviceListResponse = UniqueDevicesAPI.UniqueDeviceListResponse;
  export import UniqueDeviceListParams = UniqueDevicesAPI.UniqueDeviceListParams;
}
