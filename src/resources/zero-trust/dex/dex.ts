// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ColosAPI from './colos';
import { BaseColos, ColoListParams, ColoListResponse, ColoListResponsesSinglePage, Colos } from './colos';
import * as RulesAPI from './rules';
import {
  BaseRules,
  RuleCreateParams,
  RuleCreateResponse,
  RuleDeleteParams,
  RuleDeleteResponse,
  RuleGetParams,
  RuleGetResponse,
  RuleListParams,
  RuleListResponse,
  RuleListResponsesV4PagePagination,
  RuleUpdateParams,
  RuleUpdateResponse,
  Rules,
} from './rules';
import * as TracerouteTestsAPI from './traceroute-tests';
import {
  BaseTracerouteTests,
  Traceroute,
  TracerouteTestGetParams,
  TracerouteTestNetworkPathParams,
  TracerouteTestPercentilesParams,
  TracerouteTestPercentilesResponse,
  TracerouteTests,
} from './traceroute-tests';
import * as WARPChangeEventsAPI from './warp-change-events';
import {
  BaseWARPChangeEvents,
  WARPChangeEventGetParams,
  WARPChangeEventGetResponse,
  WARPChangeEvents,
} from './warp-change-events';
import * as CommandsAPI from './commands/commands';
import {
  BaseCommands,
  CommandCreateParams,
  CommandCreateResponse,
  CommandListParams,
  CommandListResponse,
  CommandListResponsesV4PagePagination,
  Commands,
} from './commands/commands';
import * as DevicesAPI from './devices/devices';
import { BaseDevices, Devices } from './devices/devices';
import * as FleetStatusAPI from './fleet-status/fleet-status';
import {
  BaseFleetStatus,
  FleetStatus,
  FleetStatusLiveParams,
  FleetStatusLiveResponse,
  FleetStatusOverTimeParams,
  FleetStatusOverTimeResponse,
  LiveStat,
} from './fleet-status/fleet-status';
import * as HTTPTestsAPI from './http-tests/http-tests';
import { BaseHTTPTests, HTTPDetails, HTTPTestGetParams, HTTPTests } from './http-tests/http-tests';
import * as TestsAPI from './tests/tests';
import { AggregateTimePeriod, BaseTests, TestListParams, Tests, TestsV4PagePagination } from './tests/tests';
import * as TracerouteTestResultsAPI from './traceroute-test-results/traceroute-test-results';
import {
  BaseTracerouteTestResults,
  TracerouteTestResults,
} from './traceroute-test-results/traceroute-test-results';

export class BaseDEX extends APIResource {
  static override readonly _key: readonly ['zeroTrust', 'dex'] = Object.freeze(['zeroTrust', 'dex'] as const);
}
export class DEX extends BaseDEX {
  warpChangeEvents: WARPChangeEventsAPI.WARPChangeEvents = new WARPChangeEventsAPI.WARPChangeEvents(
    this._client,
  );
  commands: CommandsAPI.Commands = new CommandsAPI.Commands(this._client);
  colos: ColosAPI.Colos = new ColosAPI.Colos(this._client);
  fleetStatus: FleetStatusAPI.FleetStatus = new FleetStatusAPI.FleetStatus(this._client);
  httpTests: HTTPTestsAPI.HTTPTests = new HTTPTestsAPI.HTTPTests(this._client);
  tests: TestsAPI.Tests = new TestsAPI.Tests(this._client);
  tracerouteTestResults: TracerouteTestResultsAPI.TracerouteTestResults =
    new TracerouteTestResultsAPI.TracerouteTestResults(this._client);
  tracerouteTests: TracerouteTestsAPI.TracerouteTests = new TracerouteTestsAPI.TracerouteTests(this._client);
  rules: RulesAPI.Rules = new RulesAPI.Rules(this._client);
  devices: DevicesAPI.Devices = new DevicesAPI.Devices(this._client);
}

export interface DigitalExperienceMonitor {
  /**
   * API Resource UUID tag.
   */
  id: string;

  /**
   * Whether the policy is the default for the account.
   */
  default: boolean;

  name: string;
}

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

export interface NetworkPathResponse {
  /**
   * API Resource UUID tag.
   */
  id: string;

  /**
   * Name of the device that ran the test.
   */
  deviceName?: string;

  /**
   * The interval at which the Traceroute synthetic application test is set to run.
   */
  interval?: string;

  kind?: 'traceroute';

  name?: string;

  networkPath?: NetworkPath | null;

  /**
   * The host of the Traceroute synthetic application test.
   */
  url?: string;
}

export interface Percentiles {
  /**
   * p50 observed in the time period.
   */
  p50?: number | null;

  /**
   * p90 observed in the time period.
   */
  p90?: number | null;

  /**
   * p95 observed in the time period.
   */
  p95?: number | null;

  /**
   * p99 observed in the time period.
   */
  p99?: number | null;
}

DEX.WARPChangeEvents = WARPChangeEvents;
DEX.BaseWARPChangeEvents = BaseWARPChangeEvents;
DEX.Commands = Commands;
DEX.BaseCommands = BaseCommands;
DEX.Colos = Colos;
DEX.BaseColos = BaseColos;
DEX.FleetStatus = FleetStatus;
DEX.BaseFleetStatus = BaseFleetStatus;
DEX.HTTPTests = HTTPTests;
DEX.BaseHTTPTests = BaseHTTPTests;
DEX.BaseTests = BaseTests;
DEX.TracerouteTestResults = TracerouteTestResults;
DEX.BaseTracerouteTestResults = BaseTracerouteTestResults;
DEX.TracerouteTests = TracerouteTests;
DEX.BaseTracerouteTests = BaseTracerouteTests;
DEX.Rules = Rules;
DEX.BaseRules = BaseRules;
DEX.Devices = Devices;
DEX.BaseDevices = BaseDevices;

export declare namespace DEX {
  export {
    type DigitalExperienceMonitor as DigitalExperienceMonitor,
    type NetworkPath as NetworkPath,
    type NetworkPathResponse as NetworkPathResponse,
    type Percentiles as Percentiles,
  };

  export {
    WARPChangeEvents as WARPChangeEvents,
    BaseWARPChangeEvents as BaseWARPChangeEvents,
    type WARPChangeEventGetResponse as WARPChangeEventGetResponse,
    type WARPChangeEventGetParams as WARPChangeEventGetParams,
  };

  export {
    Commands as Commands,
    BaseCommands as BaseCommands,
    type CommandCreateResponse as CommandCreateResponse,
    type CommandListResponse as CommandListResponse,
    type CommandListResponsesV4PagePagination as CommandListResponsesV4PagePagination,
    type CommandCreateParams as CommandCreateParams,
    type CommandListParams as CommandListParams,
  };

  export {
    Colos as Colos,
    BaseColos as BaseColos,
    type ColoListResponse as ColoListResponse,
    type ColoListResponsesSinglePage as ColoListResponsesSinglePage,
    type ColoListParams as ColoListParams,
  };

  export {
    FleetStatus as FleetStatus,
    BaseFleetStatus as BaseFleetStatus,
    type LiveStat as LiveStat,
    type FleetStatusLiveResponse as FleetStatusLiveResponse,
    type FleetStatusOverTimeResponse as FleetStatusOverTimeResponse,
    type FleetStatusLiveParams as FleetStatusLiveParams,
    type FleetStatusOverTimeParams as FleetStatusOverTimeParams,
  };

  export {
    HTTPTests as HTTPTests,
    BaseHTTPTests as BaseHTTPTests,
    type HTTPDetails as HTTPDetails,
    type HTTPTestGetParams as HTTPTestGetParams,
  };

  export {
    type Tests as Tests,
    BaseTests as BaseTests,
    type AggregateTimePeriod as AggregateTimePeriod,
    type TestsV4PagePagination as TestsV4PagePagination,
    type TestListParams as TestListParams,
  };

  export {
    TracerouteTestResults as TracerouteTestResults,
    BaseTracerouteTestResults as BaseTracerouteTestResults,
  };

  export {
    TracerouteTests as TracerouteTests,
    BaseTracerouteTests as BaseTracerouteTests,
    type Traceroute as Traceroute,
    type TracerouteTestPercentilesResponse as TracerouteTestPercentilesResponse,
    type TracerouteTestGetParams as TracerouteTestGetParams,
    type TracerouteTestNetworkPathParams as TracerouteTestNetworkPathParams,
    type TracerouteTestPercentilesParams as TracerouteTestPercentilesParams,
  };

  export {
    Rules as Rules,
    BaseRules as BaseRules,
    type RuleCreateResponse as RuleCreateResponse,
    type RuleUpdateResponse as RuleUpdateResponse,
    type RuleListResponse as RuleListResponse,
    type RuleDeleteResponse as RuleDeleteResponse,
    type RuleGetResponse as RuleGetResponse,
    type RuleListResponsesV4PagePagination as RuleListResponsesV4PagePagination,
    type RuleCreateParams as RuleCreateParams,
    type RuleUpdateParams as RuleUpdateParams,
    type RuleListParams as RuleListParams,
    type RuleDeleteParams as RuleDeleteParams,
    type RuleGetParams as RuleGetParams,
  };

  export { Devices as Devices, BaseDevices as BaseDevices };
}
