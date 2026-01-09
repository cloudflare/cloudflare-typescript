// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import * as Core from '../../../../core';
import * as SummaryAPI from './summary';
import {
  Summary,
  SummaryBitrateParams,
  SummaryBitrateResponse,
  SummaryDurationParams,
  SummaryDurationResponse,
  SummaryIPVersionParams,
  SummaryIPVersionResponse,
  SummaryIndustryParams,
  SummaryIndustryResponse,
  SummaryProtocolParams,
  SummaryProtocolResponse,
  SummaryVectorParams,
  SummaryVectorResponse,
  SummaryVerticalParams,
  SummaryVerticalResponse,
} from './summary';
import * as TimeseriesGroupsAPI from './timeseries-groups';
import {
  TimeseriesGroupBitrateParams,
  TimeseriesGroupBitrateResponse,
  TimeseriesGroupDurationParams,
  TimeseriesGroupDurationResponse,
  TimeseriesGroupIPVersionParams,
  TimeseriesGroupIPVersionResponse,
  TimeseriesGroupIndustryParams,
  TimeseriesGroupIndustryResponse,
  TimeseriesGroupProtocolParams,
  TimeseriesGroupProtocolResponse,
  TimeseriesGroupVectorParams,
  TimeseriesGroupVectorResponse,
  TimeseriesGroupVerticalParams,
  TimeseriesGroupVerticalResponse,
  TimeseriesGroups,
} from './timeseries-groups';
import * as TopAPI from './top/top';
import {
  Top,
  TopAttacksParams,
  TopAttacksResponse,
  TopIndustryParams,
  TopIndustryResponse,
  TopVerticalParams,
  TopVerticalResponse,
} from './top/top';

export class Layer3 extends APIResource {
  summary: SummaryAPI.Summary = new SummaryAPI.Summary(this._client);
  timeseriesGroups: TimeseriesGroupsAPI.TimeseriesGroups = new TimeseriesGroupsAPI.TimeseriesGroups(
    this._client,
  );
  top: TopAPI.Top = new TopAPI.Top(this._client);

  /**
   * Retrieves the distribution of layer 3 attacks by the specified dimension.
   *
   * @example
   * ```ts
   * const response =
   *   await client.radar.attacks.layer3.summaryV2('PROTOCOL');
   * ```
   */
  summaryV2(
    dimension: 'PROTOCOL' | 'IP_VERSION' | 'VECTOR' | 'DURATION' | 'BITRATE' | 'VERTICAL' | 'INDUSTRY',
    query?: Layer3SummaryV2Params,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Layer3SummaryV2Response>;
  summaryV2(
    dimension: 'PROTOCOL' | 'IP_VERSION' | 'VECTOR' | 'DURATION' | 'BITRATE' | 'VERTICAL' | 'INDUSTRY',
    options?: Core.RequestOptions,
  ): Core.APIPromise<Layer3SummaryV2Response>;
  summaryV2(
    dimension: 'PROTOCOL' | 'IP_VERSION' | 'VECTOR' | 'DURATION' | 'BITRATE' | 'VERTICAL' | 'INDUSTRY',
    query: Layer3SummaryV2Params | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Layer3SummaryV2Response> {
    if (isRequestOptions(query)) {
      return this.summaryV2(dimension, {}, query);
    }
    return (
      this._client.get(`/radar/attacks/layer3/summary/${dimension}`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: Layer3SummaryV2Response }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves layer 3 attacks over time.
   *
   * @example
   * ```ts
   * const response =
   *   await client.radar.attacks.layer3.timeseries();
   * ```
   */
  timeseries(
    query?: Layer3TimeseriesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Layer3TimeseriesResponse>;
  timeseries(options?: Core.RequestOptions): Core.APIPromise<Layer3TimeseriesResponse>;
  timeseries(
    query: Layer3TimeseriesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Layer3TimeseriesResponse> {
    if (isRequestOptions(query)) {
      return this.timeseries({}, query);
    }
    return (
      this._client.get('/radar/attacks/layer3/timeseries', { query, ...options }) as Core.APIPromise<{
        result: Layer3TimeseriesResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the distribution of layer 3 attacks grouped by dimension over time.
   *
   * @example
   * ```ts
   * const response =
   *   await client.radar.attacks.layer3.timeseriesGroupsV2(
   *     'PROTOCOL',
   *   );
   * ```
   */
  timeseriesGroupsV2(
    dimension: 'PROTOCOL' | 'IP_VERSION' | 'VECTOR' | 'DURATION' | 'BITRATE' | 'VERTICAL' | 'INDUSTRY',
    query?: Layer3TimeseriesGroupsV2Params,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Layer3TimeseriesGroupsV2Response>;
  timeseriesGroupsV2(
    dimension: 'PROTOCOL' | 'IP_VERSION' | 'VECTOR' | 'DURATION' | 'BITRATE' | 'VERTICAL' | 'INDUSTRY',
    options?: Core.RequestOptions,
  ): Core.APIPromise<Layer3TimeseriesGroupsV2Response>;
  timeseriesGroupsV2(
    dimension: 'PROTOCOL' | 'IP_VERSION' | 'VECTOR' | 'DURATION' | 'BITRATE' | 'VERTICAL' | 'INDUSTRY',
    query: Layer3TimeseriesGroupsV2Params | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Layer3TimeseriesGroupsV2Response> {
    if (isRequestOptions(query)) {
      return this.timeseriesGroupsV2(dimension, {}, query);
    }
    return (
      this._client.get(`/radar/attacks/layer3/timeseries_groups/${dimension}`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: Layer3TimeseriesGroupsV2Response }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface Layer3SummaryV2Response {
  /**
   * Metadata for the results.
   */
  meta: Layer3SummaryV2Response.Meta;

  summary_0: { [key: string]: string };
}

export namespace Layer3SummaryV2Response {
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

export interface Layer3TimeseriesResponse {
  /**
   * Metadata for the results.
   */
  meta: Layer3TimeseriesResponse.Meta;

  [k: string]:
    | Layer3TimeseriesResponse.unnamed_schema_ref_75bae70cf28e6bcef364b9840db3bdeb
    | Layer3TimeseriesResponse.Meta
    | undefined;
}

export namespace Layer3TimeseriesResponse {
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

export interface Layer3TimeseriesGroupsV2Response {
  /**
   * Metadata for the results.
   */
  meta: Layer3TimeseriesGroupsV2Response.Meta;

  serie_0: Layer3TimeseriesGroupsV2Response.Serie0;
}

export namespace Layer3TimeseriesGroupsV2Response {
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

export interface Layer3SummaryV2Params {
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
   * Specifies whether the `location` filter applies to the source or target
   * location.
   */
  direction?: 'ORIGIN' | 'TARGET';

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

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
   * Filters the results by layer 3/4 protocol.
   */
  protocol?: Array<'UDP' | 'TCP' | 'ICMP' | 'GRE'>;
}

export interface Layer3TimeseriesParams {
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
   * Specifies whether the `location` filter applies to the source or target
   * location.
   */
  direction?: 'ORIGIN' | 'TARGET';

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

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
   * Measurement units, eg. bytes.
   */
  metric?: 'BYTES' | 'BYTES_OLD';

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
   * Filters the results by layer 3/4 protocol.
   */
  protocol?: Array<'UDP' | 'TCP' | 'ICMP' | 'GRE'>;
}

export interface Layer3TimeseriesGroupsV2Params {
  /**
   * Aggregation interval of the results (e.g., in 15 minutes or 1 hour intervals).
   * Refer to
   * [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).
   */
  aggInterval?: '15m' | '1h' | '1d' | '1w';

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
   * Specifies whether the `location` filter applies to the source or target
   * location.
   */
  direction?: 'ORIGIN' | 'TARGET';

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

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
   * Filters the results by layer 3/4 protocol.
   */
  protocol?: Array<'UDP' | 'TCP' | 'ICMP' | 'GRE'>;
}

Layer3.Summary = Summary;
Layer3.TimeseriesGroups = TimeseriesGroups;
Layer3.Top = Top;

export declare namespace Layer3 {
  export {
    type Layer3SummaryV2Response as Layer3SummaryV2Response,
    type Layer3TimeseriesResponse as Layer3TimeseriesResponse,
    type Layer3TimeseriesGroupsV2Response as Layer3TimeseriesGroupsV2Response,
    type Layer3SummaryV2Params as Layer3SummaryV2Params,
    type Layer3TimeseriesParams as Layer3TimeseriesParams,
    type Layer3TimeseriesGroupsV2Params as Layer3TimeseriesGroupsV2Params,
  };

  export {
    Summary as Summary,
    type SummaryBitrateResponse as SummaryBitrateResponse,
    type SummaryDurationResponse as SummaryDurationResponse,
    type SummaryIndustryResponse as SummaryIndustryResponse,
    type SummaryIPVersionResponse as SummaryIPVersionResponse,
    type SummaryProtocolResponse as SummaryProtocolResponse,
    type SummaryVectorResponse as SummaryVectorResponse,
    type SummaryVerticalResponse as SummaryVerticalResponse,
    type SummaryBitrateParams as SummaryBitrateParams,
    type SummaryDurationParams as SummaryDurationParams,
    type SummaryIndustryParams as SummaryIndustryParams,
    type SummaryIPVersionParams as SummaryIPVersionParams,
    type SummaryProtocolParams as SummaryProtocolParams,
    type SummaryVectorParams as SummaryVectorParams,
    type SummaryVerticalParams as SummaryVerticalParams,
  };

  export {
    TimeseriesGroups as TimeseriesGroups,
    type TimeseriesGroupBitrateResponse as TimeseriesGroupBitrateResponse,
    type TimeseriesGroupDurationResponse as TimeseriesGroupDurationResponse,
    type TimeseriesGroupIndustryResponse as TimeseriesGroupIndustryResponse,
    type TimeseriesGroupIPVersionResponse as TimeseriesGroupIPVersionResponse,
    type TimeseriesGroupProtocolResponse as TimeseriesGroupProtocolResponse,
    type TimeseriesGroupVectorResponse as TimeseriesGroupVectorResponse,
    type TimeseriesGroupVerticalResponse as TimeseriesGroupVerticalResponse,
    type TimeseriesGroupBitrateParams as TimeseriesGroupBitrateParams,
    type TimeseriesGroupDurationParams as TimeseriesGroupDurationParams,
    type TimeseriesGroupIndustryParams as TimeseriesGroupIndustryParams,
    type TimeseriesGroupIPVersionParams as TimeseriesGroupIPVersionParams,
    type TimeseriesGroupProtocolParams as TimeseriesGroupProtocolParams,
    type TimeseriesGroupVectorParams as TimeseriesGroupVectorParams,
    type TimeseriesGroupVerticalParams as TimeseriesGroupVerticalParams,
  };

  export {
    Top as Top,
    type TopAttacksResponse as TopAttacksResponse,
    type TopIndustryResponse as TopIndustryResponse,
    type TopVerticalResponse as TopVerticalResponse,
    type TopAttacksParams as TopAttacksParams,
    type TopIndustryParams as TopIndustryParams,
    type TopVerticalParams as TopVerticalParams,
  };
}
