// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../../resource';
import { isRequestOptions } from '../../../../core';
import { APIPromise } from '../../../../core';
import * as Core from '../../../../core';
import { Summary } from './summary';
import { TimeseriesGroups } from './timeseries-groups';
import { Top } from './top/top';
import * as Layer7API from './layer7';
import * as SummaryAPI from './summary';
import * as TimeseriesGroupsAPI from './timeseries-groups';
import * as TopAPI from './top/top';

export class Layer7 extends APIResource {
  summary: SummaryAPI.Summary = new SummaryAPI.Summary(this._client);
  timeseriesGroups: TimeseriesGroupsAPI.TimeseriesGroups = new TimeseriesGroupsAPI.TimeseriesGroups(this._client);
  top: TopAPI.Top = new TopAPI.Top(this._client);

  /**
   * Get a timeseries of Layer 7 attacks. Values represent HTTP requests and are
   * normalized using min-max by default.
   */
  timeseries(query?: Layer7TimeseriesParams, options?: Core.RequestOptions): Core.APIPromise<Layer7TimeseriesResponse>
  timeseries(options?: Core.RequestOptions): Core.APIPromise<Layer7TimeseriesResponse>
  timeseries(query: Layer7TimeseriesParams | Core.RequestOptions = {}, options?: Core.RequestOptions): Core.APIPromise<Layer7TimeseriesResponse> {
    if (isRequestOptions(query)) {
      return this.timeseries({}, query);
    }
    return (this._client.get('/radar/attacks/layer7/timeseries', { query, ...options }) as Core.APIPromise<{ result: Layer7TimeseriesResponse }>)._thenUnwrap((obj) => obj.result);
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
  attack?: Array<'DDOS' | 'WAF' | 'BOT_MANAGEMENT' | 'ACCESS_RULES' | 'IP_REPUTATION' | 'API_SHIELD' | 'DATA_LOSS_PREVENTION'>;

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
  httpMethod?: Array<'GET' | 'POST' | 'DELETE' | 'PUT' | 'HEAD' | 'PURGE' | 'OPTIONS' | 'PROPFIND' | 'MKCOL' | 'PATCH' | 'ACL' | 'BCOPY' | 'BDELETE' | 'BMOVE' | 'BPROPFIND' | 'BPROPPATCH' | 'CHECKIN' | 'CHECKOUT' | 'CONNECT' | 'COPY' | 'LABEL' | 'LOCK' | 'MERGE' | 'MKACTIVITY' | 'MKWORKSPACE' | 'MOVE' | 'NOTIFY' | 'ORDERPATCH' | 'POLL' | 'PROPPATCH' | 'REPORT' | 'SEARCH' | 'SUBSCRIBE' | 'TRACE' | 'UNCHECKOUT' | 'UNLOCK' | 'UNSUBSCRIBE' | 'UPDATE' | 'VERSIONCONTROL' | 'BASELINECONTROL' | 'XMSENUMATTS' | 'RPC_OUT_DATA' | 'RPC_IN_DATA' | 'JSON' | 'COOK' | 'TRACK'>;

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
  mitigationProduct?: Array<'DDOS' | 'WAF' | 'BOT_MANAGEMENT' | 'ACCESS_RULES' | 'IP_REPUTATION' | 'API_SHIELD' | 'DATA_LOSS_PREVENTION'>;

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
  export import Layer7TimeseriesResponse = Layer7API.Layer7TimeseriesResponse;
  export import Layer7TimeseriesParams = Layer7API.Layer7TimeseriesParams;
  export import Summary = SummaryAPI.Summary;
  export import SummaryGetResponse = SummaryAPI.SummaryGetResponse;
  export import SummaryHTTPMethodResponse = SummaryAPI.SummaryHTTPMethodResponse;
  export import SummaryHTTPVersionResponse = SummaryAPI.SummaryHTTPVersionResponse;
  export import SummaryIPVersionResponse = SummaryAPI.SummaryIPVersionResponse;
  export import SummaryManagedRulesResponse = SummaryAPI.SummaryManagedRulesResponse;
  export import SummaryMitigationProductResponse = SummaryAPI.SummaryMitigationProductResponse;
  export import SummaryGetParams = SummaryAPI.SummaryGetParams;
  export import SummaryHTTPMethodParams = SummaryAPI.SummaryHTTPMethodParams;
  export import SummaryHTTPVersionParams = SummaryAPI.SummaryHTTPVersionParams;
  export import SummaryIPVersionParams = SummaryAPI.SummaryIPVersionParams;
  export import SummaryManagedRulesParams = SummaryAPI.SummaryManagedRulesParams;
  export import SummaryMitigationProductParams = SummaryAPI.SummaryMitigationProductParams;
  export import TimeseriesGroups = TimeseriesGroupsAPI.TimeseriesGroups;
  export import TimeseriesGroupGetResponse = TimeseriesGroupsAPI.TimeseriesGroupGetResponse;
  export import TimeseriesGroupHTTPMethodResponse = TimeseriesGroupsAPI.TimeseriesGroupHTTPMethodResponse;
  export import TimeseriesGroupHTTPVersionResponse = TimeseriesGroupsAPI.TimeseriesGroupHTTPVersionResponse;
  export import TimeseriesGroupIndustryResponse = TimeseriesGroupsAPI.TimeseriesGroupIndustryResponse;
  export import TimeseriesGroupIPVersionResponse = TimeseriesGroupsAPI.TimeseriesGroupIPVersionResponse;
  export import TimeseriesGroupManagedRulesResponse = TimeseriesGroupsAPI.TimeseriesGroupManagedRulesResponse;
  export import TimeseriesGroupMitigationProductResponse = TimeseriesGroupsAPI.TimeseriesGroupMitigationProductResponse;
  export import TimeseriesGroupVerticalResponse = TimeseriesGroupsAPI.TimeseriesGroupVerticalResponse;
  export import TimeseriesGroupGetParams = TimeseriesGroupsAPI.TimeseriesGroupGetParams;
  export import TimeseriesGroupHTTPMethodParams = TimeseriesGroupsAPI.TimeseriesGroupHTTPMethodParams;
  export import TimeseriesGroupHTTPVersionParams = TimeseriesGroupsAPI.TimeseriesGroupHTTPVersionParams;
  export import TimeseriesGroupIndustryParams = TimeseriesGroupsAPI.TimeseriesGroupIndustryParams;
  export import TimeseriesGroupIPVersionParams = TimeseriesGroupsAPI.TimeseriesGroupIPVersionParams;
  export import TimeseriesGroupManagedRulesParams = TimeseriesGroupsAPI.TimeseriesGroupManagedRulesParams;
  export import TimeseriesGroupMitigationProductParams = TimeseriesGroupsAPI.TimeseriesGroupMitigationProductParams;
  export import TimeseriesGroupVerticalParams = TimeseriesGroupsAPI.TimeseriesGroupVerticalParams;
  export import Top = TopAPI.Top;
  export import TopAttacksResponse = TopAPI.TopAttacksResponse;
  export import TopIndustryResponse = TopAPI.TopIndustryResponse;
  export import TopVerticalResponse = TopAPI.TopVerticalResponse;
  export import TopAttacksParams = TopAPI.TopAttacksParams;
  export import TopIndustryParams = TopAPI.TopIndustryParams;
  export import TopVerticalParams = TopAPI.TopVerticalParams;
}
