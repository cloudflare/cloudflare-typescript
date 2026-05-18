// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as DestinationsAPI from './destinations';
import {
  BaseDestinations,
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
import * as QueriesAPI from './queries';
import {
  BaseQueries,
  Queries,
  QueryCreateParams,
  QueryCreateResponse,
  QueryListParams,
  QueryListResponse,
  QueryListResponsesSinglePage,
} from './queries';
import * as TelemetryAPI from './telemetry';
import {
  BaseTelemetry,
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

export class BaseObservability extends APIResource {
  static override readonly _key: readonly ['workers', 'observability'] = Object.freeze([
    'workers',
    'observability',
  ] as const);
}
export class Observability extends BaseObservability {
  telemetry: TelemetryAPI.Telemetry = new TelemetryAPI.Telemetry(this._client);
  destinations: DestinationsAPI.Destinations = new DestinationsAPI.Destinations(this._client);
  queries: QueriesAPI.Queries = new QueriesAPI.Queries(this._client);
}

Observability.Telemetry = Telemetry;
Observability.BaseTelemetry = BaseTelemetry;
Observability.Destinations = Destinations;
Observability.BaseDestinations = BaseDestinations;
Observability.Queries = Queries;
Observability.BaseQueries = BaseQueries;

export declare namespace Observability {
  export {
    Telemetry as Telemetry,
    BaseTelemetry as BaseTelemetry,
    type TelemetryKeysResponse as TelemetryKeysResponse,
    type TelemetryQueryResponse as TelemetryQueryResponse,
    type TelemetryValuesResponse as TelemetryValuesResponse,
    type TelemetryKeysResponsesSinglePage as TelemetryKeysResponsesSinglePage,
    type TelemetryValuesResponsesSinglePage as TelemetryValuesResponsesSinglePage,
    type TelemetryKeysParams as TelemetryKeysParams,
    type TelemetryQueryParams as TelemetryQueryParams,
    type TelemetryValuesParams as TelemetryValuesParams,
  };

  export {
    Destinations as Destinations,
    BaseDestinations as BaseDestinations,
    type DestinationCreateResponse as DestinationCreateResponse,
    type DestinationUpdateResponse as DestinationUpdateResponse,
    type DestinationListResponse as DestinationListResponse,
    type DestinationDeleteResponse as DestinationDeleteResponse,
    type DestinationListResponsesSinglePage as DestinationListResponsesSinglePage,
    type DestinationCreateParams as DestinationCreateParams,
    type DestinationUpdateParams as DestinationUpdateParams,
    type DestinationListParams as DestinationListParams,
    type DestinationDeleteParams as DestinationDeleteParams,
  };

  export {
    Queries as Queries,
    BaseQueries as BaseQueries,
    type QueryCreateResponse as QueryCreateResponse,
    type QueryListResponse as QueryListResponse,
    type QueryListResponsesSinglePage as QueryListResponsesSinglePage,
    type QueryCreateParams as QueryCreateParams,
    type QueryListParams as QueryListParams,
  };
}
