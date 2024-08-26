// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import { APIPromise } from '../../../core';
import * as Core from '../../../core';
import * as LocationsAPI from './locations';

export class Locations extends APIResource {
  /**
   * Get a list of locations.
   */
  list(query?: LocationListParams, options?: Core.RequestOptions): Core.APIPromise<LocationListResponse>
  list(options?: Core.RequestOptions): Core.APIPromise<LocationListResponse>
  list(query: LocationListParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<LocationListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return (this._client.get('/radar/entities/locations', { query, ...options }) as Core.APIPromise<{ result: LocationListResponse }>)._thenUnwrap((obj) => obj.result);
  }

  /**
   * Get the requested location information. A confidence level below `5` indicates a
   * low level of confidence in the traffic data - normally this happens because
   * Cloudflare has a small amount of traffic from/to this location).
   */
  get(location: string, query?: LocationGetParams, options?: Core.RequestOptions): Core.APIPromise<LocationGetResponse>
  get(location: string, options?: Core.RequestOptions): Core.APIPromise<LocationGetResponse>
  get(location: string, query: LocationGetParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<LocationGetResponse> {
    if (isRequestOptions(query)) {
      return this.get(location, {}, query);
    }
    return (this._client.get(`/radar/entities/locations/${location}`, { query, ...options }) as Core.APIPromise<{ result: LocationGetResponse }>)._thenUnwrap((obj) => obj.result);
  }
}

export interface LocationListResponse {
  locations: Array<LocationListResponse.Location>;
}

export namespace LocationListResponse {
  export interface Location {
    alpha2: string;

    latitude: string;

    longitude: string;

    name: string;
  }
}

export interface LocationGetResponse {
  location: LocationGetResponse.Location;
}

export namespace LocationGetResponse {
  export interface Location {
    alpha2: string;

    confidenceLevel: number;

    latitude: string;

    longitude: string;

    name: string;

    region: string;

    subregion: string;
  }
}

export interface LocationListParams {
  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Limit the number of objects in the response.
   */
  limit?: number;

  /**
   * Comma separated list of locations.
   */
  location?: string;

  /**
   * Number of objects to skip before grabbing results.
   */
  offset?: number;
}

export interface LocationGetParams {
  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';
}

export namespace Locations {
  export import LocationListResponse = LocationsAPI.LocationListResponse;
  export import LocationGetResponse = LocationsAPI.LocationGetResponse;
  export import LocationListParams = LocationsAPI.LocationListParams;
  export import LocationGetParams = LocationsAPI.LocationGetParams;
}
