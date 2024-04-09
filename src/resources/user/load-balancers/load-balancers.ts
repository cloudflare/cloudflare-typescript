// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from 'cloudflare/resource';
import * as MonitorsAPI from 'cloudflare/resources/user/load-balancers/monitors';
import * as PoolsAPI from 'cloudflare/resources/user/load-balancers/pools';
import * as PreviewAPI from 'cloudflare/resources/user/load-balancers/preview';
import * as AnalyticsAPI from 'cloudflare/resources/user/load-balancers/analytics/analytics';

export class LoadBalancers extends APIResource {
  monitors: MonitorsAPI.Monitors = new MonitorsAPI.Monitors(this._client);
  pools: PoolsAPI.Pools = new PoolsAPI.Pools(this._client);
  preview: PreviewAPI.PreviewResource = new PreviewAPI.PreviewResource(this._client);
  analytics: AnalyticsAPI.Analytics = new AnalyticsAPI.Analytics(this._client);
}

export namespace LoadBalancers {
  export import Monitors = MonitorsAPI.Monitors;
  export import MonitorCreateResponse = MonitorsAPI.MonitorCreateResponse;
  export import MonitorUpdateResponse = MonitorsAPI.MonitorUpdateResponse;
  export import MonitorListResponse = MonitorsAPI.MonitorListResponse;
  export import MonitorDeleteResponse = MonitorsAPI.MonitorDeleteResponse;
  export import MonitorEditResponse = MonitorsAPI.MonitorEditResponse;
  export import MonitorGetResponse = MonitorsAPI.MonitorGetResponse;
  export import MonitorPreviewResponse = MonitorsAPI.MonitorPreviewResponse;
  export import MonitorReferencesResponse = MonitorsAPI.MonitorReferencesResponse;
  export import MonitorListResponsesSinglePage = MonitorsAPI.MonitorListResponsesSinglePage;
  export import MonitorCreateParams = MonitorsAPI.MonitorCreateParams;
  export import MonitorUpdateParams = MonitorsAPI.MonitorUpdateParams;
  export import MonitorDeleteParams = MonitorsAPI.MonitorDeleteParams;
  export import MonitorEditParams = MonitorsAPI.MonitorEditParams;
  export import MonitorPreviewParams = MonitorsAPI.MonitorPreviewParams;
  export import Pools = PoolsAPI.Pools;
  export import PoolDeleteResponse = PoolsAPI.PoolDeleteResponse;
  export import PoolHealthResponse = PoolsAPI.PoolHealthResponse;
  export import PoolPreviewResponse = PoolsAPI.PoolPreviewResponse;
  export import PoolReferencesResponse = PoolsAPI.PoolReferencesResponse;
  export import PoolCreateParams = PoolsAPI.PoolCreateParams;
  export import PoolUpdateParams = PoolsAPI.PoolUpdateParams;
  export import PoolListParams = PoolsAPI.PoolListParams;
  export import PoolDeleteParams = PoolsAPI.PoolDeleteParams;
  export import PoolEditParams = PoolsAPI.PoolEditParams;
  export import PoolPreviewParams = PoolsAPI.PoolPreviewParams;
  export import PreviewResource = PreviewAPI.PreviewResource;
  export import Preview = PreviewAPI.Preview;
  export import Analytics = AnalyticsAPI.Analytics;
}
