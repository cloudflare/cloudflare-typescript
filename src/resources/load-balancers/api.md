# LoadBalancers

Types:

- <code><a href="./src/resources/load-balancers/load-balancers.ts">AdaptiveRouting</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">CheckRegion</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">DefaultPools</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">FilterOptions</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">Header</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">Host</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">LoadBalancer</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">LoadShedding</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">LocationStrategy</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">NotificationFilter</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">Origin</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">OriginSteering</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">RandomSteering</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">Rules</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">SessionAffinity</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">SessionAffinityAttributes</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">SteeringPolicy</a></code>
- <code><a href="./src/resources/load-balancers/load-balancers.ts">LoadBalancerDeleteResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/load_balancers">client.loadBalancers.<a href="./src/resources/load-balancers/load-balancers.ts">create</a>({ ...params }) -> LoadBalancer</code>
- <code title="put /zones/{zone_id}/load_balancers/{load_balancer_id}">client.loadBalancers.<a href="./src/resources/load-balancers/load-balancers.ts">update</a>(loadBalancerId, { ...params }) -> LoadBalancer</code>
- <code title="get /zones/{zone_id}/load_balancers">client.loadBalancers.<a href="./src/resources/load-balancers/load-balancers.ts">list</a>({ ...params }) -> LoadBalancersSinglePage</code>
- <code title="delete /zones/{zone_id}/load_balancers/{load_balancer_id}">client.loadBalancers.<a href="./src/resources/load-balancers/load-balancers.ts">delete</a>(loadBalancerId, { ...params }) -> LoadBalancerDeleteResponse</code>
- <code title="patch /zones/{zone_id}/load_balancers/{load_balancer_id}">client.loadBalancers.<a href="./src/resources/load-balancers/load-balancers.ts">edit</a>(loadBalancerId, { ...params }) -> LoadBalancer</code>
- <code title="get /zones/{zone_id}/load_balancers/{load_balancer_id}">client.loadBalancers.<a href="./src/resources/load-balancers/load-balancers.ts">get</a>(loadBalancerId, { ...params }) -> LoadBalancer</code>

## Monitors

Types:

- <code><a href="./src/resources/load-balancers/monitors/monitors.ts">Monitor</a></code>
- <code><a href="./src/resources/load-balancers/monitors/monitors.ts">MonitorDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/load_balancers/monitors">client.loadBalancers.monitors.<a href="./src/resources/load-balancers/monitors/monitors.ts">create</a>({ ...params }) -> Monitor</code>
- <code title="put /accounts/{account_id}/load_balancers/monitors/{monitor_id}">client.loadBalancers.monitors.<a href="./src/resources/load-balancers/monitors/monitors.ts">update</a>(monitorId, { ...params }) -> Monitor</code>
- <code title="get /accounts/{account_id}/load_balancers/monitors">client.loadBalancers.monitors.<a href="./src/resources/load-balancers/monitors/monitors.ts">list</a>({ ...params }) -> MonitorsSinglePage</code>
- <code title="delete /accounts/{account_id}/load_balancers/monitors/{monitor_id}">client.loadBalancers.monitors.<a href="./src/resources/load-balancers/monitors/monitors.ts">delete</a>(monitorId, { ...params }) -> MonitorDeleteResponse</code>
- <code title="patch /accounts/{account_id}/load_balancers/monitors/{monitor_id}">client.loadBalancers.monitors.<a href="./src/resources/load-balancers/monitors/monitors.ts">edit</a>(monitorId, { ...params }) -> Monitor</code>
- <code title="get /accounts/{account_id}/load_balancers/monitors/{monitor_id}">client.loadBalancers.monitors.<a href="./src/resources/load-balancers/monitors/monitors.ts">get</a>(monitorId, { ...params }) -> Monitor</code>

### Previews

Types:

- <code><a href="./src/resources/load-balancers/monitors/previews.ts">PreviewCreateResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/load_balancers/monitors/{monitor_id}/preview">client.loadBalancers.monitors.previews.<a href="./src/resources/load-balancers/monitors/previews.ts">create</a>(monitorId, { ...params }) -> PreviewCreateResponse</code>

### References

Types:

- <code><a href="./src/resources/load-balancers/monitors/references.ts">ReferenceGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/load_balancers/monitors/{monitor_id}/references">client.loadBalancers.monitors.references.<a href="./src/resources/load-balancers/monitors/references.ts">get</a>(monitorId, { ...params }) -> ReferenceGetResponsesSinglePage</code>

## MonitorGroups

Types:

- <code><a href="./src/resources/load-balancers/monitor-groups/monitor-groups.ts">MonitorGroup</a></code>

Methods:

- <code title="post /accounts/{account_id}/load_balancers/monitor_groups">client.loadBalancers.monitorGroups.<a href="./src/resources/load-balancers/monitor-groups/monitor-groups.ts">create</a>({ ...params }) -> MonitorGroup</code>
- <code title="put /accounts/{account_id}/load_balancers/monitor_groups/{monitor_group_id}">client.loadBalancers.monitorGroups.<a href="./src/resources/load-balancers/monitor-groups/monitor-groups.ts">update</a>(monitorGroupId, { ...params }) -> MonitorGroup</code>
- <code title="get /accounts/{account_id}/load_balancers/monitor_groups">client.loadBalancers.monitorGroups.<a href="./src/resources/load-balancers/monitor-groups/monitor-groups.ts">list</a>({ ...params }) -> MonitorGroupsSinglePage</code>
- <code title="delete /accounts/{account_id}/load_balancers/monitor_groups/{monitor_group_id}">client.loadBalancers.monitorGroups.<a href="./src/resources/load-balancers/monitor-groups/monitor-groups.ts">delete</a>(monitorGroupId, { ...params }) -> MonitorGroup</code>
- <code title="patch /accounts/{account_id}/load_balancers/monitor_groups/{monitor_group_id}">client.loadBalancers.monitorGroups.<a href="./src/resources/load-balancers/monitor-groups/monitor-groups.ts">edit</a>(monitorGroupId, { ...params }) -> MonitorGroup</code>
- <code title="get /accounts/{account_id}/load_balancers/monitor_groups/{monitor_group_id}">client.loadBalancers.monitorGroups.<a href="./src/resources/load-balancers/monitor-groups/monitor-groups.ts">get</a>(monitorGroupId, { ...params }) -> MonitorGroup</code>

### References

Types:

- <code><a href="./src/resources/load-balancers/monitor-groups/references.ts">ReferenceGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/load_balancers/monitor_groups/{monitor_group_id}/references">client.loadBalancers.monitorGroups.references.<a href="./src/resources/load-balancers/monitor-groups/references.ts">get</a>(monitorGroupId, { ...params }) -> ReferenceGetResponsesSinglePage</code>

## Pools

Types:

- <code><a href="./src/resources/load-balancers/pools/pools.ts">Pool</a></code>
- <code><a href="./src/resources/load-balancers/pools/pools.ts">PoolDeleteResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/load_balancers/pools">client.loadBalancers.pools.<a href="./src/resources/load-balancers/pools/pools.ts">create</a>({ ...params }) -> Pool</code>
- <code title="put /accounts/{account_id}/load_balancers/pools/{pool_id}">client.loadBalancers.pools.<a href="./src/resources/load-balancers/pools/pools.ts">update</a>(poolId, { ...params }) -> Pool</code>
- <code title="get /accounts/{account_id}/load_balancers/pools">client.loadBalancers.pools.<a href="./src/resources/load-balancers/pools/pools.ts">list</a>({ ...params }) -> PoolsSinglePage</code>
- <code title="delete /accounts/{account_id}/load_balancers/pools/{pool_id}">client.loadBalancers.pools.<a href="./src/resources/load-balancers/pools/pools.ts">delete</a>(poolId, { ...params }) -> PoolDeleteResponse</code>
- <code title="patch /accounts/{account_id}/load_balancers/pools">client.loadBalancers.pools.<a href="./src/resources/load-balancers/pools/pools.ts">bulkEdit</a>({ ...params }) -> PoolsSinglePage</code>
- <code title="patch /accounts/{account_id}/load_balancers/pools/{pool_id}">client.loadBalancers.pools.<a href="./src/resources/load-balancers/pools/pools.ts">edit</a>(poolId, { ...params }) -> Pool</code>
- <code title="get /accounts/{account_id}/load_balancers/pools/{pool_id}">client.loadBalancers.pools.<a href="./src/resources/load-balancers/pools/pools.ts">get</a>(poolId, { ...params }) -> Pool</code>

### Health

Types:

- <code><a href="./src/resources/load-balancers/pools/health.ts">HealthCreateResponse</a></code>
- <code><a href="./src/resources/load-balancers/pools/health.ts">HealthGetResponse</a></code>

Methods:

- <code title="post /accounts/{account_id}/load_balancers/pools/{pool_id}/preview">client.loadBalancers.pools.health.<a href="./src/resources/load-balancers/pools/health.ts">create</a>(poolId, { ...params }) -> HealthCreateResponse</code>
- <code title="get /accounts/{account_id}/load_balancers/pools/{pool_id}/health">client.loadBalancers.pools.health.<a href="./src/resources/load-balancers/pools/health.ts">get</a>(poolId, { ...params }) -> HealthGetResponse</code>

### References

Types:

- <code><a href="./src/resources/load-balancers/pools/references.ts">ReferenceGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/load_balancers/pools/{pool_id}/references">client.loadBalancers.pools.references.<a href="./src/resources/load-balancers/pools/references.ts">get</a>(poolId, { ...params }) -> ReferenceGetResponsesSinglePage</code>

## Previews

Types:

- <code><a href="./src/resources/load-balancers/previews.ts">PreviewGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/load_balancers/preview/{preview_id}">client.loadBalancers.previews.<a href="./src/resources/load-balancers/previews.ts">get</a>(previewId, { ...params }) -> PreviewGetResponse</code>

## Regions

Types:

- <code><a href="./src/resources/load-balancers/regions.ts">RegionListResponse</a></code>
- <code><a href="./src/resources/load-balancers/regions.ts">RegionGetResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/load_balancers/regions">client.loadBalancers.regions.<a href="./src/resources/load-balancers/regions.ts">list</a>({ ...params }) -> RegionListResponse</code>
- <code title="get /accounts/{account_id}/load_balancers/regions/{region_id}">client.loadBalancers.regions.<a href="./src/resources/load-balancers/regions.ts">get</a>(regionId, { ...params }) -> RegionGetResponse</code>

## Searches

Types:

- <code><a href="./src/resources/load-balancers/searches.ts">SearchListResponse</a></code>

Methods:

- <code title="get /accounts/{account_id}/load_balancers/search">client.loadBalancers.searches.<a href="./src/resources/load-balancers/searches.ts">list</a>({ ...params }) -> SearchListResponsesV4PagePagination</code>
