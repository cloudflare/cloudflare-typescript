// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as HTTPAPI from './http';
import * as SummaryAPI from './summary';
import * as TimeseriesGroupsAPI from './timeseries-groups';
import * as TopAPI from './top';
import * as AsesAPI from './ases/ases';
import * as LocationsAPI from './locations/locations';

export class HTTP extends APIResource {
  locations: LocationsAPI.Locations = new LocationsAPI.Locations(this._client);
  ases: AsesAPI.Ases = new AsesAPI.Ases(this._client);
  summary: SummaryAPI.Summary = new SummaryAPI.Summary(this._client);
  timeseriesGroups: TimeseriesGroupsAPI.TimeseriesGroups = new TimeseriesGroupsAPI.TimeseriesGroups(
    this._client,
  );
  top: TopAPI.Top = new TopAPI.Top(this._client);

  /**
   * Get HTTP requests over time.
   */
  timeseries(
    query?: HTTPTimeseriesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<HTTPTimeseriesResponse>;
  timeseries(options?: Core.RequestOptions): Core.APIPromise<HTTPTimeseriesResponse>;
  timeseries(
    query: HTTPTimeseriesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<HTTPTimeseriesResponse> {
    if (isRequestOptions(query)) {
      return this.timeseries({}, query);
    }
    return (
      this._client.get('/radar/http/timeseries', { query, ...options }) as Core.APIPromise<{
        result: HTTPTimeseriesResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface HTTPTimeseriesResponse {
  meta: HTTPTimeseriesResponse.Meta;

  serie_0: HTTPTimeseriesResponse.Serie0;
}

export namespace HTTPTimeseriesResponse {
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

export interface HTTPTimeseriesParams {
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
   * Normalization method applied. Refer to
   * [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization/).
   */
  normalization?: 'PERCENTAGE_CHANGE' | 'MIN0_MAX';
}

export namespace HTTP {
  export type HTTPTimeseriesResponse = HTTPAPI.HTTPTimeseriesResponse;
  export type HTTPTimeseriesParams = HTTPAPI.HTTPTimeseriesParams;
  export import Locations = LocationsAPI.Locations;
  export type LocationGetResponse = LocationsAPI.LocationGetResponse;
  export type LocationGetParams = LocationsAPI.LocationGetParams;
  export import Ases = AsesAPI.Ases;
  export type AseGetResponse = AsesAPI.AseGetResponse;
  export type AseGetParams = AsesAPI.AseGetParams;
  export import Summary = SummaryAPI.Summary;
  export type SummaryBotClassResponse = SummaryAPI.SummaryBotClassResponse;
  export type SummaryDeviceTypeResponse = SummaryAPI.SummaryDeviceTypeResponse;
  export type SummaryHTTPProtocolResponse = SummaryAPI.SummaryHTTPProtocolResponse;
  export type SummaryHTTPVersionResponse = SummaryAPI.SummaryHTTPVersionResponse;
  export type SummaryIPVersionResponse = SummaryAPI.SummaryIPVersionResponse;
  export type SummaryOSResponse = SummaryAPI.SummaryOSResponse;
  export type SummaryPostQuantumResponse = SummaryAPI.SummaryPostQuantumResponse;
  export type SummaryTLSVersionResponse = SummaryAPI.SummaryTLSVersionResponse;
  export type SummaryBotClassParams = SummaryAPI.SummaryBotClassParams;
  export type SummaryDeviceTypeParams = SummaryAPI.SummaryDeviceTypeParams;
  export type SummaryHTTPProtocolParams = SummaryAPI.SummaryHTTPProtocolParams;
  export type SummaryHTTPVersionParams = SummaryAPI.SummaryHTTPVersionParams;
  export type SummaryIPVersionParams = SummaryAPI.SummaryIPVersionParams;
  export type SummaryOSParams = SummaryAPI.SummaryOSParams;
  export type SummaryPostQuantumParams = SummaryAPI.SummaryPostQuantumParams;
  export type SummaryTLSVersionParams = SummaryAPI.SummaryTLSVersionParams;
  export import TimeseriesGroups = TimeseriesGroupsAPI.TimeseriesGroups;
  export type TimeseriesGroupBotClassResponse = TimeseriesGroupsAPI.TimeseriesGroupBotClassResponse;
  export type TimeseriesGroupBrowserResponse = TimeseriesGroupsAPI.TimeseriesGroupBrowserResponse;
  export type TimeseriesGroupBrowserFamilyResponse = TimeseriesGroupsAPI.TimeseriesGroupBrowserFamilyResponse;
  export type TimeseriesGroupDeviceTypeResponse = TimeseriesGroupsAPI.TimeseriesGroupDeviceTypeResponse;
  export type TimeseriesGroupHTTPProtocolResponse = TimeseriesGroupsAPI.TimeseriesGroupHTTPProtocolResponse;
  export type TimeseriesGroupHTTPVersionResponse = TimeseriesGroupsAPI.TimeseriesGroupHTTPVersionResponse;
  export type TimeseriesGroupIPVersionResponse = TimeseriesGroupsAPI.TimeseriesGroupIPVersionResponse;
  export type TimeseriesGroupOSResponse = TimeseriesGroupsAPI.TimeseriesGroupOSResponse;
  export type TimeseriesGroupPostQuantumResponse = TimeseriesGroupsAPI.TimeseriesGroupPostQuantumResponse;
  export type TimeseriesGroupTLSVersionResponse = TimeseriesGroupsAPI.TimeseriesGroupTLSVersionResponse;
  export type TimeseriesGroupBotClassParams = TimeseriesGroupsAPI.TimeseriesGroupBotClassParams;
  export type TimeseriesGroupBrowserParams = TimeseriesGroupsAPI.TimeseriesGroupBrowserParams;
  export type TimeseriesGroupBrowserFamilyParams = TimeseriesGroupsAPI.TimeseriesGroupBrowserFamilyParams;
  export type TimeseriesGroupDeviceTypeParams = TimeseriesGroupsAPI.TimeseriesGroupDeviceTypeParams;
  export type TimeseriesGroupHTTPProtocolParams = TimeseriesGroupsAPI.TimeseriesGroupHTTPProtocolParams;
  export type TimeseriesGroupHTTPVersionParams = TimeseriesGroupsAPI.TimeseriesGroupHTTPVersionParams;
  export type TimeseriesGroupIPVersionParams = TimeseriesGroupsAPI.TimeseriesGroupIPVersionParams;
  export type TimeseriesGroupOSParams = TimeseriesGroupsAPI.TimeseriesGroupOSParams;
  export type TimeseriesGroupPostQuantumParams = TimeseriesGroupsAPI.TimeseriesGroupPostQuantumParams;
  export type TimeseriesGroupTLSVersionParams = TimeseriesGroupsAPI.TimeseriesGroupTLSVersionParams;
  export import Top = TopAPI.Top;
  export type TopBrowserResponse = TopAPI.TopBrowserResponse;
  export type TopBrowserFamilyResponse = TopAPI.TopBrowserFamilyResponse;
  export type TopBrowserParams = TopAPI.TopBrowserParams;
  export type TopBrowserFamilyParams = TopAPI.TopBrowserFamilyParams;
}
