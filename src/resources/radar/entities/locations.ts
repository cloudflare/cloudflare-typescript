// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { APIPromise } from '../../../api-promise';
import { RequestOptions } from '../../../internal/request-options';
import { path } from '../../../internal/utils/path';

export class Locations extends APIResource {
  /**
   * Retrieves a list of locations.
   */
  list(
    query: LocationListParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LocationListResponse> {
    return (
      this._client.get('/radar/entities/locations', { query, ...options }) as APIPromise<{
        result: LocationListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the requested location information. (A confidence level below `5`
   * indicates a low level of confidence in the traffic data - normally this happens
   * because Cloudflare has a small amount of traffic from/to this location).
   */
  get(
    location: string,
    query: LocationGetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LocationGetResponse> {
    return (
      this._client.get(path`/radar/entities/locations/${location}`, { query, ...options }) as APIPromise<{
        result: LocationGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
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
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Limits the number of objects returned in the response.
   */
  limit?: number;

  /**
   * Comma-separated list of locations (alpha-2 location codes).
   */
  location?: string;

  /**
   * Skips the specified number of objects before fetching the results.
   */
  offset?: number;
}

export interface LocationGetParams {
  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';
}

export declare namespace Locations {
  export {
    type LocationListResponse as LocationListResponse,
    type LocationGetResponse as LocationGetResponse,
    type LocationListParams as LocationListParams,
    type LocationGetParams as LocationGetParams,
  };
}
