// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import * as TracerouteTestsAPI from 'cloudflare/resources/zero-trust/dex/traceroute-tests';

export class TracerouteTests extends APIResource {
  /**
   * Get test details and aggregate performance metrics for an traceroute test for a
   * given time period between 1 hour and 7 days.
   */
  get(
    testId: string,
    params: TracerouteTestGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DigitalExperienceMonitoringTracerouteDetails> {
    const { account_id, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/dex/traceroute-tests/${testId}`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: DigitalExperienceMonitoringTracerouteDetails }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get a breakdown of metrics by hop for individual traceroute test runs
   */
  networkPath(
    testId: string,
    params: TracerouteTestNetworkPathParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DigitalExperienceMonitoringTracerouteTestNetworkPath> {
    const { account_id, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/dex/traceroute-tests/${testId}/network-path`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: DigitalExperienceMonitoringTracerouteTestNetworkPath }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get percentiles for a traceroute test for a given time period between 1 hour and
   * 7 days.
   */
  percentiles(
    testId: string,
    params: TracerouteTestPercentilesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DigitalExperienceMonitoringTracerouteDetailsPercentiles> {
    const { account_id, ...query } = params;
    return (
      this._client.get(`/accounts/${account_id}/dex/traceroute-tests/${testId}/percentiles`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: DigitalExperienceMonitoringTracerouteDetailsPercentiles }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface DigitalExperienceMonitoringTracerouteDetails {
  /**
   * The host of the Traceroute synthetic application test
   */
  host: string;

  /**
   * The interval at which the Traceroute synthetic application test is set to run.
   */
  interval: string;

  kind: 'traceroute';

  /**
   * The name of the Traceroute synthetic application test
   */
  name: string;

  target_policies?: Array<DigitalExperienceMonitoringTracerouteDetails.TargetPolicy>;

  targeted?: boolean;

  tracerouteStats?: DigitalExperienceMonitoringTracerouteDetails.TracerouteStats | null;

  tracerouteStatsByColo?: Array<DigitalExperienceMonitoringTracerouteDetails.TracerouteStatsByColo>;
}

export namespace DigitalExperienceMonitoringTracerouteDetails {
  export interface TargetPolicy {
    id: string;

    /**
     * Whether the policy is the default for the account
     */
    default: boolean;

    name: string;
  }

  export interface TracerouteStats {
    availabilityPct: TracerouteStats.AvailabilityPct;

    hopsCount: TracerouteStats.HopsCount;

    packetLossPct: TracerouteStats.PacketLossPct;

    roundTripTimeMs: TracerouteStats.RoundTripTimeMs;

    /**
     * Count of unique devices that have run this test in the given time period
     */
    uniqueDevicesTotal: number;
  }

  export namespace TracerouteStats {
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

    export interface HopsCount {
      slots: Array<HopsCount.Slot>;

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

    export namespace HopsCount {
      export interface Slot {
        timestamp: string;

        value: number;
      }
    }

    export interface PacketLossPct {
      slots: Array<PacketLossPct.Slot>;

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

    export namespace PacketLossPct {
      export interface Slot {
        timestamp: string;

        value: number;
      }
    }

    export interface RoundTripTimeMs {
      slots: Array<RoundTripTimeMs.Slot>;

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

    export namespace RoundTripTimeMs {
      export interface Slot {
        timestamp: string;

        value: number;
      }
    }
  }

  export interface TracerouteStatsByColo {
    availabilityPct: TracerouteStatsByColo.AvailabilityPct;

    colo: string;

    hopsCount: TracerouteStatsByColo.HopsCount;

    packetLossPct: TracerouteStatsByColo.PacketLossPct;

    roundTripTimeMs: TracerouteStatsByColo.RoundTripTimeMs;

    /**
     * Count of unique devices that have run this test in the given time period
     */
    uniqueDevicesTotal: number;
  }

  export namespace TracerouteStatsByColo {
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

    export interface HopsCount {
      slots: Array<HopsCount.Slot>;

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

    export namespace HopsCount {
      export interface Slot {
        timestamp: string;

        value: number;
      }
    }

    export interface PacketLossPct {
      slots: Array<PacketLossPct.Slot>;

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

    export namespace PacketLossPct {
      export interface Slot {
        timestamp: string;

        value: number;
      }
    }

    export interface RoundTripTimeMs {
      slots: Array<RoundTripTimeMs.Slot>;

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

    export namespace RoundTripTimeMs {
      export interface Slot {
        timestamp: string;

        value: number;
      }
    }
  }
}

export interface DigitalExperienceMonitoringTracerouteDetailsPercentiles {
  hopsCount?: DigitalExperienceMonitoringTracerouteDetailsPercentiles.HopsCount;

  packetLossPct?: DigitalExperienceMonitoringTracerouteDetailsPercentiles.PacketLossPct;

  roundTripTimeMs?: DigitalExperienceMonitoringTracerouteDetailsPercentiles.RoundTripTimeMs;
}

export namespace DigitalExperienceMonitoringTracerouteDetailsPercentiles {
  export interface HopsCount {
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

  export interface PacketLossPct {
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

  export interface RoundTripTimeMs {
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

export interface DigitalExperienceMonitoringTracerouteTestNetworkPath {
  /**
   * API Resource UUID tag.
   */
  id: string;

  deviceName?: string;

  /**
   * The interval at which the Traceroute synthetic application test is set to run.
   */
  interval?: string;

  kind?: 'traceroute';

  name?: string;

  networkPath?: DigitalExperienceMonitoringTracerouteTestNetworkPath.NetworkPath | null;

  /**
   * The host of the Traceroute synthetic application test
   */
  url?: string;
}

export namespace DigitalExperienceMonitoringTracerouteTestNetworkPath {
  export interface NetworkPath {
    slots: Array<NetworkPath.Slot>;

    /**
     * Specifies the sampling applied, if any, to the slots response. When sampled,
     * results shown represent the first test run to the start of each sampling
     * interval.
     */
    sampling?: NetworkPath.Sampling | null;
  }

  export namespace NetworkPath {
    export interface Slot {
      /**
       * API Resource UUID tag.
       */
      id: string;

      /**
       * Round trip time in ms of the client to app mile
       */
      clientToAppRttMs: number | null;

      /**
       * Round trip time in ms of the client to Cloudflare egress mile
       */
      clientToCfEgressRttMs: number | null;

      /**
       * Round trip time in ms of the client to Cloudflare ingress mile
       */
      clientToCfIngressRttMs: number | null;

      timestamp: string;

      /**
       * Round trip time in ms of the client to ISP mile
       */
      clientToIspRttMs?: number | null;
    }

    /**
     * Specifies the sampling applied, if any, to the slots response. When sampled,
     * results shown represent the first test run to the start of each sampling
     * interval.
     */
    export interface Sampling {
      unit: 'hours';

      value: number;
    }
  }
}

export interface TracerouteTestGetParams {
  /**
   * Path param: Unique identifier linked to an account
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

export interface TracerouteTestNetworkPathParams {
  /**
   * Path param: unique identifier linked to an account
   */
  account_id: string;

  /**
   * Query param: Device to filter tracroute result runs to
   */
  deviceId: string;

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
}

export interface TracerouteTestPercentilesParams {
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

export namespace TracerouteTests {
  export import DigitalExperienceMonitoringTracerouteDetails = TracerouteTestsAPI.DigitalExperienceMonitoringTracerouteDetails;
  export import DigitalExperienceMonitoringTracerouteDetailsPercentiles = TracerouteTestsAPI.DigitalExperienceMonitoringTracerouteDetailsPercentiles;
  export import DigitalExperienceMonitoringTracerouteTestNetworkPath = TracerouteTestsAPI.DigitalExperienceMonitoringTracerouteTestNetworkPath;
  export import TracerouteTestGetParams = TracerouteTestsAPI.TracerouteTestGetParams;
  export import TracerouteTestNetworkPathParams = TracerouteTestsAPI.TracerouteTestNetworkPathParams;
  export import TracerouteTestPercentilesParams = TracerouteTestsAPI.TracerouteTestPercentilesParams;
}
