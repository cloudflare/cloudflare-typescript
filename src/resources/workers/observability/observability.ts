// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DestinationsAPI from './destinations';
import { BaseDestinations, Destinations } from './destinations';
import * as TelemetryAPI from './telemetry';
import { BaseTelemetry, Telemetry } from './telemetry';

export class BaseObservability extends APIResource {
  static override readonly _key: readonly ['workers', 'observability'] = Object.freeze([
    'workers',
    'observability',
  ] as const);
}
export class Observability extends BaseObservability {
  telemetry: TelemetryAPI.Telemetry = new TelemetryAPI.Telemetry(this._client);
  destinations: DestinationsAPI.Destinations = new DestinationsAPI.Destinations(this._client);
}

Observability.Telemetry = Telemetry;
Observability.BaseTelemetry = BaseTelemetry;
Observability.Destinations = Destinations;
Observability.BaseDestinations = BaseDestinations;

export declare namespace Observability {
  export { Telemetry as Telemetry, BaseTelemetry as BaseTelemetry };

  export { Destinations as Destinations, BaseDestinations as BaseDestinations };
}
