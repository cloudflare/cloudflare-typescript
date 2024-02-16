// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as ColoAPI from 'cloudflare/resources/analytics/colo';

export class Colo extends APIResource {
  /**
   * This view provides a breakdown of analytics data by datacenter. Note: This is
   * available to Enterprise customers only.
   */
  zoneAnalyticsDeprecatedGetAnalyticsByCoLocations(
    zoneIdentifier: string,
    query?: ColoZoneAnalyticsDeprecatedGetAnalyticsByCoLocationsParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ColoZoneAnalyticsDeprecatedGetAnalyticsByCoLocationsResponse>;
  zoneAnalyticsDeprecatedGetAnalyticsByCoLocations(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<ColoZoneAnalyticsDeprecatedGetAnalyticsByCoLocationsResponse>;
  zoneAnalyticsDeprecatedGetAnalyticsByCoLocations(
    zoneIdentifier: string,
    query: ColoZoneAnalyticsDeprecatedGetAnalyticsByCoLocationsParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<ColoZoneAnalyticsDeprecatedGetAnalyticsByCoLocationsResponse> {
    if (isRequestOptions(query)) {
      return this.zoneAnalyticsDeprecatedGetAnalyticsByCoLocations(zoneIdentifier, {}, query);
    }
    return (
      this._client.get(`/zones/${zoneIdentifier}/analytics/colos`, { query, ...options }) as Core.APIPromise<{
        result: ColoZoneAnalyticsDeprecatedGetAnalyticsByCoLocationsResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * A breakdown of all dashboard analytics data by co-locations. This is limited to
 * Enterprise zones only.
 */
export type ColoZoneAnalyticsDeprecatedGetAnalyticsByCoLocationsResponse =
  Array<ColoZoneAnalyticsDeprecatedGetAnalyticsByCoLocationsResponse.ColoZoneAnalyticsDeprecatedGetAnalyticsByCoLocationsResponseItem>;

export namespace ColoZoneAnalyticsDeprecatedGetAnalyticsByCoLocationsResponse {
  export interface ColoZoneAnalyticsDeprecatedGetAnalyticsByCoLocationsResponseItem {
    /**
     * The airport code identifer for the co-location.
     */
    colo_id?: string;

    /**
     * Time deltas containing metadata about each bucket of time. The number of buckets
     * (resolution) is determined by the amount of time between the since and until
     * parameters.
     */
    timeseries?: Array<ColoZoneAnalyticsDeprecatedGetAnalyticsByCoLocationsResponseItem.Timesery>;

    /**
     * Breakdown of totals by data type.
     */
    totals?: ColoZoneAnalyticsDeprecatedGetAnalyticsByCoLocationsResponseItem.Totals;
  }

  export namespace ColoZoneAnalyticsDeprecatedGetAnalyticsByCoLocationsResponseItem {
    export interface Timesery {
      /**
       * Breakdown of totals for bandwidth in the form of bytes.
       */
      bandwidth?: Timesery.Bandwidth;

      /**
       * Breakdown of totals for requests.
       */
      requests?: Timesery.Requests;

      /**
       * The (inclusive) beginning of the requested time frame. This value can be a
       * negative integer representing the number of minutes in the past relative to time
       * the request is made, or can be an absolute timestamp that conforms to RFC 3339.
       * At this point in time, it cannot exceed a time in the past greater than one
       * year.
       *
       * Ranges that the Cloudflare web application provides will provide the following
       * period length for each point:
       *
       * - Last 60 minutes (from -59 to -1): 1 minute resolution
       * - Last 7 hours (from -419 to -60): 15 minutes resolution
       * - Last 15 hours (from -899 to -420): 30 minutes resolution
       * - Last 72 hours (from -4320 to -900): 1 hour resolution
       * - Older than 3 days (-525600 to -4320): 1 day resolution.
       */
      since?: string | number;

      /**
       * Breakdown of totals for threats.
       */
      threats?: Timesery.Threats;

      /**
       * The (exclusive) end of the requested time frame. This value can be a negative
       * integer representing the number of minutes in the past relative to time the
       * request is made, or can be an absolute timestamp that conforms to RFC 3339. If
       * omitted, the time of the request is used.
       */
      until?: string | number;
    }

    export namespace Timesery {
      /**
       * Breakdown of totals for bandwidth in the form of bytes.
       */
      export interface Bandwidth {
        /**
         * The total number of bytes served within the time frame.
         */
        all?: number;

        /**
         * The number of bytes that were cached (and served) by Cloudflare.
         */
        cached?: number;

        /**
         * The number of bytes that were fetched and served from the origin server.
         */
        uncached?: number;
      }

      /**
       * Breakdown of totals for requests.
       */
      export interface Requests {
        /**
         * Total number of requests served.
         */
        all?: number;

        /**
         * Total number of cached requests served.
         */
        cached?: number;

        /**
         * Key/value pairs where the key is a two-digit country code and the value is the
         * number of requests served to that country.
         */
        country?: Record<string, unknown>;

        /**
         * A variable list of key/value pairs where the key is a HTTP status code and the
         * value is the number of requests with that code served.
         */
        http_status?: unknown;

        /**
         * Total number of requests served from the origin.
         */
        uncached?: number;
      }

      /**
       * Breakdown of totals for threats.
       */
      export interface Threats {
        /**
         * The total number of identifiable threats received over the time frame.
         */
        all?: number;

        /**
         * A list of key/value pairs where the key is a two-digit country code and the
         * value is the number of malicious requests received from that country.
         */
        country?: unknown;

        /**
         * The list of key/value pairs where the key is a threat category and the value is
         * the number of requests.
         */
        type?: unknown;
      }
    }

    /**
     * Breakdown of totals by data type.
     */
    export interface Totals {
      /**
       * Breakdown of totals for bandwidth in the form of bytes.
       */
      bandwidth?: Totals.Bandwidth;

      /**
       * Breakdown of totals for requests.
       */
      requests?: Totals.Requests;

      /**
       * The (inclusive) beginning of the requested time frame. This value can be a
       * negative integer representing the number of minutes in the past relative to time
       * the request is made, or can be an absolute timestamp that conforms to RFC 3339.
       * At this point in time, it cannot exceed a time in the past greater than one
       * year.
       *
       * Ranges that the Cloudflare web application provides will provide the following
       * period length for each point:
       *
       * - Last 60 minutes (from -59 to -1): 1 minute resolution
       * - Last 7 hours (from -419 to -60): 15 minutes resolution
       * - Last 15 hours (from -899 to -420): 30 minutes resolution
       * - Last 72 hours (from -4320 to -900): 1 hour resolution
       * - Older than 3 days (-525600 to -4320): 1 day resolution.
       */
      since?: string | number;

      /**
       * Breakdown of totals for threats.
       */
      threats?: Totals.Threats;

      /**
       * The (exclusive) end of the requested time frame. This value can be a negative
       * integer representing the number of minutes in the past relative to time the
       * request is made, or can be an absolute timestamp that conforms to RFC 3339. If
       * omitted, the time of the request is used.
       */
      until?: string | number;
    }

    export namespace Totals {
      /**
       * Breakdown of totals for bandwidth in the form of bytes.
       */
      export interface Bandwidth {
        /**
         * The total number of bytes served within the time frame.
         */
        all?: number;

        /**
         * The number of bytes that were cached (and served) by Cloudflare.
         */
        cached?: number;

        /**
         * The number of bytes that were fetched and served from the origin server.
         */
        uncached?: number;
      }

      /**
       * Breakdown of totals for requests.
       */
      export interface Requests {
        /**
         * Total number of requests served.
         */
        all?: number;

        /**
         * Total number of cached requests served.
         */
        cached?: number;

        /**
         * Key/value pairs where the key is a two-digit country code and the value is the
         * number of requests served to that country.
         */
        country?: Record<string, unknown>;

        /**
         * A variable list of key/value pairs where the key is a HTTP status code and the
         * value is the number of requests with that code served.
         */
        http_status?: unknown;

        /**
         * Total number of requests served from the origin.
         */
        uncached?: number;
      }

      /**
       * Breakdown of totals for threats.
       */
      export interface Threats {
        /**
         * The total number of identifiable threats received over the time frame.
         */
        all?: number;

        /**
         * A list of key/value pairs where the key is a two-digit country code and the
         * value is the number of malicious requests received from that country.
         */
        country?: unknown;

        /**
         * The list of key/value pairs where the key is a threat category and the value is
         * the number of requests.
         */
        type?: unknown;
      }
    }
  }
}

export interface ColoZoneAnalyticsDeprecatedGetAnalyticsByCoLocationsParams {
  /**
   * When set to true, the API will move the requested time window backward, until it
   * finds a region with completely aggregated data.
   *
   * The API response _may not represent the requested time window_.
   */
  continuous?: boolean;

  /**
   * The (inclusive) beginning of the requested time frame. This value can be a
   * negative integer representing the number of minutes in the past relative to time
   * the request is made, or can be an absolute timestamp that conforms to RFC 3339.
   * At this point in time, it cannot exceed a time in the past greater than one
   * year.
   *
   * Ranges that the Cloudflare web application provides will provide the following
   * period length for each point:
   *
   * - Last 60 minutes (from -59 to -1): 1 minute resolution
   * - Last 7 hours (from -419 to -60): 15 minutes resolution
   * - Last 15 hours (from -899 to -420): 30 minutes resolution
   * - Last 72 hours (from -4320 to -900): 1 hour resolution
   * - Older than 3 days (-525600 to -4320): 1 day resolution.
   */
  since?: string | number;

  /**
   * The (exclusive) end of the requested time frame. This value can be a negative
   * integer representing the number of minutes in the past relative to time the
   * request is made, or can be an absolute timestamp that conforms to RFC 3339. If
   * omitted, the time of the request is used.
   */
  until?: string | number;
}

export namespace Colo {
  export import ColoZoneAnalyticsDeprecatedGetAnalyticsByCoLocationsResponse = ColoAPI.ColoZoneAnalyticsDeprecatedGetAnalyticsByCoLocationsResponse;
  export import ColoZoneAnalyticsDeprecatedGetAnalyticsByCoLocationsParams = ColoAPI.ColoZoneAnalyticsDeprecatedGetAnalyticsByCoLocationsParams;
}
