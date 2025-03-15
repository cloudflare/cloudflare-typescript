// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import * as Core from '../../../../core';
import * as SummaryAPI from './summary';
import {
  Summary,
  SummaryHTTPMethodParams,
  SummaryHTTPMethodResponse,
  SummaryHTTPVersionParams,
  SummaryHTTPVersionResponse,
  SummaryIPVersionParams,
  SummaryIPVersionResponse,
  SummaryManagedRulesParams,
  SummaryManagedRulesResponse,
  SummaryMitigationProductParams,
  SummaryMitigationProductResponse,
} from './summary';
import * as TimeseriesGroupsAPI from './timeseries-groups';
import {
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
  Top,
  TopAttacksParams,
  TopAttacksResponse,
  TopIndustryParams,
  TopIndustryResponse,
  TopVerticalParams,
  TopVerticalResponse,
} from './top/top';

export class Layer7 extends APIResource {
  summary: SummaryAPI.Summary = new SummaryAPI.Summary(this._client);
  timeseriesGroups: TimeseriesGroupsAPI.TimeseriesGroups = new TimeseriesGroupsAPI.TimeseriesGroups(
    this._client,
  );
  top: TopAPI.Top = new TopAPI.Top(this._client);

  /**
   * Retrieves layer 7 attacks over time.
   */
  timeseries(
    query?: Layer7TimeseriesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<Layer7TimeseriesResponse>;
  timeseries(options?: Core.RequestOptions): Core.APIPromise<Layer7TimeseriesResponse>;
  timeseries(
    query: Layer7TimeseriesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<Layer7TimeseriesResponse> {
    if (isRequestOptions(query)) {
      return this.timeseries({}, query);
    }
    return (
      this._client.get('/radar/attacks/layer7/timeseries', { query, ...options }) as Core.APIPromise<{
        result: Layer7TimeseriesResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface Layer7TimeseriesResponse {
  meta: Layer7TimeseriesResponse.Meta;

  serie_0: Layer7TimeseriesResponse.Serie0;
}

export namespace Layer7TimeseriesResponse {
  export interface Meta {
    aggInterval: string;

    dateRange: Array<Meta.DateRange>;

    lastUpdated: string;

    confidenceInfo?: Meta.ConfidenceInfo;
  }

  export namespace Meta {
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

    export interface ConfidenceInfo {
      annotations?: Array<ConfidenceInfo.Annotation>;

      level?: number;
    }

    export namespace ConfidenceInfo {
      export interface Annotation {
        dataSource: string;

        description: string;

        eventType: string;

        isInstantaneous: boolean;

        endTime?: string;

        linkedUrl?: string;

        startTime?: string;
      }
    }
  }

  export interface Serie0 {
    timestamps: Array<string>;

    values: Array<string>;
  }
}

export interface Layer7TimeseriesParams {
  /**
   * Aggregation interval results should be returned in (for example, in 15 minutes
   * or 1 hour intervals). Refer to
   * [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).
   */
  aggInterval?: '15m' | '1h' | '1d' | '1w';

  /**
   * Comma-separated list of Autonomous System Numbers (ASNs). Prefix with `-` to
   * exclude ASNs from results. For example, `-174, 3356` excludes results from
   * AS174, but includes results from AS3356.
   */
  asn?: Array<string>;

  /**
   * Comma-separated list of continents (alpha-2 continent codes). Prefix with `-` to
   * exclude continents from results. For example, `-EU,NA` excludes results from EU,
   * but includes results from NA.
   */
  continent?: Array<string>;

  /**
   * End of the date range (inclusive).
   */
  dateEnd?: Array<string>;

  /**
   * Filters results by the specified date range. For example, use `7d` and
   * `7dcontrol` to compare this week with the previous week. Use this parameter or
   * set specific start and end dates (`dateStart` and `dateEnd` parameters).
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
   * Comma-separated list of locations (alpha-2 codes). Prefix with `-` to exclude
   * locations from results. For example, `-US,PT` excludes results from the US, but
   * includes results from PT.
   */
  location?: Array<string>;

  /**
   * Array of L7 mitigation products.
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
   * Normalization method applied. Refer to
   * [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization/).
   */
  normalization?: 'PERCENTAGE_CHANGE' | 'MIN0_MAX';
}

Layer7.Summary = Summary;
Layer7.TimeseriesGroups = TimeseriesGroups;
Layer7.Top = Top;

export declare namespace Layer7 {
  export {
    type Layer7TimeseriesResponse as Layer7TimeseriesResponse,
    type Layer7TimeseriesParams as Layer7TimeseriesParams,
  };

  export {
    Summary as Summary,
    type SummaryHTTPMethodResponse as SummaryHTTPMethodResponse,
    type SummaryHTTPVersionResponse as SummaryHTTPVersionResponse,
    type SummaryIPVersionResponse as SummaryIPVersionResponse,
    type SummaryManagedRulesResponse as SummaryManagedRulesResponse,
    type SummaryMitigationProductResponse as SummaryMitigationProductResponse,
    type SummaryHTTPMethodParams as SummaryHTTPMethodParams,
    type SummaryHTTPVersionParams as SummaryHTTPVersionParams,
    type SummaryIPVersionParams as SummaryIPVersionParams,
    type SummaryManagedRulesParams as SummaryManagedRulesParams,
    type SummaryMitigationProductParams as SummaryMitigationProductParams,
  };

  export {
    TimeseriesGroups as TimeseriesGroups,
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
    type TopAttacksResponse as TopAttacksResponse,
    type TopIndustryResponse as TopIndustryResponse,
    type TopVerticalResponse as TopVerticalResponse,
    type TopAttacksParams as TopAttacksParams,
    type TopIndustryParams as TopIndustryParams,
    type TopVerticalParams as TopVerticalParams,
  };
}
