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
  SummaryEncryptedParams,
  SummaryEncryptedResponse,
  SummaryIPVersionParams,
  SummaryIPVersionResponse,
  SummarySPFParams,
  SummarySPFResponse,
} from './summary';
import * as TimeseriesGroupsAPI from './timeseries-groups';
import {
  TimeseriesGroupARCParams,
  TimeseriesGroupARCResponse,
  TimeseriesGroupDKIMParams,
  TimeseriesGroupDKIMResponse,
  TimeseriesGroupDMARCParams,
  TimeseriesGroupDMARCResponse,
  TimeseriesGroupEncryptedParams,
  TimeseriesGroupEncryptedResponse,
  TimeseriesGroupIPVersionParams,
  TimeseriesGroupIPVersionResponse,
  TimeseriesGroupSPFParams,
  TimeseriesGroupSPFResponse,
  TimeseriesGroups,
} from './timeseries-groups';

export class Routing extends APIResource {
  summary: SummaryAPI.Summary = new SummaryAPI.Summary(this._client);
  timeseriesGroups: TimeseriesGroupsAPI.TimeseriesGroups = new TimeseriesGroupsAPI.TimeseriesGroups(
    this._client,
  );

  /**
   * Retrieves the distribution of email routing metrics by the specified dimension.
   *
   * @example
   * ```ts
   * const response = await client.radar.email.routing.summaryV2(
   *   'IP_VERSION',
   * );
   * ```
   */
  summaryV2(
    dimension: 'IP_VERSION' | 'ENCRYPTED' | 'ARC' | 'DKIM' | 'DMARC' | 'SPF',
    query?: RoutingSummaryV2Params,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RoutingSummaryV2Response>;
  summaryV2(
    dimension: 'IP_VERSION' | 'ENCRYPTED' | 'ARC' | 'DKIM' | 'DMARC' | 'SPF',
    options?: Core.RequestOptions,
  ): Core.APIPromise<RoutingSummaryV2Response>;
  summaryV2(
    dimension: 'IP_VERSION' | 'ENCRYPTED' | 'ARC' | 'DKIM' | 'DMARC' | 'SPF',
    query: RoutingSummaryV2Params | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RoutingSummaryV2Response> {
    if (isRequestOptions(query)) {
      return this.summaryV2(dimension, {}, query);
    }
    return (
      this._client.get(`/radar/email/routing/summary/${dimension}`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: RoutingSummaryV2Response }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the distribution of email routing metrics grouped by dimension over
   * time.
   *
   * @example
   * ```ts
   * const response =
   *   await client.radar.email.routing.timeseriesGroupsV2(
   *     'IP_VERSION',
   *   );
   * ```
   */
  timeseriesGroupsV2(
    dimension: 'IP_VERSION' | 'ENCRYPTED' | 'ARC' | 'DKIM' | 'DMARC' | 'SPF',
    query?: RoutingTimeseriesGroupsV2Params,
    options?: Core.RequestOptions,
  ): Core.APIPromise<RoutingTimeseriesGroupsV2Response>;
  timeseriesGroupsV2(
    dimension: 'IP_VERSION' | 'ENCRYPTED' | 'ARC' | 'DKIM' | 'DMARC' | 'SPF',
    options?: Core.RequestOptions,
  ): Core.APIPromise<RoutingTimeseriesGroupsV2Response>;
  timeseriesGroupsV2(
    dimension: 'IP_VERSION' | 'ENCRYPTED' | 'ARC' | 'DKIM' | 'DMARC' | 'SPF',
    query: RoutingTimeseriesGroupsV2Params | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<RoutingTimeseriesGroupsV2Response> {
    if (isRequestOptions(query)) {
      return this.timeseriesGroupsV2(dimension, {}, query);
    }
    return (
      this._client.get(`/radar/email/routing/timeseries_groups/${dimension}`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: RoutingTimeseriesGroupsV2Response }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface RoutingSummaryV2Response {
  /**
   * Metadata for the results.
   */
  meta: RoutingSummaryV2Response.Meta;

  summary_0: { [key: string]: string };
}

export namespace RoutingSummaryV2Response {
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

export interface RoutingTimeseriesGroupsV2Response {
  /**
   * Metadata for the results.
   */
  meta: RoutingTimeseriesGroupsV2Response.Meta;

  serie_0: RoutingTimeseriesGroupsV2Response.Serie0;
}

export namespace RoutingTimeseriesGroupsV2Response {
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

export interface RoutingSummaryV2Params {
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
   * Filters results by encryption status (encrypted vs. not-encrypted).
   */
  encrypted?: Array<'ENCRYPTED' | 'NOT_ENCRYPTED'>;

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
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;

  /**
   * Filters results by SPF (Sender Policy Framework) validation status.
   */
  spf?: Array<'PASS' | 'NONE' | 'FAIL'>;
}

export interface RoutingTimeseriesGroupsV2Params {
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
   * Filters results by encryption status (encrypted vs. not-encrypted).
   */
  encrypted?: Array<'ENCRYPTED' | 'NOT_ENCRYPTED'>;

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
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;

  /**
   * Filters results by SPF (Sender Policy Framework) validation status.
   */
  spf?: Array<'PASS' | 'NONE' | 'FAIL'>;
}

Routing.Summary = Summary;
Routing.TimeseriesGroups = TimeseriesGroups;

export declare namespace Routing {
  export {
    type RoutingSummaryV2Response as RoutingSummaryV2Response,
    type RoutingTimeseriesGroupsV2Response as RoutingTimeseriesGroupsV2Response,
    type RoutingSummaryV2Params as RoutingSummaryV2Params,
    type RoutingTimeseriesGroupsV2Params as RoutingTimeseriesGroupsV2Params,
  };

  export {
    Summary as Summary,
    type SummaryARCResponse as SummaryARCResponse,
    type SummaryDKIMResponse as SummaryDKIMResponse,
    type SummaryDMARCResponse as SummaryDMARCResponse,
    type SummaryEncryptedResponse as SummaryEncryptedResponse,
    type SummaryIPVersionResponse as SummaryIPVersionResponse,
    type SummarySPFResponse as SummarySPFResponse,
    type SummaryARCParams as SummaryARCParams,
    type SummaryDKIMParams as SummaryDKIMParams,
    type SummaryDMARCParams as SummaryDMARCParams,
    type SummaryEncryptedParams as SummaryEncryptedParams,
    type SummaryIPVersionParams as SummaryIPVersionParams,
    type SummarySPFParams as SummarySPFParams,
  };

  export {
    TimeseriesGroups as TimeseriesGroups,
    type TimeseriesGroupARCResponse as TimeseriesGroupARCResponse,
    type TimeseriesGroupDKIMResponse as TimeseriesGroupDKIMResponse,
    type TimeseriesGroupDMARCResponse as TimeseriesGroupDMARCResponse,
    type TimeseriesGroupEncryptedResponse as TimeseriesGroupEncryptedResponse,
    type TimeseriesGroupIPVersionResponse as TimeseriesGroupIPVersionResponse,
    type TimeseriesGroupSPFResponse as TimeseriesGroupSPFResponse,
    type TimeseriesGroupARCParams as TimeseriesGroupARCParams,
    type TimeseriesGroupDKIMParams as TimeseriesGroupDKIMParams,
    type TimeseriesGroupDMARCParams as TimeseriesGroupDMARCParams,
    type TimeseriesGroupEncryptedParams as TimeseriesGroupEncryptedParams,
    type TimeseriesGroupIPVersionParams as TimeseriesGroupIPVersionParams,
    type TimeseriesGroupSPFParams as TimeseriesGroupSPFParams,
  };
}
