// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../../core/resource';
import { APIPromise } from '../../../../../core/api-promise';
import { RequestOptions } from '../../../../../internal/request-options';

export class BaseLocations extends APIResource {
  static override readonly _key: readonly ['radar', 'attacks', 'layer7', 'top', 'locations'] = Object.freeze([
    'radar',
    'attacks',
    'layer7',
    'top',
    'locations',
  ] as const);

  /**
   * Retrieves the top origin locations of layer 7 attacks. Values are percentages of
   * the total layer 7 attacks, with the origin location determined by the client IP
   * address.
   *
   * @example
   * ```ts
   * const response =
   *   await client.radar.attacks.layer7.top.locations.origin();
   * ```
   */
  origin(
    query: LocationOriginParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LocationOriginResponse> {
    return (
      this._client.get('/radar/attacks/layer7/top/locations/origin', { query, ...options }) as APIPromise<{
        result: LocationOriginResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the top target locations of and by layer 7 attacks. Values are a
   * percentage out of the total layer 7 attacks. The target location is determined
   * by the attacked zone's billing country, when available.
   *
   * @example
   * ```ts
   * const response =
   *   await client.radar.attacks.layer7.top.locations.target();
   * ```
   */
  target(
    query: LocationTargetParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<LocationTargetResponse> {
    return (
      this._client.get('/radar/attacks/layer7/top/locations/target', { query, ...options }) as APIPromise<{
        result: LocationTargetResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Locations extends BaseLocations {}

export interface LocationOriginResponse {
  /**
   * Metadata for the results.
   */
  meta: LocationOriginResponse.Meta;

  top_0: Array<LocationOriginResponse.Top0>;
}

export namespace LocationOriginResponse {
  /**
   * Metadata for the results.
   */
  export interface Meta {
    confidenceInfo: Meta.ConfidenceInfo | null;

    dateRange: Array<Meta.DateRange>;

    /**
     * Timestamp of the last dataset update.
     */
    lastUpdated: string;

    /**
     * Normalization method applied to the results. Refer to
     * [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization/).
     */
    normalization:
      | 'PERCENTAGE'
      | 'MIN0_MAX'
      | 'MIN_MAX'
      | 'RAW_VALUES'
      | 'PERCENTAGE_CHANGE'
      | 'ROLLING_AVERAGE'
      | 'OVERLAPPED_PERCENTAGE'
      | 'RATIO';

    /**
     * Measurement units for the results.
     */
    units: Array<Meta.Unit>;
  }

  export namespace Meta {
    export interface ConfidenceInfo {
      annotations: Array<ConfidenceInfo.Annotation>;

      /**
       * Provides an indication of how much confidence Cloudflare has in the data.
       */
      level: number;
    }

    export namespace ConfidenceInfo {
      /**
       * Annotation associated with the result (e.g. outage or other type of event).
       */
      export interface Annotation {
        /**
         * Data source for annotations.
         */
        dataSource:
          | 'ALL'
          | 'AI_BOTS'
          | 'AI_GATEWAY'
          | 'BGP'
          | 'BOTS'
          | 'CONNECTION_ANOMALY'
          | 'CT'
          | 'DNS'
          | 'DNS_MAGNITUDE'
          | 'DNS_AS112'
          | 'DOS'
          | 'EMAIL_ROUTING'
          | 'EMAIL_SECURITY'
          | 'FW'
          | 'FW_PG'
          | 'HTTP'
          | 'HTTP_CONTROL'
          | 'HTTP_CRAWLER_REFERER'
          | 'HTTP_ORIGINS'
          | 'IQI'
          | 'LEAKED_CREDENTIALS'
          | 'NET'
          | 'ROBOTS_TXT'
          | 'SPEED'
          | 'WORKERS_AI';

        description: string;

        endDate: string;

        /**
         * Event type for annotations.
         */
        eventType: 'EVENT' | 'GENERAL' | 'OUTAGE' | 'PARTIAL_PROJECTION' | 'PIPELINE' | 'TRAFFIC_ANOMALY';

        /**
         * Whether event is a single point in time or a time range.
         */
        isInstantaneous: boolean;

        linkedUrl: string;

        startDate: string;

        tags?: Array<string>;
      }
    }

    export interface DateRange {
      /**
       * Adjusted end of date range.
       */
      endTime: string;

      /**
       * Adjusted start of date range.
       */
      startTime: string;
    }

    export interface Unit {
      name: string;

      value: string;
    }
  }

  export interface Top0 {
    originCountryAlpha2: string;

    originCountryName: string;

    rank: number;

    value: string;
  }
}

export interface LocationTargetResponse {
  /**
   * Metadata for the results.
   */
  meta: LocationTargetResponse.Meta;

  top_0: Array<LocationTargetResponse.Top0>;
}

export namespace LocationTargetResponse {
  /**
   * Metadata for the results.
   */
  export interface Meta {
    confidenceInfo: Meta.ConfidenceInfo | null;

    dateRange: Array<Meta.DateRange>;

    /**
     * Timestamp of the last dataset update.
     */
    lastUpdated: string;

    /**
     * Normalization method applied to the results. Refer to
     * [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization/).
     */
    normalization:
      | 'PERCENTAGE'
      | 'MIN0_MAX'
      | 'MIN_MAX'
      | 'RAW_VALUES'
      | 'PERCENTAGE_CHANGE'
      | 'ROLLING_AVERAGE'
      | 'OVERLAPPED_PERCENTAGE'
      | 'RATIO';

    /**
     * Measurement units for the results.
     */
    units: Array<Meta.Unit>;
  }

  export namespace Meta {
    export interface ConfidenceInfo {
      annotations: Array<ConfidenceInfo.Annotation>;

      /**
       * Provides an indication of how much confidence Cloudflare has in the data.
       */
      level: number;
    }

    export namespace ConfidenceInfo {
      /**
       * Annotation associated with the result (e.g. outage or other type of event).
       */
      export interface Annotation {
        /**
         * Data source for annotations.
         */
        dataSource:
          | 'ALL'
          | 'AI_BOTS'
          | 'AI_GATEWAY'
          | 'BGP'
          | 'BOTS'
          | 'CONNECTION_ANOMALY'
          | 'CT'
          | 'DNS'
          | 'DNS_MAGNITUDE'
          | 'DNS_AS112'
          | 'DOS'
          | 'EMAIL_ROUTING'
          | 'EMAIL_SECURITY'
          | 'FW'
          | 'FW_PG'
          | 'HTTP'
          | 'HTTP_CONTROL'
          | 'HTTP_CRAWLER_REFERER'
          | 'HTTP_ORIGINS'
          | 'IQI'
          | 'LEAKED_CREDENTIALS'
          | 'NET'
          | 'ROBOTS_TXT'
          | 'SPEED'
          | 'WORKERS_AI';

        description: string;

        endDate: string;

        /**
         * Event type for annotations.
         */
        eventType: 'EVENT' | 'GENERAL' | 'OUTAGE' | 'PARTIAL_PROJECTION' | 'PIPELINE' | 'TRAFFIC_ANOMALY';

        /**
         * Whether event is a single point in time or a time range.
         */
        isInstantaneous: boolean;

        linkedUrl: string;

        startDate: string;

        tags?: Array<string>;
      }
    }

    export interface DateRange {
      /**
       * Adjusted end of date range.
       */
      endTime: string;

      /**
       * Adjusted start of date range.
       */
      startTime: string;
    }

    export interface Unit {
      name: string;

      value: string;
    }
  }

  export interface Top0 {
    rank: number;

    targetCountryAlpha2: string;

    targetCountryName: string;

    value: string;
  }
}

export interface LocationOriginParams {
  /**
   * Filters results by Autonomous System. Specify one or more Autonomous System
   * Numbers (ASNs) as a comma-separated list. Prefix with `-` to exclude ASNs from
   * results. For example, `-174, 3356` excludes results from AS174, but includes
   * results from AS3356.
   */
  asn?: Array<string>;

  /**
   * Filters results by continent. Specify a comma-separated list of alpha-2 codes.
   * Prefix with `-` to exclude continents from results. For example, `-EU,NA`
   * excludes results from EU, but includes results from NA.
   */
  continent?: Array<string>;

  /**
   * End of the date range (inclusive). Alternative to `dateRange`; provide together
   * with `dateStart`. When requesting comparison series, every series must resolve
   * to the same duration as the main series. Each `dateStart`/`dateEnd` is floored
   * to the nearest 15 minutes before evaluation, so windows whose durations match
   * only before alignment may be rejected.
   */
  dateEnd?: Array<string>;

  /**
   * Filters results by relative date range ending at the current time, with each
   * value producing a separate series. Use `<n>d` for days (up to `364d`) or `<n>w`
   * for weeks (up to `52w`). Append `control` to request the equivalent previous
   * period for comparison: the comparison window is shifted back by the current
   * window's length rounded up to a whole number of weeks, so it keeps the same
   * weekday alignment and does not overlap the current window (e.g. `7dcontrol`
   * covers days -14 to -7, `10dcontrol` covers days -24 to -14). For example, pass
   * `7d` and `7dcontrol` to compare this week with the previous week. All series
   * must resolve to the same duration as the main series; relative ranges (including
   * `control`) satisfy this automatically. Use this parameter or set specific start
   * and end dates (`dateStart` and `dateEnd` parameters).
   */
  dateRange?: Array<string>;

  /**
   * Start of the date range. Alternative to `dateRange`; provide together with
   * `dateEnd`. When requesting comparison series, every series must resolve to the
   * same duration as the main series. Each `dateStart`/`dateEnd` is floored to the
   * nearest 15 minutes before evaluation, so windows whose durations match only
   * before alignment may be rejected.
   */
  dateStart?: Array<string>;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filters results by HTTP method.
   */
  httpMethod?: Array<
    | 'GET'
    | 'POST'
    | 'DELETE'
    | 'PUT'
    | 'HEAD'
    | 'PURGE'
    | 'OPTIONS'
    | 'PROPFIND'
    | 'MKCOL'
    | 'PATCH'
    | 'ACL'
    | 'BCOPY'
    | 'BDELETE'
    | 'BMOVE'
    | 'BPROPFIND'
    | 'BPROPPATCH'
    | 'CHECKIN'
    | 'CHECKOUT'
    | 'CONNECT'
    | 'COPY'
    | 'LABEL'
    | 'LOCK'
    | 'MERGE'
    | 'MKACTIVITY'
    | 'MKWORKSPACE'
    | 'MOVE'
    | 'NOTIFY'
    | 'ORDERPATCH'
    | 'POLL'
    | 'PROPPATCH'
    | 'REPORT'
    | 'SEARCH'
    | 'SUBSCRIBE'
    | 'TRACE'
    | 'UNCHECKOUT'
    | 'UNLOCK'
    | 'UNSUBSCRIBE'
    | 'UPDATE'
    | 'VERSIONCONTROL'
    | 'BASELINECONTROL'
    | 'XMSENUMATTS'
    | 'RPC_OUT_DATA'
    | 'RPC_IN_DATA'
    | 'JSON'
    | 'COOK'
    | 'TRACK'
  >;

  /**
   * Filters results by HTTP version.
   */
  httpVersion?: Array<'HTTPv1' | 'HTTPv2' | 'HTTPv3'>;

  /**
   * Filters results by IP version (Ipv4 vs. IPv6).
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

  /**
   * Limits the number of objects returned in the response.
   */
  limit?: number;

  /**
   * Filters the results by layer 7 mitigation product.
   */
  mitigationProduct?: Array<
    | 'DDOS'
    | 'WAF'
    | 'BOT_MANAGEMENT'
    | 'ACCESS_RULES'
    | 'IP_REPUTATION'
    | 'API_SHIELD'
    | 'DATA_LOSS_PREVENTION'
  >;

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;
}

export interface LocationTargetParams {
  /**
   * Filters results by continent. Specify a comma-separated list of alpha-2 codes.
   * Prefix with `-` to exclude continents from results. For example, `-EU,NA`
   * excludes results from EU, but includes results from NA.
   */
  continent?: Array<string>;

  /**
   * End of the date range (inclusive). Alternative to `dateRange`; provide together
   * with `dateStart`. When requesting comparison series, every series must resolve
   * to the same duration as the main series. Each `dateStart`/`dateEnd` is floored
   * to the nearest 15 minutes before evaluation, so windows whose durations match
   * only before alignment may be rejected.
   */
  dateEnd?: Array<string>;

  /**
   * Filters results by relative date range ending at the current time, with each
   * value producing a separate series. Use `<n>d` for days (up to `364d`) or `<n>w`
   * for weeks (up to `52w`). Append `control` to request the equivalent previous
   * period for comparison: the comparison window is shifted back by the current
   * window's length rounded up to a whole number of weeks, so it keeps the same
   * weekday alignment and does not overlap the current window (e.g. `7dcontrol`
   * covers days -14 to -7, `10dcontrol` covers days -24 to -14). For example, pass
   * `7d` and `7dcontrol` to compare this week with the previous week. All series
   * must resolve to the same duration as the main series; relative ranges (including
   * `control`) satisfy this automatically. Use this parameter or set specific start
   * and end dates (`dateStart` and `dateEnd` parameters).
   */
  dateRange?: Array<string>;

  /**
   * Start of the date range. Alternative to `dateRange`; provide together with
   * `dateEnd`. When requesting comparison series, every series must resolve to the
   * same duration as the main series. Each `dateStart`/`dateEnd` is floored to the
   * nearest 15 minutes before evaluation, so windows whose durations match only
   * before alignment may be rejected.
   */
  dateStart?: Array<string>;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Limits the number of objects returned in the response.
   */
  limit?: number;

  /**
   * Filters the results by layer 7 mitigation product.
   */
  mitigationProduct?: Array<
    | 'DDOS'
    | 'WAF'
    | 'BOT_MANAGEMENT'
    | 'ACCESS_RULES'
    | 'IP_REPUTATION'
    | 'API_SHIELD'
    | 'DATA_LOSS_PREVENTION'
  >;

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;
}

export declare namespace Locations {
  export {
    type LocationOriginResponse as LocationOriginResponse,
    type LocationTargetResponse as LocationTargetResponse,
    type LocationOriginParams as LocationOriginParams,
    type LocationTargetParams as LocationTargetParams,
  };
}
