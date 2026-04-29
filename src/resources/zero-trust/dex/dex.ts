// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as ColosAPI from './colos';
import { Colos } from './colos';
import * as RulesAPI from './rules';
import { Rules } from './rules';
import * as TracerouteTestsAPI from './traceroute-tests';
import { TracerouteTests } from './traceroute-tests';
import * as WARPChangeEventsAPI from './warp-change-events';
import { WARPChangeEvents } from './warp-change-events';
import * as CommandsAPI from './commands/commands';
import { Commands } from './commands/commands';
import * as FleetStatusAPI from './fleet-status/fleet-status';
import { FleetStatus } from './fleet-status/fleet-status';
import * as HTTPTestsAPI from './http-tests/http-tests';
import { HTTPTests } from './http-tests/http-tests';
import * as TestsAPI from './tests/tests';
import { Tests } from './tests/tests';
import * as TracerouteTestResultsAPI from './traceroute-test-results/traceroute-test-results';
import { TracerouteTestResults } from './traceroute-test-results/traceroute-test-results';

export class DEX extends APIResource {
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
}

DEX.WARPChangeEvents = WARPChangeEvents;
DEX.Commands = Commands;
DEX.Colos = Colos;
DEX.FleetStatus = FleetStatus;
DEX.HTTPTests = HTTPTests;
DEX.Tests = Tests;
DEX.TracerouteTestResults = TracerouteTestResults;
DEX.TracerouteTests = TracerouteTests;
DEX.Rules = Rules;

export declare namespace DEX {
  export { WARPChangeEvents as WARPChangeEvents };

  export { Commands as Commands };

  export { Colos as Colos };

  export { FleetStatus as FleetStatus };

  export { HTTPTests as HTTPTests };

  export { Tests as Tests };

  export { TracerouteTestResults as TracerouteTestResults };

  export { TracerouteTests as TracerouteTests };

  export { Rules as Rules };
}
