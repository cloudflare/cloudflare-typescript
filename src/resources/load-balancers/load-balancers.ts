// File generated from our OpenAPI spec by Stainless. See CONTRIBUTING.md for details.

import { APIResource } from '../../core/resource';
import * as MonitorGroupsAPI from './monitor-groups';
import { BaseMonitorGroups, MonitorGroups } from './monitor-groups';
import * as PreviewsAPI from './previews';
import { BasePreviews, Previews } from './previews';
import * as RegionsAPI from './regions';
import { BaseRegions, Regions } from './regions';
import * as SearchesAPI from './searches';
import { BaseSearches, Searches } from './searches';
import * as MonitorsAPI from './monitors/monitors';
import { BaseMonitors, Monitors } from './monitors/monitors';
import * as PoolsAPI from './pools/pools';
import { BasePools, Pools } from './pools/pools';

export class BaseLoadBalancers extends APIResource {
  static override readonly _key: readonly ['loadBalancers'] = Object.freeze(['loadBalancers'] as const);
}
export class LoadBalancers extends BaseLoadBalancers {
  monitors: MonitorsAPI.Monitors = new MonitorsAPI.Monitors(this._client);
  monitorGroups: MonitorGroupsAPI.MonitorGroups = new MonitorGroupsAPI.MonitorGroups(this._client);
  pools: PoolsAPI.Pools = new PoolsAPI.Pools(this._client);
  previews: PreviewsAPI.Previews = new PreviewsAPI.Previews(this._client);
  regions: RegionsAPI.Regions = new RegionsAPI.Regions(this._client);
  searches: SearchesAPI.Searches = new SearchesAPI.Searches(this._client);
}

LoadBalancers.Monitors = Monitors;
LoadBalancers.BaseMonitors = BaseMonitors;
LoadBalancers.MonitorGroups = MonitorGroups;
LoadBalancers.BaseMonitorGroups = BaseMonitorGroups;
LoadBalancers.Pools = Pools;
LoadBalancers.BasePools = BasePools;
LoadBalancers.Previews = Previews;
LoadBalancers.BasePreviews = BasePreviews;
LoadBalancers.Regions = Regions;
LoadBalancers.BaseRegions = BaseRegions;
LoadBalancers.Searches = Searches;
LoadBalancers.BaseSearches = BaseSearches;

export declare namespace LoadBalancers {
  export { Monitors as Monitors, BaseMonitors as BaseMonitors };

  export { MonitorGroups as MonitorGroups, BaseMonitorGroups as BaseMonitorGroups };

  export { Pools as Pools, BasePools as BasePools };

  export { Previews as Previews, BasePreviews as BasePreviews };

  export { Regions as Regions, BaseRegions as BaseRegions };

  export { Searches as Searches, BaseSearches as BaseSearches };
}
