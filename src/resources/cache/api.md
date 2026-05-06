# Cache

Types:

- <code><a href="./src/resources/cache/cache.ts">CachePurgeResponse</a></code>
- <code><a href="./src/resources/cache/cache.ts">CachePurgeEnvironmentResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/purge_cache">client.cache.<a href="./src/resources/cache/cache.ts">purge</a>({ ...params }) -> CachePurgeResponse | null</code>
- <code title="post /zones/{zone_id}/environments/{environment_id}/purge_cache">client.cache.<a href="./src/resources/cache/cache.ts">purgeEnvironment</a>(environmentId, { ...params }) -> CachePurgeEnvironmentResponse | null</code>

## CacheReserve

Types:

- <code><a href="./src/resources/cache/cache-reserve.ts">CacheReserve</a></code>
- <code><a href="./src/resources/cache/cache-reserve.ts">CacheReserveClear</a></code>
- <code><a href="./src/resources/cache/cache-reserve.ts">State</a></code>
- <code><a href="./src/resources/cache/cache-reserve.ts">CacheReserveClearResponse</a></code>
- <code><a href="./src/resources/cache/cache-reserve.ts">CacheReserveEditResponse</a></code>
- <code><a href="./src/resources/cache/cache-reserve.ts">CacheReserveGetResponse</a></code>
- <code><a href="./src/resources/cache/cache-reserve.ts">CacheReserveStatusResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/cache/cache_reserve_clear">client.cache.cacheReserve.<a href="./src/resources/cache/cache-reserve.ts">clear</a>({ ...params }) -> CacheReserveClearResponse</code>
- <code title="patch /zones/{zone_id}/cache/cache_reserve">client.cache.cacheReserve.<a href="./src/resources/cache/cache-reserve.ts">edit</a>({ ...params }) -> CacheReserveEditResponse</code>
- <code title="get /zones/{zone_id}/cache/cache_reserve">client.cache.cacheReserve.<a href="./src/resources/cache/cache-reserve.ts">get</a>({ ...params }) -> CacheReserveGetResponse</code>
- <code title="get /zones/{zone_id}/cache/cache_reserve_clear">client.cache.cacheReserve.<a href="./src/resources/cache/cache-reserve.ts">status</a>({ ...params }) -> CacheReserveStatusResponse</code>

## SmartTieredCache

Types:

- <code><a href="./src/resources/cache/smart-tiered-cache.ts">SmartTieredCacheCreateResponse</a></code>
- <code><a href="./src/resources/cache/smart-tiered-cache.ts">SmartTieredCacheDeleteResponse</a></code>
- <code><a href="./src/resources/cache/smart-tiered-cache.ts">SmartTieredCacheEditResponse</a></code>
- <code><a href="./src/resources/cache/smart-tiered-cache.ts">SmartTieredCacheGetResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/cache/tiered_cache_smart_topology_enable">client.cache.smartTieredCache.<a href="./src/resources/cache/smart-tiered-cache.ts">create</a>({ ...params }) -> SmartTieredCacheCreateResponse</code>
- <code title="delete /zones/{zone_id}/cache/tiered_cache_smart_topology_enable">client.cache.smartTieredCache.<a href="./src/resources/cache/smart-tiered-cache.ts">delete</a>({ ...params }) -> SmartTieredCacheDeleteResponse</code>
- <code title="patch /zones/{zone_id}/cache/tiered_cache_smart_topology_enable">client.cache.smartTieredCache.<a href="./src/resources/cache/smart-tiered-cache.ts">edit</a>({ ...params }) -> SmartTieredCacheEditResponse</code>
- <code title="get /zones/{zone_id}/cache/tiered_cache_smart_topology_enable">client.cache.smartTieredCache.<a href="./src/resources/cache/smart-tiered-cache.ts">get</a>({ ...params }) -> SmartTieredCacheGetResponse</code>

## Variants

Types:

- <code><a href="./src/resources/cache/variants.ts">CacheVariant</a></code>
- <code><a href="./src/resources/cache/variants.ts">VariantDeleteResponse</a></code>
- <code><a href="./src/resources/cache/variants.ts">VariantEditResponse</a></code>
- <code><a href="./src/resources/cache/variants.ts">VariantGetResponse</a></code>

Methods:

- <code title="delete /zones/{zone_id}/cache/variants">client.cache.variants.<a href="./src/resources/cache/variants.ts">delete</a>({ ...params }) -> VariantDeleteResponse</code>
- <code title="patch /zones/{zone_id}/cache/variants">client.cache.variants.<a href="./src/resources/cache/variants.ts">edit</a>({ ...params }) -> VariantEditResponse</code>
- <code title="get /zones/{zone_id}/cache/variants">client.cache.variants.<a href="./src/resources/cache/variants.ts">get</a>({ ...params }) -> VariantGetResponse</code>

## RegionalTieredCache

Types:

- <code><a href="./src/resources/cache/regional-tiered-cache.ts">RegionalTieredCache</a></code>
- <code><a href="./src/resources/cache/regional-tiered-cache.ts">RegionalTieredCacheEditResponse</a></code>
- <code><a href="./src/resources/cache/regional-tiered-cache.ts">RegionalTieredCacheGetResponse</a></code>

Methods:

- <code title="patch /zones/{zone_id}/cache/regional_tiered_cache">client.cache.regionalTieredCache.<a href="./src/resources/cache/regional-tiered-cache.ts">edit</a>({ ...params }) -> RegionalTieredCacheEditResponse</code>
- <code title="get /zones/{zone_id}/cache/regional_tiered_cache">client.cache.regionalTieredCache.<a href="./src/resources/cache/regional-tiered-cache.ts">get</a>({ ...params }) -> RegionalTieredCacheGetResponse</code>

## OriginCloudRegions

Types:

- <code><a href="./src/resources/cache/origin-cloud-regions.ts">OriginCloudRegion</a></code>
- <code><a href="./src/resources/cache/origin-cloud-regions.ts">OriginCloudRegionDeleteResponse</a></code>
- <code><a href="./src/resources/cache/origin-cloud-regions.ts">OriginCloudRegionBulkDeleteResponse</a></code>
- <code><a href="./src/resources/cache/origin-cloud-regions.ts">OriginCloudRegionBulkUpdateResponse</a></code>
- <code><a href="./src/resources/cache/origin-cloud-regions.ts">OriginCloudRegionSupportedRegionsResponse</a></code>

Methods:

- <code title="put /zones/{zone_id}/origin/cloud_regions/{origin_ip}">client.cache.originCloudRegions.<a href="./src/resources/cache/origin-cloud-regions.ts">update</a>(originIP, { ...params }) -> OriginCloudRegion</code>
- <code title="get /zones/{zone_id}/origin/cloud_regions">client.cache.originCloudRegions.<a href="./src/resources/cache/origin-cloud-regions.ts">list</a>({ ...params }) -> OriginCloudRegionsV4PagePaginationArray</code>
- <code title="delete /zones/{zone_id}/origin/cloud_regions/{origin_ip}">client.cache.originCloudRegions.<a href="./src/resources/cache/origin-cloud-regions.ts">delete</a>(originIP, { ...params }) -> OriginCloudRegionDeleteResponse</code>
- <code title="delete /zones/{zone_id}/origin/cloud_regions/batch">client.cache.originCloudRegions.<a href="./src/resources/cache/origin-cloud-regions.ts">bulkDelete</a>({ ...params }) -> OriginCloudRegionBulkDeleteResponse</code>
- <code title="put /zones/{zone_id}/origin/cloud_regions/batch">client.cache.originCloudRegions.<a href="./src/resources/cache/origin-cloud-regions.ts">bulkUpdate</a>([ ...body ]) -> OriginCloudRegionBulkUpdateResponse</code>
- <code title="get /zones/{zone_id}/origin/cloud_regions/{origin_ip}">client.cache.originCloudRegions.<a href="./src/resources/cache/origin-cloud-regions.ts">get</a>(originIP, { ...params }) -> OriginCloudRegion</code>
- <code title="get /zones/{zone_id}/origin/cloud_regions/supported_regions">client.cache.originCloudRegions.<a href="./src/resources/cache/origin-cloud-regions.ts">supportedRegions</a>({ ...params }) -> OriginCloudRegionSupportedRegionsResponse</code>
