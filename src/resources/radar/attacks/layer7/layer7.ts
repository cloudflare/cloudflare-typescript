// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import * as Core from '../../../../core';
import * as Layer7API from './layer7';
import * as SummaryAPI from './summary';
import * as TimeseriesGroupsAPI from './timeseries-groups';
import * as TopAPI from './top/top';

export class Layer7 extends APIResource {
  summary: SummaryAPI.Summary = new SummaryAPI.Summary(this._client);
  timeseriesGroups: TimeseriesGroupsAPI.TimeseriesGroups = new TimeseriesGroupsAPI.TimeseriesGroups(
    this._client,
  );
  top: TopAPI.Top = new TopAPI.Top(this._client);

  /**
   * Get a timeseries of Layer 7 attacks. Values represent HTTP requests and are
   * normalized using min-max by default.
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
   * Array of comma separated list of ASNs, start with `-` to exclude from results.
   * For example, `-174, 3356` excludes results from AS174, but includes results from
   * AS3356.
   */
  asn?: Array<string>;

  /**
   * This field is deprecated, please use the new `mitigationProduct`.
   */
  attack?: Array<
    | 'DDOS'
    | 'WAF'
    | 'BOT_MANAGEMENT'
    | 'ACCESS_RULES'
    | 'IP_REPUTATION'
    | 'API_SHIELD'
    | 'DATA_LOSS_PREVENTION'
  >;

  /**
   * Array of comma separated list of continents (alpha-2 continent codes). Start
   * with `-` to exclude from results. For example, `-EU,NA` excludes results from
   * Europe, but includes results from North America.
   */
  continent?: Array<string>;

  /**
   * End of the date range (inclusive).
   */
  dateEnd?: Array<string>;

  /**
   * For example, use `7d` and `7dControl` to compare this week with the previous
   * week. Use this parameter or set specific start and end dates (`dateStart` and
   * `dateEnd` parameters).
   */
  dateRange?: Array<string>;

  /**
   * Array of datetimes to filter the start of a series.
   */
  dateStart?: Array<string>;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filter for http method.
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
   * Filter for http version.
   */
  httpVersion?: Array<'HTTPv1' | 'HTTPv2' | 'HTTPv3'>;

  /**
   * Filter for ip version.
   */
  ipVersion?: Array<'IPv4' | 'IPv6'>;

  /**
   * Array of comma separated list of locations (alpha-2 country codes). Start with
   * `-` to exclude from results. For example, `-US,PT` excludes results from the US,
   * but includes results from PT.
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
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;

  /**
   * Normalization method applied. Refer to
   * [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization/).
   */
  normalization?: 'PERCENTAGE_CHANGE' | 'MIN0_MAX';
}

export namespace Layer7 {
  export type Layer7TimeseriesResponse = Layer7API.Layer7TimeseriesResponse;
  export type Layer7TimeseriesParams = Layer7API.Layer7TimeseriesParams;
  export import Summary = SummaryAPI.Summary;
  export type SummaryGetResponse = SummaryAPI.SummaryGetResponse;
  export type SummaryHTTPMethodResponse = SummaryAPI.SummaryHTTPMethodResponse;
  export type SummaryHTTPVersionResponse = SummaryAPI.SummaryHTTPVersionResponse;
  export type SummaryIPVersionResponse = SummaryAPI.SummaryIPVersionResponse;
  export type SummaryManagedRulesResponse = SummaryAPI.SummaryManagedRulesResponse;
  export type SummaryMitigationProductResponse = SummaryAPI.SummaryMitigationProductResponse;
  export type SummaryGetParams = SummaryAPI.SummaryGetParams;
  export type SummaryHTTPMethodParams = SummaryAPI.SummaryHTTPMethodParams;
  export type SummaryHTTPVersionParams = SummaryAPI.SummaryHTTPVersionParams;
  export type SummaryIPVersionParams = SummaryAPI.SummaryIPVersionParams;
  export type SummaryManagedRulesParams = SummaryAPI.SummaryManagedRulesParams;
  export type SummaryMitigationProductParams = SummaryAPI.SummaryMitigationProductParams;
  export import TimeseriesGroups = TimeseriesGroupsAPI.TimeseriesGroups;
  export type TimeseriesGroupGetResponse = TimeseriesGroupsAPI.TimeseriesGroupGetResponse;
  export type TimeseriesGroupHTTPMethodResponse = TimeseriesGroupsAPI.TimeseriesGroupHTTPMethodResponse;
  export type TimeseriesGroupHTTPVersionResponse = TimeseriesGroupsAPI.TimeseriesGroupHTTPVersionResponse;
  export type TimeseriesGroupIndustryResponse = TimeseriesGroupsAPI.TimeseriesGroupIndustryResponse;
  export type TimeseriesGroupIPVersionResponse = TimeseriesGroupsAPI.TimeseriesGroupIPVersionResponse;
  export type TimeseriesGroupManagedRulesResponse = TimeseriesGroupsAPI.TimeseriesGroupManagedRulesResponse;
  export type TimeseriesGroupMitigationProductResponse =
    TimeseriesGroupsAPI.TimeseriesGroupMitigationProductResponse;
  export type TimeseriesGroupVerticalResponse = TimeseriesGroupsAPI.TimeseriesGroupVerticalResponse;
  export type TimeseriesGroupGetParams = TimeseriesGroupsAPI.TimeseriesGroupGetParams;
  export type TimeseriesGroupHTTPMethodParams = TimeseriesGroupsAPI.TimeseriesGroupHTTPMethodParams;
  export type TimeseriesGroupHTTPVersionParams = TimeseriesGroupsAPI.TimeseriesGroupHTTPVersionParams;
  export type TimeseriesGroupIndustryParams = TimeseriesGroupsAPI.TimeseriesGroupIndustryParams;
  export type TimeseriesGroupIPVersionParams = TimeseriesGroupsAPI.TimeseriesGroupIPVersionParams;
  export type TimeseriesGroupManagedRulesParams = TimeseriesGroupsAPI.TimeseriesGroupManagedRulesParams;
  export type TimeseriesGroupMitigationProductParams =
    TimeseriesGroupsAPI.TimeseriesGroupMitigationProductParams;
  export type TimeseriesGroupVerticalParams = TimeseriesGroupsAPI.TimeseriesGroupVerticalParams;
  export import Top = TopAPI.Top;
  export type TopAttacksResponse = TopAPI.TopAttacksResponse;
  export type TopIndustryResponse = TopAPI.TopIndustryResponse;
  export type TopVerticalResponse = TopAPI.TopVerticalResponse;
  export type TopAttacksParams = TopAPI.TopAttacksParams;
  export type TopIndustryParams = TopAPI.TopIndustryParams;
  export type TopVerticalParams = TopAPI.TopVerticalParams;
}
