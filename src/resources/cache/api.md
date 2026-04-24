# Cache

Types:

- <code><a href="./src/resources/cache/cache.ts">CachePurgeResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/purge_cache">client.cache.<a href="./src/resources/cache/cache.ts">purge</a>({ ...params }) -> CachePurgeResponse | null</code>

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

- <code><a href="./src/resources/cache/smart-tiered-cache.ts">SmartTieredCacheDeleteResponse</a></code>
- <code><a href="./src/resources/cache/smart-tiered-cache.ts">SmartTieredCacheEditResponse</a></code>
- <code><a href="./src/resources/cache/smart-tiered-cache.ts">SmartTieredCacheGetResponse</a></code>

Methods:

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
- <code><a href="./src/resources/cache/origin-cloud-regions.ts">OriginCloudRegionCreateResponse</a></code>
- <code><a href="./src/resources/cache/origin-cloud-regions.ts">OriginCloudRegionListResponse</a></code>
- <code><a href="./src/resources/cache/origin-cloud-regions.ts">OriginCloudRegionDeleteResponse</a></code>
- <code><a href="./src/resources/cache/origin-cloud-regions.ts">OriginCloudRegionBulkDeleteResponse</a></code>
- <code><a href="./src/resources/cache/origin-cloud-regions.ts">OriginCloudRegionBulkEditResponse</a></code>
- <code><a href="./src/resources/cache/origin-cloud-regions.ts">OriginCloudRegionEditResponse</a></code>
- <code><a href="./src/resources/cache/origin-cloud-regions.ts">OriginCloudRegionGetResponse</a></code>
- <code><a href="./src/resources/cache/origin-cloud-regions.ts">OriginCloudRegionSupportedRegionsResponse</a></code>

Methods:

- <code title="post /zones/{zone_id}/cache/origin_cloud_regions">client.cache.originCloudRegions.<a href="./src/resources/cache/origin-cloud-regions.ts">create</a>({ ...params }) -> OriginCloudRegionCreateResponse</code>
- <code title="get /zones/{zone_id}/cache/origin_cloud_regions">client.cache.originCloudRegions.<a href="./src/resources/cache/origin-cloud-regions.ts">list</a>({ ...params }) -> OriginCloudRegionListResponse</code>
- <code title="delete /zones/{zone_id}/cache/origin_cloud_regions/{origin_ip}">client.cache.originCloudRegions.<a href="./src/resources/cache/origin-cloud-regions.ts">delete</a>(originIP, { ...params }) -> OriginCloudRegionDeleteResponse</code>
- <code title="delete /zones/{zone_id}/cache/origin_cloud_regions/batch">client.cache.originCloudRegions.<a href="./src/resources/cache/origin-cloud-regions.ts">bulkDelete</a>({ ...params }) -> OriginCloudRegionBulkDeleteResponse</code>
- <code title="patch /zones/{zone_id}/cache/origin_cloud_regions/batch">client.cache.originCloudRegions.<a href="./src/resources/cache/origin-cloud-regions.ts">bulkEdit</a>([ ...body ]) -> OriginCloudRegionBulkEditResponse</code>
- <code title="patch /zones/{zone_id}/cache/origin_cloud_regions">client.cache.originCloudRegions.<a href="./src/resources/cache/origin-cloud-regions.ts">edit</a>({ ...params }) -> OriginCloudRegionEditResponse</code>
- <code title="get /zones/{zone_id}/cache/origin_cloud_regions/{origin_ip}">client.cache.originCloudRegions.<a href="./src/resources/cache/origin-cloud-regions.ts">get</a>(originIP, { ...params }) -> OriginCloudRegionGetResponse</code>
- <code title="get /zones/{zone_id}/cache/origin_cloud_regions/supported_regions">client.cache.originCloudRegions.<a href="./src/resources/cache/origin-cloud-regions.ts">supportedRegions</a>({ ...params }) -> OriginCloudRegionSupportedRegionsResponse</code>
