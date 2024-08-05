// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as HTTPAPI from './http';
import * as SummaryAPI from './summary';
import * as TimeseriesGroupsAPI from './timeseries-groups';
import * as AsesAPI from './ases/ases';
import * as LocationsAPI from './locations/locations';

export class HTTP extends APIResource {
  locations: LocationsAPI.Locations = new LocationsAPI.Locations(this._client);
  ases: AsesAPI.Ases = new AsesAPI.Ases(this._client);
  summary: SummaryAPI.Summary = new SummaryAPI.Summary(this._client);
  timeseriesGroups: TimeseriesGroupsAPI.TimeseriesGroups = new TimeseriesGroupsAPI.TimeseriesGroups(
    this._client,
  );

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
  export import HTTPTimeseriesResponse = HTTPAPI.HTTPTimeseriesResponse;
  export import HTTPTimeseriesParams = HTTPAPI.HTTPTimeseriesParams;
  export import Locations = LocationsAPI.Locations;
  export import LocationGetResponse = LocationsAPI.LocationGetResponse;
  export import LocationGetParams = LocationsAPI.LocationGetParams;
  export import Ases = AsesAPI.Ases;
  export import AseGetResponse = AsesAPI.AseGetResponse;
  export import AseGetParams = AsesAPI.AseGetParams;
  export import Summary = SummaryAPI.Summary;
  export import SummaryBotClassResponse = SummaryAPI.SummaryBotClassResponse;
  export import SummaryDeviceTypeResponse = SummaryAPI.SummaryDeviceTypeResponse;
  export import SummaryHTTPProtocolResponse = SummaryAPI.SummaryHTTPProtocolResponse;
  export import SummaryHTTPVersionResponse = SummaryAPI.SummaryHTTPVersionResponse;
  export import SummaryIPVersionResponse = SummaryAPI.SummaryIPVersionResponse;
  export import SummaryOSResponse = SummaryAPI.SummaryOSResponse;
  export import SummaryPostQuantumResponse = SummaryAPI.SummaryPostQuantumResponse;
  export import SummaryTLSVersionResponse = SummaryAPI.SummaryTLSVersionResponse;
  export import SummaryBotClassParams = SummaryAPI.SummaryBotClassParams;
  export import SummaryDeviceTypeParams = SummaryAPI.SummaryDeviceTypeParams;
  export import SummaryHTTPProtocolParams = SummaryAPI.SummaryHTTPProtocolParams;
  export import SummaryHTTPVersionParams = SummaryAPI.SummaryHTTPVersionParams;
  export import SummaryIPVersionParams = SummaryAPI.SummaryIPVersionParams;
  export import SummaryOSParams = SummaryAPI.SummaryOSParams;
  export import SummaryPostQuantumParams = SummaryAPI.SummaryPostQuantumParams;
  export import SummaryTLSVersionParams = SummaryAPI.SummaryTLSVersionParams;
  export import TimeseriesGroups = TimeseriesGroupsAPI.TimeseriesGroups;
  export import TimeseriesGroupBotClassResponse = TimeseriesGroupsAPI.TimeseriesGroupBotClassResponse;
  export import TimeseriesGroupBrowserResponse = TimeseriesGroupsAPI.TimeseriesGroupBrowserResponse;
  export import TimeseriesGroupBrowserFamilyResponse = TimeseriesGroupsAPI.TimeseriesGroupBrowserFamilyResponse;
  export import TimeseriesGroupDeviceTypeResponse = TimeseriesGroupsAPI.TimeseriesGroupDeviceTypeResponse;
  export import TimeseriesGroupHTTPProtocolResponse = TimeseriesGroupsAPI.TimeseriesGroupHTTPProtocolResponse;
  export import TimeseriesGroupHTTPVersionResponse = TimeseriesGroupsAPI.TimeseriesGroupHTTPVersionResponse;
  export import TimeseriesGroupIPVersionResponse = TimeseriesGroupsAPI.TimeseriesGroupIPVersionResponse;
  export import TimeseriesGroupOSResponse = TimeseriesGroupsAPI.TimeseriesGroupOSResponse;
  export import TimeseriesGroupPostQuantumResponse = TimeseriesGroupsAPI.TimeseriesGroupPostQuantumResponse;
  export import TimeseriesGroupTLSVersionResponse = TimeseriesGroupsAPI.TimeseriesGroupTLSVersionResponse;
  export import TimeseriesGroupBotClassParams = TimeseriesGroupsAPI.TimeseriesGroupBotClassParams;
  export import TimeseriesGroupBrowserParams = TimeseriesGroupsAPI.TimeseriesGroupBrowserParams;
  export import TimeseriesGroupBrowserFamilyParams = TimeseriesGroupsAPI.TimeseriesGroupBrowserFamilyParams;
  export import TimeseriesGroupDeviceTypeParams = TimeseriesGroupsAPI.TimeseriesGroupDeviceTypeParams;
  export import TimeseriesGroupHTTPProtocolParams = TimeseriesGroupsAPI.TimeseriesGroupHTTPProtocolParams;
  export import TimeseriesGroupHTTPVersionParams = TimeseriesGroupsAPI.TimeseriesGroupHTTPVersionParams;
  export import TimeseriesGroupIPVersionParams = TimeseriesGroupsAPI.TimeseriesGroupIPVersionParams;
  export import TimeseriesGroupOSParams = TimeseriesGroupsAPI.TimeseriesGroupOSParams;
  export import TimeseriesGroupPostQuantumParams = TimeseriesGroupsAPI.TimeseriesGroupPostQuantumParams;
  export import TimeseriesGroupTLSVersionParams = TimeseriesGroupsAPI.TimeseriesGroupTLSVersionParams;
}
