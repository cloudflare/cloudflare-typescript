// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as DEXAPI from 'cloudflare/resources/zero-trust/dex/dex';
import * as ColosAPI from 'cloudflare/resources/zero-trust/dex/colos';
import * as TracerouteTestsAPI from 'cloudflare/resources/zero-trust/dex/traceroute-tests';
import * as FleetStatusAPI from 'cloudflare/resources/zero-trust/dex/fleet-status/fleet-status';
import * as HTTPTestsAPI from 'cloudflare/resources/zero-trust/dex/http-tests/http-tests';
import * as TestsAPI from 'cloudflare/resources/zero-trust/dex/tests/tests';
import * as TracerouteTestResultsAPI from 'cloudflare/resources/zero-trust/dex/traceroute-test-results/traceroute-test-results';

export class DEX extends APIResource {
  colos: ColosAPI.Colos = new ColosAPI.Colos(this._client);
  fleetStatus: FleetStatusAPI.FleetStatus = new FleetStatusAPI.FleetStatus(this._client);
  httpTests: HTTPTestsAPI.HTTPTests = new HTTPTestsAPI.HTTPTests(this._client);
  tests: TestsAPI.Tests = new TestsAPI.Tests(this._client);
  tracerouteTestResults: TracerouteTestResultsAPI.TracerouteTestResults =
    new TracerouteTestResultsAPI.TracerouteTestResults(this._client);
  tracerouteTests: TracerouteTestsAPI.TracerouteTests = new TracerouteTestsAPI.TracerouteTests(this._client);
}

export interface UnnamedSchemaRefBf9e2abcf1b78a6cab8e6e29e2228a11 {
  id: string;

  /**
   * Whether the policy is the default for the account
   */
  default: boolean;

  name: string;
}

export namespace DEX {
  export import UnnamedSchemaRefBf9e2abcf1b78a6cab8e6e29e2228a11 = DEXAPI.UnnamedSchemaRefBf9e2abcf1b78a6cab8e6e29e2228a11;
  export import Colos = ColosAPI.Colos;
  export import ColoListResponse = ColosAPI.ColoListResponse;
  export import ColoListResponsesSinglePage = ColosAPI.ColoListResponsesSinglePage;
  export import ColoListParams = ColosAPI.ColoListParams;
  export import FleetStatus = FleetStatusAPI.FleetStatus;
  export import FleetStatusLiveResponse = FleetStatusAPI.FleetStatusLiveResponse;
  export import FleetStatusLiveParams = FleetStatusAPI.FleetStatusLiveParams;
  export import FleetStatusOverTimeParams = FleetStatusAPI.FleetStatusOverTimeParams;
  export import HTTPTests = HTTPTestsAPI.HTTPTests;
  export import DigitalExperienceMonitoringHTTPDetails = HTTPTestsAPI.DigitalExperienceMonitoringHTTPDetails;
  export import HTTPTestGetParams = HTTPTestsAPI.HTTPTestGetParams;
  export import Tests = TestsAPI.Tests;
  export import DigitalExperienceMonitoringTests = TestsAPI.DigitalExperienceMonitoringTests;
  export import TestListResponse = TestsAPI.TestListResponse;
  export import TestListResponsesV4PagePagination = TestsAPI.TestListResponsesV4PagePagination;
  export import TestListParams = TestsAPI.TestListParams;
  export import TracerouteTestResults = TracerouteTestResultsAPI.TracerouteTestResults;
  export import TracerouteTests = TracerouteTestsAPI.TracerouteTests;
  export import DigitalExperienceMonitoringTracerouteDetails = TracerouteTestsAPI.DigitalExperienceMonitoringTracerouteDetails;
  export import DigitalExperienceMonitoringTracerouteDetailsPercentiles = TracerouteTestsAPI.DigitalExperienceMonitoringTracerouteDetailsPercentiles;
  export import DigitalExperienceMonitoringTracerouteTestNetworkPath = TracerouteTestsAPI.DigitalExperienceMonitoringTracerouteTestNetworkPath;
  export import TracerouteTestGetParams = TracerouteTestsAPI.TracerouteTestGetParams;
  export import TracerouteTestNetworkPathParams = TracerouteTestsAPI.TracerouteTestNetworkPathParams;
  export import TracerouteTestPercentilesParams = TracerouteTestsAPI.TracerouteTestPercentilesParams;
}
