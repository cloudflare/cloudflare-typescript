// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as DNSAPI from './dns';
import * as SummaryAPI from './summary';
import * as TimeseriesGroupsAPI from './timeseries-groups';
import * as TopAPI from './top';

export class DNS extends APIResource {
  top: TopAPI.Top = new TopAPI.Top(this._client);
  summary: SummaryAPI.Summary = new SummaryAPI.Summary(this._client);
  timeseriesGroups: TimeseriesGroupsAPI.TimeseriesGroups = new TimeseriesGroupsAPI.TimeseriesGroups(
    this._client,
  );

  /**
   * Get DNS queries change over time.
   */
  timeseries(
    query?: DNSTimeseriesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<DNSTimeseriesResponse>;
  timeseries(options?: Core.RequestOptions): Core.APIPromise<DNSTimeseriesResponse>;
  timeseries(
    query: DNSTimeseriesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<DNSTimeseriesResponse> {
    if (isRequestOptions(query)) {
      return this.timeseries({}, query);
    }
    return (
      this._client.get('/radar/dns/timeseries', { query, ...options }) as Core.APIPromise<{
        result: DNSTimeseriesResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface DNSTimeseriesResponse {
  meta: DNSTimeseriesResponse.Meta;

  serie_0: DNSTimeseriesResponse.Serie0;
}

export namespace DNSTimeseriesResponse {
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

export interface DNSTimeseriesParams {
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
   * Array of comma separated list of locations (alpha-2 country codes). Start with
   * `-` to exclude from results. For example, `-US,PT` excludes results from the US,
   * but includes results from PT.
   */
  location?: Array<string>;

  /**
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;

  /**
   * Filter for ccTLD.
   */
  tld?: Array<string>;
}

export namespace DNS {
  export import DNSTimeseriesResponse = DNSAPI.DNSTimeseriesResponse;
  export import DNSTimeseriesParams = DNSAPI.DNSTimeseriesParams;
  export import Top = TopAPI.Top;
  export import TopAsesResponse = TopAPI.TopAsesResponse;
  export import TopLocationsResponse = TopAPI.TopLocationsResponse;
  export import TopAsesParams = TopAPI.TopAsesParams;
  export import TopLocationsParams = TopAPI.TopLocationsParams;
  export import Summary = SummaryAPI.Summary;
  export import SummaryCacheHitResponse = SummaryAPI.SummaryCacheHitResponse;
  export import SummaryDNSSECResponse = SummaryAPI.SummaryDNSSECResponse;
  export import SummaryDNSSECAwareResponse = SummaryAPI.SummaryDNSSECAwareResponse;
  export import SummaryDNSSECE2EResponse = SummaryAPI.SummaryDNSSECE2EResponse;
  export import SummaryIPVersionResponse = SummaryAPI.SummaryIPVersionResponse;
  export import SummaryMatchingAnswerResponse = SummaryAPI.SummaryMatchingAnswerResponse;
  export import SummaryProtocolResponse = SummaryAPI.SummaryProtocolResponse;
  export import SummaryQueryTypeResponse = SummaryAPI.SummaryQueryTypeResponse;
  export import SummaryResponseCodesResponse = SummaryAPI.SummaryResponseCodesResponse;
  export import SummaryCacheHitParams = SummaryAPI.SummaryCacheHitParams;
  export import SummaryDNSSECParams = SummaryAPI.SummaryDNSSECParams;
  export import SummaryDNSSECAwareParams = SummaryAPI.SummaryDNSSECAwareParams;
  export import SummaryDNSSECE2EParams = SummaryAPI.SummaryDNSSECE2EParams;
  export import SummaryIPVersionParams = SummaryAPI.SummaryIPVersionParams;
  export import SummaryMatchingAnswerParams = SummaryAPI.SummaryMatchingAnswerParams;
  export import SummaryProtocolParams = SummaryAPI.SummaryProtocolParams;
  export import SummaryQueryTypeParams = SummaryAPI.SummaryQueryTypeParams;
  export import SummaryResponseCodesParams = SummaryAPI.SummaryResponseCodesParams;
  export import TimeseriesGroups = TimeseriesGroupsAPI.TimeseriesGroups;
  export import TimeseriesGroupCacheHitResponse = TimeseriesGroupsAPI.TimeseriesGroupCacheHitResponse;
  export import TimeseriesGroupDNSSECResponse = TimeseriesGroupsAPI.TimeseriesGroupDNSSECResponse;
  export import TimeseriesGroupDNSSECAwareResponse = TimeseriesGroupsAPI.TimeseriesGroupDNSSECAwareResponse;
  export import TimeseriesGroupDNSSECE2EResponse = TimeseriesGroupsAPI.TimeseriesGroupDNSSECE2EResponse;
  export import TimeseriesGroupIPVersionResponse = TimeseriesGroupsAPI.TimeseriesGroupIPVersionResponse;
  export import TimeseriesGroupMatchingAnswerResponse = TimeseriesGroupsAPI.TimeseriesGroupMatchingAnswerResponse;
  export import TimeseriesGroupProtocolResponse = TimeseriesGroupsAPI.TimeseriesGroupProtocolResponse;
  export import TimeseriesGroupQueryTypeResponse = TimeseriesGroupsAPI.TimeseriesGroupQueryTypeResponse;
  export import TimeseriesGroupResponseCodesResponse = TimeseriesGroupsAPI.TimeseriesGroupResponseCodesResponse;
  export import TimeseriesGroupResponseTTLResponse = TimeseriesGroupsAPI.TimeseriesGroupResponseTTLResponse;
  export import TimeseriesGroupCacheHitParams = TimeseriesGroupsAPI.TimeseriesGroupCacheHitParams;
  export import TimeseriesGroupDNSSECParams = TimeseriesGroupsAPI.TimeseriesGroupDNSSECParams;
  export import TimeseriesGroupDNSSECAwareParams = TimeseriesGroupsAPI.TimeseriesGroupDNSSECAwareParams;
  export import TimeseriesGroupDNSSECE2EParams = TimeseriesGroupsAPI.TimeseriesGroupDNSSECE2EParams;
  export import TimeseriesGroupIPVersionParams = TimeseriesGroupsAPI.TimeseriesGroupIPVersionParams;
  export import TimeseriesGroupMatchingAnswerParams = TimeseriesGroupsAPI.TimeseriesGroupMatchingAnswerParams;
  export import TimeseriesGroupProtocolParams = TimeseriesGroupsAPI.TimeseriesGroupProtocolParams;
  export import TimeseriesGroupQueryTypeParams = TimeseriesGroupsAPI.TimeseriesGroupQueryTypeParams;
  export import TimeseriesGroupResponseCodesParams = TimeseriesGroupsAPI.TimeseriesGroupResponseCodesParams;
  export import TimeseriesGroupResponseTTLParams = TimeseriesGroupsAPI.TimeseriesGroupResponseTTLParams;
}
