// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as DashboardsAPI from 'cloudflare/resources/analytics/dashboards';

export class Dashboards extends APIResource {
  /**
   * The dashboard view provides both totals and timeseries data for the given zone
   * and time period across the entire Cloudflare network.
   */
  zoneAnalyticsDeprecatedGetDashboard(
    zoneIdentifier: string,
    query?: DashboardZoneAnalyticsDeprecatedGetDashboardParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DashboardZoneAnalyticsDeprecatedGetDashboardResponse>;
  zoneAnalyticsDeprecatedGetDashboard(
    zoneIdentifier: string,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DashboardZoneAnalyticsDeprecatedGetDashboardResponse>;
  zoneAnalyticsDeprecatedGetDashboard(
    zoneIdentifier: string,
    query: DashboardZoneAnalyticsDeprecatedGetDashboardParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DashboardZoneAnalyticsDeprecatedGetDashboardResponse> {
    if (isRequestOptions(query)) {
      return this.zoneAnalyticsDeprecatedGetDashboard(zoneIdentifier, {}, query);
    }
    return (
      this._client.get(`/zones/${zoneIdentifier}/analytics/dashboard`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: DashboardZoneAnalyticsDeprecatedGetDashboardResponse }>
    )._thenUnwrap((obj) => obj.result);
  }
}

/**
 * Totals and timeseries data.
 */
export interface DashboardZoneAnalyticsDeprecatedGetDashboardResponse {
  /**
   * Time deltas containing metadata about each bucket of time. The number of buckets
   * (resolution) is determined by the amount of time between the since and until
   * parameters.
   */
  timeseries?: Array<DashboardZoneAnalyticsDeprecatedGetDashboardResponse.Timesery>;

  /**
   * Breakdown of totals by data type.
   */
  totals?: DashboardZoneAnalyticsDeprecatedGetDashboardResponse.Totals;
}

export namespace DashboardZoneAnalyticsDeprecatedGetDashboardResponse {
  export interface Timesery {
    /**
     * Breakdown of totals for bandwidth in the form of bytes.
     */
    bandwidth?: Timesery.Bandwidth;

    /**
     * Breakdown of totals for pageviews.
     */
    pageviews?: Timesery.Pageviews;

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

    uniques?: Timesery.Uniques;

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
       * A variable list of key/value pairs where the key represents the type of content
       * served, and the value is the number in bytes served.
       */
      content_type?: unknown;

      /**
       * A variable list of key/value pairs where the key is a two-digit country code and
       * the value is the number of bytes served to that country.
       */
      country?: unknown;

      /**
       * A break down of bytes served over HTTPS.
       */
      ssl?: Bandwidth.SSL;

      /**
       * A breakdown of requests by their SSL protocol.
       */
      ssl_protocols?: Bandwidth.SSLProtocols;

      /**
       * The number of bytes that were fetched and served from the origin server.
       */
      uncached?: number;
    }

    export namespace Bandwidth {
      /**
       * A break down of bytes served over HTTPS.
       */
      export interface SSL {
        /**
         * The number of bytes served over HTTPS.
         */
        encrypted?: number;

        /**
         * The number of bytes served over HTTP.
         */
        unencrypted?: number;
      }

      /**
       * A breakdown of requests by their SSL protocol.
       */
      export interface SSLProtocols {
        /**
         * The number of requests served over HTTP.
         */
        none?: number;

        /**
         * The number of requests served over TLS v1.0.
         */
        TLSv1?: number;

        /**
         * The number of requests served over TLS v1.1.
         */
        'TLSv1.1'?: number;

        /**
         * The number of requests served over TLS v1.2.
         */
        'TLSv1.2'?: number;

        /**
         * The number of requests served over TLS v1.3.
         */
        'TLSv1.3'?: number;
      }
    }

    /**
     * Breakdown of totals for pageviews.
     */
    export interface Pageviews {
      /**
       * The total number of pageviews served within the time range.
       */
      all?: number;

      /**
       * A variable list of key/value pairs representing the search engine and number of
       * hits.
       */
      search_engine?: unknown;
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
       * A variable list of key/value pairs where the key represents the type of content
       * served, and the value is the number of requests.
       */
      content_type?: unknown;

      /**
       * A variable list of key/value pairs where the key is a two-digit country code and
       * the value is the number of requests served to that country.
       */
      country?: unknown;

      /**
       * Key/value pairs where the key is a HTTP status code and the value is the number
       * of requests served with that code.
       */
      http_status?: Record<string, unknown>;

      /**
       * A break down of requests served over HTTPS.
       */
      ssl?: Requests.SSL;

      /**
       * A breakdown of requests by their SSL protocol.
       */
      ssl_protocols?: Requests.SSLProtocols;

      /**
       * Total number of requests served from the origin.
       */
      uncached?: number;
    }

    export namespace Requests {
      /**
       * A break down of requests served over HTTPS.
       */
      export interface SSL {
        /**
         * The number of requests served over HTTPS.
         */
        encrypted?: number;

        /**
         * The number of requests served over HTTP.
         */
        unencrypted?: number;
      }

      /**
       * A breakdown of requests by their SSL protocol.
       */
      export interface SSLProtocols {
        /**
         * The number of requests served over HTTP.
         */
        none?: number;

        /**
         * The number of requests served over TLS v1.0.
         */
        TLSv1?: number;

        /**
         * The number of requests served over TLS v1.1.
         */
        'TLSv1.1'?: number;

        /**
         * The number of requests served over TLS v1.2.
         */
        'TLSv1.2'?: number;

        /**
         * The number of requests served over TLS v1.3.
         */
        'TLSv1.3'?: number;
      }
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

    export interface Uniques {
      /**
       * Total number of unique IP addresses within the time range.
       */
      all?: number;
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
     * Breakdown of totals for pageviews.
     */
    pageviews?: Totals.Pageviews;

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

    uniques?: Totals.Uniques;

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
       * A variable list of key/value pairs where the key represents the type of content
       * served, and the value is the number in bytes served.
       */
      content_type?: unknown;

      /**
       * A variable list of key/value pairs where the key is a two-digit country code and
       * the value is the number of bytes served to that country.
       */
      country?: unknown;

      /**
       * A break down of bytes served over HTTPS.
       */
      ssl?: Bandwidth.SSL;

      /**
       * A breakdown of requests by their SSL protocol.
       */
      ssl_protocols?: Bandwidth.SSLProtocols;

      /**
       * The number of bytes that were fetched and served from the origin server.
       */
      uncached?: number;
    }

    export namespace Bandwidth {
      /**
       * A break down of bytes served over HTTPS.
       */
      export interface SSL {
        /**
         * The number of bytes served over HTTPS.
         */
        encrypted?: number;

        /**
         * The number of bytes served over HTTP.
         */
        unencrypted?: number;
      }

      /**
       * A breakdown of requests by their SSL protocol.
       */
      export interface SSLProtocols {
        /**
         * The number of requests served over HTTP.
         */
        none?: number;

        /**
         * The number of requests served over TLS v1.0.
         */
        TLSv1?: number;

        /**
         * The number of requests served over TLS v1.1.
         */
        'TLSv1.1'?: number;

        /**
         * The number of requests served over TLS v1.2.
         */
        'TLSv1.2'?: number;

        /**
         * The number of requests served over TLS v1.3.
         */
        'TLSv1.3'?: number;
      }
    }

    /**
     * Breakdown of totals for pageviews.
     */
    export interface Pageviews {
      /**
       * The total number of pageviews served within the time range.
       */
      all?: number;

      /**
       * A variable list of key/value pairs representing the search engine and number of
       * hits.
       */
      search_engine?: unknown;
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
       * A variable list of key/value pairs where the key represents the type of content
       * served, and the value is the number of requests.
       */
      content_type?: unknown;

      /**
       * A variable list of key/value pairs where the key is a two-digit country code and
       * the value is the number of requests served to that country.
       */
      country?: unknown;

      /**
       * Key/value pairs where the key is a HTTP status code and the value is the number
       * of requests served with that code.
       */
      http_status?: Record<string, unknown>;

      /**
       * A break down of requests served over HTTPS.
       */
      ssl?: Requests.SSL;

      /**
       * A breakdown of requests by their SSL protocol.
       */
      ssl_protocols?: Requests.SSLProtocols;

      /**
       * Total number of requests served from the origin.
       */
      uncached?: number;
    }

    export namespace Requests {
      /**
       * A break down of requests served over HTTPS.
       */
      export interface SSL {
        /**
         * The number of requests served over HTTPS.
         */
        encrypted?: number;

        /**
         * The number of requests served over HTTP.
         */
        unencrypted?: number;
      }

      /**
       * A breakdown of requests by their SSL protocol.
       */
      export interface SSLProtocols {
        /**
         * The number of requests served over HTTP.
         */
        none?: number;

        /**
         * The number of requests served over TLS v1.0.
         */
        TLSv1?: number;

        /**
         * The number of requests served over TLS v1.1.
         */
        'TLSv1.1'?: number;

        /**
         * The number of requests served over TLS v1.2.
         */
        'TLSv1.2'?: number;

        /**
         * The number of requests served over TLS v1.3.
         */
        'TLSv1.3'?: number;
      }
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

    export interface Uniques {
      /**
       * Total number of unique IP addresses within the time range.
       */
      all?: number;
    }
  }
}

export interface DashboardZoneAnalyticsDeprecatedGetDashboardParams {
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

export namespace Dashboards {
  export import DashboardZoneAnalyticsDeprecatedGetDashboardResponse = DashboardsAPI.DashboardZoneAnalyticsDeprecatedGetDashboardResponse;
  export import DashboardZoneAnalyticsDeprecatedGetDashboardParams = DashboardsAPI.DashboardZoneAnalyticsDeprecatedGetDashboardParams;
}
