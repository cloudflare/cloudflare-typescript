// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as SummaryAPI from './summary';
import {
  Summary,
  SummaryBotClassParams,
  SummaryBotClassResponse,
  SummaryDeviceTypeParams,
  SummaryDeviceTypeResponse,
  SummaryHTTPProtocolParams,
  SummaryHTTPProtocolResponse,
  SummaryHTTPVersionParams,
  SummaryHTTPVersionResponse,
  SummaryIPVersionParams,
  SummaryIPVersionResponse,
  SummaryOSParams,
  SummaryOSResponse,
  SummaryPostQuantumParams,
  SummaryPostQuantumResponse,
  SummaryTLSVersionParams,
  SummaryTLSVersionResponse,
} from './summary';
import * as TimeseriesGroupsAPI from './timeseries-groups';
import {
  TimeseriesGroupBotClassParams,
  TimeseriesGroupBotClassResponse,
  TimeseriesGroupBrowserFamilyParams,
  TimeseriesGroupBrowserFamilyResponse,
  TimeseriesGroupBrowserParams,
  TimeseriesGroupBrowserResponse,
  TimeseriesGroupDeviceTypeParams,
  TimeseriesGroupDeviceTypeResponse,
  TimeseriesGroupHTTPProtocolParams,
  TimeseriesGroupHTTPProtocolResponse,
  TimeseriesGroupHTTPVersionParams,
  TimeseriesGroupHTTPVersionResponse,
  TimeseriesGroupIPVersionParams,
  TimeseriesGroupIPVersionResponse,
  TimeseriesGroupOSParams,
  TimeseriesGroupOSResponse,
  TimeseriesGroupPostQuantumParams,
  TimeseriesGroupPostQuantumResponse,
  TimeseriesGroupTLSVersionParams,
  TimeseriesGroupTLSVersionResponse,
  TimeseriesGroups,
} from './timeseries-groups';
import * as TopAPI from './top';
import {
  Top,
  TopBrowserFamilyParams,
  TopBrowserFamilyResponse,
  TopBrowserParams,
  TopBrowserResponse,
} from './top';
import * as AsesAPI from './ases/ases';
import { AseGetParams, AseGetResponse, Ases } from './ases/ases';
import * as LocationsAPI from './locations/locations';
import { LocationGetParams, LocationGetResponse, Locations } from './locations/locations';

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
   * Filter for bot class. Refer to
   * [Bot classes](https://developers.cloudflare.com/radar/concepts/bot-classes/).
   */
  botClass?: Array<'LIKELY_AUTOMATED' | 'LIKELY_HUMAN'>;

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
   * Filter for device type.
   */
  deviceType?: Array<'DESKTOP' | 'MOBILE' | 'OTHER'>;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Filter for http protocol.
   */
  httpProtocol?: Array<'HTTP' | 'HTTPS'>;

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
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;

  /**
   * Normalization method applied. Refer to
   * [Normalization methods](https://developers.cloudflare.com/radar/concepts/normalization/).
   */
  normalization?: 'PERCENTAGE_CHANGE' | 'MIN0_MAX';

  /**
   * Filter for os name.
   */
  os?: Array<'WINDOWS' | 'MACOSX' | 'IOS' | 'ANDROID' | 'CHROMEOS' | 'LINUX' | 'SMART_TV'>;

  /**
   * Filter for tls version.
   */
  tlsVersion?: Array<'TLSv1_0' | 'TLSv1_1' | 'TLSv1_2' | 'TLSv1_3' | 'TLSvQUIC'>;
}

HTTP.Locations = Locations;
HTTP.Ases = Ases;
HTTP.Summary = Summary;
HTTP.TimeseriesGroups = TimeseriesGroups;
HTTP.Top = Top;

export declare namespace HTTP {
  export {
    type HTTPTimeseriesResponse as HTTPTimeseriesResponse,
    type HTTPTimeseriesParams as HTTPTimeseriesParams,
  };

  export {
    Locations as Locations,
    type LocationGetResponse as LocationGetResponse,
    type LocationGetParams as LocationGetParams,
  };

  export { Ases as Ases, type AseGetResponse as AseGetResponse, type AseGetParams as AseGetParams };

  export {
    Summary as Summary,
    type SummaryBotClassResponse as SummaryBotClassResponse,
    type SummaryDeviceTypeResponse as SummaryDeviceTypeResponse,
    type SummaryHTTPProtocolResponse as SummaryHTTPProtocolResponse,
    type SummaryHTTPVersionResponse as SummaryHTTPVersionResponse,
    type SummaryIPVersionResponse as SummaryIPVersionResponse,
    type SummaryOSResponse as SummaryOSResponse,
    type SummaryPostQuantumResponse as SummaryPostQuantumResponse,
    type SummaryTLSVersionResponse as SummaryTLSVersionResponse,
    type SummaryBotClassParams as SummaryBotClassParams,
    type SummaryDeviceTypeParams as SummaryDeviceTypeParams,
    type SummaryHTTPProtocolParams as SummaryHTTPProtocolParams,
    type SummaryHTTPVersionParams as SummaryHTTPVersionParams,
    type SummaryIPVersionParams as SummaryIPVersionParams,
    type SummaryOSParams as SummaryOSParams,
    type SummaryPostQuantumParams as SummaryPostQuantumParams,
    type SummaryTLSVersionParams as SummaryTLSVersionParams,
  };

  export {
    TimeseriesGroups as TimeseriesGroups,
    type TimeseriesGroupBotClassResponse as TimeseriesGroupBotClassResponse,
    type TimeseriesGroupBrowserResponse as TimeseriesGroupBrowserResponse,
    type TimeseriesGroupBrowserFamilyResponse as TimeseriesGroupBrowserFamilyResponse,
    type TimeseriesGroupDeviceTypeResponse as TimeseriesGroupDeviceTypeResponse,
    type TimeseriesGroupHTTPProtocolResponse as TimeseriesGroupHTTPProtocolResponse,
    type TimeseriesGroupHTTPVersionResponse as TimeseriesGroupHTTPVersionResponse,
    type TimeseriesGroupIPVersionResponse as TimeseriesGroupIPVersionResponse,
    type TimeseriesGroupOSResponse as TimeseriesGroupOSResponse,
    type TimeseriesGroupPostQuantumResponse as TimeseriesGroupPostQuantumResponse,
    type TimeseriesGroupTLSVersionResponse as TimeseriesGroupTLSVersionResponse,
    type TimeseriesGroupBotClassParams as TimeseriesGroupBotClassParams,
    type TimeseriesGroupBrowserParams as TimeseriesGroupBrowserParams,
    type TimeseriesGroupBrowserFamilyParams as TimeseriesGroupBrowserFamilyParams,
    type TimeseriesGroupDeviceTypeParams as TimeseriesGroupDeviceTypeParams,
    type TimeseriesGroupHTTPProtocolParams as TimeseriesGroupHTTPProtocolParams,
    type TimeseriesGroupHTTPVersionParams as TimeseriesGroupHTTPVersionParams,
    type TimeseriesGroupIPVersionParams as TimeseriesGroupIPVersionParams,
    type TimeseriesGroupOSParams as TimeseriesGroupOSParams,
    type TimeseriesGroupPostQuantumParams as TimeseriesGroupPostQuantumParams,
    type TimeseriesGroupTLSVersionParams as TimeseriesGroupTLSVersionParams,
  };

  export {
    Top as Top,
    type TopBrowserResponse as TopBrowserResponse,
    type TopBrowserFamilyResponse as TopBrowserFamilyResponse,
    type TopBrowserParams as TopBrowserParams,
    type TopBrowserFamilyParams as TopBrowserFamilyParams,
  };
}
