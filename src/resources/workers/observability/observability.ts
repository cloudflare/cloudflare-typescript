// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as TelemetryAPI from './telemetry';
import { Telemetry } from './telemetry';

export class Observability extends APIResource {
  telemetry: TelemetryAPI.Telemetry = new TelemetryAPI.Telemetry(this._client);
}

Observability.Telemetry = Telemetry;

export declare namespace Observability {
  export { Telemetry as Telemetry };
}
