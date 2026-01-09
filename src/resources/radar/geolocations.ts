// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import { isRequestOptions } from '../../core';
import * as Core from '../../core';

export class Geolocations extends APIResource {
  /**
   * Retrieves a list of geolocations.
   *
   * @example
   * ```ts
   * const geolocations = await client.radar.geolocations.list();
   * ```
   */
  list(
    query?: GeolocationListParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GeolocationListResponse>;
  list(options?: Core.RequestOptions): Core.APIPromise<GeolocationListResponse>;
  list(
    query: GeolocationListParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<GeolocationListResponse> {
    if (isRequestOptions(query)) {
      return this.list({}, query);
    }
    return (
      this._client.get('/radar/geolocations', { query, ...options }) as Core.APIPromise<{
        result: GeolocationListResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the requested Geolocation information.
   *
   * @example
   * ```ts
   * const geolocation = await client.radar.geolocations.get(
   *   '3190509',
   * );
   * ```
   */
  get(
    geoId: string,
    query?: GeolocationGetParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<GeolocationGetResponse>;
  get(geoId: string, options?: Core.RequestOptions): Core.APIPromise<GeolocationGetResponse>;
  get(
    geoId: string,
    query: GeolocationGetParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<GeolocationGetResponse> {
    if (isRequestOptions(query)) {
      return this.get(geoId, {}, query);
    }
    return (
      this._client.get(`/radar/geolocations/${geoId}`, { query, ...options }) as Core.APIPromise<{
        result: GeolocationGetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface GeolocationListResponse {
  geolocations: Array<GeolocationListResponse.Geolocation>;
}

export namespace GeolocationListResponse {
  export interface Geolocation {
    geoId: string;

    /**
     * A numeric string.
     */
    latitude: string;

    /**
     * A numeric string.
     */
    longitude: string;

    name: string;

    parent: Geolocation.Parent;

    /**
     * The type of the geolocation.
     */
    type: 'CONTINENT' | 'COUNTRY' | 'ADM1';
  }

  export namespace Geolocation {
    export interface Parent {
      geoId: string;

      /**
       * A numeric string.
       */
      latitude: string;

      /**
       * A numeric string.
       */
      longitude: string;

      name: string;

      parent: Parent.Parent;

      /**
       * The type of the geolocation.
       */
      type: 'CONTINENT' | 'COUNTRY' | 'ADM1';
    }

    export namespace Parent {
      export interface Parent {
        geoId: string;

        /**
         * A numeric string.
         */
        latitude: string;

        /**
         * A numeric string.
         */
        longitude: string;

        name: string;

        /**
         * The type of the geolocation.
         */
        type: 'CONTINENT' | 'COUNTRY' | 'ADM1';
      }
    }
  }
}

export interface GeolocationGetResponse {
  geolocation: GeolocationGetResponse.Geolocation;
}

export namespace GeolocationGetResponse {
  export interface Geolocation {
    geoId: string;

    /**
     * A numeric string.
     */
    latitude: string;

    /**
     * A numeric string.
     */
    longitude: string;

    name: string;

    parent: Geolocation.Parent;

    /**
     * The type of the geolocation.
     */
    type: 'CONTINENT' | 'COUNTRY' | 'ADM1';
  }

  export namespace Geolocation {
    export interface Parent {
      geoId: string;

      /**
       * A numeric string.
       */
      latitude: string;

      /**
       * A numeric string.
       */
      longitude: string;

      name: string;

      parent: Parent.Parent;

      /**
       * The type of the geolocation.
       */
      type: 'CONTINENT' | 'COUNTRY' | 'ADM1';
    }

    export namespace Parent {
      export interface Parent {
        geoId: string;

        /**
         * A numeric string.
         */
        latitude: string;

        /**
         * A numeric string.
         */
        longitude: string;

        name: string;

        /**
         * The type of the geolocation.
         */
        type: 'CONTINENT' | 'COUNTRY' | 'ADM1';
      }
    }
  }
}

export interface GeolocationListParams {
  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filters results by geolocation. Specify a comma-separated list of GeoNames IDs.
   */
  geoId?: string;

  /**
   * Limits the number of objects returned in the response.
   */
  limit?: number;

  /**
   * Filters results by location. Specify a comma-separated list of alpha-2 location
   * codes.
   */
  location?: string;

  /**
   * Skips the specified number of objects before fetching the results.
   */
  offset?: number;
}

export interface GeolocationGetParams {
  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';
}

export declare namespace Geolocations {
  export {
    type GeolocationListResponse as GeolocationListResponse,
    type GeolocationGetResponse as GeolocationGetResponse,
    type GeolocationListParams as GeolocationListParams,
    type GeolocationGetParams as GeolocationGetParams,
  };
}
