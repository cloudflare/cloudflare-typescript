// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as ColoAPI from 'cloudflare/resources/analytics/colo';
import * as DashboardsAPI from 'cloudflare/resources/analytics/dashboards';
import * as LatenciesAPI from 'cloudflare/resources/analytics/latencies/latencies';

export class Analytics extends APIResource {
  colo: ColoAPI.Colo = new ColoAPI.Colo(this._client);
  dashboards: DashboardsAPI.Dashboards = new DashboardsAPI.Dashboards(this._client);
  latencies: LatenciesAPI.Latencies = new LatenciesAPI.Latencies(this._client);
}

export namespace Analytics {
  export import Colo = ColoAPI.Colo;
  export import ColoZoneAnalyticsDeprecatedGetAnalyticsByCoLocationsResponse = ColoAPI.ColoZoneAnalyticsDeprecatedGetAnalyticsByCoLocationsResponse;
  export import ColoZoneAnalyticsDeprecatedGetAnalyticsByCoLocationsParams = ColoAPI.ColoZoneAnalyticsDeprecatedGetAnalyticsByCoLocationsParams;
  export import Dashboards = DashboardsAPI.Dashboards;
  export import DashboardZoneAnalyticsDeprecatedGetDashboardResponse = DashboardsAPI.DashboardZoneAnalyticsDeprecatedGetDashboardResponse;
  export import DashboardZoneAnalyticsDeprecatedGetDashboardParams = DashboardsAPI.DashboardZoneAnalyticsDeprecatedGetDashboardParams;
  export import Latencies = LatenciesAPI.Latencies;
  export import LatencyArgoAnalyticsForZoneArgoAnalyticsForAZoneResponse = LatenciesAPI.LatencyArgoAnalyticsForZoneArgoAnalyticsForAZoneResponse;
  export import LatencyArgoAnalyticsForZoneArgoAnalyticsForAZoneParams = LatenciesAPI.LatencyArgoAnalyticsForZoneArgoAnalyticsForAZoneParams;
}
