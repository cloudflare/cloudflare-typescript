// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as TelemetryAPI from './telemetry';
import {
  Telemetry,
  TelemetryKeysParams,
  TelemetryKeysResponse,
  TelemetryKeysResponsesSinglePage,
  TelemetryQueryParams,
  TelemetryQueryResponse,
  TelemetryValuesParams,
  TelemetryValuesResponse,
  TelemetryValuesResponsesSinglePage,
} from './telemetry';

export class Observability extends APIResource {
  telemetry: TelemetryAPI.Telemetry = new TelemetryAPI.Telemetry(this._client);
}

Observability.Telemetry = Telemetry;

export declare namespace Observability {
  export {
    Telemetry as Telemetry,
    type TelemetryKeysResponse as TelemetryKeysResponse,
    type TelemetryQueryResponse as TelemetryQueryResponse,
    type TelemetryValuesResponse as TelemetryValuesResponse,
    type TelemetryKeysResponsesSinglePage as TelemetryKeysResponsesSinglePage,
    type TelemetryValuesResponsesSinglePage as TelemetryValuesResponsesSinglePage,
    type TelemetryKeysParams as TelemetryKeysParams,
    type TelemetryQueryParams as TelemetryQueryParams,
    type TelemetryValuesParams as TelemetryValuesParams,
  };
}
