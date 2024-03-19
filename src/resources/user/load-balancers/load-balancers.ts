// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as MonitorsAPI from 'cloudflare/resources/user/load-balancers/monitors';
import * as PoolsAPI from 'cloudflare/resources/user/load-balancers/pools';
import * as PreviewAPI from 'cloudflare/resources/user/load-balancers/preview';
import * as AnalyticsAPI from 'cloudflare/resources/user/load-balancers/analytics/analytics';

export class LoadBalancers extends APIResource {
  monitors: MonitorsAPI.Monitors = new MonitorsAPI.Monitors(this._client);
  pools: PoolsAPI.Pools = new PoolsAPI.Pools(this._client);
  preview: PreviewAPI.Preview = new PreviewAPI.Preview(this._client);
  analytics: AnalyticsAPI.Analytics = new AnalyticsAPI.Analytics(this._client);
}

export namespace LoadBalancers {
  export import Monitors = MonitorsAPI.Monitors;
  export import LoadBalancingMonitor = MonitorsAPI.LoadBalancingMonitor;
  export import MonitorListResponse = MonitorsAPI.MonitorListResponse;
  export import MonitorDeleteResponse = MonitorsAPI.MonitorDeleteResponse;
  export import MonitorPreviewResponse = MonitorsAPI.MonitorPreviewResponse;
  export import MonitorReferencesResponse = MonitorsAPI.MonitorReferencesResponse;
  export import MonitorCreateParams = MonitorsAPI.MonitorCreateParams;
  export import MonitorUpdateParams = MonitorsAPI.MonitorUpdateParams;
  export import MonitorEditParams = MonitorsAPI.MonitorEditParams;
  export import MonitorPreviewParams = MonitorsAPI.MonitorPreviewParams;
  export import Pools = PoolsAPI.Pools;
  export import LoadBalancingPool = PoolsAPI.LoadBalancingPool;
  export import PoolListResponse = PoolsAPI.PoolListResponse;
  export import PoolDeleteResponse = PoolsAPI.PoolDeleteResponse;
  export import PoolHealthResponse = PoolsAPI.PoolHealthResponse;
  export import PoolPreviewResponse = PoolsAPI.PoolPreviewResponse;
  export import PoolReferencesResponse = PoolsAPI.PoolReferencesResponse;
  export import PoolCreateParams = PoolsAPI.PoolCreateParams;
  export import PoolUpdateParams = PoolsAPI.PoolUpdateParams;
  export import PoolListParams = PoolsAPI.PoolListParams;
  export import PoolEditParams = PoolsAPI.PoolEditParams;
  export import PoolPreviewParams = PoolsAPI.PoolPreviewParams;
  export import Preview = PreviewAPI.Preview;
  export import LoadBalancingPreviewResult = PreviewAPI.LoadBalancingPreviewResult;
  export import Analytics = AnalyticsAPI.Analytics;
}
