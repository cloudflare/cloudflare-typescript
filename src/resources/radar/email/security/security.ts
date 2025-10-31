// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import * as Core from '../../../../core';
import * as SummaryAPI from './summary';
import {
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
import { Top } from './top/top';

export class Security extends APIResource {
  top: TopAPI.Top = new TopAPI.Top(this._client);
  summary: SummaryAPI.Summary = new SummaryAPI.Summary(this._client);
  timeseriesGroups: TimeseriesGroupsAPI.TimeseriesGroups = new TimeseriesGroupsAPI.TimeseriesGroups(
    this._client,
  );

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
    query?: SecuritySummaryV2Params,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SecuritySummaryV2Response>;
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
    options?: Core.RequestOptions,
  ): Core.APIPromise<SecuritySummaryV2Response>;
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
    query: SecuritySummaryV2Params | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SecuritySummaryV2Response> {
    if (isRequestOptions(query)) {
      return this.summaryV2(dimension, {}, query);
    }
    return (
      this._client.get(`/radar/email/security/summary/${dimension}`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: SecuritySummaryV2Response }>
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
    query?: SecurityTimeseriesGroupsV2Params,
    options?: Core.RequestOptions,
  ): Core.APIPromise<SecurityTimeseriesGroupsV2Response>;
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
    options?: Core.RequestOptions,
  ): Core.APIPromise<SecurityTimeseriesGroupsV2Response>;
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
    query: SecurityTimeseriesGroupsV2Params | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<SecurityTimeseriesGroupsV2Response> {
    if (isRequestOptions(query)) {
      return this.timeseriesGroupsV2(dimension, {}, query);
    }
    return (
      this._client.get(`/radar/email/security/timeseries_groups/${dimension}`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: SecurityTimeseriesGroupsV2Response }>
    )._thenUnwrap((obj) => obj.result);
  }
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
        dataSource: string;

        description: string;

        endDate: string;

        eventType: string;

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
        dataSource: string;

        description: string;

        endDate: string;

        eventType: string;

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

export interface SecuritySummaryV2Params {
  /**
   * Filters results by ARC (Authenticated Received Chain) validation.
   */
  arc?: Array<'PASS' | 'NONE' | 'FAIL'>;

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
   * an "other" category.
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
   */
  aggInterval?: '15m' | '1h' | '1d' | '1w';

  /**
   * Filters results by ARC (Authenticated Received Chain) validation.
   */
  arc?: Array<'PASS' | 'NONE' | 'FAIL'>;

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
   * an "other" category.
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
Security.Summary = Summary;
Security.TimeseriesGroups = TimeseriesGroups;

export declare namespace Security {
  export {
    type SecuritySummaryV2Response as SecuritySummaryV2Response,
    type SecurityTimeseriesGroupsV2Response as SecurityTimeseriesGroupsV2Response,
    type SecuritySummaryV2Params as SecuritySummaryV2Params,
    type SecurityTimeseriesGroupsV2Params as SecurityTimeseriesGroupsV2Params,
  };

  export { Top as Top };

  export {
    Summary as Summary,
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
