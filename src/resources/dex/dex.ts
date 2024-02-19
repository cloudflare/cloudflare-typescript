// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as ColosAPI from 'cloudflare/resources/dex/colos';
import * as TracerouteTestsAPI from 'cloudflare/resources/dex/traceroute-tests';
import * as FleetStatusAPI from 'cloudflare/resources/dex/fleet-status/fleet-status';
import * as HTTPTestsAPI from 'cloudflare/resources/dex/http-tests/http-tests';
import * as TestsAPI from 'cloudflare/resources/dex/tests/tests';
import * as TracerouteTestResultsAPI from 'cloudflare/resources/dex/traceroute-test-results/traceroute-test-results';

export class DEX extends APIResource {
  colos: ColosAPI.Colos = new ColosAPI.Colos(this._client);
  fleetStatus: FleetStatusAPI.FleetStatus = new FleetStatusAPI.FleetStatus(this._client);
  httpTests: HTTPTestsAPI.HTTPTests = new HTTPTestsAPI.HTTPTests(this._client);
  tests: TestsAPI.Tests = new TestsAPI.Tests(this._client);
  tracerouteTestResults: TracerouteTestResultsAPI.TracerouteTestResults =
    new TracerouteTestResultsAPI.TracerouteTestResults(this._client);
  tracerouteTests: TracerouteTestsAPI.TracerouteTests = new TracerouteTestsAPI.TracerouteTests(this._client);
}

export namespace DEX {
  export import Colos = ColosAPI.Colos;
  export import ColoListResponse = ColosAPI.ColoListResponse;
  export import ColoListParams = ColosAPI.ColoListParams;
  export import FleetStatus = FleetStatusAPI.FleetStatus;
  export import HTTPTests = HTTPTestsAPI.HTTPTests;
  export import HTTPTestGetResponse = HTTPTestsAPI.HTTPTestGetResponse;
  export import HTTPTestGetParams = HTTPTestsAPI.HTTPTestGetParams;
  export import Tests = TestsAPI.Tests;
  export import TestListResponse = TestsAPI.TestListResponse;
  export import TestListResponsesV4PagePagination = TestsAPI.TestListResponsesV4PagePagination;
  export import TestListParams = TestsAPI.TestListParams;
  export import TracerouteTestResults = TracerouteTestResultsAPI.TracerouteTestResults;
  export import TracerouteTests = TracerouteTestsAPI.TracerouteTests;
  export import TracerouteTestGetResponse = TracerouteTestsAPI.TracerouteTestGetResponse;
  export import TracerouteTestNetworkPathResponse = TracerouteTestsAPI.TracerouteTestNetworkPathResponse;
  export import TracerouteTestPercentilesResponse = TracerouteTestsAPI.TracerouteTestPercentilesResponse;
  export import TracerouteTestGetParams = TracerouteTestsAPI.TracerouteTestGetParams;
  export import TracerouteTestNetworkPathParams = TracerouteTestsAPI.TracerouteTestNetworkPathParams;
  export import TracerouteTestPercentilesParams = TracerouteTestsAPI.TracerouteTestPercentilesParams;
}
