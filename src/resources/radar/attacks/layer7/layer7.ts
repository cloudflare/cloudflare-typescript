// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as SummaryAPI from './summary';
import {
  BaseSummary,
  Summary,
  SummaryHTTPMethodParams,
  SummaryHTTPMethodResponse,
  SummaryHTTPVersionParams,
  SummaryHTTPVersionResponse,
  SummaryIPVersionParams,
  SummaryIPVersionResponse,
  SummaryIndustryParams,
  SummaryIndustryResponse,
  SummaryManagedRulesParams,
  SummaryManagedRulesResponse,
  SummaryMitigationProductParams,
  SummaryMitigationProductResponse,
  SummaryVerticalParams,
  SummaryVerticalResponse,
} from './summary';
import * as TimeseriesGroupsAPI from './timeseries-groups';
import {
  BaseTimeseriesGroups,
  TimeseriesGroupHTTPMethodParams,
  TimeseriesGroupHTTPMethodResponse,
  TimeseriesGroupHTTPVersionParams,
  TimeseriesGroupHTTPVersionResponse,
  TimeseriesGroupIPVersionParams,
  TimeseriesGroupIPVersionResponse,
  TimeseriesGroupIndustryParams,
  TimeseriesGroupIndustryResponse,
  TimeseriesGroupManagedRulesParams,
  TimeseriesGroupManagedRulesResponse,
  TimeseriesGroupMitigationProductParams,
  TimeseriesGroupMitigationProductResponse,
  TimeseriesGroupVerticalParams,
  TimeseriesGroupVerticalResponse,
  TimeseriesGroups,
} from './timeseries-groups';
import * as TopAPI from './top/top';
import {
  BaseTop,
  Top,
  TopAttacksParams,
  TopAttacksResponse,
  TopIndustryParams,
  TopIndustryResponse,
  TopVerticalParams,
  TopVerticalResponse,
} from './top/top';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseLayer7 extends APIResource {
  static override readonly _key: readonly ['radar', 'attacks', 'layer7'] = Object.freeze([
    'radar',
    'attacks',
    'layer7',
  ] as const);

  /**
   * Retrieves the distribution of layer 7 attacks by the specified dimension.
   *
   * @example
   * ```ts
   * const response =
   *   await client.radar.attacks.layer7.summaryV2(
   *     'HTTP_METHOD',
   *   );
   * ```
   */
  summaryV2(
    dimension:
      | 'HTTP_METHOD'
      | 'HTTP_VERSION'
      | 'IP_VERSION'
      | 'MANAGED_RULES'
      | 'MITIGATION_PRODUCT'
      | 'VERTICAL'
      | 'INDUSTRY',
    query: Layer7SummaryV2Params | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Layer7SummaryV2Response> {
    return (
      this._client.get(path`/radar/attacks/layer7/summary/${dimension}`, {
        query,
        ...options,
      }) as APIPromise<{ result: Layer7SummaryV2Response }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves layer 7 attacks over time.
   *
   * @example
   * ```ts
   * const response =
   *   await client.radar.attacks.layer7.timeseries();
   * ```
   */
  timeseries(
    query: Layer7TimeseriesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Layer7TimeseriesResponse> {
    return (
      this._client.get('/radar/attacks/layer7/timeseries', { query, ...options }) as APIPromise<{
        result: Layer7TimeseriesResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the distribution of layer 7 attacks grouped by dimension over time.
   *
   * @example
   * ```ts
   * const response =
   *   await client.radar.attacks.layer7.timeseriesGroupsV2(
   *     'HTTP_METHOD',
   *   );
   * ```
   */
  timeseriesGroupsV2(
    dimension:
      | 'HTTP_METHOD'
      | 'HTTP_VERSION'
      | 'IP_VERSION'
      | 'MANAGED_RULES'
      | 'MITIGATION_PRODUCT'
      | 'VERTICAL'
      | 'INDUSTRY',
    query: Layer7TimeseriesGroupsV2Params | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<Layer7TimeseriesGroupsV2Response> {
    return (
      this._client.get(path`/radar/attacks/layer7/timeseries_groups/${dimension}`, {
        query,
        ...options,
      }) as APIPromise<{ result: Layer7TimeseriesGroupsV2Response }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Layer7 extends BaseLayer7 {
  summary: SummaryAPI.Summary = new SummaryAPI.Summary(this._client);
  timeseriesGroups: TimeseriesGroupsAPI.TimeseriesGroups = new TimeseriesGroupsAPI.TimeseriesGroups(
    this._client,
  );
  top: TopAPI.Top = new TopAPI.Top(this._client);
}

export interface Layer7SummaryV2Response {
  /**
   * Metadata for the results.
   */
  meta: Layer7SummaryV2Response.Meta;

  summary_0: { [key: string]: string };
}

export namespace Layer7SummaryV2Response {
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
}

export interface Layer7TimeseriesResponse {
  /**
   * Metadata for the results.
   */
  meta: Layer7TimeseriesResponse.Meta;

  serie_0: Layer7TimeseriesResponse.Serie0;
}

export namespace Layer7TimeseriesResponse {
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

  export interface Serie0 {
    timestamps: Array<string>;

    values: Array<string>;
  }
}

export interface Layer7TimeseriesGroupsV2Response {
  /**
   * Metadata for the results.
   */
  meta: Layer7TimeseriesGroupsV2Response.Meta;

  serie_0: Layer7TimeseriesGroupsV2Response.Serie0;
}

export namespace Layer7TimeseriesGroupsV2Response {
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

  export interface Serie0 {
    timestamps: Array<string>;

    [k: string]: Array<string> | Array<string> | undefined;
  }
}

export interface Layer7SummaryV2Params {
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
   * Limits the number of objects per group to the top items within the specified
   * time range. When item count exceeds the limit, extra items appear grouped under
   * an "other" category. Only supported on high-cardinality dimensions; otherwise
   * the request is rejected. Minimum value is 2.
   */
  limitPerGroup?: number;

  /**
   * Filters results by location. Specify a comma-separated list of alpha-2 codes.
   * Prefix with `-` to exclude locations from results. For example, `-US,PT`
   * excludes results from the US, but includes results from PT.
   */
  location?: Array<string>;

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

export interface Layer7TimeseriesParams {
  /**
   * Aggregation interval of the results (e.g., in 15 minutes or 1 hour intervals).
   * Refer to
   * [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).
   * When omitted, the interval is auto-selected from the requested date range; finer
   * intervals are only available for shorter ranges. If the requested interval is
   * too granular for the date range, the request is rejected.
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
   * Filters results by location. Specify a comma-separated list of alpha-2 codes.
   * Prefix with `-` to exclude locations from results. For example, `-US,PT`
   * excludes results from the US, but includes results from PT.
   */
  location?: Array<string>;

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

  /**
   * Normalization method applied to the results. Refer to
   * [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization/).
   * `PERCENTAGE_CHANGE` requires exactly one comparison series (e.g. a `control`
   * date range).
   */
  normalization?: 'PERCENTAGE_CHANGE' | 'MIN0_MAX';
}

export interface Layer7TimeseriesGroupsV2Params {
  /**
   * Aggregation interval of the results (e.g., in 15 minutes or 1 hour intervals).
   * Refer to
   * [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).
   * When omitted, the interval is auto-selected from the requested date range; finer
   * intervals are only available for shorter ranges. If the requested interval is
   * too granular for the date range, the request is rejected.
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
   * Limits the number of objects per group to the top items within the specified
   * time range. When item count exceeds the limit, extra items appear grouped under
   * an "other" category. Only supported on high-cardinality dimensions; otherwise
   * the request is rejected. Minimum value is 2.
   */
  limitPerGroup?: number;

  /**
   * Filters results by location. Specify a comma-separated list of alpha-2 codes.
   * Prefix with `-` to exclude locations from results. For example, `-US,PT`
   * excludes results from the US, but includes results from PT.
   */
  location?: Array<string>;

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

  /**
   * Normalization method applied to the results. Refer to
   * [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization/).
   */
  normalization?: 'PERCENTAGE' | 'MIN0_MAX';
}

Layer7.Summary = Summary;
Layer7.BaseSummary = BaseSummary;
Layer7.TimeseriesGroups = TimeseriesGroups;
Layer7.BaseTimeseriesGroups = BaseTimeseriesGroups;
Layer7.Top = Top;
Layer7.BaseTop = BaseTop;

export declare namespace Layer7 {
  export {
    type Layer7SummaryV2Response as Layer7SummaryV2Response,
    type Layer7TimeseriesResponse as Layer7TimeseriesResponse,
    type Layer7TimeseriesGroupsV2Response as Layer7TimeseriesGroupsV2Response,
    type Layer7SummaryV2Params as Layer7SummaryV2Params,
    type Layer7TimeseriesParams as Layer7TimeseriesParams,
    type Layer7TimeseriesGroupsV2Params as Layer7TimeseriesGroupsV2Params,
  };

  export {
    Summary as Summary,
    BaseSummary as BaseSummary,
    type SummaryHTTPMethodResponse as SummaryHTTPMethodResponse,
    type SummaryHTTPVersionResponse as SummaryHTTPVersionResponse,
    type SummaryIndustryResponse as SummaryIndustryResponse,
    type SummaryIPVersionResponse as SummaryIPVersionResponse,
    type SummaryManagedRulesResponse as SummaryManagedRulesResponse,
    type SummaryMitigationProductResponse as SummaryMitigationProductResponse,
    type SummaryVerticalResponse as SummaryVerticalResponse,
    type SummaryHTTPMethodParams as SummaryHTTPMethodParams,
    type SummaryHTTPVersionParams as SummaryHTTPVersionParams,
    type SummaryIndustryParams as SummaryIndustryParams,
    type SummaryIPVersionParams as SummaryIPVersionParams,
    type SummaryManagedRulesParams as SummaryManagedRulesParams,
    type SummaryMitigationProductParams as SummaryMitigationProductParams,
    type SummaryVerticalParams as SummaryVerticalParams,
  };

  export {
    TimeseriesGroups as TimeseriesGroups,
    BaseTimeseriesGroups as BaseTimeseriesGroups,
    type TimeseriesGroupHTTPMethodResponse as TimeseriesGroupHTTPMethodResponse,
    type TimeseriesGroupHTTPVersionResponse as TimeseriesGroupHTTPVersionResponse,
    type TimeseriesGroupIndustryResponse as TimeseriesGroupIndustryResponse,
    type TimeseriesGroupIPVersionResponse as TimeseriesGroupIPVersionResponse,
    type TimeseriesGroupManagedRulesResponse as TimeseriesGroupManagedRulesResponse,
    type TimeseriesGroupMitigationProductResponse as TimeseriesGroupMitigationProductResponse,
    type TimeseriesGroupVerticalResponse as TimeseriesGroupVerticalResponse,
    type TimeseriesGroupHTTPMethodParams as TimeseriesGroupHTTPMethodParams,
    type TimeseriesGroupHTTPVersionParams as TimeseriesGroupHTTPVersionParams,
    type TimeseriesGroupIndustryParams as TimeseriesGroupIndustryParams,
    type TimeseriesGroupIPVersionParams as TimeseriesGroupIPVersionParams,
    type TimeseriesGroupManagedRulesParams as TimeseriesGroupManagedRulesParams,
    type TimeseriesGroupMitigationProductParams as TimeseriesGroupMitigationProductParams,
    type TimeseriesGroupVerticalParams as TimeseriesGroupVerticalParams,
  };

  export {
    Top as Top,
    BaseTop as BaseTop,
    type TopAttacksResponse as TopAttacksResponse,
    type TopIndustryResponse as TopIndustryResponse,
    type TopVerticalResponse as TopVerticalResponse,
    type TopAttacksParams as TopAttacksParams,
    type TopIndustryParams as TopIndustryParams,
    type TopVerticalParams as TopVerticalParams,
  };
}
