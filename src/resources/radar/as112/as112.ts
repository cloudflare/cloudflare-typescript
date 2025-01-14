// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as SummaryAPI from './summary';
import {
  Summary,
  SummaryDNSSECParams,
  SummaryDNSSECResponse,
  SummaryEdnsParams,
  SummaryEdnsResponse,
  SummaryIPVersionParams,
  SummaryIPVersionResponse,
  SummaryProtocolParams,
  SummaryProtocolResponse,
  SummaryQueryTypeParams,
  SummaryQueryTypeResponse,
  SummaryResponseCodesParams,
  SummaryResponseCodesResponse,
} from './summary';
import * as TimeseriesGroupsAPI from './timeseries-groups';
import {
  TimeseriesGroupDNSSECParams,
  TimeseriesGroupDNSSECResponse,
  TimeseriesGroupEdnsParams,
  TimeseriesGroupEdnsResponse,
  TimeseriesGroupIPVersionParams,
  TimeseriesGroupIPVersionResponse,
  TimeseriesGroupProtocolParams,
  TimeseriesGroupProtocolResponse,
  TimeseriesGroupQueryTypeParams,
  TimeseriesGroupQueryTypeResponse,
  TimeseriesGroupResponseCodesParams,
  TimeseriesGroupResponseCodesResponse,
  TimeseriesGroups,
} from './timeseries-groups';
import * as TopAPI from './top';
import {
  Top,
  TopDNSSECParams,
  TopDNSSECResponse,
  TopEdnsParams,
  TopEdnsResponse,
  TopIPVersionParams,
  TopIPVersionResponse,
  TopLocationsParams,
  TopLocationsResponse,
} from './top';

export class AS112 extends APIResource {
  summary: SummaryAPI.Summary = new SummaryAPI.Summary(this._client);
  timeseriesGroups: TimeseriesGroupsAPI.TimeseriesGroups = new TimeseriesGroupsAPI.TimeseriesGroups(
    this._client,
  );
  top: TopAPI.Top = new TopAPI.Top(this._client);

  /**
   * Get AS112 queries change over time.
   */
  timeseries(
    query?: AS112TimeseriesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<AS112TimeseriesResponse>;
  timeseries(options?: Core.RequestOptions): Core.APIPromise<AS112TimeseriesResponse>;
  timeseries(
    query: AS112TimeseriesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<AS112TimeseriesResponse> {
    if (isRequestOptions(query)) {
      return this.timeseries({}, query);
    }
    return (
      this._client.get('/radar/as112/timeseries', { query, ...options }) as Core.APIPromise<{
        result: AS112TimeseriesResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface AS112TimeseriesResponse {
  meta: AS112TimeseriesResponse.Meta;

  serie_0: AS112TimeseriesResponse.Serie0;
}

export namespace AS112TimeseriesResponse {
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

export interface AS112TimeseriesParams {
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
}

AS112.Summary = Summary;
AS112.TimeseriesGroups = TimeseriesGroups;
AS112.Top = Top;

export declare namespace AS112 {
  export {
    type AS112TimeseriesResponse as AS112TimeseriesResponse,
    type AS112TimeseriesParams as AS112TimeseriesParams,
  };

  export {
    Summary as Summary,
    type SummaryDNSSECResponse as SummaryDNSSECResponse,
    type SummaryEdnsResponse as SummaryEdnsResponse,
    type SummaryIPVersionResponse as SummaryIPVersionResponse,
    type SummaryProtocolResponse as SummaryProtocolResponse,
    type SummaryQueryTypeResponse as SummaryQueryTypeResponse,
    type SummaryResponseCodesResponse as SummaryResponseCodesResponse,
    type SummaryDNSSECParams as SummaryDNSSECParams,
    type SummaryEdnsParams as SummaryEdnsParams,
    type SummaryIPVersionParams as SummaryIPVersionParams,
    type SummaryProtocolParams as SummaryProtocolParams,
    type SummaryQueryTypeParams as SummaryQueryTypeParams,
    type SummaryResponseCodesParams as SummaryResponseCodesParams,
  };

  export {
    TimeseriesGroups as TimeseriesGroups,
    type TimeseriesGroupDNSSECResponse as TimeseriesGroupDNSSECResponse,
    type TimeseriesGroupEdnsResponse as TimeseriesGroupEdnsResponse,
    type TimeseriesGroupIPVersionResponse as TimeseriesGroupIPVersionResponse,
    type TimeseriesGroupProtocolResponse as TimeseriesGroupProtocolResponse,
    type TimeseriesGroupQueryTypeResponse as TimeseriesGroupQueryTypeResponse,
    type TimeseriesGroupResponseCodesResponse as TimeseriesGroupResponseCodesResponse,
    type TimeseriesGroupDNSSECParams as TimeseriesGroupDNSSECParams,
    type TimeseriesGroupEdnsParams as TimeseriesGroupEdnsParams,
    type TimeseriesGroupIPVersionParams as TimeseriesGroupIPVersionParams,
    type TimeseriesGroupProtocolParams as TimeseriesGroupProtocolParams,
    type TimeseriesGroupQueryTypeParams as TimeseriesGroupQueryTypeParams,
    type TimeseriesGroupResponseCodesParams as TimeseriesGroupResponseCodesParams,
  };

  export {
    Top as Top,
    type TopDNSSECResponse as TopDNSSECResponse,
    type TopEdnsResponse as TopEdnsResponse,
    type TopIPVersionResponse as TopIPVersionResponse,
    type TopLocationsResponse as TopLocationsResponse,
    type TopDNSSECParams as TopDNSSECParams,
    type TopEdnsParams as TopEdnsParams,
    type TopIPVersionParams as TopIPVersionParams,
    type TopLocationsParams as TopLocationsParams,
  };
}
