// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as SummaryAPI from './summary';
import {
  Summary,
  SummaryBotClassParams,
  SummaryBotClassResponse,
  SummaryDeviceTypeParams,
  SummaryDeviceTypeResponse,
  SummaryHTTPProtocolParams,
  SummaryHTTPProtocolResponse,
  SummaryHTTPVersionParams,
  SummaryHTTPVersionResponse,
  SummaryIPVersionParams,
  SummaryIPVersionResponse,
  SummaryOSParams,
  SummaryOSResponse,
  SummaryPostQuantumParams,
  SummaryPostQuantumResponse,
  SummaryTLSVersionParams,
  SummaryTLSVersionResponse,
} from './summary';
import * as TimeseriesGroupsAPI from './timeseries-groups';
import {
  TimeseriesGroupBotClassParams,
  TimeseriesGroupBotClassResponse,
  TimeseriesGroupBrowserFamilyParams,
  TimeseriesGroupBrowserFamilyResponse,
  TimeseriesGroupBrowserParams,
  TimeseriesGroupBrowserResponse,
  TimeseriesGroupDeviceTypeParams,
  TimeseriesGroupDeviceTypeResponse,
  TimeseriesGroupHTTPProtocolParams,
  TimeseriesGroupHTTPProtocolResponse,
  TimeseriesGroupHTTPVersionParams,
  TimeseriesGroupHTTPVersionResponse,
  TimeseriesGroupIPVersionParams,
  TimeseriesGroupIPVersionResponse,
  TimeseriesGroupOSParams,
  TimeseriesGroupOSResponse,
  TimeseriesGroupPostQuantumParams,
  TimeseriesGroupPostQuantumResponse,
  TimeseriesGroupTLSVersionParams,
  TimeseriesGroupTLSVersionResponse,
  TimeseriesGroups,
} from './timeseries-groups';
import * as TopAPI from './top';
import {
  Top,
  TopBrowserFamilyParams,
  TopBrowserFamilyResponse,
  TopBrowserParams,
  TopBrowserResponse,
} from './top';
import * as AsesAPI from './ases/ases';
import { AseGetParams, AseGetResponse, Ases } from './ases/ases';
import * as LocationsAPI from './locations/locations';
import { LocationGetParams, LocationGetResponse, Locations } from './locations/locations';

export class HTTP extends APIResource {
  locations: LocationsAPI.Locations = new LocationsAPI.Locations(this._client);
  ases: AsesAPI.Ases = new AsesAPI.Ases(this._client);
  summary: SummaryAPI.Summary = new SummaryAPI.Summary(this._client);
  timeseriesGroups: TimeseriesGroupsAPI.TimeseriesGroups = new TimeseriesGroupsAPI.TimeseriesGroups(
    this._client,
  );
  top: TopAPI.Top = new TopAPI.Top(this._client);

  /**
   * Retrieves the distribution of HTTP requests by the specified dimension.
   *
   * @example
   * ```ts
   * const response = await client.radar.http.summaryV2('ADM1');
   * ```
   */
  summaryV2(
    dimension:
      | 'ADM1'
      | 'BOT_CLASS'
      | 'BROWSER'
      | 'BROWSER_FAMILY'
      | 'DEVICE_TYPE'
      | 'HTTP_PROTOCOL'
      | 'HTTP_VERSION'
      | 'IP_VERSION'
      | 'OS'
      | 'POST_QUANTUM'
      | 'TLS_VERSION',
    query?: HTTPSummaryV2Params,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HTTPSummaryV2Response>;
  summaryV2(
    dimension:
      | 'ADM1'
      | 'BOT_CLASS'
      | 'BROWSER'
      | 'BROWSER_FAMILY'
      | 'DEVICE_TYPE'
      | 'HTTP_PROTOCOL'
      | 'HTTP_VERSION'
      | 'IP_VERSION'
      | 'OS'
      | 'POST_QUANTUM'
      | 'TLS_VERSION',
    options?: Core.RequestOptions,
  ): Core.APIPromise<HTTPSummaryV2Response>;
  summaryV2(
    dimension:
      | 'ADM1'
      | 'BOT_CLASS'
      | 'BROWSER'
      | 'BROWSER_FAMILY'
      | 'DEVICE_TYPE'
      | 'HTTP_PROTOCOL'
      | 'HTTP_VERSION'
      | 'IP_VERSION'
      | 'OS'
      | 'POST_QUANTUM'
      | 'TLS_VERSION',
    query: HTTPSummaryV2Params | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<HTTPSummaryV2Response> {
    if (isRequestOptions(query)) {
      return this.summaryV2(dimension, {}, query);
    }
    return (
      this._client.get(`/radar/http/summary/${dimension}`, { query, ...options }) as Core.APIPromise<{
        result: HTTPSummaryV2Response;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the HTTP requests over time.
   *
   * @example
   * ```ts
   * const response = await client.radar.http.timeseries();
   * ```
   */
  timeseries(
    query?: HTTPTimeseriesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HTTPTimeseriesResponse>;
  timeseries(options?: Core.RequestOptions): Core.APIPromise<HTTPTimeseriesResponse>;
  timeseries(
    query: HTTPTimeseriesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<HTTPTimeseriesResponse> {
    if (isRequestOptions(query)) {
      return this.timeseries({}, query);
    }
    return (
      this._client.get('/radar/http/timeseries', { query, ...options }) as Core.APIPromise<{
        result: HTTPTimeseriesResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the distribution of HTTP requests grouped by dimension.
   *
   * @example
   * ```ts
   * const response = await client.radar.http.timeseriesGroupsV2(
   *   'ADM1',
   * );
   * ```
   */
  timeseriesGroupsV2(
    dimension:
      | 'ADM1'
      | 'BOT_CLASS'
      | 'BROWSER'
      | 'BROWSER_FAMILY'
      | 'DEVICE_TYPE'
      | 'HTTP_PROTOCOL'
      | 'HTTP_VERSION'
      | 'IP_VERSION'
      | 'OS'
      | 'POST_QUANTUM'
      | 'TLS_VERSION',
    query?: HTTPTimeseriesGroupsV2Params,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HTTPTimeseriesGroupsV2Response>;
  timeseriesGroupsV2(
    dimension:
      | 'ADM1'
      | 'BOT_CLASS'
      | 'BROWSER'
      | 'BROWSER_FAMILY'
      | 'DEVICE_TYPE'
      | 'HTTP_PROTOCOL'
      | 'HTTP_VERSION'
      | 'IP_VERSION'
      | 'OS'
      | 'POST_QUANTUM'
      | 'TLS_VERSION',
    options?: Core.RequestOptions,
  ): Core.APIPromise<HTTPTimeseriesGroupsV2Response>;
  timeseriesGroupsV2(
    dimension:
      | 'ADM1'
      | 'BOT_CLASS'
      | 'BROWSER'
      | 'BROWSER_FAMILY'
      | 'DEVICE_TYPE'
      | 'HTTP_PROTOCOL'
      | 'HTTP_VERSION'
      | 'IP_VERSION'
      | 'OS'
      | 'POST_QUANTUM'
      | 'TLS_VERSION',
    query: HTTPTimeseriesGroupsV2Params | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<HTTPTimeseriesGroupsV2Response> {
    if (isRequestOptions(query)) {
      return this.timeseriesGroupsV2(dimension, {}, query);
    }
    return (
      this._client.get(`/radar/http/timeseries_groups/${dimension}`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: HTTPTimeseriesGroupsV2Response }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface HTTPSummaryV2Response {
  /**
   * Metadata for the results.
   */
  meta: HTTPSummaryV2Response.Meta;

  summary_0: { [key: string]: string };
}

export namespace HTTPSummaryV2Response {
  /**
   * Metadata for the results.
   */
  export interface Meta {
    confidenceInfo: Meta.ConfidenceInfo;

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
}

export interface HTTPTimeseriesResponse {
  /**
   * Metadata for the results.
   */
  meta: HTTPTimeseriesResponse.Meta;

  [k: string]:
    | HTTPTimeseriesResponse.unnamed_schema_ref_75bae70cf28e6bcef364b9840db3bdeb
    | HTTPTimeseriesResponse.Meta
    | undefined;
}

export namespace HTTPTimeseriesResponse {
  /**
   * Metadata for the results.
   */
  export interface Meta {
    /**
     * Aggregation interval of the results (e.g., in 15 minutes or 1 hour intervals).
     * Refer to
     * [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).
     */
    aggInterval: 'FIFTEEN_MINUTES' | 'ONE_HOUR' | 'ONE_DAY' | 'ONE_WEEK' | 'ONE_MONTH';

    confidenceInfo: Meta.ConfidenceInfo;

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

  export interface unnamed_schema_ref_75bae70cf28e6bcef364b9840db3bdeb {
    timestamps: Array<string>;

    values: Array<string>;
  }
}

export interface HTTPTimeseriesGroupsV2Response {
  /**
   * Metadata for the results.
   */
  meta: HTTPTimeseriesGroupsV2Response.Meta;

  serie_0: HTTPTimeseriesGroupsV2Response.Serie0;
}

export namespace HTTPTimeseriesGroupsV2Response {
  /**
   * Metadata for the results.
   */
  export interface Meta {
    /**
     * Aggregation interval of the results (e.g., in 15 minutes or 1 hour intervals).
     * Refer to
     * [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).
     */
    aggInterval: 'FIFTEEN_MINUTES' | 'ONE_HOUR' | 'ONE_DAY' | 'ONE_WEEK' | 'ONE_MONTH';

    confidenceInfo: Meta.ConfidenceInfo;

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

  export interface Serie0 {
    timestamps: Array<string>;

    [k: string]: Array<string> | Array<string> | undefined;
  }
}

export interface HTTPSummaryV2Params {
  /**
   * Filters results by Autonomous System. Specify one or more Autonomous System
   * Numbers (ASNs) as a comma-separated list. Prefix with `-` to exclude ASNs from
   * results. For example, `-174, 3356` excludes results from AS174, but includes
   * results from AS3356.
   */
  asn?: Array<string>;

  /**
   * Filters results by bot class. Refer to
   * [Bot classes](https://developers.cloudflare.com/radar/concepts/bot-classes/).
   */
  botClass?: Array<'LIKELY_AUTOMATED' | 'LIKELY_HUMAN'>;

  /**
   * Filters results by continent. Specify a comma-separated list of alpha-2 codes.
   * Prefix with `-` to exclude continents from results. For example, `-EU,NA`
   * excludes results from EU, but includes results from NA.
   */
  continent?: Array<string>;

  /**
   * End of the date range (inclusive).
   */
  dateEnd?: Array<string>;

  /**
   * Filters results by date range. For example, use `7d` and `7dcontrol` to compare
   * this week with the previous week. Use this parameter or set specific start and
   * end dates (`dateStart` and `dateEnd` parameters).
   */
  dateRange?: Array<string>;

  /**
   * Start of the date range.
   */
  dateStart?: Array<string>;

  /**
   * Filters results by device type.
   */
  deviceType?: Array<'DESKTOP' | 'MOBILE' | 'OTHER'>;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filters results by Geolocation. Specify a comma-separated list of GeoNames IDs.
   * Prefix with `-` to exclude geoIds from results. For example, `-2267056,360689`
   * excludes results from the 2267056 (Lisbon), but includes results from 5128638
   * (New York).
   */
  geoId?: Array<string>;

  /**
   * Filters results by HTTP protocol (HTTP vs. HTTPS).
   */
  httpProtocol?: Array<'HTTP' | 'HTTPS'>;

  /**
   * Filters results by HTTP version.
   */
  httpVersion?: Array<'HTTPv1' | 'HTTPv2' | 'HTTPv3'>;

  /**
   * Filters results by IP version (Ipv4 vs. IPv6).
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

  /**
   * Limits the number of objects per group to the top items within the specified
   * time range. When item count exceeds the limit, extra items appear grouped under
   * an "other" category.
   */
  limitPerGroup?: number;

  /**
   * Filters results by location. Specify a comma-separated list of alpha-2 codes.
   * Prefix with `-` to exclude locations from results. For example, `-US,PT`
   * excludes results from the US, but includes results from PT.
   */
  location?: Array<string>;

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;

  /**
   * Filters results by operating system.
   */
  os?: Array<'WINDOWS' | 'MACOSX' | 'IOS' | 'ANDROID' | 'CHROMEOS' | 'LINUX' | 'SMART_TV'>;

  /**
   * Filters results by TLS version.
   */
  tlsVersion?: Array<'TLSv1_0' | 'TLSv1_1' | 'TLSv1_2' | 'TLSv1_3' | 'TLSvQUIC'>;
}

export interface HTTPTimeseriesParams {
  /**
   * Aggregation interval of the results (e.g., in 15 minutes or 1 hour intervals).
   * Refer to
   * [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).
   */
  aggInterval?: '15m' | '1h' | '1d' | '1w';

  /**
   * Filters results by Autonomous System. Specify one or more Autonomous System
   * Numbers (ASNs) as a comma-separated list. Prefix with `-` to exclude ASNs from
   * results. For example, `-174, 3356` excludes results from AS174, but includes
   * results from AS3356.
   */
  asn?: Array<string>;

  /**
   * Filters results by bot class. Refer to
   * [Bot classes](https://developers.cloudflare.com/radar/concepts/bot-classes/).
   */
  botClass?: Array<'LIKELY_AUTOMATED' | 'LIKELY_HUMAN'>;

  /**
   * Filters results by browser family.
   */
  browserFamily?: Array<'CHROME' | 'EDGE' | 'FIREFOX' | 'SAFARI'>;

  /**
   * Filters results by continent. Specify a comma-separated list of alpha-2 codes.
   * Prefix with `-` to exclude continents from results. For example, `-EU,NA`
   * excludes results from EU, but includes results from NA.
   */
  continent?: Array<string>;

  /**
   * End of the date range (inclusive).
   */
  dateEnd?: Array<string>;

  /**
   * Filters results by date range. For example, use `7d` and `7dcontrol` to compare
   * this week with the previous week. Use this parameter or set specific start and
   * end dates (`dateStart` and `dateEnd` parameters).
   */
  dateRange?: Array<string>;

  /**
   * Start of the date range.
   */
  dateStart?: Array<string>;

  /**
   * Filters results by device type.
   */
  deviceType?: Array<'DESKTOP' | 'MOBILE' | 'OTHER'>;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filters results by Geolocation. Specify a comma-separated list of GeoNames IDs.
   * Prefix with `-` to exclude geoIds from results. For example, `-2267056,360689`
   * excludes results from the 2267056 (Lisbon), but includes results from 5128638
   * (New York).
   */
  geoId?: Array<string>;

  /**
   * Filters results by HTTP protocol (HTTP vs. HTTPS).
   */
  httpProtocol?: Array<'HTTP' | 'HTTPS'>;

  /**
   * Filters results by HTTP version.
   */
  httpVersion?: Array<'HTTPv1' | 'HTTPv2' | 'HTTPv3'>;

  /**
   * Filters results by IP version (Ipv4 vs. IPv6).
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

  /**
   * Filters results by location. Specify a comma-separated list of alpha-2 codes.
   * Prefix with `-` to exclude locations from results. For example, `-US,PT`
   * excludes results from the US, but includes results from PT.
   */
  location?: Array<string>;

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;

  /**
   * Normalization method applied to the results. Refer to
   * [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization/).
   */
  normalization?: 'PERCENTAGE_CHANGE' | 'MIN0_MAX';

  /**
   * Filters results by operating system.
   */
  os?: Array<'WINDOWS' | 'MACOSX' | 'IOS' | 'ANDROID' | 'CHROMEOS' | 'LINUX' | 'SMART_TV'>;

  /**
   * Filters results by TLS version.
   */
  tlsVersion?: Array<'TLSv1_0' | 'TLSv1_1' | 'TLSv1_2' | 'TLSv1_3' | 'TLSvQUIC'>;
}

export interface HTTPTimeseriesGroupsV2Params {
  /**
   * Aggregation interval of the results (e.g., in 15 minutes or 1 hour intervals).
   * Refer to
   * [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).
   */
  aggInterval?: '15m' | '1h' | '1d' | '1w';

  /**
   * Filters results by Autonomous System. Specify one or more Autonomous System
   * Numbers (ASNs) as a comma-separated list. Prefix with `-` to exclude ASNs from
   * results. For example, `-174, 3356` excludes results from AS174, but includes
   * results from AS3356.
   */
  asn?: Array<string>;

  /**
   * Filters results by bot class. Refer to
   * [Bot classes](https://developers.cloudflare.com/radar/concepts/bot-classes/).
   */
  botClass?: Array<'LIKELY_AUTOMATED' | 'LIKELY_HUMAN'>;

  /**
   * Filters results by continent. Specify a comma-separated list of alpha-2 codes.
   * Prefix with `-` to exclude continents from results. For example, `-EU,NA`
   * excludes results from EU, but includes results from NA.
   */
  continent?: Array<string>;

  /**
   * End of the date range (inclusive).
   */
  dateEnd?: Array<string>;

  /**
   * Filters results by date range. For example, use `7d` and `7dcontrol` to compare
   * this week with the previous week. Use this parameter or set specific start and
   * end dates (`dateStart` and `dateEnd` parameters).
   */
  dateRange?: Array<string>;

  /**
   * Start of the date range.
   */
  dateStart?: Array<string>;

  /**
   * Filters results by device type.
   */
  deviceType?: Array<'DESKTOP' | 'MOBILE' | 'OTHER'>;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filters results by Geolocation. Specify a comma-separated list of GeoNames IDs.
   * Prefix with `-` to exclude geoIds from results. For example, `-2267056,360689`
   * excludes results from the 2267056 (Lisbon), but includes results from 5128638
   * (New York).
   */
  geoId?: Array<string>;

  /**
   * Filters results by HTTP protocol (HTTP vs. HTTPS).
   */
  httpProtocol?: Array<'HTTP' | 'HTTPS'>;

  /**
   * Filters results by HTTP version.
   */
  httpVersion?: Array<'HTTPv1' | 'HTTPv2' | 'HTTPv3'>;

  /**
   * Filters results by IP version (Ipv4 vs. IPv6).
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

  /**
   * Limits the number of objects per group to the top items within the specified
   * time range. When item count exceeds the limit, extra items appear grouped under
   * an "other" category.
   */
  limitPerGroup?: number;

  /**
   * Filters results by location. Specify a comma-separated list of alpha-2 codes.
   * Prefix with `-` to exclude locations from results. For example, `-US,PT`
   * excludes results from the US, but includes results from PT.
   */
  location?: Array<string>;

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;

  /**
   * Normalization method applied to the results. Refer to
   * [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization/).
   */
  normalization?: 'PERCENTAGE' | 'MIN0_MAX';

  /**
   * Filters results by operating system.
   */
  os?: Array<'WINDOWS' | 'MACOSX' | 'IOS' | 'ANDROID' | 'CHROMEOS' | 'LINUX' | 'SMART_TV'>;

  /**
   * Filters results by TLS version.
   */
  tlsVersion?: Array<'TLSv1_0' | 'TLSv1_1' | 'TLSv1_2' | 'TLSv1_3' | 'TLSvQUIC'>;
}

HTTP.Locations = Locations;
HTTP.Ases = Ases;
HTTP.Summary = Summary;
HTTP.TimeseriesGroups = TimeseriesGroups;
HTTP.Top = Top;

export declare namespace HTTP {
  export {
    type HTTPSummaryV2Response as HTTPSummaryV2Response,
    type HTTPTimeseriesResponse as HTTPTimeseriesResponse,
    type HTTPTimeseriesGroupsV2Response as HTTPTimeseriesGroupsV2Response,
    type HTTPSummaryV2Params as HTTPSummaryV2Params,
    type HTTPTimeseriesParams as HTTPTimeseriesParams,
    type HTTPTimeseriesGroupsV2Params as HTTPTimeseriesGroupsV2Params,
  };

  export {
    Locations as Locations,
    type LocationGetResponse as LocationGetResponse,
    type LocationGetParams as LocationGetParams,
  };

  export { Ases as Ases, type AseGetResponse as AseGetResponse, type AseGetParams as AseGetParams };

  export {
    Summary as Summary,
    type SummaryBotClassResponse as SummaryBotClassResponse,
    type SummaryDeviceTypeResponse as SummaryDeviceTypeResponse,
    type SummaryHTTPProtocolResponse as SummaryHTTPProtocolResponse,
    type SummaryHTTPVersionResponse as SummaryHTTPVersionResponse,
    type SummaryIPVersionResponse as SummaryIPVersionResponse,
    type SummaryOSResponse as SummaryOSResponse,
    type SummaryPostQuantumResponse as SummaryPostQuantumResponse,
    type SummaryTLSVersionResponse as SummaryTLSVersionResponse,
    type SummaryBotClassParams as SummaryBotClassParams,
    type SummaryDeviceTypeParams as SummaryDeviceTypeParams,
    type SummaryHTTPProtocolParams as SummaryHTTPProtocolParams,
    type SummaryHTTPVersionParams as SummaryHTTPVersionParams,
    type SummaryIPVersionParams as SummaryIPVersionParams,
    type SummaryOSParams as SummaryOSParams,
    type SummaryPostQuantumParams as SummaryPostQuantumParams,
    type SummaryTLSVersionParams as SummaryTLSVersionParams,
  };

  export {
    TimeseriesGroups as TimeseriesGroups,
    type TimeseriesGroupBotClassResponse as TimeseriesGroupBotClassResponse,
    type TimeseriesGroupBrowserResponse as TimeseriesGroupBrowserResponse,
    type TimeseriesGroupBrowserFamilyResponse as TimeseriesGroupBrowserFamilyResponse,
    type TimeseriesGroupDeviceTypeResponse as TimeseriesGroupDeviceTypeResponse,
    type TimeseriesGroupHTTPProtocolResponse as TimeseriesGroupHTTPProtocolResponse,
    type TimeseriesGroupHTTPVersionResponse as TimeseriesGroupHTTPVersionResponse,
    type TimeseriesGroupIPVersionResponse as TimeseriesGroupIPVersionResponse,
    type TimeseriesGroupOSResponse as TimeseriesGroupOSResponse,
    type TimeseriesGroupPostQuantumResponse as TimeseriesGroupPostQuantumResponse,
    type TimeseriesGroupTLSVersionResponse as TimeseriesGroupTLSVersionResponse,
    type TimeseriesGroupBotClassParams as TimeseriesGroupBotClassParams,
    type TimeseriesGroupBrowserParams as TimeseriesGroupBrowserParams,
    type TimeseriesGroupBrowserFamilyParams as TimeseriesGroupBrowserFamilyParams,
    type TimeseriesGroupDeviceTypeParams as TimeseriesGroupDeviceTypeParams,
    type TimeseriesGroupHTTPProtocolParams as TimeseriesGroupHTTPProtocolParams,
    type TimeseriesGroupHTTPVersionParams as TimeseriesGroupHTTPVersionParams,
    type TimeseriesGroupIPVersionParams as TimeseriesGroupIPVersionParams,
    type TimeseriesGroupOSParams as TimeseriesGroupOSParams,
    type TimeseriesGroupPostQuantumParams as TimeseriesGroupPostQuantumParams,
    type TimeseriesGroupTLSVersionParams as TimeseriesGroupTLSVersionParams,
  };

  export {
    Top as Top,
    type TopBrowserResponse as TopBrowserResponse,
    type TopBrowserFamilyResponse as TopBrowserFamilyResponse,
    type TopBrowserParams as TopBrowserParams,
    type TopBrowserFamilyParams as TopBrowserFamilyParams,
  };
}
