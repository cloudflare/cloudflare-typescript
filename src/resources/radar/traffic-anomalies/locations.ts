// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as LocationsAPI from 'cloudflare/resources/radar/traffic-anomalies/locations';
import * as RadarAPI from 'cloudflare/resources/radar/radar';

export class Locations extends APIResource {
  /**
   * Internet traffic anomalies are signals that might point to an outage, These
   * alerts are automatically detected by Radar and then manually verified by our
   * team. This endpoint returns the sum of alerts grouped by location.
   */
  get(query?: LocationGetParams, options?: Core.RequestOptions): Core.APIPromise<LocationGetResponse>;
  get(options?: Core.RequestOptions): Core.APIPromise<LocationGetResponse>;
  get(
    query: LocationGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LocationGetResponse> {
    if (isRequestOptions(query)) {
      return this.get({}, query);
    }
    return (
      this._client.get('/radar/traffic_anomalies/locations', { query, ...options }) as Core.APIPromise<{
        result: LocationGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface LocationGetResponse {
  trafficAnomalies: Array<RadarAPI.UnnamedSchemaRef83a14d589e799bc901b9ccc870251d09>;
}

export interface LocationGetParams {
  /**
   * End of the date range (inclusive).
   */
  dateEnd?: string;

  /**
   * Shorthand date ranges for the last X days - use when you don't need specific
   * start and end dates.
   */
  dateRange?:
    | '1d'
    | '2d'
    | '7d'
    | '14d'
    | '28d'
    | '12w'
    | '24w'
    | '52w'
    | '1dControl'
    | '2dControl'
    | '7dControl'
    | '14dControl'
    | '28dControl'
    | '12wControl'
    | '24wControl';

  /**
   * Start of the date range (inclusive).
   */
  dateStart?: string;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Limit the number of objects in the response.
   */
  limit?: number;

  status?: 'VERIFIED' | 'UNVERIFIED';
}

export namespace Locations {
  export import LocationGetResponse = LocationsAPI.LocationGetResponse;
  export import LocationGetParams = LocationsAPI.LocationGetParams;
}
