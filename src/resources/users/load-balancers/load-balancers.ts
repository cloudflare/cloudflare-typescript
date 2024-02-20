// File generated from our OpenAPI spec by Stainless.

import { APIResource } from 'cloudflare/resource';
import * as PreviewsAPI from 'cloudflare/resources/users/load-balancers/previews';
import * as MonitorsAPI from 'cloudflare/resources/users/load-balancers/monitors/monitors';
import * as PoolsAPI from 'cloudflare/resources/users/load-balancers/pools/pools';

export class LoadBalancers extends APIResource {
  monitors: MonitorsAPI.Monitors = new MonitorsAPI.Monitors(this._client);
  pools: PoolsAPI.Pools = new PoolsAPI.Pools(this._client);
  previews: PreviewsAPI.Previews = new PreviewsAPI.Previews(this._client);
}

export namespace LoadBalancers {
  export import Monitors = MonitorsAPI.Monitors;
  export import MonitorCreateResponse = MonitorsAPI.MonitorCreateResponse;
  export import MonitorListResponse = MonitorsAPI.MonitorListResponse;
  export import MonitorDeleteResponse = MonitorsAPI.MonitorDeleteResponse;
  export import MonitorEditResponse = MonitorsAPI.MonitorEditResponse;
  export import MonitorGetResponse = MonitorsAPI.MonitorGetResponse;
  export import MonitorCreateParams = MonitorsAPI.MonitorCreateParams;
  export import MonitorEditParams = MonitorsAPI.MonitorEditParams;
  export import Pools = PoolsAPI.Pools;
  export import PoolCreateResponse = PoolsAPI.PoolCreateResponse;
  export import PoolListResponse = PoolsAPI.PoolListResponse;
  export import PoolDeleteResponse = PoolsAPI.PoolDeleteResponse;
  export import PoolEditResponse = PoolsAPI.PoolEditResponse;
  export import PoolGetResponse = PoolsAPI.PoolGetResponse;
  export import PoolCreateParams = PoolsAPI.PoolCreateParams;
  export import PoolListParams = PoolsAPI.PoolListParams;
  export import PoolEditParams = PoolsAPI.PoolEditParams;
  export import Previews = PreviewsAPI.Previews;
  export import PreviewGetResponse = PreviewsAPI.PreviewGetResponse;
}
