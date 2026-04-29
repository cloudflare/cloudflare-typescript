// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as ColosAPI from './colos';
import { BaseColos, Colos } from './colos';
import * as RulesAPI from './rules';
import { BaseRules, Rules } from './rules';
import * as TracerouteTestsAPI from './traceroute-tests';
import { BaseTracerouteTests, TracerouteTests } from './traceroute-tests';
import * as WARPChangeEventsAPI from './warp-change-events';
import { BaseWARPChangeEvents, WARPChangeEvents } from './warp-change-events';
import * as CommandsAPI from './commands/commands';
import { BaseCommands, Commands } from './commands/commands';
import * as FleetStatusAPI from './fleet-status/fleet-status';
import { BaseFleetStatus, FleetStatus } from './fleet-status/fleet-status';
import * as HTTPTestsAPI from './http-tests/http-tests';
import { BaseHTTPTests, HTTPTests } from './http-tests/http-tests';
import * as TestsAPI from './tests/tests';
import { BaseTests, Tests } from './tests/tests';
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
DEX.Tests = Tests;
DEX.BaseTests = BaseTests;
DEX.TracerouteTestResults = TracerouteTestResults;
DEX.BaseTracerouteTestResults = BaseTracerouteTestResults;
DEX.TracerouteTests = TracerouteTests;
DEX.BaseTracerouteTests = BaseTracerouteTests;
DEX.Rules = Rules;
DEX.BaseRules = BaseRules;

export declare namespace DEX {
  export { WARPChangeEvents as WARPChangeEvents, BaseWARPChangeEvents as BaseWARPChangeEvents };

  export { Commands as Commands, BaseCommands as BaseCommands };

  export { Colos as Colos, BaseColos as BaseColos };

  export { FleetStatus as FleetStatus, BaseFleetStatus as BaseFleetStatus };

  export { HTTPTests as HTTPTests, BaseHTTPTests as BaseHTTPTests };

  export { Tests as Tests, BaseTests as BaseTests };

  export {
    TracerouteTestResults as TracerouteTestResults,
    BaseTracerouteTestResults as BaseTracerouteTestResults,
  };

  export { TracerouteTests as TracerouteTests, BaseTracerouteTests as BaseTracerouteTests };

  export { Rules as Rules, BaseRules as BaseRules };
}
