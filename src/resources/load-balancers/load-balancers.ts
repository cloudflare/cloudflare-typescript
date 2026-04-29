// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../resource';
import * as MonitorGroupsAPI from './monitor-groups';
import { MonitorGroups } from './monitor-groups';
import * as PreviewsAPI from './previews';
import { Previews } from './previews';
import * as RegionsAPI from './regions';
import { Regions } from './regions';
import * as SearchesAPI from './searches';
import { Searches } from './searches';
import * as MonitorsAPI from './monitors/monitors';
import { Monitors } from './monitors/monitors';
import * as PoolsAPI from './pools/pools';
import { Pools } from './pools/pools';

export class LoadBalancers extends APIResource {
  monitors: MonitorsAPI.Monitors = new MonitorsAPI.Monitors(this._client);
  monitorGroups: MonitorGroupsAPI.MonitorGroups = new MonitorGroupsAPI.MonitorGroups(this._client);
  pools: PoolsAPI.Pools = new PoolsAPI.Pools(this._client);
  previews: PreviewsAPI.Previews = new PreviewsAPI.Previews(this._client);
  regions: RegionsAPI.Regions = new RegionsAPI.Regions(this._client);
  searches: SearchesAPI.Searches = new SearchesAPI.Searches(this._client);
}

LoadBalancers.Monitors = Monitors;
LoadBalancers.MonitorGroups = MonitorGroups;
LoadBalancers.Pools = Pools;
LoadBalancers.Previews = Previews;
LoadBalancers.Regions = Regions;
LoadBalancers.Searches = Searches;

export declare namespace LoadBalancers {
  export { Monitors as Monitors };

  export { MonitorGroups as MonitorGroups };

  export { Pools as Pools };

  export { Previews as Previews };

  export { Regions as Regions };

  export { Searches as Searches };
}
