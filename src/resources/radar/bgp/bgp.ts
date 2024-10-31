// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../../resource';
import { isRequestOptions } from '../../../core';
import * as Core from '../../../core';
import * as IPsAPI from './ips';
import { IPTimeseriesParams, IPTimeseriesResponse, IPs } from './ips';
import * as RoutesAPI from './routes';
import {
  RouteAsesParams,
  RouteAsesResponse,
  RouteMoasParams,
  RouteMoasResponse,
  RoutePfx2asParams,
  RoutePfx2asResponse,
  RouteStatsParams,
  RouteStatsResponse,
  Routes,
} from './routes';
import * as HijacksAPI from './hijacks/hijacks';
import { Hijacks } from './hijacks/hijacks';
import * as LeaksAPI from './leaks/leaks';
import { Leaks } from './leaks/leaks';
import * as TopAPI from './top/top';
import { Top, TopPrefixesParams, TopPrefixesResponse } from './top/top';

export class BGP extends APIResource {
  leaks: LeaksAPI.Leaks = new LeaksAPI.Leaks(this._client);
  top: TopAPI.Top = new TopAPI.Top(this._client);
  hijacks: HijacksAPI.Hijacks = new HijacksAPI.Hijacks(this._client);
  routes: RoutesAPI.Routes = new RoutesAPI.Routes(this._client);
  ips: IPsAPI.IPs = new IPsAPI.IPs(this._client);

  /**
   * Get BGP updates change over time. Raw values are returned. When requesting
   * updates for an autonomous system (AS), only BGP updates of type announcement are
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

BGP.Leaks = Leaks;
BGP.Top = Top;
BGP.Hijacks = Hijacks;
BGP.Routes = Routes;
BGP.IPs = IPs;

export declare namespace BGP {
  export {
    type BGPTimeseriesResponse as BGPTimeseriesResponse,
    type BGPTimeseriesParams as BGPTimeseriesParams,
  };

  export { Leaks as Leaks };

  export {
    Top as Top,
    type TopPrefixesResponse as TopPrefixesResponse,
    type TopPrefixesParams as TopPrefixesParams,
  };

  export { Hijacks as Hijacks };

  export {
    Routes as Routes,
    type RouteAsesResponse as RouteAsesResponse,
    type RouteMoasResponse as RouteMoasResponse,
    type RoutePfx2asResponse as RoutePfx2asResponse,
    type RouteStatsResponse as RouteStatsResponse,
    type RouteAsesParams as RouteAsesParams,
    type RouteMoasParams as RouteMoasParams,
    type RoutePfx2asParams as RoutePfx2asParams,
    type RouteStatsParams as RouteStatsParams,
  };

  export {
    IPs as IPs,
    type IPTimeseriesResponse as IPTimeseriesResponse,
    type IPTimeseriesParams as IPTimeseriesParams,
  };
}
