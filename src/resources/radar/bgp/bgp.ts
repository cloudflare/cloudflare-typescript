// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../core/resource';
import * as RoutesAPI from './routes';
import {
  BaseRoutes,
  RouteAsesParams,
  RouteAsesResponse,
  RouteMoasParams,
  RouteMoasResponse,
  RoutePfx2asParams,
  RoutePfx2asResponse,
  RouteRealtimeParams,
  RouteRealtimeResponse,
  RouteStatsParams,
  RouteStatsResponse,
  Routes,
} from './routes';
import * as HijacksAPI from './hijacks/hijacks';
import { BaseHijacks, Hijacks } from './hijacks/hijacks';
import * as IPsAPI from './ips/ips';
import { BaseIPs, IPTimeseriesParams, IPTimeseriesResponse, IPs } from './ips/ips';
import * as LeaksAPI from './leaks/leaks';
import { BaseLeaks, Leaks } from './leaks/leaks';
import * as RPKIAPI from './rpki/rpki';
import { BaseRPKI, RPKI } from './rpki/rpki';
import * as TopAPI from './top/top';
import { BaseTop, Top, TopPrefixesParams, TopPrefixesResponse } from './top/top';
import { APIPromise } from '../../../core/api-promise';
import { RequestOptions } from '../../../internal/request-options';

export class BaseBGP extends APIResource {
  static override readonly _key: readonly ['radar', 'bgp'] = Object.freeze(['radar', 'bgp'] as const);

  /**
   * Retrieves BGP updates over time. When requesting updates for an autonomous
   * system, only BGP updates of type announcement are returned.
   *
   * @example
   * ```ts
   * const response = await client.radar.bgp.timeseries();
   * ```
   */
  timeseries(
    query: BGPTimeseriesParams | null | undefined = {},
    options?: RequestOptions,
  ): APIPromise<BGPTimeseriesResponse> {
    return (
      this._client.get('/radar/bgp/timeseries', { query, ...options }) as APIPromise<{
        result: BGPTimeseriesResponse;
      }>
    )._thenUnwrap((obj) => obj.result);
  }
}
export class BGP extends BaseBGP {
  leaks: LeaksAPI.Leaks = new LeaksAPI.Leaks(this._client);
  top: TopAPI.Top = new TopAPI.Top(this._client);
  hijacks: HijacksAPI.Hijacks = new HijacksAPI.Hijacks(this._client);
  routes: RoutesAPI.Routes = new RoutesAPI.Routes(this._client);
  ips: IPsAPI.IPs = new IPsAPI.IPs(this._client);
  rpki: RPKIAPI.RPKI = new RPKIAPI.RPKI(this._client);
}

export interface BGPTimeseriesResponse {
  meta: BGPTimeseriesResponse.Meta;

  serie_0: BGPTimeseriesResponse.Serie0;
}

export namespace BGPTimeseriesResponse {
  export interface Meta {
    aggInterval: '15m' | '1h' | '1d' | '1w';

    confidenceInfo: Meta.ConfidenceInfo;

    dateRange: Array<Meta.DateRange>;

    lastUpdated: string;
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
        /**
         * Data source for annotations.
         */
        dataSource:
          | 'ALL'
          | 'AI_BOTS'
          | 'AI_GATEWAY'
          | 'BGP'
          | 'BOTS'
          | 'CONNECTION_ANOMALY'
          | 'CT'
          | 'DNS'
          | 'DNS_MAGNITUDE'
          | 'DNS_AS112'
          | 'DOS'
          | 'EMAIL_ROUTING'
          | 'EMAIL_SECURITY'
          | 'FW'
          | 'FW_PG'
          | 'HTTP'
          | 'HTTP_CONTROL'
          | 'HTTP_CRAWLER_REFERER'
          | 'HTTP_ORIGINS'
          | 'IQI'
          | 'LEAKED_CREDENTIALS'
          | 'NET'
          | 'ROBOTS_TXT'
          | 'SPEED'
          | 'WORKERS_AI';

        description: string;

        endDate: string;

        /**
         * Event type for annotations.
         */
        eventType: 'EVENT' | 'GENERAL' | 'OUTAGE' | 'PARTIAL_PROJECTION' | 'PIPELINE' | 'TRAFFIC_ANOMALY';

        /**
         * Whether event is a single point in time or a time range.
         */
        isInstantaneous: boolean;

        linkedUrl: string;

        startDate: string;

        tags?: Array<string>;
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
  }

  export interface Serie0 {
    timestamps: Array<string>;

    values: Array<string>;
  }
}

export interface BGPTimeseriesParams {
  /**
   * Aggregation interval of the results (e.g., in 15 minutes or 1 hour intervals).
   * Refer to
   * [Aggregation intervals](https://developers.cloudflare.com/radar/concepts/aggregation-intervals/).
   * When omitted, the interval is auto-selected from the requested date range; finer
   * intervals are only available for shorter ranges. If the requested interval is
   * too granular for the date range, the request is rejected.
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
   * End of the date range (inclusive). Alternative to `dateRange`; provide together
   * with `dateStart`. When requesting comparison series, every series must resolve
   * to the same duration as the main series. Each `dateStart`/`dateEnd` is floored
   * to the nearest 15 minutes before evaluation, so windows whose durations match
   * only before alignment may be rejected.
   */
  dateEnd?: Array<string>;

  /**
   * Filters results by relative date range ending at the current time, with each
   * value producing a separate series. Use `<n>d` for days (up to `364d`) or `<n>w`
   * for weeks (up to `52w`). Append `control` to request the equivalent previous
   * period for comparison: the comparison window is shifted back by the current
   * window's length rounded up to a whole number of weeks, so it keeps the same
   * weekday alignment and does not overlap the current window (e.g. `7dcontrol`
   * covers days -14 to -7, `10dcontrol` covers days -24 to -14). For example, pass
   * `7d` and `7dcontrol` to compare this week with the previous week. All series
   * must resolve to the same duration as the main series; relative ranges (including
   * `control`) satisfy this automatically. Use this parameter or set specific start
   * and end dates (`dateStart` and `dateEnd` parameters).
   */
  dateRange?: Array<string>;

  /**
   * Start of the date range. Alternative to `dateRange`; provide together with
   * `dateEnd`. When requesting comparison series, every series must resolve to the
   * same duration as the main series. Each `dateStart`/`dateEnd` is floored to the
   * nearest 15 minutes before evaluation, so windows whose durations match only
   * before alignment may be rejected.
   */
  dateStart?: Array<string>;

  /**
   * Format in which results will be returned.
   */
  format?: 'JSON' | 'CSV';

  /**
   * Array of names used to label the series in the response.
   */
  name?: Array<string>;

  /**
   * Filters results by BGP network prefix.
   */
  prefix?: Array<string>;

  /**
   * Filters results by BGP update type.
   */
  updateType?: Array<'ANNOUNCEMENT' | 'WITHDRAWAL'>;
}

BGP.Leaks = Leaks;
BGP.BaseLeaks = BaseLeaks;
BGP.Top = Top;
BGP.BaseTop = BaseTop;
BGP.Hijacks = Hijacks;
BGP.BaseHijacks = BaseHijacks;
BGP.Routes = Routes;
BGP.BaseRoutes = BaseRoutes;
BGP.IPs = IPs;
BGP.BaseIPs = BaseIPs;
BGP.RPKI = RPKI;
BGP.BaseRPKI = BaseRPKI;

export declare namespace BGP {
  export {
    type BGPTimeseriesResponse as BGPTimeseriesResponse,
    type BGPTimeseriesParams as BGPTimeseriesParams,
  };

  export { Leaks as Leaks, BaseLeaks as BaseLeaks };

  export {
    Top as Top,
    BaseTop as BaseTop,
    type TopPrefixesResponse as TopPrefixesResponse,
    type TopPrefixesParams as TopPrefixesParams,
  };

  export { Hijacks as Hijacks, BaseHijacks as BaseHijacks };

  export {
    Routes as Routes,
    BaseRoutes as BaseRoutes,
    type RouteAsesResponse as RouteAsesResponse,
    type RouteMoasResponse as RouteMoasResponse,
    type RoutePfx2asResponse as RoutePfx2asResponse,
    type RouteRealtimeResponse as RouteRealtimeResponse,
    type RouteStatsResponse as RouteStatsResponse,
    type RouteAsesParams as RouteAsesParams,
    type RouteMoasParams as RouteMoasParams,
    type RoutePfx2asParams as RoutePfx2asParams,
    type RouteRealtimeParams as RouteRealtimeParams,
    type RouteStatsParams as RouteStatsParams,
  };

  export {
    IPs as IPs,
    BaseIPs as BaseIPs,
    type IPTimeseriesResponse as IPTimeseriesResponse,
    type IPTimeseriesParams as IPTimeseriesParams,
  };

  export { RPKI as RPKI, BaseRPKI as BaseRPKI };
}
