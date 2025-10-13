// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as SummaryAPI from './summary';
import {
  Summary,
  SummaryBotClassParams,
  SummaryBotClassResponse,
  SummaryCompromisedParams,
  SummaryCompromisedResponse,
} from './summary';
import * as TimeseriesGroupsAPI from './timeseries-groups';
import {
  TimeseriesGroupBotClassParams,
  TimeseriesGroupBotClassResponse,
  TimeseriesGroupCompromisedParams,
  TimeseriesGroupCompromisedResponse,
  TimeseriesGroups,
} from './timeseries-groups';

export class LeakedCredentials extends APIResource {
  summary: SummaryAPI.Summary = new SummaryAPI.Summary(this._client);
  timeseriesGroups: TimeseriesGroupsAPI.TimeseriesGroups = new TimeseriesGroupsAPI.TimeseriesGroups(
    this._client,
  );

  /**
   * Retrieves an aggregated summary of HTTP authentication requests grouped by the
   * specified dimension.
   *
   * @example
   * ```ts
   * const response =
   *   await client.radar.leakedCredentials.summaryV2(
   *     'COMPROMISED',
   *   );
   * ```
   */
  summaryV2(
    dimension: 'COMPROMISED' | 'BOT_CLASS',
    query?: LeakedCredentialSummaryV2Params,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LeakedCredentialSummaryV2Response>;
  summaryV2(
    dimension: 'COMPROMISED' | 'BOT_CLASS',
    options?: Core.RequestOptions,
  ): Core.APIPromise<LeakedCredentialSummaryV2Response>;
  summaryV2(
    dimension: 'COMPROMISED' | 'BOT_CLASS',
    query: LeakedCredentialSummaryV2Params | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LeakedCredentialSummaryV2Response> {
    if (isRequestOptions(query)) {
      return this.summaryV2(dimension, {}, query);
    }
    return (
      this._client.get(`/radar/leaked_credential_checks/summary/${dimension}`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: LeakedCredentialSummaryV2Response }>
    )._thenUnwrap((obj) => obj.result);
  }

  /**
   * Retrieves the distribution of HTTP authentication requests, grouped by the
   * specified dimension over time.
   *
   * @example
   * ```ts
   * const response =
   *   await client.radar.leakedCredentials.timeseriesGroupsV2(
   *     'COMPROMISED',
   *   );
   * ```
   */
  timeseriesGroupsV2(
    dimension: 'COMPROMISED' | 'BOT_CLASS',
    query?: LeakedCredentialTimeseriesGroupsV2Params,
    options?: Core.RequestOptions,
  ): Core.APIPromise<LeakedCredentialTimeseriesGroupsV2Response>;
  timeseriesGroupsV2(
    dimension: 'COMPROMISED' | 'BOT_CLASS',
    options?: Core.RequestOptions,
  ): Core.APIPromise<LeakedCredentialTimeseriesGroupsV2Response>;
  timeseriesGroupsV2(
    dimension: 'COMPROMISED' | 'BOT_CLASS',
    query: LeakedCredentialTimeseriesGroupsV2Params | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<LeakedCredentialTimeseriesGroupsV2Response> {
    if (isRequestOptions(query)) {
      return this.timeseriesGroupsV2(dimension, {}, query);
    }
    return (
      this._client.get(`/radar/leaked_credential_checks/timeseries_groups/${dimension}`, {
        query,
        ...options,
      }) as Core.APIPromise<{ result: LeakedCredentialTimeseriesGroupsV2Response }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface LeakedCredentialSummaryV2Response {
  /**
   * Metadata for the results.
   */
  meta: LeakedCredentialSummaryV2Response.Meta;

  summary_0: { [key: string]: string };
}

export namespace LeakedCredentialSummaryV2Response {
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

export interface LeakedCredentialTimeseriesGroupsV2Response {
  /**
   * Metadata for the results.
   */
  meta: LeakedCredentialTimeseriesGroupsV2Response.Meta;

  serie_0: LeakedCredentialTimeseriesGroupsV2Response.Serie0;
}

export namespace LeakedCredentialTimeseriesGroupsV2Response {
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

export interface LeakedCredentialSummaryV2Params {
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
   * Filters results by compromised credential status (clean vs. compromised).
   */
  compromised?: Array<'CLEAN' | 'COMPROMISED'>;

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
   * Filters results by location. Specify a comma-separated list of alpha-2 codes.
   * Prefix with `-` to exclude locations from results. For example, `-US,PT`
   * excludes results from the US, but includes results from PT.
   */
  location?: Array<string>;

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;
}

export interface LeakedCredentialTimeseriesGroupsV2Params {
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
   * Filters results by leaked credential check result.
   */
  checkResult?: Array<
    | 'CLEAN'
    | 'USERNAME_LEAKED'
    | 'USERNAME_PASSWORD_SIMILAR'
    | 'USERNAME_AND_PASSWORD_LEAKED'
    | 'PASSWORD_LEAKED'
  >;

  /**
   * Filters results by compromised credential status (clean vs. compromised).
   */
  compromised?: Array<'CLEAN' | 'COMPROMISED'>;

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
}

LeakedCredentials.Summary = Summary;
LeakedCredentials.TimeseriesGroups = TimeseriesGroups;

export declare namespace LeakedCredentials {
  export {
    type LeakedCredentialSummaryV2Response as LeakedCredentialSummaryV2Response,
    type LeakedCredentialTimeseriesGroupsV2Response as LeakedCredentialTimeseriesGroupsV2Response,
    type LeakedCredentialSummaryV2Params as LeakedCredentialSummaryV2Params,
    type LeakedCredentialTimeseriesGroupsV2Params as LeakedCredentialTimeseriesGroupsV2Params,
  };

  export {
    Summary as Summary,
    type SummaryBotClassResponse as SummaryBotClassResponse,
    type SummaryCompromisedResponse as SummaryCompromisedResponse,
    type SummaryBotClassParams as SummaryBotClassParams,
    type SummaryCompromisedParams as SummaryCompromisedParams,
  };

  export {
    TimeseriesGroups as TimeseriesGroups,
    type TimeseriesGroupBotClassResponse as TimeseriesGroupBotClassResponse,
    type TimeseriesGroupCompromisedResponse as TimeseriesGroupCompromisedResponse,
    type TimeseriesGroupBotClassParams as TimeseriesGroupBotClassParams,
    type TimeseriesGroupCompromisedParams as TimeseriesGroupCompromisedParams,
  };
}
