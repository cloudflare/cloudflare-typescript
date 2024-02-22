// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as MonitorsAPI from 'cloudflare/resources/user/load-balancers/monitors';
import * as PoolsAPI from 'cloudflare/resources/user/load-balancers/pools';
import * as PreviewAPI from 'cloudflare/resources/user/load-balancers/preview';

export class LoadBalancers extends APIResource {
  monitors: MonitorsAPI.Monitors = new MonitorsAPI.Monitors(this._client);
  pools: PoolsAPI.Pools = new PoolsAPI.Pools(this._client);
  preview: PreviewAPI.Preview = new PreviewAPI.Preview(this._client);
}

export namespace LoadBalancers {
  export import Monitors = MonitorsAPI.Monitors;
  export import MonitorCreateResponse = MonitorsAPI.MonitorCreateResponse;
  export import MonitorListResponse = MonitorsAPI.MonitorListResponse;
  export import MonitorDeleteResponse = MonitorsAPI.MonitorDeleteResponse;
  export import MonitorEditResponse = MonitorsAPI.MonitorEditResponse;
  export import MonitorGetResponse = MonitorsAPI.MonitorGetResponse;
  export import MonitorPreviewResponse = MonitorsAPI.MonitorPreviewResponse;
  export import MonitorReferencesResponse = MonitorsAPI.MonitorReferencesResponse;
  export import MonitorCreateParams = MonitorsAPI.MonitorCreateParams;
  export import MonitorEditParams = MonitorsAPI.MonitorEditParams;
  export import MonitorPreviewParams = MonitorsAPI.MonitorPreviewParams;
  export import Pools = PoolsAPI.Pools;
  export import PoolCreateResponse = PoolsAPI.PoolCreateResponse;
  export import PoolListResponse = PoolsAPI.PoolListResponse;
  export import PoolDeleteResponse = PoolsAPI.PoolDeleteResponse;
  export import PoolEditResponse = PoolsAPI.PoolEditResponse;
  export import PoolGetResponse = PoolsAPI.PoolGetResponse;
  export import PoolHealthResponse = PoolsAPI.PoolHealthResponse;
  export import PoolPreviewResponse = PoolsAPI.PoolPreviewResponse;
  export import PoolReferencesResponse = PoolsAPI.PoolReferencesResponse;
  export import PoolCreateParams = PoolsAPI.PoolCreateParams;
  export import PoolListParams = PoolsAPI.PoolListParams;
  export import PoolEditParams = PoolsAPI.PoolEditParams;
  export import PoolPreviewParams = PoolsAPI.PoolPreviewParams;
  export import Preview = PreviewAPI.Preview;
  export import PreviewGetResponse = PreviewAPI.PreviewGetResponse;
}
