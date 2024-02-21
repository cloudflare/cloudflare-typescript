// File generated from our OpenAPI spec by Stainless.

import * as Core from 'cloudflare/core';
import { APIResource } from 'cloudflare/resource';
import { isRequestOptions } from 'cloudflare/core';
import * as BGPAPI from 'cloudflare/resources/radar/bgp/bgp';
import * as HijacksAPI from 'cloudflare/resources/radar/bgp/hijacks';
import * as LeaksAPI from 'cloudflare/resources/radar/bgp/leaks';
import * as RoutesAPI from 'cloudflare/resources/radar/bgp/routes';
import * as TopAPI from 'cloudflare/resources/radar/bgp/top/top';

export class BGP extends APIResource {
  leaks: LeaksAPI.Leaks = new LeaksAPI.Leaks(this._client);
  top: TopAPI.Top = new TopAPI.Top(this._client);
  hijacks: HijacksAPI.Hijacks = new HijacksAPI.Hijacks(this._client);
  routes: RoutesAPI.Routes = new RoutesAPI.Routes(this._client);

  /**
   * Gets BGP updates change over time. Raw values are returned. When requesting
   * updates of an autonomous system (AS), only BGP updates of type announcement are
   * returned.
   */
  timeseries(
    query?: BGPTimeseriesParams,
    options?: Core.RequestOptions,
  ): Core.APIPromise<BGPTimeseriesResponse>;
  timeseries(options?: Core.RequestOptions): Core.APIPromise<BGPTimeseriesResponse>;
  timeseries(
    query: BGPTimeseriesParams | Core.RequestOptions = {},
    options?: Core.RequestOptions,
  ): Core.APIPromise<BGPTimeseriesResponse> {
    if (isRequestOptions(query)) {
      return this.timeseries({}, query);
    }
    return (
      this._client.get('/radar/bgp/timeseries', { query, ...options }) as Core.APIPromise<{
        result: BGPTimeseriesResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}

export interface BGPTimeseriesResponse {
  meta: BGPTimeseriesResponse.Meta;

  serie_0: BGPTimeseriesResponse.Serie0;
}

export namespace BGPTimeseriesResponse {
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

        isInstantaneous: unknown;

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

export interface BGPTimeseriesParams {
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
   * End of the date range (inclusive).
   */
  dateEnd?: Array<string>;

  /**
   * For example, use `7d` and `7dControl` to compare this week with the previous
   * week. Use this parameter or set specific start and end dates (`dateStart` and
   * `dateEnd` parameters).
   */
  dateRange?: Array<
    | '1d'
    | '2d'
    | '7d'
    | '14d'
    | '28d'
    | '12w'
    | '24w'
    | '52w'
    | '1dControl'
    | '2dControl'
    | '7dControl'
    | '14dControl'
    | '28dControl'
    | '12wControl'
    | '24wControl'
  >;

  /**
   * Array of datetimes to filter the start of a series.
   */
  dateStart?: Array<string>;

  /**
   * Format results are returned in.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Array of names that will be used to name the series in responses.
   */
  name?: Array<string>;

  /**
   * Array of BGP network prefixes.
   */
  prefix?: Array<string>;

  /**
   * Array of BGP update types.
   */
  updateType?: Array<'ANNOUNCEMENT' | 'WITHDRAWAL'>;
}

export namespace BGP {
  export import BGPTimeseriesResponse = BGPAPI.BGPTimeseriesResponse;
  export import BGPTimeseriesParams = BGPAPI.BGPTimeseriesParams;
  export import Leaks = LeaksAPI.Leaks;
  export import LeakEventsResponse = LeaksAPI.LeakEventsResponse;
  export import LeakEventsParams = LeaksAPI.LeakEventsParams;
  export import Top = TopAPI.Top;
  export import TopPrefixesResponse = TopAPI.TopPrefixesResponse;
  export import TopPrefixesParams = TopAPI.TopPrefixesParams;
  export import Hijacks = HijacksAPI.Hijacks;
  export import HijackEventsResponse = HijacksAPI.HijackEventsResponse;
  export import HijackEventsParams = HijacksAPI.HijackEventsParams;
  export import Routes = RoutesAPI.Routes;
  export import RouteMoasResponse = RoutesAPI.RouteMoasResponse;
  export import RoutePfx2asResponse = RoutesAPI.RoutePfx2asResponse;
  export import RouteStatsResponse = RoutesAPI.RouteStatsResponse;
  export import RouteMoasParams = RoutesAPI.RouteMoasParams;
  export import RoutePfx2asParams = RoutesAPI.RoutePfx2asParams;
  export import RouteStatsParams = RoutesAPI.RouteStatsParams;
}
