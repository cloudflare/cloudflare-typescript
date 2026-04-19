// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import * as DestinationsAPI from './destinations';
import {
  DestinationCreateParams,
  DestinationCreateResponse,
  DestinationDeleteParams,
  DestinationDeleteResponse,
  DestinationListParams,
  DestinationListResponse,
  DestinationListResponsesSinglePage,
  DestinationUpdateParams,
  DestinationUpdateResponse,
  Destinations,
} from './destinations';
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
  destinations: DestinationsAPI.Destinations = new DestinationsAPI.Destinations(this._client);
}

Observability.Telemetry = Telemetry;
Observability.TelemetryKeysResponsesSinglePage = TelemetryKeysResponsesSinglePage;
Observability.TelemetryValuesResponsesSinglePage = TelemetryValuesResponsesSinglePage;
Observability.Destinations = Destinations;
Observability.DestinationListResponsesSinglePage = DestinationListResponsesSinglePage;

export declare namespace Observability {
  export {
    Telemetry as Telemetry,
    type TelemetryKeysResponse as TelemetryKeysResponse,
    type TelemetryQueryResponse as TelemetryQueryResponse,
    type TelemetryValuesResponse as TelemetryValuesResponse,
    TelemetryKeysResponsesSinglePage as TelemetryKeysResponsesSinglePage,
    TelemetryValuesResponsesSinglePage as TelemetryValuesResponsesSinglePage,
    type TelemetryKeysParams as TelemetryKeysParams,
    type TelemetryQueryParams as TelemetryQueryParams,
    type TelemetryValuesParams as TelemetryValuesParams,
  };

  export {
    Destinations as Destinations,
    type DestinationCreateResponse as DestinationCreateResponse,
    type DestinationUpdateResponse as DestinationUpdateResponse,
    type DestinationListResponse as DestinationListResponse,
    type DestinationDeleteResponse as DestinationDeleteResponse,
    DestinationListResponsesSinglePage as DestinationListResponsesSinglePage,
    type DestinationCreateParams as DestinationCreateParams,
    type DestinationUpdateParams as DestinationUpdateParams,
    type DestinationListParams as DestinationListParams,
    type DestinationDeleteParams as DestinationDeleteParams,
  };
}
