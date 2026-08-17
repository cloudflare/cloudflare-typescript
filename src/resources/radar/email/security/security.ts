// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../core/resource';
import * as SummaryAPI from './summary';
import {
  BaseSummary,
  Summary,
  SummaryARCParams,
  SummaryARCResponse,
  SummaryDKIMParams,
  SummaryDKIMResponse,
  SummaryDMARCParams,
  SummaryDMARCResponse,
  SummaryMaliciousParams,
  SummaryMaliciousResponse,
  SummarySPFParams,
  SummarySPFResponse,
  SummarySpamParams,
  SummarySpamResponse,
  SummarySpoofParams,
  SummarySpoofResponse,
  SummaryTLSVersionParams,
  SummaryTLSVersionResponse,
  SummaryThreatCategoryParams,
  SummaryThreatCategoryResponse,
} from './summary';
import * as TimeseriesGroupsAPI from './timeseries-groups';
import {
  BaseTimeseriesGroups,
  TimeseriesGroupARCParams,
  TimeseriesGroupARCResponse,
  TimeseriesGroupDKIMParams,
  TimeseriesGroupDKIMResponse,
  TimeseriesGroupDMARCParams,
  TimeseriesGroupDMARCResponse,
  TimeseriesGroupMaliciousParams,
  TimeseriesGroupMaliciousResponse,
  TimeseriesGroupSPFParams,
  TimeseriesGroupSPFResponse,
  TimeseriesGroupSpamParams,
  TimeseriesGroupSpamResponse,
  TimeseriesGroupSpoofParams,
  TimeseriesGroupSpoofResponse,
  TimeseriesGroupTLSVersionParams,
  TimeseriesGroupTLSVersionResponse,
  TimeseriesGroupThreatCategoryParams,
  TimeseriesGroupThreatCategoryResponse,
  TimeseriesGroups,
} from './timeseries-groups';
import * as TopAPI from './top/top';
import { BaseTop, Top } from './top/top';
import { APIPromise } from '../../../../core/api-promise';
import { RequestOptions } from '../../../../internal/request-options';
import { path } from '../../../../internal/utils/path';

export class BaseSecurity extends APIResource {
  static override readonly _key: readonly ['radar', 'email', 'security'] = Object.freeze([
    'radar',
    'email',
    'security',
  ] as const);

  /**
   * Retrieves the distribution of email security metrics by the specified dimension.
   *
   * @example
   * ```ts
   * const response =
   *   await client.radar.email.security.summaryV2('SPAM');
   * ```
   */
  summaryV2(
    dimension:
      | 'SPAM'
      | 'MALICIOUS'
      | 'SPOOF'
      | 'THREAT_CATEGORY'
      | 'ARC'
      | 'DKIM'
      | 'DMARC'
      | 'SPF'
      | 'TLS_VERSION',
    query: SecuritySummaryV2Params | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SecuritySummaryV2Response> {
    return (
      this._client.get(path`/radar/email/security/summary/${dimension}`, {
        query,
        ...options,
      }) as APIPromise<{ result: SecuritySummaryV2Response }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the distribution of email security metrics grouped by dimension over
   * time.
   *
   * @example
   * ```ts
   * const response =
   *   await client.radar.email.security.timeseriesGroupsV2(
   *     'SPAM',
   *   );
   * ```
   */
  timeseriesGroupsV2(
    dimension:
      | 'SPAM'
      | 'MALICIOUS'
      | 'SPOOF'
      | 'THREAT_CATEGORY'
      | 'ARC'
      | 'DKIM'
      | 'DMARC'
      | 'SPF'
      | 'TLS_VERSION',
    query: SecurityTimeseriesGroupsV2Params | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<SecurityTimeseriesGroupsV2Response> {
    return (
      this._client.get(path`/radar/email/security/timeseries_groups/${dimension}`, {
        query,
        ...options,
      }) as APIPromise<{ result: SecurityTimeseriesGroupsV2Response }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class Security extends BaseSecurity {
  top: TopAPI.Top = new TopAPI.Top(this._client);
  summary: SummaryAPI.Summary = new SummaryAPI.Summary(this._client);
  timeseriesGroups: TimeseriesGroupsAPI.TimeseriesGroups = new TimeseriesGroupsAPI.TimeseriesGroups(
    this._client,
  );
}

export interface SecuritySummaryV2Response {
  /**
   * Metadata for the results.
   */
  meta: SecuritySummaryV2Response.Meta;

  summary_0: { [key: string]: string };
}

export namespace SecuritySummaryV2Response {
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

export interface SecurityTimeseriesGroupsV2Response {
  /**
   * Metadata for the results.
   */
  meta: SecurityTimeseriesGroupsV2Response.Meta;

  serie_0: SecurityTimeseriesGroupsV2Response.Serie0;
}

export namespace SecurityTimeseriesGroupsV2Response {
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

export interface SecuritySummaryV2Params {
  /**
   * Filters results by ARC (Authenticated Received Chain) validation.
   */
  arc?: Array<'PASS' | 'NONE' | 'FAIL'>;

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
   * Filters results by DKIM (DomainKeys Identified Mail) validation status.
   */
  dkim?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Filters results by DMARC (Domain-based Message Authentication, Reporting and
   * Conformance) validation status.
   */
  dmarc?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Limits the number of objects per group to the top items within the specified
   * time range. When item count exceeds the limit, extra items appear grouped under
   * an "other" category. Only supported on high-cardinality dimensions; otherwise
   * the request is rejected. Minimum value is 2.
   */
  limitPerGroup?: number;

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;

  /**
   * Filters results by SPF (Sender Policy Framework) validation status.
   */
  spf?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Filters results by TLS version.
   */
  tlsVersion?: Array<'TLSv1_0' | 'TLSv1_1' | 'TLSv1_2' | 'TLSv1_3'>;
}

export interface SecurityTimeseriesGroupsV2Params {
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
   * Filters results by ARC (Authenticated Received Chain) validation.
   */
  arc?: Array<'PASS' | 'NONE' | 'FAIL'>;

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
   * Filters results by DKIM (DomainKeys Identified Mail) validation status.
   */
  dkim?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Filters results by DMARC (Domain-based Message Authentication, Reporting and
   * Conformance) validation status.
   */
  dmarc?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Limits the number of objects per group to the top items within the specified
   * time range. When item count exceeds the limit, extra items appear grouped under
   * an "other" category. Only supported on high-cardinality dimensions; otherwise
   * the request is rejected. Minimum value is 2.
   */
  limitPerGroup?: number;

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;

  /**
   * Filters results by SPF (Sender Policy Framework) validation status.
   */
  spf?: Array<'PASS' | 'NONE' | 'FAIL'>;

  /**
   * Filters results by TLS version.
   */
  tlsVersion?: Array<'TLSv1_0' | 'TLSv1_1' | 'TLSv1_2' | 'TLSv1_3'>;
}

Security.Top = Top;
Security.BaseTop = BaseTop;
Security.Summary = Summary;
Security.BaseSummary = BaseSummary;
Security.TimeseriesGroups = TimeseriesGroups;
Security.BaseTimeseriesGroups = BaseTimeseriesGroups;

export declare namespace Security {
  export {
    type SecuritySummaryV2Response as SecuritySummaryV2Response,
    type SecurityTimeseriesGroupsV2Response as SecurityTimeseriesGroupsV2Response,
    type SecuritySummaryV2Params as SecuritySummaryV2Params,
    type SecurityTimeseriesGroupsV2Params as SecurityTimeseriesGroupsV2Params,
  };

  export { Top as Top, BaseTop as BaseTop };

  export {
    Summary as Summary,
    BaseSummary as BaseSummary,
    type SummaryARCResponse as SummaryARCResponse,
    type SummaryDKIMResponse as SummaryDKIMResponse,
    type SummaryDMARCResponse as SummaryDMARCResponse,
    type SummaryMaliciousResponse as SummaryMaliciousResponse,
    type SummarySpamResponse as SummarySpamResponse,
    type SummarySPFResponse as SummarySPFResponse,
    type SummarySpoofResponse as SummarySpoofResponse,
    type SummaryThreatCategoryResponse as SummaryThreatCategoryResponse,
    type SummaryTLSVersionResponse as SummaryTLSVersionResponse,
    type SummaryARCParams as SummaryARCParams,
    type SummaryDKIMParams as SummaryDKIMParams,
    type SummaryDMARCParams as SummaryDMARCParams,
    type SummaryMaliciousParams as SummaryMaliciousParams,
    type SummarySpamParams as SummarySpamParams,
    type SummarySPFParams as SummarySPFParams,
    type SummarySpoofParams as SummarySpoofParams,
    type SummaryThreatCategoryParams as SummaryThreatCategoryParams,
    type SummaryTLSVersionParams as SummaryTLSVersionParams,
  };

  export {
    TimeseriesGroups as TimeseriesGroups,
    BaseTimeseriesGroups as BaseTimeseriesGroups,
    type TimeseriesGroupARCResponse as TimeseriesGroupARCResponse,
    type TimeseriesGroupDKIMResponse as TimeseriesGroupDKIMResponse,
    type TimeseriesGroupDMARCResponse as TimeseriesGroupDMARCResponse,
    type TimeseriesGroupMaliciousResponse as TimeseriesGroupMaliciousResponse,
    type TimeseriesGroupSpamResponse as TimeseriesGroupSpamResponse,
    type TimeseriesGroupSPFResponse as TimeseriesGroupSPFResponse,
    type TimeseriesGroupSpoofResponse as TimeseriesGroupSpoofResponse,
    type TimeseriesGroupThreatCategoryResponse as TimeseriesGroupThreatCategoryResponse,
    type TimeseriesGroupTLSVersionResponse as TimeseriesGroupTLSVersionResponse,
    type TimeseriesGroupARCParams as TimeseriesGroupARCParams,
    type TimeseriesGroupDKIMParams as TimeseriesGroupDKIMParams,
    type TimeseriesGroupDMARCParams as TimeseriesGroupDMARCParams,
    type TimeseriesGroupMaliciousParams as TimeseriesGroupMaliciousParams,
    type TimeseriesGroupSpamParams as TimeseriesGroupSpamParams,
    type TimeseriesGroupSPFParams as TimeseriesGroupSPFParams,
    type TimeseriesGroupSpoofParams as TimeseriesGroupSpoofParams,
    type TimeseriesGroupThreatCategoryParams as TimeseriesGroupThreatCategoryParams,
    type TimeseriesGroupTLSVersionParams as TimeseriesGroupTLSVersionParams,
  };
}
