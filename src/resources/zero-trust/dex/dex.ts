// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as DEXAPI from './dex';
import * as ColosAPI from './colos';
import * as TracerouteTestsAPI from './traceroute-tests';
import * as FleetStatusAPI from './fleet-status/fleet-status';
import * as HTTPTestsAPI from './http-tests/http-tests';
import * as TestsAPI from './tests/tests';
import * as TracerouteTestResultsAPI from './traceroute-test-results/traceroute-test-results';

export class DEX extends APIResource {
  colos: ColosAPI.Colos = new ColosAPI.Colos(this._client);
  fleetStatus: FleetStatusAPI.FleetStatus = new FleetStatusAPI.FleetStatus(this._client);
  httpTests: HTTPTestsAPI.HTTPTests = new HTTPTestsAPI.HTTPTests(this._client);
  tests: TestsAPI.Tests = new TestsAPI.Tests(this._client);
  tracerouteTestResults: TracerouteTestResultsAPI.TracerouteTestResults =
    new TracerouteTestResultsAPI.TracerouteTestResults(this._client);
  tracerouteTests: TracerouteTestsAPI.TracerouteTests = new TracerouteTestsAPI.TracerouteTests(this._client);
}

export interface DigitalExperienceMonitor {
  id: string;

  /**
   * Whether the policy is the default for the account
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

  deviceName?: string;

  /**
   * The interval at which the Traceroute synthetic application test is set to run.
   */
  interval?: string;

  kind?: 'traceroute';

  name?: string;

  networkPath?: NetworkPath | null;

  /**
   * The host of the Traceroute synthetic application test
   */
  url?: string;
}

export interface Percentiles {
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

export namespace DEX {
  export type DigitalExperienceMonitor = DEXAPI.DigitalExperienceMonitor;
  export type NetworkPath = DEXAPI.NetworkPath;
  export type NetworkPathResponse = DEXAPI.NetworkPathResponse;
  export type Percentiles = DEXAPI.Percentiles;
  export import Colos = ColosAPI.Colos;
  export type ColoListResponse = ColosAPI.ColoListResponse;
  export import ColoListResponsesSinglePage = ColosAPI.ColoListResponsesSinglePage;
  export type ColoListParams = ColosAPI.ColoListParams;
  export import FleetStatus = FleetStatusAPI.FleetStatus;
  export type LiveStat = FleetStatusAPI.LiveStat;
  export type FleetStatusLiveResponse = FleetStatusAPI.FleetStatusLiveResponse;
  export type FleetStatusLiveParams = FleetStatusAPI.FleetStatusLiveParams;
  export type FleetStatusOverTimeParams = FleetStatusAPI.FleetStatusOverTimeParams;
  export import HTTPTests = HTTPTestsAPI.HTTPTests;
  export type HTTPDetails = HTTPTestsAPI.HTTPDetails;
  export type HTTPTestGetParams = HTTPTestsAPI.HTTPTestGetParams;
  export import Tests = TestsAPI.Tests;
  export type AggregateTimePeriod = TestsAPI.AggregateTimePeriod;
  export type TestListResponse = TestsAPI.TestListResponse;
  export import TestListResponsesV4PagePagination = TestsAPI.TestListResponsesV4PagePagination;
  export type TestListParams = TestsAPI.TestListParams;
  export import TracerouteTestResults = TracerouteTestResultsAPI.TracerouteTestResults;
  export import TracerouteTests = TracerouteTestsAPI.TracerouteTests;
  export type Traceroute = TracerouteTestsAPI.Traceroute;
  export type TracerouteTestPercentilesResponse = TracerouteTestsAPI.TracerouteTestPercentilesResponse;
  export type TracerouteTestGetParams = TracerouteTestsAPI.TracerouteTestGetParams;
  export type TracerouteTestNetworkPathParams = TracerouteTestsAPI.TracerouteTestNetworkPathParams;
  export type TracerouteTestPercentilesParams = TracerouteTestsAPI.TracerouteTestPercentilesParams;
}
