// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import * as TestsAPI from './tests';
import * as DEXAPI from '../dex';
import * as UniqueDevicesAPI from './unique-devices';

export class Tests extends APIResource {
  uniqueDevices: UniqueDevicesAPI.UniqueDevices = new UniqueDevicesAPI.UniqueDevices(this._client);
}

export interface AggregateTimePeriod {
  units: 'hours' | 'days' | 'testRuns';

  value: number;
}

export interface Tests {
  overviewMetrics: Tests.OverviewMetrics;

  /**
   * array of test results objects.
   */
  tests: Array<Tests.Test>;
}

export namespace Tests {
  export interface OverviewMetrics {
    /**
     * number of tests.
     */
    testsTotal: number;

    /**
     * percentage availability for all HTTP test results in response
     */
    avgHttpAvailabilityPct?: number | null;

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

    target_policies?: Array<DEXAPI.DeviceExperienceMonitor> | null;

    targeted?: boolean;

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
          timePeriod: TestsAPI.AggregateTimePeriod;

          avgMs?: number | null;

          deltaPct?: number | null;
        }

        export interface OverTime {
          timePeriod: TestsAPI.AggregateTimePeriod;

          values: Array<OverTime.Value>;
        }

        export namespace OverTime {
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
          timePeriod: TestsAPI.AggregateTimePeriod;

          avgMs?: number | null;

          deltaPct?: number | null;
        }

        export interface OverTime {
          timePeriod: TestsAPI.AggregateTimePeriod;

          values: Array<OverTime.Value>;
        }

        export namespace OverTime {
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
          timePeriod: TestsAPI.AggregateTimePeriod;

          avgMs?: number | null;

          deltaPct?: number | null;
        }

        export interface OverTime {
          timePeriod: TestsAPI.AggregateTimePeriod;

          values: Array<OverTime.Value>;
        }

        export namespace OverTime {
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
          timePeriod: TestsAPI.AggregateTimePeriod;

          avgMs?: number | null;

          deltaPct?: number | null;
        }

        export interface OverTime {
          timePeriod: TestsAPI.AggregateTimePeriod;

          values: Array<OverTime.Value>;
        }

        export namespace OverTime {
          export interface Value {
            avgMs: number;

            timestamp: string;
          }
        }
      }
    }
  }
}

export namespace Tests {
  export import AggregateTimePeriod = TestsAPI.AggregateTimePeriod;
  export import Tests = TestsAPI.Tests;
  export import UniqueDevices = UniqueDevicesAPI.UniqueDevices;
  export import UniqueDeviceListParams = UniqueDevicesAPI.UniqueDeviceListParams;
}
