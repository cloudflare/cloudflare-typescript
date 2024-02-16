// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as HijacksAPI from 'cloudflare/resources/radar/bgp/hijacks';
import * as RoutesAPI from 'cloudflare/resources/radar/bgp/routes';
import * as TimeseriesAPI from 'cloudflare/resources/radar/bgp/timeseries';
import * as LeaksAPI from 'cloudflare/resources/radar/bgp/leaks/leaks';
import * as TopsAPI from 'cloudflare/resources/radar/bgp/tops/tops';

export class BGP extends APIResource {
  leaks: LeaksAPI.Leaks = new LeaksAPI.Leaks(this._client);
  timeseries: TimeseriesAPI.Timeseries = new TimeseriesAPI.Timeseries(this._client);
  tops: TopsAPI.Tops = new TopsAPI.Tops(this._client);
  hijacks: HijacksAPI.Hijacks = new HijacksAPI.Hijacks(this._client);
  routes: RoutesAPI.Routes = new RoutesAPI.Routes(this._client);
}

export namespace BGP {
  export import Leaks = LeaksAPI.Leaks;
  export import Timeseries = TimeseriesAPI.Timeseries;
  export import TimeseryListResponse = TimeseriesAPI.TimeseryListResponse;
  export import TimeseryListParams = TimeseriesAPI.TimeseryListParams;
  export import Tops = TopsAPI.Tops;
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
